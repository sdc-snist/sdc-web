import React, { useState, useEffect } from "react";
import logo from "../../assets/sdc-white.png"; // Import the logo image
import aiag from "../../assets/aiagent.png"; // Import the logo image
import date from "../../assets/dateaug.png"; // Import the logo image
import vag from "../../assets/vag.png"; // Import the logo image
import time from "../../assets/clk.png"; // Import the logo image
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
      title: "Founder, Repaatless",
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
