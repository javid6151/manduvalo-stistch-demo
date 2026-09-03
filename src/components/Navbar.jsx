import React, { useState, useEffect } from 'react';
import { Search, Phone, MessageSquare, Menu, X, Sparkles, Sliders, ChevronRight, Home, Grid, MapPin, Compass } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function Navbar({ 
  currentRoute, 
  setCurrentRoute, 
  storeConfig, 
  onOpenSearch, 
  onOpenAdmin,
  onOpenEnquiry 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', route: 'home', icon: Home },
    { label: 'Collections', route: 'collections', icon: Compass },
    { label: 'Furniture', route: 'furniture', icon: Grid },
    { label: 'About', route: 'about', icon: Sparkles },
    { label: 'Gallery', route: 'gallery', icon: Grid },
    { label: 'Reviews', route: 'reviews', icon: Sparkles },
    { label: 'Contact', route: 'contact', icon: MapPin },
  ];

  const handleNavClick = (route) => {
    setCurrentRoute(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* =========================================================================
          TOP NAVBAR (Responsive across Desktop, Tablet & Mobile)
         ========================================================================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#2d2119]/95 backdrop-blur-2xl py-2 sm:py-3 border-b border-[#fb923c]/30 shadow-2xl'
            : 'bg-[#2d2119]/85 backdrop-blur-xl py-2.5 sm:py-3.5 border-b border-[#fb923c]/20'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          
          {/* =========================================================================
              LEFT: Brand Crest & Title (Optimized for Mobile)
             ========================================================================= */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 text-left group focus:outline-none shrink-0 min-w-0"
            aria-label="Manduva Logillu Furniture Home"
          >
            <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-xl p-0.5 bg-white/10 backdrop-blur-sm border border-white/20 shadow-md shrink-0">
              <img
                src="/images/manduva-logo.png"
                alt="Manduva Logillu Crest"
                className="h-full w-auto object-contain rounded group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="flex flex-col justify-center min-w-0">
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-sm sm:text-base lg:text-lg xl:text-xl font-bold tracking-[0.08em] sm:tracking-[0.12em] text-[#faf8f2] group-hover:text-[#fb923c] transition-colors leading-none truncate">
                  MANDUVA LOGILLU
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#fb923c] shrink-0" />
              </div>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.16em] sm:tracking-[0.24em] text-[#eadcc8]/80 font-semibold mt-0.5 font-sora hidden sm:block truncate">
                Resort & Farmhouse Furniture • Hyderabad
              </span>
            </div>
          </button>

          {/* =========================================================================
              CENTER: Desktop Navigation Links
             ========================================================================= */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  className={`relative px-3.5 py-1.5 rounded-full font-sora text-xs uppercase tracking-[0.12em] transition-all duration-200 ${
                    isActive
                      ? 'text-[#fb923c] font-bold bg-[#40342c]/90 border border-[#fb923c]/40 shadow-sm'
                      : 'text-[#eadcc8]/90 font-medium hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#fb923c]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* =========================================================================
              RIGHT: Action Group (Clean on Mobile, Full on Desktop)
             ========================================================================= */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            
            {/* Quick Search */}
            <button
              onClick={onOpenSearch}
              className="p-2 sm:p-2.5 rounded-full text-[#eadcc8] hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Search Collection"
              title="Search Collection"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* WhatsApp Quick Chat */}
            <button
              onClick={() => openWhatsApp({ intent: 'general' })}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-900/90 transition-colors text-xs font-semibold font-sora shadow-sm flex items-center gap-1"
              aria-label="WhatsApp Us"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 fill-emerald-400" />
              <span className="hidden md:inline">WhatsApp</span>
            </button>

            {/* Direct Phone Helpline (Desktop) */}
            <a
              href={`tel:${storeConfig.phoneNumber}`}
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#fb923c]/30 bg-[#382b21]/80 text-xs font-medium text-[#faf8f2] hover:bg-[#40342c] hover:border-[#fb923c] transition-all font-sora"
              title="Call Showroom"
            >
              <Phone className="w-3.5 h-3.5 text-[#fb923c]" />
              <span>{storeConfig.displayPhone}</span>
            </a>

            {/* Enquire Now (Tablet & Desktop) */}
            <button
              onClick={onOpenEnquiry}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fb923c] text-[#2d2119] text-xs font-bold tracking-wider hover:bg-[#fdba74] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-sora group"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#2d2119] group-hover:rotate-12 transition-transform" />
              <span>Enquire</span>
            </button>

            {/* Admin CMS Trigger (Desktop) */}
            <button
              onClick={onOpenAdmin}
              className="hidden sm:flex p-2 rounded-full text-[#eadcc8]/60 hover:text-white hover:bg-white/10 transition-colors"
              title="CMS Catalog Admin"
              aria-label="Admin CMS Settings"
            >
              <Sliders className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Menu Toggle (Prominent on all mobile screens) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden p-2 rounded-xl bg-[#fb923c] text-[#2d2119] hover:bg-[#fdba74] transition-all shadow-md focus:outline-none flex items-center justify-center shrink-0"
              aria-label="Open Mobile Menu"
              title="Navigation Menu"
            >
              <Menu className="w-5 h-5 text-[#2d2119] stroke-[2.5]" />
            </button>
          </div>

        </div>
      </header>

      {/* =========================================================================
          MOBILE SLIDE-OVER DRAWER (Full-Screen Responsive Glass)
         ========================================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)} 
          />

          <div className="relative w-full max-w-sm bg-[#2d2119] text-[#faf8f2] h-full shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto border-r border-[#fb923c]/30">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#fb923c]/20">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl p-1 bg-white/10 border border-white/20 flex items-center justify-center">
                    <img
                      src="/images/manduva-logo.png"
                      alt="Manduva Logillu Logo"
                      className="h-full w-auto object-contain rounded"
                    />
                  </div>
                  <div>
                    <div className="font-serif text-base font-bold text-[#faf8f2]">MANDUVA LOGILLU</div>
                    <div className="text-[10px] tracking-widest text-[#fdba74] uppercase font-sora">Hyderabad Sanctuary</div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-white/10 text-[#faf8f2] hover:bg-white/20 border border-white/20 transition-colors"
                  aria-label="Close Mobile Menu"
                >
                  <X className="w-5 h-5 text-[#fb923c]" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-6 space-y-1.5">
                {navLinks.map((link) => {
                  const isActive = currentRoute === link.route;
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.route}
                      onClick={() => handleNavClick(link.route)}
                      className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-left font-serif text-lg transition-all ${
                        isActive
                          ? 'bg-[#40342c] text-[#fb923c] font-bold border border-[#fb923c]/40 shadow-md'
                          : 'text-[#eadcc8] hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-[#fb923c]' : 'text-[#eadcc8]/60'}`} />
                        <span>{link.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#fdba74]" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-6 border-t border-[#fb923c]/20 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openWhatsApp({ intent: 'general' });
                  }}
                  className="w-full py-3 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-colors font-sora"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
                <a
                  href={`tel:${storeConfig.phoneNumber}`}
                  className="w-full py-3 px-3 rounded-xl bg-[#382b21] hover:bg-[#40342c] border border-[#fb923c]/30 text-[#faf8f2] text-xs font-bold flex items-center justify-center gap-2 text-center shadow-lg transition-colors font-sora"
                >
                  <Phone className="w-4 h-4 text-[#fb923c]" />
                  <span>Call Store</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3.5 rounded-xl bg-[#fb923c] text-[#2d2119] text-xs font-bold tracking-wider hover:bg-[#fdba74] transition-colors shadow-xl font-sora"
              >
                Request Custom Piece Enquiry
              </button>

              <div className="pt-2 text-center text-[10px] text-[#eadcc8]/60 font-sora">
                Hyderabad Showroom • Solid Teakwood & Antiques
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
