import React, { useState } from "react";

const AdminTransactionDashboard = () => {
  const [filter, setFilter] = useState("all");

  const transactions = [
    { id: 1, org: "TechOrg", user: "John Doe", status: "Success", amount: "$120" },
    { id: 2, org: "DesignCo", user: "Jane Smith", status: "Failed", amount: "$80" },
  ];

  const filtered = filter === "all" ? transactions : transactions.filter(t => t.status === filter);

  return (
    <div className="bg-white min-h-screen p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Transaction Dashboard</h2>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 rounded-md mb-4"
      >
        <option value="all">All</option>
        <option value="Success">Success</option>
        <option value="Failed">Failed</option>
      </select>

      <table className="w-full border-collapse border border-gray-200 text-gray-700">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Org</th>
            <th className="p-2 border">User</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Amount</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((t) => (
            <tr key={t.id} className="border-t">
              <td className="p-2 border">{t.org}</td>
              <td className="p-2 border">{t.user}</td>
              <td
                className={`p-2 border ${
                  t.status === "Success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {t.status}
              </td>
              <td className="p-2 border">{t.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTransactionDashboard;
