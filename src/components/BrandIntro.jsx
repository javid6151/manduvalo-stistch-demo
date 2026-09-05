import React from 'react';
import { Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function BrandIntro({ onNavigateAbout }) {
  return (
    <section className="py-20 md:py-28 border-y border-[#EAE5DC] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Architectural Imagery Pair with Staggered Entry */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 relative">
            <ScrollReveal delay={100} className="space-y-4 sm:space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xs aspect-[3/4] bg-[#F3EFE8] img-zoom-lux border border-[#EAE5DC]">
                <img
                  src="/images/manduva-pillars.jpg"
                  alt="Traditional Manduva Carved Wooden Pillars Hyderabad"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-white rounded-xl border border-[#EAE5DC] shadow-xs">
                <div className="font-serif text-sm font-semibold text-[#1A1715]">Architectural Pillars</div>
                <div className="text-[11px] text-[#68625A]">Centuries-old South Indian temple & courtyard motifs</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250} className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
              <div className="p-4 bg-[#F3EFE8] text-[#1A1715] rounded-xl border border-[#EAE5DC]">
                <div className="font-serif text-sm font-semibold text-[#8A6738]">Manduva Tradition</div>
                <div className="text-[11px] text-[#68625A]">Centred around open-sky courtyards and heirloom teak</div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xs aspect-[3/4] bg-[#F3EFE8] img-zoom-lux border border-[#EAE5DC]">
                <img
                  src="/images/manduva-teak-door.jpg"
                  alt="Ancestral Teakwood Handcarved Entrance Portal Hyderabad"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Editorial Storytelling */}
          <ScrollReveal delay={200} className="lg:col-span-6 space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 text-[#8A6738] text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#8A6738]" />
              <span>OUR HERITAGE & PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1715] leading-tight">
              Where Ancient Courtyards Meet <br />
              <span className="italic font-light text-[#8A6738]">Contemporary Luxury</span>
            </h2>

            <p className="text-base sm:text-lg text-[#1A1715]/90 font-light leading-relaxed">
              In traditional South Indian architecture, a <em>Manduva Logillu</em> is an ancestral courtyard mansion—a sanctuary framed by heavy timber pillars, terracotta tiles, and natural light. It was a home built to outlive generations.
            </p>

            <p className="text-sm sm:text-base text-[#68625A] font-light leading-relaxed">
              At <strong>Manduva Logillu Furniture's</strong>, we bring this enduring spirit into modern residences, luxury villas, and heritage resort projects across Hyderabad. Every piece in our collection is either a preserved antique or handcrafted from dense seasoned teakwood using ancestral joinery techniques.
            </p>

            {/* Core Values Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8A6738] shrink-0 mt-1" />
                <span className="text-xs sm:text-sm font-medium text-[#1A1715]">Dense Seasoned Indian Teakwood</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8A6738] shrink-0 mt-1" />
                <span className="text-xs sm:text-sm font-medium text-[#1A1715]">Authentic Antiques & Restored Heirlooms</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8A6738] shrink-0 mt-1" />
                <span className="text-xs sm:text-sm font-medium text-[#1A1715]">Handcrafted Joinery (Solid Wood Only)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8A6738] shrink-0 mt-1" />
                <span className="text-xs sm:text-sm font-medium text-[#1A1715]">Bespoke Commissions for Hyderabad Estates</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onNavigateAbout}
                className="inline-flex items-center gap-2 text-[#1A1715] font-serif text-base sm:text-lg font-medium border-b-2 border-[#8A6738] pb-0.5 hover:text-[#8A6738] transition-colors group"
              >
                <span>Read the Manduva Logillu Story</span>
                <ArrowUpRight className="w-4 h-4 text-[#8A6738] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
