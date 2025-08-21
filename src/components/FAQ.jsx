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
    <section className="section py-20 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="max-w-4xl text-center mb-14">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-2">Frequently <span className="text-[var(--color-primary)]">Asked Questions</span></h1>
        <p className="mt-6 text-[var(--color-text-muted)] text-lg">
          Find answers to common questions about our community, events, and membership benefits.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
        <div className="card bg-[var(--color-card)] text-center p-8">
          <h3 className="text-4xl font-extrabold text-[var(--color-primary)]">10,000+</h3>
          <p className="mt-2 text-[var(--color-text-muted)]">Registered Members</p>
        </div>
        <div className="card bg-[var(--color-card)] text-center p-8">
          <h3 className="text-4xl font-extrabold text-[var(--color-primary)]">50+</h3>
          <p className="mt-2 text-[var(--color-text-muted)]">Events Hosted</p>
        </div>
        <div className="card bg-[var(--color-card)] text-center p-8">
          <h3 className="text-4xl font-extrabold text-[var(--color-primary)]">20+</h3>
          <p className="mt-2 text-[var(--color-text-muted)]">Industry Collaborations</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl w-full">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`card bg-[var(--color-card)] border border-[var(--color-border)] shadow-lg rounded-xl p-6 mb-6 cursor-pointer group transition-all duration-300 ${openIndex === index ? 'ring-2 ring-[var(--color-primary)]' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <div className="transition-all duration-300 w-full">
                <h3 className={`font-bold text-lg lg:text-xl text-white group-hover:text-[var(--color-primary)] transition-colors duration-300 ${openIndex === index ? 'text-[var(--color-primary)]' : ''}`}>{faq.question}</h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[var(--color-text-muted)]">{faq.answer}</p>
                </div>
              </div>
              {openIndex === index ? (
                <FaChevronUp className="text-[var(--color-primary)] transition-transform duration-300 rotate-180 ml-4" />
              ) : (
                <FaChevronDown className="text-[var(--color-primary)] transition-transform duration-300 ml-4" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;
