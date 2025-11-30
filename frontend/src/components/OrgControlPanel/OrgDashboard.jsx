import React from "react";

const OrgDashboard = () => {
  const orgInfo = {
    name: "TechNova Solutions",
    subscription: "Pro Plan",
    employees: 23,
    usage: "46%",
  };

  return (
    <div className="bg-white min-h-screen p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Organization Dashboard</h2>

      <div className="space-y-3 text-gray-700">
        <p><strong>Organization:</strong> {orgInfo.name}</p>
        <p><strong>Subscription:</strong> {orgInfo.subscription}</p>
        <p><strong>Employees:</strong> {orgInfo.employees}</p>
        <p><strong>Usage:</strong> {orgInfo.usage}</p>
      </div>
    </div>
  );
};

export default OrgDashboard;
