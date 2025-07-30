import React, { useState } from "react";
import logo from "../assets/sdc.png"; // Import the logo image
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
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => navigate("/")}
                className="text-gray-800 hover:text-gray-600 cursor-pointer px-3 py-2 rounded-md text-xl font-medium"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/events")}
                className="text-gray-800 hover:text-gray-600 cursor-pointer px-3 py-2 rounded-md text-xl font-medium"
              >
                Events
              </button>
              <button
                onClick={() => navigate("/about-us")}
                className="text-gray-800 hover:text-gray-600 cursor-pointer px-3 py-2 rounded-md text-xl font-medium"
              >
                About Us
              </button>

              <button
                onClick={() => navigate("/FAQs")}
                className="text-gray-800 hover:text-gray-600 cursor-pointer px-3 py-2 rounded-md text-xl font-medium"
              >
                FAQs
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
            >
              {isOpen ? (
                // Close Icon
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <button
            onClick={() => {;
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
