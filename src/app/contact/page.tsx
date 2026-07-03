"use client"

import Nav1Cake from "@/components/Landing/1Nav"
import ContactForm from "@/components/Landing/ContactForm"
import Footer from "@/components/Landing/Footer"
import CakeGallery from "@/components/Landing/Gallery"
import DreamSliceContact from "@/components/MotionDev/DreamSliceContact"

const page = () => {
  return (
    <div>
      <Nav1Cake/>
      <DreamSliceContact/>
        {/* <ContactForm/> */}
      <Footer/>
      </div>
  )
}

export default page