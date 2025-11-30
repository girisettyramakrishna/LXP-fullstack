import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, CircleDot } from "lucide-react";

export default function CourseProgress({ status }) {
  const steps = ["Enrolled", "Learning", "Completed"];
  const currentStep = steps.indexOf(status);

  return (
    <div className="mt-6 relative">
      <div className="flex items-center justify-between relative">
        {/* Line */}
        <div className="absolute top-5 left-0 w-full h-[3px] bg-gray-200 rounded-full"></div>

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center flex-1 relative">
            {/* Line fill */}
            {index === 0 && (
              <motion.div
                className="absolute top-5 left-0 h-[3px] rounded-full bg-purple-600"
                style={{
                  width: `${(currentStep / (steps.length - 1)) * 100}%`,
                }}
                transition={{ duration: 0.6 }}
              />
            )}

            {/* Circle */}
            <motion.div
              className={`z-10 w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                index <= currentStep
                  ? "bg-purple-600 border-purple-600 text-white"
                  : "bg-white border-gray-300 text-gray-400"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {index < currentStep ? <CheckCircle2 className="w-6 h-6" /> : <CircleDot className="w-6 h-6" />}
            </motion.div>

            {/* Label */}
            <div
              className={`mt-2 text-sm font-medium ${
                index <= currentStep ? "text-purple-700" : "text-gray-500"
              }`}
            >
              {step}
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar below */}
      <div className="mt-8">
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <motion.div
            className="h-2 bg-purple-600 rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: `${((currentStep + 1) / steps.length) * 100}%`,
            }}
            transition={{ duration: 0.7 }}
          ></motion.div>
        </div>
        <p className="text-sm text-gray-600 mt-2 text-center">
          {Math.round(((currentStep + 1) / steps.length) * 100)}% Completed
        </p>
      </div>
    </div>
  );
}
