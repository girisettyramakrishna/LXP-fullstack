import { createSlice } from "@reduxjs/toolkit";
import { fetchInstructorData, updateInstructorBio } from "./instructorThunks";

// 🔹 Redux slice for instructor state
const instructorSlice = createSlice({
  name: "instructor",
  initialState: {
    instructor: null,
    courses: [],
    loading: false,
    error: null,
    success: null, // optional: track update success messages
  },

  reducers: {
    clearMessages: (state) => {
      state.error = null;
      state.success = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // ✅ Fetch instructor data
      .addCase(fetchInstructorData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInstructorData.fulfilled, (state, action) => {
        state.loading = false;
        state.instructor = action.payload.instructor;
        state.courses = action.payload.courses || [];
      })
      .addCase(fetchInstructorData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load instructor data.";
      })

      // ✅ Update instructor bio
      .addCase(updateInstructorBio.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(updateInstructorBio.fulfilled, (state, action) => {
        state.loading = false;
        if (state.instructor) {
          state.instructor.bio = action.payload.bio;
        }
        state.success = "Profile updated successfully!";
      })
      .addCase(updateInstructorBio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update bio.";
      });
  },
});

export const { clearMessages } = instructorSlice.actions;
export default instructorSlice.reducer;
