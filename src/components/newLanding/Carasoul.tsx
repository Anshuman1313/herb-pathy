'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'motion/react';

export const items = [
  {
    id: 3,
    url: '/newtheme/3 (1).png',
    title: 'Anniversary Specials',
    subtitle: 'Celebrate love & togetherness ❤️',
  },
  {
    id: 1,
    url: '/newtheme/dreamslicestudio (1).png',
    title: 'Birthday Cakes',
    subtitle: 'Make every year unforgettable 🎉',
  },
  {
    id: 4,
    url: '/newtheme/10 (1).png',
    title: 'Cheesecakes',
    subtitle: 'Rich, creamy & irresistible 🍰',
  },
  // {
  //   id: 5,
  //   url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
  //   title: 'Dry Cakes',
  //   subtitle: 'Perfect for tea-time moments ☕',
  // },
  // {
  //   id: 6,
  //   url: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80',
  //   title: 'Cupcakes',
  //   subtitle: 'Small bites, big happiness 🧁',
  // },
  // {
  //   id: 7,
  //   url: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=80',
  //   title: 'Bento Cakes',
  //   subtitle: 'Cute, minimal & trendy ✨',
  // },
  // {
  //   id: 8,
  //   url: 'https://images.unsplash.com/photo-1559622214-ef7dfc3b1e3f?auto=format&fit=crop&w=800&q=80',
  //   title: 'Custom Cakes',
  //   subtitle: 'Designed just for you 🎨',
  // },
];

export default function FramerCarousel() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x]);

  return (
    <div className='w-full  md:h-screen  md:min-h-[700px] max-md:   md:pt-20  '>
      <div className='flex  h-full flex-col gap-3'>
        <div className='relative overflow-hidden' ref={containerRef}>
          <motion.div className='flex h-full w-fit' style={{ x }}>
            {items.map((item) => (
              <div key={item.id} className='shrink-0 h-full w-full '>
                <img
                  src={item.url}
                  alt={item.title}
                  className='select-none h-full w-full min-h-[400px]   pointer-events-none '
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === 0
                  ? 'opacity-40 cursor-not-allowed'
                  : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </motion.button>

          {/* Next Button */}
          <motion.button
            disabled={index === items.length - 1}
            onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === items.length - 1
                  ? 'opacity-40 cursor-not-allowed'
                  : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </motion.button>
          {/* Progress Indicator */}
          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
            {items.map((_, i) => (
              <button
                key={items[i]?.id ?? items[i]?.url ?? `dot-${i}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


