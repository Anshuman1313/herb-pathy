"use client"
/** @paper-design/shaders-react@0.0.67 */
import { StaticRadialGradient } from '@paper-design/shaders-react';
import { useState } from 'react';

/**
 * Code exported from Paper
 * https://app.paper.design/file/01K7HFC2X2NCTVRC0BA3BFM3GV?node=01KBCCSQ72GJW2KBQZFEQFSFVC
 * on Dec 1, 2025 at 1:23 PM.
 */
export  function RadialGradient () {
    const [radius, setRadius] = useState<number>(1.29)

    return (

        <StaticRadialGradient scale={1.32} offsetX={0} offsetY={0} radius={radius} focalDistance={0.56} focalAngle={360} falloff={0.24} mixing={0.74} distortionShift={0} distortionFreq={12} grainMixer={1} grainOverlay={0} colors={['#DFE6DA', '#CBD5C0', '#9CAF88', '#819171', '#758467']} colorBack="#00000000" className="w-full max-sm:hidden  md:h-[1200px] lg:h-[1600px] absolute z-[-1] bg-[#E7E4E4] mask-[linear-gradient(to_top,transparent,black_50%)] ] "
           
        />
    )

}
