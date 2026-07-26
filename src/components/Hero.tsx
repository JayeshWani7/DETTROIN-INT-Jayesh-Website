import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Compass, ChevronDown, CheckCircle2 } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeroProps {
  onOpenApplyModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApplyModal }) => {
  return (
    <section className="relative min-h-screen w-full bg-forest-950 text-ivory-100 overflow-hidden flex flex-col justify-between pt-36 pb-12 lg:pt-44">
      {/* Background Image with Dark Emerald Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85"
          alt="Pavna School Campus Aligarh"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/90 to-forest-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-forest-950/70" />
      </div>

      {/* Decorative Gold Radial Light */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-800/80 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-widest uppercase backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>EST. 1998 • ALIGARH • CBSE AFFILIATED</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-2"
            >
              <h1 className="heading-hero font-serif font-normal tracking-tight text-ivory-100">
                Be Yourself.{' '}
                <span className="block italic text-gold-400 font-serif font-light mt-1">
                  Become More.
                </span>
              </h1>
            </motion.div>

            {/* Supporting paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-ivory-300 font-light max-w-2xl leading-relaxed"
            >
              An environment where curiosity becomes confidence, learning becomes discovery, and every child is encouraged to find their own authentic path.
            </motion.p>

            {/* CTAs & Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onOpenApplyModal}
                className="group px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold text-base transition-all duration-300 shadow-gold-glow flex items-center gap-3"
              >
                <span>Admissions 2026–27</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#about"
                className="px-7 py-4 rounded-full bg-forest-900/80 hover:bg-forest-800 border border-ivory-100/20 text-ivory-100 font-medium text-base transition-all duration-300 backdrop-blur-md flex items-center gap-2"
              >
                <Compass className="w-5 h-5 text-gold-400" />
                <span>Explore Pavna</span>
              </a>

              {/* Admission Open Badge */}
              <div className="flex items-center gap-2 text-xs text-gold-400 bg-gold-500/10 px-3.5 py-2 rounded-full border border-gold-500/20">
                <CheckCircle2 className="w-4 h-4 text-gold-500" />
                <span className="font-semibold">Limited Seats Available</span>
              </div>
            </motion.div>

            {/* Former DPS mention note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-xs text-forest-300 pt-2 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
              <span>{SCHOOL_INFO.formerName} • Founded by {SCHOOL_INFO.founder}</span>
            </motion.div>

          </div>

          {/* Right Column: Editorial Visual Card Showcase */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="relative rounded-3xl overflow-hidden border border-gold-500/30 p-2 bg-gradient-to-b from-gold-500/20 to-transparent shadow-editorial-hover"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80"
                  alt="Student discovery at Pavna School"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-forest-950/80 backdrop-blur-md border border-ivory-100/10 space-y-2">
                  <div className="flex items-center justify-between text-xs text-gold-400 font-semibold tracking-wider uppercase">
                    <span>SEEL & AI CURRICULUM</span>
                    <span>28+ YEARS LEGACY</span>
                  </div>
                  <h3 className="font-serif text-xl text-ivory-100 font-normal">
                    "Where curiosity becomes confidence."
                  </h3>
                  <p className="text-xs text-ivory-300 font-light">
                    CBSE affiliated institution combining academic rigor with emotional intelligence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9, repeat: Infinity, repeatType: 'reverse' }}
        className="relative z-10 max-w-7xl mx-auto px-4 text-center pt-8"
      >
        <a
          href="#legacy"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-400/80 hover:text-gold-400 uppercase transition-colors"
        >
          <span>Discover Pavna</span>
          <ChevronDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
};
