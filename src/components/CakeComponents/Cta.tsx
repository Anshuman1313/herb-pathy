import { ArrowRight, ArrowUpRight } from 'lucide-react'
import React from 'react'

export const Cta = () => {
  return (
    <div className='h-18 w-63  cursor-pointer flex justify-between px-1 items-center bg-white rounded-full group'>
        <div  className='flex  transform-[scale3d(0,0,0)] origin-left group-hover:transform-[scale3d(1,1,1)]   transition-all ease-in-out-cubic duration-350  justify-center items-center bg-rose-200 rounded-full size-17 shrink-0 '>
          <ArrowRight className='-rotate-45 text-foreground/70  group-hover:rotate-0  transition-transform ease-in-out-cubic duration-250'/>
          </div>

        <div className='  transform-[translate3d(-2.3rem,0,0)]  group-hover:transform-[translate3d(2.5rem,0,0)] transition-transform ease-in-out-cubic w-full  items-center duration-350 text-xl font-medium '>Order Now</div>

        <div className='flex shrink-0   justify-center group-hover:transform-[scale3d(0,0,0)] transition-all ease-in-out-cubic duration-350 origin-right items-center bg-indigo-200 rounded-full size-17 '>
          <ArrowRight className='-rotate-45 text-foreground/70 group-hover:rotate-0 transition-transform ease-in-out-cubic duration-200'/></div>
    </div>

  )
}

export const Cta2 = ()=>{
  return(

  <>
    <div className='h-18 w-65  cursor-pointer flex justify-between px-1 items-center   group'>
        <div  className='flex w-0 shrink-0  transform-[scale3d(0,0,0)] origin-left group-hover:transform-[scale3d(1,1,1)]   transition-all ease-in-out-cubic duration-350  justify-center items-center bg-rose-200 rounded-full size-18 group-hover:w-18 '>
          <ArrowRight className='-rotate-45 text-foreground/70  group-hover:rotate-0  transition-transform ease-in-out-cubic duration-250'/>
          </div>

        <div className='  flex justify-center items-center   transition-transform ease-in-out-cubic w-full bg-white h-full rounded-full   duration-350 text-xl font-medium '> <span>Order Now</span></div>

        <div className='flex shrink-0  justify-center group-hover:transform-[scale3d(0,0,0)] transition-all ease-in-out-cubic duration-350 origin-right group-hover:w-0 items-center bg-indigo-200 rounded-full size-18  '>
          <ArrowRight className='-rotate-45 text-foreground/70 group-hover:rotate-0 transition-transform ease-in-out-cubic duration-200'/></div>
    </div>
    
  
  </>
  )
}

