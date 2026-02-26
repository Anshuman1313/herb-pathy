"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type FloatingImage = {
    id: number;
    src: string;
    size: number;
    top: string;
    left: string;
    duration: number;
    ease: "easeOut" | "easeInOut";
    floatX: number;
    floatY: number;
    floatDurationX: number;
    floatDurationY: number;
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


        "/hero/13.png",
        "/hero/10.png",
        "/hero/11.png",
        "/hero/12.png",
    ];

    //fixed size and movement 
    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const generated: FloatingImage[] = [];

        // 🔀 Shuffle images so order is random every mount
        const shuffledImages = shuffleArray(HERO_IMAGES);

        const totalImages = shuffledImages.length;

        // ---- 3 SIZE TIERS ----
        const largeCount = 3;
        const mediumCount = 4;
        const smallCount = totalImages - largeCount - mediumCount;

        function isTooClose(
            newX: number,
            newY: number,
            newSize: number
        ) {
            for (const img of generated) {
                const existingX = parseFloat(img.left);
                const existingY = parseFloat(img.top);

                const dx = newX - existingX;
                const dy = newY - existingY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                const minDistance =
                    ((newSize + img.size) / 2) * 0.85;

                if (distance < minDistance) return true;
            }
            return false;
        }

        let idCounter = 0;

        // 🔴 LARGE (Foreground Anchors)
        for (let i = 0; i < largeCount; i++) {
            let attempts = 0;
            let x = 0;
            let y = 0;

            const size = 170 + Math.random() * 40; // 160–200px

            do {
                x = Math.random() * (width - size);
                y = Math.random() * (height - size);
                attempts++;
            } while (isTooClose(x, y, size) && attempts < 60);

            generated.push({
                id: idCounter,
                src: shuffledImages[idCounter],
                size,
                top: `${y}px`,
                left: `${x}px`,
                duration: 2,
                ease: "easeOut",

                // Heavy / slower float
                floatX: (Math.random() - 0.5) * 50,
                floatY: (Math.random() - 0.5) * 50,
                floatDurationX: 10 + Math.random() * 4,
                floatDurationY: 12 + Math.random() * 4,
            });

            idCounter++;
        }

        // 🟡 MEDIUM (Balanced Layer)
        for (let i = 0; i < mediumCount; i++) {
            let attempts = 0;
            let x = 0;
            let y = 0;

            const size = 140 + Math.random() * 30; // 70–100px

            do {
                x = Math.random() * (width - size);
                y = Math.random() * (height - size);
                attempts++;
            } while (isTooClose(x, y, size) && attempts < 60);

            generated.push({
                id: idCounter,
                src: shuffledImages[idCounter],
                size,
                top: `${y}px`,
                left: `${x}px`,
                duration: 2,
                ease: "easeOut",

                // Natural float
                floatX: (Math.random() - 0.5) * 35,
                floatY: (Math.random() - 0.5) * 35,
                floatDurationX: 7 + Math.random() * 4,
                floatDurationY: 9 + Math.random() * 4,
            });

            idCounter++;
        }

        // 🔵 SMALL (Background Texture)
        for (let i = 0; i < smallCount; i++) {
            let attempts = 0;
            let x = 0;
            let y = 0;

            const size = 100 + Math.random() * 20; // 100–120px

            do {
                x = Math.random() * (width - size);
                y = Math.random() * (height - size);
                attempts++;
            } while (isTooClose(x, y, size) && attempts < 60);

            generated.push({
                id: idCounter,
                src: shuffledImages[idCounter],
                size,
                top: `${y}px`,
                left: `${x}px`,
                duration: 2,
                ease: "easeOut",

                // Lighter / slightly faster
                floatX: (Math.random() - 0.5) * 25,
                floatY: (Math.random() - 0.5) * 25,
                floatDurationX: 5 + Math.random() * 3,
                floatDurationY: 6 + Math.random() * 3,
            });

            idCounter++;
        }

        setImages(generated);
        setMounted(true);
    }, []);


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
    // useEffect(() => {
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
            {images.map((img, i) => (
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
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: 1,
                        opacity: 0.9,
                        x: [0, img.floatX, 3],
                        y: [0, img.floatY, ],
                        rotateX: [0, 3, -3, 0],
                        rotateY: [0, -4, 4, 0],
                    }}
                    transition={{
                        scale: {
                            duration: img.duration,
                            ease: img.ease,
                            delay: i * 0.15,
                        },
                        opacity: {
                            duration: img.duration,
                            ease: img.ease,
                            delay: i * 0.15,

                        },
                        x: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatType: "mirror",
                            delay: 1.5
                        },
                        y: {
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatType: "mirror",
                            delay: 1.5
                        },
                        rotateX: {
                            duration: img.floatDurationX,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                        },
                        rotateY: {
                            duration: img.floatDurationY,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                        },
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
            ))}
        </div>
    );
}