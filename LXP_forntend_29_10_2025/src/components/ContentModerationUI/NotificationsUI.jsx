import React, { useState } from "react";

const NotificationsUI = () => {
  const [notifications] = useState([
    { id: 1, message: "New submission pending review", read: false },
    { id: 2, message: "Course 'React Basics' approved", read: true },
  ]);

  return (
    <div className="bg-white min-h-screen p-8 rounded-lg shadow-md text-gray-900">
      <h2 className="text-3xl font-bold mb-4">Notifications</h2>
      <p className="text-gray-700 mb-6">Recent moderation alerts.</p>

      <ul className="space-y-3">
        {notifications.map((note) => (
          <li
            key={note.id}
            className={`border p-3 rounded-md ${
              note.read ? "bg-gray-100" : "bg-purple-50"
            }`}
          >
            {note.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsUI;
