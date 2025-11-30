import React from 'react';
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaStar,
  FaComments,
  FaCertificate,
  FaClock,
  FaUserCheck,
  FaGlobe,
  FaTasks,
} from 'react-icons/fa';

const InstructorStats = ({ stats }) => {
  if (!stats) return null;

  const {
    students = 0,
    courses = 0,
    rating = 0,
    reviews = 0,
    certifications = 0,
    experience = 0,
    activeStudents = 0,
    countries = 0,
    assignments = 0,
  } = stats;

  const statsData = [
    { title: "Students", value: students, icon: <FaUserGraduate className="text-blue-600 text-xl" />, bg: "bg-blue-100" },
    { title: "Courses", value: courses, icon: <FaChalkboardTeacher className="text-green-600 text-xl" />, bg: "bg-green-100" },
    { title: "Avg Rating", value: `⭐ ${rating}`, icon: <FaStar className="text-yellow-500 text-xl" />, bg: "bg-yellow-100" },
    { title: "Reviews", value: reviews, icon: <FaComments className="text-purple-600 text-xl" />, bg: "bg-purple-100" },
    { title: "Certifications", value: certifications, icon: <FaCertificate className="text-red-500 text-xl" />, bg: "bg-red-100" },
    { title: "Experience (Years)", value: experience, icon: <FaClock className="text-indigo-500 text-xl" />, bg: "bg-indigo-100" },
    { title: "Active Students", value: activeStudents, icon: <FaUserCheck className="text-teal-500 text-xl" />, bg: "bg-teal-100" },
    { title: "Countries Reached", value: countries, icon: <FaGlobe className="text-orange-500 text-xl" />, bg: "bg-orange-100" },
    { title: "Assignments Given", value: assignments, icon: <FaTasks className="text-pink-500 text-xl" />, bg: "bg-pink-100" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {statsData.map((item, idx) => (
        <StatCard key={idx} {...item} />
      ))}
    </div>
  );
};

// ✅ Reusable StatCard component
const StatCard = ({ title, value, icon, bg }) => (
  <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md transition">
    <div className={`p-3 rounded-full ${bg}`}>
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-lg font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

export default InstructorStats;
