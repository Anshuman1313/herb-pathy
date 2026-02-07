"use client"
import MovingPhotoShowcase from "@/components/MotionDev/MovingPhotoShowcase";
import { useEffect, useRef } from "react";
import { motion } from "motion/react"
import styles from '@/styles/Home.module.css';
import { MoveUp } from "lucide-react";
import Image from "next/image";
export default function Cake() {
    useEffect(() => {

        (

            async () => {

                const LocomotiveScroll = (await import('locomotive-scroll')).default

                const locomotiveScroll = new LocomotiveScroll();


            }

        )()

    }, [])

    const cakeImages = ["cake.png","cupcake2.png","mail-server.png","8.png","18.png"]

    return (
        <>
        <div id="yuji"></div>
            {/* There is move up button */}
            <a data-scroll-to data-scroll-to-duration="2.5" href="#yuji" className="rounded-full bg-blue-400 size-10 text-gray-100 fixed  bottom-10 z-100 right-10 cursor-pointer flex justify-center items-center"><MoveUp />

            </a>
            <div className="h-screen w-full p-5">
                <div className="h-full w-full bg-background rounded-xl flex flex-col justify-center items-center">
                    <div className="flex gap-5">
                    {cakeImages.map((url,i)=>(

                        <Image src={`/cake/${url}`}  key={i} alt="cupcake" width={120} height={120} className="bg-white" />
                    )

                    )}
                    </dirv>
                    <h1 className="font-mono text-pink-600 text- font-medium"> DESIGN</h1>
             <h1 className="font-cooper text-[38px] text-[#292524] font-extralight">
                Cake Page Heading
            </h1>
            <h1 className="font-geist font-normal text-[18px] text-[#292524] ">
                Cake Page Subheading we are here to make the cake website
            </h1>
                </div>
            </div>
            <div className="h-screen bg-background rounded-xl m-5 flex flex-col justify-center items-center">
                  <div className="flex gap-5 flex-wrap">
                    {Array.from({length: 16}).map((url,i)=>(

                        <Image src={`/cake/${i+1}.png`} key={i} alt="cupcake" width={120} height={120} />
                    )

                    )}
                    </div>

            <h1 className="font-cooper text-[38px] text-[#292524] font-extralight">
                Cake Page Heading
            </h1>
            <h1 className="font-geist font-normal text-[18px] text-[#292524] ">
                Cake Page Subheading we are here to make the cake website
            </h1>
            </div>




            {/* There is this images array */}
            <div className="w-full min-h-screen   bg-gray-100 p-5 flex flex-col gap-5 items-center   relative">

                {Array.from({ length: 22 }).map((_, i) => (

                    <div key={i} className={`h-160 w-100 bg-white [corner-shape:squircle_squircle_squircle_squircle] rounded-3xl overflow-clip ${i % 2 != 0 ? `ml-[50%]` : `mr-[50%]`}`}>

                        <div data-scroll data-scroll-speed="-0.2" className="relative size-[150%] top-[-20%] let-[-20%]">

                            <Image src={`/slidershowCathy/slider${i + 1}.jpg`} alt={`slider${i + 1}`} fill className="filter-[brightness(0.8)]" />
                        </div>
                    </div>
                ))}


            </div>
            {/* Gojo Sukuna anchor tags  */}
            <div className="w-full min-h-screen overflow-y-hidden  bg-gray-100 p-5">
                <a href="#gojo" data-scroll-to  >Gojo</a>
                <a href="#sukuna" data-scroll-to data-scroll-to-duration="3" >Sukuna</a>
                <div className="flex flex-col gap-20 justify-center">

                    <motion.div className="size-20 bg-blue-400" data-scroll
                        animate={{ x: 400 }}
                        transition={{
                            type: "spring",
                            duration: 1, bounce: 0.1,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 1
                        }}
                    >1</motion.div>

                </div>
                <MovingPhotoShowcase />
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{ x: 400 }}
                transition={{
                    ease: [.455, .03, .515, .955],
                    repeat: Infinity,
                    duration: 1,
                    repeatType: "reverse",
                    repeatDelay: 1
                }}
                className="size-20 bg-blue-400">2</motion.div>
            <div className="h-[200vh] w-full bg-gray-100 ">
                <h1 id="gojo" className="text-center" >Gojo Satoru</h1>
            </div>
            <div className="h-[200vh] w-full bg-gray-100 " data-scroll-container>
                <h1 id="sukuna" className="text-center" data-scroll-section>Sukuna King</h1>
            </div>
        </>
    )
}