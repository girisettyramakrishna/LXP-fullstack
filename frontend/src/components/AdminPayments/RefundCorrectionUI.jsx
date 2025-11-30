import React from "react";

const RefundCorrectionUI = () => {
  return (
    <div className="bg-white min-h-screen p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Refund & Manual Correction
      </h2>
      <p className="text-gray-800 mb-4">
        Update transaction status or issue refunds manually when required.
      </p>

      <form className="space-y-4 text-gray-900">
        <div>
          <label className="block text-gray-900 font-semibold mb-1">
            Transaction ID:
          </label>
          <input
            type="text"
            placeholder="Enter Transaction ID"
            className="border border-gray-400 p-2 rounded-md w-full text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-900 font-semibold mb-1">
            Select Action:
          </label>
          <select className="border border-gray-400 p-2 rounded-md w-full text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none">
            <option>-- Select Action --</option>
            <option>Mark as Successful</option>
            <option>Mark as Failed</option>
            <option>Issue Refund</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-900 font-semibold mb-1">
            Notes (optional):
          </label>
          <textarea
            placeholder="Add notes or comments"
            className="border border-gray-400 p-2 rounded-md w-full h-24 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        <button
          type="button"
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-all duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RefundCorrectionUI;