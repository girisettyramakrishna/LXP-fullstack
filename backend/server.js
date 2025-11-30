
// server.js

import express from "express";
import dotenv from "dotenv";
import Redis from "ioredis";
import pool from "./config/dbConfig.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandling } from "./middleware/errorHandler.js";
import createUserTable from "./data/createUserTable.js";
import createCourseTable from "./data/createCourseTable.js";
import createModuleTable from "./data/createModuleTable.js";
import course_router from "./routes/courseRoutes.js";
import { instructor, verifyToken } from "./middleware/authMiddleware.js";
import assignmentRoutes from "./routes/assignmentRoutes.js";
import cretateAssignmentTable from "./data/createAssignmenttable.js";
import cretateOTPtable from "./data/createOTPtable.js";
import otp_router from "./routes/otpRoutes.js";
import createTokenTable from "./data/createTokentable.js";
import module_router from "./routes/moduleRoutes.js";
import cretateVideostable from "./data/createVideostable.js";
import video_router from "./routes/videosRouter.js";
import createFileTable from "./data/createFileTable.js";
import createPPTTable from "./data/createPPTTable.js";
import cretateQuestionsTable from "./data/createQuestionsTable.js";
import createEnrollTable from "./data/createEnrolltable.js";
import EntrollRouter from "./routes/enrollRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();

// ✅ CORS configuration
app.use(
  cors({
    origin: ["http://localhost:5174"], // your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true, // if using cookies or auth headers
  })
);


const redis = new Redis({
  host: process.env.REDIS_HOST || "redis",
  port: parseInt(process.env.REDIS_PORT || "6379", 10),
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/auth", userRoutes);
app.use("/otp", otp_router);
app.use("/courses", verifyToken, instructor, course_router);
app.use("/assignments", verifyToken, assignmentRoutes);
app.use("/module", verifyToken, instructor, module_router);
app.use("/videos", verifyToken, instructor, video_router);
app.use("/enroll", verifyToken, EntrollRouter);

// Error handling middleware
app.use(errorHandling);

// --------------------------------------
// Sequential Table Creation
// --------------------------------------
(async () => {
  try {
    await createUserTable();
    await createCourseTable();
    await createModuleTable();
    await cretateAssignmentTable();
    await cretateOTPtable();
    await createTokenTable();
    await cretateVideostable();
    await createFileTable();
    await createPPTTable();
    await cretateQuestionsTable();
    await createEnrollTable();

    console.log("✅ All tables created successfully!");
  } catch (err) {
    console.error("❌ Error creating tables:", err.message);
  }
})();

// --------------------------------------
// Test Routes
// --------------------------------------
app.get("/health", (req, res) => res.json({ status: "OK" }));

app.get("/cache", async (req, res) => {
  const datatoCache = { message: "It's working" };
  await redis.set("key1", JSON.stringify(datatoCache));
  res.send("Data cached");
});

app.get("/getCache", async (req, res) => {
  const getData = await redis.get("key1");
  res.send(getData);
});

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  res.send(`The database name is: ${result.rows[0].current_database}`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
