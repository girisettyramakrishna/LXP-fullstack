import React from "react";
import { Users, CalendarDays, BarChart3 } from "lucide-react";

const OrgSubscriptionView = () => {
  const orgData = {
    plan: "Pro Plan",
    users: 25,
    quota: 50,
    renewalDate: "2026-01-01",
  };

  const usagePercent = Math.round((orgData.users / orgData.quota) * 100);

  return (
    <div className="min-h-screen bg-white p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
        Organization Subscription Overview
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl border border-gray-200">
        {/* Plan Information */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-purple-600" /> {orgData.plan}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Your current organization subscription details
            </p>
          </div>
          <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium">
            Active
          </span>
        </div>

        {/* Usage Bar */}
        <div className="mb-6">
          <h3 className="text-gray-700 font-medium mb-2 flex items-center gap-2">
            <Users className="w-5 h-5 text-gray-600" />
            User Usage
          </h3>
          <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
            <div
              className="bg-purple-600 h-4 transition-all duration-500"
              style={{ width: `${usagePercent}%` }}
            ></div>
          </div>
          <p className="text-gray-600 mt-2 text-sm">
            {orgData.users} of {orgData.quota} users ({usagePercent}% used)
          </p>
        </div>

        {/* Renewal Info */}
        <div className="flex justify-between items-center mt-8">
          <div className="flex items-center gap-2 text-gray-700">
            <CalendarDays className="w-5 h-5 text-gray-600" />
            <span>
              <strong>Renewal Date:</strong> {orgData.renewalDate}
            </span>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md">
            Manage Plan
          </button>
        </div>
      </div>

      {/* Footer Summary */}
      <div className="mt-10 text-center text-gray-600 text-sm">
        Last updated on <span className="font-medium text-gray-800">Nov 3, 2025</span>
      </div>
    </div>
  );
};

export default OrgSubscriptionView;
