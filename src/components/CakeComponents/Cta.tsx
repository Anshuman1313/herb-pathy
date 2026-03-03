"use client"
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import React, { ReactHTMLElement } from 'react'
import {motion} from 'motion/react'

export const Cta = () => {
  return (
    <div className='h-18 w-63  cursor-pointer flex justify-between px-1 items-center bg-white rounded-full group'>
      <div className='flex  transform-[scale3d(0,0,0)] origin-left group-hover:transform-[scale3d(1,1,1)]   transition-all ease-in-out-cubic duration-350  justify-center items-center bg-rose-200 rounded-full size-17 shrink-0 '>
        <ArrowRight className='-rotate-45 text-foreground/70  group-hover:rotate-0  transition-transform ease-in-out-cubic duration-250' />
      </div>

      <div className='  transform-[translate3d(-2.3rem,0,0)]  group-hover:transform-[translate3d(2.5rem,0,0)] transition-transform ease-in-out-cubic w-full  items-center duration-350 text-xl font-medium '>Order Now</div>

      <div className='flex shrink-0   justify-center group-hover:transform-[scale3d(0,0,0)] transition-all ease-in-out-cubic duration-350 origin-right items-center bg-indigo-200 rounded-full size-17 '>
        <ArrowRight className='-rotate-45 text-foreground/70 group-hover:rotate-0 transition-transform ease-in-out-cubic duration-200' /></div>
    </div>

  )
}

export const Cta2 = () => {
  return (

    <>
      <div className='h-18 w-65  cursor-pointer flex justify-between px-1 items-center   group'>
        <div className='flex w-0 shrink-0  transform-[scale3d(0,0,0)] origin-left group-hover:transform-[scale3d(1,1,1)]   transition-all ease-in-out-cubic duration-350  justify-center items-center bg-rose-200 rounded-full size-18 group-hover:w-18 '>
          <ArrowRight className='-rotate-45 text-foreground/70  group-hover:rotate-0  transition-transform ease-in-out-cubic duration-250' />
        </div>

        <div className='  flex justify-center items-center   transition-transform ease-in-out-cubic w-full bg-white h-full rounded-full   duration-350 text-xl font-medium '> <span>Order Now</span></div>

        <div className='flex shrink-0  justify-center group-hover:transform-[scale3d(0,0,0)] transition-all ease-in-out-cubic duration-350 origin-right group-hover:w-0 items-center bg-indigo-200 rounded-full size-18  '>
          <ArrowRight className='-rotate-45 text-foreground/70 group-hover:rotate-0 transition-transform ease-in-out-cubic duration-200' /></div>
      </div>


    </>
  )
}
export const CtaCake = () => {
  return (

    <>
          <button
      className="
        relative
        px-10 py-4
        rounded-full
        text-white
        text-lg
        bg-linear-to-b
        from-[#E7C98A]
        to-[#8B5A2B]
        shadow-lg
        overflow-hidden
        active:scale-[0.97] transition-all ease-in-out cursor-pointer
      "
    >
      <span className="relative z-10">
        Order Your Cake →
      </span>

      {/* Gloss layer */}
      <span
        className=" 
          absolute inset-0 rounded-full
          bg-linear-to-b
          from-white/40
          to-transparent
          pointer-events-none
        "
      />
      <span
  className="
    absolute inset-0 rounded-full
    bg-[radial-gradient(circle_at_center,transparent_65%,rgba(139,90,43,0.65))]
    pointer-events-none
  "
/>
<span
  className="
    absolute inset-0 rounded-full
    bg-[linear-gradient(to_bottom,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.4)_6%,transparent_12%)]
    pointer-events-none
  "
/>

    </button>




    </>
  )
}

type CaramelButtonProps = {
  children: React.ReactNode;
  light?: string;
  mid?: string;
  dark?: string;
  className?: string;
};

export const CaramelButton: React.FC<CaramelButtonProps> = ({
  children,
  light = "#E7C98A",
  mid = "#B8823F",
  dark = "#c9924a",
  className = "",
}) => {
  return (
    <button
      className={`
        relative
        px-12 py-5
        rounded-full
        text-white
        font-medium
        tracking-wide
        overflow-hidden
        transition-[scale] duration-300 ease-in-out
        active:scale-[0.97]
        cursor-pointer 
        ${className}
      `}
      style={{
        // 1️⃣ Base vertical light simulation
        background: `linear-gradient(to bottom, ${light}, ${mid}, ${dark})`,
      }}
    >
      {/* Text Layer (always above visual layers) */}
      <span className="relative z-10">{children}</span>

      {/* 2️⃣ Specular Rim — thin sharp highlight at very top */}
      <span
        className="absolute inset-0 rounded-full pointer-events-none hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 6%, transparent 12%)",
        }}
      />

      {/* 3️⃣ Soft Gloss — broader light fade */}
      <span
        className="absolute inset-0 rounded-full pointer-events-none "
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.35) 0%, transparent 40%)",
        }}
      />

      {/* 4️⃣ Radial Edge Compression — curvature simulation */}
      <span
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 60%, rgba(139,90,43,0.4) 100%)",
        }}
      />

      {/* 5️⃣ Inset Depth — material thickness */}
      <span
        className=" 
          absolute inset-0 rounded-full pointer-events-none
          shadow-[inset_0_-4px_8px_rgba(139,90,43,0.35)]
        "
      />

      {/* 6️⃣ Outer Elevation Shadow */}
      <span
        className=" 
          absolute inset-0 rounded-full pointer-events-none
          shadow-[0_10px_25px_rgba(0,0,0,0.18)]
        "
      />
    </button>
  );
};

export const Cta4 = () =>{
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 100 50'   fill="none">

<motion.path animate={{ pathLength: [0,1]}} transition={{ duration: 3 , ease: "easeInOut", repeat: Infinity  }} d="M66 0 30 0V0Q23.043.018 23 6L23 39Q23 45 16 45L0 45 "  stroke="red" strokeWidth="1" stroke-linecap="round"> 

</motion.path>
<motion.path animate={{ pathLength: [0,1]}} transition={{ duration: 2 , ease: "easeInOut", repeat: Infinity  }} d="M66 0 30 0V0Q23.043.018 23 6L61 6C64 6 65 9 65 12L65 35C65 37 63 39 61 39L44 39 44 48"  stroke="red" strokeWidth="1" stroke-linecap="round"> 

</motion.path>
</svg>
  )
}                           
