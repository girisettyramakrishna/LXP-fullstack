import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AUTH_UPDATE_BIO, COURSES_BASE_URL } from "../api/API.js";

/**
 * 🔹 Fetch instructor profile and courses
 */
export const fetchInstructorData = createAsyncThunk(
  "instructor/fetchInstructorData",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return rejectWithValue("No authentication token found");

      const headers = { Authorization: `Bearer ${token}` };

      // ✅ Fetch instructor profile
      const bioRes = await axios.get(AUTH_UPDATE_BIO, { headers });
      const instructorData = bioRes.data?.data || {};

      // ✅ Fetch instructor courses
      const coursesRes = await axios.get(`${COURSES_BASE_URL}/courses`, { headers });

      // ✅ Prepare combined response
      return {
        instructor: {
          name: instructorData.name || "Instructor",
          avatar: instructorData.image
            ? `http://localhost:5000/images/${instructorData.image}`
            : "https://i.pravatar.cc/150?img=12",
          bio: instructorData.bio || "No bio available yet.",
          stats: {
            students: instructorData.students || 0,
            courses: coursesRes.data?.data?.length || 0,
            rating: instructorData.rating || 4.5,
            reviews: instructorData.reviews || 0,
            certifications: instructorData.certifications || 0,
            experience: instructorData.experience || 0,
            activeStudents: instructorData.activeStudents || 0,
            countries: instructorData.countries || 0,
            assignments: instructorData.assignments || 0,
          },
        },
        courses: coursesRes.data?.data || [],
      };
    } catch (error) {
      console.error("❌ Error fetching instructor data:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch instructor data"
      );
    }
  }
);

/**
 * 🔹 Update instructor bio
 */
export const updateInstructorBio = createAsyncThunk(
  "instructor/updateInstructorBio",
  async (updatedProfile, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return rejectWithValue("No authentication token found");

      const headers = { Authorization: `Bearer ${token}` };
      const payload = { bio: updatedProfile.bio };

      await axios.put(AUTH_UPDATE_BIO, payload, { headers });

      return payload; // Returns { bio: "new bio text" }
    } catch (error) {
      console.error("❌ Error updating instructor bio:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to update bio"
      );
    }
  }
);
