"use client"
import MovingPhotoShowcase from "@/components/MotionDev/MovingPhotoShowcase";
import { useEffect, useRef } from "react";

export default function Cake() {
  useEffect( () => {

    (

      async () => {

          const LocomotiveScroll = (await import('locomotive-scroll')).default

          const locomotiveScroll = new LocomotiveScroll();
          
          
        }
        
    )()
    
  }, [])

  

   
    
    return (
        <>
        


            <div className="w-full min-h-screen overflow-y-hidden  bg-gray-100 p-5">
                <a href="#gojo" data-scroll-to  >Gojo</a>
                <a href="#sukuna" data-scroll-to data-scroll-to-duration = "2" >Sukuna</a>
                <MovingPhotoShowcase />
            </div>
            <div className="h-[200vh] w-full bg-gray-100 ">
                <h1 id="gojo" className="text-center">Gojo Satoru</h1>
            </div>
            <div className="h-[200vh] w-full bg-gray-100 ">
                <h1 id="sukuna" className="text-center">Sukuna King</h1>
            </div>
        </>
    )
}