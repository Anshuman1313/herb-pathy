"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import HoverLink from "../HoverLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import EyesLogo from "../EyesLogo";
import { MapPin, Mail } from "lucide-react";
import Logo from "../DsLogo/Logo";
import LogoStudio from "../DsLogo/LogoStudio";

const navLinks = [
  { text: "Home", href: "/" },
  { text: "Menu", href: "/menu/" },
  { text: "Gallery", href: "/gallery/" },
  { text: "Gifting", href: "/corporate-gifting/" },
  { text: "About", href: "/about/" },
  { text: "Contact", href: "/contact/" },
  { text: "Find Us", href: "/location/" },
];

/* -------------------------------------------------------------- */
/*  Top utility bar                                                 */
/* -------------------------------------------------------------- */

function TopBar() {
  return (
    <div className="hidden bg-brand-burgundy text-brand-cream md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" />
          <span>Chandigarh, India</span>
        </div>
        <p className="tracking-wide">
          Bespoke Cakes &nbsp;|&nbsp; Premium Desserts &nbsp;|&nbsp; Corporate Gifting
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" />
            <span>info@dreamslicestudio.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------- */
/*  Primary nav                                                     */
/* -------------------------------------------------------------- */

const Nav2Cake = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header className="absolute top-0 left-0 z-100 w-full font-crimson">
      <TopBar />

      <nav className="flex h-16 w-full items-center   px-6  md:h-20 md:px-10">
        <Link href="/" className="flex h-full w-full  items-center gap-2 md:w-80 max-md:-translate-x-2 max-md:translate-y-3">
          <Logo/>
          {/* <LogoStudio /> */}
          {/* <EyesLogo /> */}
          {/* <img src="dslogo.jpeg" width={100} height={100}/> */}

        </Link>

        <div className="hidden items-center gap-8 lg:flex  px-40">
          {navLinks.map((link, i) => (
            <HoverLink
              key={i}
              text={link.text}
              href={link.href}
              className="text-base font-medium"
              hoverColor="bg-brand-burgundy"
              isActive={pathname === link.href}
            />
          ))}
        </div>

        {/* Hamburger */}
        <Hamburger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "50%", filter: "blur(3px)", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 z-40 flex h-screen w-[75%] flex-col gap-6 bg-brand-cream p-8 text-brand-burgundy shadow-lg"
          >
            {navLinks.map((link, i) => (
              <HoverLink
                key={i}
                text={link.text}
                href={link.href}
                className="text-xl"
                hoverColor="bg-brand-burgundy"
                isActive={pathname === link.href}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Nav2Cake;

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}
const Hamburger = ({ isOpen, toggle }: HamburgerProps) => (
  <button
    className="z-50 flex h-10 w-10 flex-col items-center justify-center focus:outline-none lg:hidden"
    onClick={toggle}
    aria-label="Toggle menu"
  >
    <motion.span
      className="my-1 h-0.5 w-8 rounded bg-brand-burgundy"
      initial={false}
      animate={isOpen ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    />
    <motion.span
      className="my-1 h-0.5 w-8 rounded bg-brand-burgundy"
      initial={false}
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.2 }}
    />
    <motion.span
      className="my-1 h-0.5 w-8 rounded bg-brand-burgundy"
      initial={false}
      animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    />
  </button>
);