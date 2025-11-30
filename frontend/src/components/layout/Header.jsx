import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar px-6" style={{ backgroundColor: "#000080" }}>
      {/* Left side: Logo + Nav Links */}
      <div className="flex-1">
        <Link
          to="/"
          className="text-2xl font-roboto font-bold text-white tracking-wide"
        >
          LXP
        </Link>
        <nav className="ml-8 hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/dashboard" className="text-white hover:text-gray-300">
            Dashboard
          </Link>
          <Link to="/courses" className="text-white hover:text-gray-300">
            Courses
          </Link>
          <Link to="/profile" className="text-white hover:text-gray-300">
            Profile
          </Link>
        </nav>
      </div>

      {/* Right side: Auth buttons */}
      <div className="flex-none space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 rounded-lg font-roboto bg-white text-black hover:bg-[#c0c0c0] transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 rounded-lg font-roboto bg-white text-black hover:bg-[#c0c0c0] transition"
        >
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
