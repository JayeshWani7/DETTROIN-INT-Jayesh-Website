import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface AdmissionsJourneyProps {
  onOpenApplyModal: () => void;
}

export const AdmissionsJourney: React.FC<AdmissionsJourneyProps> = ({ onOpenApplyModal }) => {
  const steps = [
    {
      number: "01",
      title: "Explore",
      description: "Review our curriculum, SEEL pillars, boarding features, and campus infrastructure online."
    },
    {
      number: "02",
      title: "Enquire",
      description: "Submit a simple online enquiry form or speak with our dedicated admissions counselor."
    },
    {
      number: "03",
      title: "Interact",
      description: "Visit our 25-acre campus on Agra Highway for an interactive walkthrough and counselor meeting."
    },
    {
      number: "04",
      title: "Apply",
      description: "Complete formal application documentation and submit past academic records."
    },
    {
      number: "05",
      title: "Begin Journey",
      description: "Receive admission confirmation and join our welcoming orientation program for session " + SCHOOL_INFO.admissionsSession + "."
    }
  ];

  return (
    <section id="admissions-journey" className="py-24 bg-ivory-100 text-charcoal-900 relative">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <span className="text-forest-700 text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-500" />
            ADMISSION PROCESS
          </span>
          <h2 className="heading-section font-serif text-forest-900 font-normal">
            Your Pavna Journey Starts Here.
          </h2>
          <p className="text-charcoal-700 text-base font-light">
            A seamless 5-step admissions experience designed for parents and aspiring learners for Session {SCHOOL_INFO.admissionsSession}.
          </p>
        </div>

        {/* 5-Step Process Roadmap */}
        <div className="relative">
          {/* Connecting Horizontal Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-forest-800 via-gold-500 to-forest-800 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-ivory-200 rounded-3xl p-6 shadow-editorial border border-forest-800/10 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 relative group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-forest-900 text-gold-400 font-mono font-bold text-lg flex items-center justify-center border border-gold-500/30 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors shadow-md">
                    {step.number}
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif font-bold text-xl text-forest-900">
                      {step.title}
                    </h3>
                    <p className="text-xs text-charcoal-700 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-2 flex items-center gap-1 text-[11px] font-bold text-gold-600 uppercase tracking-wider">
                  <span>STEP {step.number}</span>
                  <CheckCircle className="w-3.5 h-3.5 text-forest-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div className="mt-16 text-center flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenApplyModal}
            className="px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold text-base transition-all duration-300 shadow-gold-glow flex items-center gap-2"
          >
            <span>Apply Online Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button
            onClick={onOpenApplyModal}
            className="px-8 py-4 rounded-full bg-forest-900 hover:bg-forest-800 text-ivory-100 font-semibold text-base transition-all duration-300 flex items-center gap-2"
          >
            <span>Request Prospectus & Fee Structure</span>
          </button>
        </div>

      </div>
    </section>
  );
};
