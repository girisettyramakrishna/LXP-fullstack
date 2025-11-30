import React from 'react';
import { FaLinkedin, FaTwitter, FaStar, FaUserGraduate } from 'react-icons/fa';

const InstructorHeader = ({ instructor }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow border border-gray-200 mb-10">
      <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
        {/* Avatar */}
        <div className="avatar">
          <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-md">
            <img src={instructor.avatar} alt={instructor.name} />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{instructor.name}</h1>
          <p className="text-md text-gray-500 mt-1">{instructor.title}</p>
          <p className="text-gray-700 mt-3 leading-relaxed max-w-2xl">{instructor.bio}</p>

          {/* Social & Credibility */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <FaUserGraduate className="text-blue-500" /> {instructor.stats?.students.toLocaleString()} students
              </span>
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-500" /> {instructor.stats?.rating} rating
              </span>
            </div>

            <div className="flex gap-3">
              {instructor.social?.linkedin && (
                <a
                  href={instructor.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline btn-info flex items-center gap-2"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              )}
              {instructor.social?.twitter && (
                <a
                  href={instructor.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline btn-accent flex items-center gap-2"
                >
                  <FaTwitter /> Twitter
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorHeader;
