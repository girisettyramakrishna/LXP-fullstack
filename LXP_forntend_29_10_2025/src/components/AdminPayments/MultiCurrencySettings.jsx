import React, { useState } from "react";

const MultiCurrencySettings = () => {
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="bg-white min-h-screen p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Multi-Currency Settings
      </h2>
      <p className="text-gray-800 mb-6">
        Configure currency options for your platform pricing.
      </p>

      <div>
        <label className="block text-gray-900 font-semibold mb-2">
          Select Default Currency:
        </label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="border border-gray-400 p-2 rounded-md w-full text-gray-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        >
          <option value="USD">USD – US Dollar</option>
          <option value="INR">INR – Indian Rupee</option>
          <option value="EUR">EUR – Euro</option>
        </select>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded-md border border-gray-300">
        <p className="text-gray-900">
          Current Selected Currency:{" "}
          <span className="font-semibold text-purple-600">{currency}</span>
        </p>
      </div>
    </div>
  );
};

export default MultiCurrencySettings;