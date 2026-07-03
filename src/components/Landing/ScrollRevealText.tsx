"use client"

import { motion, useTransform } from "motion/react"

type Props = {
  progress: any
  start: number
  end: number
  className?: string
  title: string
  subtitle?: string
  image?: string
}

export default function ScrollRevealBox({
  progress,
  start,
  end,
  className = "",
  title,
  subtitle,
  image,
}: Props) {
  // animation control based on scroll slice
  const opacity = useTransform(progress, [start, end], [0, 1])
  const y = useTransform(progress, [start, end], [80, 0])
  const scale = useTransform(progress, [start, end], [0.95, 1])

  // overlay sweep (like your component)
  const overlayX = useTransform(progress, [start, end], ["-100%", "0%"])
  const overlayScale = useTransform(progress, [start, end], [1, 0])

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className={`absolute ${className}`}
    >
      {/* TEXT WRAP */}
      <div className="relative inline-block overflow-hidden">

        {/* TEXT */}
        <motion.div
          className="text-white"
          style={{
            clipPath: useTransform(
              progress,
              [start, end],
              ["inset(0% 100% 0% 0%)", "inset(0% -5% -10% 0%)"]
            ),
          }}
        >
          <h2 className="text-4xl font-bold">{title}</h2>
          {subtitle && (
            <p className="text-lg opacity-80 mt-2">{subtitle}</p>
          )}
        </motion.div>

        {/* OVERLAY */}
        <motion.div
          className="absolute inset-0 bg-red-400"
          style={{
            x: overlayX,
            scaleX: overlayScale,
            originX: 1,
          }}
        />
      </div>

      {/* IMAGE */}
      {image && (
        <motion.img
          src={image}
          alt=""
          className="mt-4 w-64 rounded-xl"
          style={{
            opacity,
            y,
          }}
        />
      )}
    </motion.div>
  )
}