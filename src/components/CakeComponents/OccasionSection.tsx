"use client"
import OccasionCard, { occasions } from './OccasionCard'
import SpinIcon, { SpinStarIcon } from './SpinIcon'
import { motion, AnimatePresence, MotionConfig } from "motion/react"
import { FlourStroke, FondentBrush, TopLeftStroke, TopRightStroke } from './OccasionSectionSvg/UpwardStroke'
import { cakeSections } from '../Landing/Gallery'
import { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

type ImageItem = {
  id: number;
  src: string;
  instagramUrl?: string;
}

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const OccasionSection = () => {
  const [activeImage, setActiveImage] = useState<ImageItem | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref as React.RefObject<HTMLElement>, () => setActiveImage(null));

  const allImages: ImageItem[] = cakeSections.flatMap((section) =>
    section.images.map((img, i) => ({
      id: parseInt(`${cakeSections.indexOf(section)}${i}${i}`),
      src: img.src,
      instagramUrl: img.instagramUrl,
    }))
  );

  return (
    <MotionConfig transition={{ duration: 0.5, ease: [0.45, 0.05, 0.55, 0.95] }}>
      <>
        {/* Lightbox Overlay */}
        <AnimatePresence>
          {activeImage && (
            <div className="fixed inset-0 z-50 grid place-items-center">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/70 backdrop-blur-md"
                onClick={() => setActiveImage(null)}
              />

              {/* Expanded Card */}
              {/* // Expanded Card - replace the existing lightbox motion.div */}
              <motion.div
                layoutId={`image-card-${activeImage.id}`}
                ref={ref}
                className="relative z-10"
                style={{ width: 'min(90vw, 520px)' }}
              >
                <motion.img
                  layoutId={`img-${activeImage.id}`}
                  src={activeImage.src}
                  alt="expanded"
                  className="w-full h-[70vh] object-cover rounded-3xl block"
                  onClick={() => setActiveImage(null)}
                />

                {/* Instagram Button */}
                <motion.a
                  href={activeImage.instagramUrl ?? "https://www.instagram.com/dreamslicestudio/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ delay: 0.25 }}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute bottom-4 right-3 flex items-center gap-2 bg-white text-[#1a1a1a] text-sm font-medium px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span>View on Instagram</span>
                </motion.a>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Main Section */}
        <div className="h-[200%] w-full relative z-10 pt-40 px-20 space-y-20 overflow-hidden">
          <SpinIcon className="absolute top-10 fill fill-heading-cake size-40" />
          <FondentBrush className="absolute top-99 right-50" />
          <FlourStroke className="absolute top-90 left-10" />
          <TopLeftStroke className="absolute top-0 -left-5" />
          <TopRightStroke className="absolute top-35 h-50 rotate-10 -right-10" />
          <SpinStarIcon className="absolute top-10 fill-heading-cake right-20 fill size-30" />

          {/* Heading */}
          <div className="heading flex flex-col items-center gap-10 z-10 relative">
            <div className="banner">
              <span className="text-2xl text-center font-mono tracking-tighter space-x-1 font-medium bg-blue-200 px-2 py-1">
                <span>FOR</span> <span>EVERY</span> <span>OCCASION</span>
              </span>
            </div>
            <h1 className="text-7xl text-heading-cake font-roslindale text-center">
              Find The Perfect <br /> Cake For Every <br /> Occasion
            </h1>
          </div>


          {/* Masonry Gallery */}
          <div className="z-10 relative">
            {cakeSections.map((section, idx) => {
              const sectionStartId = cakeSections
                .slice(0, idx)
                .reduce((acc, s) => acc + s.images.length, 0);

              return (
                <div key={idx} className="mb-24">
                  <div className="columns-1 cursor-pointer sm:columns-2 md:columns-3 lg:columns-3 gap-5 space-y-5">
                    {section.images.map((img, i) => {
                      const item: ImageItem = {
                        id: sectionStartId + i,
                        src: img.src,
                        instagramUrl: img.instagramUrl,
                      };

                      return (
                        <motion.div
                          layoutId={`image-card-${item.id}`}
                          key={item.id}
                          onClick={() => setActiveImage(item)}
                          className="break-inside-avoid rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                          <motion.img
                            layoutId={`img-${item.id}`}
                            src={img.src}
                            alt={section.title}
                            className="w-full h-50 md:h-100 object-cover"
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    </MotionConfig>
  );
};

export default OccasionSection;