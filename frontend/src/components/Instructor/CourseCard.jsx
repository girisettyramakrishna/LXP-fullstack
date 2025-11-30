// CourseCard.js
import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate(`/course-preview/${course.id}`, { state: { course } });
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-purple-900/60 overflow-hidden group">
      {/* Course Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
        <div className="absolute top-3 right-3 bg-purple-900 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-lg flex items-center gap-1">
          ⭐ {course.rating}
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-900 group-hover:text-purple-900 transition-colors">
          {course.title}
        </h2>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {course.description ||
            "A hands-on learning experience taught by industry experts."}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm bg-purple-100 text-purple-900 px-2 py-1 rounded-md font-medium">
            {course.category}
          </span>
          <span className="font-semibold text-gray-800">
            ${course.price ? course.price.toFixed(2) : "Free"}
          </span>
        </div>

        <button
          onClick={handleEnrollClick}
          className="w-full mt-5 bg-purple-900 text-white py-2 rounded-lg text-sm font-semibold hover:bg-purple-800 transition"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
