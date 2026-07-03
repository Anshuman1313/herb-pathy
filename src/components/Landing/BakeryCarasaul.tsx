"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "motion/react";

export function BakeryCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <section className="w-full h-full pt-40 pb-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
        viewport={{ once: true }}
        className="px-20 mb-14"
      >
        <h2 className="text-3xl md:text-8xl text-center font-semibold italic  font-crimson tracking-tight text-heading-cake leading-tighter">
         <div>Freshly baked </div> 
          for your sweetest moments
        </h2>

        <p className="mt-4 text-neutral-500 text-center text-lg md:text-xl  font-crimson">
          Cakes, breads, cookies and everything in between — made daily,
          crafted with love.
        </p>
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
        viewport={{ once: true }}
      >
        <Carousel items={cards} />
      </motion.div>
    </section>
  );
}

/* ---------- Content inside cards ---------- */

const BakeryContent = ({ text, img }: { text: string; img: string }) => {
  return (
    <div className="bg-[#F8F6F2] p-8 md:p-12 rounded-3xl mb-4">
      <p className="text-neutral-700 text-base md:text-xl font-crimson max-w-2xl mx-auto text-center leading-relaxed">
        {text}
      </p>

      <img
        src={img}
        alt="bakery item"
        className="mt-8 w-full h-[300px] object-cover rounded-2xl"
      />
    </div>
  );
};

/* ---------- Data ---------- */

const data = [
  {
    category: "Cakes",
    title: "Celebration cakes made fresh everyday",
    src: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=2000&auto=format&fit=crop",
    content: (
      <BakeryContent
        text="Soft, rich and beautifully crafted cakes for every celebration — from birthdays to quiet little moments."
        img="https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=2000&auto=format&fit=crop"
      />
    ),
  },
  {
    category: "Breads",
    title: "Warm breads, straight from the oven",
    src: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2000&auto=format&fit=crop",
    content: (
      <BakeryContent
        text="Crusty on the outside, soft inside — baked fresh every morning to bring comfort to your table."
        img="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2000&auto=format&fit=crop"
      />
    ),
  },
  {
    category: "Cookies",
    title: "Little bites of happiness",
    src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=2000&auto=format&fit=crop",
    content: (
      <BakeryContent
        text="Golden, crunchy, and melt-in-your-mouth cookies — perfect with your evening chai."
        img="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=2000&auto=format&fit=crop"
      />
    ),
  },
  {
    category: "Pastries",
    title: "Light, creamy and indulgent",
    src: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=2000&auto=format&fit=crop",
    content: (
      <BakeryContent
        text="Flaky layers, smooth creams, and rich flavors — made to make every bite unforgettable."
        img="https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=2000&auto=format&fit=crop"
      />
    ),
  },
  {
    category: "Home Bakery",
    title: "Crafted with love, just like home",
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2000&auto=format&fit=crop",
    content: (
      <BakeryContent
        text="Every product carries the warmth of home baking — simple, honest, and made with care."
        img="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2000&auto=format&fit=crop"
      />
    ),
  },
];