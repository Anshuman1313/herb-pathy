"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "../ui/card"

const products = [
  {
    title: "Valentine's Day Special",
    image:
      "/newtheme/valentineday.jpg",
  },
  
  {
      title: "Dry Cakes",
      image:
      "/newtheme/drycake.jpg",
    },
 {
    title: "Cheesecakes",
    image: "/newtheme/cheesecakeblueberry.jpg",
  },
  {
    title: "Chocolate Cakes",
    image: "/newtheme/truffle.jpg",
  },
]

export function ProductCarousel() {
  return (
    <section className="w-full bg-gray-100 py-14 px-4 md:px-12">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-neutral-800 mb-10">
        Our Products
      </h2>

      <Carousel
        opts={{ align: "start" }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {products.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-2 basis-[80%] sm:basis-1/2 lg:basis-1/3"
            >
              <Card className="overflow-hidden rounded-2xl border-none shadow-sm hover:shadow-md transition">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[260px] w-full object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="py-4 text-center">
                    <p className="text-sm md:text-lg md:font-semibold text-neutral-700">
                      {item.title}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </section>
  )
}