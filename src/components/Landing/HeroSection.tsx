import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="h-full w-full  text-6xl  flex flex-col ">
      <div className="flex-[0.5] flex flex-col   justify-center items-center ">
         {/* <Image
      src="/Herb_Health_logo.jpg"
      width={300}
      height={500}
      alt="Picture of the author"
    />
    <div className='text-base '>Find everything about medicines, diseases, and herbs — instantly.</div> */}
        </div>
      <div className="flex-[0.5]   px-[15%] justify-center ">
        {/* <div className="w-full h-full  bg-neutral-50 rounded-xl">
          Searchbar
        </div> */}
      </div>
    </div>

  )
}

export default HeroSection
