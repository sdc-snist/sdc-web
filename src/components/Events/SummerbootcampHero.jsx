import React from "react";
import bannerText from "../../assets/backend-text.png";

export default function SummerbootcampHero() {
  return (
    <div className="relative w-full h-150 bg-[#fcefdc] flex justify-center items-center overflow-hidden px-4 py-8">
      {/* Banner Text */}
      <img
        src={bannerText}
        alt="Backend Bootcamp Banner"
        className="w-[90%] max-w-[600px] sm:max-w-[800px] md:max-w-[907px] h-auto z-10 sm:w-[60%] lg:w-[50%] xl:w-[40%]"
      />
    </div>
  );
}
