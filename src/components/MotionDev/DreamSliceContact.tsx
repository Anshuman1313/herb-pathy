"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

// ── tiny SVG icons ──────────────────────────────────────────────────────────
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="M2 8l10 7 10-7" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1L6.6 10.8z" />
  </svg>
);
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M12 21s-7-6.75-7-11a7 7 0 1114 0c0 4.25-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const CakeIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-8 h-8">
    <rect x="4" y="16" width="24" height="12" rx="2" />
    <rect x="8" y="10" width="16" height="6" rx="1" />
    <path d="M12 10V8m4 2V7m4 2V8" strokeLinecap="round" />
    <path d="M12 6c0-1.5 2-1.5 2-3s2-1.5 2 0" strokeLinecap="round" />
    <path d="M8 22h16" />
  </svg>
);
const LeafIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-8 h-8">
    <path d="M8 24c0 0 2-12 14-14C22 10 20 22 8 24z" />
    <path d="M8 24L16 16" strokeLinecap="round" />
  </svg>
);
const HeartIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-8 h-8">
    <path d="M16 27S4 19.5 4 11.5A6.5 6.5 0 0116 8a6.5 6.5 0 0112 3c0 8-12 16-12 16z" />
  </svg>
);
const SparkleIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-8 h-8">
    <path d="M16 4v5M16 23v5M4 16h5M23 16h5" strokeLinecap="round" />
    <path d="M7.8 7.8l3.5 3.5M20.7 20.7l3.5 3.5M7.8 24.2l3.5-3.5M20.7 11.3l3.5-3.5" strokeLinecap="round" />
    <circle cx="16" cy="16" r="3.5" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.76 1.24-5.26 1.24-5.26s-.32-.63-.32-1.57c0-1.47.86-2.57 1.92-2.57.91 0 1.35.68 1.35 1.5 0 .91-.58 2.28-.88 3.55-.25 1.06.53 1.93 1.57 1.93 1.89 0 3.16-2.43 3.16-5.3 0-2.19-1.49-3.85-4.18-3.85-3.05 0-4.95 2.28-4.95 4.84 0 .88.26 1.5.66 1.97.18.21.2.3.14.54-.05.17-.16.58-.2.74-.07.24-.28.33-.51.24-1.41-.58-2.06-2.15-2.06-3.91 0-2.9 2.44-6.38 7.27-6.38 3.9 0 6.47 2.84 6.47 5.89 0 4.03-2.24 7.05-5.53 7.05-1.1 0-2.15-.6-2.5-1.27l-.68 2.64c-.25.95-.92 2.13-1.37 2.86.7.21 1.44.33 2.2.33 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M17.47 14.38c-.28-.14-1.66-.82-1.92-.91-.26-.09-.44-.14-.63.14-.19.28-.72.91-.88 1.1-.16.19-.32.21-.6.07-.28-.14-1.18-.43-2.24-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.12.28-.32.42-.48.14-.16.19-.28.28-.46.1-.18.05-.35-.02-.49-.07-.14-.63-1.52-.87-2.08-.23-.55-.46-.47-.63-.48l-.54-.01c-.19 0-.49.07-.74.35-.26.28-1 .98-1 2.38s1.02 2.76 1.16 2.95c.14.18 2 3.06 4.85 4.29.68.29 1.2.47 1.62.6.68.21 1.3.18 1.79.11.55-.08 1.66-.68 1.9-1.33.23-.65.23-1.21.16-1.33-.07-.12-.25-.18-.54-.32z" />
    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.07-1.33C8.44 21.52 10.18 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);

// ── decorative divider ───────────────────────────────────────────────────────
const PastryDivider = () => (
  <svg viewBox="0 0 200 20" className="w-40 h-4 mx-auto" fill="none">
    <line x1="0" y1="10" x2="80" y2="10" stroke="#c97a7a" strokeWidth="0.8" strokeDasharray="2 3" />
    <path d="M92 10 C94 6 96 5 100 5 C104 5 106 6 108 10 C106 14 104 15 100 15 C96 15 94 14 92 10Z" stroke="#c97a7a" strokeWidth="0.8" fill="none" />
    <line x1="120" y1="10" x2="200" y2="10" stroke="#c97a7a" strokeWidth="0.8" strokeDasharray="2 3" />
  </svg>
);

// ── contact info rows ────────────────────────────────────────────────────────
const contactItems = [
  { icon: <MailIcon />, label: "EMAIL", value: "dreamslicestudio@gmail.com" },
  { icon: <PhoneIcon />, label: "PHONE", value: "+91 62842 19963" },
  {
    icon: <MapPinIcon />,
    label: "STUDIO",
    value: "Sector 23, Chandigarh | Vista Tower Sector 75, Mohali",
  },
  {
    icon: <ClockIcon />,
    label: "HOURS",
    value: "Mon – Fri : 10:00 AM – 7:00 PM\nSat – Sun : 10:00 AM – 6:00 PM\nBy Appointment",
  },
];

const badges = [
  { icon: <CakeIcon />, label: "CUSTOM\nCAKES" },
  { icon: <LeafIcon />, label: "QUALITY\nINGREDIENTS" },
  { icon: <HeartIcon />, label: "MADE\nWITH LOVE" },
  { icon: <SparkleIcon />, label: "MEMORABLE\nMOMENTS" },
];
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: import("motion/react").Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay: i * 0.1 },
  }),
};
// ── fade-up variant ──────────────────────────────────────────────────────────
// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
//   }),
// };

// ── Input / Textarea helpers ─────────────────────────────────────────────────
function Field({ placeholder, className = "" }: { placeholder: string; className?: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <motion.input
      type="text"
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      animate={{ borderColor: focused ? "#b85c5c" : "#e8d5d5" }}
      transition={{ duration: 0.2 }}
      className={`w-full bg-white/70 rounded-xl px-4 py-3.5 text-[13px] tracking-widest uppercase placeholder-[#c4a0a0] text-heading-cake border outline-none font-medium ${className}`}
      style={{ borderWidth: 1 }}
    />
  );
}

function TextareaField({ placeholder }: { placeholder: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <motion.textarea
      placeholder={placeholder}
      rows={5}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      animate={{ borderColor: focused ? "#b85c5c" : "#e8d5d5" }}
      transition={{ duration: 0.2 }}
      className="w-full bg-white/70 rounded-xl px-4 py-3.5 text-[13px] tracking-widest uppercase placeholder-[#c4a0a0] text-heading-cake border outline-none resize-none font-medium"
      style={{ borderWidth: 1 }}
    />
  );
}

// ── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function DreamSliceContact() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <div
      className="min-h-screen font-serif overflow-x-hidden"
      // style={{ background: "linear-gradient(160deg,#fdf6f0 0%,#fde8e8 50%,#fdf0f5 100%)" }}
    >
      {/* ── navbar placeholder ── */}
      <div className="h-20 border-b border-[#f0d8d8]/60" />

      {/* ── hero headline ────────────────────────────────────────────── */}
      <section className="pt-10 sm:pt-2 pb-8 sm:pb-10 text-center px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[10px] sm:text-lg tracking-[0.35em] text-heading-cake mb-3  font-sans font-medium"
        >
          + &nbsp; CONTACT US &nbsp; +
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading-cake leading-tight px-2"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Let's create something{" "}
          <span
            className="italic"
            style={{ fontFamily: "'Brush Script MT', cursive, serif", color: "#b85c5c" }}
          >
            sweet
          </span>{" "}
          together.
          <span className="ml-2 inline-block text-2xl sm:text-3xl" style={{ color: "#b85c5c" }}>♡</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 sm:mt-2"
        >
          <PastryDivider />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.55 }}
          className="mt-2 sm:mt-1 text-sm sm:text-[15px] text-[#9a6a6a] leading-relaxed font-sans px-2"
        >
          Have a cake in mind? We'd love to hear all about it.<br className="hidden sm:block" />
          {" "}Share your ideas and let us bake your dream into reality.
        </motion.p>
      </section>

      {/* ── two-column content ───────────────────────────────────────── */}
      <section
        ref={sectionRef}
        className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start"
      >
        {/* LEFT – contact info */}
        <div className="lg:sticky lg:top-6">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            className="text-xs tracking-[0.3em] text-heading-cake font-sans font-semibold mb-6 flex items-center gap-2"
          >
            LET'S CONNECT <span className="text-[#b85c5c]">♥</span>
          </motion.p>

          <div className="space-y-1 mb-8">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i + 1}
                className="flex items-start gap-4 py-4 border-b border-[#f0d8d8]"
              >
                {/* icon bubble */}
                <div
                  className="w-11 h-11 rounded-full border border-[#e8cccc] flex items-center justify-center text-heading-cake shrink-0"
                  style={{ background: "rgba(255,255,255,0.65)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.25em] font-sans font-semibold text-heading-cake mb-0.5">
                    {item.label}
                  </p>
                  <p
                    className="text-[13px] text-[#9a6a6a] font-sans leading-relaxed whitespace-pre-line"
                  >
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* bake-with-love card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={5}
            className="rounded-2xl border border-[#e8cccc] px-5 py-4 flex items-start gap-4"
            style={{ background: "rgba(255,240,240,0.55)" }}
          >
            {/* tiny cake SVG */}
            <svg viewBox="0 0 40 40" fill="none" stroke="#b85c5c" strokeWidth="1.3" className="w-10 h-10 shrink-0 mt-0.5">
              <rect x="6" y="22" width="28" height="12" rx="2" />
              <rect x="10" y="15" width="20" height="7" rx="1" />
              <path d="M15 15v-3m5 3v-4m5 4v-3" strokeLinecap="round" />
              <path d="M15 10c0-2 2.5-2 2.5-4" strokeLinecap="round" />
              <path d="M10 28h20" />
            </svg>
            <div>
              <p
                className="text-sm font-medium text-heading-cake flex items-center gap-1 mb-1"
                style={{ fontFamily: "'Brush Script MT', cursive, serif", fontSize: "1.1rem" }}
              >
                We bake with love ♡
              </p>
              <p className="text-[12.5px] text-[#9a6a6a] font-sans leading-relaxed">
                Please place your orders 3–5 days in advance.
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT – contact form */}
               {/* RIGHT – DM contact */}
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            className="text-xs tracking-[0.3em] text-heading-cake font-sans font-semibold mb-6 flex items-center gap-2"
          >
            REACH OUT TO US <span className="text-[#b85c5c]">♥</span>
          </motion.p>

          {/* decorative line */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.5}
            className="w-8 h-0.5 bg-[#d4a0a0] mb-6 rounded-full"
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
          >
            {/* headline */}
            <p
              className="mb-2 text-[#3D1515]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.65rem", fontWeight: 400, lineHeight: 1.35 }}
            >
              Slide into our DMs —<br />we'd love to hear from you.
            </p>
            <p className="text-[12px] text-[#9a6a6a] font-sans leading-relaxed mb-8">
              Tell us about your dream cake, ask a question, or just say hi.<br />
              We reply fast — usually within a few hours.
            </p>

            {/* Instagram DM button */}
            <motion.a
              href="https://www.instagram.com/dreamslicestudio/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, boxShadow: "0 6px 24px rgba(176,80,80,0.12)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl border border-[#e8cccc] mb-3 no-underline"
              style={{ background: "rgba(255,255,255,0.62)" }}
            >
              {/* Instagram gradient icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)" }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-[11px] tracking-[0.15em] font-sans font-semibold text-heading-cake mb-0.5">INSTAGRAM DM</p>
                <p className="text-[12.5px] text-[#9a6a6a] font-sans">@dreamslicestudio</p>
              </div>
              <span className="text-[#b85c5c] text-base opacity-70">→</span>
            </motion.a>

            {/* WhatsApp button */}
            <motion.a
              href="https://wa.me/916284219963"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, boxShadow: "0 6px 24px rgba(176,80,80,0.12)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl border border-[#e8cccc] no-underline"
              style={{ background: "rgba(255,255,255,0.62)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "#25D366" }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-[11px] tracking-[0.15em] font-sans font-semibold text-heading-cake mb-0.5">WHATSAPP</p>
                <p className="text-[12.5px] text-[#9a6a6a] font-sans">+91 62842 19963</p>
              </div>
              <span className="text-[#b85c5c] text-base opacity-70">→</span>
            </motion.a>

            {/* response time note */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b85c5c] opacity-40" />
              <p className="text-[10.5px] font-sans tracking-wide text-[#a05050]">Typically replies within a few hours</p>
              <span className="w-1.5 h-1.5 rounded-full bg-[#b85c5c] opacity-40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── value badges strip ───────────────────────────────────────── */}
      <div className="border-t border-b border-[#f0d8d8]" style={{ background: "rgba(255,255,255,0.35)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5 sm:py-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="flex flex-col items-center gap-2 text-center text-heading-cake py-3"
            >
              {b.icon}
              <p className="text-[10.5px] tracking-[0.22em] font-sans font-semibold whitespace-pre-line leading-relaxed">
                {b.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
