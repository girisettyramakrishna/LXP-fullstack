import React from "react";
import Footer from "../components/layout/Footer";

export default function ContactUs() {
  return (
    <div className="bg-white text-gray-800">

      {/* 📩 Contact & Info Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left Column: Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-purple-900 mb-8">Get in Touch</h2>
            <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6 border border-gray-200">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-purple-900 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-purple-800 hover:shadow-2xl transition duration-300 w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Contact Information</h2>

            <div className="grid gap-6 text-gray-700">
              <div className="p-6 bg-purple-50 rounded-2xl shadow-md hover:shadow-xl transition text-center">
                <h3 className="text-xl font-semibold text-purple-900 mb-1">Address</h3>
                <p>123 Learning St, Knowledge City, EduState, 12345</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-2xl shadow-md hover:shadow-xl transition text-center">
                <h3 className="text-xl font-semibold text-purple-900 mb-1">Email</h3>
                <p>support@psm-lxp.com</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-2xl shadow-md hover:shadow-xl transition text-center">
                <h3 className="text-xl font-semibold text-purple-900 mb-1">Phone</h3>
                <p>+91 123-456-7890</p>
              </div>
            </div>

            {/* Smaller Map */}
            <iframe
              title="LXP Office Location"
              className="w-full h-56 rounded-xl border-0 shadow-md mt-6"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086343876195!2d-122.41941548468253!3d37.77492977975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085817e9b6f1c7f%3A0x4f80f7ff6b27d0!2sSan+Francisco!5e0!3m2!1sen!2sin!4v1616173142701!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

      {/* 🦶 Footer */}
      <Footer />
    </div>
  );
}
