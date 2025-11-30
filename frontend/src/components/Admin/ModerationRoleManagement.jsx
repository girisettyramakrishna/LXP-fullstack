import React, { useState } from "react";

const ModerationRoleManagement = () => {
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: "Org Instructor",
      permissions: {
        approveContent: true,
        rejectContent: false,
        editCourse: true,
        viewAuditLogs: false,
      },
    },
    {
      id: 2,
      name: "Org Moderator",
      permissions: {
        approveContent: true,
        rejectContent: true,
        editCourse: false,
        viewAuditLogs: true,
      },
    },
    {
      id: 3,
      name: "Org Reviewer",
      permissions: {
        approveContent: false,
        rejectContent: true,
        editCourse: false,
        viewAuditLogs: true,
      },
    },
  ]);

  const togglePermission = (roleId, permissionKey) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === roleId
          ? {
              ...role,
              permissions: {
                ...role.permissions,
                [permissionKey]: !role.permissions[permissionKey],
              },
            }
          : role
      )
    );
  };

  const saveChanges = (roleId) => {
    const updatedRole = roles.find((r) => r.id === roleId);
    console.log("✅ Saved Role Permissions:", updatedRole);
    alert(`Permissions for ${updatedRole.name} saved successfully!`);
  };

  return (
    <div className="p-8 min-h-screen bg-gray-50 text-gray-900">
      <div className="bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-purple-900 mb-8">
          Moderation Role Management
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div
              key={role.id}
              className="border border-purple-200 rounded-2xl shadow-md bg-white hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">
                  {role.name}
                </h3>

                <div className="space-y-4">
                  {Object.keys(role.permissions).map((key) => (
                    <div
                      key={key}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <span className="capitalize text-gray-800">
                        {key.replace(/([A-Z])/g, " $1")}
                      </span>
                      <button
                        onClick={() => togglePermission(role.id, key)}
                        className={`w-14 h-7 rounded-full flex items-center p-1 transition ${
                          role.permissions[key]
                            ? "bg-green-600"
                            : "bg-gray-400"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${
                            role.permissions[key] ? "translate-x-7" : ""
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => saveChanges(role.id)}
                  className="mt-6 w-full bg-purple-900 hover:bg-purple-800 text-white font-medium py-2 rounded-lg transition"
                >
                  Save Changes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModerationRoleManagement;
