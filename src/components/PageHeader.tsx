import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  backgroundImageUrl?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  backgroundImageUrl = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=80",
  breadcrumbs
}) => {
  return (
    <section className="relative w-full bg-forest-950 text-ivory-100 overflow-hidden pt-24 lg:pt-28 pb-14 lg:pb-20 border-b border-gold-500/20">
      {/* Background Image with Dark Emerald Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImageUrl}
          alt={title}
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/90 to-forest-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-forest-950/80" />
      </div>

      {/* Decorative Gold Radial Light Ambient Glow */}
      <div className="absolute top-1/3 right-12 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 space-y-6">
        
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest-300">
          <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
          {breadcrumbs.map((b, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-gold-500/60" />
              {b.href ? (
                <Link to={b.href} className="hover:text-gold-400 transition-colors">{b.label}</Link>
              ) : (
                <span className="text-gold-400 font-bold">{b.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Badge & Title */}
        <div className="space-y-3 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/90 border border-gold-500/30 text-gold-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
            <span>{badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-ivory-100 leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-forest-200 text-sm sm:text-lg lg:text-xl font-light leading-relaxed max-w-3xl"
          >
            {subtitle}
          </motion.p>
        </div>

      </div>
    </section>
  );
};
