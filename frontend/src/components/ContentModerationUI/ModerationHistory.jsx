import React from "react";

const ModerationHistory = () => {
  const history = [
    { id: 1, course: "React Basics", action: "Approved", moderator: "Admin A" },
    { id: 2, course: "JS Mastery", action: "Rejected", moderator: "Admin B" },
  ];

  return (
    <div className="bg-white min-h-screen p-8 rounded-lg shadow-md text-gray-900">
      <h2 className="text-3xl font-bold mb-4">Moderation History</h2>
      <p className="text-gray-700 mb-6">
        View all past moderation actions and comments.
      </p>

      <ul className="space-y-3">
        {history.map((record) => (
          <li key={record.id} className="border p-3 rounded-md">
            <strong>{record.course}</strong> - {record.action} by{" "}
            <span className="text-purple-700">{record.moderator}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModerationHistory;
