import React from "react";
import jsLogo from "../../assets/js.png";
import nodeLogo from "../../assets/node.png";
import mongoLogo from "../../assets/mongo.png";
import mernLogo from "../../assets/postman.png";
import bannerText from "../../assets/backend-text.png";


export default function SummerbootcampHero() {
  return (
    <div className="bg-[#fcefdc] w-full flex flex-col items-center relative ">
      {/* Banner Image */}
      <img
        src={bannerText}
        alt="Backend Bootcamp Banner"
        className="z-10 w-full max-w-[1000px] h-auto mt-20"
      />

      {/* Logos for Mobile/Tablet (below banner) */}
          
      <div className="flex flex-row flex-nowrap justify-start items-center gap-4 mt-8 md:hidden px-4 overflow-x-auto">
        <img src={nodeLogo} alt="NodeJS" className="w-20 h-20 object-contain flex-shrink-0" />
        <img src={jsLogo} alt="JavaScript" className="w-20 h-20 object-contain flex-shrink-0" />
        <img src={mongoLogo} alt="MongoDB" className="w-24 h-24 object-contain flex-shrink-0" />
        <img src={mernLogo} alt="MERN" className="w-32 h-20 object-contain flex-shrink-0" />
      </div>


      {/* Logos for Desktop (absolute positioning) */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <img src={nodeLogo} alt="NodeJS" className="absolute top-[549px] right-[196px] w-[115.27px] h-[130px]" />
        <img src={nodeLogo} alt="NodeJS2" className="absolute top-[223px] left-[160px] w-[56.75px] h-[64px]" />
        <img src={jsLogo} alt="JavaScript" className="absolute top-[338px] left-[28px] w-[115px] h-[115px]" />
        <img src={jsLogo} alt="JavaScript2" className="absolute top-[423px] right-[81px] w-[59px] h-[59px]" />
        <img src={mongoLogo} alt="MongoDB" className="absolute top-[490px] left-[33px] w-[219px] h-[219px]" />
        <img src={mongoLogo} alt="MongoDB2" className="absolute top-[381px] right-[234px] w-[109px] h-[109px]" />
        <img src={mernLogo} alt="MERN stack" className="absolute top-[410px] left-[174px] w-[109px] h-[109px]" />
        <img src={mernLogo} alt="MERN stack 2" className="absolute top-[201px] right-[81px] w-[109px] h-[109px]" />
      </div>
    </div>

  );
}