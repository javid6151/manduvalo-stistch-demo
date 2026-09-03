import React from 'react';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';

export default function AntiqueVintageHero({ onExploreVintage }) {
  return (
    <section className="relative py-24 md:py-36 bg-dark-brown text-warm-ivory overflow-hidden">
      {/* Background Ambience & Soft Warm Glow */}
      <div 
        className="absolute inset-0 opacity-25 bg-cover bg-center mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: `url('/images/manduva-antique-1.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-brown via-dark-brown/95 to-charcoal-brown/80" />
      
      {/* Subtle Warm Aura Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-peach/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-brown/80 border border-brand-peach/30 text-light-peach text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-brand-peach" />
              <span>THE ANTIQUE & VINTAGE VAULT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal leading-[1.15] text-warm-ivory">
              Where Heritage Finds <br />
              <span className="italic font-light text-light-peach">a Place at Home</span>
            </h2>

            <p className="text-base sm:text-lg text-warm-beige/90 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Vintage pieces, antique-inspired furniture and traditional craftsmanship brought together for modern spaces. Each object carries the quiet grace of bygone eras, ready to anchor your sanctuary.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreVintage}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-peach text-dark-brown hover:bg-light-peach text-sm font-semibold tracking-wider transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group"
              >
                <span>Explore Vintage Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 text-dark-brown transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Dual Visual Showcase */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-peach/20 shadow-2xl aspect-[3/4] img-zoom-container">
              <img
                src="/images/manduva-antique-1.jpg"
                alt="Antique Furniture Collection Hyderabad Manduva Logillu"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-peach/20 shadow-2xl aspect-[3/4] pt-6 img-zoom-container">
              <img
                src="/images/manduva-vintage-carved.jpg"
                alt="Vintage Handcarved Teakwood Furniture Manduva Logillu"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
