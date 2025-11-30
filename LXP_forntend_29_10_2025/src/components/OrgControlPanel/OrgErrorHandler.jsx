import React, { useState, useEffect } from "react";
import OrgErrorHandler from "./OrgErrorHandler";

const OrgErrorHandlerDemo = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setLoading(false);
      setError("Failed to fetch organization data.");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Org Error Handler Demo
      </h2>

      <OrgErrorHandler loading={loading} error={error} />

      {!loading && !error && (
        <p className="text-gray-700">✅ Data loaded successfully!</p>
      )}
    </div>
  );
};

export default OrgErrorHandlerDemo;
