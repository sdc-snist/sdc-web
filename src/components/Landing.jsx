import backgroundImage from "../assets/image-2.png";
import { Mail } from "lucide-react";

function Landing() {
  return (
    <div
      className="min-h-screen flex items-center pt-30 justify-center px-4 md:px-10 py-12"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
      }}
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Section */}
        <div className="flex flex-col gap-5 max-w-2xl text-left lg:text-left">
          <h3 className="text-[#FFEBB5] text-base md:text-lg font-semibold">
            Elevate your skills with SDC!
          </h3>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            Empowering student developers through collaboration and learning.
          </h1>
          <p className="text-[#FFEBB5] text-sm md:text-base leading-relaxed">
            SDC is a community of passionate student developers dedicated to
            learning, building, and innovating together. We foster
            collaboration, organize tech events, and provide a platform to grow
            skills and network with like-minded peers.
          </p>
        </div>

        {/* Right Section (Stats Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-xl px-6 py-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
            <div className="text-red-500 text-3xl font-bold">25+</div>
            <p className="text-black text-lg font-semibold mt-2">Events</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-xl px-6 py-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
            <div className="text-black text-lg font-medium">❤️ Followers</div>
            <div className="text-black text-2xl font-bold mt-2">1.5K+</div>
            <p className="text-green-600 text-xs mt-1">
              15% increase in last 2 weeks
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-xl px-6 py-8 flex flex-col items-center text-center hover:scale-105 transition-transform sm:col-span-2">
            <div className="text-red-500 text-3xl font-bold">100+</div>
            <p className="text-gray-600 text-lg font-semibold mt-2">
              College Partners
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
