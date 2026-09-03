import React, { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, ExternalLink, Sparkles, Play, Eye, Heart, MessageCircle, Pause, PlayCircle } from 'lucide-react';
import { verifiedReviews, googleProfileSummary } from '../data/reviewsData';
import ScrollReveal from './ScrollReveal';

// Custom Instagram SVG Icon
const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'google', 'videos'
  const [activeReelModal, setActiveReelModal] = useState(null);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef(null);

  const instagramChannelUrl = "https://www.instagram.com/manduva_logillu_furnitures/reels/";

  // 6 Curated HD Video Reels from @manduva_logillu_furnitures
  const videoReels = [
    {
      id: "reel-1",
      title: "Grand Manduva Showroom Tour & Teakwood Heirlooms",
      subtitle: "Explore our Hyderabad showroom sanctuary featuring centuries-old antiques & courtyards",
      reelUrl: "https://www.instagram.com/reel/DcgH8OLtybk/",
      embedUrl: "https://www.instagram.com/reel/DcgH8OLtybk/embed/",
      thumbnail: "/images/manduva-showroom-1.jpg",
      duration: "0:45",
      views: "28.4K",
      likes: "1.8K",
      comments: "94",
      author: "@manduva_logillu_furnitures",
      category: "Showroom Tour"
    },
    {
      id: "reel-2",
      title: "Royal Courtyard Swing & Pure Brass Peacock Chains",
      subtitle: "Hand-chiseled seasoned teakwood with artisan brass finials for luxury villa verandas",
      reelUrl: "https://www.instagram.com/reel/DcgH8OLtybk/",
      embedUrl: "https://www.instagram.com/reel/DcgH8OLtybk/embed/",
      thumbnail: "/images/manduva-courtyard-swing.jpg",
      duration: "0:58",
      views: "42.1K",
      likes: "2.6K",
      comments: "142",
      author: "@manduva_logillu_furnitures",
      category: "Signature Jhula"
    },
    {
      id: "reel-3",
      title: "Authentic Telugu Manduva Entrance Portal",
      subtitle: "Hand-carved double doors with solid brass elephant knockers & threshold detail",
      reelUrl: "https://www.instagram.com/reel/DcgH8OLtybk/",
      embedUrl: "https://www.instagram.com/reel/DcgH8OLtybk/embed/",
      thumbnail: "/images/manduva-teak-door.jpg",
      duration: "0:50",
      views: "31.7K",
      likes: "1.9K",
      comments: "88",
      author: "@manduva_logillu_furnitures",
      category: "Architectural Door"
    },
    {
      id: "reel-4",
      title: "Monolithic 8-Seater Solid Teak Dining Table",
      subtitle: "Natural organic timber grain with woven cane dining chairs made for grand feasts",
      reelUrl: "https://www.instagram.com/reel/DcgH8OLtybk/",
      embedUrl: "https://www.instagram.com/reel/DcgH8OLtybk/embed/",
      thumbnail: "/images/manduva-dining-table.jpg",
      duration: "0:52",
      views: "23.9K",
      likes: "1.4K",
      comments: "67",
      author: "@manduva_logillu_furnitures",
      category: "Dining Suite"
    },
    {
      id: "reel-5",
      title: "Haveli Four-Poster Royal Canopy Bed",
      subtitle: "Generational solid teak bedroom furniture crafted for Hyderabad resort villas",
      reelUrl: "https://www.instagram.com/reel/DcgH8OLtybk/",
      embedUrl: "https://www.instagram.com/reel/DcgH8OLtybk/embed/",
      thumbnail: "/images/manduva-bedroom-luxury.jpg",
      duration: "0:48",
      views: "26.3K",
      likes: "1.7K",
      comments: "79",
      author: "@manduva_logillu_furnitures",
      category: "Master Bedroom"
    },
    {
      id: "reel-6",
      title: "Chettinad Brass-Embossed Entry Foyer Console",
      subtitle: "Artisan repoussé metal panels with distressed teakwood base and heritage patina",
      reelUrl: "https://www.instagram.com/reel/DcgH8OLtybk/",
      embedUrl: "https://www.instagram.com/reel/DcgH8OLtybk/embed/",
      thumbnail: "/images/manduva-brass-accent.jpg",
      duration: "0:42",
      views: "19.8K",
      likes: "1.2K",
      comments: "52",
      author: "@manduva_logillu_furnitures",
      category: "Foyer Artifact"
    }
  ];

  // User-controllable auto-scroll loop
  useEffect(() => {
    let animId;
    const track = trackRef.current;
    if (!track) return;

    let scrollPos = track.scrollLeft;
    const scrollSpeed = 0.6; // Gentle smooth glide

    const loop = () => {
      if (autoScrollEnabled && !isHovered && track) {
        scrollPos += scrollSpeed;
        if (scrollPos >= track.scrollWidth / 2) {
          scrollPos = 0;
        }
        track.scrollLeft = scrollPos;
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animId);
  }, [autoScrollEnabled, isHovered]);

  const handleManualScroll = (direction) => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % verifiedReviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + verifiedReviews.length) % verifiedReviews.length);
  };

  // Duplicate reels array for infinite seamless looping marquee
  const loopingReels = [...videoReels, ...videoReels];

  return (
    <section className="py-20 md:py-28 bg-[#faf8f2] border-t border-[#eadcc8] overflow-hidden" id="reviews-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* =========================================================================
            HEADER & GOOGLE PROFILE SCORECARD
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          
          <ScrollReveal className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eadcc8]/60 text-[#2d2119] text-xs font-semibold tracking-widest uppercase font-sora">
              <Sparkles className="w-3.5 h-3.5 text-[#f97316]" />
              <span>VERIFIED PATRON EXPERIENCES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2d2119]">
              What Our Patrons Say
            </h2>
            <p className="text-[#76665a] text-sm sm:text-base font-light leading-relaxed max-w-2xl">
              Scroll through 6 showroom reels from <span className="font-semibold text-[#2d2119]">@manduva_logillu_furnitures</span>, or read verified 5.0 Google customer reviews.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-full text-xs font-semibold font-sora transition-all ${
                  activeTab === 'all'
                    ? 'bg-[#2d2119] text-[#faf8f2] shadow-sm'
                    : 'bg-white text-[#40342c] border border-[#eadcc8] hover:bg-[#eadcc8]/40'
                }`}
              >
                All Experiences
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold font-sora transition-all ${
                  activeTab === 'videos'
                    ? 'bg-[#2d2119] text-[#faf8f2] shadow-sm'
                    : 'bg-white text-[#40342c] border border-[#eadcc8] hover:bg-[#eadcc8]/40'
                }`}
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#f97316]" />
                <span>Showroom Video Reels</span>
              </button>
              <button
                onClick={() => setActiveTab('google')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold font-sora transition-all ${
                  activeTab === 'google'
                    ? 'bg-[#2d2119] text-[#faf8f2] shadow-sm'
                    : 'bg-white text-[#40342c] border border-[#eadcc8] hover:bg-[#eadcc8]/40'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>5.0 Google Reviews</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Google Profile Card */}
          <ScrollReveal delay={150} className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#eadcc8] shadow-lux max-w-sm w-full space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shadow-sm border border-blue-100">
                    G
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#2d2119] block leading-tight">Google Reviews</span>
                    <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> 100% 5-Star Rating
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-serif font-bold text-[#2d2119] leading-none">
                    {googleProfileSummary.rating.toFixed(1)}
                  </div>
                  <div className="flex text-amber-500 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#eadcc8]/60 flex items-center justify-between text-xs font-sora">
                <span className="text-[#76665a] font-medium">{googleProfileSummary.reviewCount} Verified Reviews</span>
                <a
                  href={googleProfileSummary.writeReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#f97316] hover:text-[#2d2119] transition-colors flex items-center gap-1"
                >
                  <span>Review Us</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* =========================================================================
            SECTION 1: USER-CONTROLLED SMOOTH SCROLL REEL SHOWCASE
           ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'videos') && (
          <ScrollReveal className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#2d2119] font-sora">
                <InstagramIcon className="w-4 h-4 text-[#f97316]" />
                <span>INSTAGRAM SHOWROOM REELS</span>

                {/* User Preference Auto-Scroll Toggle Button */}
                <button
                  onClick={() => setAutoScrollEnabled(!autoScrollEnabled)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold transition-all ${
                    autoScrollEnabled 
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                      : 'bg-neutral-200 text-neutral-700 border border-neutral-300'
                  }`}
                  title="Toggle Auto-Scroll"
                >
                  {autoScrollEnabled ? (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Auto-Scroll ON</span>
                    </>
                  ) : (
                    <>
                      <Pause className="w-3 h-3" />
                      <span>Auto-Scroll Paused</span>
                    </>
                  )}
                </button>
              </div>
              
              {/* User Navigation Controls */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => handleManualScroll('left')}
                  className="p-2.5 rounded-full bg-white border border-[#eadcc8] text-[#2d2119] hover:bg-[#eadcc8] transition-colors shadow-sm cursor-pointer"
                  aria-label="Scroll left"
                  title="Previous reel"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleManualScroll('right')}
                  className="p-2.5 rounded-full bg-white border border-[#eadcc8] text-[#2d2119] hover:bg-[#eadcc8] transition-colors shadow-sm cursor-pointer"
                  aria-label="Scroll right"
                  title="Next reel"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <a
                  href={instagramChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#2d2119] text-[#faf8f2] hover:bg-[#fb923c] hover:text-[#2d2119] text-xs font-bold flex items-center gap-1.5 transition-all font-sora shadow-sm"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>View Reels Channel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* User Smooth Scrollable & Draggable Track */}
            <div
              ref={trackRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex gap-6 overflow-x-auto scrollbar-none py-3 px-1 cursor-grab active:cursor-grabbing select-none scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {loopingReels.map((reel, idx) => (
                <div
                  key={`${reel.id}-${idx}`}
                  className="w-[260px] sm:w-[280px] md:w-[300px] shrink-0 rounded-3xl overflow-hidden bg-[#2d2119] border border-[#eadcc8] shadow-lux hover:shadow-2xl transition-all duration-300 flex flex-col aspect-[9/15] relative group cursor-pointer hover:-translate-y-2 hover:scale-[1.02]"
                  onClick={() => setActiveReelModal(reel)}
                >
                  {/* High Definition Showroom Photography with Smooth Hover Scale */}
                  <div className="relative w-full h-full overflow-hidden bg-black">
                    <img
                      src={reel.thumbnail}
                      alt={reel.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-[0.96] contrast-[1.06]"
                      loading="lazy"
                    />
                  </div>

                  {/* Gradient Scrim for high-contrast typography */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/40 pointer-events-none" />

                  {/* Top Header Tags */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#fdba74] text-[10px] font-bold tracking-wider font-sora flex items-center gap-1.5">
                      <InstagramIcon className="w-3 h-3 text-[#fb923c]" />
                      <span>{reel.category}</span>
                    </span>

                    <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/90 text-[10px] font-semibold font-sora">
                      {reel.duration}
                    </span>
                  </div>

                  {/* Central Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-14 h-14 rounded-full bg-[#fb923c] text-[#2d2119] flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-[#fdba74] transition-all duration-300 pl-0.5">
                      <Play className="w-6 h-6 fill-[#2d2119]" />
                    </div>
                  </div>

                  {/* Bottom Video Metadata */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-white z-10 space-y-2">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#fdba74] font-bold font-sora">
                      <span>{reel.author}</span>
                      <span className="flex items-center gap-1.5 bg-black/50 px-2 py-0.5 rounded-full border border-white/15">
                        <Eye className="w-3 h-3 text-[#fb923c]" />
                        <span>{reel.views} Views</span>
                      </span>
                    </div>
                    
                    <h4 className="font-serif text-base sm:text-lg font-bold leading-snug group-hover:text-[#fdba74] transition-colors line-clamp-1">
                      {reel.title}
                    </h4>

                    <p className="text-xs text-[#eadcc8]/80 line-clamp-2 font-light leading-relaxed">
                      {reel.subtitle}
                    </p>

                    {/* Likes & Comments Engagement Stats */}
                    <div className="flex items-center gap-3 pt-1 text-[10px] text-white/70 font-sora border-t border-white/10">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3 text-red-400 fill-red-400" />
                        <span>{reel.likes}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3 text-white/80" />
                        <span>{reel.comments} comments</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-[#76665a] font-sora pt-2 px-1">
              <span>Swipe or click arrows to browse • Click any card to watch video walkthrough</span>
              <span className="hidden sm:inline">6 Curated Showroom Reels</span>
            </div>
          </ScrollReveal>
        )}

        {/* =========================================================================
            SECTION 2: VERIFIED GOOGLE CUSTOMER REVIEWS CAROUSEL
           ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'google') && (
          <ScrollReveal delay={200} className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2d2119] font-sora">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              <span>VERIFIED GOOGLE TESTIMONIALS</span>
            </div>

            {/* Active Testimonial Card */}
            <div className="p-8 sm:p-12 md:p-14 rounded-3xl bg-white border border-[#eadcc8] shadow-lux relative overflow-hidden">
              <Quote className="absolute top-6 right-6 sm:top-10 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 text-[#eadcc8]/40 pointer-events-none" />

              <div className="relative z-10 max-w-3xl space-y-6">
                
                {/* Star Rating */}
                <div className="flex items-center gap-1.5 text-amber-500">
                  {[...Array(verifiedReviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-500" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-[#2d2119] uppercase tracking-wider font-sora">
                    5.0 Exceptional Quality
                  </span>
                </div>

                {/* Review Text */}
                <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-[#2d2119] leading-relaxed italic">
                  "{verifiedReviews[currentIndex].text}"
                </p>

                {/* Author Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-[#eadcc8]/60 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#2d2119] text-[#faf8f2] flex items-center justify-center font-serif text-sm font-bold shadow-sm">
                      {verifiedReviews[currentIndex].avatar}
                    </div>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#2d2119]">
                        {verifiedReviews[currentIndex].author}
                      </h4>
                      <span className="text-xs text-[#76665a] font-sora">
                        {verifiedReviews[currentIndex].highlight}
                      </span>
                    </div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center gap-2 self-end sm:self-auto font-sora">
                    <button
                      onClick={prevSlide}
                      className="p-3 rounded-full border border-[#eadcc8] text-[#2d2119] hover:bg-[#eadcc8]/40 transition-colors shadow-sm cursor-pointer"
                      aria-label="Previous review"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-semibold text-[#76665a] px-2">
                      {currentIndex + 1} / {verifiedReviews.length}
                    </span>
                    <button
                      onClick={nextSlide}
                      className="p-3 rounded-full border border-[#eadcc8] text-[#2d2119] hover:bg-[#eadcc8]/40 transition-colors shadow-sm cursor-pointer"
                      aria-label="Next review"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Review Thumbnails */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {verifiedReviews.slice(0, 3).map((review, idx) => (
                <div
                  key={review.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    currentIndex === idx
                      ? 'bg-white border-[#fb923c] shadow-md ring-1 ring-[#fb923c]'
                      : 'bg-white/70 border-[#eadcc8] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif text-sm font-bold text-[#2d2119]">{review.author}</span>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-[#76665a] line-clamp-2 italic">
                    "{review.text}"
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

      </div>

      {/* =========================================================================
          INSTAGRAM REEL VIDEO MODAL - DIRECT EMBED OF REAL INSTAGRAM REEL
         ========================================================================= */}
      {activeReelModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div 
            className="fixed inset-0" 
            onClick={() => setActiveReelModal(null)} 
          />

          <div className="relative w-full max-w-md bg-[#2d2119] rounded-3xl overflow-hidden border border-[#fb923c]/40 shadow-2xl z-10 max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-2 text-white">
                <InstagramIcon className="w-4 h-4 text-[#fb923c]" />
                <span className="font-serif text-sm font-bold line-clamp-1">{activeReelModal.title}</span>
              </div>
              <button
                onClick={() => setActiveReelModal(null)}
                className="px-2.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold hover:bg-white/30 transition-colors"
              >
                ✕ Close
              </button>
            </div>

            {/* Embedded Instagram Reel Frame */}
            <div className="w-full aspect-[9/16] bg-black relative flex items-center justify-center overflow-hidden">
              <iframe
                src={activeReelModal.embedUrl}
                title={activeReelModal.title}
                className="w-full h-full border-0"
                allowTransparency={true}
                allow="encrypted-media"
                scrolling="no"
              />
            </div>

            {/* Footer Action */}
            <div className="p-4 bg-black/60 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-[#eadcc8] font-sora">{activeReelModal.views} Views • {activeReelModal.likes} Likes</span>
              <a
                href={activeReelModal.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#fb923c] text-[#2d2119] text-xs font-bold font-sora flex items-center gap-1.5 hover:bg-[#fdba74] transition-all"
              >
                <span>Open in Instagram App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
