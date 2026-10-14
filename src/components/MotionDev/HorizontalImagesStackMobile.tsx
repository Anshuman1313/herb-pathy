"use client"
import { useState } from 'react'
import { motion } from "motion/react"
import clsx from 'clsx'

type ITEMS = {
  title: string,
  img?: string,
}
type HorizontalImagesStackMobileProps = {
  Items: ITEMS[]
}

const HorizontalImagesStackMobile = ({ Items }: HorizontalImagesStackMobileProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const colorred = [
    "bg-red-100", "bg-red-200", "bg-red-300", "bg-red-400", "bg-red-500",
    "bg-red-600", "bg-red-700", "bg-red-800", "bg-red-900",
  ];

  // Smaller footprint than desktop — mobile viewport can't absorb 400px expanded cards
  const COLLAPSED_WIDTH = 56
  const EXPANDED_WIDTH = 220

  const handleTap = (i: number) => {
    setActiveIndex((current) => (current === i ? null : i))
  }

  return (
    // overflow-x-auto instead of a fixed totalWidth — lets the row scroll
    // rather than forcing every card into the viewport at once
    <div className="w-full overflow-x-auto scrollbar-hide">
      <motion.div className="h-90 flex items-center will-change-transform w-fit">
        {Items.map((card, i) => (
          <motion.div
            key={card.title}
            className="relative border-x overflow-clip h-90 shrink-0"
            initial={{ width: COLLAPSED_WIDTH }}
            animate={{ width: activeIndex === i ? EXPANDED_WIDTH : COLLAPSED_WIDTH }}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.15,
              mass: 0.3,
              damping: 14,
            }}
            onClick={() => handleTap(i)}
            role="button"
            aria-expanded={activeIndex === i}
            aria-label={card.title}
          >
            <div
              className={clsx(
                "absolute origin-bottom-left px-2 bottom-0 left-14 h-14 w-70 text-base -rotate-90 pointer-events-none",
              )}
            >
              <span className="border-b border-black">{card.title}</span>
            </div>

            <div className="h-full p-1">
              <div className="h-full w-full pl-10">
                <div className={`size-full ${colorred[i % colorred.length]}`}>
                  <img
                    src={`/menu-cakes/${card.img}.avif`}
                    className="size-full object-cover"
                    alt={card.title}
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default HorizontalImagesStackMobile