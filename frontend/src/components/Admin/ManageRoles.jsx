import React, { useState } from "react";
import { Eye, EyeOff, Edit, Trash2, Save, X } from "lucide-react";

const ManageRoles = () => {
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: "Org Instructor",
      users: [
        { id: 1, fullName: "John Doe", email: "john@lxp.com", password: "123456" },
        { id: 2, fullName: "Jane Smith", email: "jane@lxp.com", password: "abcdef" },
        { id: 3, fullName: "Robert Brown", email: "rob@lxp.com", password: "password" },
        { id: 4, fullName: "Lisa Green", email: "lisa@lxp.com", password: "react123" },
      ],
    },
    { id: 2, name: "Org Moderator", users: [] },
    { id: 3, name: "Org Reviewer", users: [] },
  ]);

  const [editingUserId, setEditingUserId] = useState(null);
  const [editableUser, setEditableUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleEdit = (user, roleId) => {
    setEditingUserId(user.id);
    setEditableUser({ ...user, roleId });
    setShowPassword(false);
  };

  const handleCancelEdit = () => {
    setEditingUserId(null);
    setEditableUser(null);
    setShowPassword(false);
  };

  const handleSave = () => {
    if (!editableUser.fullName || !editableUser.email || !editableUser.password) return;

    const updatedRoles = roles.map((role) =>
      role.id === editableUser.roleId
        ? {
            ...role,
            users: role.users.map((u) =>
              u.id === editableUser.id ? editableUser : u
            ),
          }
        : role
    );

    setRoles(updatedRoles);
    setEditingUserId(null);
    setEditableUser(null);
    setShowPassword(false);
  };

  const handleDelete = (roleId, userId) => {
    const updatedRoles = roles.map((role) =>
      role.id === roleId
        ? { ...role, users: role.users.filter((u) => u.id !== userId) }
        : role
    );
    setRoles(updatedRoles);
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-purple-900 mb-8">
          Manage Roles & Credentials
        </h2>

        {roles.map((role) => (
          <div key={role.id} className="mb-12">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-2xl font-semibold text-purple-800">
                {role.name}
              </h3>
            </div>

            {role.users.length > 0 ? (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                style={{ gridAutoRows: "min-content" }}
              >
                {role.users.map((user) => {
                  const isEditing = editingUserId === user.id;
                  return (
                    <div
                      key={user.id}
                      className={`self-start border rounded-2xl shadow-md transition-all duration-300 p-5 flex flex-col justify-between bg-gradient-to-br from-white to-purple-50 hover:shadow-lg ${
                        isEditing
                          ? "scale-105 border-2 border-purple-700 bg-purple-50/80 shadow-purple-200 z-10"
                          : "border-purple-100"
                      }`}
                      style={{
                        minHeight: isEditing ? "280px" : "200px",
                        position: "relative",
                      }}
                    >
                      {isEditing ? (
                        <>
                          <input
                            type="text"
                            value={editableUser.fullName}
                            onChange={(e) =>
                              setEditableUser({
                                ...editableUser,
                                fullName: e.target.value,
                              })
                            }
                            className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-900 outline-none text-gray-800"
                            placeholder="Full Name"
                          />
                          <input
                            type="email"
                            value={editableUser.email}
                            onChange={(e) =>
                              setEditableUser({
                                ...editableUser,
                                email: e.target.value,
                              })
                            }
                            className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-900 outline-none text-gray-800"
                            placeholder="Email"
                          />
                          <div className="relative mb-3">
                            <input
                              type={showPassword ? "text" : "password"}
                              value={editableUser.password}
                              onChange={(e) =>
                                setEditableUser({
                                  ...editableUser,
                                  password: e.target.value,
                                })
                              }
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-900 outline-none text-gray-800"
                              placeholder="Password"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-2.5 text-gray-500 hover:text-purple-900"
                            >
                              {showPassword ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                            </button>
                          </div>

                          <div className="flex justify-between mt-2">
                            <button
                              onClick={handleSave}
                              className="flex items-center gap-1 bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 text-sm transition"
                            >
                              <Save size={14} /> Save
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="flex items-center gap-1 bg-gray-500 text-white px-3 py-1.5 rounded-lg hover:bg-gray-600 text-sm transition"
                            >
                              <X size={14} /> Cancel
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-1 truncate">
                              {user.fullName}
                            </h4>
                            <p className="text-gray-700 text-sm truncate mb-1">
                              {user.email}
                            </p>
                            <p className="text-gray-800 font-medium text-sm">
                              Password: <span className="text-gray-500">••••••</span>
                            </p>
                          </div>

                          <div className="flex justify-between mt-4">
                            <button
                              onClick={() => handleEdit(user, role.id)}
                              className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1.5 rounded-lg hover:bg-yellow-600 text-sm transition"
                            >
                              <Edit size={14} /> Edit
                            </button>
                            <button
                              onClick={() => handleDelete(role.id, user.id)}
                              className="flex items-center gap-1 bg-red-600 text-white px-3 py-1.5 rounded-lg hover:bg-red-700 text-sm transition"
                            >
                              <Trash2 size={14} /> Delete
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-500 italic">No users for this role yet.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageRoles;
