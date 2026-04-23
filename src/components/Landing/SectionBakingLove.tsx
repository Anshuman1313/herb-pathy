"use client"

import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="w-full bg-neutral-50 px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Crafted With Passion & Precision
        </h2>

        {/* Subheading */}
        <p className="text-sm md:text-base text-neutral-600 max-w-2xl">
      From artisan cakes to delicate pastries, every creation is crafted to deliver comfort, flavor, and a sense of indulgence.
        </p>
      </div>

      {/* Content */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
        
        {/* Left Text */}
        <div className="text-center lg:text-right space-y-3 px-4">
          <h3 className="text-lg md:text-xl font-medium">
            Authentic Flavors
          </h3>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Rooted in classic baking traditions, our recipes use thoughtfully
            chosen ingredients with no unnecessary additives—just pure,
            honest taste.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <div className="relative w-[260px] sm:w-[320px] md:w-[360px] aspect-[4/5]">
            <Image
              src="/newtheme/dream.jpg"
              alt="Artisan cake"
              fill
              className="object-cover rounded-xl shadow-md"
              sizes="(max-width: 768px) 260px, (max-width: 1024px) 320px, 360px"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="text-center lg:text-left space-y-3 px-4">
          <h3 className="text-lg md:text-xl font-medium">
            Uncompromising Quality
          </h3>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Every step, from preparation to presentation, is handled with care
            to deliver consistency and excellence in every product.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 flex justify-center">
        <button className="px-6 py-2.5 text-sm font-medium rounded-full border border-neutral-300 hover:bg-neutral-900 hover:text-white transition">
          EXPLORE MORE
        </button>
      </div>
    </section>
  )
}