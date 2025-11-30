import React from "react";
import { useNavigate } from "react-router-dom";

const SandboxPage = () => {
  const navigate = useNavigate();

  // sample links — you can replace or extend these
  const links = [
    { name: "Lauch leetcode", url: "https://leetcode.com/", external: true },
   
  ];

  const handleRedirect = (link) => {
    if (link.external) {
      // open external link in a new tab
      window.open(link.url, "_blank", "noopener,noreferrer");
    } else {
      // navigate inside the app
      navigate(link.url);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-purple-900 mb-6">
         Sandbox Page
      </h1>

      <div className="grid gap-4 w-full max-w-md">
        {links.map((link, index) => (
          <button
            key={index}
            onClick={() => handleRedirect(link)}
            className="w-full py-3 px-4 bg-purple-900 text-white rounded-lg font-semibold hover:bg-purple-800 transition-all"
          >
            {link.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SandboxPage;
