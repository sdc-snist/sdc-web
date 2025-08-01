import React, { useState, useEffect } from "react";
import logo from "../../assets/sdc-white.png"; // Import the logo image
import aiag from "../../assets/logo AI.png"; // Import the logo image
import date from "../../assets/dateaug.png"; // Import the logo image
import vag from "../../assets/snist.jpg"; // Import the logo image
import time from "../../assets/930.png"; // Import the logo image
import chandanImage from "../../assets/chandan.png"; // Example import
import shubamImage from "../../assets/shubam.png";

import {
  ShieldCheck,
  BrainCircuit,
  Bot,
  Briefcase,
  Rocket,
  Trophy,
  MapPin,
  Calendar,
  Clock,
} from "lucide-react";

// --- Main App Component ---
// This is the root component that brings all other sections together.
export default function App() {
  return <AiEvent />;
}

// --- AI Event Page Component ---
// The main container for the entire event page.
const AiEvent = () => {
  return (
    <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-100 font-sans antialiased">
      <Navbar />
      <main className="container mx-auto px-6 py-12 md:py-20">
        <HeroSection />
        <WhatYoullLearn />
        <Speakers />
        <EventDetails />
      </main>
      <Footer />
    </div>
  );
};

const SpeakerCard = ({ imgSrc, name, title, imgClassName }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden bg-gray-700 mb-4 shadow-lg transition-transform duration-300 hover:scale-105">
        <img
          src={imgSrc}
          alt={`Photo of ${name}`}
          className={`w-full h-full object-cover ${imgClassName}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/224x224/2d3748/ffffff?text=Image+Not+Found";
          }}
        />
      </div>
      <h3 className="text-2xl font-bold text-white">{name}</h3>
      <p className="text-lg text-gray-300">{title}</p>
    </div>
  );
};
const Speakers = () => {
  const speakers = [
    {
      name: "Chandan Kumar",
      title: "Founder, Repeatless",
      imgSrc: chandanImage,
      imgClassName: "",
    },
    {
      name: "Shubam Lal",
      title: "SDE at Microsoft",
      imgSrc: shubamImage,
      imgClassName: "grayscale",
    },
  ];

  return (
    <section className="py-10 md:py-20">
      <div
        className="relative bg-[#2c1a5b] w-full max-w-4xl mx-auto rounded-2xl p-8 sm:p-12 border border-purple-500/30 shadow-2xl shadow-purple-900/50"
        style={{
          backgroundImage: `
              radial-gradient(circle at 15% 20%, rgba(128, 90, 213, 0.1), transparent 30%),
              radial-gradient(circle at 85% 80%, rgba(128, 90, 213, 0.1), transparent 30%)
            `,
        }}
      >
        {/* Decorative elements */}
        <div
          className="absolute top-4 left-4 w-16 h-16 bg-repeat bg-[length:8px_8px]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          }}
        ></div>
        <div
          className="absolute bottom-4 right-4 w-16 h-16 bg-repeat bg-[length:8px_8px]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          }}
        ></div>
        <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-2 h-24 bg-purple-500/50 rounded-full blur-sm"></div>
        <div className="absolute top-1/4 -right-2 transform -translate-y-1/2 w-2 h-24 bg-purple-500/50 rounded-full blur-sm"></div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-12">
          Our Speakers
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-16">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              imgSrc={speaker.imgSrc}
              name={speaker.name}
              title={speaker.title}
              imgClassName={speaker.imgClassName}
            />
          ))}
        </div>

        {/* Decorative lines */}
        <div className="absolute bottom-[-20px] left-[10%] w-[30%] h-[2px] bg-purple-400/30 rounded-full">
          <div className="absolute top-[-4px] left-[50%] w-2 h-2 bg-purple-400 rounded-full"></div>
        </div>
        <div className="absolute top-[-20px] right-[10%] w-[30%] h-[2px] bg-purple-400/30 rounded-full">
          <div className="absolute top-[-4px] right-[50%] w-2 h-2 bg-purple-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

// --- Navigation Bar Component ---
// A sticky navbar for easy navigation.
const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 ">
      <div className="container mx-auto flex items-center justify-between p-4 ">
        <div className="flex items-center space-x-2">
          <a href="http://sdcindia.tech">
            <img
              src={logo}
              alt="SDC Logo"
              className="h-11 sm:h-11 md:h-13 lg:h-15 xl:h-18 cursor-pointer w-auto mr-2"
            />
          </a>
        </div>
        <a
          href="https://payments.cashfree.com/forms?code=register-ai-agent-workshop"
          className="bg-white text-black
             font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-white/20 
             transition-all duration-300 transform hover:scale-105 border border-gray-300"
        >
          Register Now
        </a>
      </div>
    </header>
  );
};

// --- Hero Section Component ---
// The introductory section with the hero image, description, and countdown.
const HeroSection = () => {
  // Countdown Timer Logic
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-08-07T09:30:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <section id="about" className="text-center  ">
      {/* Hero Image: The main visual for the workshop */}
      <div className="flex justify-center mb-8">
        <img
          src={aiag}
          alt="AI Agents Workshop"
          className="max-w-full h-auto md:max-w-2xl"
        />
      </div>

      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
        Unlock the world of AI with the AI Agent Essentials Workshop 2025—a
        practical, project-driven experience for learners, creators, and tech
        enthusiasts. Discover intelligent agent design, explore modern AI
        assistants, and build your own agentic application with state-of-the-art
        tools and APIs. Step confidently into the future of AI innovation.
      </p>
      <div className="flex justify-center mb-12">
        <a
          href="#register"
          className="bg-white text-black  font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
        >
          Step Into The Future of AI
        </a>
      </div>

      {/* Countdown Timer */}
      <div className="max-w-2xl mx-auto p-4 bg-black/20 rounded-xl backdrop-blur-sm border border-gray-500/20 mb-20">
        <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-4">
          Don't Miss Out: Secure Your Spot Before Time Runs Out!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
          <div className="p-4 bg-black/20 rounded-lg">
            <div className="text-4xl font-bold">{timeLeft.days || "0"}</div>
            <div className="text-sm text-gray-400">Days</div>
          </div>
          <div className="p-4 bg-black/20 rounded-lg">
            <div className="text-4xl font-bold">{timeLeft.hours || "0"}</div>
            <div className="text-sm text-gray-400">Hours</div>
          </div>
          <div className="p-4 bg-black/20 rounded-lg">
            <div className="text-4xl font-bold">{timeLeft.minutes || "0"}</div>
            <div className="text-sm text-gray-400">Minutes</div>
          </div>
          <div className="p-4 bg-black/20 rounded-lg">
            <div className="text-4xl font-bold">{timeLeft.seconds || "0"}</div>
            <div className="text-sm text-gray-400">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- "What You'll Learn" Section ---
// A grid layout showcasing the key topics of the workshop.
const WhatYoullLearn = () => {
  const topics = [
    {
      icon: <Rocket className="h-8 w-8 mx-auto text-blue-400" />,
      title: "AI Roadmap",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 mx-auto text-blue-400" />,
      title: "n8n Basics",
    },
    {
      icon: <Bot className="h-8 w-8 mx-auto text-blue-400" />,
      title: "n8n Automation",
    },
    {
      icon: <BrainCircuit className="h-8 w-8 mx-auto text-blue-400" />,
      title: "What are Agents & How to Build?",
    },
    {
      icon: <Briefcase className="h-8 w-8 mx-auto text-blue-400" />,
      title: "Start an Agency",
    },
    {
      icon: <Trophy className="h-8 w-8 mx-auto text-blue-400" />,
      title: "Final Project",
    },
  ];

  return (
    <section
      id="learn"
      className="py-16 md:py-24 bg-black/20 backdrop-blur-sm border border-gray-500/20 rounded-2xl"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          What You’ll Learn
        </h2>
        <p className="text-gray-400 mt-2">
          A comprehensive journey from fundamentals to deployment.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="text-center p-6 bg-black/20 rounded-xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="mb-4">{topic.icon}</div>
            <h3 className="font-semibold text-lg text-white">{topic.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Event Details Section ---
// Displays the date, location, and time of the event.
const EventDetails = () => {
  return (
    <section id="details" className="py-16 md:py-24">
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-black/20 backdrop-blur-sm border border-gray-500/20 rounded-xl h-full">
          {/* The heading for the card */}
          <h3 className="text-xl font-bold text-white mb-4">When?</h3>

          {/* The main image/icon for the card.
    - We give it a prominent size.
    - 'mb-4' adds space between the image and the date below.
  */}
          <img
            src={date}
            alt="Calendar and robot icon"
            className="w-32 h-32 md:w-36 md:h-36 object-contain mb-4"
          />

          {/* The date text at the bottom */}
          <p className="text-lg text-gray-300">07-Aug-2025</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-black/20 backdrop-blur-sm border border-gray-500/20 rounded-xl h-full">
          {/* Make the image fill the width and maintain its aspect ratio */}
          <img
            src={vag} // your image variable
            alt="Vaughn Seminar Hall, SNIST"
            className="w-full h-auto object-cover rounded-lg mb-4"
          />
          <p className="text-lg text-gray-300 text-center">
            Vaughn Seminar Hall, SNIST
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center p-6 bg-black/20 backdrop-blur-sm border border-gray-500/20 rounded-xl h-full">
          {/* The clock icon. 
    - We give it a specific size to make it prominent.
    - 'mb-4' adds space between the icon and the text.
  */}
          <img
            src={time}
            alt="Clock icon"
            className="w-28 h-28 md:w-32 md:h-32 mb-4"
          />

          {/* The heading */}
          <h3 className="text-xl font-bold text-white mb-1">Time?</h3>

          {/* The time range */}
          <p className="text-lg text-gray-300">09:30 AM - 04:00 PM</p>
        </div>
      </div>
    </section>
  );
};

// --- Footer Component ---
// A final call-to-action section.
const Footer = () => {
  return (
    <footer id="register" className="border-t border-gray-700 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Transform Your Future with AI
        </h2>
        <p className="text-gray-400 mb-8">
          Seats are limited. Secure your spot today!
        </p>
        <a
          href="https://payments.cashfree.com/forms?code=register-ai-agent-workshop"
          className="bg-white text-black font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
        >
          Register Now
        </a>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.linkedin.com/company/sdc-snist-student-chapter/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/sdc.snist/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
            </svg>
          </a>
        </div>
        <p className="text-gray-500 text-sm mt-8">© 2025 SDC</p>
      </div>
    </footer>
  );
};
