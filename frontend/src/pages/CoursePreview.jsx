import React, { useState } from "react";
import { Star, Globe, PlayCircle, CheckCircle } from "lucide-react";

const CoursePreview = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const curriculum = [
    {
      title: "Introduction to React",
      lectures: [
        "What is React?",
        "Setting up development environment",
        "Understanding JSX",
        "Components and Props",
      ],
    },
    {
      title: "React Fundamentals",
      lectures: [
        "State and Lifecycle",
        "Handling Events",
        "Conditional Rendering",
        "Lists and Keys",
        "Forms and Controlled Components",
      ],
    },
    {
      title: "Advanced Topics",
      lectures: [
        "React Hooks (useState, useEffect)",
        "React Router",
        "Context API",
        "Project: Building a To-Do App",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* ===== Hero Section ===== */}
      <section className="bg-purple-900 text-white py-10 px-6 md:px-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="flex-1 space-y-3">
          <h1 className="text-3xl md:text-5xl font-extrabold">
            React for Beginners
          </h1>
          <p className="text-lg text-purple-100 max-w-2xl">
            Learn React from scratch and build powerful web apps using
            components, hooks, and state management — just like professionals.
          </p>
          <div className="flex items-center gap-3 text-yellow-300 text-lg">
            <Star fill="currentColor" /> <span>4.8</span>
            <span className="text-white/80 text-sm">(12,000 ratings)</span>
            <span className="ml-3 text-white/90">120,000 students</span>
          </div>
          <p className="text-sm text-white/70">
            Created by <span className="font-semibold">John Doe</span>
          </p>
          <p className="text-sm text-white/70 flex items-center gap-1">
            <Globe className="w-4 h-4" /> English • Last updated Oct 2025
          </p>
        </div>

        {/* ===== Right Purchase Card ===== */}
        <div className="bg-white text-gray-900 p-5 rounded-2xl shadow-2xl w-full sm:w-80 flex-shrink-0">
          <div className="rounded-lg overflow-hidden mb-4">
            <img
              src="https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg"
              alt="Course thumbnail"
              className="w-full h-44 object-cover"
            />
          </div>
          <p className="text-3xl font-bold mb-2">₹519</p>
          <p className="text-sm text-gray-500 mb-3 line-through">₹3,199</p>
          <button className="w-full bg-purple-900 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition">
            Add to cart
          </button>
          <button className="w-full border border-purple-900 text-purple-900 py-3 mt-2 rounded-lg font-semibold hover:bg-purple-50 transition">
            Buy now
          </button>
          <p className="text-xs text-center text-gray-500 mt-2">
            30-Day Money-Back Guarantee
          </p>
        </div>
      </section>

      {/* ===== What you'll learn ===== */}
      <section className="py-10 px-6 md:px-16 bg-white">
        <h2 className="text-2xl font-bold text-purple-900 mb-6">
          What you'll learn
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Build powerful React applications from scratch.",
            "Understand components, props, and hooks.",
            "Master state management and React Router.",
            "Develop real-world projects using modern practices.",
            "Deploy React apps with confidence.",
            "Learn debugging and optimization techniques.",
            "Handle API integration in React.",
            "Gain industry-level front-end development skills.",
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="text-purple-900 w-5 h-5 mt-1" />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Related Topics ===== */}
      <section className="py-8 px-6 md:px-16 bg-gray-50">
        <h3 className="text-lg font-semibold text-purple-900 mb-4">
          Explore related topics
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "JavaScript",
            "Frontend Development",
            "Web Development",
            "Redux",
            "Next.js",
          ].map((topic, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-purple-100 text-purple-900 rounded-full text-sm font-medium hover:bg-purple-200 cursor-pointer"
            >
              {topic}
            </span>
          ))}
        </div>
      </section>

      {/* ===== Course Content ===== */}
      <section className="py-10 px-6 md:px-16 bg-white">
        <h2 className="text-2xl font-bold text-purple-900 mb-6">
          Course content
        </h2>

        <div className="space-y-4">
          {curriculum.map((section, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800 bg-purple-50 hover:bg-purple-100 transition"
              >
                <span>{section.title}</span>
                <span className="text-purple-900">
                  {expandedSection === index ? "−" : "+"}
                </span>
              </button>

              {expandedSection === index && (
                <div className="bg-white divide-y divide-gray-100">
                  {section.lectures.map((lec, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-5 py-3 text-gray-700 text-sm hover:bg-gray-50 transition"
                    >
                      <PlayCircle className="w-4 h-4 text-purple-900" />
                      {lec}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== Footer Info ===== */}
      <footer className="py-10 px-6 md:px-16 text-center text-gray-600 text-sm bg-gray-100">
        <p>© 2025 React for Beginners — All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CoursePreview;
