import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Bot, Terminal, CheckCircle } from 'lucide-react';

export const FutureReady: React.FC = () => {
  const tags = [
    'COMPUTATIONAL THINKING',
    'ROBOTICS & IOT',
    'STEM INTEGRATION',
    'PROBLEM SOLVING',
    'AI ETHICS & LOGIC'
  ];

  return (
    <section id="future-ready" className="py-24 bg-forest-950 text-ivory-100 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-forest-800/40 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Dark Emerald Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest">
                <Cpu className="w-3.5 h-3.5" />
                FUTURE READY EDUCATION
              </span>
              <h2 className="heading-section font-serif text-ivory-100 font-normal">
                Preparing Students for a World That Doesn’t Stand Still.
              </h2>
            </div>

            <p className="text-forest-200 text-base sm:text-lg font-light leading-relaxed">
              At Pavna, technology is not just an add-on subject—it is a core medium for creative inquiry. In our state-of-the-art AI & Robotics Center, students learn to design algorithms, write code, program microcontrollers, and construct intelligent physical machines.
            </p>

            {/* Visual Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-forest-900/90 text-gold-300 border border-gold-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Key Outcomes */}
            <div className="space-y-4 pt-4 border-t border-forest-800">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans font-bold text-sm text-ivory-100">Early Exposure to Computational Thinking</h3>
                  <p className="text-xs text-forest-300 font-light mt-0.5">Developing structured logical reasoning from Primary grades upwards.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans font-bold text-sm text-ivory-100">Hands-on Hardware Prototyping</h3>
                  <p className="text-xs text-forest-300 font-light mt-0.5">3D printing, circuit design, sensor calibration, and autonomous drone building.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Image with Floating Interactive Tags */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-gold-500/30 p-2 bg-gradient-to-b from-forest-800 to-forest-900 shadow-2xl"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                  alt="Students working in AI and Robotics Lab"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-80" />
              </div>
            </motion.div>

            {/* Subtle Floating Label 1 */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 right-6 bg-forest-900/90 text-gold-400 p-3.5 rounded-2xl shadow-xl border border-gold-500/30 flex items-center gap-3 backdrop-blur-md hidden sm:flex"
            >
              <Bot className="w-6 h-6 text-gold-400" />
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-widest text-forest-200">AI LAB HUB</p>
                <p className="text-xs font-semibold text-ivory-100">Autonomous Robotics</p>
              </div>
            </motion.div>

            {/* Subtle Floating Label 2 */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 left-6 bg-forest-900/90 text-ivory-100 p-3.5 rounded-2xl shadow-xl border border-gold-500/30 flex items-center gap-3 backdrop-blur-md hidden sm:flex"
            >
              <Terminal className="w-6 h-6 text-gold-400" />
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-widest text-forest-300">CODE & CONTROL</p>
                <p className="text-xs font-semibold text-ivory-100">Python & C++ Embedded</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
