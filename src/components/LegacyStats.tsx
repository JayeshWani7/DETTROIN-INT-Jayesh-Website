import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LEGACY_STATS } from '../data/schoolData';

const AnimatedCounter: React.FC<{ target: number; suffix: string }> = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // ms
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-serif font-bold tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const LegacyStats: React.FC = () => {
  return (
    <section id="legacy" className="py-20 bg-forest-900 text-ivory-100 relative overflow-hidden border-t border-b border-gold-500/20">
      {/* Background subtle geometric patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
            SINCE 1998 • ALIGARH
          </span>
          <h2 className="heading-section font-serif text-ivory-100 font-normal">
            A Legacy Built Around Learners.
          </h2>
          <p className="text-forest-200 text-base font-light">
            Founded with a vision to revolutionize school education, Pavna has empowered generations of confident leaders.
          </p>
        </div>

        {/* Counter Display Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 items-start divide-y md:divide-y-0 md:divide-x divide-gold-500/20">
          {LEGACY_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col items-center text-center pt-6 md:pt-0 ${
                idx !== 0 ? 'md:pl-6' : ''
              }`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl text-gold-400 font-serif mb-2">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </div>
              <h3 className="font-sans font-bold text-sm sm:text-base text-ivory-100 tracking-wide uppercase">
                {stat.label}
              </h3>
              <p className="text-xs text-forest-300 font-light mt-1">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
