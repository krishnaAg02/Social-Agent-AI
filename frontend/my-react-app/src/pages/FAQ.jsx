import { useState } from "react";
import { Plus, X } from "lucide-react"; // install: npm install lucide-react

const faqs = [
  {
    question: "1. What exactly does Social Agent AI do?",
    answer:
      "Social Agent AI works as your always-on marketing assistant without the big agency costs. We help businesses manage social media, schedule posts, and grow their audience automatically.",
  },
  {
    question: "2. Do I need any technical or marketing experience to use Social Agent AI?",
    answer:
      "No, Social Agent AI is built for everyone. Just sign up, connect your accounts, and let the platform handle everything from post scheduling to analytics.",
  },
  {
    question: "3. How quickly can I start seeing results?",
    answer:
      "You can start seeing engagement and audience growth within a few days of consistent use, depending on your posting frequency and niche.",
  },
  {
    question: "4. Is there a setup fee or long-term contract?",
    answer:
      "No setup fees or contracts! You can cancel anytime — our plans are flexible and designed for your convenience.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Frequently <br /> Asked Questions
          </h2>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-600 pb-4 transition-all duration-300"
            >
              <button
                className="flex justify-between items-center w-full text-left font-bold text-lg hover:text-indigo-400"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <X className="w-6 h-6 text-indigo-400" />
                ) : (
                  <Plus className="w-6 h-6 text-indigo-400" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-white-300 font-semibold">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
