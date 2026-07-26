import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BEYOND_ACADEMICS_CATEGORIES } from '../data/schoolData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface BeyondAcademicsProps {
  hideHeader?: boolean;
}

export const BeyondAcademics: React.FC<BeyondAcademicsProps> = ({ hideHeader = false }) => {
  const [selectedCategory, setSelectedCategory] = useState(BEYOND_ACADEMICS_CATEGORIES[0]);

  return (
    <section id="beyond-academics" className="py-20 bg-ivory-100 text-charcoal-900 relative overflow-hidden">
      
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Header - Only render if hideHeader is false */}
        {!hideHeader && (
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-forest-700 text-xs font-semibold uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-500" />
              CO-CURRICULAR EXPEDITIONS
            </span>
            <h2 className="heading-section font-serif text-forest-900 font-normal">
              Talent Doesn’t Live Inside Textbooks.
            </h2>
            <p className="text-charcoal-700 text-base sm:text-lg font-light">
              Explore how Pavna students discover their artistic, analytical, and musical voices outside traditional academic boundaries.
            </p>
          </div>
        )}

        {/* Desktop Interactive Layout: Category Selector on Left, Dynamic Showcase Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Category Selector List */}
          <div className="lg:col-span-5 space-y-2.5">
            <p className="text-xs font-bold uppercase tracking-widest text-forest-800 mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              EXPLORE CREATIVE & ATHLETIC CLUBS
            </p>

            {BEYOND_ACADEMICS_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory.id === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat)}
                  onMouseEnter={() => setSelectedCategory(cat)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group cursor-pointer border ${
                    isSelected
                      ? 'bg-forest-900 text-gold-400 border-gold-500/40 shadow-editorial translate-x-2'
                      : 'bg-ivory-200 hover:bg-forest-50 text-charcoal-800 hover:text-forest-900 border-forest-800/10'
                  }`}
                >
                  <div className="space-y-1">
                    <h3 className={`font-serif text-lg sm:text-xl font-normal transition-colors ${
                      isSelected ? 'text-gold-400 font-bold' : 'text-forest-900'
                    }`}>
                      {cat.title}
                    </h3>
                    <p className={`text-xs font-light ${isSelected ? 'text-forest-200' : 'text-charcoal-700'}`}>
                      {cat.tagline}
                    </p>
                  </div>

                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                    isSelected ? 'text-gold-400 translate-x-1' : 'text-forest-700 group-hover:text-forest-900'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Dynamic Image & Narrative Card Showcase */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-forest-800/10 p-2 bg-gradient-to-b from-ivory-200 to-ivory-100 shadow-editorial-hover">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10]"
                >
                  <img
                    src={selectedCategory.imageUrl}
                    alt={selectedCategory.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-forest-950/90 backdrop-blur-md border border-gold-500/20 space-y-2">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-gold-400 uppercase">
                      ACTIVE CLUB • {selectedCategory.tagline}
                    </span>
                    <h4 className="font-serif text-2xl text-ivory-100 font-normal">
                      {selectedCategory.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-forest-200 font-light leading-relaxed">
                      {selectedCategory.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
