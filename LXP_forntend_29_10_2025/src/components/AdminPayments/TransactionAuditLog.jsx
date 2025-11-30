import React from "react";

const TransactionAuditLog = () => {
  const logs = [
    { id: 1, action: "Refund issued", user: "Admin1", date: "2025-11-02" },
    { id: 2, action: "Marked success", user: "Admin2", date: "2025-10-28" },
  ];

  return (
    <div className="bg-white min-h-screen p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Transaction Audit Log
      </h2>

      <ul className="space-y-3">
        {logs.map((log) => (
          <li
            key={log.id}
            className="p-4 border rounded-md bg-gray-50 shadow-sm hover:bg-gray-100 transition"
          >
            <p className="text-gray-800">
              <strong>{log.user}</strong> — {log.action}
            </p>
            <p className="text-sm text-gray-500">{log.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionAuditLog;