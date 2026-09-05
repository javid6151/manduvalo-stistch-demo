import React from 'react';
import GallerySection from '../components/GallerySection';
import { Sparkles } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24 space-y-12">
      <div className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFE8] border border-[#EAE5DC] text-[#8A6738] text-xs font-semibold tracking-widest uppercase font-sans">
          <Sparkles className="w-3.5 h-3.5 text-[#8A6738]" />
          <span>VISUAL SHOWROOM ARCHIVE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1A1715] leading-tight">
          Showroom Gallery
        </h1>
        <p className="text-[#68625A] text-base sm:text-lg font-light leading-relaxed">
          High-resolution photography capturing our Hyderabad showroom arrangements, solid teak wood grain, hand-chiseled relief work, and authentic antiques.
        </p>
      </div>

      <GallerySection />
    </div>
  );
}
