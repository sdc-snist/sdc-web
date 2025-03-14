import React from "react";
import iit from "../../assets/logos/iit.png";
import vellor from "../../assets/logos/vellor.png";
import snist from "../../assets/logos/snist.png";

const partners = [
  { img: iit, alt: "IIIT Hyderabad" },
  { img: vellor, alt: "VIT Vellore" },
  { img: snist, alt: "SNIST" }
];

const OurPartner = () => {
  return (
    <div className="text-center py-20">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Our <span className="text-red-500">Partners</span>
      </h2>
      <p className="mt-4 text-lg leading-6 text-gray-500 m-1">
        Proudly collaborating with leading institutions and organizations across India.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
        {partners.map((partner, index) => (
          <img 
            key={index} 
            src={partner.img} 
            alt={partner.alt} 
            className="w-70 h-60 object-contain transition-transform duration-300 hover:scale-110"
          />
        ))}
      </div>
    </div>
  );
};

export default OurPartner;
