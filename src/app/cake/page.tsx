"use client"
import MovingPhotoShowcase from "@/components/MotionDev/MovingPhotoShowcase";
import { useEffect, useRef } from "react";
import { motion, useScroll } from "motion/react"
import styles from '@/styles/Home.module.css';
import { MoveUp } from "lucide-react";
import Image from "next/image";
import Footer, { Section1 } from "@/components/MotionDev/Footer"
import Nav1 from "@/components/MotionDev/Nav1";
import Hero from "@/components/CakeComponents/Hero";
import { Cta3 } from "@/components/CakeComponents/ResponsiveCta";
import MenuDots from "@/components/CakeComponents/MenuDots";
import { GlowCards } from "@/components/CakeComponents/GlowCards";
import Hero2 from "@/components/CakeComponents/Hero2";
import { CaramelButton, Cta4, CtaCake, CtaGolden } from "@/components/CakeComponents/Cta";
import Nav from "@/components/CakeComponents/Nav";
import { RadialGradient, RadialGradient2 } from "@/components/Landing/RadialGradient";
import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/components/Landing/HeroSection";
import PhotoGallery from "@/components/MotionDev/PhotoGallery";
import PhotoGallery2 from "@/components/MotionDev/PhotoGallery2";
import BentoLayout from "@/components/MotionDev/BentoLayout";
import SharedLayout from "@/components/MotionDev/SharedLayout";
import ImageBento from "@/components/MotionDev/ImageBento";
import BoxeLayout from "@/components/MotionDev/BoxeLayout";
import RevealText from "@/components/ClipPathText";
import Preview from "@/components/Landing/InfiniteGrid";
import Osmos from "@/components/MotionDev/Osmos";
import OsmosImage from "@/components/MotionDev/OsmosImage";
import RadialMarqueeDebugger from "@/components/MotionDev/RadialMarqueeDebugger";
import HorizontalImagesStack from "@/components/MotionDev/HorizontalImagesStack";
import Practice9 from "@/components/Practice9";
import LogoLoader from "@/components/LogoLoader";
import EyesLogo from "@/components/EyesLogo";

export default function Cake() {
    // useEffect(() => {

    //     (

    //         async () => {

    //             const LocomotiveScroll = (await import('locomotive-scroll')).default

    //             const locomotiveScroll = new LocomotiveScroll();


    //         }

    //     )()

    // }, [])
    // const ConstraintRef1 = useRef(null)
    // const cakeImages = ["cake.png", "cupcake2.png", "mail-server.png", "8.png", "18.png"]

    return (
        <>
        <div className="h-screen w-full grid place-items-center">
            <EyesLogo/>
        </div>
        {/* <Practice9/> */}
        {/* <div>Cake</div> */}
       {/* <HorizontalImagesStack/> */}
            
        {/* <OsmosImage/>
            
      <div className="h-screen w-full bg-gray-100"></div>
            <RadialMarqueeDebugger/> */}
        {/* <Osmos/> */}
        {/* <Preview/> */}
            {/* <div id="yuji relative"></div> */}
            {/* <div className="h-screen w-full grid place-items-center">
                    <RevealText
                                text="Fresh Cakes"
                                textClassName="block"
                                overlayClassName="bg-[#8B4513]"
                                duration={1.5}
                                wrapperClassName="pr-3 "
                              />
            </div> */}
            {/* <div className="relative inline-block"
            >
                <RevealText text="hi heelo" duration={1} key={2} />
                <motion.span
                    className="block whitespace-nowrap relative  text-black"
                    initial={{
                        clipPath: "inset(0% 100% 0% 0%)",
                    }}
                    animate={{
                        clipPath: "inset(0% 0% 0% 0%)",
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                >
                    Your Frontend team.
                </motion.span>

                <motion.div
                    className="absolute inset-0 bg-red-400"
                    initial={{ x: "-100%", scaleX: 1 }}
                    animate={{
                        x: ["-100%", "0%","0%"],
                        scaleX: [ 1,1, 0],
                    }}
                    style={{ originX: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                      
                    }}
                />
            </div> */}
            {/* <div className="h-screen  relative w-full grid place-items-center">
                <BoxeLayout />
            </div> */}
            {/* <div className="h-screen relative w-full grid place-items-center">
                <ImageBento />
            </div> */}
            {/* <div className="h-screen relative w-full grid place-items-center">
                <SharedLayout/>
            </div> */}
            {/* <div className="h-screen w-full"></div> */}
            {/* <div className="h-screen w-full grid place-items-center relative ">
                <BentoLayout/>
            </div> */}
            {/* <div className="h-screen w-full flex items-center justify-center overflow-hidden">
               
                    <PhotoGallery2 />
               
            </div> */}
            {/* <PhotoGallery/> */}
            {/* <RadialGradient/> */}
            {/* <RadialGradient2/> */}
            {/* There is move up button */}
            {/* <a data-scroll-to data-scroll-to-duration="2.5" href="#yuji" className="rounded-full bg-blue-400 size-10  text-gray-100 fixed  bottom-10 z-100 right-10 cursor-pointer flex justify-center items-center"><MoveUp />

            </a> */}


            {/* <Nav />
            <Hero2 /> */}


            {/* <Hero /> */}
            {/* <Nav1/> */}


            {/* <div className="h-screen bg-background w-full  flex gap-20 justify-center items-center">
                <MenuDots />
                <CtaGolden />
                <CtaCake />
                <CaramelButton children="Order Your Dream Cake" />
                <div className=" hidden flex-col justify-center items-center">


                    <Cta3
                        variant="expand"
                        containerClass="h-18 w-53 border  p-1 bg-gray-100 inset-shadow-sm border-1 shadow-sm"
                        textClass="text-xl font-cooper bg-background shadow font-semibold  h-full"
                        circleClass="size-16 shadow"
                        leftcircle="bg-blue-300"
                        rightcircle="bg-rose-300"
                        lefthoverSize="group-hover:w-16 "
                        iconClass="size-7 text-foreground/80"
                    />
                    <span></span>
                </div>
                <div>

                    <Cta3
                        variant="expand"
                        containerClass="h-16 w-53 bg-transparent"
                        textClass="text-xl font-cooper bg-gray-100 font-semibold  h-full "
                        circleClass="size-16 "
                        leftcircle="bg-blue-300"
                        rightcircle="bg-rose-300"
                        lefthoverSize="group-hover:w-16"
                        iconClass="size-7 text-foreground/80"
                    />
                </div>
                <div className="bg-foreground">

                </div>
            </div> */}
            {/* <div className="h-screen w-full p-5">
                <div className="h-full w-full bg-background rounded-xl flex flex-col justify-center items-center">
                    <div className="flex gap-5">
                        {cakeImages.map((url, i) => (

                            <Image src={`/cake/${url}`} key={i} alt="cupcake" width={120} height={120} className="bg-white" />
                        )

                        )}
                    </div>
                    <h1 className="font-mono text-pink-600 text- font-medium"> DESIGN</h1>
                    <h1 className="font-cooper text-[38px] text-[#292524] font-extralight">
                        Cake Page Heading
                    </h1>
                    <h1 className="font-geist font-normal text-[18px] text-[#292524] ">
                        Cake Page Subheading we are here to make the cake website
                    </h1>
                </div>
            </div>
            <Cta4 />
            <RadialGradient />
            <div className=" relative font-sans ">
                <Navbar />
                <div className="h-screen w-full pt-20 px-[2%]">
                    <HeroSection />

                </div>
                <div className="h-screen w-full  px-[20%] mt-20">
                    <div className="h-full w-full rounded-xl bg-blue-400"></div>
                </div>
                <div className="h-screen w-full  px-[2%]  mt-20 ">
                    <div className="h-full w-full rounded-xl bg-blue-400"></div>
                </div>

            </div>
            <Section1 />
            <Footer />
            <div className="h-screen bg-background rounded-xl m-5 flex flex-col justify-center items-center">
                <div className="flex gap-5 flex-wrap">
                    {Array.from({ length: 16 }).map((url, i) => (

                        <Image src={`/cake/${i + 1}.png`} key={i} alt="cupcake" width={120} height={120} />
                    )

                    )}
                </div>

                <h1 className="font-cooper text-[38px] text-[#292524] font-extralight">
                    Cake Page Heading
                </h1>
                <h1 className="font-geist font-normal text-[18px] text-[#292524] ">
                    Cake Page Subheading we are here to make the cake website
                </h1>
            </div> */}




            {/* There is this images array */}
            {/* <div className="w-full min-h-screen   bg-gray-100 p-5 flex flex-col gap-5 items-center   relative">

                {Array.from({ length: 22 }).map((_, i) => (

                    <div key={i} className={`h-160 w-100 bg-white [corner-shape:squircle_squircle_squircle_squircle] rounded-3xl overflow-clip ${i % 2 != 0 ? `ml-[50%]` : `mr-[50%]`}`}>

                        <div data-scroll data-scroll-speed="-0.2" className="relative size-[150%] top-[-20%] let-[-20%]">

                            <Image src={`/slidershowCathy/slider${i + 1}.jpg`} alt={`slider${i + 1}`} fill className="filter-[brightness(0.8)]" />
                        </div>
                    </div>
                ))}


            </div> */}
            {/* Gojo Sukuna anchor tags  */}
            {/* <div className="w-full min-h-screen overflow-y-hidden  bg-gray-100 p-5">
                <a href="#gojo" data-scroll-to  >Gojo</a>
                <a href="#sukuna" data-scroll-to data-scroll-to-duration="3" >Sukuna</a>
                <div className="flex flex-col gap-20 justify-center">

                    <motion.div className="size-20 bg-blue-400" data-scroll
                        animate={{ x: 400 }}
                        transition={{
                            type: "spring",
                            duration: 1, bounce: 0.1,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 1
                        }}
                    >1</motion.div>

                </div>
                <MovingPhotoShowcase />
            </div> */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{ x: 400 }}
                transition={{
                    ease: [.455, .03, .515, .955],
                    repeat: Infinity,
                    duration: 1,
                    repeatType: "reverse",
                    repeatDelay: 1
                }}
                className="size-20 bg-blue-400">2</motion.div>
            <div className="h-[200vh] w-full bg-gray-100 ">
                <h1 id="gojo" className="text-center" >Gojo Satoru</h1>
            </div>
            <div className="h-[200vh] w-full bg-gray-100 " data-scroll-container>
                <h1 id="sukuna" className="text-center" data-scroll-section>Sukuna King</h1>
            </div> */}
        </>
    )
}