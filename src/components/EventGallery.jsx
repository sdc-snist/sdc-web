
import React from "react";

// Dynamically import all images from SDCImages using Vite's import.meta.glob
const imageModules = import.meta.glob('../assets/SDCImages/*.{jpg,png,jpeg,gif,svg}', { eager: true });
const images = Object.values(imageModules).map((mod) => mod.default);


const EventGallery = () => {
  return (
    <section className="section min-h-[80vh] py-20 px-2 sm:px-6 flex flex-col items-center">
      <h2
        className="w-full text-center font-extrabold text-white text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] leading-[1.08] mb-12 tracking-tight italic"
        style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '-0.03em' }}
      >
        <span className="text-[var(--color-primary)] not-italic">Event</span> Gallery
      </h2>
      <div className="w-full max-w-6xl columns-2 sm:columns-3 md:columns-4 gap-4 md:gap-6 space-y-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="mb-4 break-inside-avoid rounded-2xl shadow-lg group bg-[var(--color-card)] overflow-hidden relative"
          >
            <img
              src={img}
              alt={`SDC Event ${idx + 1}`}
              className="object-contain w-full h-auto max-h-[420px] transition-transform duration-500 group-hover:scale-105 bg-black"
              loading="lazy"
              style={{ aspectRatio: 'auto' }}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold italic">SDC Event</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventGallery;
