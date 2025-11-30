import React, { useEffect, useState } from "react";
import { CheckCircle, XCircle, Clock } from "lucide-react";

const PaymentNotifications = ({ transactions = [] }) => {
  const [notifications, setNotifications] = useState([]);

  // Whenever transactions update (like after a payment), show notifications
  useEffect(() => {
    if (transactions.length > 0) {
      const newNotifications = transactions.map((txn) => ({
        id: txn.id,
        type: txn.status,
        message: txn.message,
        time: new Date(txn.timestamp).toLocaleTimeString(),
      }));
      setNotifications(newNotifications);
    }
  }, [transactions]);

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case "error":
        return <XCircle className="w-6 h-6 text-red-600" />;
      case "pending":
        return <Clock className="w-6 h-6 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStyles = (type) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-500 text-green-800";
      case "error":
        return "bg-red-50 border-red-500 text-red-800";
      case "pending":
        return "bg-yellow-50 border-yellow-500 text-yellow-800";
      default:
        return "bg-gray-50 border-gray-300 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Payment Notifications
      </h1>

      {notifications.length === 0 ? (
        <p className="text-gray-500 text-center italic">
          No transactions yet. Notifications will appear here after payments.
        </p>
      ) : (
        <div className="w-full max-w-3xl mx-auto space-y-4">
          {notifications.map((note) => (
            <div
              key={note.id}
              className={`flex justify-between items-center px-5 py-4 rounded-xl shadow-md border-l-4 ${getStyles(
                note.type
              )}`}
            >
              <div className="flex items-center gap-4">
                {getIcon(note.type)}
                <div>
                  <h2 className="font-semibold text-lg capitalize">
                    {note.type === "success"
                      ? "Payment Successful"
                      : note.type === "error"
                      ? "Payment Failed"
                      : "Payment Pending"}
                  </h2>
                  <p className="text-sm text-gray-700">{note.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{note.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaymentNotifications;
