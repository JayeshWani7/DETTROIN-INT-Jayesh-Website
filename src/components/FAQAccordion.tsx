import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/schoolData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-ivory-200 text-charcoal-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-forest-700 text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4 text-gold-500" />
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="heading-section font-serif text-forest-900 font-normal">
            Everything You Need to Know.
          </h2>
          <p className="text-charcoal-700 text-base font-light">
            Answers to common questions about Pavna School's CBSE academics, boarding options, and admissions process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-ivory-100 rounded-2xl border border-forest-800/10 shadow-editorial overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-gold-500 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-lg sm:text-xl text-forest-900">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-ivory-200 flex items-center justify-center text-forest-800 transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-gold-500 text-forest-950' : ''
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-charcoal-700 text-sm sm:text-base font-light leading-relaxed border-t border-forest-800/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
