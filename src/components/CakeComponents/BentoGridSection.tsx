"use client"
import Image from 'next/image'
import ImageBento from '../MotionDev/ImageBento'

const BentoGridSection = () => {
  return (
    <div className="flex flex-col gap-20">

      {/* Heading Section */}
      <div className="grid place-items-center w-full pt-20 relative">
            <div className="absolute top-26 left-40 h-60  w-60">

            <img src={`/mixer.png`} alt='mixer'  className='object-contain h-full w-full' />
            </div>
            <div className="absolute right-45 top-26 w-60 h-60">

            <img src={`/deco.png`} alt='mixer'  className=' h-full w-full' />
            </div>
        <div className="relative">
          
          <div className="heading flex flex-col justify-center items-center gap-8 z-10 relative">

            {/* Label */}
            <div className="banner">
              <span className="text-2xl text-center font-mono tracking-tighter space-x-1 font-medium bg-blue-200 px-2 py-1">
                <span>HANDCRAFTED</span> <span>DESIGNS</span>
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-7xl text-heading-cake font-roslindale text-center leading-tight">
              Where Every Cake <br /> Tells a Story
            </h1>

            {/* Subheading */}
            <p className="max-w-xl text-lg text-center text-neutral-500 leading-relaxed">
              Each creation is thoughtfully designed to reflect your celebration, style, and taste — 
              from elegant weddings to playful themed cakes.
            </p>

          </div>

        </div>
      </div>

      {/* Bento Grid */}
      <div className='relative'>

      <ImageBento />
      </div>

    </div>
  )
}

export default BentoGridSection