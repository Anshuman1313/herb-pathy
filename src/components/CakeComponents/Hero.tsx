import React from 'react'

const Hero = () => {
    return (
        <div className='h-screen bg-gray-100 w-full '>
            <div className="h-full w-full p-3 "> 
                <div className="hero-bg relative size-full rounded-2xl overflow-clip">
                    <div className="absolute top-0 h-full w-full flex flex-col ">
                        <div className="w-full h-10 flex justify-center  text-background mt-4">
                        <h1 className='font-milkshake  text-6xl max-md:text-4xl  '>DreamSliceStudio</h1>
                        </div>
                        
                        <div className='h-full flex  p-2  w-full'>

                            <h1 className='h-60 w-[60%] text-8xl font-cooper '>Baked with Love, Crafted for Dreams</h1>
                            <h1></h1>
                        </div>
                    </div>

                 <video src="/cake/CCL2.mp4" 
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className='size-full object-cover'>

                </video>
                
                </div>
                </div>
            
          


        </div>
    )
}

export default Hero