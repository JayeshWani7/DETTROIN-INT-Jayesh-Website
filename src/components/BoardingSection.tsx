import React from 'react';
import { motion } from 'framer-motion';
import { Home, ShieldCheck, Utensils, Wifi, HeartHandshake, ArrowRight } from 'lucide-react';

interface BoardingSectionProps {
  onOpenApplyModal: () => void;
}

export const BoardingSection: React.FC<BoardingSectionProps> = ({ onOpenApplyModal }) => {
  const trustPoints = [
    {
      title: "Pastoral Care & Mentorship",
      description: "Resident Housemasters, female wardens, and 24/7 medical nursing staff ensuring emotional warmth and family atmosphere.",
      icon: <HeartHandshake className="w-6 h-6 text-gold-500" />
    },
    {
      title: "Nutritional Gourmet Dining",
      description: "Hygienically prepared balanced vegetarian meals designed by nutritionists with structured evening snack and milk schedules.",
      icon: <Utensils className="w-6 h-6 text-gold-500" />
    },
    {
      title: "Smart Air-Conditioned Living",
      description: "Spacious air-conditioned rooms with attached modern bathrooms, personal study alcoves, and high-speed Wi-Fi research access.",
      icon: <Wifi className="w-6 h-6 text-gold-500" />
    }
  ];

  return (
    <section id="boarding" className="py-24 bg-ivory-200 text-charcoal-900 relative overflow-hidden">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual Photography Showcase */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-editorial border-4 border-ivory-50 aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80"
                alt="Pavna Boarding House Living Lounge"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-ivory-100">
                <span className="text-[10px] font-mono font-bold tracking-widest text-gold-400 uppercase bg-forest-900/80 px-3 py-1 rounded-full backdrop-blur-md">
                  BOYS & GIRLS RESIDENTIAL HOUSES
                </span>
                <h3 className="font-serif text-2xl text-ivory-100 mt-2 font-normal">
                  Safe, Supportive, Second Home
                </h3>
              </div>
            </motion.div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-4 bg-forest-900 text-gold-400 p-5 rounded-2xl shadow-xl border border-gold-500/30 hidden sm:flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-gold-500" />
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-forest-200">24/7 CCTV & SECURITY</p>
                <p className="font-serif font-bold text-base text-ivory-100">Class IV Onwards</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Trust Points */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-3">
              <span className="text-forest-700 text-xs font-semibold uppercase tracking-widest flex items-center gap-2">
                <Home className="w-4 h-4 text-gold-500" />
                LIFE AT PAVNA • RESIDENTIAL BOARDING
              </span>
              <h2 className="heading-section font-serif text-forest-900 font-normal">
                A Home Away From Home.
              </h2>
              <p className="text-charcoal-700 text-base sm:text-lg font-light leading-relaxed">
                Our residential boarding facility offers a nurturing environment where students develop independence, self-discipline, lifelong friendships, and strong academic habits under caring adult supervision.
              </p>
            </div>

            {/* 3 Trust Points */}
            <div className="space-y-6">
              {trustPoints.map((tp, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-ivory-100 border border-forest-800/10 shadow-sm flex items-start gap-4 hover:border-gold-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-ivory-200 flex items-center justify-center flex-shrink-0 border border-forest-800/10">
                    {tp.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif font-bold text-lg text-forest-900">{tp.title}</h3>
                    <p className="text-xs text-charcoal-700 font-light leading-relaxed">{tp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenApplyModal}
                className="group px-7 py-3.5 rounded-full bg-forest-900 hover:bg-forest-800 text-ivory-100 font-semibold text-sm transition-all duration-300 shadow-md flex items-center gap-2"
              >
                <span>Explore Boarding Life & Apply</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gold-400" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
