import React, { useEffect, useState } from "react";
import { FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className={`transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">PSM-LxP</h3>
          <p className="text-gray-200">
            Empowering learners through personalized learning journeys.
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400 transition-transform transform hover:scale-110">
              <FaLinkedin size={22} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-transform transform hover:scale-110">
              <FaTwitter size={22} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-transform transform hover:scale-110">
              <FaYoutube size={22} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-transform transform hover:scale-110">
              <FaFacebook size={22} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/home" className="hover:text-gray-300 transition">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300 transition">About</a>
            </li>
            <li>
              <a href="contact" className="hover:text-gray-300 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact & Support */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact & Support</h4>
          <p className="text-gray-200">Email: support@psm-lxp.com</p>
          <p className="text-gray-200 mt-1">Phone: +91 123 456 7890</p>
          <p className="text-gray-200 mt-1">Address: Mumbai, India</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center">
        © {new Date().getFullYear()} PSM-LxP. All rights reserved.
      </div>
    </footer>
  );
}
