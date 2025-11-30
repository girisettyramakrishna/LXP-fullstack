import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    enrolledCourses: 3,
    image: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    image: user.image,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
    }
  };

  const handleImageDelete = () => {
    setFormData((prev) => ({
      ...prev,
      image: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    }));
  };

  const handleSave = () => {
    setUser({ ...user, ...formData });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-50 flex justify-center items-start pt-10">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-purple-900 text-center">
          User Profile
        </h2>

        <div className="flex flex-col items-center mb-6">
          <img
            src={user.image}
            alt={user.name}
            className="w-32 h-32 rounded-full border-4 border-purple-700 mb-2 object-cover shadow-lg"
          />
          <p className="text-sm text-gray-700">
            Click edit to change or delete image
          </p>
        </div>

        <div className="space-y-2 mb-6 text-gray-800">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Enrolled Courses:</strong> {user.enrolledCourses}
          </p>
        </div>

        <button
          onClick={() => setIsEditing(true)}
          className="w-full py-2 bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-xl font-semibold shadow-md hover:shadow-xl transform hover:scale-105 transition"
        >
          Edit Profile
        </button>

        {isEditing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="bg-white rounded-3xl p-8 w-96 shadow-2xl relative text-gray-800"
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-900 text-center">
                Edit Profile
              </h3>

              {/* Image Upload & Delete */}
              <div className="flex flex-col items-center mb-6">
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-28 h-28 rounded-full mb-3 border-4 border-purple-500 shadow-md object-cover"
                />
                <div className="flex gap-3 w-full justify-center">
                  {/* Upload Button */}
                  <label className="px-4 py-2 bg-green-600 text-white rounded-xl cursor-pointer hover:bg-green-700 shadow-md transition">
                    Upload Image
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                  {/* Delete Button */}
                  <button
                    onClick={handleImageDelete}
                    className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 shadow-md transition"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Name & Email */}
              <div className="mb-4">
                <label className="block mb-1 font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-1 font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-5 py-2 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-5 py-2 bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-xl font-semibold shadow-md hover:shadow-xl transform hover:scale-105 transition"
                >
                  Save
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
