import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles, BookOpen, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-ivory-100 text-charcoal-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Overlapping Imagery Composition */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-editorial border-4 border-ivory-50 aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                alt="Pavna School Students learning together"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div
              initial={{ opacity: 0, y: 40, x: 30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-10 -right-4 sm:right-6 z-20 w-3/5 rounded-2xl overflow-hidden shadow-editorial-hover border-4 border-white aspect-square hidden sm:block"
            >
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
                alt="Classroom discovery session"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating "Since 1998" Heritage Seal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-6 -left-4 z-30 bg-forest-900 text-gold-400 p-4 rounded-2xl shadow-lg border border-gold-500/30 flex items-center gap-3"
            >
              <Award className="w-8 h-8 text-gold-500" />
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-forest-200">EDUCATIONAL LEGACY</p>
                <p className="font-serif font-bold text-lg text-ivory-100">Since 1998</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative & Educational Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-forest-700 text-xs font-semibold uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-500" />
                OUR STORY & FOUNDATION
              </span>
              <h2 className="heading-section font-serif text-forest-900 font-normal">
                More Than a School.{' '}
                <span className="italic font-light text-forest-700 block">
                  A Place to Discover Who You Are.
                </span>
              </h2>
            </div>

            <p className="text-charcoal-700 text-base sm:text-lg font-light leading-relaxed">
              Established in 1998 in Aligarh by Shri Pawan Jain and formerly known as <strong className="font-semibold text-forest-900">Delhi Public School (DPS) Aligarh</strong>, Pavna School was created with a clear imperative: to transcend conventional rote learning and build an environment where young minds flourish into confident, compassionate, and future-ready individuals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-ivory-200 border border-forest-800/10 space-y-1">
                <div className="flex items-center gap-2 text-forest-800 font-bold text-sm">
                  <BookOpen className="w-4 h-4 text-gold-600" />
                  <span>Curiosity-Driven Pedagogy</span>
                </div>
                <p className="text-xs text-charcoal-700 font-light">
                  Encouraging active inquiry, critical questioning, and hands-on scientific experiment.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-ivory-200 border border-forest-800/10 space-y-1">
                <div className="flex items-center gap-2 text-forest-800 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-gold-600" />
                  <span>Ethical & Social Character</span>
                </div>
                <p className="text-xs text-charcoal-700 font-light">
                  Rooted in Social, Emotional & Ethical Learning (SEEL) principles for empathy and integrity.
                </p>
              </div>
            </div>

            <p className="text-charcoal-700 text-sm font-light leading-relaxed">
              Today, with over 28 years of educational excellence, a 25-acre lush green campus, Olympic-grade sports amenities, and an AI-integrated STEM framework, Pavna continues to set benchmarks as Aligarh's most prestigious school.
            </p>

            <div className="pt-4">
              <a
                href="#seel"
                className="inline-flex items-center gap-3 text-forest-900 font-bold text-base group hover:text-gold-600 transition-colors"
              >
                <span>Discover Our Educational Philosophy</span>
                <div className="w-8 h-8 rounded-full bg-forest-900 text-ivory-100 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
