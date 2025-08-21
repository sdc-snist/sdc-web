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
  <nav className="navbar mx-auto mt-2 md:mt-6 mb-8 bg-black/40 backdrop-blur-md shadow-lg border border-[var(--color-border)] rounded-2xl max-w-6xl">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => navigate("/")} className="flex items-center">
              <img
                src={logo}
                alt="SDC Logo"
                className="h-8 w-auto mr-3 drop-shadow-lg"
              />
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate("/")}
              className="text-white hover:text-[var(--color-primary)] px-3 py-2 rounded-md text-lg font-semibold transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/events")}
              className="text-white hover:text-[var(--color-primary)] px-3 py-2 rounded-md text-lg font-semibold transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => navigate("/about-us")}
              className="text-white hover:text-[var(--color-primary)] px-3 py-2 rounded-md text-lg font-semibold transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => navigate("/FAQs")}
              className="text-white hover:text-[var(--color-primary)] px-3 py-2 rounded-md text-lg font-semibold transition-colors"
            >
              FAQs
            </button>
            <button
              onClick={() => navigate("/aiagent")}
              className="btn ml-4"
            >
              🎉 AI Event
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white hover:text-[var(--color-primary)] focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 space-y-2 bg-[var(--color-bg-alt)] rounded-b-2xl shadow-lg">
          <button
            onClick={() => {
              navigate("/");
              toggleMenu();
            }}
            className="block text-white hover:text-[var(--color-primary)] px-3 py-3 rounded-lg text-lg font-semibold w-full text-left transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => {
              navigate("/events");
              toggleMenu();
            }}
            className="block text-white hover:text-[var(--color-primary)] px-3 py-3 rounded-lg text-lg font-semibold w-full text-left transition-colors"
          >
            Events
          </button>
          <button
            onClick={() => {
              navigate("/about-us");
              toggleMenu();
            }}
            className="block text-white hover:text-[var(--color-primary)] px-3 py-3 rounded-lg text-lg font-semibold w-full text-left transition-colors"
          >
            About Us
          </button>
          <button
            onClick={() => {
              navigate("/FAQs");
              toggleMenu();
            }}
            className="block text-white hover:text-[var(--color-primary)] px-3 py-3 rounded-lg text-lg font-semibold w-full text-left transition-colors"
          >
            FAQs
          </button>
          <button
            onClick={() => {
              navigate("/aiagent");
              toggleMenu();
            }}
            className="btn w-full text-left mt-2"
          >
            🎉 AI Event
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
