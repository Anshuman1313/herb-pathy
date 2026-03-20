import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full relative  z-10 bg-[#1a1a1a] text-white py-10 px-6 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-4">
        
        {/* Brand */}
        <h2 className="text-3xl font-milkshake text-[#FF9E7A]">
          DreamSliceStudio
        </h2>

        {/* Tagline */}
        <p className="text-sm text-gray-400 max-w-md">
          Freshly baked dreams, served with love. Every slice tells a story.
        </p>

        {/* Divider */}
        <div className="w-24 h-px bg-gray-600 my-2"></div>

        {/* Links */}
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-[#FF9E7A] transition">
            Home
          </a>
          <a href="#" className="hover:text-[#FF9E7A] transition">
            Menu
          </a>
          <a href="#" className="hover:text-[#FF9E7A] transition">
            About
          </a>
          <a href="#" className="hover:text-[#FF9E7A] transition">
            Contact
          </a>
        </div>

        {/* Bottom Text */}
        <p className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} DreamSliceStudio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;