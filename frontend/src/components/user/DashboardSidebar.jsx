import React from "react";
import {
  User,
  BookOpen,
  MapPin,
  Award,
  Settings,
  HelpCircle,
  Edit3,
} from "lucide-react";

export default function DashboardSidebar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "profile", label: "Profile", icon: <User className="w-4 h-4" /> },
    { id: "courses", label: "Enrolled Courses", icon: <BookOpen className="w-4 h-4" /> },
    { id: "learningPath", label: "Learning Path", icon: <MapPin className="w-4 h-4" /> },
    { id: "quizzes", label: "Quizzes & Scores", icon: <Edit3 className="w-4 h-4" /> },
    { id: "achievements", label: "Achievements", icon: <Award className="w-4 h-4" /> },
    { id: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
    { id: "support", label: "Support / Help", icon: <HelpCircle className="w-4 h-4" /> },
  ];

  return (
    <div className="w-64 bg-white p-6 shadow-md flex flex-col min-h-screen">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Dashboard</h2>
      <ul className="flex flex-col gap-2">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300
                ${
                  activeTab === tab.id
                    ? "bg-purple-900 text-white font-semibold"
                    : "text-gray-700 hover:bg-purple-200 hover:text-purple-900"
                }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
