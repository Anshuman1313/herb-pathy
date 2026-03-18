"use client"

import { useTransform,motion, MotionValue } from 'motion/react'
import Image from 'next/image'
type SlideProps = {
    left?: string,
    src: string,
    text?: string,
    direction ?: string,
    progress : MotionValue<number>
}
const Slide = ( props: SlideProps) => {
    const direction = props.direction == 'left' ? -1 : 1;

  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  return (
       <motion.div style={{left: props.left,x: translateX,}} className="relative flex  whitespace-nowrap space-y-5">

      <Phrase src={props.src} text='Dream Slice Studio'/>

      <Phrase src={props.src} text='Dream Slice Studio'/>

      <Phrase src={props.src} text='Dream Slice Studio'/>

      <Phrase src={props.src} text='Dream Slice Studio'/>
    </motion.div>


  )
}

export default Slide
const Phrase = ({src,text}:{src:string,text:string}) => {

  return (

    <div className={'px-5  flex gap-5'}>

    {/* <span className="relative h-[7.5vw] hidden aspect-4/2 rounded-full overflow-hidden">

        <Image style={{objectFit: "cover"}} src={src} alt="image" fill/>

    </span> */}
    <div className='text-8xl text-heading-cake font-roslindale pt-5'>{text}</div>
    <div className='relative size-35 rounded-full overflow-clip'> 
        <Image style={{objectFit: "cover"}} src={src} alt="image" fill/>


    </div>



    </div>

  )

}