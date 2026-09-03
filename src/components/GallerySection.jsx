import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Eye, Grid } from 'lucide-react';
import { galleryItems } from '../data/furnitureData';
import ScrollReveal from './ScrollReveal';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const categories = ['all', 'Traditional & Antiques', 'Living Room', 'Dining', 'Storage & Consoles', 'Details & Craft'];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleOpenLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const handleNextLightbox = (e) => {
    e?.stopPropagation();
    setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrevLightbox = (e) => {
    e?.stopPropagation();
    setActiveLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section className="py-20 md:py-28 bg-[#faf8f2] border-t border-[#eadcc8]" id="gallery-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* =========================================================================
            SECTION HEADER & FILTER TABS
           ========================================================================= */}
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eadcc8]/60 text-[#2d2119] text-xs font-semibold tracking-widest uppercase font-sora">
            <Sparkles className="w-3.5 h-3.5 text-[#f97316]" />
            <span>INTERIOR EDITORIAL LOOKBOOK</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2d2119]">
            The Living Gallery
          </h2>

          <p className="text-[#76665a] text-sm sm:text-base font-light leading-relaxed">
            Immerse yourself in our visual showcase. Click any image to view high-resolution woodwork details, patina finishes, and showroom arrangements.
          </p>

          {/* Sequential Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 font-sora ${
                  activeCategory === cat
                    ? 'bg-[#2d2119] text-[#faf8f2] shadow-sm'
                    : 'bg-white text-[#40342c] hover:bg-[#eadcc8]/60 border border-[#eadcc8]'
                }`}
              >
                {cat === 'all' ? 'All Gallery' : cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* =========================================================================
            SEQUENTIAL BALANCED MAGAZINE GRID (Clean 3-Column Balanced Order)
           ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <ScrollReveal
              key={item.id}
              delay={index * 60}
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-lux hover:shadow-lux-hover bg-[#2d2119] border border-[#eadcc8] transition-all duration-500 flex flex-col aspect-[4/3] hover:-translate-y-1.5"
            >
              <div 
                onClick={() => handleOpenLightbox(index)}
                className="w-full h-full relative overflow-hidden"
              >
                {/* Image Container with Smooth Hover Scale */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out brightness-[0.96] contrast-[1.04]"
                  loading="lazy"
                />

                {/* Subtle Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Top Category Badge & Maximize Icon */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#fdba74] text-[10px] font-bold uppercase tracking-wider font-sora">
                    {item.category}
                  </span>

                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <Maximize2 className="w-3.5 h-3.5 text-[#fb923c]" />
                  </div>
                </div>

                {/* Bottom Editorial Caption */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white space-y-1.5 z-10">
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#faf8f2] group-hover:text-[#fb923c] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#eadcc8]/80 line-clamp-2 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* =========================================================================
          FULL-SCREEN LIGHTBOX MODAL
         ========================================================================= */}
      {activeLightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous image */}
          <button
            onClick={handlePrevLightbox}
            className="absolute left-4 sm:left-8 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next image */}
          <button
            onClick={handleNextLightbox}
            className="absolute right-4 sm:right-8 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Box */}
          <div 
            className="max-w-4xl max-h-[85vh] flex flex-col items-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black max-h-[70vh]">
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="text-center mt-4 space-y-1 text-white max-w-lg">
              <span className="text-[10px] tracking-widest text-[#fb923c] uppercase font-bold font-sora">
                {filteredItems[activeLightboxIndex].category} • {activeLightboxIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#faf8f2]">
                {filteredItems[activeLightboxIndex].title}
              </h3>
              <p className="text-xs text-[#eadcc8]/80 font-light">
                {filteredItems[activeLightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
