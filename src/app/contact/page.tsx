
import Nav2Cake from "@/components/Landing/2Nav"
import ContactForm from "@/components/Landing/ContactForm"
import {Footer} from "@/components/corporateGifting/dream-slice-landing (1)";
import CakeGallery from "@/components/Landing/Gallery"
import DreamSliceContact from "@/components/MotionDev/DreamSliceContact"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dream Slice Studio | Custom Cake Enquiries",
  description:
    "Get in touch with Dream Slice Studio for custom cake orders, celebration cakes, gifting enquiries, and special requests. We'd love to help create something sweet for your occasion.",
};

const page = () => {
  return (
    <div>
     <Nav2Cake/>
      <DreamSliceContact/>
        {/* <ContactForm/> */}
      <Footer/>
      </div>
  )
}

export default page