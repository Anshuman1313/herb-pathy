"use client"
import React, { useState } from 'react'
import { motion } from 'motion/react'
import Hamburger1 from './Hamburger'
import { clipPath, div } from 'motion/react-client'
import { Cake } from 'lucide-react'
import MovingArrow from './MovingArrow'

const Nav1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { id: 1, title: "HOME" },
        { id: 2, title: "ABOUT" },
        { id: 3, title: "CONTACT" },
    ];

    const clipPathVariants = {
        closed: {
            clipPath: "inset(64px 27% calc(100vh - 139px) round 12px)",
        },
        open: {
            clipPath: "inset(0px 0% 0px round 0px)"
        }
    }

    return (
        <div className=' text-heading-cake  relative'>
            <div className={`bg-background transition-shadow duration-300   z-100 font-milkshake text-5xl flex justify-between px-5 items-center 
            ${isOpen ? "shadow-none  delay-0" 
                : "shadow-xl shadow-chart-1  delay-1000 ease-out"} 
            absolute top-16 left-[27%] right-[27%] h-18.75 rounded-xl
            `}
            >
                <span>DreamSlice</span>

                <div onClick={() => setIsOpen(!isOpen)}> <Hamburger1 /></div>
            </div>


            <motion.div
                aria-hidden="true"
                className="nav-bg bg-background h-screen w-full  z-30 absolute inset-0"
                variants={clipPathVariants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                transition={{
                    duration: 1,
                    ease: [0.77, 0, 0.175, 1],
                }}
            >
                <div className="relative top-40 font-cooper  ">

                    <div className="flex flex-col gap-8 mx-auto overflow-hidden  md:w-240 px-2">
                        {navItems.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ x: i % 2 === 0 ? 140 : -140, opacity: 0 }}
                                animate={{ x: isOpen ? 0 : i % 2 === 0 ? 140 : -140, opacity: isOpen ? 1 : 0 }}
                                transition={
                                    isOpen
                                        ? {
                                            duration: 0.7,
                                            delay: 0.1,
                                            ease: [0.77, 0, 0.175, 1],
                                        }
                                        : {

                                            duration: 1,
                                            ease: [0.77, 0, 0.175, 1],
                                        }
                                }
                                // transition={{
                                //     duration: 0.7,
                                //     delay: isOpen ? 0.1 : 0.6,
                                //     ease: [0.77, 0, 0.175, 1],
                                // }}
                                className={`flex gap-2 w-full ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
                            >
                                <span className="text-base font-light mt-2 ">/0{item.id}</span>
                                <h2 className="text-8xl ">{item.title}</h2>
                            </motion.div>
                        ))}
                    </div>
                    <div className=' bottom-0  relative mt-30 w-280 mx-auto flex items-baseline justify-center'>
                        {/* The box with linke to instagram */}
                        <div className="hidden overflow-hidden group h-33 w-65 absolute right-0 bottom-0 ">

                            {/* Content layer */}
                            <div className="relative z-10 size-full flex flex-col justify-around ">
                                <MovingArrow className="size-5 ml-[85%]" />
                                <div className="text-background text-sm px-4">Follow the journey</div>
                            </div>
                            {/* Background image layer */}
                            <div className="absolute inset-0 bg-[url('/cake/instaCakeBg.jpg')] bg-cover bg-center 
                  transition-transform duration-500 
                  group-hover:scale-110" />


                        </div>


                        <Cake className='stroke-[1.3] relative top-1 ' />

                        <span className='text-sm text-cooper  pl-2'>Baked fresh. Designed to delight.</span>
                        <div className='flex gap-20 ml-40 text-sm '>
                            <span>INSTAGRAM</span>
                            <span>CONTACT</span>
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
    )
}

export default Nav1



