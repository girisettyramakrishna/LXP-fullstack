import React from "react";
import {
  CheckCircle,
  PauseCircle,
  Lock,
  Clock,
  Award,
  Trophy,
  Star,
} from "lucide-react";

const sampleCourse = {
  title: "React for Beginners",
  summary:
    "Master React fundamentals and build dynamic, interactive web apps with hands-on modules and real projects.",
  learningPath: [
    { step: 1, title: "Introduction to React", status: "completed" },
    { step: 2, title: "JSX & Components", status: "inprogress" },
    { step: 3, title: "State & Props", status: "locked" },
    { step: 4, title: "Hooks & Effects", status: "locked" },
  ],
  quizzes: [
    {
      id: 1,
      title: "Basics of React Quiz",
      questions: 10,
      difficulty: "Easy",
      progress: 80,
      score: 8,
    },
    {
      id: 2,
      title: "JSX and Components Quiz",
      questions: 12,
      difficulty: "Medium",
      progress: 40,
      score: 5,
    },
    {
      id: 3,
      title: "Hooks and State Quiz",
      questions: 15,
      difficulty: "Hard",
      progress: 0,
      score: null,
    },
  ],
  achievements: [
    {
      id: 1,
      title: "React Rookie",
      desc: "Completed your first React module",
      icon: <Award className="w-5 h-5 text-yellow-500 animate-bounce" />,
    },
    {
      id: 2,
      title: "Quiz Champion",
      desc: "Scored 80%+ in a quiz",
      icon: <Trophy className="w-5 h-5 text-purple-600 animate-pulse" />,
    },
  ],
};

const statusConfig = {
  completed: {
    icon: <CheckCircle className="w-5 h-5 text-purple-600" />,
    color: "text-purple-600",
  },
  inprogress: {
    icon: <PauseCircle className="w-5 h-5 text-yellow-500 animate-pulse" />,
    color: "text-yellow-500",
  },
  locked: {
    icon: <Lock className="w-5 h-5 text-gray-400" />,
    color: "text-gray-400",
  },
};

const CourseSectionPage = () => {
  const course = sampleCourse;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-8 px-4">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* ================= Course Summary ================= */}
        <section className="bg-gradient-to-tr from-purple-100 to-purple-200 border border-purple-300 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all relative overflow-hidden">
          <h2 className="text-3xl font-bold text-purple-900 mb-3">
            📘 Course Overview
          </h2>
          <p className="text-base text-gray-800 leading-relaxed mb-6">
            Kickstart your journey into modern web development with <b>React</b>. Build interactive web apps, learn hooks, state management, and deploy real projects.
          </p>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { title: "📅 Duration", value: "6 Weeks (Self-paced)" },
              { title: "🎯 Level", value: "Beginner to Intermediate" },
              { title: "🏗️ Projects", value: "2 Hands-on React Apps" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-3 rounded-xl shadow-sm border border-purple-100 text-center hover:shadow-md transition-all"
              >
                <h3 className="text-purple-800 font-semibold text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Skills You’ll Gain */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-purple-900 mb-3">
              🧠 Skills You’ll Gain
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-gray-800">
              {[
                "Building React Components",
                "Using Props & State",
                "React Hooks (useState, useEffect)",
                "React Router for Navigation",
                "Deploying React Apps",
              ].map((skill, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 bg-purple-50 p-1.5 rounded-lg shadow-sm hover:shadow-md transition-all text-sm"
                >
                  <span className="text-purple-600 font-bold">✔</span> {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Outcomes */}
          <div>
            <h3 className="text-xl font-semibold text-purple-900 mb-3">
              🎓 Learning Outcomes
            </h3>
            <ul className="space-y-1 text-gray-800 text-sm">
              {[
                "Understand React’s component-based architecture",
                "Build and manage dynamic UI efficiently using hooks",
                "Apply routing and state management in real projects",
                "Create and deploy a complete React app with modern best practices",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-1">
                  <span className="text-purple-600 text-base animate-pulse">🎯</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

     {/* ================= Learning Path ================= */}
<section className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 relative">
  <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center gap-2">
    🚀 Your Learning Path
  </h2>

  <div className="space-y-4">
    {course.learningPath.map((item) => {
      const isCompleted = item.status === "completed";
      const isInProgress = item.status === "inprogress";
      const isLocked = item.status === "locked";

      const handleClick = () => {
        if (isInProgress) {
          alert(`You're continuing "${item.title}"`);
        } else if (isCompleted) {
          alert(`You are reviewing "${item.title}"`);
        } else {
          alert(`"${item.title}" is locked.`);
        }
      };

      return (
        <div
          key={item.step}
          onClick={handleClick}
          className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all border
            ${isCompleted ? "bg-green-50 border-green-200 hover:bg-green-100" : ""}
            ${isInProgress ? "bg-yellow-50 border-yellow-200 hover:bg-yellow-100" : ""}
            ${isLocked ? "bg-gray-50 border-gray-200 cursor-not-allowed" : ""}
          `}
        >
          {/* Path Title */}
          <div className="flex items-center gap-3">
            {isLocked ? (
              <span className="text-gray-400 text-lg">🔒</span>
            ) : isCompleted ? (
              <span className="text-green-600 text-lg">✅</span>
            ) : (
              <span className="text-yellow-500 text-lg">⏯️</span>
            )}

            <span
              className={`text-base font-semibold ${
                isLocked
                  ? "text-gray-500"
                  : isCompleted
                  ? "text-green-700"
                  : "text-yellow-800"
              }`}
            >
              {item.title}
            </span>
          </div>

          {/* Status Badge (Right Corner) */}
          {isCompleted && (
            <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
              Completed
            </span>
          )}
          {isInProgress && (
            <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">
              In Progress
            </span>
          )}
          {isLocked && (
            <span className="px-3 py-1 text-xs font-semibold bg-gray-200 text-gray-600 rounded-full">
              Yet to Start
            </span>
          )}
        </div>
      );
    })}
  </div>
</section>



        {/*  Quizzes Section  */}
        <section className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-2">
            🧠 Practice Quizzes
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {course.quizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-base font-semibold text-purple-900">
                    {quiz.title}
                  </h3>
                  <span
                    className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                      quiz.difficulty === "Easy"
                        ? "bg-green-100 text-green-700"
                        : quiz.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {quiz.difficulty}
                  </span>
                </div>

                <p className="text-xs text-gray-600 mb-2">
                  {quiz.questions} Questions
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-purple-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-600 rounded-full transition-all duration-500 ease-in-out group-hover:bg-purple-800"
                    style={{ width: `${quiz.progress}%` }}
                  ></div>
                </div>

                {/* Quiz Info */}
                <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 15 mins
                  </div>
                  <button className="text-purple-700 font-semibold hover:text-purple-900 hover:underline transition-colors text-xs">
                    {quiz.progress === 100 ? "Review" : "Start Quiz →"}
                  </button>
                </div>

                {/* Score */}
                {quiz.score !== null && (
                  <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-purple-800">
                    <Star className="w-3 h-3 text-yellow-500 animate-pulse" />
                    Score: {quiz.score}/{quiz.questions}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ================= Score & Achievements ================= */}
        <section className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center gap-2">
            🏅 Your Progress & Achievements
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Overall Score Card */}
            <div className="flex-1 bg-gradient-to-tr from-purple-200 to-purple-300 p-4 rounded-2xl shadow-inner text-center hover:scale-105 transform transition-all">
              <p className="text-gray-700 font-medium mb-1 text-sm">Overall Score</p>
              <h3 className="text-3xl font-bold text-purple-900 mb-1 animate-pulse">72%</h3>
              <p className="text-xs text-gray-600">Average across completed quizzes</p>
            </div>

            {/* Achievements */}
            <div className="flex-1 bg-gradient-to-tr from-yellow-50 to-yellow-100 p-4 rounded-2xl shadow-inner hover:shadow-md transition-all">
              <h4 className="text-lg font-semibold text-purple-900 mb-3">Unlocked Achievements</h4>
              <ul className="space-y-2">
                {course.achievements.map((a) => (
                  <li
                    key={a.id}
                    className="flex items-center gap-2 bg-white p-2 rounded-xl shadow-sm hover:shadow-md transition-all text-sm"
                  >
                    {a.icon}
                    <div>
                      <p className="font-medium text-gray-900">{a.title}</p>
                      <p className="text-xs text-gray-600">{a.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseSectionPage;
