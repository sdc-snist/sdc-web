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
  <section className="section section-alt py-16 px-4 text-center">
      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-10 relative inline-block">
        <span className="pb-2 border-b-4 border-[var(--color-primary)]">Past Events</span>
      </h2>

      {/* Events Grid using flex */}
      <div className="flex flex-wrap justify-center gap-8">
        {visibleEvents.map((event, index) => (
          <div
            key={index}
            className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl shadow-lg overflow-hidden relative w-full max-w-xs min-w-[270px] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            {/* Completed Badge */}
            <div className="absolute top-3 right-3 bg-[var(--color-primary)] text-white text-xs font-semibold px-3 py-1 rounded-full z-10 shadow-md">
              Completed
            </div>
            {/* Image */}
            <img
              src={event.image}
              alt={event.title}
              className="h-44 w-full object-cover border-b-2 border-[var(--color-border)]"
            />
            {/* Content */}
            <div className="p-5 text-left flex flex-col justify-between h-56">
              <div>
                <p className="text-sm text-[var(--color-primary)] font-semibold mb-1">
                  {event.date}
                </p>
                <h4 className="font-bold text-lg text-white mb-2">
                  {event.title}
                </h4>
                <p className="text-sm text-[var(--color-text-muted)] line-clamp-3">
                  {event.description}
                </p>
              </div>
              <div className="flex justify-between pt-4 text-xs text-[var(--color-text-muted)] font-semibold">
                <span>Location: {event.location}</span>
                <span>Participants: {event.participants}</span>
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
            className="btn text-lg px-8 py-3 border-2 border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200"
          >
            See All
          </button>
        </div>
      )}
  </section>
  );
};

export default PastEvents;
