import React from 'react';
import { Hammer, Trees, Award, Compass } from 'lucide-react';

export default function CraftsmanshipStory({ onContactClick }) {
  const pillars = [
    {
      icon: Trees,
      title: "Century-Dense Timber",
      desc: "We prioritize reclaimed and seasoned Indian teakwood, rosewood, and sheesham characterized by dense grain rings and natural resistance to time."
    },
    {
      icon: Hammer,
      title: "Generational Joinery",
      desc: "Honoring traditional mortise-and-tenon interlocking joinery without relying on industrial shortcuts or fragile adhesives."
    },
    {
      icon: Compass,
      title: "Hand-Relief Carving",
      desc: "Every floral rosette, fluted column, and lion-head finial is hand-chiseled by master artisans whose lineage spans centuries of temple and palace woodwork."
    },
    {
      icon: Award,
      title: "Organic Breathable Finishes",
      desc: "Nourished with cold-pressed linseed oils and natural beeswax that allow the timber to breathe and develop a majestic antique luster over decades."
    }
  ];

  return (
    <section className="py-20 md:py-28 overflow-hidden bg-white border-t border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Large Editorial Image Frame */}
          <div className="lg:col-span-6 relative">
            
            <div className="relative rounded-3xl overflow-hidden shadow-sm border border-[#EAE5DC] aspect-[4/5] bg-[#F3EFE8] img-zoom-container">
              <img
                src="/images/manduva-craft-detail.jpg"
                alt="Handcrafted Indian Wood Joinery Detail Manduva Logillu Hyderabad"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1715]/85 via-[#1A1715]/25 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#C49A6C] font-semibold">
                  Artisan Precision
                </span>
                <p className="font-serif text-lg text-[#FAF8F5] font-light">
                  "No two wood grains are alike. We allow the timber's natural knots and flow to dictate the sculpture."
                </p>
              </div>
            </div>

            {/* Overlaid Floating Badge */}
            <div className="absolute -top-6 -right-4 sm:-top-8 sm:-right-8 bg-white text-[#1A1715] p-5 rounded-2xl shadow-md border border-[#EAE5DC] max-w-[200px] sm:max-w-[240px]">
              <div className="font-serif text-3xl font-bold text-[#8A6738]">100%</div>
              <div className="text-xs font-medium text-[#68625A] mt-0.5">Solid Aged Timber Guarantee</div>
            </div>

          </div>

          {/* Right Narrative & Pillars */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-[#8A6738]" />
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8A6738] font-sans">
                  Heirloom Integrity
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1715] leading-tight">
                Crafted for <br />
                <span className="italic font-light text-[#8A6738]">Generations to Come</span>
              </h2>
              <p className="text-[#68625A] text-sm sm:text-base font-light leading-relaxed">
                In an era dominated by flat-pack disposable furniture, Manduva Logillu represents an uncompromising return to permanence. We believe furniture should carry memories, age with dignity, and be passed down as treasured heirlooms.
              </p>
            </div>

            {/* 4 Story Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="space-y-2 p-4 rounded-2xl bg-[#F3EFE8]/70 border border-[#EAE5DC] hover:border-[#8A6738]/60 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-white text-[#8A6738] flex items-center justify-center shrink-0 border border-[#EAE5DC] shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-semibold text-[#1A1715]">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#68625A] font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={onContactClick}
                className="px-8 py-3.5 rounded-full bg-[#1A1715] text-[#FAF8F5] hover:bg-[#332D28] text-xs sm:text-sm font-semibold tracking-wider transition-colors shadow-xs"
              >
                Discuss Custom Craftsmanship
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
