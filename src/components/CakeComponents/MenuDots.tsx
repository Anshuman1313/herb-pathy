"use client"
import { motion, Variants } from "motion/react"

type Position = "tr" | "tl" | "bl" | "br"

const initialPositions: Record<Position, any> = {
  tr: { top: 3, right: 3 },
  tl: { top: 3, left: 3 },
  bl: { bottom: 3, left: 3 },
  br: { bottom: 3, right: 3 },
}

const dotVariants: Variants = {
  initial: (pos: Position) => initialPositions[pos],
  hover: {
    top: "50%",
    left: "50%",
    x: "-50%",
    y: "-50%",
  },
}
const clipVariants = {
  initial: {
    clipPath: "circle(0% at 50% 50%)",
    opactiy: 0
  },
  hover: {
    clipPath: "circle(75% at 50% 50%)",
    opacity: [0, 1, 0]
  }
}
export default function MenuDots() {
  return (
    <>
      <div className="flex justify-center items-center gap-5">


        <motion.div
          initial="initial"
          whileHover="hover"
          className="size-18 bg-gray-100 rounded-full relative flex justify-center items-center cursor-pointer"
        >
          <motion.div
            variants={clipVariants}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bg-red-300 size-full rounded-full"
          />
          <div className="size-7    relative">
            <motion.div
              custom="tr"
              variants={dotVariants}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="size-[7.5px] bg-heading-cake rounded-full absolute"
            />
            <motion.div
              custom="tl"
              variants={dotVariants}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="size-[7.5px] bg-heading-cake rounded-full absolute"
            />
            <motion.div
              custom="bl"
              variants={dotVariants}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="size-[7.5px] bg-heading-cake rounded-full absolute"
            />
            <motion.div
              custom="br"
              variants={dotVariants}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="size-[7.5px] bg-heading-cake rounded-full absolute"
            />
          </div>
        </motion.div>
        <motion.div className="flex justify-center  items-center">
        
          
        </motion.div>
      </div>
    </>
  )
}