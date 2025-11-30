import React from "react";
import { FileText, Download } from "lucide-react";

const InvoiceManager = () => {
  const invoices = [
    { id: 1, course: "React Basics", date: "2025-11-01" },
    { id: 2, course: "UI/UX Design", date: "2025-10-25" },
  ];

  return (
    <div className="min-h-screen bg-white p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
        Invoice Management
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-6">
          <FileText className="w-6 h-6 text-purple-600" /> Invoices
        </h2>

        {invoices.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {invoices.map((inv) => (
              <li
                key={inv.id}
                className="flex justify-between items-center py-4 transition hover:bg-gray-50 px-2 rounded-md"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-gray-800 text-lg">
                    {inv.course}
                  </span>
                  <span className="text-gray-500 text-sm">Issued on {inv.date}</span>
                </div>
                <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition">
                  <Download className="w-4 h-4" /> View / Download
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-gray-500 text-center py-8">
            No invoices found.
          </div>
        )}
      </div>

      <div className="mt-10 text-center text-gray-600 text-sm">
        Last updated on <span className="font-medium text-gray-800">Nov 3, 2025</span>
      </div>
    </div>
  );
};

export default InvoiceManager;
