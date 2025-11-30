import React from "react";
import Footer from "../components/layout/Footer";
import { BookOpen, Users, Award, TrendingUp } from "lucide-react";

export default function Home() {
  const heroUrl =
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80";

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <main className="flex-grow">
        {/* ✅ Hero Section */}
        <section
          className="relative py-42 px-4 text-center text-white overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* Overlay & Animation */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-white/10 rounded-full -translate-x-1/2 animate-pulse"></div>

          {/* Hero Content */}
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Welcome to PSM-LxP
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow">
              Personalized learning journeys for every learner. Explore curated
              courses and boost your skills.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transform hover:scale-105 transition">
                Explore Courses
              </button>
              <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-900 transform hover:scale-105 transition">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose LxP */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold text-purple-900 mb-10">
            Why Choose PSM-LxP?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen size={40} className="text-purple-900 mx-auto" />,
                title: "Expert-Led Courses",
                desc: "Learn directly from professionals with real-world experience.",
              },
              {
                icon: <Users size={40} className="text-purple-900 mx-auto" />,
                title: "Collaborative Learning",
                desc: "Join peers and mentors, share ideas, and grow together.",
              },
              {
                icon: <Award size={40} className="text-purple-900 mx-auto" />,
                title: "Certified Programs",
                desc: "Earn industry-recognized certificates for your achievements.",
              },
              {
                icon: <TrendingUp size={40} className="text-purple-900 mx-auto" />,
                title: "Career Growth",
                desc: "Advance your professional journey with in-demand skills.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F9FAFB] rounded-xl p-8 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-purple-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Courses */}
        <section className="bg-[#F3F4F6] py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-purple-900 mb-10">
              Top Trending Courses
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Full Stack Web Development",
                  desc: "Master HTML, CSS, JavaScript, React & Node.js from scratch.",
                },
                {
                  title: "Data Science Essentials",
                  desc: "Analyze data, build ML models, and make data-driven decisions.",
                },
                {
                  title: "Cloud Computing with AWS",
                  desc: "Deploy, scale, and manage applications on AWS infrastructure.",
                },
              ].map((course, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 border-t-4 border-purple-900"
                >
                  <h3 className="text-2xl font-semibold text-purple-900 mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.desc}</p>
                  <button className="text-purple-900 font-medium hover:underline">
                    View Details →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold text-purple-900 mb-10">
            What Our Learners Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aarav",
                text: "The platform made learning easy and engaging. Highly recommend!",
              },
              {
                name: "Diya",
                text: "Amazing mentors and hands-on projects helped me land a job!",
              },
              {
                name: "Rahul",
                text: "The learning paths are well-structured and flexible to follow.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F9FAFB] p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <p className="italic text-gray-700 mb-4">“{item.text}”</p>
                <h4 className="font-semibold text-purple-900">{item.name}</h4>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
