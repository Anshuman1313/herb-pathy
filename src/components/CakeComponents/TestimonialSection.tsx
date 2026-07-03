"use client"

import TestimonialsWireframe from "./TestimonialWirefram"

const TestimonialSection = () => {
  return (
    <>
      <div className="flex flex-col gap-20">


        <div className="grid place-items-center  w-full pt-20 ">

          <div className='  relative '>
            <div className="heading flex flex-col justify-center items-center gap-10 z-10 relative ">
              <div className="banner ">

                <span className="text-2xl  text-center font-mono tracking-tighter  space-x-1 font-medium bg-blue-200 px-2 py-1 ">
                  <span> CELEBRATED </span> <span>BY</span> <span>MANY</span>

                </span>
              </div>


              <h1 className="text-7xl text-heading-cake font-roslindale text-center">What Our Clients  <br />   Say About Us</h1>
            </div>
          </div>
        </div>
        <TestimonialsWireframe />
      </div>
    </>

  )
}

export default TestimonialSection