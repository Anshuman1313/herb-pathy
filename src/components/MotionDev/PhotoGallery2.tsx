"use client"
import clsx from 'clsx'
import { motion, MotionConfig } from "motion/react"
import React, { useState } from 'react'

const PhotoGallery2 = () => {
    const [activeDirection, setActiveDirection] = useState<"vertical" | "horizontal">(
        "horizontal",
    );
    return (
        <>
        <div
            onClick={() =>
                setActiveDirection(activeDirection === "vertical" ? "horizontal" : "vertical")
            }
            className="absolute top-20 right-20 hover:bg-black/5 transition-colors text-gray-800 text-sm rounded-lg px-2 py-1 cursor-pointer">Layout</div>
            <MotionConfig transition={{ type: "spring", bounce: 0, duration: 4.4 }}>
                <motion.div layout className={clsx(
                    ` border flex gap-20 `,
                    activeDirection === "vertical" ? " flex-col   " : " flex-row "
                )}>
                    {Array.from({ length: 10 }).map((box, i) => (
                        <motion.div layout key={i} className='grid place-items-center size-40 shrink-0 rounded-xl border-dashed border bg-amber-300'>
                            <span>Box {i + 1} </span>
                        </motion.div>
                    ))}
                </motion.div>
            </MotionConfig>
        </>
    )
}

export default PhotoGallery2