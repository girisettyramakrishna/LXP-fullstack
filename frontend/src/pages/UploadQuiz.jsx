import React, { useState } from "react";

export default function UploadQuiz() {
  const [quizQuestions, setQuizQuestions] = useState([
    {
      type: "text",
      question: "",
      image: null,
      chart: "",
      options: ["", "", "", ""],
      answer: "",
    },
  ]);

  const handleFileUpload = (e, qIdx) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updated = [...quizQuestions];
        updated[qIdx].image = reader.result;
        setQuizQuestions(updated);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveQuiz = () => {
    console.log("Quiz Data:", quizQuestions);
    alert("✅ Quiz saved successfully with all question types!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-purple-50 flex justify-center py-12 px-6">
      <div className="bg-white w-full max-w-4xl rounded-2xl p-8 shadow-2xl border border-gray-200 
        max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-gray-100">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-purple-900 mb-2">
            🧠 Instructor Quiz Builder
          </h1>
          <p className="text-gray-800 font-medium">
            Create quizzes with text, image, or chart-based questions.  
            Add options, mark correct answers, and attach visuals easily.
          </p>
        </div>

        {/* Quiz Questions */}
        {quizQuestions.map((q, qIdx) => (
          <div
            key={qIdx}
            className="mb-10 bg-gray-50 p-6 rounded-2xl border border-gray-300 hover:shadow-md transition"
          >
            {/* Question Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">
                Question {qIdx + 1}
              </h2>
              <button
                onClick={() =>
                  setQuizQuestions((prev) =>
                    prev.filter((_, i) => i !== qIdx)
                  )
                }
                className="text-sm text-red-600 font-semibold hover:underline"
              >
                ❌ Remove
              </button>
            </div>

            {/* Select Question Type */}
            <div className="mb-4">
              <label className="block font-semibold text-gray-800 mb-2">
                Question Type
              </label>
              <select
                value={q.type}
                onChange={(e) => {
                  const updated = [...quizQuestions];
                  updated[qIdx].type = e.target.value;
                  setQuizQuestions(updated);
                }}
                className="border border-gray-400 rounded-lg px-4 py-2 text-gray-900 font-medium w-full focus:ring-2 focus:ring-purple-400"
              >
                <option value="text">📝 Text Question</option>
                <option value="image">🖼️ Image Question</option>
                <option value="chart">📊 Chart Question</option>
              </select>
            </div>

            {/* Question Input */}
            <label className="block font-semibold text-gray-800 mb-2">
              Question Text
            </label>
            <input
              type="text"
              value={q.question}
              onChange={(e) => {
                const updated = [...quizQuestions];
                updated[qIdx].question = e.target.value;
                setQuizQuestions(updated);
              }}
              placeholder="Type your question..."
              className="w-full border border-gray-400 rounded-lg px-4 py-2 mb-4 text-gray-900 font-medium focus:ring-2 focus:ring-purple-400"
            />

            {/* Image Upload (for image or chart type) */}
            {(q.type === "image" || q.type === "chart") && (
              <div className="mb-4">
                <label className="block font-semibold text-gray-800 mb-2">
                  {q.type === "image"
                    ? "Upload Image or Paste Image URL"
                    : "Upload Chart Image or Chart URL"}
                </label>

                {/* Upload / URL Field */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, qIdx)}
                    className="border border-gray-400 rounded-lg px-3 py-2 text-gray-700 w-full"
                  />
                  <input
                    type="text"
                    value={q.chart}
                    onChange={(e) => {
                      const updated = [...quizQuestions];
                      updated[qIdx].chart = e.target.value;
                      setQuizQuestions(updated);
                    }}
                    placeholder="Or paste an image/chart URL"
                    className="border border-gray-400 rounded-lg px-3 py-2 text-gray-900 font-medium w-full focus:ring-2 focus:ring-purple-400"
                  />
                </div>

                {/* Preview */}
                {(q.image || q.chart) && (
                  <div className="mt-4">
                    <p className="text-gray-800 font-medium mb-2">
                      Preview:
                    </p>
                    <img
                      src={q.image || q.chart}
                      alt="Question Visual"
                      className="rounded-lg shadow-md border border-gray-300 max-h-64 object-contain"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Options */}
            <div className="space-y-3">
              <label className="block font-semibold text-gray-800 mb-2">
                Options
              </label>
              {q.options.map((opt, oIdx) => (
                <div key={oIdx} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={opt}
                    onChange={(e) => {
                      const updated = [...quizQuestions];
                      updated[qIdx].options[oIdx] = e.target.value;
                      setQuizQuestions(updated);
                    }}
                    placeholder={`Option ${String.fromCharCode(65 + oIdx)}`}
                    className="flex-1 border border-gray-400 rounded-lg px-4 py-2 text-gray-900 font-medium focus:ring-2 focus:ring-purple-400"
                  />
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`answer-${qIdx}`}
                      checked={q.answer === opt}
                      onChange={() => {
                        const updated = [...quizQuestions];
                        updated[qIdx].answer = opt;
                        setQuizQuestions(updated);
                      }}
                      className="accent-purple-700 w-4 h-4"
                    />
                    <span className="text-gray-800 text-sm font-semibold">
                      Correct
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex justify-between items-center mt-8 sticky bottom-0 bg-white pt-3 pb-2 border-t">
          <button
            onClick={() =>
              setQuizQuestions((prev) => [
                ...prev,
                {
                  type: "text",
                  question: "",
                  image: null,
                  chart: "",
                  options: ["", "", "", ""],
                  answer: "",
                },
              ])
            }
            className="px-5 py-2 bg-purple-100 text-purple-900 font-semibold rounded-lg hover:bg-purple-200 transition"
          >
            ➕ Add Question
          </button>

          <button
            onClick={handleSaveQuiz}
            className="px-5 py-2 bg-purple-900 text-white font-semibold rounded-lg hover:bg-purple-800 transition"
          >
            💾 Save Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
