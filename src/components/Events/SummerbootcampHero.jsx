import React from "react";
import jsLogo from "../../assets/js.png";
import nodeLogo from "../../assets/node.png";
import mongoLogo from "../../assets/mongo.png";
import mernLogo from "../../assets/mern.png";
import bannerText from "../../assets/backend-text.png";


export default function SummerbootcampHero() {
  return (
    <div className="min-h-screen bg-[#fcefdc] w-full flex flex-col relative">
  <div className="w-full text-black flex flex-col items-center relative">
    {/* Banner */}
    <img
      src={bannerText}
      alt="Backend Bootcamp Banner"
      className="z-10 w-full max-w-[1000px] h-auto mt-20"
    />

    {/* Logos (Mobile/Tablet view - stacked below image) */}
    <div className="flex flex-wrap justify-center gap-4 mt-8 md:hidden">
      <img src={nodeLogo} alt="NodeJS" className="w-20 h-20 object-contain" />
      {/* <img src={nodeLogo} alt="NodeJS2" className="w-14 h-14 object-contain" /> */}
      <img src={jsLogo} alt="JavaScript" className="w-20 h-20 object-contain" />
      {/* <img src={jsLogo} alt="JavaScript2" className="w-14 h-14 object-contain" /> */}
      <img src={mongoLogo} alt="MongoDB" className="w-28 h-28 object-contain" />
      {/* <img src={mongoLogo} alt="MongoDB2" className="w-24 h-24 object-contain" /> */}
      <img src={mernLogo} alt="MERN" className="w-36 h-20 object-contain" />
      {/* <img src={mernLogo} alt="MERN2" className="w-36 h-20 object-contain" /> */}
    </div>

    {/* Logos (Desktop view - absolute positioning) */}
    <div className="hidden md:block">
      <img src={nodeLogo} alt="NodeJS" className="absolute top-[549px] right-[196px] w-[115.27px] h-[130px]" />
      <img src={nodeLogo} alt="NodeJS2" className="absolute top-[223px] left-[160px] w-[56.75px] h-[64px]" />
      <img src={jsLogo} alt="JavaScript" className="absolute top-[338px] left-[28px] w-[115px] h-[115px]" />
      <img src={jsLogo} alt="JavaScript2" className="absolute top-[423px] right-[81px] w-[59px] h-[59px]" />
      <img src={mongoLogo} alt="MongoDB" className="absolute top-[490px] left-[33px] w-[219px] h-[219px]" />
      <img src={mongoLogo} alt="MongoDB2" className="absolute top-[381px] right-[234px] w-[109px] h-[109px]" />
      <img src={mernLogo} alt="MERN stack" className="absolute top-[410px] left-[174px] w-[214px] h-[107px]" />
      <img src={mernLogo} alt="MERN stack 2" className="absolute top-[201px] right-[81px] w-[214px] h-[107px]" />
    </div>
  </div>
</div>

  );
}