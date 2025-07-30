import React, { useState } from "react";
import hash2 from "../../assets/Students-Devolopers-Community.png";
import Python from "../../assets/Python.jpg";
import uxplosion from "../../assets/Ux-Plosion.jpg";
import hash1 from "../../assets/Hash1.png";
import sdcbackend from "../../assets/sdcbackend.png";

const pastEvents = [
  {
    date: "May 12 - 22 , 2025",
    title: "Backend Development Summer Bootcamp",
    description:
      "Backend Summer Bootcamp 2025 — a 10-day project-based journey crafted for aspiring developers and curious coders.",
    location: "Virtual",
    participants: "250+",
    image: sdcbackend,
  },
  {
    date: "20th November 2024",
    title: "HASH IT OUT - 2.0",
    description: "Second Edition of our flagship event, a 24-hour hackathon.",
    location: "SNIST",
    participants: "500+",
    image: hash2,
  },
  {
    date: "7 - 28 June 2024",
    title: "UX-PLOSION",
    description:
      "36-hour coding marathon with over 500 participants from across India.",
    location: "Virtual",
    participants: "500+",
    image: uxplosion,
  },
  {
    date: "6 - 22 June 2024",
    title: "PYTHON FOR DATA SCIENCE",
    description:
      "A hands-on workshop introducing students to Python for data science, covering data analysis, visualization, and lot more.",
    location: "Virtual",
    participants: "500+",
    image: Python,
  },
  {
    date: "6th October 2023",
    title: "HASH IT OUT - 1.0",
    description:
      "State-level hackathon fostering innovation, teamwork, and real-world tech solutions.",
    location: "SNIST",
    participants: "500+",
    image: hash1,
  },
];

const PastEvents = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleEvents = showAll ? pastEvents : pastEvents.slice(0, 4);

  return (
    <div className="py-12 px-4 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-8">
        <span className="underline decoration-[#E32614E5] underline-offset-4">
          Past Events
        </span>
      </h2>

      {/* Events Grid using flex */}
      <div className="flex flex-wrap justify-center gap-5">
        {visibleEvents.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl overflow-hidden relative w-full max-w-xs 
              transition-all duration-500 transform hover:scale-[1.03] hover:shadow-[0px_20px_35px_rgba(0,0,0,0.2)] hover:-translate-y-1"
          >
            {/* Completed Badge */}
            <div className="absolute top-2 right-2 bg-[#E32614E5] text-white text-xs font-semibold px-3 py-1 rounded-full z-10 shadow-md">
              Completed
            </div>

            {/* Image */}
            <img
              src={event.image}
              alt={event.title}
              className="h-44 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4 text-left flex flex-col justify-between h-56">
              <div>
                <p className="text-sm text-[#E32614E5] font-medium mb-1">
                  {event.date}
                </p>
                <h4 className="font-bold text-lg text-gray-800 mb-2">
                  {event.title}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {event.description}
                </p>
              </div>

              <div className="flex justify-between pt-4 text-sm text-gray-700 font-medium">
                <p>Location: {event.location}</p>
                <p>Participants: {event.participants}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See All Button */}
      {!showAll && pastEvents.length > 4 && (
        <div className="mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="border-2 cursor-pointer border-[#E32614E5] text-xl text-[#E32614E5] py-2 px-6 rounded-full 
              hover:bg-[#E32614E5] hover:text-white transition-all duration-300 ease-in-out hover:shadow-md"
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default PastEvents;
