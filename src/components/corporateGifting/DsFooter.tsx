import Link from "next/link";
import React from "react";
import { MapPin, Phone, Heart } from "lucide-react";
import Fssailogo from "../fssailogo";

const EXPLORE_LINKS = [
  { label: "Our Story", href: "/about" },
  { label: "Our Menu", href: "/our-menu" },
  { label: "About Us", href: "/about" },
];

const SUPPORT_LINKS = [
  { label: "Contact Us", href: "/contact" },
  { label: "Find Us", href: "/location" },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-brand-burgundy">
      {children}
    </h3>
  );
}

const DsFooter = () => {
  return (
    <footer className="w-full bg-brand-beige text-brand-brown">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-4">
        {/* BRAND + SOCIAL */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="-translate-x-3 flex h-20 w-80 items-center">
            <img src="/Group91.svg" className="size-full" alt="Dream Slice Studio" />
          </Link>
          <p className="text-xs italic text-brand-brown/70">
            Crafting sweet moments.
          </p>
          <div className="flex gap-3 text-brand-burgundy">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-brand-gold"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>

        {/* EXPLORE */}
        <div className="flex flex-col gap-2 text-sm">
          <FooterHeading>Explore</FooterHeading>
          {EXPLORE_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-brand-brown/80 transition-colors hover:text-brand-burgundy"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* SUPPORT */}
        <div className="flex flex-col gap-2 text-sm">
          <FooterHeading>Support</FooterHeading>
          {SUPPORT_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-brand-brown/80 transition-colors hover:text-brand-burgundy"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* VISIT US */}
        <div className="flex flex-col gap-3 text-sm">
          <FooterHeading>Visit Us</FooterHeading>

          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
            <div className="space-y-1 text-brand-brown/80">
              <p>Sector 23, Chandigarh</p>
              <p>Vista Tower, Sector 75, Mohali</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-brand-brown/80">
            <Phone className="h-4 w-4 text-brand-gold" />
            +91 6284219963
          </div>

          <div className="mt-2 flex flex-col gap-3">
            <div>
              <p className="text-xs font-semibold tracking-wide text-brand-burgundy">
                Locations
              </p>
              <p className="text-xs text-brand-brown/70">Chandigarh | Mohali</p>
            </div>

            <div>
              <div className="w-14 text-brand-burgundy">
                <Fssailogo />
              </div>
              <p className="mt-1 text-xs text-brand-brown/70">
                License No | 22126676000886
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="border-t border-brand-brown/15 py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-xs text-brand-brown/70 sm:flex-row">
          <span>© {new Date().getFullYear()} Dream Slice Studio. All Rights Reserved.</span>
          <Heart className="h-3 w-3 fill-brand-gold text-brand-gold" />
        </div>
      </div>
    </footer>
  );
};

export default DsFooter;

export const InstagramIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) => {
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