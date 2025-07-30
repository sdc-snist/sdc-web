// Footer.jsx
import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white mt-12 p-8 m-8 rounded-lg">
      <footer className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="gap-50">
          <h3 className="font-bold text-2xl text-[#E32614E5]">
            Students Developers Community
          </h3>
          <p className="mt-4 text-lg">
            Empowering students through technical education and collaborative
            learning opportunities across India.
          </p>
        </div>
        <div className="md:ml-20">
          <h3 className="font-bold text-xl">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-lg">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Events</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl">Resources</h3>
          <ul className="mt-4 space-y-2 text-lg">
            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="flex space-x-4 mb-8">
          <a href="https://www.instagram.com/sdc.snist" target="_blank"><FaInstagram className="text-red-600 text-2xl" /></a>
          <a href="https://www.linkedin.com/company/sdc-snist-student-chapter" target="_blank"><FaLinkedin className="text-red-600 text-2xl" /></a>
          <a href="https://twitter.com/SDC_SNIST" target="_blank"><FaTwitter className="text-red-600 text-2xl" /></a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
