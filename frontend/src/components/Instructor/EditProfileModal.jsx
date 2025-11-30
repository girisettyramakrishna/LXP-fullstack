import React, { useState } from "react";

const EditProfileModal = ({ instructor, onClose, onSave }) => {
  const [bio, setBio] = useState(instructor.bio);

  const handleSubmit = () => {
    onSave({ bio });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
        <textarea
          className="border rounded-md p-2 w-full h-24"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <div className="mt-4 flex justify-end space-x-3">
          <button onClick={onClose} className="px-3 py-1 bg-gray-300 rounded-md">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-3 py-1 bg-blue-600 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
