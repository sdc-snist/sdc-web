import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I join SDC?",
      answer:
        "You can join SDC by registering through our website or attending one of our events.",
    },
    {
      question: "Do we get any discounts on SDC events?",
      answer: "Yes, members get discounts on SDC events.",
    },
    {
      question: "What are the benefits of being a member?",
      answer:
        "Members get access to exclusive resources, events, and networking opportunities.",
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen py-16 pt-20 px-4 flex flex-col items-center">
      {/* Header Section */}
      <div className="max-w-4xl text-center mb-16">
        <h1 className="text-5xl font-bold mb-2">Frequently</h1>
        <h2 className="text-5xl font-bold text-red-500">asked questions</h2>
        <p className="mt-6 text-gray-600 text-lg">
          The FAQ section provides answers to common questions about the
          community, events, and benefits, helping participants understand the
          rules, registration process, and other essential details.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
        <div className="text-center bg-red-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-4xl font-bold text-red-500">10000+</h3>
          <p className="mt-2 text-gray-700">Registered Members</p>
        </div>
        <div className="text-center bg-red-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-4xl font-bold text-red-500">50+</h3>
          <p className="mt-2 text-gray-700">Events Hosted</p>
        </div>
        <div className="text-center bg-red-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-4xl font-bold text-red-500">20+</h3>
          <p className="mt-2 text-gray-700">Industry Collaborations</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl w-full">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 mb-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer group"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <div className="transition-all duration-300 w-full">
                <h3 className="font-semibold text-xl text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                  {faq.question}
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
              {openIndex === index ? (
                <FaChevronUp className="text-red-500 transition-transform duration-300 rotate-180 ml-4" />
              ) : (
                <FaChevronDown className="text-red-500 transition-transform duration-300 ml-4" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
