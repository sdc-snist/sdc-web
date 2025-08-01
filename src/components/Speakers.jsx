// --- File: components/Speakers.jsx ---
// This component contains all the logic and JSX for the speakers section.
const Speakers = () => {
  // Data for the speakers is now part of this component
  const speakers = [
    {
      name: "Chandan Kumar",
      title: "Founder, Repaatless",
      imgSrc: "https://placehold.co/400x400/ffffff/000000?text=Chandan",
      imgClassName: "",
    },
    {
      name: "Shubam Lal",
      title: "SDE at Microsoft",
      imgSrc: "https://placehold.co/400x400/e2e8f0/000000?text=Shubam",
      imgClassName: "grayscale",
    },
  ];

  return (
    <div
      className="relative bg-[#2c1a5b] w-full max-w-4xl rounded-2xl p-8 sm:p-12 border border-purple-500/30 shadow-2xl shadow-purple-900/50"
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
  );
};
