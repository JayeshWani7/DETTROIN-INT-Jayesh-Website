import React from 'react';
import { motion } from 'framer-motion';
import { LEARNING_CARDS } from '../data/schoolData';
import { ArrowUpRight, Cpu, Trophy, HeartHandshake, Home, BookOpen, Palette, UserCheck, Bus } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'ai-robotics': <Cpu className="w-6 h-6 text-gold-400" />,
  'sports-athletics': <Trophy className="w-6 h-6 text-gold-400" />,
  'seel-learning': <HeartHandshake className="w-6 h-6 text-gold-400" />,
  'boarding-life': <Home className="w-6 h-6 text-gold-400" />,
  'academic-excellence': <BookOpen className="w-6 h-6 text-gold-400" />,
  'co-curricular': <Palette className="w-6 h-6 text-gold-400" />,
  'faculty': <UserCheck className="w-6 h-6 text-gold-400" />,
  'safe-transport': <Bus className="w-6 h-6 text-gold-400" />,
};

export const LearningBento: React.FC = () => {
  return (
    <section id="academics" className="py-24 bg-ivory-200 text-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-forest-700 text-xs font-semibold uppercase tracking-widest">
            THE PAVNA EXPERIENCE
          </span>
          <h2 className="heading-section font-serif text-forest-900 font-normal">
            Learning Designed for the Real World.
          </h2>
          <p className="text-charcoal-700 text-base sm:text-lg font-light">
            Academic foundations meet technology, creativity, emotional intelligence, and hands-on exploration in an editorial bento layout.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {LEARNING_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`group relative rounded-3xl overflow-hidden shadow-editorial border border-forest-800/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-editorial-hover ${card.gridSpan}`}
            >
              {/* Card Image */}
              <div className="relative w-full h-full min-h-[280px] sm:min-h-[320px]">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Dark Gradient Overlay */}
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  card.isDark
                    ? 'bg-gradient-to-t from-forest-950 via-forest-950/80 to-forest-900/40'
                    : 'bg-gradient-to-t from-forest-950/90 via-forest-950/50 to-transparent'
                }`} />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-ivory-100">
                  
                  {/* Top Bar: Number & Category Tag */}
                  <div className="flex items-center justify-between z-10">
                    <span className="text-xs font-mono tracking-widest text-gold-400 font-semibold px-3 py-1 rounded-full bg-forest-950/60 backdrop-blur-md border border-gold-500/20">
                      {card.number} • {card.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-forest-950/60 backdrop-blur-md border border-ivory-100/20 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-forest-950 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Bottom Text Details */}
                  <div className="space-y-2 z-10">
                    <div className="flex items-center gap-2">
                      {iconMap[card.id]}
                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-ivory-100 group-hover:text-gold-300 transition-colors">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-ivory-300 font-light leading-relaxed max-w-xl">
                      {card.description}
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
