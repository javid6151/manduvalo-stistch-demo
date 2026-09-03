import React from 'react';
import { Sparkles, Compass } from 'lucide-react';

export default function WhyManduva() {
  const brandPoints = [
    {
      number: "01",
      title: "Timeless Craftsmanship",
      desc: "Furniture designed around traditional Indian woodworking traditions, generational joinery, and enduring physical quality."
    },
    {
      number: "02",
      title: "Authentic Character",
      desc: "Every vintage relic and antique-inspired creation possesses distinct grain variations, hand-carved individuality, and historic personality."
    },
    {
      number: "03",
      title: "Premium Quality",
      desc: "Uncompromising selection of aged solid teakwood, rosewood, pure brass hardware, and non-toxic organic botanical finishes."
    },
    {
      number: "04",
      title: "Curated Collection",
      desc: "Carefully chosen pieces curated for luxury residences, Hyderabad villas, heritage estates, and discerning interior design projects."
    },
    {
      number: "05",
      title: "Hyderabad's Furniture Destination",
      desc: "A celebrated destination for customers across Telangana searching for authentic traditional, antique, and luxury furniture."
    }
  ];

  return (
    <section className="py-20 md:py-28 border-t border-warm-beige/60 bg-soft-cream/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-deep-orange text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DISTINCTIVE DISTINCTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-dark-brown">
              Why Manduva Logillu
            </h2>
            <p className="text-muted-brown text-sm sm:text-base font-light">
              We stand apart from mainstream showroom retail through our devotion to authentic Indian woodwork, salvaged antiques, and architectural dignity.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-serif text-dark-brown bg-white px-4 py-2 rounded-full border border-warm-beige shadow-sm">
            <Compass className="w-4 h-4 text-deep-orange" />
            <span>The Gold Standard of Hyderabad Antiques</span>
          </div>
        </div>

        {/* 5 Distinct Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {brandPoints.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/90 border border-warm-beige/80 shadow-lux hover:shadow-lux-hover hover:border-brand-peach/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-light text-brand-peach mb-4 group-hover:text-deep-orange transition-colors">
                  {item.number}
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-dark-brown mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-brown/80 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="w-8 h-0.5 bg-warm-beige group-hover:w-full group-hover:bg-brand-peach transition-all duration-500 mt-6" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
