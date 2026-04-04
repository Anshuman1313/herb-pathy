"use client"
import {motion} from "motion/react"
import React, { useState } from 'react'

const Hamburger1 = () => {
      const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Hamburger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
    
    </>
  )
}

export default Hamburger1

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}
const Hamburger = ({ isOpen, toggle }: HamburgerProps) => (
  <button
    className=" flex cursor-pointer flex-col justify-center items-center  focus:outline-none
    space-y-1.5
    "
    onClick={toggle}
    aria-label="Toggle menu"
  >
    <motion.span
      className="bg-heading-cake w-7 h-0.5 rounded "
      initial={false}
      animate={isOpen ? { rotate: 55, y: 12 } : { rotate: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    />
    <motion.span
      className="bg-heading-cake w-7 h-0.5 rounded "
      initial={false}
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.2,ease: "easeOut" }}
    />
    <motion.span
      className="bg-heading-cake w-7 h-0.5 rounded "
      initial={false}
      animate={isOpen ? { rotate: -35, y: -8 } : { rotate: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    />
  </button>
);