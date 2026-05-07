import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100  text-[#3E2C23] border-t">

      <div className="max-w-7xl  mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND + SOCIAL */}
        <div className="flex  gap-4">
          <h2 className="text-4xl font-crimson italic">
            DreamSliceStudio 
          </h2>

        </div>

        {/* COLUMN 1 */}
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="font-semibold mb-2">Explore</h3>
          <Link href="/about" className="hover:text-[#6E4C3E]">Our Story</Link>
          <Link href="/our-menu" className="hover:text-[#6E4C3E]">Our Menu</Link>
          <Link href="about" className="hover:text-[#6E4C3E]">About Us</Link>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="font-semibold mb-2">Support</h3>
          <Link href="/contact">Contact Us</Link>
          <Link href="/location">Find Us</Link>
        </div>

        {/* COLUMN 3 (ADDRESS) */}
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="font-semibold mb-2">Visit Us</h3>
          <p>Sector 23, Chandigarh</p>
          <p>Vista Tower Sector 75, Mohali</p>
          <p>Call: 6284219963</p>

          <div className="mt-2">
            <p className="font-medium">Locations</p>
            <p className="text-xs text-gray-600">
              Chandigarh | Mohali 
            </p>
          </div>
        </div>

      </div>

      {/* BOTTOM LINE */}
      <div className="text-center text-sm border-t py-4">
        © {new Date().getFullYear()} DreamSliceStudio. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;

export const InstagramIcon = ({ size = 24, color = "currentColor", className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-2.37-2.37 4 4 0 0 1 2.37 2.37z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  );
};