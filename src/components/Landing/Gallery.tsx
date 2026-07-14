"use client"

import Image from "next/image"
import { motion } from "motion/react"
type CakeImage = {
  src: string;
  instagramUrl?: string;
}

type CakeSection = {
  title: string;
  images: CakeImage[];
}

export const cakeSections :CakeSection[]  = [

  {
    title: "Cakes",
    images: [
      { src: "/cakes-gallery/b1_converted.avif",instagramUrl: "https://www.instagram.com/reel/DUvY7cGiZ8P/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
      { src: "/cakes-gallery/b2_converted.avif" },
      { src: "/cakes-gallery/b3_converted.avif" },
      { src: "/cakes-gallery/b4_converted.avif" },
      { src: "/cakes-gallery/b5_converted.avif" },
      { src: "/cakes-gallery/b6_converted.avif" },
      { src: "/cakes-gallery/b7_converted.avif" },
      { src: "/cakes-gallery/b8_converted.avif" },
      { src: "/cakes-gallery/b9_converted.avif" },
      { src: "/cakes-gallery/b10_converted.avif" },
      { src: "/cakes-gallery/b11_converted.avif" },
      { src: "/cakes-gallery/b12_converted.avif" },
      { src: "/cakes-gallery/b13_converted.avif" },
      { src: "/cakes-gallery/b14_converted.avif" },
      { src: "/cakes-gallery/b15_converted.avif" },
      { src: "/cakes-gallery/b16_converted.avif" },
      { src: "/cakes-gallery/b17_converted.avif" },
    ],
  },
    {
    title: "Levitating Cakes",
    images: [
      { src: "/cakes-gallery/l1_converted.avif" },
      { src: "/cakes-gallery/l2_converted.avif" },
      { src: "/occasion/lx1.jpeg", instagramUrl: "https://www.instagram.com/reel/DT5xFzHEgh4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    ],
  },
  {
    title: "Bento Cakes",
    images: [
      { src: "/cakes-gallery/bb1_converted.avif" },
      { src: "/cakes-gallery/bb2_converted.avif" },
      { src: "/cakes-gallery/bb3_converted.avif" },
    ],
  },
]

export default function CakeGallery() {
  return (
    <div className="w-full bg-neutral-50 pt-10 flex justify-center">
      <div className="w-full max-w-7xl px-6 md:px-12 lg:px-20 py-16">

        {/* 🔥 HEADER SECTION */}
        <div className="text-center mb-20">
          
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-neutral-200 text-neutral-700 mb-4">
            Gallery
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-4">
            Our Work in Pictures
          </h1>

          {/* Subheading */}
          <p className="text-neutral-600 max-w-2xl mx-auto text-base md:text-lg">
            Explore our handcrafted cakes, designed with precision and creativity. <br/>
            Every piece tells a story of taste.
          </p>
        </div>

        {/* 🔥 SECTIONS */}
        {cakeSections.map((section, idx) => (
          <div key={idx} className="mb-24">

            {/* Section Title */}
            <h2 className="text-xl md:text-4xl font-medium text-neutral-800 mb-8 text-center">
              {section.title}
            </h2>

            {/* Pinterest Masonry */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">

              {section.images.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="break-inside-avoid rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <Image
                    src={img.src}
                    alt={section.title}
                    width={600}
                    height={800}
                    className="w-full h-full "
                  />
                </motion.div>
              ))}

            </div>
          </div>
        ))}

      </div>
    </div>
  )
}