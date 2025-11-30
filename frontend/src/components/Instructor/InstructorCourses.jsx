// InstructorCourses.js
import React from 'react';
import CourseCard from './CourseCard';

const InstructorCourses = ({ courses }) => {
  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-purple-900 mb-8 text-center">
          Courses by this Instructor
        </h3>

        {courses.length === 0 ? (
          <p className="text-center text-gray-600">No courses found.</p>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructorCourses;
