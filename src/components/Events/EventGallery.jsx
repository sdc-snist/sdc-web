import React from "react";

// Import all images from assets (add more as needed)
import sdcbackend from "../../assets/sdcbackend.png";
import hash2 from "../../assets/Students-Devolopers-Community.png";
import uxplosion from "../../assets/Ux-Plosion.jpg";
import hash1 from "../../assets/Hash1.png";
import Python from "../../assets/Python.jpg";

const images = [
  sdcbackend, hash2, uxplosion, hash1, Python
];

const EventGallery = () => {
  return (
    <div className="w-full py-12 px-2 sm:px-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 tracking-tight text-white">
        Event Gallery
      </h2>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-lg mb-4 hover:scale-105 transition-transform duration-300 border border-[var(--color-primary)] bg-black/60"
            style={{ breakInside: 'avoid' }}
          >
            <img
              src={img}
              alt={`Event ${idx + 1}`}
              className="w-full h-auto object-cover hover:opacity-90 transition duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventGallery;
