"use client"
import { useState } from "react";
import { motion } from "motion/react"
import useMeasure from "react-use-measure";
import Image from "next/image";

export default function TestimonialsWireframe() {
    const [gridref, bounds] = useMeasure();
    const [showtestimonial, setShowtestimonial] = useState(false)
    return (
        <section className="w-full pb-30  px-6 md:px-16">

            {/* <div className=" mb-14">
                <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
                    Loved by those who believe <br />
                    <span className="underline underline-offset-4">
                        every slice tells a story
                    </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm md:text-base text-neutral-500">
                    At DreamSlice Studio, we craft cakes that turn moments into memories.
                    Designed with love, baked with precision — made just for your celebration.
                </p>
            </div> */}
            <motion.div className="bg-gray-50 w-full relative  rounded-xl border   overflow-hidden"
                initial={{ height: "auto" }}
                animate={{ height: showtestimonial ? (bounds.height + 120) : 650 }}

            >
                <div className={` bottom-0 bg-[linear-gradient(to_top,rgba(249,247,244,1)_40%,rgba(249,247,244,0)_100%)]   w-full flex justify-center items-center h-40 absolute z-100 `}

                >
                    {/* bg-[linear-gradient(to_top,rgba(249,247,244,1)_40%,rgba(249,247,244,0)_100%)] */}
                    <div className="flex gap-3 items-center">
                        {/* Toggle button */}
                        <button
                            onClick={() => setShowtestimonial(prev => !prev)}
                            className="bg-foreground/90 text-background border px-3 rounded-xl py-1"
                        >
                            {showtestimonial ? "Show Less" : "Show More"}
                        </button>

                        {/* Instagram button */}
                        <a
                            href="https://www.instagram.com/stories/highlights/18008276312471277/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border px-3 py-1 rounded-xl hover:bg-foreground/10 transition"
                        >
                            View More on Instagram
                        </a>
                    </div>
                </div>
                <div
                    ref={gridref}
                    className="grid grid-cols-[1.1fr_1.5fr_1fr_1fr] gap-x-10 px-10 my-10"
                >
                    {columns.map((col, colIndex) => (
                        <div key={colIndex} className="flex flex-col space-y-6">
                            {col.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${item.height} rounded-2xl bg-white border border-neutral-200 p-4 relative overflow-clip`}
                                >
                                    {item.src && (
                                        <Image
                                            src={item.src}
                                            fill
                                            alt="testimonial"
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </motion.div>


        </section>
    );
}
type GridItem = {
    src: string; // optional for placeholders
    height: string;
};


const columns: GridItem[][] = [
    // Column 1
    [
        { src: "/proof/21.png", height: "h-100" },
        { src: "/proof/2.jpeg", height: "h-90" },
        { src: "/proof/3.jpeg", height: "h-105" },
    ],

    // Column 2
    [
        { src: "/proof/4.jpeg", height: "h-60" },
        { src: "/proof/5.jpeg", height: "h-80" },
        { src: "/proof/1.jpeg", height: "h-120" },
        { src: "/proof/7.jpeg", height: "h-110" },
    ],

    // Column 3
    [
        { src: "/proof/8.jpeg", height: "h-30" },
        { src: "/proof/10.png", height: "h-85 " },
        { src: "/proof/9.png", height: "h-115" },
        { src: "/proof/11.png", height: "h-105" },
    ],

    // Column 4
    [
        { src: "/proof/12.png", height: "h-90" },
        { src: "/proof/13.png", height: "h-90" },
        { src: "/proof/14.png", height: "h-85" },
        { src: "/proof/15.png", height: "h-80" },
        { src: "/proof/16.png", height: "h-60" },
    ],
];