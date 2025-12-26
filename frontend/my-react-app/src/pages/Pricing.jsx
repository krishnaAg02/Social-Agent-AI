
import { useEffect, useState } from "react";
import SubscribeModal from "../pages/Subscribe"; // <-- ensure this file exists

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const plans = [
    {
      name: "Pro",
      monthly: 5999,
      yearly: Math.round(5999 * 12 * 0.9),
      features: ["2 Accounts Handling", "AI Captions Generation", "Post Scheduling", "Email Support"],
      popular: true,
    },
    {
      name: "Business",
      monthly: 9999,
      yearly: Math.round(9999 * 12 * 0.9),
      features: [ "All Features Of Pro", ,"Premium Ads Quality","5 Accounts Handling","Priority Support"],
      popular: false,
    },
  ];

  // open modal for a plan
  const handleGetStarted = (planName) => {
    setSelectedPlan(planName);
    setIsOpen(true);
  };

  // prevent background scroll when modal open
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <section id="pricing" className="bg-gradient-to-br from-indigo-50 via-white to-sky-50 py-16">
      {/* Subscribe modal component */}
      <SubscribeModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        plan={selectedPlan}
      />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-700 text-lg mb-10">
          Choose a plan that scales with your AI-powered marketing growth.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`font-semibold ${billing === "monthly" ? "text-indigo-600" : "text-gray-500"}`}>
            Monthly
          </span>

          <button
            onClick={() => setBilling(billing === "monthly" ? "yearly" : "monthly")}
            className="relative w-14 h-8 bg-indigo-600 rounded-full transition-all"
            aria-label="Toggle billing"
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${billing === "yearly" ? "translate-x-6" : ""}`}
            />
          </button>

          <span className={`font-semibold ${billing === "yearly" ? "text-indigo-600" : "text-gray-500"}`}>
            Yearly
          </span>

          <span className="ml-2 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
            SAVE 10%
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const price = billing === "monthly" ? plan.monthly : plan.yearly;

            return (
              <div key={plan.name} className="relative bg-white/80 backdrop-blur rounded-3xl shadow-xl border border-gray-200 p-8 transform transition-all hover:-translate-y-3">
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    MOST POPULAR
                  </span>
                )}

                <h3 className="text-2xl font-bold text-indigo-600 mb-2">{plan.name}</h3>

                <div className="text-4xl font-extrabold text-gray-900 mb-2">
                  ₹{price.toLocaleString()}
                  <span className="text-base font-medium text-gray-600">/{billing === "monthly" ? "mo" : "yr"}</span>
                </div>

                {billing === "yearly" && <p className="text-green-600 text-sm mb-4">Billed yearly — Save 10%</p>}

                <ul className="text-gray-700 space-y-2 mb-6 text-left max-w-xs mx-auto">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2"><span className="text-indigo-600">✓</span>{f}</li>
                  ))}
                </ul>

                <button
                  onClick={() => handleGetStarted(plan.name)}
                  className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:opacity-90"
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>

        {/* Compare table */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-6">Compare Plans</h3>
          <div className="overflow-x-auto bg-white/80 backdrop-blur rounded-2xl shadow border border-gray-200">
            <table className="min-w-full text-left text-gray-700">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="py-4 px-6 font-semibold">Features</th>
                  <th className="py-4 px-6 font-semibold text-center">Pro</th>
                  <th className="py-4 px-6 font-semibold text-center">Business</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["AI Video Ads", true, true],
                  ["AI Caption Generator", true, true],
                  ["Auto Scheduling", true, true],
                  ["Multi-Platform Posting", true, true],
                  ["Advanced Analytics", false, true],
                  ["Account Handling", "2 Accounts", "5 Accounts"],
                  ["Priority Support", false, true],
                  ["API & Automation (n8n)", false, true],
                ].map(([feature, pro, business], i) => (
                  <tr key={i} className="border-t border-gray-200">
                    <td className="py-4 px-6 font-medium">{feature}</td>
                    <td className="py-4 px-6 text-center">
                      {pro === true ? <span className="text-green-600">✔</span> : pro === false ? <span className="text-red-500">✖</span> : pro}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {business === true ? <span className="text-green-600">✔</span> : business === false ? <span className="text-red-500">✖</span> : business}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}