import React from 'react';
import { motion } from 'framer-motion';
import { SEEL_PILLARS } from '../data/schoolData';
import { Users, Heart, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

const iconComponents: Record<string, React.ReactNode> = {
  Users: <Users className="w-8 h-8 text-forest-800" />,
  Heart: <Heart className="w-8 h-8 text-gold-600" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-sage-500" />,
};

export const SEELSection: React.FC = () => {
  return (
    <section id="seel" className="py-24 bg-ivory-200 text-charcoal-900 relative overflow-hidden">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-forest-700 text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-500" />
            BEYOND GRADES • SEEL PEDAGOGY
          </span>
          <h2 className="heading-section font-serif text-forest-900 font-normal">
            Strong Minds. Kind Hearts.{' '}
            <span className="block italic text-gold-600 font-light">
              Confident Individuals.
            </span>
          </h2>
          <p className="text-charcoal-700 text-base sm:text-lg font-light leading-relaxed">
            Pavna integrates Social, Emotional & Ethical Learning (SEEL) into daily campus life, ensuring students grow with self-awareness, compassion, and unshakeable moral clarity.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {SEEL_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="bg-ivory-100 rounded-3xl p-8 sm:p-10 shadow-editorial border border-forest-800/10 flex flex-col justify-between relative group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Pillar Header & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-ivory-200 flex items-center justify-center border border-forest-800/10 shadow-sm group-hover:scale-105 transition-transform">
                    {iconComponents[pillar.iconName]}
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-gold-600 uppercase bg-gold-500/10 px-3 py-1 rounded-full">
                    PILLAR 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-forest-900">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-semibold text-gold-600">
                    "{pillar.subtitle}"
                  </p>
                  <p className="text-sm text-charcoal-700 font-light leading-relaxed pt-1">
                    {pillar.description}
                  </p>
                </div>

                {/* Bullets */}
                <div className="space-y-2.5 pt-4 border-t border-forest-800/10">
                  {pillar.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-charcoal-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Accent Bottom Bar */}
              <div className="w-full h-1.5 rounded-full mt-8 bg-gradient-to-r from-forest-800 via-gold-500 to-sage-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
