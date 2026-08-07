'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';

// ---------------------------------------------------------------------------
// Swap in your real testimonials here. Photos are read from /public/ttss/1.png,
// /public/ttss/2.png, etc. — index is derived automatically from array order.
// ---------------------------------------------------------------------------
type Testimonial = {
  name: string;
  location: string;
  quote: string;
  rating: number; // 1-5
};

const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    location: 'Regular since 2022',
    quote:
      "The cardamom buns disappear before they even cool down at home. Ordering three dozen for my sister's wedding was the easiest decision all season.",
    rating: 5,
  },
  {
    name: 'Arjun Mehta',
    location: 'Weekend regular',
    quote:
      "I've tried croissants across the city. This is the only place that gets the layers right — crisp outside, soft honeycomb inside.",
    rating: 5,
  },
  {
    name: 'Simran Kaur',
    location: 'First-time visitor',
    quote:
      'Walked in for one slice of banana bread, walked out with a box for the whole office. No regrets.',
    rating: 5,
  },
  {
    name: 'Rohan Das',
    location: 'Birthday cake client',
    quote:
      "They matched my daughter's drawing on the cake almost stroke for stroke. She cried happy tears — so did I, honestly.",
    rating: 5,
  },
  {
    name: 'Meera Iyer',
    location: 'Loyalty member',
    quote:
      "Fresh sourdough every Saturday, 8am sharp, rain or shine. It's basically part of my weekend now.",
    rating: 4,
  },
  {
    name: 'Kabir Anand',
    location: 'Corporate orders',
    quote:
      'Booked catering for 40 people with two days notice. Everything arrived warm and exactly on time.',
    rating: 5,
  },
];

const TAPE_COLORS = ['bg-[#C68A3D]/80', 'bg-[#D98A8A]/80'];
const ROTATIONS = ['-rotate-3', 'rotate-2', '-rotate-2', 'rotate-3', 'rotate-1', '-rotate-1'];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-3.5 w-3.5 ${i < rating ? 'fill-[#C68A3D]' : 'fill-[#3B2A20]/15'}`}
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function BakeryTestimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Track which card is centered so the dots + progress feel alive
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let frame: number;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const cardWidth = el.firstElementChild
          ? (el.firstElementChild as HTMLElement).offsetWidth + 16 // gap-4
          : 1;
        const index = Math.round(el.scrollLeft / cardWidth);
        setActiveIndex(Math.min(index, testimonials.length - 1));
      });
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement | undefined;
    if (card) {
      el.scrollTo({ left: card.offsetLeft - 20, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative mx-auto w-full max-w-md overflow-hidden bg-[#FAF3E9] px-5 pb-14 pt-12">
      {/* corkboard texture strip behind the carousel */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[132px] h-[300px] opacity-[0.35]"
        style={{
          backgroundColor: '#EDE0C8',
          backgroundImage:
            'radial-gradient(#3B2A20 0.6px, transparent 0.6px), radial-gradient(#3B2A20 0.6px, transparent 0.6px)',
          backgroundSize: '18px 18px',
          backgroundPosition: '0 0, 9px 9px',
        }}
      />

      {/* header */}
      <div className="relative mb-8 text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C68A3D]">
          From our regulars
        </span>
        <h2 className="mt-2 font-serif text-[28px] leading-tight text-[#3B2A20]">
          Pinned to our corkboard
        </h2>
        <p className="mt-2 text-[13px] text-[#3B2A20]/60">
          Real notes from people who've been back for seconds
        </p>
      </div>

      {/* carousel */}
      <div
        ref={scrollerRef}
        onTouchStart={() => setHasInteracted(true)}
        onScroll={() => setHasInteracted(true)}
        className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t, i) => (
          <motion.article
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08, ease: 'easeOut' }}
            whileTap={{ scale: 0.97 }}
            className="relative w-[78%] flex-shrink-0 snap-center rounded-[6px] bg-white p-4 pb-5 shadow-[0_10px_24px_-8px_rgba(59,42,32,0.25)]"
          >
            {/* washi tape */}
            <span
              className={`absolute -top-3 left-1/2 h-6 w-14 -translate-x-1/2 ${TAPE_COLORS[i % 2]} ${ROTATIONS[i % ROTATIONS.length]} shadow-sm`}
              style={{ clipPath: 'polygon(4% 0, 96% 0, 100% 100%, 0 100%)' }}
            />

            {/* polaroid photo */}
            <div className={`mx-auto w-[70%] bg-white p-2 pb-4 shadow-sm ${ROTATIONS[(i + 2) % ROTATIONS.length]}`}>
              <div className="aspect-square w-full overflow-hidden bg-[#EDE0C8]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/ttss/${i + 1}.png`}
                  alt={`${t.name} at the bakery`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="mt-4 font-serif text-[15px] leading-snug text-[#3B2A20]">
              "{t.quote}"
            </p>

            <div className="mt-4 flex items-center justify-between border-t border-[#3B2A20]/10 pt-3">
              <div>
                <p className="text-[13px] font-semibold text-[#3B2A20]">{t.name}</p>
                <p className="text-[11px] text-[#3B2A20]/50">{t.location}</p>
              </div>
              <Stars rating={t.rating} />
            </div>
          </motion.article>
        ))}
      </div>

      {/* swipe hint, fades out after first interaction */}
      <motion.div
        animate={hasInteracted ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="pointer-events-none mt-1 flex items-center justify-center gap-2 text-[11px] text-[#3B2A20]/45"
      >
        <motion.span
          animate={{ x: [0, -8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          ←
        </motion.span>
        Swipe for more
        <motion.span
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          →
        </motion.span>
      </motion.div>

      {/* dots */}
      <div className="mt-5 flex items-center justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => scrollToIndex(i)}
            className="p-1"
          >
            <motion.span
              animate={{
                width: activeIndex === i ? 20 : 6,
                backgroundColor: activeIndex === i ? '#C68A3D' : '#3B2A2033',
              }}
              transition={{ duration: 0.25 }}
              className="block h-1.5 rounded-full"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
