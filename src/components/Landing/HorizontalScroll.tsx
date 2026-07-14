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

export default function HorizontalScrollBasic() {
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
    <div ref={ref} className={`h-[${slides.length * 100}vh]`}>
      <div className="sticky top-0 h-screen overflow-hidden">
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
 const opacity = useTransform(progress, [start - 0.8, end], [0, 1])
const y = useTransform(progress, [start - 0.1, end], [40, 0])

  return (
    <div className="w-screen h-screen shrink-0 bg-neutral-50 flex items-center">
  
  <div className="w-full h-full grid grid-cols-[1fr_120px_1fr]">
    
    {/* LEFT → IMAGES */}
    <div className="flex items-center justify-end pr-10">
      <div className="flex gap-6">
        {data.images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            className="w-[420px] h-[460px] object-cover rounded-2xl shadow-md"
          />
        ))}
      </div>
    </div>

    {/* MIDDLE → SPACER (for control) */}
    <div /> 

    {/* RIGHT → TEXT */}
    <motion.div
      style={{ opacity, y }}
      className="flex flex-col justify-center pl-[20%]  f space-y-6"
    >
      <p className="text-sm tracking-[0.2em] text-neutral-400 uppercase">
        DreamSlice Studio
      </p>

      <h2 className="text-5xl leading-tight font-serif text-neutral-800">
        {data.heading}
      </h2>

      <p className="text-lg text-neutral-500 leading-relaxed">
        {data.sub}
      </p>

      <div className="w-12 h-[1px] bg-neutral-300" />

      <p className="text-sm text-neutral-400 tracking-wide">
        {data.meta}
      </p>
    </motion.div>
  </div>
</div>
    // <div className="w-full h-screen bg-red-400 shrink-0 bg-neutral-50 flex items-center">
      
    //   <div className="w-full h-full grid grid-cols-2">
        
    //     {/* LEFT → IMAGES */}
    //     <div className="relative flex items-center justify-center gap-6 px-16">
    //       {data.images.map((img, i) => (
    //         <motion.img
    //           key={i}
    //           src={img}
    //           // style={{ opacity }}
    //           className="w-[420px] h-[460px] object-cover rounded-2xl shadow-md"
    //         />
    //       ))}
    //     </div>

    //     {/* RIGHT → TEXT */}
    //     <motion.div
    //       style={{ opacity, y }}
    //       className="flex flex-col justify-center bg-green-400 pl-20 max-w-lg space-y-6"
    //     >
    //       <p className="text-sm tracking-widest text-neutral-400 uppercase">
    //         DreamSlice Studio
    //       </p>

    //       <h2 className="text-5xl leading-tight font-serif text-neutral-800">
    //         {data.heading}
    //       </h2>

    //       <p className="text-lg text-neutral-500 leading-relaxed">
    //         {data.sub}
    //       </p>

    //       <div className="w-12 h-[1px] bg-neutral-300" />

    //       <p className="text-sm text-neutral-400 tracking-wide">
    //         {data.meta}
    //       </p>
    //     </motion.div>
    //   </div>
    // </div>
  )
}