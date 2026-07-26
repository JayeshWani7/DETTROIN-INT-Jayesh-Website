import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

export const SportsMasonry: React.FC = () => {
  const sportsList = [
    { title: 'Cricket Academy', caption: 'DISCIPLINE & PRECISION', icon: 'Cricket' },
    { title: 'Olympic Swimming', caption: 'ENDURANCE & AGILITY', icon: 'Waves' },
    { title: 'Synthetic Basketball', caption: 'TEAMWORK & FOCUS', icon: 'Dribble' },
    { title: 'Lawn Tennis Courts', caption: 'STRATEGY & SPEED', icon: 'Activity' },
    { title: 'Football Field', caption: 'RESILIENCE & PASSION', icon: 'Target' },
    { title: 'Indoor Martial Arts & Chess', caption: 'TACTICS & BALANCE', icon: 'Brain' },
  ];

  return (
    <section id="sports" className="py-24 bg-ivory-100 text-charcoal-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-forest-700 text-xs font-semibold uppercase tracking-widest flex items-center gap-2">
              <Trophy className="w-4 h-4 text-gold-500" />
              ATHLETICS & PHYSICAL EXCELLENCE
            </span>
            <h2 className="heading-section font-serif text-forest-900 font-normal">
              Where Energy Finds Direction.
            </h2>
            <p className="text-charcoal-700 text-base font-light">
              Sports at Pavna builds character, physical grit, sportsmanship, and lifelong habits of health.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-gold-600">
            <span className="px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20">DISCIPLINE</span>
            <span className="px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20">TEAMWORK</span>
            <span className="px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20">RESILIENCE</span>
          </div>
        </div>

        {/* Masonry Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Dominant Featured Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-8 rounded-3xl overflow-hidden shadow-editorial border border-forest-800/10 relative group h-[420px] sm:h-[500px]"
          >
            <img
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80"
              alt="Pavna Basketball & Sports Arena"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-ivory-100 space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-gold-400 uppercase bg-forest-900/80 px-3 py-1 rounded-full backdrop-blur-md">
                FEATURED COMPLEX • BASKETBALL & ATHLETICS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory-100">
                Synthetic Multi-Sport Arena
              </h3>
              <p className="text-xs sm:text-sm text-ivory-300 font-light max-w-xl">
                Illuminated floodlit courts for night training, inter-school tournaments, and professional coaching under national-level mentors.
              </p>
            </div>
          </motion.div>

          {/* Secondary Tall Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-4 rounded-3xl overflow-hidden shadow-editorial border border-forest-800/10 relative group h-[420px] sm:h-[500px]"
          >
            <img
              src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80"
              alt="Swimming Pool at Pavna School"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/50 to-transparent" />
            <div className="absolute bottom-8 left-6 right-6 text-ivory-100 space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-gold-400 uppercase bg-forest-900/80 px-3 py-1 rounded-full backdrop-blur-md">
                AQUATIC CENTER
              </span>
              <h3 className="font-serif text-xl text-ivory-100">
                Half-Olympic Swimming Pool
              </h3>
              <p className="text-xs text-ivory-300 font-light">
                Temperature-controlled pool with life-guard supervision and competitive stroke technique training.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Sports Features Pill Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
          {sportsList.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-4 rounded-2xl bg-ivory-200 border border-forest-800/10 text-center hover:bg-forest-900 hover:text-ivory-100 transition-colors group cursor-default"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-forest-900 group-hover:text-gold-400">
                {s.title}
              </p>
              <p className="text-[10px] text-charcoal-700 group-hover:text-ivory-300 font-mono mt-1">
                {s.caption}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
