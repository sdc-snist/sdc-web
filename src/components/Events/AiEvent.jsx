import React, { useState, useEffect } from "react";
import logo from "../../assets/sdc-white.png"; // Import the logo image
import aiag from "../../assets/aiagent.png"; // Import the logo image
import date from "../../assets/dateaug.png"; // Import the logo image
import vag from "../../assets/vag.png"; // Import the logo image
import time from "../../assets/clk.png"; // Import the logo image

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
        <EventDetails />
      </main>
      <Footer />
    </div>
  );
};

// --- Navigation Bar Component ---
// A sticky navbar for easy navigation.
const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 ">
      <div className="container mx-auto flex items-center justify-between p-4 ">
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="SDC Logo"
            className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 cursor-pointer w-auto mr-2"
          />
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
    const difference = +new Date("2025-08-07T10:00:00") - +new Date();
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
        <div className="p-8 bg-black/20 backdrop-blur-sm border border-gray-500/20 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-2">When?</h3>
          <img src={date} alt="" srcset="" />
          <p className="text-lg text-gray-300">07-Aug-2025</p>
        </div>
        <div className="p-8 bg-black/20 backdrop-blur-sm border border-gray-500/20 rounded-xl">
          <img src={vag} alt="" srcset="" />
          <p className="text-lg text-gray-300">Vaughn Seminar Hall, SNIST</p>
        </div>
        <div className="p-8 bg-black/20 backdrop-blur-sm border border-gray-500/20 rounded-xl">
          <img src={time} alt="" srcset="" />
          <h3 className="text-xl font-bold text-white mb-2">Time?</h3>
          <p className="text-lg text-gray-300">10:00 AM - 04:00 PM</p>
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
          href="https://payments.cashfree.com/forms?code=register-ai-agent-workshop" // This would link to a registration form
          className="bg-white  text-black font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
        >
          Register Now
        </a>
        <p className="text-gray-500 text-sm mt-8">© 2025 SDC</p>
      </div>
    </footer>
  );
};
