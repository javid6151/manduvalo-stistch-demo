import React, { useRef, useLayoutEffect } from 'react';
import { Star, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const leftSpanRef = useRef(null);
  const rightSpanRef = useRef(null);
  const titleWrapperRef = useRef(null);
  const bgImageRef = useRef(null);
  const metaTopRef = useRef(null);
  const metaBottomRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    let ctx;
    let timerId;

    const initHeroScroll = () => {
      ctx = gsap.context(() => {
        const container = containerRef.current;
        if (!container) return;

        // Master Timeline pinned with ScrollTrigger - Snappy & Responsive
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: '+=50%',
            pin: true,
            scrub: 0.35,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          }
        });

        // 1. Doors part outward to opposite edges
        tl.to(leftPanelRef.current, { xPercent: -105, ease: 'none' }, 0)
          .to(rightPanelRef.current, { xPercent: 105, ease: 'none' }, 0);

        // 2. Wordmark spans part outward & scale up while letter-spacing tightens
        tl.to(leftSpanRef.current, { x: '-44vw', ease: 'none' }, 0)
          .to(rightSpanRef.current, { x: '44vw', ease: 'none' }, 0)
          .to(titleWrapperRef.current, { 
            scale: 1.2, 
            letterSpacing: '-0.04em',
            opacity: 0, 
            ease: 'none' 
          }, 0);

        // 3. Background image settles from scale 1.15 to 1.00
        tl.to(bgImageRef.current, { scale: 1.0, ease: 'none' }, 0);

        // 4. Corner metadata fades out
        tl.to([metaTopRef.current, metaBottomRef.current], { opacity: 0, ease: 'none' }, 0);

      }, containerRef);

      ScrollTrigger.refresh();
    };

    const rafId = requestAnimationFrame(() => {
      timerId = setTimeout(initHeroScroll, 100);
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (timerId) clearTimeout(timerId);
      if (ctx) ctx.revert();
    };
  }, []);

  const handleScrollToUnveil = () => {
    window.scrollTo({ top: window.innerHeight * 0.6, behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-[#2d2119] overflow-hidden select-none isolate"
      id="portal-hero-section"
    >
      {/* =========================================================================
          LAYER 1 (Back): Full-bleed image starting overscaled and settling to 1
         ========================================================================= */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 w-full h-full will-change-transform scale-[1.15]"
      >
        <img
          src="/images/manduva-hero.jpg"
          alt="Manduva Logillu Handcrafted Luxury Teakwood Furniture Hyderabad"
          className="w-full h-full object-cover object-center brightness-[0.96] contrast-[1.06]"
          loading="eager"
        />
        {/* Warm Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2d2119]/70 via-transparent to-[#2d2119]/30 pointer-events-none" />
      </div>

      {/* =========================================================================
          LAYER 2: TWO solid teak panels meeting in the middle, parting on scroll
         ========================================================================= */}
      
      {/* Left Solid Teak Panel */}
      <div
        ref={leftPanelRef}
        className="absolute top-0 bottom-0 left-0 w-[50.5vw] bg-[#2d2119] z-20 shadow-2xl border-r border-[#fb923c]/20 will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#382b21] via-[#2d2119] to-[#20150e] opacity-98" />
        <div className="absolute top-0 bottom-0 right-0 w-[1.5px] bg-gradient-to-b from-[#fb923c]/10 via-[#fb923c]/50 to-[#fb923c]/10" />
      </div>

      {/* Right Solid Teak Panel */}
      <div
        ref={rightPanelRef}
        className="absolute top-0 bottom-0 right-0 w-[50.5vw] bg-[#2d2119] z-20 shadow-2xl border-l border-[#fb923c]/20 will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-l from-[#382b21] via-[#2d2119] to-[#20150e] opacity-98" />
        <div className="absolute top-0 bottom-0 left-0 w-[1.5px] bg-gradient-to-b from-[#fb923c]/10 via-[#fb923c]/50 to-[#fb923c]/10" />
      </div>

      {/* =========================================================================
          LAYER 3: HARMONIOUS SINGLE-LINE PORTAL TITLE (MANDUVA • LOGILLU)
         ========================================================================= */}
      <div
        ref={titleWrapperRef}
        className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none will-change-transform px-4 sm:px-6 md:px-8"
      >
        {/* Ambient Warm Aura behind the Title */}
        <div className="absolute w-[80vw] max-w-4xl h-52 bg-gradient-to-r from-[#fb923c]/20 via-[#fdba74]/25 to-[#fb923c]/20 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Proportional Single Horizontal Row - Never Wraps */}
        <div className="flex items-center justify-center flex-nowrap whitespace-nowrap gap-2 sm:gap-4 md:gap-6 lg:gap-8 max-w-full">
          
          {/* First Span: MANDUVA (travels left) */}
          <span
            ref={leftSpanRef}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[9.5rem] font-bold text-[#faf8f2] drop-shadow-[0_12px_30px_rgba(0,0,0,0.85)] will-change-transform inline-block leading-none tracking-tight"
          >
            MANDUVA
          </span>

          {/* Center Glowing Dot */}
          <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-[#fb923c] shadow-[0_0_20px_#fb923c] shrink-0 animate-pulse my-auto" />

          {/* Last Span: LOGILLU (travels right) */}
          <span
            ref={rightSpanRef}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[9.5rem] font-normal italic text-[#fb923c] drop-shadow-[0_12px_30px_rgba(0,0,0,0.85)] will-change-transform inline-block leading-none tracking-tight"
          >
            LOGILLU
          </span>

        </div>

        <div className="mt-4 sm:mt-6 text-center">
          <p className="font-sora text-[11px] sm:text-xs md:text-sm lg:text-base uppercase tracking-[0.32em] sm:tracking-[0.4em] text-[#eadcc8] font-semibold drop-shadow-md">
            Resort • Villa • Farmhouse Furniture
          </p>
        </div>
      </div>

      {/* =========================================================================
          LAYER 4: Corner metadata pinned to top and bottom edges
         ========================================================================= */}
      
      {/* Top Edge Metadata */}
      <div 
        ref={metaTopRef}
        className="absolute top-0 inset-x-0 z-30 pointer-events-none p-5 sm:p-8 md:p-10 flex items-center justify-between text-[10px] sm:text-xs font-sora tracking-[0.16em] uppercase text-[#eadcc8]/90 font-semibold"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#fb923c] animate-pulse" />
          <span>EST. HYDERABAD • TELANGANA</span>
        </div>
        <div className="flex items-center gap-1.5 text-amber-400">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-[#fb923c]" />
          <span className="text-[#faf8f2] font-bold">5.0</span>
          <span className="hidden sm:inline text-[#eadcc8]/80">(24 GOOGLE REVIEWS)</span>
        </div>
      </div>

      {/* Bottom Edge Metadata */}
      <div 
        ref={metaBottomRef}
        className="absolute bottom-0 inset-x-0 z-30 pointer-events-none p-5 sm:p-8 md:p-10 flex items-center justify-end text-[10px] sm:text-xs font-sora tracking-[0.16em] uppercase text-[#eadcc8]/90 font-semibold"
      >
        <button
          onClick={handleScrollToUnveil}
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full bg-[#382b21]/90 backdrop-blur-md border border-[#fb923c]/40 text-[#faf8f2] text-xs font-semibold hover:bg-[#fb923c] hover:text-[#2d2119] transition-all shadow-lg group"
        >
          <span>SCROLL OR CLICK TO UNVEIL</span>
          <ChevronDown className="w-4 h-4 text-[#fb923c] group-hover:text-[#2d2119] group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>

    </section>
  );
}
