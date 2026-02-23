import React from 'react'
import { Cta, Cta2 } from './Cta'
import { Hamburger } from 'lucide-react'
import Hamburger1 from '../MotionDev/Hamburger'
import { Cta3 } from './ResponsiveCta'
import Nav1 from '../MotionDev/Nav1'
import BakerySvg from './BakerySvg'
import MenuDots from './MenuDots'

const Hero = () => {
    return (
        <div className='h-screen bg-[#ede2d5] w-full '>


            <div className="h-full w-full p-3 ">

                <div className="hero-bg relative size-full rounded-2xl overflow-clip">
                    <div className="w-full absolute  z-50 bg-heading-cake px-8  py-3  flex gap-40  justify-between  items-center  text-background ">
                        <div className='w-full flex items-center gap-2 font-milkshake text-3xl'>
                            Dream Slice Studio
                        </div>
                        <h1 className='font-cooper shrink-0 text-center  text-2xl max-md:text-4xl text-background '>Menu</h1>
                        <div className='w-full text-white  flex justify-end'>ORDER</div>

                    </div>
                    <div className="absolute top-0 h-full w-full   z-10">

                        <div className='h-full    flex-col justify-start flex px-6 pt-30   w-full'>
                            <div className='flex flex-col '>
                                <h1 className='  font-bold w-[60%]  text-8xl font-cooper text-background'>Baked with<br /> Love, Crafted<br /> for Dreams</h1>
                                <div className='font-medium text-background font-cooper  flex flex-col justify-end text-4xl'>
                                    <span>Every slice made </span>
                                    <span>fresh to turn  </span>
                                    <span>your sweetest moments </span>
                                    <span>into memories. </span>
                                    <div className='font-cooper text-heading-cake font-semibold py-2'>
                                        <Cta3
                                            variant="expand"
                                            containerClass="h-18 w-64 p-1  "
                                            textClass="text-xl bg-background font-semibold font-cooper  font-medium  h-full"
                                            circleClass="size-16 "
                                            leftcircle="bg-blue-200"
                                            rightcircle="bg-rose-400"
                                            lefthoverSize="group-hover:w-16 "
                                            iconClass="size-7 stroke-[1.4px]  text-foreground/80 "
                                        />
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
                        className='w-full h-[130%] pt-14 object-cover z-0 brightness-80 '>

                    </video>


                </div>
            </div>




        </div>
    )
}

export default Hero