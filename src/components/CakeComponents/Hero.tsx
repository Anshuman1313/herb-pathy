import React from 'react'
import { Cta, Cta2 } from './Cta'
import { Hamburger } from 'lucide-react'
import Hamburger1 from '../MotionDev/Hamburger'

const Hero = () => {
    return (
        <div className='h-screen bg-gray-100 w-full '>
            <div className="w-full z-50 mt-4 px-8 absolute  flex gap-40 justify-between  items-center  text-background ">
                <div className='w-full flex items-center gap-2'>
                     <span className='size-17 bg-background rounded-full flex justify-center items-center'> <Hamburger1/></span>
                     <span className='text-2xl '>Menu</span>
                     </div>
                <h1 className='font-milkshake shrink-0 text-center  text-6xl max-md:text-4xl text-heading-cake '>Dream Slice Studio</h1>
                <div className='w-full text-heading-cake flex justify-end'><Cta2 /></div>

            </div>

            <div className="h-full w-full p-3 ">
                <div className="hero-bg relative size-full rounded-2xl overflow-clip">
                    <div className="absolute top-0 h-full w-full flex flex-col z-10">

                        <div className='h-full    flex-col justify-end flex px-4 py-3   w-full'>
                            <div className='flex gap-30'>
                                <h1 className='  font-bold w-[60%]  text-8xl font-cooper text-white'>Baked with<br /> Love,<br /> Crafted for<br /> Dreams</h1>
                                <div className='font-semibold text-background font-cooper  flex flex-col justify-center text-4xl'>
                                    <span>Every slice made fresh</span>
                                    <span>to turn your sweetest </span>
                                    <span>moments into memories.</span>
                                    <div className='font-cooper text-heading-cake font-semibold py-2'>
                                        <Cta />
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <div><Cta /></div>
                        <div><Cta2 /></div> */}
                    </div>

                    <video src="/cake/CCL2.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className='size-full object-cover z-0 brightness-80'>

                    </video>

                </div>
            </div>




        </div>
    )
}

export default Hero