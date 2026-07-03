"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

// ── SVG Icons ────────────────────────────────────────────────────────────────
const CakeTierIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
    <circle cx="28" cy="28" r="26" strokeDasharray="3 3" />
    <rect x="14" y="30" width="28" height="12" rx="2" />
    <rect x="18" y="22" width="20" height="8" rx="1" />
    <path d="M22 22v-3m6 3v-4m6 3v-3" strokeLinecap="round" />
    <path d="M22 18c0-2 3-2 3-4" strokeLinecap="round" />
    <path d="M14 36h28" />
  </svg>
);

const BowlIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
    <circle cx="28" cy="28" r="26" strokeDasharray="3 3" />
    <path d="M18 26c0 6 4.5 10 10 10s10-4 10-10" />
    <path d="M16 26h24" strokeLinecap="round" />
    <path d="M32 18c-1-2 1-4 0-6" strokeLinecap="round" />
    <path d="M28 34v4" strokeLinecap="round" />
  </svg>
);

const PipingBagIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
    <circle cx="28" cy="28" r="26" strokeDasharray="3 3" />
    <path d="M20 16l16 8-8 16-10-10 2-14z" />
    <path d="M28 40l2 4M30 44l-4 0" strokeLinecap="round" />
    <path d="M20 16l4-4 12 4" strokeLinecap="round" />
  </svg>
);

const HeartOutlineIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
    <circle cx="28" cy="28" r="26" strokeDasharray="3 3" />
    <path d="M28 38s-12-8-12-16a8 8 0 0116 0 8 8 0 0116 0c0 8-12 16-12 16h-8z" />
  </svg>
);

const QuoteLeft = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7 opacity-40">
    <path d="M0 16C0 7.163 7.163 0 16 0v6C10.477 6 6 10.477 6 16v2h6v14H0V16zm18 0C18 7.163 25.163 0 34 0v6c-5.523 0-10 4.477-10 10v2h6v14H18V16z" />
  </svg>
);

// ── Pastry divider ───────────────────────────────────────────────────────────
const PastryDivider = () => (
  <svg viewBox="0 0 200 20" className="w-40 h-4 mx-auto" fill="none">
    <line x1="0" y1="10" x2="80" y2="10" stroke="#c97a7a" strokeWidth="0.8" strokeDasharray="2 3" />
    <path d="M92 10 C94 6 96 5 100 5 C104 5 106 6 108 10 C106 14 104 15 100 15 C96 15 94 14 92 10Z"
      stroke="#c97a7a" strokeWidth="0.8" fill="none" />
    <line x1="120" y1="10" x2="200" y2="10" stroke="#c97a7a" strokeWidth="0.8" strokeDasharray="2 3" />
  </svg>
);

// ── Data ─────────────────────────────────────────────────────────────────────
const pillars = [
  {
    icon: <CakeTierIcon />,
    label: "BESPOKE CREATIONS",
    desc: "Every cake is uniquely designed for your story, style, and moment.",
  },
  {
    icon: <BowlIcon />,
    label: "PREMIUM INGREDIENTS",
    desc: "We use only the finest ingredients to deliver exceptional taste in every bite.",
  },
  {
    icon: <PipingBagIcon />,
    label: "REFINED AESTHETICS",
    desc: "Clean, elegant, and timeless designs that turn your dessert into a work of art.",
  },
  {
    icon: <HeartOutlineIcon />,
    label: "MADE WITH LOVE",
    desc: "Crafted by hand, with passion in every detail.",
  },
];

// ── Animation helpers ────────────────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: import("motion/react").Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.1 },
  }),
};

// ── Animated section wrapper ─────────────────────────────────────────────────
function InViewSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function DreamSliceAbout() {
  const pillarsRef = useRef(null);
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-60px" });

  return (
    <div
      className="min-h-screen font-serif overflow-x-hidden"
      // style={{
      //   background: "linear-gradient(160deg,#fdf6f0 0%,#fde8e8 50%,#fdf0f5 100%)",
      // }}
    >
      {/* ── navbar placeholder ── */}
      <div className="h-20 border-b border-[#f0d8d8]/60" />

      {/* ── hero headline ────────────────────────────────────────────── */}
      <section className="pt-10 sm:pt-10 pb-6 text-center px-4 sm:px-6">
        {/* label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[10px] sm:text-lg tracking-[0.35em] text-heading-cake mb-4 font-sans font-medium"
        >
          + &nbsp; ABOUT US &nbsp; +
        </motion.p>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl text-heading-cake leading-[1.15] tracking-tight"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          More than cakes,
          <br />
          we create{" "}
          <span
            className="italic"
            style={{
              fontFamily: "'Brush Script MT', cursive, serif",
              color: "#b85c5c",
            }}
          >
            memories.
          </span>
          <span
            className="inline-block ml-3 text-3xl align-middle"
            style={{ color: "#b85c5c", fontFamily: "Georgia, serif" }}
          >
            ♡
          </span>
        </motion.h1>

        {/* divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-6"
        >
          <PastryDivider />
        </motion.div>
      </section>

      {/* ── body paragraphs ──────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-12 text-center space-y-6">
        {[
          "Founded in 2023, DreamSlice Studio is a boutique home-based bakery built on a passion for refined aesthetics, thoughtful design, and exceptional taste. What began as a simple vision has grown into a creative studio dedicated to turning desserts into experiences.",
          "We specialize in bespoke cakes and premium desserts, designed to complement your most meaningful moments. From elegant wedding cakes to refined celebrations, every piece balances visual artistry with rich, indulgent flavor.",
        ].map((para, i) => (
          <InViewSection key={i}>
            <p
              className="text-sm sm:text-[15px] text-[#9a6a6a] leading-[1.9] font-sans"
            >
              {para}
            </p>
          </InViewSection>
        ))}

        {/* last paragraph with italic highlight */}
        <InViewSection>
          <p className="text-sm sm:text-[15px] text-[#9a6a6a] leading-[1.9] font-sans">
            At DreamSlice Studio, every detail matters. Each creation is crafted with
            high-quality ingredients and a commitment to elegance, ensuring your dessert
            is not just served —{" "}
            <span
              className="italic"
              style={{
                fontFamily: "'Brush Script MT', cursive, serif",
                color: "#b85c5c",
                fontSize: "1.1em",
              }}
            >
              but remembered.
            </span>
          </p>
        </InViewSection>
      </section>

      {/* ── pillars grid ─────────────────────────────────────────────── */}
      <section
        className="border-t border-[#f0d8d8]"
        style={{ background: "rgba(255,255,255,0.25)" }}
      >
        <div
          ref={pillarsRef}
          className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#f0d8d8]"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              variants={fadeUp}
              initial="hidden"
              animate={pillarsInView ? "visible" : "hidden"}
              custom={i}
              className="flex flex-col items-center text-center px-5 sm:px-8 py-10 sm:py-14 gap-3"
            >
              {/* icon bubble */}
              <div
                className="text-heading-cake mb-2"
                style={{ color: "#b85c5c" }}
              >
                {p.icon}
              </div>

              {/* label */}
              <p
                className="text-[10px] sm:text-[11px] tracking-[0.25em] font-sans font-semibold text-heading-cake"
                style={{ color: "#b85c5c" }}
              >
                {p.label}
              </p>

              {/* heart pip */}
              <span className="text-[#c97a7a] text-xs leading-none">♥</span>

              {/* description */}
              <p className="text-[12.5px] sm:text-sm text-[#9a6a6a] font-sans leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── quote banner ─────────────────────────────────────────────── */}
      <section
        className="border-t border-[#f0d8d8] px-4 sm:px-8 py-10 sm:py-14 text-center"
        // style={{ background: "rgba(253,240,240,0.5)" }}
      >
        <InViewSection className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
          <span className="text-heading-cake" style={{ color: "#b85c5c" }}>
            <QuoteLeft />
          </span>

          <p
            className="text-lg sm:text-2xl md:text-3xl text-heading-cake leading-snug"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Thoughtful design. Exceptional taste.{" "}
            <span
              className="italic"
              style={{
                fontFamily: "'Brush Script MT', cursive, serif",
                color: "#b85c5c",
              }}
            >
              Unforgettable moments.
            </span>
          </p>

          {/* closing quote — mirrored */}
          <span
            className="text-heading-cake rotate-180 inline-block"
            style={{ color: "#b85c5c" }}
          >
            <QuoteLeft />
          </span>
        </InViewSection>

        {/* divider below quote */}
        <div className="mt-6">
          <PastryDivider />
        </div>
      </section>
    </div>
  );
}
