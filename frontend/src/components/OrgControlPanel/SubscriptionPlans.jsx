import React from "react";

const SubscriptionPlans = () => {
  const plans = [
    { name: "Basic", price: "$20/mo", features: ["Up to 10 users", "Email support"] },
    { name: "Pro", price: "$50/mo", features: ["Up to 50 users", "Priority support"] },
    { name: "Enterprise", price: "Custom", features: ["Unlimited users", "Dedicated support"] },
  ];

  return (
    <div className="bg-white min-h-screen p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Subscription Plans</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <div key={i} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
            <p className="text-purple-600 font-bold mt-2">{plan.price}</p>
            <ul className="mt-4 text-gray-700 list-disc list-inside space-y-1">
              {plan.features.map((f, j) => (
                <li key={j}>{f}</li>
              ))}
            </ul>
            <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 w-full">
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
