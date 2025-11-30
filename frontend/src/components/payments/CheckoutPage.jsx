import React, { useState } from "react";
import PaymentNotifications from "./PaymentNotifications";
import { CreditCard, Tag } from "lucide-react";

const CheckoutPage = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [showNotification, setShowNotification] = useState(null);

  const handlePayment = () => {
    if (!selectedCourse) {
      setShowNotification({ type: "error", message: "Please select a course!" });
      return;
    }
    setShowNotification({ type: "success", message: "Payment successful!" });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
          <CreditCard className="w-7 h-7 text-purple-600" /> Payment Checkout
        </h2>

        <div className="mb-5">
          <label className="block text-gray-700 mb-2 font-medium">
            Select Course:
          </label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
          >
            <option value="">-- Choose a course --</option>
            <option value="React Basics">React Basics</option>
            <option value="Advanced JavaScript">Advanced JavaScript</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium flex items-center gap-2">
            <Tag className="w-5 h-5 text-purple-600" /> Discount Code:
          </label>
          <input
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            placeholder="Enter code (optional)"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
          />
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold shadow-md transition-all"
        >
          Pay Now
        </button>

        {showNotification && (
          <div className="mt-6">
            <PaymentNotifications
              type={showNotification.type}
              message={showNotification.message}
              onClose={() => setShowNotification(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
