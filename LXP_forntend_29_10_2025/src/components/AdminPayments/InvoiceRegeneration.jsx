import React from "react";

const InvoiceRegeneration = () => {
  const invoices = [
    { id: 1, user: "John Doe", course: "React Basics", date: "2025-11-02" },
    { id: 2, user: "Jane Smith", course: "UI Design", date: "2025-10-28" },
  ];

  return (
    <div className="bg-white min-h-screen p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Invoice Regeneration
      </h2>

      <table className="w-full border-collapse border border-gray-200 text-gray-700">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">User</th>
            <th className="p-2 border">Course</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => (
            <tr key={inv.id} className="border-t">
              <td className="p-2 border">{inv.user}</td>
              <td className="p-2 border">{inv.course}</td>
              <td className="p-2 border">{inv.date}</td>
              <td className="p-2 border text-purple-600 hover:underline cursor-pointer">
                Re-generate
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceRegeneration;