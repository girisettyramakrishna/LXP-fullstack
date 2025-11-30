import React, { useState, useEffect } from "react";
import { Moon, Sun, LogOut, UserCircle } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authSlice";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav
      className={`transition-colors duration-500 shadow-md sticky top-0 z-50 ${
        darkMode ? "bg-black text-white" : "bg-purple-900 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold tracking-wide text-white">
            PSM-LxP
          </Link>
        </div>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          {["Home", "About", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `transition duration-300 ${
                    isActive ? "underline text-white" : "hover:text-gray-300"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right: Buttons */}
        <div className="flex items-center gap-4">
          {/* ✅ If Logged In */}
          {isAuthenticated ? (
            <>
              {/* Profile Picture (or Icon) */}
              <NavLink
                to="/profile"
                className="rounded-full border-2 border-white overflow-hidden w-10 h-10 flex items-center justify-center bg-white text-purple-900 hover:opacity-90 transition"
              >
                {user?.profileImage ? (
                  <img
                    src={user.profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <UserCircle size={26} />
                )}
              </NavLink>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="text-white hover:text-red-300 transition"
                title="Logout"
              >
                <LogOut size={24} />
              </button>
            </>
          ) : (
            <>
              {/* Login Button */}
              <NavLink
                to="/login"
                className={`px-4 py-2 rounded-full border text-white font-medium transition duration-300 ${
                  darkMode
                    ? "border-white hover:bg-white hover:text-black"
                    : "border-white hover:bg-white hover:text-purple-900"
                }`}
              >
                Login
              </NavLink>

              {/* Register Button */}
              <NavLink
                to="/user"
                className={`px-4 py-2 rounded-full font-semibold transition duration-300 shadow-md ${
                  darkMode
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-white text-purple-900 hover:bg-purple-100/80"
                }`}
              >
                Register
              </NavLink>
            </>
          )}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
              darkMode
                ? "border-white hover:bg-white/20 text-white"
                : "border-white hover:bg-white/20 text-white"
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
