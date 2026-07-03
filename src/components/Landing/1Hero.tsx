"use client"
import { easeInOut, motion, MotionConfig } from "motion/react"
import { filter } from "motion/react-client";
import RevealText from "../ClipPathText";

const Hero1 = () => {



  return (
    <div className='h-screen w-full bg-white text-heading-cake overflow-hidden'>
      <div className="w-full h-full flex">

        {/* LEFT CONTENT */}
        <div
          className="font-crimson h-full w-1/2 pl-10 
    flex flex-col items-base justify-center gap-2"
        >
          <div className="w-full flex flex-col  text-9xl pt-23 italic heading text-heading-cake tracking-tighter ">

            <span className="h-25  ">
              <RevealText
                text="Fresh Cakes"
                textClassName="block"
                overlayClassName="bg-[#8B4513]"
                duration={1.5}
                wrapperClassName="pr-3 "
              />
            </span>

            <div className="h-33 ">
              <RevealText
                text="Made Daily Just"
                textClassName="block"
                overlayClassName="bg-[#8B4513]"
                wrapperClassName="pr-3 py-[0.14em]"
                duration={1.5}
              />
            </div>

            <div className=" h-30">
              <RevealText
                text="For You"
                textClassName="block"
                overlayClassName="bg-[#8B4513]"
                duration={1.5}
                wrapperClassName="pr-10"
              />
            </div>
          </div>

          <motion.div className="subheading italic pl-1 text-2xl font-inter tracking-tighter overflow-hidden">
            <motion.div
              initial={{ y: "-114%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
            >
              Crafting beautiful cakes and pastries that taste as <br /> incredible as they look.
            </motion.div>
          </motion.div>

          <div className="flex items-center gap-10 text-2xl font-medium italic pt-4">
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="text-2xl font-medium px-8 py-1 rounded-sm
        transition-all duration-150 ease-linear
        cursor-pointer active:scale-[0.96]

        bg-linear-to-b from-[#7a4b2a] to-[#4a2c1a]
        text-[#f5f5f5]

        shadow-[0px_0px_0px_1px_rgba(0,0,0,0.12)_inset,0px_1px_2px_rgba(0,0,0,0.2),0px_0px_0px_1px_rgba(0,0,0,0.08)]

        hover:from-[#8a5a36] hover:to-[#5a3722]
        active:shadow-[inset_0px_2px_4px_rgba(0,0,0,0.35)]"
            >
              Order Now
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="
        text-2xl font-medium italic
        px-8 py-1 rounded-sm
        cursor-pointer
        transition-all duration-150 ease-linear

        border border-heading-cake
        text-heading-cake
        bg-transparent

        active:scale-[0.96]
        "
            >
              View Cakes
            </motion.div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-1/2  h-full flex items-center justify-center ">
            <div className="  h-full w-full">
            <img src="/4.jpg" className="h-full w-full object-cover scale-x-[-1]"/>
            </div>
           {/* <div className=" absolute bottom-15 text-lg right-22 flex flex-col font-inter">

        <motion.div
          className="overflow-hidden"
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
        >
          <motion.div
            initial={{ y: "-110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
          >
            Reviews
          </motion.div>
        </motion.div>

        <motion.div
          className="overflow-hidden"
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
        >
          <motion.div
            initial={{ y: "-110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: [0.83, 0, 0.17, 1], delay: 0.15 }}
          >
            10/10
          </motion.div>
        </motion.div>

      </div> */}
        </div>

      </div>

      {/* <div className='  size-25 left-12'>

          <CircleSvg />
        </div> */}
     
   

    </div>
  )
}

export default Hero1


const CircleSvg = () => {
  return (
    <svg
      className='h-full w-full'
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <!-- Circle --> */}
      <circle
        cx="30"
        cy="40"
        r="28"
        stroke="#6b5e53"
        strokeWidth="2"
        fill="none"
      />

      {/* <!-- Line --> */}
      <path
        d="M30 40H93"
        stroke="#6b5e53"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* <!-- Arrow head --> */}
      <path
        d="M85 35L95 40L85 45"
        stroke="#6b5e53"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}