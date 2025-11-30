import axios from "axios";
import { AUTH_UPDATE_BIO, COURSES_BASE_URL } from "./API";

// =========================
// 👨‍🏫 INSTRUCTOR API SERVICES
// =========================

// Fetch instructor profile/bio
export const fetchInstructorBio = async (token) => {
  const headers = { Authorization: `Bearer ${token}` };
  const res = await axios.get(AUTH_UPDATE_BIO, { headers });
  return res.data?.data || {};
};

// Update instructor bio
export const updateInstructorBio = async (token, bioData) => {
  const headers = { Authorization: `Bearer ${token}` };
  const res = await axios.put(AUTH_UPDATE_BIO, bioData, { headers });
  return res.data;
};

// Fetch instructor’s courses
export const fetchInstructorCourses = async (token) => {
  const headers = { Authorization: `Bearer ${token}` };
  const res = await axios.get(`${COURSES_BASE_URL}/courses`, { headers });
  return res.data?.data || [];
};
