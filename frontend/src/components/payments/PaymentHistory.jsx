import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

const PaymentHistory = () => {
  const payments = [
    { id: 1, course: "React Basics", status: "Success", date: "2025-11-03" },
    { id: 2, course: "UI/UX Design", status: "Failed", date: "2025-10-28" },
    { id: 3, course: "Node.js Fundamentals", status: "Success", date: "2025-10-15" },
  ];

  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Payment History
      </h1>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-200">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wide border-b">
              <th className="py-4 px-6">Course Name</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6">Date</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((p) => (
              <tr
                key={p.id}
                className="hover:bg-gray-50 transition-all duration-200 border-b"
              >
                <td className="py-4 px-6 font-medium text-gray-800">
                  {p.course}
                </td>
                <td className="py-4 px-6 flex items-center gap-2">
                  {p.status === "Success" ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-green-700 font-semibold">Success</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-red-600" />
                      <span className="text-red-700 font-semibold">Failed</span>
                    </>
                  )}
                </td>
                <td className="py-4 px-6 text-gray-600">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="mt-10 bg-gray-50 p-6 rounded-xl shadow-inner text-gray-800 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-3 text-center">
          Summary Overview
        </h2>
        <p className="text-center text-gray-600">
          Total Payments: <span className="font-bold text-gray-800">{payments.length}</span> | 
          Successful: <span className="font-bold text-green-600">
            {payments.filter((p) => p.status === "Success").length}
          </span> | 
          Failed: <span className="font-bold text-red-600">
            {payments.filter((p) => p.status === "Failed").length}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PaymentHistory;
