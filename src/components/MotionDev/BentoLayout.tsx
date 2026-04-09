"use client"
import clsx from 'clsx';
import { AnimatePresence, motion, MotionConfig } from "motion/react"
import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts';

const BentoLayout = () => {
  const [activeGame, setActiveGame] = useState<GridItem | null>(null);
  const ref1 = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref1 as React.RefObject<HTMLElement>, () => setActiveGame(null))
  return (
    <>
    <MotionConfig transition={{duration: 2.5, type: "spring" ,bounce: 0}}>

   
      <AnimatePresence mode='popLayout'>
        {activeGame ? (
          <div className="size-full absolute ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="overlay absolute inset-0 z-50 " />
            <div className="active-game absolute grid place-items-center z-100  inset-0">
              
              <motion.div layoutId={`container-${activeGame.id}`} ref={ref1} className="inner-box flex w-[600px] cursor-pointer flex-col items-start gap-16px overflow-hidden bg-[#0b1012]  " style={{ borderRadius: 16 }}>

                <motion.div className="header relative  h-80  flex  items-center gap-4">

                  <motion.div layoutId={`title-wrapper-${activeGame.id}`} className="absolute top-10 left-0 px-8 w-full text-background font-inter font-semibold  space-y-1 z-2">
                    <motion.div layoutId={`sub-title-${activeGame.id}`} className="text-sm ">{activeGame.subTitle}</motion.div>
                    <motion.div layoutId={`title-${activeGame.id}`} className="text-2xl ">{activeGame.title}</motion.div>
                  </motion.div>



                  <motion.div
                    layoutId={`img-container-${activeGame.id}`}
                    className="absolute inset-0  overflow-hidden "
                  >
                    <motion.img 
                      src={activeGame.image}
                      className="w-full h-full object-cover brightness-[0.95] contrast-[1.05] saturate-[1.05] "
                    />
                  </motion.div>


                </motion.div>
                <AnimatePresence mode='popLayout'>


                  <motion.p initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="   text-lg leading-tight text-balance font-normal w-full  text-[rgba(256,256,256,0.6)] px-8 pt-4 pb-8">
                    {activeGame.longDescription} 
                  </motion.p>


                </AnimatePresence>
              </motion.div>
            </div>

          </div>) : null}
      </AnimatePresence>

      <div className='h-160 w-380 border rounded-3xl p-2 grid grid-cols-4 grid-rows-3 gap-4 '>

        {ExpGrid.map((card, i) => (
          
          <motion.div layoutId={`container-${card.id}`} className={clsx(`rounded-2xl relative overflow-clip cursor-pointer`)}
            onClick={() => setActiveGame(card)}
            key={`card-${i}`}
            style={{
              borderRadius: 12,
              gridColumn: `span ${card.colSpan} / span ${card.colSpan}`,
              gridRow: `span ${card.rowSpan ?? 1} / span ${card.rowSpan ?? 1}`,
            }}
            >
             {/* ?? is nullsih coalescing operator basically a ?? b “If a is null or undefined, use b instead” */}
            <motion.div
              layoutId={`img-container-${card.id}`}
              className="absolute inset-0 rounded-2xl overflow-hidden "
            >
              <img
                src={card.image}
                className="w-full h-full object-cover brightness-[0.95] contrast-[1.05] saturate-[1.05]"
              />
            </motion.div>

            <motion.div layoutId={`title-wrapper-${card.id}`} className="absolute  top-10 left-0 px-8     w-full text-background  font-inter font-semibold space-y-0">

              <motion.div layoutId={`sub-title-${card.id}`} className="text-sm ">{card.subTitle}</motion.div>

              <motion.div layoutId={`title-${card.id}`} className="text-2xl ">{card.title}</motion.div>
            </motion.div>
          </motion.div>
        ))}



      </div>



         </MotionConfig>



    </>
  )
}

export default BentoLayout

type GridItem = {
  id?: number;
  title: string;
  subTitle: string;
  description?: string;
  longDescription?: string;
  image: string;
  colSpan?: number;
  rowSpan?: number;
};

const ExpGrid = [
  {
    id: 1,
    title: "Occasion",
    subTitle: "Curated",
    description: "They are coming for you.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image: "/occasion/wd1.jpg",
    colSpan: 1,
    rowSpan: 2,
  },
  {
  id: 2,
  title: "Chocolate Indulgence",
  subTitle: "Signature",
  description: "Rich, smooth, and deeply satisfying.",
  longDescription:
    "A luxurious chocolate cake layered with velvety ganache and soft sponge. Perfect for celebrations or those moments when only something rich and indulgent will do.",
  image: "/occasion/cp2.jpg",
  colSpan: 2,
  rowSpan: 1,
},
{
  id: 3,
  title: "Classic Celebration",
  description: "Simple, elegant, and timeless.",
  subTitle: "Bestseller",
  longDescription:
    "A beautifully crafted classic cake designed for every occasion. Light, fluffy layers paired with smooth frosting make it a go-to choice for birthdays and gatherings.",
  image: "/occasion/bd1.jpg",
  colSpan: 1,
  rowSpan: 1,
},
{
  id: 4,
  title: "Fruit Fantasy",
  subTitle: "Classic",
  description: "Fresh, vibrant, and refreshing.",
  longDescription:
    "A delightful mix of seasonal fruits layered over a soft sponge and light cream. Perfect for those who love a balance of sweetness and freshness in every bite.",
  image: "/occasion/bt1.jpg",
  colSpan: 1,
  rowSpan: 2,
},
{
  id: 5,
  title: "Anniversary Special",
  subTitle: "Moments",
  description: "Crafted for memorable moments.",
  longDescription:
    "A premium cake designed to celebrate love and milestones. Elegant design with rich flavors that make every anniversary feel extra special.",
  image: "/occasion/an1.jpg",
  colSpan: 1,
  rowSpan: 1,
},
{
  id: 6,
  title: "Anniversary Special",
  subTitle: "Moments",
  description: "Crafted for memorable moments.",
  longDescription:
    "A premium cake designed to celebrate love and milestones. Elegant design with rich flavors that make every anniversary feel extra special.",
  image: "/occasion/an1.jpg",
  colSpan: 2,
  rowSpan: 1,
}
]
