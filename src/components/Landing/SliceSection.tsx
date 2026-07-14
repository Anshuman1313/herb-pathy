import { motion } from "motion/react";

export default function SliceSection() {
    return (
        <div className="w-full h-screen pt-10 px-20  pb-24  text-heading-cake ">

            <div className="grid grid-cols-[1fr_1fr]  items-center relative ">

                {/* LEFT CONTENT */}
                <div className="flex flex-col z-10 relative gap-6">

                    {/* Heading */}
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
                        className="font-crimson italic text-[85px] leading-[0.95] tracking-tight"
                    >
                        <div>We believe in the</div>
                        <div> art of baking</div>
                        <div></div>
                    </motion.div>

                    {/* Experience */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="font-crimson italic text-3xl"
                    >
                       (500+ cakes crafted, 1000+ delights served)
                    </motion.div>

                    {/* Paragraph */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-base font-inter leading-relaxed max-w-md text-neutral-700 "
                    >
                        Where every cake is crafted with passion and every bite of our
                        pastries and cookies is made with precision.
                        <br /><br />
                        At Dream Slice Studio, we blend artistry with flavor — from soft,
                        layered cakes to perfectly baked cookies. Every creation is made
                        fresh, using quality ingredients and a touch of creativity to bring
                        joy in every slice.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: "50%" }}
                        whileInView={{ opacity: 1, y: "0%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                        className="
              w-fit
              font-crimson
              text-2xl font-base italic
              px-8 py-1 rounded-sm
              cursor-pointer
              transition-all duration-150 ease-linear
              border border-heading-cake
              text-heading-cake
              bg-transparent
              active:scale-[0.96]
              select-none
              mt-2
            "
                    >
                        View Cakes
                    </motion.div>
                </div>

                {/* CENTER IMAGE */}
                <div className="flex justify-center select-none items-center absolute top-[52%] left-1/2 -translate-x-1/3 -translate-y-1/2 z-0">
                    <motion.img
                        src="/pastry.avif" 
                        alt="Desserts"
                        initial={{ scale: 0.85, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full h-162  object-cover"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex flex-col z-10 relative items-end justify-between h-full">

                    {/* Top label */}
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.83, 0, 0.17, 1] }}
                        className="text-sm"
                    >
                        FRESHNESS: 10/10
                    </motion.div>

                    {/* Right Heading */}
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.83, 0, 0.17, 1] }}
                        className="font-crimson italic text-[80px] leading-none text-right tracking-tight"
                    >
                        <div>of delicate</div>
                        <div>desserts</div>
                    </motion.div>

                    {/* Bottom Statement */}
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.83, 0, 0.17, 1] }}
                        className="font-crimson italic text-[80px] leading-none text-right tracking-tight"
                    >
                        <div>and fresh</div>
                        <div>pastries.</div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}