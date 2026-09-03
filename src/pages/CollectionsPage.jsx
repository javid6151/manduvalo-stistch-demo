import React from 'react';
import { Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function CollectionsPage({ categories, onSelectCategory }) {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm-beige/60 text-dark-brown text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-deep-orange" />
          <span>CURATED CATEGORIES</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-dark-brown leading-tight">
          Our Collections
        </h1>
        <p className="text-muted-brown text-base sm:text-lg font-light leading-relaxed">
          Explore handcrafted furniture across distinct aesthetic disciplines, from preserved antique treasures to majestic teak dining and courtyard suites.
        </p>
      </div>

      {/* Categories Detailed Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.slug)}
            className="group bg-white rounded-3xl overflow-hidden border border-warm-beige shadow-lux hover:shadow-lux-hover cursor-pointer transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div className="relative aspect-[4/3] bg-dark-brown overflow-hidden img-zoom-container">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-warm-ivory/90 backdrop-blur-md text-dark-brown text-[10px] font-bold uppercase tracking-wider">
                  {cat.count} {typeof cat.count === 'number' ? 'Pieces' : ''}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] uppercase tracking-widest text-light-peach font-semibold block mb-0.5">
                  {cat.tagline}
                </span>
                <h3 className="font-serif text-2xl font-normal text-white">
                  {cat.name}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-charcoal-brown/80 font-light leading-relaxed">
                {cat.description}
              </p>

              <div className="pt-3 border-t border-warm-beige flex items-center justify-between text-xs font-semibold text-dark-brown group-hover:text-deep-orange">
                <span>Browse {cat.name}</span>
                <ArrowUpRight className="w-4 h-4 text-deep-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
