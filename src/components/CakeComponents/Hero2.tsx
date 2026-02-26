"use client"
import { GrainGradient } from '@paper-design/shaders-react'
import { CaramelButton } from './Cta'
import FloatingBackgroundImages from './FloadtingBgImages'
import { RadialGradient2 } from '../Landing/RadialGradient'


const Hero2 = () => {
  return (
    <>
    {/* bg-[linear-gradient(135deg,#eacbaa80,#ebe3d7)]  */}
    
      <div className="min-h-dvh  w-full overflow-hidden ">
        <div className=' w-full min-h-dvh flex justify-center items-center  '>
          <RadialGradient2/>
          <FloatingBackgroundImages />
          <div className='flex flex-col justify-center items-center  pt-30 z-10'>
            <div className='heading text-9xl text-center font-roslindale text-heading-cake'>

              <h1>Every Bite Feels Like</h1>
              <h1>Home</h1>
              {/* <h1>h<span className='text-[10rem]'>O</span>me</h1> */}
            </div>
            <div className="sub-heading text-center text-subheading-cake py-10 space-y-2 text-3xl font-normal">
              <h3>Fresh bread, custom celebration cakes, and sweet treats</h3>
              <h3>  baked daily with premium ingredients.</h3>
            </div>
            <div className="cta flex justify-center items-center text-xl font-medium gap-20 text-heading-cake">
              <CaramelButton children="Order Your Dream Cake" />

              <div className='border-2  border-heading-cake/80   rounded-full px-6 py-4'>View Gallery</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero2