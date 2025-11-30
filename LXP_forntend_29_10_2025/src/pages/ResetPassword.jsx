import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate(); // ✅ Correctly placed inside component

  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  // Handles sending OTP
  const handleVerify = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    // Simulate OTP send (Replace this with API call)
    setOtpSent(true);
    alert(`OTP sent to ${email}`);
  };

  // Handles OTP input value change
  const handleOTPChange = (e, index) => {
    const value = e.target.value;

    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Backspace navigation for OTP fields
  const handleOTPKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Submits the OTP
  const handleOTPSubmit = (e) => {
    e.preventDefault();

    const fullOtp = otp.join("");
    if (!/^\d{6}$/.test(fullOtp)) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }

    // Simulate OTP verification (replace with API logic)
    alert("OTP verified!");

    // Navigate to password reset page
    navigate("/reset-password"); // ✅ Working redirect
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-8 border-t-4 border-purple-900">
        <h2 className="text-2xl font-bold text-purple-900 text-center mb-4">
          Reset Password
        </h2>

        <form onSubmit={otpSent ? handleOTPSubmit : handleVerify} className="space-y-4">
          {/* Email Field */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-purple-900 text-gray-900"
            required
            disabled={otpSent}
          />

          {/* OTP Fields */}
          {otpSent && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Enter 6-digit OTP
              </label>
              <div className="flex justify-between gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOTPChange(e, index)}
                    onKeyDown={(e) => handleOTPKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-12 h-12 text-center text-xl border rounded-lg border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 caret-black"
                    required
                  />
                ))}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-800 text-white py-2 rounded-lg font-semibold hover:bg-purple-500 transition-colors"
          >
            {otpSent ? "Submit OTP" : "Verify"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
