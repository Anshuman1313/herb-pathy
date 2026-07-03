"use client"

import { motion } from "motion/react"

export default function About() {
  return (
    <section className="relative w-full  py-24 px-6 overflow-hidden  text-neutral-900">
      


      {/* Content */}
      <div className="max-w-4xl pt-10  space-y-10 mx-auto text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold tracking-tight mb-6"
        >
          About Dream Slice Studio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg pt-5 text-neutral-600 leading-relaxed"
        >
          Founded in 2023, DreamSlice Studio is a boutique home-based bakery built on a passion for refined aesthetics, thoughtful design, and exceptional taste. What began as a simple vision has grown into a creative studio dedicated to turning desserts into experiences.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-neutral-600 leading-relaxed"
        >
          We specialize in bespoke cakes and premium desserts, designed to complement your most meaningful moments. From elegant wedding cakes to refined celebrations, every piece balances visual artistry with rich, indulgent flavor.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-neutral-600 leading-relaxed"
        >
          At DreamSlice Studio, every detail matters. Each creation is crafted with high-quality ingredients and a commitment to elegance, ensuring your dessert is not just served — but remembered.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="h-[2px] bg-neutral-300 mx-auto mt-10"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 text-sm text-neutral-500 tracking-wide uppercase"
        >
          Crafted with precision. Designed with intention.
        </motion.p>

      </div>
    </section>
  )
}