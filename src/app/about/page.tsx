import {Footer} from "@/components/corporateGifting/dream-slice-landing (1)";
import Nav2Cake from "@/components/Landing/2Nav"
import About from "@/components/Landing/About"
import DreamSliceAbout from "@/components/MotionDev/DreamSliceAbout"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dream Slice Studio | Our Story & Craft",
  description:
    "Get to know Dream Slice Studio, where creativity meets craftsmanship. Discover our story, passion for beautifully crafted custom cakes, and the moments we love making sweeter.",
};

const page = () => {
  return (
    <>
     <Nav2Cake/>
    
        <DreamSliceAbout/>
        <Footer/>

    </>
  )
}

export default page