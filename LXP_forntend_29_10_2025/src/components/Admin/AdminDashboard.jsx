import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [roles, setRoles] = useState([
    { id: 1, name: "Org Instructor", users: [] },
    { id: 2, name: "Org Moderator", users: [] },
    { id: 3, name: "Org Reviewer", users: [] },
    { id: 4, name: "Org Editor", users: [] },
  ]);

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [isViewingUsers, setIsViewingUsers] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const [profile, setProfile] = useState({
    name: "Organization Admin",
    email: "admin@lxp.com",
    organization: "LXP Portal",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  });

  const [newUser, setNewUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  const handleDeleteImage = () => {
    setProfile((prev) => ({
      ...prev,
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    }));
  };

  const handleCreateUser = () => {
    if (!newUser.fullName || !newUser.email || !newUser.password) return;
    const updatedRoles = roles.map((r) =>
      r.name === selectedRole.name
        ? { ...r, users: [...r.users, { ...newUser, role: r.name }] }
        : r
    );
    setRoles(updatedRoles);
    setNewUser({ fullName: "", email: "", password: "" });
    setIsCreatingUser(false);
  };

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-900 text-white flex flex-col justify-between">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
          <ul className="space-y-3">
            <li className="bg-purple-700 px-4 py-2 rounded-lg font-semibold">
              Profile
            </li>
            <li
              onClick={() => navigate("/admin-dashboard/manage-roles")}
              className="hover:bg-purple-800 px-4 py-2 rounded-lg cursor-pointer"
            >
              Manage Roles
            </li>
            <li
              onClick={() =>
                navigate("/admin-dashboard/moderation-role-management")
              }
              className="hover:bg-purple-800 px-4 py-2 rounded-lg cursor-pointer"
            >
              Moderation Role Management
            </li>

            <li
              onClick={() => navigate("/admin-dashboard/audit-logs")}
              className="hover:bg-purple-800 px-4 py-2 rounded-lg cursor-pointer"
            >
              View Logs
            </li>
            <li
              onClick={() => navigate("/admin-dashboard/org-management")}
              className="hover:bg-purple-800 px-4 py-2 rounded-lg cursor-pointer"
            >
             Org Management 
            </li>
          </ul>
        </div>
        <div className="p-6 text-sm text-gray-300 border-t border-purple-700">
          © 2025 PSM-LxP Portal
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 space-y-10">
        {/* Profile Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center justify-between transition transform hover:-translate-y-1 hover:shadow-2xl">
          <div className="flex items-center gap-6">
            <img
              src={profile.image}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-purple-900 object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-purple-900">
                {profile.name}
              </h2>
              <p className="text-gray-700">{profile.email}</p>
              <p className="text-gray-600">{profile.organization}</p>
            </div>
          </div>
          <button
            onClick={() => setIsEditingProfile(true)}
            className="mt-5 md:mt-0 bg-purple-900 text-white px-6 py-2 rounded-xl hover:bg-purple-800 transition"
          >
            Edit Profile
          </button>
        </div>

        {/* Roles Section */}
        <div>
          <h3 className="text-2xl font-semibold text-purple-900 mb-6">
            Manage Organization Roles
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {roles.map((role) => (
              <div
                key={role.id}
                className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <h4 className="text-lg font-semibold text-purple-900 mb-2 text-center">
                  {role.name}
                </h4>
                <p className="text-gray-600 mb-4 text-center">
                  {role.users.length} user(s)
                </p>

                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedRole(role);
                      setIsViewingUsers(true);
                    }}
                    className="bg-purple-900 text-white px-3 py-1 rounded-lg hover:bg-purple-800 transition text-sm"
                  >
                    View
                  </button>
                  <button
                    onClick={() => {
                      setSelectedRole(role);
                      setIsCreatingUser(true);
                    }}
                    className="bg-green-700 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition text-sm"
                  >
                    Create
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === Profile Edit Modal === */}
        {isEditingProfile && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
              <button
                onClick={() => setIsEditingProfile(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
              >
                ✕
              </button>
              <h2 className="text-xl font-semibold text-purple-900 mb-4">
                Edit Profile
              </h2>

              <div className="flex flex-col items-center space-y-3 mb-4">
                <img
                  src={profile.image}
                  alt="Profile"
                  className="w-28 h-28 rounded-full border-4 border-purple-900 object-cover"
                />
                <div className="flex gap-3">
                  <label className="bg-purple-900 text-white px-3 py-1 rounded-lg cursor-pointer hover:bg-purple-800">
                    Upload
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                  <button
                    onClick={handleDeleteImage}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-900 outline-none"
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-900 outline-none"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="organization"
                  value={profile.organization}
                  onChange={handleProfileChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-900 outline-none"
                  placeholder="Organization"
                />
              </div>

              <button
                onClick={() => setIsEditingProfile(false)}
                className="mt-5 w-full bg-purple-900 text-white py-2 rounded-lg hover:bg-purple-800 transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* === Create Role Modal === */}
        {isCreatingUser && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
              <button
                onClick={() => setIsCreatingUser(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
              >
                ✕
              </button>
              <h2 className="text-xl font-semibold text-purple-900 mb-4">
                Create {selectedRole?.name} Credentials
              </h2>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={newUser.fullName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, fullName: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-900 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-900 outline-none"
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={newUser.password}
                    onChange={(e) =>
                      setNewUser({ ...newUser, password: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-900 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 text-gray-500"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
                <input
                  type="text"
                  value={selectedRole?.name}
                  disabled
                  className="w-full border border-gray-200 bg-gray-100 rounded-lg px-4 py-2 text-gray-600"
                />
              </div>

              <button
                onClick={handleCreateUser}
                className="mt-6 w-full bg-purple-900 text-white py-2 rounded-lg hover:bg-purple-800 transition"
              >
                Save User
              </button>
            </div>
          </div>
        )}

        {/* === View Users Modal === */}
        {isViewingUsers && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl relative">
              <button
                onClick={() => setIsViewingUsers(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
              >
                ✕
              </button>
              <h2 className="text-xl font-semibold text-purple-900 mb-4 text-center">
                {selectedRole?.name} - Created Users
              </h2>

              {selectedRole?.users?.length ? (
                <ul className="divide-y divide-gray-200">
                  {selectedRole.users.map((user, idx) => (
                    <li
                      key={idx}
                      className="py-3 flex justify-between items-center"
                    >
                      <div>
                        <p className="font-semibold text-gray-900">
                          {user.fullName}
                        </p>
                        <p className="text-gray-600 text-sm">{user.email}</p>
                      </div>
                      <p className="text-gray-400">••••••</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-center">
                  No users created for this role yet.
                </p>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
