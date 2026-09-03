import React, { useState } from 'react';
import { X, MessageSquare, Sparkles, ShieldCheck, Check, ArrowRight, Share2, Compass, Layers } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function ProductDetailModal({ 
  product, 
  onClose, 
  onOpenEnquiryWithPiece, 
  onSelectRelatedProduct,
  allProducts 
}) {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const relatedPieces = allProducts
    .filter(p => p.id !== product.id && (p.categorySlug === product.categorySlug || p.room === product.room))
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-dark-brown/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Background click */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-warm-beige overflow-hidden z-10 my-8 flex flex-col max-h-[92vh]">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-warm-beige bg-warm-ivory/60">
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-widest font-bold text-deep-orange">
              {product.category}
            </span>
            <span className="text-muted-brown text-xs">•</span>
            <span className="text-xs text-muted-brown">{product.room}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-warm-beige/50 text-charcoal-brown text-xs flex items-center gap-1.5 transition-colors"
              title="Share Link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Share'}</span>
            </button>
            
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-warm-beige text-dark-brown transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            
            {/* Left: Multi-Angle Gallery */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Main Image Frame */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-dark-brown border border-warm-beige shadow-md">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails Row */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-deep-orange shadow-md scale-105'
                          : 'border-warm-beige opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`${product.name} angle ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Verified Material Seal */}
              <div className="p-4 rounded-2xl bg-warm-ivory border border-warm-beige flex items-center gap-3 text-xs text-charcoal-brown">
                <ShieldCheck className="w-5 h-5 text-deep-orange shrink-0" />
                <span>
                  <strong>Manduva Authenticity Guarantee:</strong> Solid timber inspection and natural oil polish. No synthetic veneer.
                </span>
              </div>

            </div>

            {/* Right: Specifications & Action */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-4">
                {product.badge && (
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-peach/20 text-dark-brown text-[10px] uppercase font-bold tracking-widest border border-brand-peach/40">
                    {product.badge}
                  </span>
                )}

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-dark-brown font-normal leading-tight">
                  {product.name}
                </h2>

                <p className="text-sm sm:text-base text-charcoal-brown/90 font-light leading-relaxed">
                  {product.description}
                </p>

                {/* Technical Specifications Table */}
                <div className="p-5 rounded-2xl bg-soft-cream/80 border border-warm-beige space-y-3 text-xs">
                  <div className="flex justify-between pb-2 border-b border-warm-beige/60">
                    <span className="text-muted-brown font-medium">Materials</span>
                    <span className="font-semibold text-dark-brown text-right max-w-[65%]">{product.materials}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-warm-beige/60">
                    <span className="text-muted-brown font-medium">Dimensions</span>
                    <span className="font-semibold text-dark-brown text-right">{product.dimensions}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-warm-beige/60">
                    <span className="text-muted-brown font-medium">Availability</span>
                    <span className="font-semibold text-emerald-700 text-right">{product.availability}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-muted-brown font-medium">Pricing</span>
                    <span className="font-serif text-lg font-bold text-dark-brown">{product.price}</span>
                  </div>
                </div>

                {product.priceNote && (
                  <div className="text-[11px] text-muted-brown italic">
                    * {product.priceNote}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-warm-beige/60">
                <button
                  onClick={() => {
                    openWhatsApp({
                      pieceName: product.name,
                      category: product.category,
                      intent: 'piece'
                    });
                  }}
                  className="w-full py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold tracking-wider transition-all shadow-md flex items-center justify-center gap-2.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenEnquiryWithPiece(product.name);
                  }}
                  className="w-full py-3.5 rounded-2xl bg-dark-brown hover:bg-charcoal-brown text-warm-ivory text-xs sm:text-sm font-semibold tracking-wider transition-all shadow-sm text-center"
                >
                  Send Detailed Custom Enquiry Form
                </button>
              </div>

            </div>

          </div>

          {/* Related Furniture Section */}
          {relatedPieces.length > 0 && (
            <div className="pt-8 border-t border-warm-beige/80 space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl text-dark-brown font-normal">
                Complements This Piece
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedPieces.map(piece => (
                  <div
                    key={piece.id}
                    onClick={() => onSelectRelatedProduct(piece)}
                    className="p-3 rounded-2xl bg-warm-ivory/60 hover:bg-warm-ivory border border-warm-beige/80 cursor-pointer transition-all group"
                  >
                    <img
                      src={piece.images[0]}
                      alt={piece.name}
                      className="w-full h-32 rounded-xl object-cover mb-2.5"
                    />
                    <div className="text-[10px] uppercase tracking-wider text-deep-orange font-bold">
                      {piece.category}
                    </div>
                    <h4 className="font-serif text-sm font-semibold text-dark-brown group-hover:text-deep-orange truncate">
                      {piece.name}
                    </h4>
                    <span className="text-xs text-muted-brown">{piece.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
