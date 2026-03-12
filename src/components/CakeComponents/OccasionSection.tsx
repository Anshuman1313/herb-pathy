"use client"
import OccasionCard, { occasions } from './OccasionCard'
import SpinIcon, { SpinStarIcon } from './SpinIcon'

const OccasionSection = () => {
     
    return (
        <>
            <div className="h-[200%] w-full relative z-10 pt-40 px-20 space-y-20 ">
                <SpinIcon className="absolute top-10 fill fill-heading-cake size-40" />
                {/* <SpinIcon className="absolute top-10 fill fill-heading-cake right-20 size-40" /> */}
                <SpinStarIcon  className="absolute top-10  fill-heading-cake right-20 fill size-30 " />
                <div className="heading flex flex-col items-center gap-10 ">
                    <div className="banner ">

                        <span className="text-2xl  text-center font-mono tracking-tighter  space-x-1 font-medium bg-blue-200 px-2 py-1 ">
                            <span> FOR</span>
                            <span>EVERY</span><span>OCCASION</span>

                        </span>
                    </div>


                    <h1 className="text-7xl text-heading-cake font-roslindale text-center">Find The Perfect <br /> Cake
                        For Every <br /> Occasion</h1>
                </div>
                <div className="w-full max-md:grid-cols-2 max-md:gap-x-5  rounded-xl text-lg grid grid-cols-3 gap-x-10 gap-y-15 px-0  ">
                    {occasions.map((occasion, i) => (
                        <OccasionCard key={i} {...occasion} />
                    ))}

                </div>
            </div>
        </>
    )
}

export default OccasionSection