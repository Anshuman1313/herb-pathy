"use client"
import { useState } from 'react'
import { motion } from "motion/react"
import clsx from 'clsx'

type ITEMS = {
  title: string,
  img?: string,
}
type VerticalImagesStackMobileProps = {
  Items: ITEMS[]
}

const VerticalImagesStackMobile = ({ Items }: VerticalImagesStackMobileProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const colorred = [
    "bg-red-100", "bg-red-200", "bg-red-300", "bg-red-400", "bg-red-500",
    "bg-red-600", "bg-red-700", "bg-red-800", "bg-red-900",
  ];

  const COLLAPSED_HEIGHT = 56
  const EXPANDED_HEIGHT = 280

  const handleTap = (i: number) => {
    setActiveIndex((current) => (current === i ? null : i))
  }

  return (
    <div className="w-full flex flex-col md:hidden">
      {Items.map((card, i) => {
        const isActive = activeIndex === i
        return (
          <motion.div
            key={card.title}
            className="relative border-y overflow-clip w-full"
            initial={{ height: COLLAPSED_HEIGHT }}
            animate={{ height: isActive ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT }}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.2,
              mass: 0.3,
              damping: 16,
            }}
          >
            {/* Title row — always visible, min 40px hit area, scale-on-press feedback */}
            <button
              onClick={() => handleTap(i)}
              aria-expanded={isActive}
              aria-label={card.title}
              className={clsx(
                "relative z-10 w-full h-14 px-4 flex items-center justify-between",
                "text-left text-lg font-medium",
                "active:scale-[0.98] transition-transform"
              )}
            >
              <span className="border-b border-black">{card.title}</span>
              <span
                className={clsx(
                  "text-sm transition-transform duration-200",
                  isActive ? "rotate-180" : "rotate-0"
                )}
                aria-hidden
              >
                ▾
              </span>
            </button>

            {/* Image panel — sits below the title row, revealed as height grows */}
            <div className="absolute inset-0 top-14 px-1 pb-1">
              <div className={clsx("size-full outline outline-1 outline-black/10", colorred[i % colorred.length])}>
                <img
                  src={`/menu-cakes/${card.img}.avif`}
                  className="size-full object-cover"
                  alt={card.title}
                  draggable={false}
                />
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default VerticalImagesStackMobile