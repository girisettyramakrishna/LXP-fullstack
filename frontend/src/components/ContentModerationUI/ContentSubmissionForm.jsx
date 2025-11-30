import React, { useState } from "react";

const ContentSubmissionForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Content submitted for moderation!");
  };

  return (
    <div className="bg-white min-h-screen p-8 rounded-lg shadow-md text-gray-900">
      <h2 className="text-3xl font-bold mb-4">Content Submission</h2>
      <p className="text-gray-700 mb-6">
        Submit your course content for moderation.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded-md w-full"
          required
        />

        <textarea
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded-md w-full h-32"
          required
        />

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-2 rounded-md w-full"
          required
        />

        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContentSubmissionForm;
