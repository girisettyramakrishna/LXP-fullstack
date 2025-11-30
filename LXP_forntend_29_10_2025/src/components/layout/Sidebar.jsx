import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-base-200 h-screen p-4 hidden md:block">
      <ul className="menu">
        <li><a>Dashboard</a></li>
        <li><a>My Courses</a></li>
        <li><a>Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
