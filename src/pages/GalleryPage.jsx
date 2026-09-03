import React from 'react';
import GallerySection from '../components/GallerySection';
import { Sparkles } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24 space-y-12">
      <div className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm-beige/60 text-dark-brown text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-deep-orange" />
          <span>VISUAL SHOWROOM ARCHIVE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-dark-brown leading-tight">
          Showroom Gallery
        </h1>
        <p className="text-muted-brown text-base sm:text-lg font-light leading-relaxed">
          High-resolution photography capturing our Hyderabad showroom arrangements, solid teak wood grain, hand-chiseled relief work, and authentic antiques.
        </p>
      </div>

      <GallerySection />
    </div>
  );
}
