import React from 'react';
import { MapPin, Phone, MessageSquare, Star, ArrowUp, Sparkles, ShieldCheck } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { googleProfileSummary } from '../data/reviewsData';

export default function Footer({ currentRoute, setCurrentRoute, storeConfig, onOpenAdmin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', route: 'home' },
    { label: 'Collections', route: 'collections' },
    { label: 'Furniture Catalog', route: 'furniture' },
    { label: 'About Our Heritage', route: 'about' },
    { label: 'Visual Gallery', route: 'gallery' },
    { label: 'Customer Reviews (5.0)', route: 'reviews' },
    { label: 'Contact & Showroom', route: 'contact' },
  ];

  return (
    <footer className="bg-dark-brown text-warm-ivory pt-20 pb-12 border-t border-charcoal-brown relative overflow-hidden">
      
      {/* Soft warm aura ambient element */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-peach/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-charcoal-brown/80">
          
          {/* Col 1: Brand Lore */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3.5">
              <img
                src="/images/manduva-logo.png"
                alt="Manduva Logillu Logo"
                className="h-14 w-auto object-contain drop-shadow-lg"
              />
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-warm-ivory">
                  MANDUVA LOGILLU
                </h3>
                <span className="text-[10px] uppercase tracking-[0.22em] text-light-peach font-semibold block">
                  Resort & Farmhouse Furniture
                </span>
              </div>
            </div>

            <p className="text-sm text-warm-beige/80 font-light leading-relaxed">
              Hyderabad's premier destination for handcrafted traditional, antique, and vintage furniture. Crafted for homes, grand villas, and heritage resort retreats across India.
            </p>

            {/* Google Rating Trust Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-charcoal-brown/90 border border-brand-peach/20 text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-warm-ivory">{googleProfileSummary.rating.toFixed(1)}</span>
              <span className="text-warm-beige/70">({googleProfileSummary.reviewCount} Reviews on Google)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-light-peach font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-warm-beige/80">
              {navLinks.map((link) => (
                <li key={link.route}>
                  <button
                    onClick={() => {
                      setCurrentRoute(link.route);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-light-peach transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Categories & Collections */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-light-peach font-bold">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light text-warm-beige/80">
              <li><button onClick={() => setCurrentRoute('collections')} className="hover:text-light-peach">Antique Furniture</button></li>
              <li><button onClick={() => setCurrentRoute('collections')} className="hover:text-light-peach">Vintage Furniture</button></li>
              <li><button onClick={() => setCurrentRoute('collections')} className="hover:text-light-peach">Traditional Courtyards</button></li>
              <li><button onClick={() => setCurrentRoute('collections')} className="hover:text-light-peach">Solid Teak Dining</button></li>
              <li><button onClick={() => setCurrentRoute('collections')} className="hover:text-light-peach">Carved Sofa Suites</button></li>
              <li><button onClick={() => setCurrentRoute('collections')} className="hover:text-light-peach">Custom Architecture</button></li>
            </ul>
          </div>

          {/* Col 4: Hyderabad Store & Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-light-peach font-bold">
              Hyderabad Destination
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-warm-beige/80 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-peach shrink-0 mt-0.5" />
                <span>{storeConfig.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-peach shrink-0" />
                <a href={`tel:${storeConfig.phoneNumber}`} className="hover:text-light-peach">
                  {storeConfig.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <button onClick={() => openWhatsApp({ intent: 'general' })} className="hover:text-emerald-300">
                  Instant WhatsApp Support
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openWhatsApp({ intent: 'visit' })}
                className="w-full py-2.5 px-4 rounded-xl bg-charcoal-brown hover:bg-brand-peach hover:text-dark-brown text-warm-ivory text-xs font-semibold border border-brand-peach/30 transition-all text-center"
              >
                Schedule Private Showroom Visit
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-beige/60">
          <div>
            © {new Date().getFullYear()} Manduva Logillu Furniture's, Hyderabad. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdmin}
              className="text-warm-beige/50 hover:text-warm-beige transition-colors"
            >
              CMS Catalog Admin
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-light-peach hover:underline"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
