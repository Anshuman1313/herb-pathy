"use client"

import OccasionSection from "@/components/CakeComponents/OccasionSection"
import Nav1Cake from "@/components/Landing/1Nav"
import Footer from "@/components/Landing/Footer"
import CakeGallery from "@/components/Landing/Gallery"

const page = () => {
  return (
    <div>
      <Nav1Cake/>
      <div className="pt-20">

      <OccasionSection/>
      </div>
      {/* <CakeGallery/> */}
        <Footer/>
      </div>
  )
}

export default page