import React, { useEffect, useState } from "react";

const OrgManagement = () => {
  const [orgs, setOrgs] = useState([]);
  const [error, setError] = useState(null);

  // Fetch organizations from backend API
  useEffect(() => {
    const fetchOrgs = async () => {
      try {
        const response = await fetch("/api/admin/orgs");
        const data = await response.json();

        // Ensure we always have an array
        if (Array.isArray(data)) {
          setOrgs(data);
        } else if (data.orgs && Array.isArray(data.orgs)) {
          setOrgs(data.orgs);
        } else {
          setOrgs([]);
        }
      } catch (err) {
        setError("Failed to fetch organizations");
        setOrgs([]);
      }
    };

    fetchOrgs();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Organization Management
      </h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 mb-4 rounded-lg">
          {error}
        </div>
      )}

      {orgs.length === 0 ? (
        <p className="text-center text-gray-500">No organizations found.</p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-xl border border-gray-200">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Org Name</th>
                <th className="px-6 py-3 text-left font-semibold">Email</th>
                <th className="px-6 py-3 text-left font-semibold">Status</th>
                <th className="px-6 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orgs.map((org) => (
                <tr
                  key={org._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-3">{org.name}</td>
                  <td className="px-6 py-3">{org.email}</td>
                  <td className="px-6 py-3">{org.status}</td>
                  <td className="px-6 py-3">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition mr-2">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrgManagement;
