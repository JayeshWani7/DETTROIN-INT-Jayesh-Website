import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS } from '../data/schoolData';
import { GalleryItem } from '../types';
import { Maximize2, X, Sparkles } from 'lucide-react';

export const CampusGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Academics', 'Technology', 'Sports', 'Arts', 'Campus Life'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-ivory-100 text-charcoal-900 relative">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-forest-700 text-xs font-semibold uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-500" />
              CAMPUS GALLERY
            </span>
            <h2 className="heading-section font-serif text-forest-900 font-normal">
              Life, Unscripted.
            </h2>
            <p className="text-charcoal-700 text-base font-light">
              A glimpse into everyday moments, hands-on discoveries, and vibrant celebrations that make Pavna, Pavna.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-forest-900 text-gold-400 shadow-md'
                    : 'bg-ivory-200 text-charcoal-800 hover:bg-forest-50 border border-forest-800/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setLightboxImage(item)}
              className="group relative rounded-3xl overflow-hidden shadow-editorial border border-forest-800/10 cursor-pointer h-72 sm:h-80"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-ivory-100">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-gold-400 uppercase bg-forest-900/80 px-3 py-1 rounded-full backdrop-blur-md">
                    {item.category}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-forest-900/80 backdrop-blur-md border border-ivory-100/20 flex items-center justify-center text-ivory-100 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-ivory-100 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ivory-300 font-light line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-forest-950/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full bg-forest-900 text-ivory-100 rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-forest-950/80 text-ivory-100 hover:bg-gold-500 hover:text-forest-950 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh]">
                <div className="lg:col-span-8 bg-black flex items-center justify-center">
                  <img
                    src={lightboxImage.imageUrl}
                    alt={lightboxImage.title}
                    className="max-h-[75vh] w-full object-contain"
                  />
                </div>
                <div className="lg:col-span-4 p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold text-gold-400 uppercase tracking-widest">
                      {lightboxImage.category}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-ivory-100">
                      {lightboxImage.title}
                    </h3>
                    <p className="text-sm text-forest-200 font-light leading-relaxed pt-2 border-t border-forest-800">
                      {lightboxImage.caption}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-forest-800 text-xs text-forest-300">
                    <span>Pavna School, Aligarh • Official Campus Archives</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
