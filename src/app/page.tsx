import { Cta4 } from "@/components/CakeComponents/Cta";
import HeroSection from "@/components/Landing/HeroSection";
import {RadialGradient} from "@/components/Landing/RadialGradient";
import Navbar from "@/components/Layout/Navbar";

export default function Home() {
  return (
    <>
    <Cta4/>
        <RadialGradient />
      <div className=" relative font-sans ">
        <Navbar/>
        <div className="h-screen w-full pt-20 px-[2%]">
        <HeroSection/>

        </div>
        <div className="h-screen w-full  px-[20%] mt-20">
          <div className="h-full w-full rounded-xl bg-blue-400"></div>
        </div>
        <div className="h-screen w-full  px-[2%]  mt-20 ">
          <div className="h-full w-full rounded-xl bg-blue-400"></div>
        </div>
      
      </div>
    </>
  );
}
