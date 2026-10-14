import { BakeryProductSection, Product } from '@/components/corporateGifting/BakeryProductCards'
import { Footer } from '@/components/corporateGifting/dream-slice-landing (1)'
import Nav2Cake from '@/components/Landing/2Nav'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const DESSERT_PRODUCTS: Product[] = [
    { id: 1, name: "Double Chocolate Moon Pie", price: "$4.00", image: "/ds/desserts/ChocolateMoonPie.webp" },
    { id: 2, name: "Chocolate Fudge Trifle", price: "$5.50", image: "/ds/desserts/ChocolateTrifleCup.webp" },
    { id: 3, name: "Classic Chip Cookie", price: "$2.50", image: "/ds/desserts/Cookie.webp" },
    { id: 4, name: "Butter Croissant", price: "$3.50", image: "/ds/desserts/Croissant.webp" },
    { id: 5, name: "Vanilla Bean Cupcake", price: "$3.00", image: "/ds/desserts/Cupcake.webp" },
    { id: 6, name: "French Macaron", price: "$2.00", image: "/ds/desserts/Macaron.webp" },
];
export const LUXURY_PRODUCTS: Product[] = [
    { id: 1, name: "Ivory Ruffle Rose Wedding Cake", price: "$185.00", image: "/ds/luxury/IvoryRuffleRoseCake.webp" },
    { id: 2, name: "Blush Ombré Bloom Cake", price: "$220.00", image: "/ds/luxury/BlushOmbreBloomCake.webp" },
    { id: 3, name: "Lamborghini Racer Cake", price: "$250.00", image: "/ds/luxury/LamborghiniRacerCake.webp" },
    { id: 4, name: "Princess Doll Fantasy Cake", price: "$210.00", image: "/ds/luxury/PrincessDollFantasyCake.webp" },
    { id: 5, name: "Gold Leaf Lavender Cake", price: "$195.00", image: "/ds/luxury/GoldLeafLavenderCake.webp" },
    { id: 6, name: "Royal Navy & Gold Crown Cake", price: "$275.00", image: "/ds/luxury/RoyalNavyGoldCrownCake.webp" },
];

const CORPORATE_GIFTING_PRODUCTS: Product[] = [
    { id: 1, name: "Executive Gift Hamper", price: "$", image: "/ds/corporate/ExecutiveHamper.webp", },
    { id: 2, name: "Employee Welcome Hamper", price: "$", image: "/ds/corporate/EmployeeWelcomeHamper.webp", },
    { id: 3, name: "Diwali Gift Hamper", price: "$", image: "/ds/corporate/DiwaliHamper.webp", },
    { id: 4, name: "Assorted Cookie Box", price: "$", image: "/ds/corporate/AssortedCookieBox.webp", },
    { id: 5, name: "Artisan Macaron Box", price: "$", image: "/ds/corporate/ArtisanMacaronBox.webp", },
    { id: 6, name: "Personalized Cookie Gifts", price: "$", image: "/ds/corporate/PersonalizedCookieGifts.webp", },
];

const page = () => {
    return (
        <>
            <Nav2Cake />
            <Hero />

            <BakeryProductSection
                id="corporate-gifting"
                heading="Corporate Gifting"
                imageAspectRatio='1/1'
                subheading="Thoughtfully crafted gifts for every occasion."
                products={CORPORATE_GIFTING_PRODUCTS}
            />
             <Footer/>
        </>
    )
}

export default page

function Hero() {
    return (
        <section className="overflow-clip  relative h-screen   z-50">
            <img src="/ds/hero1.png" alt="hero" className="absolute top-0 w-full z-50" />

            <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24  z-100 relative  h-155 ">
                <div>
                    <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-brand-burgundy ">
                        THE ART OF GIVING
                    </p>
                    <h1 className="font-serif text-5xl italic leading-[1.05] text-brand-burgundy sm:text-6xl">
                        A Gift Worth Remembering
                    </h1>
                    <p className="mt-6 max-w-md text-sm leading-relaxed text-brand-brown/70">
                        Beautifully crafted desserts, thoughtfully curated for moments that deserve something extraordinary.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link href={"/our-menu"}>
                            <Button className=" bg-brand-burgundy rounded-lg cursor-pointer px-7 py-6 text-xs font-semibold tracking-wide text-brand-cream hover:bg-brand-burgundy/90">
                                EXPLORE GIFTING <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        {/* <Button
              variant="outline"
              className="rounded-none border-brand-burgundy px-7 py-6 text-xs font-semibold tracking-wide text-brand-burgundy hover:bg-brand-burgundy hover:text-brand-cream"
            >
              CORPORATE GIFTING <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
                    </div>
                </div>

                {/* <PlaceholderImage
  label="Signature chocolate berry cake — hero photograph"
  src="/menu-cakes/CheeseCake/LotusBiscoffCheesecake_converted.avif"
  className="aspect-[6/5] w-full rounded-2xl border border-brand-beige object-cover hidden"
/> */}
            </div>
        </section>
    );
}