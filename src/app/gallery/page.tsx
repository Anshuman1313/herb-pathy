
import OccasionSection from "@/components/CakeComponents/OccasionSection"
import Nav2Cake from "@/components/Landing/2Nav"
import {Footer} from "@/components/corporateGifting/dream-slice-landing (1)";
import CakeGallery from "@/components/Landing/Gallery"
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cake Gallery | Custom Cakes & Celebrations | Dream Slice Studio",
  description:
    "Explore the Dream Slice Studio cake gallery featuring custom cakes and real celebrations. See beautiful cakes and happy clients celebrating their special moments.",
};
const page = () => {
  return (
    <div>
     <Nav2Cake/>
      <div className="pt-20">

      <OccasionSection/>
      </div>
      {/* <CakeGallery/> */}
        <Footer/>
      </div>
  )
}

export default page