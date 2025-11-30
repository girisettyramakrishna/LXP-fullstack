import React from "react";
import Footer from "../components/layout/Footer";
export default function AboutUs() {
  const features = [
    {
      emoji: "🎯",
      title: "Personalized Paths",
      desc: "Adaptive learning journeys that meet learners where they are and accelerate progress.",
    },
    {
      emoji: "📚",
      title: "Extensive Library",
      desc: "High-quality courses from practitioners — video, labs, and interactive assessments.",
    },
    {
      emoji: "🤝",
      title: "Peer Collaboration",
      desc: "Group projects, discussion rooms and mentorship programs to foster active learning.",
    },
    {
      emoji: "⚙",
      title: "Instructor Tools",
      desc: "Create lessons, track performance, and provide targeted feedback with ease.",
    },
  ];

  const stats = [
    { label: "Active Learners", value: "12,400+" },
    { label: "Courses", value: "680+" },
    { label: "Expert Mentors", value: "420+" },
    { label: "Avg Completion Rate", value: "78%" },
  ];

  const team = [
    { name: "Asha Verma", role: "Co-founder & CEO", img: "https://i.pravatar.cc/150?img=32" },
    { name: "Rohit Sen", role: "Head of Product", img: "https://i.pravatar.cc/150?img=12" },
    { name: "Meera Patel", role: "Lead Instructor", img: "https://i.pravatar.cc/150?img=47" },
    { name: "Aditya Rao", role: "Engineering Lead", img: "https://i.pravatar.cc/150?img=8" },
  ];

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div
          className="bg-cover bg-center py-28 px-6 md:py-36"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,8,30,0.45), rgba(10,8,30,0.25)), url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
              We build meaningful <span className="text-purple-300">learning experiences</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-100 max-w-3xl mx-auto">
              A modern LxP that empowers learners and instructors with tools that scale —
              adaptive paths, collaborative spaces, and measurable outcomes.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="#features"
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-3 rounded-full text-sm md:text-base hover:scale-[1.02] transition transform"
                aria-label="See features"
              >
                Explore features
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <button
                onClick={() => {
                  // quick local-dev helper: set mock user for dev preview
                  if (process.env.NODE_ENV === "development") {
                    localStorage.setItem(
                      "user",
                      JSON.stringify({ id: "dev-instructor", role: "instructor", name: "Dev Instructor" })
                    );
                    localStorage.setItem("token", "dev-token");
                    location.reload();
                  }
                }}
                className="inline-flex items-center gap-2 bg-white text-purple-700 px-5 py-3 rounded-full text-sm md:text-base shadow hover:shadow-lg transition"
                title="Dev helper (only in development)"
              >
                Quick preview
                <span className="text-sm opacity-70">→</span>
              </button>
            </div>
          </div>

          {/* decorative shapes */}
          <svg
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-20 w-[1200px] pointer-events-none"
            viewBox="0 0 1200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0C150 120 350 0 600 0C850 0 1050 120 1200 0V120H0V0Z" fill="white" />
          </svg>
        </div>
      </header>

      {/* FEATURES */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900">What we deliver</h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">Tools and experiences that turn learning into results.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{f.emoji}</div>
              <h3 className="font-semibold text-lg text-purple-900 mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm">{f.desc}</p>
              <div className="mt-4 text-xs text-purple-700 font-medium">Learn more →</div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {stats.map((s, i) => (
              <div key={i} className="text-center bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-extrabold text-purple-800">{s.value}</div>
                <div className="text-xs text-purple-700/80 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM & CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="md:flex md:items-start md:gap-12">
          <div className="md:flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-900">Meet the team</h3>
            <p className="mt-3 text-slate-600 max-w-xl">
              Product, education and engineering leaders behind the platform — committed to student success and instructor empowerment.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {team.map((p, i) => (
                <div key={i} className="bg-white p-3 rounded-xl text-center shadow-sm border border-gray-100">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-16 h-16 rounded-full mx-auto object-cover shadow-sm"
                  />
                  <div className="mt-3 text-sm font-semibold text-slate-800">{p.name}</div>
                  <div className="text-xs text-slate-500">{p.role}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="md:w-80 mt-8 md:mt-0">
            <div className="bg-gradient-to-br from-purple-600 to-purple-400 text-white p-6 rounded-2xl shadow-lg">
              <h4 className="text-lg font-bold">Ready to try it?</h4>
              <p className="mt-2 text-sm opacity-90">
                Create a free instructor or learner account and explore course creation tools — no backend required for local preview.
              </p>
              <div className="mt-4">
                <a
                  href="/user"
                  className="inline-block w-full text-center bg-white text-purple-700 font-semibold px-4 py-2 rounded-lg hover:scale-[1.01] transition"
                >
                  Get started — it's free
                </a>
                <button
                  onClick={() => {
                    if (process.env.NODE_ENV === "development") {
                      localStorage.setItem("user", JSON.stringify({ id: "demo-learner", role: "learner", name: "Demo" }));
                      localStorage.setItem("token", "dev-token");
                      location.reload();
                    }
                  }}
                  className="mt-2 inline-block w-full text-center bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg hover:scale-[1.01] transition"
                >
                  Quick demo login (dev only)
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-white text-purple-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl italic font-semibold leading-relaxed max-w-3xl mx-auto">
            “This platform completely transformed how we deliver content to learners. The personalized paths and collaboration tools boost engagement like never before.”
          </blockquote>
          <cite className="block mt-6 font-semibold">— Ashok Polapragada, Lead Instructor</cite>
        </div>
      </section>

      <Footer />
    </div>
  );
}
