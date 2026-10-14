"use client"

import { Footer } from "@/components/corporateGifting/dream-slice-landing (1)"
import NaturalSelection1 from "@/components/corporateGifting/menu-component-with-images"
import NaturalSelection from "@/components/corporateGifting/NaturalSelection"
import Nav2Cake from "@/components/Landing/2Nav"
import { motion } from 'motion/react';

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
            <Nav2Cake />
            <div className="relative h-120   w-full  overflow-hidden  ">
                <div className="absolute font-crimson pt-20 top-1/4 left-1/2 w-[50%]  text-5xl max-md:text-3xl max-md:w-[70%]  text-center text-heading-cake  -translate-x-1/2 ">
                    Freshly baked with premium ingredients and balanced sweetness, our cakes bring comfort, flavor, and a homemade touch in every slice.
                    {/* <TextReveal>Magic UI will change the way you design.</TextReveal> */}
                </div>
            </div>
            <NaturalSelection1 />
                  <div className="relative z-10  py-14 px-6 text-center ">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-crimson text-heading-cake text-3xl md:text-4xl italic mb-2">
              Order a slice of happiness
            </p>
            <p className="font-crimson text-rose-400 text-sm tracking-widest uppercase mb-6">
              📍 Sector 23C, Chandigarh &nbsp;·&nbsp; 📸 @dreamslicestudio
            </p>
            {/* Spring press — Emil's pattern: whileTap with spring transition */}
            <motion.a
              href="https://instagram.com/dreamslicestudio"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="inline-block bg-[#5a2d2d] text-white font-crimson text-sm tracking-widest uppercase px-10 py-4 rounded-full shadow-lg shadow-rose-900/20 hover:bg-rose-900 transition-colors duration-200"
            >
              Order Now
            </motion.a>
          </motion.div>
        </div>
            <Footer />
            {/* Cake */}
            {/* <HorizontalScrollMobile/> */}
            {/* <Testing/> */}

        </>
    )
}