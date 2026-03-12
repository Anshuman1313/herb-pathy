import { div } from 'motion/react-client'
import Image from 'next/image'
import React from 'react'

type OccasionCardProps = {
    image: string;
    heading: string;
    styles: string[];
    tag?: string;
};

const OccasionCard = ({ image, heading, styles, tag }: OccasionCardProps) => {
    return (
        <div className='  flex flex-col cursor-pointer' >
            <div className='aspect-4/5  bg-blue-400 rounded-4xl overflow-hidden  relative' >
                <div className='h-full w-full hover:scale-[1.05] transition-transform duration-350 ease-[cubic-bezier(0.45,0.05,0.55,0.95);]'>
                    <div data-scroll data-scroll-speed="-0.1" className="relative h-[130%]   top-[-20%] ">
                        <Image
                            src={image}
                            alt={heading}
                            fill
                            className="filter-[brightness(0.9)] object-cover"
                        />
                    </div>
                </div>
                {/* {tag && (
                    <div className="absolute top-5 left-8 px-4 rounded-full py-1 text-xl font-cooper font-bold  bg-blue-200 ">
                        {tag}
                    </div>
                )} */}
            </div>
            <div>

                <h1 className='font-roslindale text-heading-cake max-md:text-2xl text-5xl pt-9 pb-2 '>{heading}</h1>
                <div className='w-full h-px bg-heading-cake '></div>
                <div className='flex pt-4 gap-px'>
                    {styles.map((price, i) => (
                        <div key={i} className="rounded-full  border-heading-cake border-2 font-medium max-md:hidden px-6 py-1">
                            {price}
                        </div>
                    ))}
                </div >
            </div>
        </div>
    )
}

export default OccasionCard

export const occasions = [
  {
    image: "/occasion/bd1.jpg",
    heading: "Birthday Cakes",
    tag: "BIRTHDAY",
    styles: ["Theme", "Photo", "Cartoon"]
  },
  {
    image: "/occasion/an1.jpg",
    heading: "Anniversary Cakes",
    tag: "ANNIVERSARY",
    styles: ["Heart", "Floral", "Luxury"]
  },
  {
    image: "/occasion/wd1.jpeg",
    heading: "Wedding Cakes",
    tag: "WEDDING",
    styles: ["Tiered", "Floral", "Minimal"]
  },
  {
    image: "/occasion/cu1.jpeg",
    heading: "Custom Cakes",
    tag: "CUSTOM",
    styles: ["Photo", "Theme", "Fondant"]
  },
  {
    image: "/occasion/lx1.jpeg",
    heading: "Luxury Cakes",
    tag: "LUXURY",
    styles: ["Rotating", "Levitation", "Butterfly"]
  },
  {
    image: "/occasion/bt1.jpg",
    heading: "Bento Cakes",
    tag: "BENTO",
    styles: ["Mini", "Cute", "Message"]
  },
//   {
//     image: "/occasion/cp2.jpg",
//     heading: "Cupcakes",
//     tag: "CUPCAKES",
//     styles: ["Box of 6", "Box of 12", "Custom"]
//   }
];