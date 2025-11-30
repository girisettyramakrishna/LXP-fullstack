import React from "react";

const FileUpload = ({ label, onFileSelect }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type="file"
        className="w-full text-gray-700 dark:text-gray-300"
        onChange={(e) => onFileSelect(e.target.files[0])}
      />
    </div>
  );
};

export default FileUpload;