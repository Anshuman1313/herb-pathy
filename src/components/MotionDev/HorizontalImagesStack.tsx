"use client"
import  { useRef, useState } from 'react'
import {motion} from "motion/react"
import clsx from 'clsx'
  
type ITEMS = {
    title: string,
    img ?: string,
}
type HorizontalImagesStackProps = {
  Items: ITEMS[]
}
const HorizontalImagesStack = ({Items} : HorizontalImagesStackProps) => {
    const [activeindex,setActiveIndex] = useState<number | null>(0)
 
const colorred = [
  "bg-red-100",
  "bg-red-200",
  "bg-red-300",
  "bg-red-400",
  "bg-red-500",
  "bg-red-600",
  "bg-red-700",
  "bg-red-800",
  "bg-red-900",
];

const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
const lastHovered = useRef<number>(0)
const handleMouseEnter = (i: number) => {
  lastHovered.current = i
  if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
  hoverTimeout.current = setTimeout(() => setActiveIndex(i), 100)
}

const handleMouseLeave = () => {
  if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
  hoverTimeout.current = setTimeout(() => setActiveIndex(lastHovered.current), 100)
}
const COLLAPSED_WIDTH = 80
const EXPANDED_WIDTH = 400
const totalWidth = COLLAPSED_WIDTH * Items.length + (EXPANDED_WIDTH - COLLAPSED_WIDTH)

  return (
    <>
        <motion.div  className={clsx("h-100  flex justify-center  items-center will-change-transform ")}
  // onMouseLeave={() => setActiveIndex(null)} // ← collapse on leave
  style={{ width: totalWidth }}  // ← fixed, never changes
       onMouseLeave={handleMouseLeave}
        >

        {Items.map((card,i)=>(
             <motion.div key={card.title}   className={clsx(' relative border-x overflow-clip h-130  ', )}
             initial = {{ width: COLLAPSED_WIDTH}}
             animate= {{ width:  activeindex === i ? EXPANDED_WIDTH : COLLAPSED_WIDTH}}
             transition={{
              type: "spring",
              bounce: 0,
              duration: 0.1,
              mass: 0.3,
              damping: 12
             }}
            //  onClick={()=>{
            //    if(activeindex == i){
            //     setActiveIndex(null)
            //    }
            //    else {
            //     setActiveIndex(i)
            //    }

            // }}
              // onMouseEnter={() => setActiveIndex(i)}   // ← expand on hover
  // onMouseLeave={() => setActiveIndex(null)} // ← collapse on leave
         onMouseEnter={() => handleMouseEnter(i)}
             > 
             <div className={clsx("absolute origin-bottom-left px-4      bottom-0  left-22  h-20 w-130 text-2xl -rotate-90"  )}
              > <span className='border-b border-black'>{card.title}</span> </div>
             <div className={` h-full  p-1  `}>

                <div className='h-full w-full  pl-18'>
                   <div className={`size-full ${colorred[i]}`}> 
                  <img src={`/menu-cakes/${card.img}.avif`} className='size-full object-cover' alt={card.title} />
                  </div>
                  
                  </div>

             </div>

             </motion.div>
        ))}
      
        </motion.div>
        {/* <div className='absolute bottom-25   flex justify-center items-center  gap-1'> <StatusIcon variant="wrong"  size="sm" /> <span className='pb-[2px] font-medium text-neutral-800 tracking-tighter'> Without will change</span>  </div> */}
        {/* <div className='absolute bottom-25   flex justify-center items-center  gap-1'> <StatusIcon variant="correct"  size="sm" /> <span className='pb-[2px] font-medium text-neutral-800 tracking-tighter'> With will change</span>  </div> */}
      

    </>
  )
}

export default HorizontalImagesStack