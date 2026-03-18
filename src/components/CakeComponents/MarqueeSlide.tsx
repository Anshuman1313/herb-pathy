"use client"
import { useRef } from 'react';
import Slide from './Slide'
import { useScroll } from 'motion/react';

const MarqueeSlide = () => {
     const container = useRef(null);

  const { scrollYProgress } = useScroll({

    target: container,

    offset: ['start end', 'end start']

  })
  return (
    <div className="overflow-hidden h-screen w-full pt-40" ref={container}>

      <Slide direction={'left'} left={"-40%"} progress={scrollYProgress} src="/hero/3.png" />
      <Slide direction={'right'} left={"-25%"} progress={scrollYProgress} src="/hero/20.png" />
      <Slide direction={'left'}  left={"-75%"} progress={scrollYProgress} src="/hero/7.png" />
      </div>
  )
}

export default MarqueeSlide