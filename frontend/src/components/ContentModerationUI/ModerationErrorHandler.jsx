import React from "react";

const ModerationErrorHandler = ({ loading, error }) => {
  if (loading)
    return (
      <p className="text-gray-700 text-center mt-4">⏳ Loading content...</p>
    );
  if (error)
    return <p className="text-red-600 text-center mt-4">⚠️ {error}</p>;
  return null;
};

export default ModerationErrorHandler;
