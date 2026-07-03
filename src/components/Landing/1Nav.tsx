"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import HoverLink from "../HoverLinks";
import Link from "next/link";
import { LiquidMetal } from "@paper-design/shaders-react";
import { usePathname } from "next/navigation";
import EyesLogo from "../EyesLogo";

const navLinks = [
  { text: "Home", href: "/" },
  { text: "Menu", href: "/our-menu/" },
  { text: "Gallery", href: "/gallery/" },
  { text: "About", href: "/about/" },
  { text: "Contact", href: "/contact/" },
  { text: "Find Us", href: "/location/" },
];


const Nav1Cake = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(()=>{
    console.log(pathname)
  },[])

  return (
    <motion.div className="fixed top-0 left-0 w-full shadow-sm bg-[#E6DCA2]  z-50 overflow-hidden   px-6 md:px-10 flex items-center justify-between h-16 md:h-20 font-crimson">

      {/* Logo */}
      <Link href="/" className="flex items-center gap-2  w-80 h-20">
      <EyesLogo/>
        {/* <img src={"/Group91.svg"} className="size-full" /> */}
        {/* <LiquidMetal className="-translate-x-20" speed={0.01} softness={0.1} repetition={6.32} shiftRed={0.3} shiftBlue={0.3} distortion={0.07} contour={0.4} scale={0.6} rotation={0} shape="diamond" angle={70} frame={105316.37600001237} image="https://app.paper.design/file-assets/01K7HFC2X2KSYFERND2XAH1XZC/01KT1G7AY6TNM25J2ESHHY76PQ.svg" colorBack="#00000000" colorTint="#FFCD16" style={{ backgroundColor: '#FFFFFF', height: '100%', width: '100%' }} /> */}

      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-14 italic text-[#694125]">
        {navLinks.map((link, i) => (
          <HoverLink
            key={i}
            text={link.text}
            href={link.href}
            className="text-2xl  "
            hoverColor="bg-[#694125]"
            isActive ={ pathname === link.href}
          />
        ))}
      </div>

      {/* Hamburger */}
      <Hamburger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "50%", filter: "blur(3px)", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-[75%] bg-white shadow-lg p-8 flex flex-col gap-6 text-[#6C4A3C] italic z-40"
          >


            {navLinks.map((link, i) => (
              <HoverLink
                key={i}
                text={link.text}
                href={link.href}
                className="text-xl"
                hoverColor="bg-[#6C4A3C]"
                onClick={() => setIsOpen(false)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Nav1Cake;

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}
const Hamburger = ({ isOpen, toggle }: HamburgerProps) => (
  <button
    className="md:hidden absolute right-5 z-50 flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
    onClick={toggle}
    aria-label="Toggle menu"
  >
    <motion.span
      className="bg-muted-foreground w-8 h-0.5 rounded my-1"
      initial={false}
      animate={isOpen ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    />
    <motion.span
      className="bg-muted-foreground w-8 h-0.5 rounded my-1"
      initial={false}
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.2 }}
    />
    <motion.span
      className="bg-muted-foreground w-8 h-0.5 rounded my-1"
      initial={false}
      animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    />
  </button>
);