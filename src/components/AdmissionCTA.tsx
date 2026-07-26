import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, CheckCircle2 } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface AdmissionCTAProps {
  onOpenApplyModal: () => void;
}

export const AdmissionCTA: React.FC<AdmissionCTAProps> = ({ onOpenApplyModal }) => {
  return (
    <section className="py-24 bg-forest-950 text-ivory-100 relative overflow-hidden border-t border-gold-500/20">
      
      {/* Background Campus Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=80"
          alt="Pavna School Grounds"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/90 to-forest-950" />
      </div>

      {/* Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-widest uppercase"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>ADMISSIONS OPEN • SESSION {SCHOOL_INFO.admissionsSession}</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-section font-serif font-normal text-ivory-100 max-w-3xl mx-auto"
        >
          Every Great Journey Begins With Curiosity.
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-forest-200 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed"
        >
          Discover an environment designed to help your child learn, explore, and become their best self.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-4 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onOpenApplyModal}
            className="group px-9 py-4 rounded-full bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold text-base transition-all duration-300 shadow-gold-glow flex items-center gap-3"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenApplyModal}
            className="px-8 py-4 rounded-full bg-forest-900 hover:bg-forest-800 border border-ivory-100/20 text-ivory-100 font-medium text-base transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-5 h-5 text-gold-400" />
            <span>Download Prospectus</span>
          </button>
        </motion.div>

        {/* Trust Badges */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-forest-300 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-gold-500" />
            CBSE Board Affiliated
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-gold-500" />
            Day & Boarders Welcome
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-gold-500" />
            GPS Bus Fleet
          </span>
        </div>

      </div>
    </section>
  );
};
