'use client';

import { ReactHTMLElement, useEffect, useRef } from 'react';
import { motion, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const springConfig = { stiffness: 150, damping: 20 };

function GlowCard({ children, containerRef }:{children:any, containerRef: any}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handlePointerMove = (e:any) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      springX.set(e.clientX - rect.left - rect.width / 2);
      springY.set(e.clientY - rect.top - rect.height / 2);
    };

    container.addEventListener('pointermove', handlePointerMove);
    return () => container.removeEventListener('pointermove', handlePointerMove);
  }, [containerRef, springX, springY]);

  return (
    <article
      ref={cardRef}
      className="relative w-[300px] aspect-[4/3] rounded-xl outline-2 outline-white/14 bg-white/7"
    >
      <div
        className="absolute inset-0 rounded-xl overflow-hidden grid place-items-center"
      >
        <motion.div
          className="absolute inset-0 grid place-items-center scale-[3.4] opacity-25 blur-xl brightness-125 saturate-200"
          style={{
            x: springX,
            y: springY,
          }}
        >
          <div className="w-[100px]">{children}</div>
        </motion.div>

        <div className="relative z-[2] w-[100px]">{children}</div>
      </div>

      <div
        className="absolute inset-0 rounded-xl pointer-events-none z-[2]"
        style={{
          border: '3px solid transparent',
          backdropFilter: 'saturate(4.2) brightness(2.5) contrast(2.5)',
          mask:
            'linear-gradient(#fff 0 100%) border-box,' +
            'linear-gradient(#fff 0 100%) padding-box',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          transform: 'translateZ(0)',
        }}
      />
    </article>
  );
}

export function GlowCards() {
  const containerRef = useRef(null);
  return (
    <div
      ref={containerRef}
      className="flex gap-8 flex-wrap justify-center py-16"
    >
      <GlowCard containerRef={containerRef}>
        <ArrowRight/>
      </GlowCard>
    </div>
  );
}