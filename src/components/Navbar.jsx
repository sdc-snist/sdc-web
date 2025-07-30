// Navbar.jsx
import React, { useState } from "react";
import logo from "../assets/sdc.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onLinkClick, refs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white bg-opacity-50 backdrop-blur-lg shadow-lg fixed top-4 left-4 right-4 z-50 shadow-md rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => navigate("/")} className="flex items-center">
              <img
                src={logo}
                alt="SDC Logo"
                className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 cursor-pointer w-auto mr-2"
              />
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => navigate("/")}
              className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-xl font-medium"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/events")}
              className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-xl font-medium"
            >
              Events
            </button>
            <button
              onClick={() => navigate("/about-us")}
              className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-xl font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => navigate("/FAQs")}
              className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-xl font-medium"
            >
              FAQs
            </button>

            {/* 🎉 Surprise AI Event Button */}
            <button
              onClick={() => navigate("/aiagent")}
              className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition duration-300"
            >
              🎉 AI Event
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <button
            onClick={() => {
              navigate("/");
              toggleMenu();
            }}
            className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Home
          </button>
          <button
            onClick={() => {
              navigate("/events");
              toggleMenu();
            }}
            className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Events
          </button>
          <button
            onClick={() => {
              onLinkClick(refs.aboutUsRef);
              toggleMenu();
            }}
            className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            About Us
          </button>
          <button
            onClick={() => {
              onLinkClick(refs.faqRef);
              toggleMenu();
            }}
            className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            FAQs
          </button>

          {/* 🎉 AI Agent Event Mobile Button */}
          <button
            onClick={() => {
              navigate("/aiagent");
              toggleMenu();
            }}
            className="w-full text-left bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition duration-300"
          >
            🎉 AI Agent Event
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
