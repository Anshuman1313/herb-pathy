import React from 'react'

const MenuHero = () => {
  return (
    <div className='w-full h-screen min-h-120'>
         <div className="absolute size-full  grid place-items-center">
          {/* <div className="absolute z-20 h-px w-full bg-blue-400 top-1/2 translate-y-1/2"></div>
          <div className="absolute z-20 w-px h-full bg-blue-400 left-1/2 translate-x-1/2"></div> */}

        <img className="size-130" src={"/circle-bars.svg"}/>

        <div>heading</div>
        </div>

    </div>
  )
}

export default MenuHero