import React, { useState } from "react";
import DashboardSidebar from "../components/user/DashboardSidebar";
import Profile from "../components/user/Profile";
import EnrolledCourses from "../components/user/EnrollCourses";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <Profile />;
      case "courses":
        return <EnrolledCourses />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <DashboardSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        className="bg-purple-900 text-white"
      />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
