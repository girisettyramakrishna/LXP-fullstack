import React, { useState } from "react";
import EditProfileModal from "./EditProfileModal";

const InstructorProfile = ({ instructor, onEdit }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex items-center justify-between mb-6">
      <div className="flex items-center">
        <img
          src={instructor.avatar}
          alt={instructor.name}
          className="w-24 h-24 rounded-full object-cover mr-4"
        />
        <div>
          <h2 className="text-2xl font-semibold">{instructor.name}</h2>
          <p className="text-gray-600">{instructor.bio}</p>
        </div>
      </div>

      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Edit Profile
      </button>

      {open && (
        <EditProfileModal
          instructor={instructor}
          onClose={() => setOpen(false)}
          onSave={onEdit}
        />
      )}
    </div>
  );
};

export default InstructorProfile;
