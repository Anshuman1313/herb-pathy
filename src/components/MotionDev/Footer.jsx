import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from 'motion/react';
import { div } from "motion/react-client";

export default function Footer() {
    const container = useRef();
    const paths = useRef([]);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })

    useEffect( () => {
        scrollYProgress.on("change", e => {
            paths.current.forEach( (path, i) => {
                path.setAttribute("startOffset", -40 + (i * 40) + (e * 40) + "%");
            })
        })
    }, [])

    return (
        <div ref={container} className="h-[170vh]">
            <svg className="w-full " viewBox="0 0 250 90">
                <path fill="none" id="curve" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"/>
                <text className="text-[6px] uppercase" style={{fill: "red"}}>
                    {
                        [...Array(4)].map((_, i) => {
                            return <textPath key={i} ref={ref => paths.current[i] = ref} startOffset={i * 40 + "%"} href="#curve">Curabitur mattis efficitur velit</textPath>
                        })
                    }
                </text>
            </svg>
            {/* <Logos scrollProgress={scrollYProgress}/> */}
        </div>
    )
}

const Logos = ({scrollProgress}) => {
    const y = useTransform(scrollProgress, [0, 1], [-700, 0])
    return (
        <div className="h-65 bg-black overflow-hidden">
            <motion.div style={{y}} className="h-full bg-black flex justify-center gap-10 items-center p-10">
                {
                    [...Array(5)].map((_, i) => {
                        return <img key={`img_${i}`} className="w-20 h-20" src={`/cake/${i+1}.png`} />
                    })
                } 
            </motion.div>
        </div>
    )
}

const Herpathy = () => {
    return (
           <div className="marquee-inner relative w-full overflow-hidden">
      {/* Background curve */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1440 442"
        width="100%"
        className="marquee-bg-svg overflow-visible"
      >
        <path
          stroke="currentColor"
          strokeWidth={160}
          d="M-71 371.6C126.3 260 593.5 65.8 934.5 80.8c313 13.8 497 136 572 200"
        />
      </svg>

      {/* Text path SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1440 293"
        width="100%"
        className="marquee-text-svg overflow-visible absolute top-0 left-0"
      >
        <path
          id="curve"
          d="M-68 300C173 173 515.5 1 937.2 1 1254.5 1 1468 183.3 1543 246.9"
        />

        <text width="100%" className="transform-[translate3d(0,0,0)]">
          <textPath
            href="#curve"
            startOffset="-45%"
            alignmentBaseline="top"
            className="transform-[translate3d(0,0,0)]"
          >
            It’s a Match(a) · It’s a Match(a) · It’s a Match(a)
          </textPath>
        </text>
      </svg>

      {/* Overlay */}
      <div className="marquee-overlay absolute inset-0 pointer-events-none" />
    </div>
    )
}

export const Section1 = ()=>{
    return (
        <div className="h-[200vh] relative">
            <div className="h-screen sticky   top-0 bg-red-400 w-full"></div>
            <div className="h-screen bg-blue-300 relative w-full"></div>
               </div>
    )
}