import React from 'react';
import { motion } from 'framer-motion';
import { DISTINGUISHED_VISITORS } from '../data/schoolData';
import { Award } from 'lucide-react';

export const DistinguishedVisitors: React.FC = () => {
  return (
    <section className="py-24 bg-forest-900 text-ivory-100 relative overflow-hidden border-t border-gold-500/20">
      
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Award className="w-4 h-4 text-gold-400" />
            CAMPUS LUMINARIES
          </span>
          <h2 className="heading-section font-serif text-ivory-100 font-normal">
            People Who Have Inspired Our Campus.
          </h2>
          <p className="text-forest-200 text-base font-light">
            Over the years, Pavna School has hosted national icons, scientists, authors, and athletic leaders who have enriched our students' horizons.
          </p>
        </div>

        {/* Horizontal Editorial Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DISTINGUISHED_VISITORS.map((v, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="bg-forest-950/90 rounded-3xl p-6 border border-gold-500/20 flex flex-col justify-between hover:border-gold-500/50 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] grayscale group-hover:grayscale-0 transition-all duration-500 border border-gold-500/20">
                  <img
                    src={v.imageUrl}
                    alt={v.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-80" />
                  {v.year && (
                    <span className="absolute top-3 right-3 text-[10px] font-mono font-bold text-gold-400 bg-forest-900/90 px-2.5 py-1 rounded-full border border-gold-500/30">
                      {v.year}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-ivory-100">{v.name}</h3>
                  <p className="text-xs text-gold-400 font-semibold uppercase tracking-wider">{v.role}</p>
                </div>

                <div className="relative pt-2 border-t border-forest-800">
                  <p className="text-xs text-forest-200 italic font-serif leading-relaxed">
                    "{v.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
