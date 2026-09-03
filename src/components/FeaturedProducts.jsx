import React, { useState, useRef, useLayoutEffect } from 'react';
import { Eye, MessageSquare, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedProducts({ 
  products = [], 
  onSelectProduct, 
  onOpenEnquiryWithPiece, 
  onViewAllClick 
}) {
  const [activeTab, setActiveTab] = useState('all');
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const trackRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressTextRef = useRef(null);

  const tabs = [
    { id: 'all', label: 'All Featured' },
    { id: 'traditional-furniture', label: 'Courtyard & Traditional' },
    { id: 'antique-furniture', label: 'Antiques & Heirlooms' },
    { id: 'luxury-furniture', label: 'Luxury & Living' },
    { id: 'dining', label: 'Dining & Suites' },
  ];

  const filteredProducts = activeTab === 'all'
    ? products.filter(p => p.featured)
    : products.filter(p => p.categorySlug === activeTab || (p.tags && p.tags.includes(activeTab)));

  // =========================================================================
  // GSAP SCROLLTRIGGER PINNED HORIZONTAL SCROLL ANIMATION
  // =========================================================================
  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current || !trackRef.current) return;

    let ctx;
    let timerId;

    const initScroll = () => {
      ctx = gsap.context(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        const getScrollAmount = () => {
          const trackWidth = track.scrollWidth;
          const viewportWidth = window.innerWidth;
          return -(trackWidth - viewportWidth + 60);
        };

        const totalScroll = getScrollAmount();
        if (totalScroll >= 0) return;

        // Animate track horizontally on vertical page scroll
        gsap.to(track, {
          x: totalScroll,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            pin: true,
            pinSpacing: true,
            scrub: 0.45,
            start: 'top top',
            end: () => `+=${Math.abs(totalScroll) * 0.85}px`,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressBarRef.current) {
                progressBarRef.current.style.width = `${Math.round(self.progress * 100)}%`;
              }
              if (progressTextRef.current) {
                progressTextRef.current.innerText = `${Math.round(self.progress * 100)}%`;
              }
            },
          },
        });
      }, sectionRef);

      ScrollTrigger.refresh();
    };

    const rafId = requestAnimationFrame(() => {
      timerId = setTimeout(initScroll, 120);
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (timerId) clearTimeout(timerId);
      if (ctx) ctx.revert();
    };
  }, [activeTab, filteredProducts.length]);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen bg-[#faf8f2] border-t border-[#eadcc8] overflow-hidden select-none isolate"
      id="featured-showcase-pinned"
    >
      {/* Pinned Stage Container */}
      <div 
        ref={stageRef}
        className="h-full w-full flex flex-col justify-between py-5 sm:py-7 lg:py-8 px-4 sm:px-8 lg:px-12"
      >
        
        {/* =========================================================================
            HEADER BAR: Section Title & Filter Tabs
           ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 border-b border-[#eadcc8]/60 shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eadcc8]/60 text-[#2d2119] text-xs font-semibold tracking-widest uppercase font-sora mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#f97316]" />
              <span>EXEMPLARY SHOWCASE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2d2119]">
              Pieces Worth Keeping
            </h2>
            <p className="text-[#76665a] text-xs font-light mt-0.5 hidden sm:block">
              Scroll to explore dense seasoned teakwood creations, swing jhulas, and restored antiques.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 font-sora ${
                  activeTab === tab.id
                    ? 'bg-[#2d2119] text-[#faf8f2] shadow-sm'
                    : 'bg-white text-[#40342c] hover:bg-[#eadcc8]/60 border border-[#eadcc8]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            HORIZONTAL SCROLLING TRACK: Product Cards with GSAP Scrub
           ========================================================================= */}
        <div className="relative w-full flex-grow flex items-center overflow-visible my-auto">
          <div
            ref={trackRef}
            className="flex items-center gap-5 sm:gap-7 pl-1 pr-24 will-change-transform"
          >
            {filteredProducts.map((product) => {
              const imageSrc = (product.images && product.images[0]) || product.image || '/images/manduva-hero.jpg';
              const productName = product.name || product.title || 'Manduva Heirloom Furniture';
              const priceText = product.price || product.priceDisplay || 'Enquire for Price';
              const materialText = (product.materials && product.materials.split(',')[0]) || product.woodType || product.badge || 'Solid Teakwood';
              const dimensionText = product.dimensions || 'Dimensions on Enquiry';
              const availabilityText = product.availability || product.leadTime || 'In Showroom Display';

              return (
                <div
                  key={product.id}
                  className="w-[280px] sm:w-[320px] md:w-[360px] shrink-0 bg-white rounded-3xl overflow-hidden border border-[#eadcc8] shadow-lux hover:shadow-lux-hover transition-all duration-300 flex flex-col group"
                >
                  {/* Product Image Area */}
                  <div 
                    onClick={() => onSelectProduct(product)}
                    className="relative aspect-[4/3] w-full overflow-hidden bg-[#2d2119] cursor-pointer img-zoom-lux"
                  >
                    <img
                      src={imageSrc}
                      alt={`${productName} - Manduva Logillu Furniture Hyderabad`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-1.5 z-10">
                      <span className="px-2.5 py-1 rounded-full bg-[#2d2119]/90 backdrop-blur-md text-[#faf8f2] text-[10px] font-bold uppercase tracking-wider font-sora">
                        {materialText}
                      </span>
                      {product.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-[#f97316] text-white text-[10px] font-semibold tracking-wider font-sora">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Quick View Hover Button */}
                    <div className="absolute inset-0 bg-[#2d2119]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 pointer-events-none">
                      <span className="px-4 py-2 rounded-full bg-white text-[#2d2119] text-xs font-bold tracking-wider uppercase shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-1.5 font-sora">
                        <Eye className="w-3.5 h-3.5 text-[#f97316]" />
                        <span>Quick View</span>
                      </span>
                    </div>
                  </div>

                  {/* Product Information Body */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow space-y-2.5">
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase tracking-widest text-[#f97316] font-semibold font-sora">
                        {product.category}
                      </div>
                      <h3 
                        onClick={() => onSelectProduct(product)}
                        className="font-serif text-lg font-normal text-[#2d2119] group-hover:text-[#f97316] transition-colors cursor-pointer line-clamp-1"
                      >
                        {productName}
                      </h3>
                      <p className="text-xs text-[#76665a] line-clamp-2 font-light leading-relaxed">
                        {product.shortDescription || product.description}
                      </p>
                    </div>

                    {/* Dimensions & Availability */}
                    <div className="pt-2 border-t border-[#eadcc8]/60 flex items-center justify-between text-[11px] text-[#76665a]">
                      <span className="line-clamp-1 max-w-[170px]">{dimensionText}</span>
                      <span className="font-medium text-[#2d2119] font-sora shrink-0">{availabilityText}</span>
                    </div>

                    {/* Price & Action Buttons */}
                    <div className="pt-2 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-[#76665a] block font-sora">Price</span>
                        <span className="font-serif text-base sm:text-lg font-bold text-[#2d2119]">{priceText}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openWhatsApp({
                            intent: 'product',
                            productName: productName,
                            productCode: product.id
                          })}
                          className="p-2 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                          title="Enquire on WhatsApp"
                          aria-label="WhatsApp Enquiry"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                        </button>

                        <button
                          onClick={() => onOpenEnquiryWithPiece(productName)}
                          className="px-3.5 py-1.5 rounded-full bg-[#2d2119] text-[#faf8f2] text-xs font-semibold hover:bg-[#40342c] transition-colors shadow-sm font-sora"
                        >
                          Enquire
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            BOTTOM PROGRESS BAR & CONTROLS
           ========================================================================= */}
        <div className="flex items-center justify-between pt-2.5 border-t border-[#eadcc8]/60 shrink-0 font-sora">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-widest text-[#76665a] font-semibold">
              SCROLL PROGRESS
            </span>
            <div className="w-28 sm:w-44 h-1.5 rounded-full bg-[#eadcc8] overflow-hidden">
              <div
                ref={progressBarRef}
                className="h-full bg-gradient-to-r from-[#fb923c] to-[#f97316] rounded-full transition-all duration-75"
                style={{ width: '0%' }}
              />
            </div>
            <span 
              ref={progressTextRef}
              className="text-[11px] font-bold text-[#2d2119] min-w-[32px]"
            >
              0%
            </span>
          </div>

          <button
            onClick={onViewAllClick}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2d2119] hover:text-[#f97316] transition-colors group"
          >
            <span>View All ({products.length})</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
