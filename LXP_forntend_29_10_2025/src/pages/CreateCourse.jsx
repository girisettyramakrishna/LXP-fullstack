import React, { useState } from "react";
import Button from "../components/ui/Button";
import FileUpload from "../components/ui/FileUpload";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { COURSES_CREATE } from "../api/API.js";

export default function CreateCourse() {
  const navigate = useNavigate();

  const fontOptions = [
    "Poppins",
    "Roboto",
    "Montserrat",
    "Open Sans",
    "Lato",
    "Nunito",
  ];
  const contentTypes = ["General", "Technical", "Non-Technical"];

  const streamsByContentType = {
    General: [
      "Communication Skills",
      "Leadership & Management",
      "Business Fundamentals",
      "Workplace Ethics",
      "Time Management",
      "Personal Development",
      "Customer Service",
      "Compliance & Policies",
      "Health & Safety",
      "Diversity & Inclusion",
      "Others (General)",
    ],
    Technical: [
      "Software Development / Programming",
      "Data Science & Analytics",
      "Cybersecurity",
      "Cloud Computing",
      "Networking & Infrastructure",
      "Artificial Intelligence / Machine Learning",
      "DevOps & Automation",
      "IT Support & Helpdesk",
      "Engineering & Manufacturing",
      "Database Management",
      "Others (Technical)",
    ],
    "Non-Technical": [
      "Soft Skills (Emotional Intelligence, Teamwork)",
      "Sales & Marketing",
      "Human Resources",
      "Project Management",
      "Finance & Accounting",
      "Legal & Regulatory Training",
      "Conflict Resolution",
      "Coaching & Mentoring",
      "Creative Thinking & Innovation",
      "Change Management",
      "Others (Non-Technical)",
    ],
  };

  const [courseData, setCourseData] = useState({
    title: "",
    subtitle: "",
    category: "",
    subcategory: "",
    language: "",
    price: "",
    description: "",
    thumbnail: null,
    previewVideo: null,
    curriculum: [
      {
        section: "Introduction",
        lectures: [
          {
            title: "",
            video: null,
            mediaType: "video",
            readingMaterial: null,
            codeFiles: null,
          },
        ],
      },
    ],
  });

  const [fontSettings, setFontSettings] = useState({
    title: { family: "Poppins", size: "text-xl", weight: "font-bold" },
    subtitle: { family: "Roboto", size: "text-base", weight: "font-normal" },
    description: { family: "Roboto", size: "text-base", weight: "font-normal" },
  });

  const [contentType, setContentType] = useState("General");
  const [selectedStream, setSelectedStream] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (sectionIndex, lectureIndex, file, field = "video") => {
    const newCurriculum = [...courseData.curriculum];
    if (sectionIndex !== null && lectureIndex !== null) {
      newCurriculum[sectionIndex].lectures[lectureIndex][field] = file;
      setCourseData((prev) => ({ ...prev, curriculum: newCurriculum }));
    } else {
      setCourseData((prev) => ({
        ...prev,
        thumbnail: file,
        previewVideo: file,
      }));
    }
  };

  const handleFontChange = (field, type, value) => {
    setFontSettings((prev) => ({
      ...prev,
      [field]: { ...prev[field], [type]: value },
    }));
  };

  const addSection = () => {
    setCourseData((prev) => ({
      ...prev,
      curriculum: [
        ...prev.curriculum,
        {
          section: "",
          lectures: [
            {
              title: "",
              video: null,
              mediaType: "video",
              readingMaterial: null,
              codeFiles: null,
            },
          ],
        },
      ],
    }));
  };

  const addLecture = (sectionIndex) => {
    const newCurriculum = [...courseData.curriculum];
    newCurriculum[sectionIndex].lectures.push({
      title: "",
      video: null,
      mediaType: "video",
      readingMaterial: null,
      codeFiles: null,
    });
    setCourseData((prev) => ({ ...prev, curriculum: newCurriculum }));
  };

  const handleLectureChange = (sectionIndex, lectureIndex, field, value) => {
    const newCurriculum = [...courseData.curriculum];
    newCurriculum[sectionIndex].lectures[lectureIndex][field] = value;
    setCourseData((prev) => ({ ...prev, curriculum: newCurriculum }));
  };

  const handleSubmit = async () => {
    if (!courseData.title || !courseData.description) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);
    const token = localStorage.getItem("token");

    try {
      const formData = new FormData();
      formData.append("title", courseData.title);
      formData.append("subtitle", courseData.subtitle);
      formData.append("category", contentType);
      formData.append("stream", selectedStream);
      formData.append("description", courseData.description);
      formData.append("language", courseData.language);
      formData.append("price", courseData.price);
      if (courseData.thumbnail)
        formData.append("thumbnail", courseData.thumbnail);
      if (courseData.previewVideo)
        formData.append("previewVideo", courseData.previewVideo);
      formData.append("curriculum", JSON.stringify(courseData.curriculum));

      const res = await axios.post(COURSES_CREATE, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      alert(res.data.message || "✅ Course created successfully!");
      console.log("Course Created:", res.data);
    } catch (err) {
      console.error("Course creation error:", err);
      const msg = err.response?.data?.message || "❌ Failed to create course";
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  const FontToolbar = ({ field }) => (
    <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-md mb-2 text-sm">
      <select
        value={fontSettings[field].family}
        onChange={(e) => handleFontChange(field, "family", e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 bg-white text-black"
      >
        {fontOptions.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>

      <select
        value={fontSettings[field].size}
        onChange={(e) => handleFontChange(field, "size", e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 bg-white text-black"
      >
        <option value="text-sm">Small</option>
        <option value="text-base">Medium</option>
        <option value="text-lg">Large</option>
        <option value="text-xl">Extra Large</option>
      </select>

      <select
        value={fontSettings[field].weight}
        onChange={(e) => handleFontChange(field, "weight", e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 bg-white text-black"
      >
        <option value="font-normal">Normal</option>
        <option value="font-semibold">Semi Bold</option>
        <option value="font-bold">Bold</option>
        <option value="italic">Italic</option>
      </select>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-white flex justify-center items-start py-10">
      <div className="text-black px-6 py-8 w-full max-w-5xl bg-white rounded-2xl shadow-md border border-gray-200">
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-900">
          🎓 Create Your New Course
        </h1>

        {/* Content Type */}
        <div className="mb-6">
          <label className="block mb-1 font-semibold">Content Type</label>
          <select
            value={contentType}
            onChange={(e) => {
              setContentType(e.target.value);
              setSelectedStream("");
            }}
            className="w-full border px-3 py-2 rounded bg-white text-black max-h-32 overflow-y-auto"
          >
            {contentTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Stream */}
        <div className="mb-6">
          <label className="block mb-1 font-semibold">Stream</label>
          <select
            value={selectedStream}
            onChange={(e) => setSelectedStream(e.target.value)}
            className="w-full border px-3 py-2 rounded bg-white text-black"
          >
            <option value="" disabled>
              Select a stream
            </option>
            {streamsByContentType[contentType].map((stream) => (
              <option key={stream} value={stream}>
                {stream}
              </option>
            ))}
          </select>
        </div>

        {/* Course Info */}
        <FontToolbar field="title" />
        <div className="bg-white p-4 rounded-lg mb-4 border border-gray-300">
          <label className="block mb-1 font-semibold">Course Title</label>
          <input
            name="title"
            value={courseData.title}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded bg-white text-black"
          />
        </div>

        <FontToolbar field="subtitle" />
        <div className="bg-white p-4 rounded-lg mb-4 border border-gray-300">
          <label className="block mb-1 font-semibold">
            Subtitle / Short Description
          </label>
          <input
            name="subtitle"
            value={courseData.subtitle}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded bg-white text-black"
          />
        </div>

        <FontToolbar field="description" />
        <div className="bg-white p-4 rounded-lg mb-4 border border-gray-300">
          <label className="block mb-1 font-semibold">
            Detailed Description
          </label>
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded bg-white text-black"
          />
        </div>

        <FileUpload
          label="Upload Thumbnail"
          onFileSelect={(file) => handleFileChange(null, null, file)}
        />
        <FileUpload
          label="Upload Preview Video"
          onFileSelect={(file) => handleFileChange(null, null, file)}
        />

        {/* Curriculum Section */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-purple-900">
          Curriculum
        </h2>

        {courseData.curriculum.map((section, sIdx) => (
          <div key={sIdx} className="mb-6 p-4 border rounded-lg bg-white text-black">
            <label className="block mb-1 font-semibold">
              Module {sIdx + 1} Title
            </label>
            <input
              value={section.section}
              onChange={(e) => {
                const newCurriculum = [...courseData.curriculum];
                newCurriculum[sIdx].section = e.target.value;
                setCourseData((prev) => ({
                  ...prev,
                  curriculum: newCurriculum,
                }));
              }}
              className="w-full border px-3 py-2 rounded bg-white text-black"
            />

            {section.lectures.map((lec, lIdx) => (
              <div key={lIdx} className="ml-4 mt-3">
                <label className="block mb-1 font-semibold">
                  Lecture {lIdx + 1} Title
                </label>
                <input
                  value={lec.title}
                  onChange={(e) =>
                    handleLectureChange(sIdx, lIdx, "title", e.target.value)
                  }
                  className="w-full border px-3 py-2 rounded bg-white text-black"
                />

                <FileUpload
                  label="Upload Video (MP4 only)"
                  accept=".mp4"
                  onFileSelect={(file) => handleFileChange(sIdx, lIdx, file)}
                />

                {lec.video && (
                  <>
                    <FileUpload
                      label="Upload Reading Material (PDF, PPT)"
                      accept=".pdf,.ppt,.pptx"
                      onFileSelect={(file) =>
                        handleFileChange(sIdx, lIdx, file, "readingMaterial")
                      }
                    />

                    {contentType === "Technical" && (
                      <FileUpload
                        label="Upload Code Files (ZIP, JS, PY)"
                        accept=".zip,.js,.ts,.py,.cpp,.java,.json"
                        onFileSelect={(file) =>
                          handleFileChange(sIdx, lIdx, file, "codeFiles")
                        }
                      />
                    )}

                    {/* Upload Quiz Redirect */}
                    <button
                      type="button"
                      onClick={() => navigate("/upload-quiz")}
                      className="mt-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-lg font-semibold hover:bg-purple-200 transition"
                    >
                      ➕ Upload Quiz
                    </button>
                  </>
                )}

                <Button
                  label="Add Lecture"
                  onClick={() => addLecture(sIdx)}
                  className="mt-2 bg-purple-400 hover:bg-purple-500 text-white"
                />
              </div>
            ))}

            <Button
              label="Add Section"
              onClick={addSection}
              className="mt-4 bg-purple-400 hover:bg-purple-500 text-white"
            />
            <Button
              label={loading ? "Creating..." : "Create Course"}
              onClick={handleSubmit}
              disabled={loading}
              className="mt-6 bg-purple-900 hover:bg-purple-800 text-white"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
