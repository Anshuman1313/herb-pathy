"use client"
import Hero2 from "@/components/CakeComponents/Hero2";
import Nav from "@/components/CakeComponents/Nav";
import OccasionSection from "@/components/CakeComponents/OccasionSection";
import UpwardStroke from "@/components/CakeComponents/OccasionSectionSvg/UpwardStroke";
import { RadialGradient3 } from "@/components/Landing/RadialGradient";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {

    (

      async () => {

        const LocomotiveScroll = (await import('locomotive-scroll')).default

        const locomotiveScroll = new LocomotiveScroll();
      }
    )()

  }, [])
  return (
    <>
      <Nav />
      <RadialGradient3 />
      <Hero2 />
      <OccasionSection/>     
    </>
  );
}
