import {
  CreateVideoModel,
  DeleteVideoModel,
  GetAllVideosModel,
  UpdateVideoModel,
} from "../models/videosModel.js";
import { bucketName, minioClient } from "../config/MinIoConfig.js";
import fs from "fs";
import ffmpeg from "../config/ffmpegconfig.js";
import pool from "../config/dbConfig.js";
import { getCourseByIdService } from "../models/courseModel.js";
import { getUserByEmailService } from "../models/userModel.js";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export const UploadVdieos = async (req, res) => {
  const client = await pool.connect();
  const upload_names = [];

  try {
    const files = req.files["files"];
    const video = req.files["video"]?.[0];
    const ppt = req.files["ppt"]?.[0];
    const questions = JSON.parse(req.body.questions);
    const { course_id, module_id } = req.params;

    if ((!files || files.length === 0) && !video && !ppt) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    await client.query("BEGIN");
    const video_file_path = video.path;
    const video_file_name = video.originalname;
    const video_minio_name = `${uuidv4()}_${video_file_name}`;
    await minioClient.fPutObject(bucketName, video_minio_name, video_file_path);
    upload_names.push({ bucketName: bucketName, fileName: video_minio_name });

    let duration = 0.0;
    try {
      const metadata = await new Promise((resolve) => {
        ffmpeg.ffprobe(video_file_path, (err, meta) => {
          if (err) return resolve(null);
          resolve(meta);
        });
      });

      if (metadata?.format?.duration) {
        duration = metadata.format.duration;
      }
    } catch {
      duration = 0;
    }
    const videoInsert = await client.query(
      `INSERT INTO Videos(course_id, module_id, video_name, video_bucket_name,duration)
         VALUES ($1, $2, $3, $4,$5)
         RETURNING id`,
      [course_id, module_id, video_file_name, video_minio_name, duration]
    );

    const video_id = videoInsert.rows[0].id;

    fs.unlinkSync(video_file_path);

    for (const file of files) {
      const file_path = file.path;
      const file_name = file.originalname;
      const file_minio_name = `${uuidv4()}_${file_name}`;
      await minioClient.fPutObject("files", file_minio_name, file_path);
      await client.query(
        `INSERT INTO Files_Table(video_id, file_name, file_bucket_name)
           VALUES ($1, $2, $3)`,
        [video_id, file_name, file_minio_name]
      );
      upload_names.push({ bucketName: "files", fileName: file_minio_name });
      fs.unlinkSync(file_path);
    }

    const ppt_name = ppt.originalname;
    const ppt_path = ppt.path;
    const ppt_minio_name = `${uuidv4()}_${ppt_name}`;
    await minioClient.fPutObject("ppt", ppt_minio_name, ppt_path);
    await client.query(
      `INSERT INTO PPT_Table(video_id, ppt_name, ppt_bucket_name)
           VALUES ($1, $2, $3)`,
      [video_id, ppt_name, ppt_minio_name]
    );
    fs.unlinkSync(ppt_path);

    upload_names.push({ bucketName: "ppt", fileName: ppt_minio_name });
    const insertQuery = `
      INSERT INTO questions ("course_id","module_id","video_id","question", "option1", "option2", "option3", "option4", "right_answer")
      VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9)
      RETURNING *;
    `;

    const results = [];
    for (const q of questions) {
      const values = [
        course_id,
        module_id,
        video_id,
        q.Question || q["Question"],
        q.Option1 || q["Option 1"],
        q.Option2 || q["Option 2"],
        q.Option3 || q["Option 3"],
        q.Option4 || q["Option 4"],
        q.RightAnswer || q["Right Answer"],
      ];
      const { rows } = await client.query(insertQuery, values);
      results.push(rows[0]);
    }
    await client.query("COMMIT");
    res.status(200).json({
      message: "All files uploaded successfully",
    });
  } catch (err) {
    console.error("Transaction failed:", err);
    await client.query("ROLLBACK");

    if (upload_names.length > 0) {
      upload_names.map(async (upload) => {
        try {
          await minioClient.removeObject(upload.bucketName, upload.fileName);
        } catch (e) {
          console.warn(
            `Failed to remove ${upload.fileName} from MinIO:`,
            e.message
          );
        }
      });
    }
    res.status(500).json({
      message: "Batch upload failed, transaction rolled back",
      error: err.message,
    });
  } finally {
    client.release();
  }
};

export const StreamVideo = async (req, res) => {
  try {
    const { filename } = req.params;

    const videoStream = await minioClient.getObject(bucketName, filename);

    res.setHeader("Content-Type", "video/mp4");
    res.setHeader("Accept-Ranges", "bytes");

    ffmpeg(videoStream)
      .format("mp4")
      .videoCodec("libx264")
      .audioCodec("aac")
      .outputOptions(["-movflags frag_keyframe+empty_moov"])
      .on("start", (cmd) => console.log("FFmpeg started:", cmd))
      .on("error", (err) => {
        console.error("FFmpeg error:", err);
        res.status(500).end("Streaming failed");
      })
      .on("end", () => {
        console.log("Streaming completed");
      })
      .pipe(res, { end: true });
  } catch (error) {
    console.error("Streaming error:", error);
    res
      .status(500)
      .json({ message: "Error streaming video", error: error.message });
  }
};

export const GetAllVideosService = async (req, res) => {
  try {
    const { course_id, module_id } = req.params;
    const results = await GetAllVideosModel(course_id, module_id);
    if (!results) {
      return res.status(204).json({ message: "No data" });
    }
    return res.status(200).json(results);
  } catch (error) {
    return res.status(404).json({ error });
  }
};

export const UpdateVideoService = async (req, res) => {
  try {
    const title = req.body.title;
    const { id, course_id, module_id } = req.params;
    const email = req.user.user_email;

    const course = await getCourseByIdService(course_id);
    const user = await getUserByEmailService(email);

    if (course.user_id == user.id) {
      const result = await UpdateVideoModel(id, course_id, module_id, title);
      if (!result) {
        return res.status(204).json({ message: "There is No data found" });
      }
      return res.status(200).json({ result });
    }
    return res.status(403).json({ message: "Your not authorized" });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error });
  }
};

export const DeleteVideoService = async (req, res) => {
  try {
    const { id, course_id, module_id } = req.params;
    const email = req.user.user_email;

    const course = await getCourseByIdService(course_id);
    const user = await getUserByEmailService(email);

    if (course.user_id == user.id) {
      const result = await DeleteVideoModel(id, course_id, module_id);
      if (!result) {
        return res.status(204).json({ message: "There is No data found" });
      }
      return res.status(200).json({ result });
    }
    return res.status(403).json({ message: "Your not authorized" });
  } catch (error) {
    return res.status(404).json({ error });
  }
};
