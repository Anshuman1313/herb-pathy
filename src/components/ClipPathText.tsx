"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils" // optional (or just use template strings)

type RevealTextProps = {
  text: string
  textClassName?: string
  overlayClassName?: string
  wrapperClassName?: string
  duration?: number,
  ease?: [number,number,number,number]
}

export default function RevealText({
  text,
  textClassName = "",
  overlayClassName = "bg-red-400",
  duration = 1,
  ease = [0.83, 0, 0.17, 1],
  wrapperClassName = ""
}: RevealTextProps) {
  return (
    <div   className={`relative inline-block overflow-hidden ${wrapperClassName}`}>
      
      {/* Text */}
      <motion.span
        className={cn(
          "block whitespace-nowrap relative ",
          textClassName
        )}
        initial={{
          clipPath: "inset(0% 100% 0% 0%)",
        }}
        animate={{
          clipPath: "inset(0% -4% -17% 0%)",
        }}
        transition={{
          duration: duration * 0.8,
          ease: ease,
        }}
      >
        {text}
      </motion.span>

      {/* Overlay */}
      {/* This gives breathing room around text -inset-y-[0.1em] -inset-x-[0.05em]
        so it does not overflow or get clipped when some letter come like f,y,j
      */}
      <motion.div
        className={cn(
          "absolute -inset-y-[0.1em] -inset-x-[0.05em]",
          overlayClassName
        )}
        initial={{ x: "-100%", scaleX: 1 }}
        animate={{
          x: ["-100%", "0%", "0%"],
          scaleX: [1, 1, 0],
        }}
        style={{ originX: 1 }}
        transition={{
          duration,
          ease: ease,
        }}
      />
    </div>
  )
}