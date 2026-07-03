"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type FloatingImage = {
    id: number;
    src: string;
    size: number;
    top: string;
    right?: string;
    left?: string;
    duration: number;
    ease: "easeOut" | "easeInOut";
    floatX: number;
    floatY: number;
    floatDurationX: number;
    floatDurationY: number;
};
type Tier = "large" | "medium" | "small";
type HeroLayoutItem = {
  top: string;
  right: string;
  size: number;
  tier: Tier; // ← THIS is important
};

export default function FloatingBackgroundImages() {
    const [images, setImages] = useState<FloatingImage[]>([]);
    const [mounted, setMounted] = useState(false);

    function shuffleArray<T>(array: T[]): T[] {
        const copy = [...array];

        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }

        return copy;
    }
    // 🔥 Image Pool (add more images here anytime)
    const HERO_IMAGES: string[] = [
        "/hero/1.png",
        "/hero/2.png",
        "/hero/3.png",
        "/hero/4.png",
        "/hero/5.png",
        "/hero/6.png",
        "/hero/7.png",
        "/hero/8.png",
        "/hero/9.png",
        "/hero/10.png",
        "/hero/11.png",
        "/hero/12.png",
        "/hero/13.png",
        "/hero/14-removebg-preview.png",
        "/hero/15-removebg-preview.png",
        "/hero/18-modified.png",
        "/hero/19-modified.png",
        "/hero/20-modified.png",
        "/hero/21-modified.png",
    ];
    // 🧠 12 Fixed Luxury Layout Positions
     const HERO_LAYOUT:HeroLayoutItem[] = [
        { top: "10%", right: "3%", size: 150, tier: "large" },
        // { top: "41%", right: "24%", size: 180, tier: "large" },
        { top: "65%", right: "4%", size: 150, tier: "large" },
        { top: "3%", right: "84%", size: 150, tier: "large" },
        
        // { top: "13%", right: "79%", size: 150, tier: "medium" },
        // { top: "13%", right: "59%", size: 150, tier: "medium" },
        // { top: "38%", right: "60%", size: 160, tier: "medium" },
        { top: "65%", right: "84%", size: 160, tier: "medium" },
        { top: "41%", right: "24%", size: 130, tier: "medium" },

        { top: "77%", right: "72%", size: 130, tier: "medium" },
        { top: "52%", right: "76%", size: 120, tier: "medium" },
        { top: "38%", right: "66%", size: 120, tier: "medium" },
        // { top: "52%", right: "86%", size: 140, tier: "medium" },
        { top: "52%", right: "56%", size: 120, tier: "medium" },

        { top: "6%", right: "26%", size: 100, tier: "small" },
        { top: "8%", right: "66%", size: 100, tier: "small" },
        { top: "30%", right: "89%", size: 100, tier: "small" },
        { top: "44%", right: "10%", size: 110, tier: "small" },
        { top: "82%", right: "22%", size: 110, tier: "small" },
        { top: "65%", right: "20%", size: 100, tier: "small" },
    ];
    //  You choose which images go where (by index from HERO_IMAGES)

 const HERO_IMAGE_TIERS = {
  large: [7,15,17],       // These indexes will be LARGE
  medium: [6,13,1, 2,7,14],   // These will be MEDIUM
  small: [3,17, 5, 2, 8,4] // These will be SMALL
};

    //some images also hardcoded 
    useEffect(() => {
  const generated: FloatingImage[] = [];

  // Extract actual image URLs based on index
  const tierImages = {
    large: HERO_IMAGE_TIERS.large.map(i => HERO_IMAGES[i]),
    medium: HERO_IMAGE_TIERS.medium.map(i => HERO_IMAGES[i]),
    small: HERO_IMAGE_TIERS.small.map(i => HERO_IMAGES[i]),
  };

  // Optional: Shuffle inside each tier
  tierImages.large = shuffleArray(tierImages.large);
  tierImages.medium = shuffleArray(tierImages.medium);
  tierImages.small = shuffleArray(tierImages.small);

  const tierCounters = {
    large: 0,
    medium: 0,
    small: 0,
  };

  HERO_LAYOUT.forEach((layout, index) => {
    const tier = layout.tier;

    const imageSrc =
      tierImages[tier][tierCounters[tier]++];

    let floatX = 0;
    let floatY = 0;
    let floatDurationX = 0;
    let floatDurationY = 0;

    // 🎯 Controlled movement per tier
    if (tier === "large") {
      floatX = (Math.random() - 0.5) * 50;
      floatY = (Math.random() - 0.5) * 50;
      floatDurationX = 10 + Math.random() * 4;
      floatDurationY = 12 + Math.random() * 4;
    }

    if (tier === "medium") {
      floatX = (Math.random() - 0.5) * 35;
      floatY = (Math.random() - 0.5) * 35;
      floatDurationX = 7 + Math.random() * 4;
      floatDurationY = 9 + Math.random() * 4;
    }

    if (tier === "small") {
      floatX = (Math.random() - 0.5) * 25;
      floatY = (Math.random() - 0.5) * 25 +10;
      floatDurationX = 5 + Math.random() * 3;
      floatDurationY = 6 + Math.random() * 3;
    }

    generated.push({
      id: index,
      src: imageSrc,
      size: layout.size,
      top: layout.top,
      left: layout.right,
      duration: 2,
      ease: "easeOut",
      floatX,
      floatY,
      floatDurationX,
      floatDurationY,
    });
  });

  setImages(generated);
  setMounted(true);
}, []);


    // //for hardcoded placement of images 
    // useEffect(() => {
    //     const generated: FloatingImage[] = [];

    //     // Shuffle and take only 12
    //     const shuffledImages = shuffleArray(HERO_IMAGES).slice(0, 12);

    //     HERO_LAYOUT.forEach((layout, index) => {
    //         const tier = layout.tier;

    //         let floatX = 0;
    //         let floatY = 0;
    //         let floatDurationX = 0;
    //         let floatDurationY = 0;

    //         // 🎯 Movement logic based on tier
    //         if (tier === "large") {
    //             floatX = (Math.random() - 0.5) * 50;
    //             floatY = (Math.random() - 0.5) * 50;
    //             floatDurationX = 10 + Math.random() * 4;
    //             floatDurationY = 12 + Math.random() * 4;
    //         }

    //         if (tier === "medium") {
    //             floatX = (Math.random() - 0.5) * 35;
    //             floatY = (Math.random() - 0.5) * 35;
    //             floatDurationX = 7 + Math.random() * 4;
    //             floatDurationY = 9 + Math.random() * 4;
    //         }

    //         if (tier === "small") {
    //             floatX = (Math.random() - 0.5) * 25;
    //             floatY = (Math.random() - 0.5) * 25;
    //             floatDurationX = 5 + Math.random() * 3;
    //             floatDurationY = 6 + Math.random() * 3;
    //         }

    //         generated.push({
    //             id: index,
    //             src: shuffledImages[index],
    //             size: layout.size,
    //             top: layout.top,
    //             left: layout.right,
    //             duration: 2,
    //             ease: "easeOut",
    //             floatX :0,
    //             floatY: 0,
    //             floatDurationX: 0,
    //             floatDurationY: 0,
    //         });
    //     });

    //     setImages(generated);
    //     setMounted(true);
    // }, []);

    // //fixed size and movement 
    // useEffect(() => {
    //     const width = window.innerWidth;
    //     const height = window.innerHeight;

    //     const generated: FloatingImage[] = [];

    //     // 🔀 Shuffle images so order is random every mount
    //     const shuffledImages = shuffleArray(HERO_IMAGES);

    //     const totalImages = shuffledImages.length;

    //     // ---- 3 SIZE TIERS ----
    //     const largeCount = 3;
    //     const mediumCount = 4;
    //     const smallCount = totalImages - largeCount - mediumCount;

    //     function isTooClose(
    //         newX: number,
    //         newY: number,
    //         newSize: number
    //     ) {
    //         for (const img of generated) {
    //             const existingX = parseFloat(img.left);
    //             const existingY = parseFloat(img.top);

    //             const dx = newX - existingX;
    //             const dy = newY - existingY;
    //             const distance = Math.sqrt(dx * dx + dy * dy);

    //             const minDistance =
    //                 ((newSize + img.size) / 2) * 0.85;

    //             if (distance < minDistance) return true;
    //         }
    //         return false;
    //     }

    //     let idCounter = 0;

    //     // 🔴 LARGE (Foreground Anchors)
    //     for (let i = 0; i < largeCount; i++) {
    //         let attempts = 0;
    //         let x = 0;
    //         let y = 0;

    //         const size = 170 + Math.random() * 40; // 160–200px

    //         do {
    //             x = Math.random() * (width - size);
    //             y = Math.random() * (height - size);
    //             attempts++;
    //         } while (isTooClose(x, y, size) && attempts < 60);

    //         generated.push({
    //             id: idCounter,
    //             src: shuffledImages[idCounter],
    //             size,
    //             top: `${y}px`,
    //             left: `${x}px`,
    //             duration: 2,
    //             ease: "easeOut",

    //             // Heavy / slower float
    //             floatX: (Math.random() - 0.5) * 50,
    //             floatY: (Math.random() - 0.5) * 50,
    //             floatDurationX: 10 + Math.random() * 4,
    //             floatDurationY: 12 + Math.random() * 4,
    //         });

    //         idCounter++;
    //     }

    //     // 🟡 MEDIUM (Balanced Layer)
    //     for (let i = 0; i < mediumCount; i++) {
    //         let attempts = 0;
    //         let x = 0;
    //         let y = 0;

    //         const size = 140 + Math.random() * 30; // 70–100px

    //         do {
    //             x = Math.random() * (width - size);
    //             y = Math.random() * (height - size);
    //             attempts++;
    //         } while (isTooClose(x, y, size) && attempts < 60);

    //         generated.push({
    //             id: idCounter,
    //             src: shuffledImages[idCounter],
    //             size,
    //             top: `${y}px`,
    //             left: `${x}px`,
    //             duration: 2,
    //             ease: "easeOut",

    //             // Natural float
    //             floatX: (Math.random() - 0.5) * 35,
    //             floatY: (Math.random() - 0.5) * 35,
    //             floatDurationX: 7 + Math.random() * 4,
    //             floatDurationY: 9 + Math.random() * 4,
    //         });

    //         idCounter++;
    //     }

    //     // 🔵 SMALL (Background Texture)
    //     for (let i = 0; i < smallCount; i++) {
    //         let attempts = 0;
    //         let x = 0;
    //         let y = 0;

    //         const size = 100 + Math.random() * 20; // 100–120px

    //         do {
    //             x = Math.random() * (width - size);
    //             y = Math.random() * (height - size);
    //             attempts++;
    //         } while (isTooClose(x, y, size) && attempts < 60);

    //         generated.push({
    //             id: idCounter,
    //             src: shuffledImages[idCounter],
    //             size,
    //             top: `${y}px`,
    //             left: `${x}px`,
    //             duration: 2,
    //             ease: "easeOut",

    //             // Lighter / slightly faster
    //             floatX: (Math.random() - 0.5) * 25,
    //             floatY: (Math.random() - 0.5) * 25,
    //             floatDurationX: 5 + Math.random() * 3,
    //             floatDurationY: 6 + Math.random() * 3,
    //         });

    //         idCounter++;
    //     }

    //     setImages(generated);
    //     setMounted(true);
    // }, []);


    // Runs ONLY on client after hydration
    //without game engine logic
    //   useEffect(() => {
    //     const generated : FloatingImage[] = Array.from({ length: 13 }).map((_, index) => ({
    //       id: index,
    //       src: `/cake/${index + 1}.png`,
    //       size: Math.floor(Math.random() * 200) + 120,
    //       top: `${Math.random() * 80}%`,
    //       left: `${Math.random() * 90}%`,
    //       duration: index % 2 === 0 ? 3 : 1.5,
    //       ease: index % 2 === 0 ? "easeOut" : "easeInOut",
    //     }));

    //     setImages(generated);
    //     setMounted(true);
    //   }, []);

    //with game engine logic with spacing b/w images
    // useEffect(() => {w
    //     const generated: FloatingImage[] = [];
    //     const numberImageGenerated = 10;

    //     function isTooClose(newX: number, newY: number, newSize: number) {
    //         for (const img of generated) {
    //             const existingX = parseFloat(img.left);
    //             const existingY = parseFloat(img.top);

    //             const dx = newX - existingX;
    //             const dy = newY - existingY;
    //             const distance = Math.sqrt(dx * dx + dy * dy);

    //             // Size-aware minimum distance
    //             const minDistance =
    //                 ((newSize + img.size) / 2) * 2; // 0.9 allows slight closeness
    //             // Value	Effect
    //             // 0.7	more overlap
    //             // 0.9	balanced
    //             // 1.1	more spaced
    //             // 1.3	very separated

    //             if (distance < minDistance) {
    //                 return true;
    //             }

    //         }
    //         return false;
    //     }
    //     for (let i = 0; i < numberImageGenerated; i++) {
    //         let attempts = 0;
    //         let top = 0;
    //         let left = 0;
    //         const size = Math.floor(Math.random() * 200) + 120;

    //         do {
    //             top = Math.random() * 50;
    //             left = Math.random() * 70;
    //             attempts++;
    //         } while (
    //             isTooClose(left, top, size) &&
    //             attempts < 50
    //         );

    //         generated.push({
    //             id: i,
    //             src: `/cake/${i + 1}.png`,
    //             size,
    //             top: `${top}%`,
    //             left: `${left}%`,
    //             duration: i % 2 === 0 ? 3 : 1.5,
    //             ease: i % 2 === 0 ? "easeOut" : "easeInOut",
    //         });
    //     }
    //     setImages(generated);
    //     setMounted(true);

    // }, [])

    //with parent ref for more spacing 
    // useEffect(() => {
    //     const width = window.innerWidth;
    //     const height = window.innerHeight;

    //     const generated: FloatingImage[] = [];
    //     const numberImageGenerated = 8;
    //     const sizeBuckets = [
    //         { min: 300, max: 360, count: 2 }, // XL
    //         { min: 220, max: 280, count: 3 }, // L
    //         { min: 150, max: 200, count: 3 }, // M
    //         { min: 90, max: 130, count: 4 }, // S
    //     ];

    //     function isTooClose(
    //         newX: number,
    //         newY: number,
    //         newSize: number
    //     ) {
    //         for (const img of generated) {
    //             const existingX = parseFloat(img.left);
    //             const existingY = parseFloat(img.top);

    //             const dx = newX - existingX;
    //             const dy = newY - existingY;
    //             const distance = Math.sqrt(dx * dx + dy * dy);

    //             const minDistance =
    //                 ((newSize + img.size) / 2) * 0.9;

    //             if (distance < minDistance) {
    //                 return true;
    //             }
    //         }
    //         return false;
    //     }

    //     for (let i = 0; i < numberImageGenerated; i++) {
    //         let attempts = 0;
    //         let x = 0;
    //         let y = 0;

    //         const size = Math.floor(Math.random() * 200) + 120;

    //         do {
    //             x = Math.random() * (width - size);
    //             y = Math.random() * (height - size);
    //             attempts++;
    //         } while (
    //             isTooClose(x, y, size) &&
    //             attempts < 50
    //         );

    //         generated.push({
    //             id: i,
    //             src: `/hero/${i + 1}.png`,
    //             size,
    //             top: `${y}px`,
    //             left: `${x}px`,
    //             duration:  1.5,
    //             ease: i % 2 === 0 ? "easeOut" : "easeInOut",
    //             // 🔥 Unique subtle movement
    //             floatX: (Math.random() - 0.5) * 60, // -30 to 30
    //             floatY: (Math.random() - 0.5) * 60,
    //             floatDurationX: 6 + Math.random() * 6, // 6–12s
    //             floatDurationY: 8 + Math.random() * 6, // 8–14s
    //         });
    //     }

    //     setImages(generated);
    //     setMounted(true);
    // }, []);

    //on the basis of size
    // useEffect(() => {
    //     const width = window.innerWidth;
    //     const height = window.innerHeight;

    //     const generated: FloatingImage[] = [];

    //     // Random total between 8 and 13
    //     const totalImages = 8
    //         // Math.floor(Math.random() * 6) + 8;

    //     //  Automatic size distribution (pyramid structure)
    //     // const xlCount = Math.max(1, Math.floor(totalImages * 0.15));
    //     const xlCount = 0;
    //     // const lCount = Math.floor(totalImages * 0.25);
    //      const lCount = 2;

    //     // const mCount = Math.floor(totalImages * 0.30);
    //     const mCount = 3;
    //     const sCount = totalImages - xlCount - lCount - mCount;

    //     const sizeBuckets = [
    //         // { min: 300, max: 360, count: xlCount }, // XL
    //         { min: 220, max: 280, count: lCount },  // L
    //         { min: 150, max: 200, count: mCount },  // M
    //         { min: 90, max: 130, count: sCount },   // S
    //     ];

    //     function isTooClose(
    //         newX: number,
    //         newY: number,
    //         newSize: number
    //     ) {
    //         for (const img of generated) {
    //             const existingX = parseFloat(img.left);
    //             const existingY = parseFloat(img.top);

    //             const dx = newX - existingX;
    //             const dy = newY - existingY;
    //             const distance = Math.sqrt(dx * dx + dy * dy);

    //             const minDistance =
    //                 ((newSize + img.size) / 2) * 0.85;

    //             if (distance < minDistance) return true;
    //         }
    //         return false;
    //     }

    //     let idCounter = 0;

    //     for (const bucket of sizeBuckets) {
    //         for (let i = 0; i < bucket.count; i++) {
    //             let attempts = 0;
    //             let x = 0;
    //             let y = 0;

    //             const size =
    //                 Math.random() * (bucket.max - bucket.min) + bucket.min;

    //             do {
    //                 x = Math.random() * (width - size);
    //                 y = Math.random() * (height - size);
    //                 attempts++;
    //             } while (
    //                 isTooClose(x, y, size) &&
    //                 attempts < 60
    //             );

    //             generated.push({
    //                 id: idCounter,
    //                 src: `/hero/${i+1}.png`,
    //                 size,
    //                 top: `${y}px`,
    //                 left: `${x}px`,
    //                 duration: 2,
    //                 ease: "easeOut",

    //                 // Unique subtle motion
    //                 floatX: (Math.random() - 0.5) * 40,
    //                 floatY: (Math.random() - 0.5) * 40,
    //                 floatDurationX: 6 + Math.random() * 6,
    //                 floatDurationY: 8 + Math.random() * 6,
    //             });

    //             idCounter++;
    //         }
    //     }

    //     setImages(generated);
    //     setMounted(true);
    // }, []);

    // Prevent render until mounted
    if (!mounted) return null;

    return (
        <div className="absolute inset-0 overflow-hidden "
            style={{
                perspective: "1200px"
            }}
        >
            {images.map((img, i) => {
                const appearDelay = i * 0.1;
                const floatDelay = appearDelay + img.duration + 0.3; // wait for appear + small pause

                return (
                    <motion.div
                        key={img.id}
                        className="absolute will-change-transform "
                        style={{
                            top: img.top,
                            left: img.left,
                            width: img.size,
                            height: img.size,
                            transformStyle: "preserve-3d"
                        }}
                        initial={{ scale: 0.2, opacity: 0 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            x: [0, img.floatX, 0],
                            y: [0, img.floatY,0],
                            rotateX: [0, 3, -3, 0],
                            rotateY: [0, -4, 4, 0],
                        }}
                        transition={{
                            scale: {
                                duration: img.duration,
                                ease: [0.08,0.82,0.17,1],
                                delay: appearDelay,
                            },
                            opacity: {
                                duration: img.duration,
                                ease: [0.08,0.82,0.17,1],
                                delay: appearDelay,
    
                            },
                            x: {
                                duration: 8,
                                repeat: Infinity,
                                ease: [0.65,0.05,0.36,1],
                                repeatType: "mirror",
                                delay: floatDelay
                            },
                            y: {
                                duration: 10,
                                repeat: Infinity,
                                ease: [0.65,0.05,0.36,1],
                                repeatType: "mirror",
                                delay: floatDelay
                            },
                            // rotateX: {
                            //     duration: img.floatDurationX,
                            //     repeat: Infinity,
                            //     repeatType: "mirror",
                            //     ease: [0.65,0.05,0.36,1],
                            //     delay: floatDelay
                            // },
                            // rotateY: {
                            //     duration: img.floatDurationY,
                            //     repeat: Infinity,
                            //     repeatType: "mirror",
                            //     ease: [0.65,0.05,0.36,1],
                            //     delay: floatDelay
                            // },
                        }}
                    >
                        <Image
                            src={img.src}
                            alt="floating cake"
                            fill
                            className="object-contain pointer-events-none select-none "
                            sizes="300px"
                        />
                    </motion.div>
                )
            }
            )}
        </div>
    );
}