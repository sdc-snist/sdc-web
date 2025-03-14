import React from "react";
import Speech from "../assets/speech.png";
const AboutUs = () => {
  return (
    <section className="bg-[#f0ebe6] py-12 px-4 md:px-16 lg:px-32  mt-10">
      <h1 className="text-center text-3xl bold mb-10 ">
        About Us
        <div className="w-30 h-[5px] bg-red-500 mx-auto my-2"></div>
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left side - Cards */}
        <div className="flex flex-col gap-8 flex-1">
          {/* Mission */}
          <div className="bg-white shadow-lg rounded-md border-l-4 border-red-500 p-6">
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              Empowering students across India through technical education,
              hands-on experience, and collaborative learning opportunities.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-lg rounded-md border-l-4 border-red-500 p-6">
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              Creating a nationwide network of technically skilled students
              ready to tackle real-world challenges and drive innovation.
            </p>
          </div>

          {/* Impact */}
          <div className="bg-white shadow-lg rounded-md border-l-4 border-red-500 p-6">
            <h3 className="text-2xl font-semibold mb-3">Our Impact</h3>
            <p className="text-gray-700">
              Building bridges between academia and industry through meaningful
              collaborations and practical learning experiences.
            </p>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex-1 relative w-full">
          <div className="relative w-full h-full flex justify-center items-center">
            <img
              src={Speech} // <-- Replace with your image
              alt="Speaker in seminar"
              className="relative rounded-xl shadow-lg w-full max-w-md object-cover z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
