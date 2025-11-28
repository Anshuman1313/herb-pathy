import HeroSection from "@/components/Landing/HeroSection";
import Navbar from "@/components/Layout/Navbar";

export default function Home() {
  return (
    <>
      <div className=" relative font-sans">
        <Navbar/>
        {/* <div className="h-px w-full bg-red-300 absolute top-10 inset-x-0"></div>
        <div className="w-px h-full bg-red-900 absolute top-0 left-[5%] inset-y-0"></div>
        <div className="w-px h-full bg-red-900 absolute top-0 left-[95%] inset-y-0"></div> */}

       
        <div className="h-screen w-full pt-20 px-[2%]">
        <HeroSection/>

        </div>
        <div className="h-screen w-full  py-20 px-[8%]">
        <div className="h-screen w-full bg-red-400 rounded-xl">
        </div>
        </div>
      
      </div>
    </>
  );
}
