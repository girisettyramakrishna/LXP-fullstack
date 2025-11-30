import React, { useState } from "react";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      alert("Please fill out both fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Simulate API call to reset password
    alert("Password reset successfully! You can now log in.");
    // Optionally redirect to login page
    // navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-8 border-t-4 border-purple-900">
        <h2 className="text-2xl font-bold text-purple-800 text-center mb-4">
          Set New Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-purple-900 text-gray-900"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-purple-900 text-gray-900"
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-800 text-white py-2 rounded-lg font-semibold hover:bg-purple-500 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
