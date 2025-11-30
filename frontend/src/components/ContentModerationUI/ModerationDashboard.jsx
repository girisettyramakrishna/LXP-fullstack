import React from "react";

const ModerationDashboard = () => {
  const submissions = [
    { id: 1, title: "React Basics", status: "Pending" },
    { id: 2, title: "Advanced JS", status: "Approved" },
  ];

  return (
    <div className="bg-white min-h-screen p-8 rounded-lg shadow-md text-gray-900">
      <h2 className="text-3xl font-bold mb-4">Moderation Dashboard</h2>
      <p className="text-gray-700 mb-6">
        Review and manage content submissions.
      </p>

      <table className="w-full border-collapse border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.title}</td>
              <td className="border p-2">{item.status}</td>
              <td className="border p-2">
                <button className="bg-green-600 text-white px-3 py-1 rounded-md mr-2">
                  Approve
                </button>
                <button className="bg-red-600 text-white px-3 py-1 rounded-md">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ModerationDashboard;
