"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  Variants,
} from "motion/react";
import { useRef, MouseEvent } from "react";
import MenuHero from "./MenuHero";
import OsmosCircle from "../MotionDev/Osmos-Circle";
import OsmosImage from "../MotionDev/OsmosImage";
import HorizontalImagesStack from "../MotionDev/HorizontalImagesStack";

// ─── Types ────────────────────────────────────────────────────────────────────

interface MenuItem {
  name: string;
  desc: string;
  image: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SIGNATURE: MenuItem[] = [
  { name: "Chocolate Truffle Cake", desc: "Rich chocolate cake with smooth truffle frosting.", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80" },
  { name: "Black Forest Cake", desc: "Classic chocolate cake with whipped cream & cherries.", image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400&q=80" },
  { name: "Pineapple Delight Cake", desc: "Moist cake with pineapple & whipped cream.", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80" },
  { name: "Red Velvet Cake", desc: "Soft red velvet cake with cream cheese frosting.", image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=400&q=80" },
  { name: "Butterscotch Crunch Cake", desc: "Butterscotch cake with crunchy praline.", image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&q=80" },
  { name: "Fresh Fruit Cake", desc: "Light sponge with fresh fruits & whipped cream.", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80" },
  { name: "KitKat Chocolate Cake", desc: "Chocolate cake topped with KitKat & ganache.", image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&q=80" },
  { name: "Ferrero Rocher Cake", desc: "Chocolate & hazelnut cake topped with Ferrero Rocher.", image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&q=80" },
];

const DRY: MenuItem[] = [
  { name: "Plum Cake", desc: "Classic rich plum cake with dried fruits & nuts.", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80" },
  { name: "Marble Cake", desc: "Classic blend of vanilla and chocolate swirls.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80" },
  { name: "Tea Time Butter Cake", desc: "Soft & buttery cake perfect for tea time.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80" },
  { name: "Chocolate Chip Dry Cake", desc: "Moist cake loaded with chocolate chips.", image: "https://images.unsplash.com/photo-1606101273945-e9eba14bc5b9?w=400&q=80" },
  { name: "Fruit & Nut Dry Cake", desc: "Loaded with mixed fruits & crunchy nuts.", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80" },
  { name: "Banana Walnut Cake", desc: "Moist banana cake with walnuts.", image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&q=80" },
];

const CHEESECAKES: MenuItem[] = [
  { name: "Classic New York", desc: "Creamy and smooth classic cheesecake.", image: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=400&q=80" },
  { name: "Blueberry Cheesecake", desc: "Creamy cheesecake topped with blueberry compote.", image: "https://images.unsplash.com/photo-1553830591-2f39e38a013c?w=400&q=80" },
  { name: "Strawberry Cheesecake", desc: "Creamy cheesecake topped with fresh strawberry glaze.", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80" },
  { name: "Chocolate Cheesecake", desc: "Rich chocolate cheesecake with a smooth finish.", image: "https://images.unsplash.com/photo-1619895122586-1a69e0abb020?w=400&q=80" },
  { name: "Lotus Biscoff Cheesecake", desc: "Creamy cheesecake topped with Biscoff spread and crumbs.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { name: "Mango Cheesecake", desc: "Mango cheesecake topped with mango glaze. Seasonal.", image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&q=80" },
  { name: "Burnt Basque Cheesecake", desc: "Rich, creamy & perfectly burnt cheesecake.", image: "https://images.unsplash.com/photo-1594086882903-2d59b11e9265?w=400&q=80" },
];

const BENTO: MenuItem[] = [
  { name: "Mini Chocolate Bento", desc: "Mini chocolate cake with a cute touch.", image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=400&q=80" },
//   { name: "Vanilla Celebration Bento", desc: "Classic vanilla cake with sprinkles.", image: "https://images.unsplash.com/photo-1590080875851-b19a566c3bd3?w=400&q=80" },
  { name: "Red Velvet Bento", desc: "Red velvet cake with cream cheese frosting.", image: "https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?w=400&q=80" },
  { name: "Custom Message Bento", desc: "Your message, your style, made just for you.", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80" },
//   { name: "Birthday Theme Bento", desc: "Fun & colorful themes for birthdays.", image: "https://images.unsplash.com/photo-1558636508-e0969431e2d6?w=400&q=80" },
  { name: "Anniversary Special Bento", desc: "Celebrate love with our special bento cakes.", image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400&q=80" },
];

const CUSTOM: MenuItem[] = [
//   { name: "Birthday Cakes", desc: "Make birthdays extra special.", image: "https://images.unsplash.com/photo-1558636508-e0969431e2d6?w=600&q=80" },
  { name: "Wedding Cakes", desc: "Elegant cakes for your big day.", image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&q=80" },
  { name: "Anniversary Cakes", desc: "Celebrate your special moments.", image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=600&q=80" },
];

// ─── Named spring configs (Emil's pattern: give springs semantic names) ────────
// Snappy: instant UI feedback — hover, press
const SPRING_SNAPPY = { stiffness: 400, damping: 30 };
// Gentle: entrance animations — feels natural, not rushed
const SPRING_GENTLE = { stiffness: 120, damping: 20, mass: 1 };
// Wobbly: playful tilt / parallax — slight overshoot
const SPRING_WOBBLY = { stiffness: 200, damping: 15 };

// ─── Shared stagger variants (Emil's pattern: parent controls children timing) ─
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

// Each child animates with a spring — blur + slide up (Emil's signature entrance)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", ...SPRING_GENTLE },
  },
};

// ─── Split text — Emil's char-by-char reveal ──────────────────────────────────
function SplitText({
  text,
  className,
  delay = 0,
  staggerDelay = 0.03,
}: {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${className ?? ""}`}
      aria-label={text}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={{ opacity: 0, y: "0.35em", rotateX: -50 }}
          animate={inView ? { opacity: 1, y: "0em", rotateX: 0 } : {}}
          transition={{
            type: "spring",
            ...SPRING_GENTLE,
            delay: delay + i * staggerDelay,
          }}
          style={{
            display: char === " " ? "inline" : "inline-block",
            transformOrigin: "bottom center",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

// ─── Section heading ──────────────────────────────────────────────────────────
function SectionHeading({ children, sub }: { children: string; sub?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="text-center mb-10 md:mb-14">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", ...SPRING_GENTLE }}
        className="inline-block font-crimson text-xs tracking-[0.3em] uppercase text-rose-400 mb-3"
      >
        {sub}
      </motion.span>

      <h2 className="font-crimson text-4xl md:text-5xl text-heading-cake leading-tight overflow-hidden">
        <SplitText text={children} staggerDelay={0.025} />
      </h2>

      <div className="flex items-center justify-center gap-3 mt-4">
        <motion.span
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ type: "spring", ...SPRING_GENTLE, delay: 0.15 }}
          style={{ originX: 1 }}
          className="h-px w-16 bg-rose-200 block"
        />
        <motion.span
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ type: "spring", ...SPRING_SNAPPY, delay: 0.25 }}
          className="text-rose-300 text-lg inline-block"
        >
          ✦
        </motion.span>
        <motion.span
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ type: "spring", ...SPRING_GENTLE, delay: 0.15 }}
          style={{ originX: 0 }}
          className="h-px w-16 bg-rose-200 block"
        />
      </div>
    </div>
  );
}

// ─── Tilt hook — Emil's useMotionValue + useSpring tilt ───────────────────────
function useTilt(intensity = 8) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [intensity, -intensity]), SPRING_WOBBLY);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-intensity, intensity]), SPRING_WOBBLY);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return { rotateX, rotateY, onMouseMove, onMouseLeave };
}

// ─── Cake Card ────────────────────────────────────────────────────────────────
function CakeCard({ item }: { item: MenuItem }) {
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(6);
  const scale = useSpring(1, SPRING_SNAPPY);

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onHoverStart={() => scale.set(1.03)}
      onHoverEnd={() => scale.set(1)}
      style={{ rotateX, rotateY, scale, transformPerspective: 800 }}
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md shadow-rose-100 border border-rose-100 hover:shadow-xl hover:shadow-rose-200/60 transition-shadow duration-300 cursor-default"
    >
      <div className="relative overflow-hidden h-44">
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", ...SPRING_GENTLE }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#5a2d2d]/30 to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="font-crimson text-heading-cake text-base font-semibold leading-tight mb-1">{item.name}</h3>
        <p className="text-rose-400/80 text-xs leading-relaxed font-crimson">{item.desc}</p>
      </div>
    </motion.div>
  );
}

// ─── Dry Card ─────────────────────────────────────────────────────────────────
function DryCard({ item }: { item: MenuItem }) {
  const scale = useSpring(1, SPRING_SNAPPY);
  const x = useSpring(0, SPRING_SNAPPY);

  return (
    <motion.div
      variants={itemVariants}
      onHoverStart={() => { scale.set(1.02); x.set(5); }}
      onHoverEnd={() => { scale.set(1); x.set(0); }}
      style={{ scale, x }}
      className="group flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-2xl p-3 border border-amber-100 shadow-sm hover:shadow-md hover:shadow-amber-100 cursor-default"
    >
      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.12 }}
          transition={{ type: "spring", ...SPRING_GENTLE }}
        />
      </div>
      <div>
        <h3 className="font-crimson text-heading-cake text-sm font-semibold mb-0.5">{item.name}</h3>
        <p className="text-amber-700/60 text-xs font-crimson">{item.desc}</p>
      </div>
    </motion.div>
  );
}

// ─── Cheesecake Card ──────────────────────────────────────────────────────────
function CheesecakeCard({ item }: { item: MenuItem }) {
  const scale = useSpring(1, SPRING_SNAPPY);
  const y = useSpring(0, SPRING_GENTLE);

  return (
    <motion.div
      variants={itemVariants}
      onHoverStart={() => { scale.set(1.07); y.set(-6); }}
      onHoverEnd={() => { scale.set(1); y.set(0); }}
      style={{ scale, y }}
      className="text-center cursor-default"
    >
      <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg shadow-rose-100 hover:shadow-rose-200 mb-3">
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", ...SPRING_GENTLE }}
        />
        <div className="absolute inset-0 rounded-full ring-2 ring-rose-200/60 ring-inset" />
      </div>
      <h3 className="font-crimson text-heading-cake text-sm font-semibold mb-1 leading-tight">{item.name}</h3>
      <p className="text-rose-400/70 text-xs font-crimson max-w-[120px] mx-auto">{item.desc}</p>
    </motion.div>
  );
}

// ─── Bento Card ───────────────────────────────────────────────────────────────
function BentoCard({ item }: { item: MenuItem }) {
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(9);
  const scale = useSpring(1, SPRING_SNAPPY);

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onHoverStart={() => scale.set(1.05)}
      onHoverEnd={() => scale.set(1)}
      style={{ rotateX, rotateY, scale, transformPerspective: 600 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md shadow-pink-100 border border-pink-100 hover:shadow-lg hover:shadow-pink-200/60 cursor-default"
    >
      <div className="h-36 overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", ...SPRING_GENTLE }}
        />
      </div>
      <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-0.5 text-[10px] font-bold text-rose-500 uppercase tracking-wider">
        Gift
      </div>
      <div className="p-3">
        <h3 className="font-crimson text-heading-cake text-sm font-semibold">{item.name}</h3>
        <p className="text-pink-400/70 text-xs font-crimson mt-0.5">{item.desc}</p>
      </div>
    </motion.div>
  );
}

// ─── Custom Card — parallax image depth on hover ──────────────────────────────
function CustomCard({ item }: { item: MenuItem }) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  // Image moves opposite to mouse = parallax depth illusion
  const imgX = useSpring(useTransform(rawX, [-0.5, 0.5], [12, -12]), SPRING_WOBBLY);
  const imgY = useSpring(useTransform(rawY, [-0.5, 0.5], [12, -12]), SPRING_WOBBLY);
  const cardScale = useSpring(1, SPRING_SNAPPY);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onHoverStart={() => cardScale.set(1.02)}
      onHoverEnd={() => cardScale.set(1)}
      style={{ scale: cardScale }}
      className="group relative rounded-3xl overflow-hidden shadow-xl shadow-rose-200/40 border border-white/60 cursor-default"
    >
      <div className="h-72 overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          style={{ x: imgX, y: imgY, scale: 1.2 }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#5a2d2d]/80 via-[#5a2d2d]/20 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="font-crimson text-xl font-bold mb-1">{item.name}</h3>
        <p className="text-rose-200 text-sm font-crimson">{item.desc}</p>
      </div>
    </motion.div>
  );
}

// ─── Animated divider ─────────────────────────────────────────────────────────
function AnimatedDivider() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="flex items-center gap-4 px-12 md:px-24 my-2">
      <motion.span
        initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
        style={{ originX: 1 }}
        transition={{ type: "spring", ...SPRING_GENTLE }}
        className="flex-1 h-px bg-linear-to-r from-transparent to-rose-200 block"
      />
      <motion.span
        initial={{ opacity: 0, rotate: -180, scale: 0 }}
        animate={inView ? { opacity: 1, rotate: 0, scale: 1 } : {}}
        transition={{ type: "spring", ...SPRING_SNAPPY, delay: 0.2 }}
        className="text-rose-300 text-2xl inline-block"
      >✦</motion.span>
      <motion.span
        initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
        style={{ originX: 0 }}
        transition={{ type: "spring", ...SPRING_GENTLE }}
        className="flex-1 h-px bg-linear-to-l from-transparent to-rose-200 block"
      />
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function DreamSliceMenuSection() {
  return (
    <>
      <style>{`
        .noise-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      <section className="relative  overflow-hidden font-crimson noise-bg pt-25">
        {/* <MenuHero/> */}
       

        {/* Ambient blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-rose-100 rounded-full blur-[120px] opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-pink-100 rounded-full blur-[100px] opacity-40 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-50 rounded-full blur-[140px] opacity-60 pointer-events-none" />

        {/* ── Hero ── */}
        <div className="relative z-10 text-center  ">

    

          {/* Title — char-by-char spring reveal */}
          <div className="relative w-full h-120 bg--200 grid place-items-center">

 {/* <div className="absolute size-full  grid place-items-center">
        <img className="size-130" src={"/circle-bars.svg"}/>
        </div> */}
        <div className="absolute z-0"> 

        <OsmosCircle circleClassName="stroke-[#fdf6f0] pathClassName"/>
        </div>

            <div className="pt-25">
      
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", ...SPRING_GENTLE }}
            className="font-crimson text-[10px] tracking-[0.4em] uppercase text-rose-400 block mb-4"
          >
            Custom Cakes & Artisanal Desserts
          </motion.span>
          <h1 className="font-crimson text-6xl md:text-8xl text-heading-cake italic mb-1 overflow-hidden">
            <SplitText text="Dream Slice" delay={0.1} staggerDelay={0.04} />
          </h1>
          <h1 className="font-crimson text-6xl md:text-8xl text-heading-cake overflow-hidden">
            <SplitText text="Studio" delay={0.5} staggerDelay={0.05} />
          </h1>
          
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", ...SPRING_GENTLE, delay: 0.8 }}
            className="mt-5 font-crimson italic text-rose-400 text-xl md:text-2xl"
          >
            Crafted to Perfection
          </motion.p>

          {/* Sweep line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ type: "spring", ...SPRING_GENTLE, delay: 1 }}
            style={{ originX: 0.5 }}
            className="mx-auto mt-6 h-px w-40 bg-linear-to-r from-transparent via-rose-300 to-transparent"
          />
        </div>
            </div>
          </div>


        {/* ── Signature Cakes ── */}
        {/* <div className="relative z-10 px-6 md:px-12 lg:px-24 py-16">
          <SectionHeading sub="Handcrafted with Love">Signature Cakes</SectionHeading>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
          >
            {SIGNATURE.map((item) => <CakeCard key={item.name} item={item} />)}
          </motion.div>
        </div> */}

        {/* <AnimatedDivider /> */}

        <OsmosImage/>

        {/* ── Dry / Tea Cakes ── */}
        <div className="relative z-10 px-6 md:px-12 lg:px-24 py-16">
          <SectionHeading sub="Perfect for Tea Time">Dry Cakes</SectionHeading>
      <div className="w-full grid place-items-center py-5">

       <HorizontalImagesStack Items = {DryCakes} />
      </div>
            
         
        </div>
        

        {/* ── Cheesecakes ── */}
        <div className="relative z-10 bg-linear-to-b from-rose-50/80 to-[#fdf6f0] py-20">
          <div className="px-6 md:px-12 lg:px-24">
            <SectionHeading sub="The Silky Collection">Cheesecakes</SectionHeading>
            <div className="w-full grid place-items-center">

       <HorizontalImagesStack Items = {Cheesecakes} />
            </div>

            {/* <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-wrap justify-center gap-x-8 gap-y-10"
            >
              {CHEESECAKES.map((item) => <CheesecakeCard key={item.name} item={item} />)}
            </motion.div> */}
          </div>
        </div>

        {/* ── Bento Cakes ── */}
        <div className="relative z-10 px-6 md:px-12 lg:px-24 py-16">
          <SectionHeading sub="Perfect for Gifting">Bento Cakes</SectionHeading>
           <div className="w-full grid place-items-center">

       <HorizontalImagesStack Items = {BentoCake} />
            </div>
          {/* <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {BENTO.map((item) => <BentoCard key={item.name} item={item} />)}
          </motion.div> */}
        </div>

        {/* ── Custom Cakes ── */}
        {/* <div className="relative z-10 bg-[#5a2d2d] py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <span className="font-crimson text-[20rem] text-white/[0.03] whitespace-nowrap select-none italic">
              Custom
            </span>
          </div>
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", ...SPRING_GENTLE }}
              className="text-center mb-12"
            >
              <span className="inline-block font-crimson text-xs tracking-[0.3em] uppercase text-rose-300 mb-3">
                Made Just For You
              </span>
              <h2 className="font-crimson text-4xl md:text-5xl text-white leading-tight overflow-hidden">
                <SplitText text="Custom Cakes" staggerDelay={0.03} />
              </h2>
              <div className="flex items-center justify-center gap-3 mt-4">
                <span className="h-px w-16 bg-rose-700 block" />
                <span className="text-rose-400 text-lg">✦</span>
                <span className="h-px w-16 bg-rose-700 block" />
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {CUSTOM.map((item) => <CustomCard key={item.name} item={item} />)}
            </motion.div>
          </div>
        </div> */}

        {/* ── CTA ── */}
        <div className="relative z-10  py-14 px-6 text-center ">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", ...SPRING_GENTLE }}
          >
            <p className="font-crimson text-heading-cake text-3xl md:text-4xl italic mb-2">
              Order a slice of happiness
            </p>
            <p className="font-crimson text-rose-400 text-sm tracking-widest uppercase mb-6">
              📍 Sector 23C, Chandigarh &nbsp;·&nbsp; 📸 @dreamslicestudio
            </p>
            {/* Spring press — Emil's pattern: whileTap with spring transition */}
            <motion.a
              href="https://instagram.com/dreamslicestudio"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", ...SPRING_SNAPPY }}
              className="inline-block bg-[#5a2d2d] text-white font-crimson text-sm tracking-widest uppercase px-10 py-4 rounded-full shadow-lg shadow-rose-900/20 hover:bg-rose-900 transition-colors duration-200"
            >
              Order Now
            </motion.a>
          </motion.div>
        </div>

      </section>
    </>
  );
}


const DryCakes  = [
  {
    title: "Banana Walnut Cake",
    img: "DryCake/Banana Walnut Cake_converted",
  },
  {
    title: "Fruit & Nut Dry Cake",
    img: "DryCake/Fruit & Nut Dry Cake_converted",
  },
  {
    title: "Chocolate Chip Dry Cake",
    img: "DryCake/Chocolate Chip Dry Cake_converted",
  },
  {
    title: "Tea Time Butter Cake",
    img: "DryCake/Tea Time Butter Cake_converted",
  },
  {
    title: "Marble Cake",
    img: "DryCake/Marble Cake_converted",
  },
 
  {
    title: "Plum Cake",
    img: "DryCake/Plum Cake_converted",
  },

];
const Cheesecakes = [
  {
    title: "Classic New York Cheesecake",
    img: "CheeseCake/ClassicNewYorkCheesecake_converted",
  },
  {
    title: "Blueberry Cheesecake",
    img: "CheeseCake/BlueberryCheesecake_converted",
  },
  {
    title: "Strawberry Cheesecake",
    img: "CheeseCake/StrawberryCheesecake_converted",
  },
  {
    title: "Chocolate Cheesecake",
    img: "CheeseCake/ChocolateCheesecake_converted",
  },
  {
    title: "Lotus Biscoff Cheesecake",
    img: "CheeseCake/LotusBiscoffCheesecake_converted",
  },
  {
    title: "Mango Cheesecake (Seasonal)",
    img: "CheeseCake/MangoCheesecake_converted",
  },
  {
    title: "Burnt Basque Cheesecake",
    img: "CheeseCake/BurntBasqueCheesecake_converted",
  },
];
const BentoCake = [
  {
    title: "Mini Chocolate Bento",
    img: "BentoCake/MiniChocolateBento_converted",
  },
  {
    title: "Vanilla Celebration Bento",
    img: "BentoCake/VanillaCelebrationBento_converted",
  },
  {
    title: "Red Velvet Bento",
    img: "BentoCake/RedVelvetBento_converted",
  },
  {
    title: "Custom Message Bento",
    img: "BentoCake/CustomMessageBento_converted",
  },
  {
    title: "Birthday Theme Bento",
    img: "BentoCake/BirthdayThemeBento_converted",
  },
  {
    title: "Anniversary Special Bento",
    img: "BentoCake/AnniversarySpecialBento_converted",
  },
];