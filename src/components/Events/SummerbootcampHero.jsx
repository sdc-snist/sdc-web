import React from "react";
import jsLogo from "../../assets/js.png";
import nodeLogo from "../../assets/node.png";
import mongoLogo from "../../assets/mongo.png";
import mernLogo from "../../assets/mern.png";
import bannerText from "../../assets/backend-text.png";


export default function SummerbootcampHero() {
  return (
    <div className="min-h-screen bg-[#fcefdc] w-full flex flex-col relative">
        <div className="w-full text-black flex flex-col items-center">
          <img
            src={bannerText}
            alt="Backend Bootcamp Banner"
            className="absolute z-10 w-[907px] h-[487px] top-[181px]"
            />
          <div className="absolute top-[549px] right-[196px] w-[115.27px] h-[130px]">
            <img src={nodeLogo} alt="NodeJS" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-[223px] left-[160px] w-[56.75px] h-[64px]">
            <img src={nodeLogo} alt="NodeJS2" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-[338px] left-[28px] w-[115px] h-[115px]">
            <img src={jsLogo} alt="JavaScript" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-[423px] right-[81px] w-[59px] h-[59px]">
            <img src={jsLogo} alt="JavaScript2" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-[490px] left-[33px] w-[219px] h-[219px]">
            <img src={mongoLogo} alt="MongoDB" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-[381px] right-[234px] w-[109px] h-[109px]">
            <img src={mongoLogo} alt="MongoDB2" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-[410px] left-[174px] w-[214px] h-[107px]">
            <img src={mernLogo} alt="MERN stack" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-[201px] right-[81px] w-[214px] h-[107px]">
            <img src={mernLogo} alt="MERN stack 2" className="w-full h-full object-contain" />
          </div>
        </div> 
    </div>
  );
}
