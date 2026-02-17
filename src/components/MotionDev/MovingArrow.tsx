import React from 'react'

const MovingArrow = ({className}: {className?: string}) => {
  return (
    <div className={`${className} `}>
        <div className='  group  size-5 overflow-hidden '>
            <div className="size-full  relative group-hover:translate-x-4 group-hover:-translate-y-5 delay-100 
            transition-all duration-150 ease-[cubic-bezier(0.215,0.61,0.355,1)]
            ">

        <svg className='size-4 fill-background absolute top-0 right-0  '>
            <path d="M1.271 10.495.505 9.73l8.638-8.646H1.417V0H11v9.583H9.917V1.857z"/>
        </svg>
        <svg className='size-4 fill-background absolute right-4 top-5'>
            <path d="M1.271 10.495.505 9.73l8.638-8.646H1.417V0H11v9.583H9.917V1.857z"/>
        </svg>
            </div>
        </div>

    </div>
  )
}

export default MovingArrow