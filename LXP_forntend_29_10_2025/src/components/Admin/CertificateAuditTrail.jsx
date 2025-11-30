import React, { useState, useEffect } from "react";

const CertificateAuditTrail = () => {
  const [auditLogs, setAuditLogs] = useState([]);

  useEffect(() => {
    // Mock data (replace with API later)
    setAuditLogs([
      {
        id: 1,
        action: "Created new certificate template",
        user: "Super Admin",
        timestamp: "2025-10-29 10:35 AM",
      },
      {
        id: 2,
        action: "Edited template background image",
        user: "Org Admin - EduCorp",
        timestamp: "2025-10-29 11:12 AM",
      },
      {
        id: 3,
        action: "Reissued certificate for learner: John Doe",
        user: "Super Admin",
        timestamp: "2025-10-29 11:45 AM",
      },
      {
        id: 4,
        action: "Updated signature placement on template",
        user: "Org Admin - SkillPath",
        timestamp: "2025-10-29 12:10 PM",
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-white p-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md border border-gray-200 p-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Certificate Audit Trail
        </h2>

        <p className="text-gray-600 mb-6">
          This section records all actions related to certificate template
          creation, editing, and re-issuing — ensuring full traceability and
          accountability across admins.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 text-left text-gray-800 rounded-lg">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 border-b">#</th>
                <th className="p-3 border-b">Action</th>
                <th className="p-3 border-b">Performed By</th>
                <th className="p-3 border-b">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {auditLogs.length > 0 ? (
                auditLogs.map((log) => (
                  <tr
                    key={log.id}
                    className="hover:bg-gray-50 transition duration-150"
                  >
                    <td className="p-3 border-b">{log.id}</td>
                    <td className="p-3 border-b">{log.action}</td>
                    <td className="p-3 border-b">{log.user}</td>
                    <td className="p-3 border-b">{log.timestamp}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="p-4 text-center text-gray-500 border-b"
                  >
                    No audit records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CertificateAuditTrail;