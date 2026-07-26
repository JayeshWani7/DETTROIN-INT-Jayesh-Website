import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LEADERSHIP_MEMBERS } from '../data/schoolData';
import { LeadershipMember } from '../types';
import { Quote, ArrowRight, X, Sparkles } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<LeadershipMember | null>(null);

  return (
    <section id="leadership" className="py-24 bg-ivory-100 text-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-forest-700 text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-500" />
            VISIONARY GOVERNANCE
          </span>
          <h2 className="heading-section font-serif text-forest-900 font-normal">
            Guided by Experience. Driven by Purpose.
          </h2>
          <p className="text-charcoal-700 text-base font-light">
            Meet the leadership shaping Pavna School’s ethos, educational innovation, and commitment to student excellence.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {LEADERSHIP_MEMBERS.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="bg-ivory-200 rounded-3xl p-8 shadow-editorial border border-forest-800/10 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Member Portrait */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-forest-800/10">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-ivory-100">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-gold-400 uppercase bg-forest-900/80 px-3 py-1 rounded-full backdrop-blur-md">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Member Details */}
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-forest-900">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                    {member.title}
                  </p>
                </div>

                {/* Short Quote Excerpt */}
                <div className="relative pl-4 border-l-2 border-gold-500 py-1">
                  <Quote className="w-5 h-5 text-gold-500/40 absolute -top-3 -left-3" />
                  <p className="text-sm text-charcoal-800 italic font-serif leading-relaxed">
                    "{member.quote}"
                  </p>
                </div>
              </div>

              {/* Read Full Message Trigger */}
              <div className="pt-6">
                <button
                  onClick={() => setSelectedMember(member)}
                  className="w-full py-3 rounded-2xl bg-forest-900 hover:bg-forest-800 text-ivory-100 font-semibold text-xs transition-colors flex items-center justify-center gap-2 group-hover:bg-gold-500 group-hover:text-forest-950"
                >
                  <span>Read Full Leadership Message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Leadership Full Message Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-ivory-100 text-charcoal-900 rounded-3xl p-8 max-w-2xl w-full shadow-2xl border border-gold-500/30 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-ivory-200 text-charcoal-900 hover:bg-forest-900 hover:text-ivory-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={selectedMember.imageUrl}
                  alt={selectedMember.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold-500"
                />
                <div>
                  <h3 className="font-serif font-bold text-2xl text-forest-900">{selectedMember.name}</h3>
                  <p className="text-xs font-semibold text-gold-600 uppercase tracking-wider">{selectedMember.title}</p>
                </div>
              </div>

              <div className="space-y-4 text-charcoal-800 text-sm leading-relaxed font-light border-t border-forest-800/10 pt-4">
                <p className="font-serif italic text-base text-forest-800 font-normal">
                  "{selectedMember.quote}"
                </p>
                <p>{selectedMember.fullMessage}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-forest-800/10 text-right">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="px-6 py-2.5 rounded-full bg-forest-900 text-ivory-100 font-semibold text-xs hover:bg-gold-500 hover:text-forest-950 transition-colors"
                >
                  Close Message
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
