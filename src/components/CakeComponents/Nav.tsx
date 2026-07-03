import { Cta3 } from './ResponsiveCta'

const Nav = () => {
    return (
        <div className='w-full flex justify-center items-center  top-0 absolute z-100  p-2'>
            <div className='bg-subheading-cake  flex justify-between  items-center  '>
                {/* <div className=' w-80  shrink-0  text-xl px-5  flex justify-start items-center'>
                    <div className='cursor-pointer flex justify-center items-center gap-2 group'>

                        <div className="size-11  p-2  bg-background rounded-full flex justify-center border border-[#F9F295] items-center shadow-[1px_2px_6px_1px_rgb(0,0,5,0.1)]">
                            <svg
                                viewBox="0 0 100 100"
                                className="size-[90%] "
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="10"
                                    className="fill-heading-cake"
                                />
                                <circle
                                    cx="80"
                                    cy="50"
                                    r="10"
                                    className="fill-heading-cake"
                                />
                                <circle
                                    cx="20"
                                    cy="50"
                                    r="10"
                                    className="fill-heading-cake"
                                />
                            </svg>
                        </div>
                        <div className='text-background'>Menu</div>
                    </div>
                </div> */}
                <div className='font-milkshake max-lg:text-3xl text-4xl py-2 w-full text-background text-center'>DreamSliceStudio</div>
                {/* <div className='shrink-0 w-80 px-5  flex justify-end items-center underline [text-decoration-skip-ink:auto]'>
                    <Cta3
                        variant="expand"
                        containerClass="h-11 w-53 bg-transparent"
                        textClass="text-xl text-heading-cake  font-cooper border border-[#F9F295] bg-white shadow-[1px_1px_2px_1px_rgb(0,0,0,0.1)] font-semibold  h-full "
                        circleClass="size-11 "
                        leftcircle="bg-rose-300"
                        rightcircle="bg-[#E7C98A]"
                        lefthoverSize="group-hover:w-11"
                        iconClass="size-5 text-foreground/80"
                    />

                </div> */}
            </div>
        </div>
    )
}

export default Nav