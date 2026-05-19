"use client"
import React, { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts';
import {AnimatePresence, motion, MotionConfig} from "motion/react"
import { div } from 'motion/react-client';
import clsx from 'clsx';
const ImageBento = () => {
  const [activeGame, setActiveGame] = useState<GridItem | null>(null);
    const ref1 = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref1 as React.RefObject<HTMLElement>, () => setActiveGame(null))

  return (
    <>
    <MotionConfig transition={{duration: 0.5, ease: [0.45,0.05,0.55,0.95] }}>
      {/* cubic-bezier(0.45,0.05,0.55,0.95); */}
      <AnimatePresence>
      {activeGame ? (
       <>
       

          
       
          <div className="h-full w-full grid place-items-center absolute">
            <motion.div layoutId= {`the-grid-box-${activeGame.id}`} ref= {ref1} className="cursor-pointer h-fit w-160  rounded-3xl z-2 overflow-hidden relative">
              <motion.div layoutId={`image-${activeGame.id}`} className="w-full h-110 relative overflow-hidden">
              <motion.div layoutId={`title-${activeGame.id}`} className='absolute backdrop-blur-[2px] bg-[rgba(0,0,0,0.2)]   bottom-0 z-1 font-semibold py-2 px-3 font-inter text-background backdroup-blur  w-full text-2xl'>{activeGame.title}</motion.div>
            <motion.img layoutId={`img-${activeGame.id}`} src={activeGame.image} alt={`card-${activeGame.id}`} className={clsx(`' absolute w-[110%] -top-30 -right-1'`)} />
              </motion.div>
              <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="h-full w-full text-lg z-0 text-gray-300 bg-[#0A0A0A] pt-3 pb-4 px-6">{activeGame.longDescription} </motion.div>
            </motion.div>
          </div>
           
        
      </> 
        
      ) : null}
      </AnimatePresence>
      <div className="w-full px-20">

     
      <div className="grid grid-cols-4 w-full h-180 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08),0px_1px_2px_-1px_rgba(0,0,0,0.08),0px_2px_4px_0px_rgba(0,0,0,0.06)] gap-y-5 gap-x-5 relative overflow-hidden rounded-4xl p-4 ">
        <AnimatePresence>

        {activeGame? (   <motion.div initial={{ opacity:0,}} animate={{ opacity:1}} exit={{ opacity:0}} className='absolute z-1 inset-0 w-full bg-[rgba(0,0,0,0.1)]'/>):null}
        </AnimatePresence>
      
        {cards.map((card) => (
          <motion.div 
          layoutId= {`the-grid-box-${card.id}`} 
          key={card.id} className='  rounded-2xl  relative overflow-hidden cursor-pointer bg-red-400'
            onClick={() => setActiveGame(card)}

            style={{
              gridColumn: `span ${card.colSpan ?? 1} / span ${card.colSpan ?? 1}`,
              gridRow: `span ${card.rowSpan ?? 1} / span ${card.rowSpan ?? 1}`,
            }}
          >
            <motion.div layoutId={`image-${card.id}`} className="size-full relative ">

            <motion.div layoutId={`title-${card.id}`} className='absolute backdrop-blur-[2px] bg-[rgba(0,0,0,0.2)]  rounded-b-2xl bottom-0 z-1 font-semibold py-2 px-3 font-inter text-background backdroup-blur  w-full text-2xl '>{card.title} </motion.div>
            <motion.img layoutId={`img-${card.id}`} src={card.image} alt={`card-${card.id}`} 
            className={clsx(card.rowSpan == 2 ? "h-[120%]" : "h-[130%]", `w-[110%] absolute brightness-98`)} />
            </motion.div>
          </motion.div>
        ))}
      </div>
       </div>
      </MotionConfig>
      
    </>
  )
}

export default ImageBento
type GridItem = {
  id?: number;
  title?: string;
  subTitle?: string;
  description?: string;
  longDescription?: string;
  image: string;
  colSpan?: number;
  rowSpan?: number;
};
const cards: GridItem[] = [
  {
    id: 1,
    title: "Wedding Cakes",
    subTitle: "Elegant • Timeless • Crafted",
    description:
      "Beautiful multi-tier wedding cakes designed to make your big day unforgettable.",
    longDescription:
      "Our wedding cakes are crafted with precision and elegance, designed to be the centerpiece of your celebration. From classic floral tiers to modern minimalist styles, each cake is customized to match your theme, taste, and story. We focus on premium ingredients, delicate detailing, and a flawless finish that looks stunning and tastes even better.",
    image: "/Gallery/b1.jpeg",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 2,
    title: "Cupcake Collection",
    subTitle: "Cute • Bite-sized • Delightful",
    description:
      "Perfectly portioned cupcakes for parties, gifting, and celebrations.",
    longDescription:
      "Our cupcakes are small in size but big on personality. Designed for celebrations, events, or just a sweet craving, each piece is decorated with precision and creativity. From themed designs to elegant finishes, these cupcakes are perfect for sharing joy in the most delightful way.",
    image: "/occasion/cp2.jpg",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 5,
    title: "Anniversary Cakes",
    subTitle: "Celebrate Love",
    description:
      "Mark your special milestones with cakes that symbolize love and togetherness.",
    longDescription:
      "Every anniversary is a milestone worth celebrating. Our anniversary cakes are designed to capture emotions, memories, and years of togetherness. Whether it's a silver jubilee or your first year, we create cakes that reflect your journey with elegance and warmth.",
    image: "/occasion/an1.jpg",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 3,
    title: "Birthday Cakes",
    subTitle: "Fun • Personal • Memorable",
    description:
      "Custom birthday cakes tailored to your personality and theme.",
    longDescription:
      "Birthdays are personal, and so should be your cake. From fun character cakes to aesthetic minimalist designs, we create cakes that reflect your vibe. Every detail is crafted to bring excitement, surprise, and a smile when the cake is revealed.",
    image: "/occasion/bd1.jpg",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 4,
    title: "Custom Cakes",
    subTitle: "Your Idea • Our Creation",
    description:
      "Bring your imagination to life with fully customized cake designs.",
    longDescription:
      "Have a unique idea in mind? We specialize in turning your vision into reality. Whether it's a themed cake, a personal story, or a creative concept, our custom cakes are designed from scratch to match exactly what you imagine — no limits, just creativity.",
    image: "/occasion/cu1.jpeg",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 7,
    title: "Designer Cakes",
    subTitle: "Trendy • Aesthetic • Premium",
    description:
      "Modern cakes inspired by trending designs and luxury aesthetics.",
    longDescription:
      "Stay ahead with cakes inspired by global trends and modern aesthetics. Clean finishes, unique textures, and artistic detailing define our designer cakes. Perfect for those who want something stylish, Instagram-worthy, and different from the usual.",
    image: "/occasion/bt1.jpg",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 6,
    title: "Luxury Cakes",
    subTitle: "Premium • Sophisticated",
    description:
      "High-end cakes with exquisite detailing and rich flavors.",
    longDescription:
      "Luxury cakes are all about elegance and indulgence. Crafted with premium ingredients and refined designs, these cakes bring a sense of exclusivity to your celebration. From gold accents to flawless textures, every detail speaks sophistication.",
    image: "/occasion/lx1.jpeg",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 8,
    title: "Theme Cakes",
    subTitle: "Creative • Unique • Fun",
    description:
      "Cakes designed around your favorite characters, hobbies, or themes.",
    longDescription:
      "Theme cakes are where creativity shines the most. Whether it's a favorite movie, cartoon, hobby, or concept, we design cakes that instantly connect with you. These cakes are perfect for making moments more fun, expressive, and unforgettable.",
    image: "/occasion/1.jpg",
    colSpan: 1,
    rowSpan: 1,
  },
];