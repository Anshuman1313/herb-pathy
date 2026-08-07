"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

// 🔥 DATA (easy to scale)
const slides = [
  {
    id: 1,
    heading: "Indulgence, Layered to Perfection",
    sub: "Rich chocolate, delicate cream, and bold cherry notes.",
    meta: "Hand-layered • Small batch",
    images: ["/2.avif", "/3.avif"],
  },
  {
    id: 2,
    heading: "Light, Elegant, Effortless",
    sub: "Silky textures with a clean, refined finish.",
    meta: "Balanced • Minimal • Refined",
    images: ["/4.avif", "/5.avif"],
  },
]

export default function HorizontalScrollMobile() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(slides.length - 1) * 100}%`]
  )

  return (
    // inline style, not a Tailwind class — dynamic height strings aren't
    // picked up by Tailwind's JIT compiler, so this must stay as `style`
    <div ref={ref} style={{ height: `${slides.length * 100}vh` }}>
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        <motion.div style={{ x }} className="flex h-full">
          {slides.map((slide, i) => (
            <Slide
              key={slide.id}
              data={slide}
              progress={scrollYProgress}
              start={i / slides.length}
              end={(i + 1) / slides.length}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

// TYPES
type SlideData = {
  id: number
  heading: string
  sub: string
  meta: string
  images: string[]
}

type SlideProps = {
  data: SlideData
  progress: any
  start: number
  end: number
}

function Slide({ data, progress, start, end }: SlideProps) {
  const opacity = useTransform(progress, [start - 0.6, end], [0, 1])
  const y = useTransform(progress, [start - 0.1, end], [24, 0])

  return (
    <div className="w-screen h-[100dvh] shrink-0 bg-neutral-50 flex flex-col justify-center px-6 py-10">
      {/* IMAGES — stacked side by side, sized for a phone viewport */}
      <div className="flex justify-center gap-3 mb-8">
        {data.images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            className="w-[44%] aspect-[3/4] object-cover rounded-xl shadow-md"
          />
        ))}
      </div>

      {/* TEXT */}
      <motion.div style={{ opacity, y }} className="flex flex-col items-center text-center gap-3">
        <p className="text-[11px] tracking-[0.25em] text-neutral-400 uppercase">
          DreamSlice Studio
        </p>

        <h2 className="text-3xl leading-tight font-serif text-neutral-800 max-w-[16ch]">
          {data.heading}
        </h2>

        <p className="text-[15px] text-neutral-500 leading-relaxed max-w-[30ch]">
          {data.sub}
        </p>

        <div className="w-10 h-[1px] bg-neutral-300 my-1" />

        <p className="text-xs text-neutral-400 tracking-wide">{data.meta}</p>
      </motion.div>
    </div>
  )
}
