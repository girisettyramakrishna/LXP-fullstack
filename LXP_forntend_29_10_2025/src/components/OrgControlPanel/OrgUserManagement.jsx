import React, { useState } from "react";

const OrgUserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "Member" },
  ]);

  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      name: `New User ${users.length + 1}`,
      role: "Member",
    };
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <div className="bg-white min-h-screen p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">User Management</h2>
      <p className="text-gray-700 mb-6">
        Manage your organization’s users and their roles.
      </p>

      <button
        onClick={handleAddUser}
        className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 mb-6 transition"
      >
        ➕ Add User
      </button>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-800">
              <th className="border p-2">Name</th>
              <th className="border p-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t hover:bg-gray-50 transition">
                <td className="border p-2 text-gray-800">{u.name}</td>
                <td className="border p-2 text-gray-700">{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrgUserManagement;
