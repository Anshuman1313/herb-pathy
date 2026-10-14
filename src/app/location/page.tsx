import {Footer} from "@/components/corporateGifting/dream-slice-landing (1)";
import Nav2Cake from "@/components/Landing/2Nav"
import LocationSection from "@/components/Landing/FindUs"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Visit Dream Slice Studio | Location & Cake Studio",
  description:
    "Find Dream Slice Studio and plan your visit for custom cakes, celebration cakes, and desserts. Get our location, directions, and studio details.",
};

const page = () => {
  return (
    <>
     <Nav2Cake/>
    
          <LocationSection/>
              
        <Footer/>

    </>
  )
}

export default page