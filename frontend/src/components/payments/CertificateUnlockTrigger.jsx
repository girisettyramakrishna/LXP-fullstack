import React from "react";
import { Award, Lock } from "lucide-react";

const CertificateUnlockTrigger = ({ hasPaid }) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
          <Award className="w-7 h-7 text-purple-600" /> Certificate Access
        </h2>

        {hasPaid ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 transition-all duration-300">
            <p className="text-green-700 font-medium mb-3">
              🎉 Congratulations! Your certificate is ready.
            </p>
            <a
              href="#"
              className="inline-block bg-purple-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-purple-700 transition-all"
            >
              Download Your Certificate
            </a>
          </div>
        ) : (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 transition-all duration-300">
            <Lock className="mx-auto w-8 h-8 text-gray-400 mb-3" />
            <p className="text-gray-600 italic">
              Complete your payment to unlock the certificate.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateUnlockTrigger;
