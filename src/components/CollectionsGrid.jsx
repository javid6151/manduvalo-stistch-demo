import React, { useState, useRef, useLayoutEffect } from 'react';
import { ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CollectionsGrid({ categories = [], onSelectCategory }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const textContentRef = useRef(null);
  const progressBarRef = useRef(null);

  const slides = categories.length > 0 ? categories : [
    {
      id: "antique-furniture",
      name: "Antique Furniture",
      slug: "antique-furniture",
      tagline: "Timeless relics of royal Indian heritage",
      description: "Centuries-old aesthetic carved in dense, aged timber with authentic patina and historic motifs.",
      image: "/images/manduva-antique-1.jpg",
      count: 14
    }
  ];

  // Animate slide transition with seamless crossfade & text lift
  const triggerSlideAnimation = (index) => {
    setActiveSlide(index);

    // 1. Image Crossfade & Subtle Cinematic Zoom
    if (imagesContainerRef.current) {
      const allImgs = imagesContainerRef.current.querySelectorAll('.slide-bg-img');
      allImgs.forEach((img, i) => {
        if (i === index) {
          gsap.killTweensOf(img);
          gsap.set(img, { zIndex: 2 });
          gsap.fromTo(img, 
            { opacity: 0, scale: 1.04 }, 
            { opacity: 1, scale: 1.0, duration: 0.45, ease: 'power2.out' }
          );
        } else {
          gsap.set(img, { zIndex: 1 });
          gsap.to(img, { opacity: 0, duration: 0.35, ease: 'power2.inOut' });
        }
      });
    }

    // 2. Animate Editorial Typography
    if (textContentRef.current) {
      gsap.killTweensOf(textContentRef.current);
      gsap.fromTo(textContentRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }
      );
    }
  };

  // =========================================================================
  // GSAP SCROLLTRIGGER PINNED FULLSCREEN SLIDER - Snappy & Fluid
  // =========================================================================
  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current || slides.length === 0) return;

    let ctx;
    let timerId;

    const initSlider = () => {
      ctx = gsap.context(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Snappy, agile pin distance adjusted for mobile vs desktop
        const multiplier = window.innerWidth < 768 ? 0.25 : 0.35;
        const pinDistance = window.innerHeight * (slides.length * multiplier);

        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: `+=${pinDistance}px`,
          scrub: 0.35,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              progressBarRef.current.style.transform = `scaleY(${self.progress})`;
            }

            const currentSlide = Math.min(
              Math.floor(self.progress * slides.length),
              slides.length - 1
            );

            setActiveSlide((prev) => {
              if (prev !== currentSlide) {
                triggerSlideAnimation(currentSlide);
                return currentSlide;
              }
              return prev;
            });
          },
        });
      }, sectionRef);

      ScrollTrigger.refresh();
    };

    const rafId = requestAnimationFrame(() => {
      timerId = setTimeout(initSlider, 100);
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (timerId) clearTimeout(timerId);
      if (ctx) ctx.revert();
    };
  }, [slides.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-[#1a120d] overflow-hidden select-none isolate"
      id="collections-section"
    >
      {/* =========================================================================
          BACKGROUND IMAGES CONTAINER (Seamless Gradient Integration)
         ========================================================================= */}
      <div ref={imagesContainerRef} className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide-bg-img absolute inset-0 w-full h-full ${
              index === 0 ? 'opacity-100 z-2' : 'opacity-0 z-1'
            }`}
          >
            <img
              src={slide.image}
              alt={`${slide.name} - Manduva Logillu Furniture Hyderabad`}
              className="w-full h-full object-cover object-center brightness-[1.0] contrast-[1.05] saturate-[1.08]"
              loading={index === 0 ? "eager" : "lazy"}
            />
            
            {/* Seamless Left-to-Right & Bottom Vignettes (Blends naturally with typography and subsequent sections) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* =========================================================================
          TOP NAV OVERLAY / SECTION BADGE
         ========================================================================= */}
      <div className="absolute top-0 inset-x-0 p-6 sm:p-8 lg:p-12 flex items-center justify-between z-20 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#fdba74] text-xs font-semibold tracking-widest uppercase font-sora shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#fb923c]" />
          <span>CURATED DESIGN HORIZONS</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-xs font-sora tracking-wider uppercase shadow-lg">
          <Layers className="w-3.5 h-3.5 text-[#fb923c]" />
          <span>{slides.length} Curated Collections</span>
        </div>
      </div>

      {/* =========================================================================
          SEAMLESS EDITORIAL TYPOGRAPHY (No Pasted Box - Natural Integration)
         ========================================================================= */}
      <div className="absolute inset-y-0 left-0 p-6 sm:p-10 lg:p-16 flex items-center z-20 pointer-events-none max-w-2xl">
        <div 
          ref={textContentRef}
          className="space-y-4 sm:space-y-6 text-white pointer-events-auto"
        >
          {/* Eyebrow Tagline & Count Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#fb923c] text-[#1a120d] text-[10px] sm:text-xs font-bold uppercase tracking-widest font-sora shadow-lg">
              {slides[activeSlide]?.count} {typeof slides[activeSlide]?.count === 'number' ? 'Pieces' : 'Custom'}
            </span>
            <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-[#fdba74] font-semibold font-sora drop-shadow-md">
              {slides[activeSlide]?.tagline}
            </span>
          </div>

          {/* Large Editorial Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#faf8f2] tracking-tight leading-[1.02] drop-shadow-[0_8px_25px_rgba(0,0,0,0.9)]">
            {slides[activeSlide]?.name}
          </h2>

          {/* Flowing Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#eadcc8] font-light leading-relaxed max-w-lg drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            {slides[activeSlide]?.description}
          </p>

          {/* Action CTA Button */}
          <div className="pt-2">
            <button
              onClick={() => onSelectCategory(slides[activeSlide]?.slug)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#fb923c] text-[#1a120d] font-sora text-xs sm:text-sm font-bold tracking-wider hover:bg-[#fdba74] shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <span>Explore {slides[activeSlide]?.name}</span>
              <ArrowUpRight className="w-4 h-4 text-[#1a120d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          RIGHT-SIDE NUMERICAL LADDER & VERTICAL PROGRESS RAIL
         ========================================================================= */}
      <div className="absolute top-1/2 right-4 sm:right-8 lg:right-12 -translate-y-1/2 z-20 flex items-center gap-4 select-none">
        {/* Progress Rail */}
        <div className="relative w-1 h-64 sm:h-80 rounded-full bg-black/40 backdrop-blur-md overflow-hidden border border-white/20">
          <div
            ref={progressBarRef}
            className="w-full h-full bg-gradient-to-b from-[#fb923c] to-[#f97316] origin-top will-change-transform"
            style={{ transform: 'scaleY(0)' }}
          />
        </div>

        {/* Index List */}
        <div className="flex flex-col gap-2 sm:gap-2.5 py-2">
          {slides.map((slide, idx) => {
            const isActive = activeSlide === idx;
            const numStr = (idx + 1).toString().padStart(2, '0');

            return (
              <button
                key={slide.id}
                onClick={() => triggerSlideAnimation(idx)}
                className={`group flex items-center gap-2.5 text-left focus:outline-none cursor-pointer py-1 px-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-black/60 backdrop-blur-md border border-[#fb923c]/40 shadow-lg' 
                    : 'hover:bg-black/30'
                }`}
              >
                {/* Indicator Line */}
                <span
                  className={`h-[2px] bg-[#fb923c] transition-all duration-300 ${
                    isActive ? 'w-4 opacity-100' : 'w-0 opacity-0'
                  }`}
                />

                <span
                  className={`text-xs sm:text-sm font-bold tracking-widest font-sora transition-all duration-300 ${
                    isActive ? 'text-[#fb923c]' : 'text-white/60 group-hover:text-white'
                  }`}
                >
                  {numStr}
                </span>

                <span
                  className={`text-[10px] sm:text-[11px] uppercase tracking-wider font-sora transition-all duration-300 hidden lg:inline ${
                    isActive ? 'text-[#faf8f2] font-bold' : 'text-white/50 group-hover:text-white/80'
                  }`}
                >
                  {slide.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          BOTTOM HELPER BAR
         ========================================================================= */}
      <div className="absolute bottom-6 inset-x-0 px-6 sm:px-12 flex items-center justify-between text-xs font-sora text-white/80 z-20 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
          <span className="w-2 h-2 rounded-full bg-[#fb923c] animate-pulse" />
          <span>SCROLL TO ADVANCE ARCHIVES</span>
        </div>
        <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[11px] uppercase tracking-widest text-[#fdba74]">
          {activeSlide + 1} of {slides.length} COLLECTIONS
        </div>
      </div>

    </section>
  );
}
