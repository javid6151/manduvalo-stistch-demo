import React from 'react';
import { Sparkles, Trees, Compass, ShieldCheck, Heart, MapPin, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function AboutPage({ onExploreFurniture, onContactClick }) {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Hero Narrative */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm-beige/60 text-dark-brown text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-deep-orange" />
          <span>OUR LIVING HERITAGE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-dark-brown leading-tight">
          The Soul of <br />
          <span className="italic font-light text-deep-orange">Manduva Logillu</span>
        </h1>
        <p className="text-muted-brown text-base sm:text-lg font-light leading-relaxed">
          Rooted in the timeless courtyard mansions of Deccan India, Manduva Logillu Furniture's was founded to preserve authentic woodworking, historic antiques, and generational warmth for contemporary spaces.
        </p>
      </div>

      {/* Visual Editorial Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-6 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-dark-brown img-zoom-container">
            <img
              src="/images/manduva-showroom-1.jpg"
              alt="Manduva Logillu Hyderabad Furniture Showroom"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 p-5 rounded-2xl bg-dark-brown text-warm-ivory border border-brand-peach/30 shadow-xl max-w-xs hidden sm:block">
            <div className="font-serif text-lg font-semibold text-light-peach">Hyderabad Destination</div>
            <p className="text-xs text-warm-beige/80 mt-1">
              Where homeowners and designers discover rare antiques and bespoke teakwood commissions.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-dark-brown leading-tight">
            An Architectural Tradition Reborn
          </h2>
          <p className="text-sm sm:text-base text-charcoal-brown/90 font-light leading-relaxed">
            In South Indian architectural tradition, a <em>Manduva Logillu</em> is an open-to-sky courtyard dwelling where carved timber pillars supported terracotta-tiled verandas, and heavy teakwood swings welcomed lively family gatherings.
          </p>
          <p className="text-sm sm:text-base text-charcoal-brown/90 font-light leading-relaxed">
            As modern urban architecture drifted toward uniform glass and composite boards, the soul of natural timber and artisanal warmth began to fade. Manduva Logillu Furniture's was born to bridge this divide—curating authentic antique relics and handcrafting new heirloom pieces from century-seasoned wood.
          </p>
          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={onExploreFurniture}
              className="px-6 py-3 rounded-full bg-dark-brown text-warm-ivory text-xs font-semibold hover:bg-charcoal-brown transition-colors shadow-sm"
            >
              Explore Our Pieces
            </button>
            <button
              onClick={onContactClick}
              className="px-6 py-3 rounded-full border border-warm-beige text-dark-brown text-xs font-semibold hover:bg-warm-beige/40 transition-colors"
            >
              Visit Our Hyderabad Showroom
            </button>
          </div>
        </div>

      </div>

      {/* 3 Heritage Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        
        <div className="p-8 rounded-3xl bg-white border border-warm-beige shadow-lux space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-warm-beige/60 text-deep-orange flex items-center justify-center">
            <Trees className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl text-dark-brown">Dense Reclaimed Teak</h3>
          <p className="text-xs sm:text-sm text-charcoal-brown/80 font-light leading-relaxed">
            We exclusively craft in dense Indian teakwood, rosewood, and sheesham seasoned naturally to prevent warping, cracking, or deterioration across decades.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-warm-beige shadow-lux space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-warm-beige/60 text-deep-orange flex items-center justify-center">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl text-dark-brown">Ancestral Hand-Carving</h3>
          <p className="text-xs sm:text-sm text-charcoal-brown/80 font-light leading-relaxed">
            Every fluted post, brass peacock latch, and floral crest is hand-chiseled by master woodworkers carrying generational knowledge of temple and palace craftsmanship.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-warm-beige shadow-lux space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-warm-beige/60 text-deep-orange flex items-center justify-center">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl text-dark-brown">Organic Soul & Patina</h3>
          <p className="text-xs sm:text-sm text-charcoal-brown/80 font-light leading-relaxed">
            Finished with cold-pressed natural oils, botanical stains, and beeswax that highlight the natural tree rings and allow the furniture to age with noble grace.
          </p>
        </div>

      </div>

    </div>
  );
}
