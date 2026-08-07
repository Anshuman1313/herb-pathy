"use client"

import Hero2 from "@/components/CakeComponents/Hero2";

import Nav1Cake from "@/components/Landing/1Nav";
import { BakeryCarousel } from "@/components/Landing/BakeryCarasaul";
import BakeryTestimonials from "@/components/Landing/BakeryTestimonials";

import Footer from "@/components/Landing/Footer";

import HorizontalScrollBasic from "@/components/Landing/HorizontalScroll";
import HorizontalScrollMobile from "@/components/Landing/HorizontalScrollMobile";

import SliceSection from "@/components/Landing/SliceSection";
import StickyGrid from "@/components/Landing/StickyGrid";
import TestimonialsGrid from "@/components/Landing/TestimonialGrid";
import LogoLoader from "@/components/LogoLoader";

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
    <LogoLoader/>
      <Nav1Cake/>
      <Hero2 />
      <StickyGrid/>
      <div className="h-fit w-full grid place-items-center">
</div>
<div className="max-md:hidden">

           <BakeryCarousel/>
      <SliceSection/>
</div>
    <div className="max-md:hidden">
      
      <HorizontalScrollBasic/>
    </div>
    <div className="md:hidden">
      <HorizontalScrollMobile/>
    </div>
      <div className="max-md:hidden">

      <TestimonialsGrid/>
      </div>
      <div className="md:hidden">
        <BakeryTestimonials/>
      </div>

      <Footer/>

    </>
  );
}
