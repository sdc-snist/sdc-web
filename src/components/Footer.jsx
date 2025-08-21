// Footer.jsx
import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer relative overflow-hidden pt-32 pb-10">
      {/* Large background brand text above links */}
      <div className="w-full flex justify-center mb-2 relative z-10">
        <span style={{fontSize: '7vw', fontWeight: 900, letterSpacing: '-0.05em', opacity: 0.09, lineHeight: 1, color: '#fff'}} className="uppercase whitespace-nowrap">
          SDC COMMUNITY
        </span>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        <div className="text-left">
          <h3 className="font-extrabold text-2xl text-white mb-2 tracking-wide">For Students</h3>
          <ul className="space-y-2 text-base">
            <li><a href="#" className="text-[var(--color-text-muted)] hover:text-white transition">For Developers</a></li>
            <li><a href="#" className="text-[var(--color-text-muted)] hover:text-white transition">For Designers</a></li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="font-extrabold text-2xl text-white mb-2 tracking-wide">Community</h3>
          <ul className="space-y-2 text-base">
            <li><a href="#" className="text-[var(--color-text-muted)] hover:text-white transition">About Us</a></li>
            <li><a href="#" className="text-[var(--color-text-muted)] hover:text-white transition">Events</a></li>
            <li><a href="#" className="text-[var(--color-text-muted)] hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="font-extrabold text-2xl text-white mb-2 tracking-wide">Support</h3>
          <ul className="space-y-2 text-base">
            <li><a href="#" className="text-[var(--color-text-muted)] hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="text-[var(--color-text-muted)] hover:text-white transition">Blog</a></li>
            <li><a href="#" className="text-[var(--color-text-muted)] hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="font-extrabold text-2xl text-white mb-2 tracking-wide">Contact</h3>
          <ul className="space-y-2 text-base">
            <li><span className="text-[var(--color-text-muted)]">General Queries</span><br /><a href="mailto:team@sdc.com" className="text-white font-semibold">team@sdc.com</a></li>
            <li><span className="text-[var(--color-text-muted)]">Support</span><br /><a href="mailto:support@sdc.com" className="text-white font-semibold">support@sdc.com</a></li>
          </ul>
        </div>
      </div>
      <div className="relative z-10 flex justify-center gap-8 mt-10 mb-4">
        <a href="https://www.linkedin.com/company/sdc-snist-student-chapter" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-white text-2xl hover:text-[var(--color-primary)] transition" /></a>
        <a href="https://www.youtube.com/@sdc-snistsc" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-white text-2xl hover:text-[var(--color-primary)] transition" /></a>
        <a href="https://twitter.com/SDC_SNIST" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-white text-2xl hover:text-[var(--color-primary)] transition" /></a>
        <a href="https://www.instagram.com/sdc.snist" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-white text-2xl hover:text-[var(--color-primary)] transition" /></a>
      </div>
      <div className="relative z-10 text-center text-[var(--color-text-muted)] text-sm pb-2">
        © {new Date().getFullYear()} Students Developers Community. All rights reserved. &nbsp; | &nbsp;
        <a href="#" className="hover:text-white">Privacy Policy</a> &nbsp; | &nbsp;
        <a href="#" className="hover:text-white">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
