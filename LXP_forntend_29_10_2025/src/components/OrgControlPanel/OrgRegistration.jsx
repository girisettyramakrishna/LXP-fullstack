import React, { useState } from "react";

const OrgRegistration = () => {
  const [formData, setFormData] = useState({
    orgName: "",
    adminName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="bg-white min-h-screen p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Organization Registration</h2>
      <p className="text-gray-600 mb-4">
        Register your organization to start managing teams and subscriptions.
      </p>

      <form className="space-y-4">
        {["orgName", "adminName", "email", "password"].map((field) => (
          <input
            key={field}
            type={field === "password" ? "password" : "text"}
            name={field}
            placeholder={
              field === "orgName"
                ? "Organization Name"
                : field === "adminName"
                ? "Admin Name"
                : field === "email"
                ? "Email Address"
                : "Password"
            }
            value={formData[field]}
            onChange={handleChange}
            className="border p-3 rounded-md w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        ))}

        <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
          Register
        </button>
      </form>
    </div>
  );
};

export default OrgRegistration;
