import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data/schoolData';
import { Quote, Sparkles, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-ivory-200 text-charcoal-900 relative">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-forest-700 text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-500" />
            TESTIMONIALS
          </span>
          <h2 className="heading-section font-serif text-forest-900 font-normal">
            Stories From the Pavna Community.
          </h2>
          <p className="text-charcoal-700 text-base font-light">
            Real experiences from parents, students, and alumni who have witnessed Pavna's transformative impact.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-ivory-100 rounded-3xl p-8 shadow-editorial border border-forest-800/10 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-gold-500/30" />
                </div>

                <p className="text-sm sm:text-base text-charcoal-800 italic font-serif leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-forest-800/10 flex items-center gap-4 mt-6">
                <img
                  src={t.avatarUrl}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-500/50"
                />
                <div>
                  <h3 className="font-serif font-bold text-base text-forest-900">{t.author}</h3>
                  <p className="text-xs font-medium text-gold-600">{t.role}</p>
                  <p className="text-[10px] text-charcoal-700 font-mono">{t.batchOrClass}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
