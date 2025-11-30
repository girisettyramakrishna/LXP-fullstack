// =========================
// 🌐 BASE URL CONFIG
// =========================
export const API_BASE = "http://localhost:5000";

export const AUTH_BASE_URL = `${API_BASE}/auth`;
export const COURSES_BASE_URL = `${API_BASE}/courses`;
export const MODULE_BASE_URL = `${API_BASE}/module`;
export const VIDEOS_BASE_URL = `${API_BASE}/videos`;

// =========================
// 🔐 AUTH ENDPOINTS
// =========================
export const AUTH_LOGIN = `${AUTH_BASE_URL}/login`;
export const AUTH_SIGNUP = `${AUTH_BASE_URL}/user`;
export const AUTH_UPDATE_BIO = `${AUTH_BASE_URL}/bio`;
export const AUTH_UPDATE_IMAGE = `${AUTH_BASE_URL}/image`;

// =========================
// 🎓 COURSES & MODULES
// =========================

// ➕ Create Course
export const COURSES_CREATE = `${COURSES_BASE_URL}/courses`;

// 🔍 Get Course by ID
export const courseById = (courseId) =>
  `${COURSES_BASE_URL}/courses/${encodeURIComponent(courseId)}`;

// ➕ Create Module under a Course
export const moduleCreate = (courseId) =>
  `${MODULE_BASE_URL}/modules/${encodeURIComponent(courseId)}`;

// =========================
// 🎥 VIDEOS
// =========================

// ⬆️ Upload multiple videos
export const uploadVideosBatch = (courseId, moduleId) =>
  `${VIDEOS_BASE_URL}/upload-batch/${encodeURIComponent(courseId)}/${encodeURIComponent(moduleId)}`;

// ▶️ Stream a single video
export const streamVideo = (filename) =>
  `${VIDEOS_BASE_URL}/stream/${encodeURIComponent(filename)}`;

// 📂 Get all videos under a module
export const allVideos = (courseId, moduleId) =>
  `${VIDEOS_BASE_URL}/all_videos/${encodeURIComponent(courseId)}/${encodeURIComponent(moduleId)}`;

// ✏️ Update video metadata/details
export const updateVideo = (videoId, courseId, moduleId) =>
  `${VIDEOS_BASE_URL}/update_video/${encodeURIComponent(videoId)}/${encodeURIComponent(courseId)}/${encodeURIComponent(moduleId)}`;

// =========================
// ✅ EXPORT ALL
// =========================
export default {
  API_BASE,
  AUTH_BASE_URL,
  COURSES_BASE_URL,
  MODULE_BASE_URL,
  VIDEOS_BASE_URL,
  AUTH_LOGIN,
  AUTH_SIGNUP,
  AUTH_UPDATE_BIO,
  AUTH_UPDATE_IMAGE,
  COURSES_CREATE,
  courseById,
  moduleCreate,
  uploadVideosBatch,
  streamVideo,
  allVideos,
  updateVideo,
};
