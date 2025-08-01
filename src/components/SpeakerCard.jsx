import React from "react";

// --- File: components/SpeakerCard.jsx ---
// A reusable card for a single speaker.
const SpeakerCard = ({ imgSrc, name, title, imgClassName }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden bg-gray-700 mb-4 shadow-lg">
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
