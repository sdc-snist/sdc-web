// FAQPage.jsx
import React, { useState } from "react";
import {
  FaChevronUp,
  FaChevronDown,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="pt-20">
          <h1 className="text-4xl font-bold mb-2">Frequently</h1>
          <h2 className="text-4xl font-bold mb-4">asked questions</h2>
          <p className="mt-4 text-gray-600 text-lg">
            The FAQ section provides answers to common questions about the
            event, helping participants understand the rules, registration
            process, and other essential details.
          </p>
        </div>
        <div className="mt-8">
          {[
            "How can I join SDC?",
            "Do we get any discounts on SDC events?",
            "What are the benefits of being a member?",
          ].map((question, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 mb-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer group"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <div className="transition-all duration-300">
                  <h3 className="font-semibold text-xl text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                    {question}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-600">
                      {index === 0 &&
                        "You can join SDC by registering through our website or attending one of our events."}
                      {index === 1 && "Yes, members get discounts on SDC events."}
                      {index === 2 &&
                        "Members get access to exclusive resources, events, and networking opportunities."}
                    </p>
                  </div>
                </div>
                {openIndex === index ? (
                  <FaChevronUp className="text-red-500 transition-transform duration-300 rotate-180" />
                ) : (
                  <FaChevronDown className="text-red-500 transition-transform duration-300" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white mt-12 p-8">
        <footer className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-2xl text-[#E32614E5]">
              Students Developers Community
            </h3>
            <p className="mt-4 text-lg">
              Empowering students through technical education and collaborative
              learning opportunities across India.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-lg">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl">Resources</h3>
            <ul className="mt-4 space-y-2 text-lg">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/sdc.snist"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-red-600 text-2xl hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/company/sdc-snist-student-chapter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-red-600 text-2xl hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://twitter.com/SDC_SNIST"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-red-600 text-2xl hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FAQPage;