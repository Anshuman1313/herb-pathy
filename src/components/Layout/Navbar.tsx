"use client"
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import {hover, motion} from 'motion/react'
import { div } from 'motion/react-client'

const Navbar = () => {
    const [hovered, setHovered] = useState<number | null>(null)
  return (
    <div className='absolute h-12 w-full top-5 font-sans flex justify-center items-center'>
        <div className="h-full w-1/2 rounded-full    shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_2px_-1px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.04)] 
    transition-[colors,box-shadow] duration-100
    hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08),0px_1px_2px_-1px_rgba(0,0,0,0.08),0px_2px_4px_0px_rgba(0,0,0,0.06)]
    flex justify-between items-center px-[1.5%]
    ">
   {Array.from({length:4}).map((_,i)=>(
    
    <div key={i}>Nav</div>      
   
   ))}
    
    </div>
      
    </div>
  )
}

export default Navbar
