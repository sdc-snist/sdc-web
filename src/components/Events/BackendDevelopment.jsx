import React from "react";
import SummerbootcampHero from "./SummerbootcampHero";
import CountdownTimer from "./CountdownTimer";
import fromto from "../../assets/fromto.png";
import roadmap from "../../assets/roadmap.png";

const BackendDevelopment = () => {
  return (
    <div className="min-h-screen bg-[#fcefdc] w-full flex flex-col relative">
      <SummerbootcampHero />

      {/* Description Section */}
      <div className="flex flex-col items-center justify-center px-4">
        <p className="font-hind-madurai font-light text-m sm:text-2xl md:text-[20px] max-w-2xl leading-relaxed text-center mt-10">
          Dive into the world of backend development with{" "}
          <span className="text-orange-500 font-light">
            Backend Summer Bootcamp 2025
          </span>{" "}
          — a 10-day project-based journey crafted for aspiring developers and
          curious coders. From JavaScript fundamentals to building full-fledged
          REST APIs with Node.js, Express, and MongoDB, this bootcamp transforms
          backend confusion into clarity. You'll learn by doing — coding
          real-world projects, mastering authentication, and deploying your own
          backend system. Whether you're starting fresh or upskilling, this
          summer, build something that matters.
        </p>
      </div>

      {/* Countdown Timer */}
      <div className="flex flex-col items-center justify-center mt-10 pb-10 bg-orange-500">
        <div
          id="timer"
          className="text-2xl sm:text-3xl md:text-3xl flex items-center font-bold mt-2 text-white"
        >
          <CountdownTimer targetDate={new Date("2025-05-12T00:00:00")} />
        </div>
      </div>

      {/* Register Button */}
      <div className="flex flex-col items-center justify-center mt-10">
        <button
          onClick={() => {
            window.open(
              "https://payments.cashfree.com/forms/backend-development-registration",
              "_blank"
            );
          }}
          className="bg-orange-500 cursor-pointer font-inter text-black border-2 text-xl sm:text-2xl md:text-3xl font-bold py-3 px-6 rounded-md hover:bg-orange-600 hover:scale-105 transition duration-300"
        >
          Register Now
        </button>
      </div>

      {/* From-To Image */}
      <div className="flex justify-center mt-10 px-4">
        <img
          src={fromto}
          alt="Backend Bootcamp Banner"
          className="w-full max-w-[90%] sm:max-w-3xl h-auto object-contain rounded-xl"
        />
      </div>

      {/* Roadmap Title */}
      <div className="flex flex-col items-center justify-center mt-12 text-4xl sm:text-5xl font-bold">
        Roadmap
      </div>

      {/* Roadmap Image */}
      <div className="flex justify-center mt-6 px-4">
        <img
          src={roadmap}
          alt="roadmap"
          className="w-full max-w-[90%] sm:max-w-3xl h-auto object-contain rounded-xl"
        />
      </div>

      {/* Event Details */}
      <div className="flex flex-col items-center justify-center mt-12 border-2 border-orange-500 bg-[#EDE1CA] mx-6 sm:mx-24 mb-10 p-6 sm:p-10 rounded-xl">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl font-bold bg-orange-500 rounded-md px-4 py-2">
            When?
          </h1>
          <p className="text-2xl sm:text-3xl font-bold mt-4">
            May 12 - 22 , 2025
          </p>
        </div>
        <div className="flex flex-col items-center mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-orange-500 rounded-md px-4 py-2">
            Where?
          </h1>
          <p className="text-2xl sm:text-3xl font-bold mt-4">Online</p>
          <p className="text-2xl sm:text-3xl font-bold">6:00 PM to 8:00 PM</p>
        </div>
      </div>

      {/* Register Button Again */}
      <div className="flex flex-col items-center justify-center mt-4 mb-10">
        <button
          onClick={() => {
            window.open(
              "https://payments.cashfree.com/forms/backend-development-registration",
              "_blank"
            );
          }}
          className="bg-orange-500 cursor-pointer font-inter text-black border-2 text-xl sm:text-2xl md:text-3xl font-bold py-3 px-6 rounded-md hover:bg-orange-600 hover:scale-105 transition duration-300"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default BackendDevelopment;
