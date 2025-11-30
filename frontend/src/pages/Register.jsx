import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AUTH_SIGNUP } from "../api/API.js";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "student",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`;

      const res = await axios.post(
        AUTH_SIGNUP,
        {
          name: fullName,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = res.data;
      alert(data.message || "Registration successful!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "learner",
      });

      navigate("/login");
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.message || "Registration failed.";
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-8 border-t-4 border-purple-900">
        <h2 className="text-2xl font-bold text-purple-900 text-center mb-4">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-purple-900 text-gray-900"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-purple-900 text-gray-900"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-purple-900 text-gray-900"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-purple-900 text-gray-900"
            required
          />

          <div className="relative w-full">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full appearance-none px-5 py-3 text-purple-900 bg-white border border-purple-300 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-700 transition duration-300 hover:shadow-lg cursor-pointer"
              required
            >
              <option value="learner">Student </option>
              <option value="instructor">Instructor</option>
              <option value="organization">Organization Admin</option>
              <option value="admin">Platform Admin</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <svg
                className="w-5 h-5 text-purple-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-900 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 transition-colors disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-purple-900 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
