import express from 'express';
import { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse } from '../controllers/courseController.js';

const course_router = express.Router();
course_router.post("/courses", createCourse);
course_router.get("/courses", getAllCourses);
course_router.get("/courses/:id", getCourseById);
course_router.put("/courses/:id", updateCourse);
course_router.delete("/courses/:id", deleteCourse);
export default course_router;