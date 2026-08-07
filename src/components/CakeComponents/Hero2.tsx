"use client"
import Link from 'next/link'
import { CaramelButton } from './Cta'
import FloatingBackgroundImages from './FloadtingBgImages'


const Hero2 = () => {
  return (
    <>
    {/* bg-[linear-gradient(135deg,#eacbaa80,#ebe3d7)]  */}
    
      <div className="min-h-screen  w-full overflow-hidden ">
        <div className=' w-full min-h-screen flex justify-center items-center  '>
          {/* <RadialGradient2/> */}
          <FloatingBackgroundImages />
          <div className='flex flex-col justify-center items-center  pt-30 z-10'>
            <div className='heading max-lg:text-7xl text-9xl text-center font-roslindale text-heading-cake'>

              <h1>Every Bite Feels Like</h1>
              <h1>Home</h1>
              {/* <h1>h<span className='text-[10rem]'>O</span>me</h1> */}
            </div>
            <div className="sub-heading  text-center text-[#483128] max-md:text-base max-md:px-6 max-md:font-medium py-10 space-y-2 text-3xl font-normal font-sans">
              <h3>Fresh bread, custom celebration cakes, and sweet treats</h3>
              <h3>  baked daily with premium ingredients.</h3>
            </div>
            <div className="cta flex justify-center items-center text-xl font-medium gap-20 max-md:gap-10 text-heading-cake">
              <Link href={"/contact"} className='relative z-10 cursor-pointer' >
              
              <CaramelButton children="Order Your Dream Cake" />
              </Link>
              <Link href={"/gallery"}>
              
              <div className='border-2  border-heading-cake/80   rounded-full max-md:px-2 max-md:py-1 max-md:text-base px-6 py-4'>View Gallery</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero2