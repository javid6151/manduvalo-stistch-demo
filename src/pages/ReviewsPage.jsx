import React, { useState } from 'react';
import { Star, ShieldCheck, ExternalLink, Sparkles, Quote, Search } from 'lucide-react';
import { verifiedReviews, googleProfileSummary } from '../data/reviewsData';

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = searchTerm
    ? verifiedReviews.filter(r => 
        r.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.text.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : verifiedReviews;

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm-beige/60 text-dark-brown text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-deep-orange" />
          <span>VERIFIED TESTIMONIALS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-dark-brown leading-tight">
          Customer Reviews
        </h1>
        <p className="text-muted-brown text-base sm:text-lg font-light leading-relaxed">
          Read genuine feedback from customers who visited Manduva Logillu Furniture's in Hyderabad.
        </p>
      </div>

      {/* Google Credibility Showcase Box */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-warm-beige shadow-lux max-w-2xl mx-auto text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-lg border border-blue-100">
            G
          </div>
          <div className="text-left">
            <h3 className="font-serif text-xl font-bold text-dark-brown leading-tight">Google Business Rating</h3>
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Authentic Customer Feedback
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <span className="font-serif text-5xl font-bold text-dark-brown">{googleProfileSummary.rating.toFixed(1)}</span>
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-500" />
            ))}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-brown">
          Based on {googleProfileSummary.reviewCount} customer reviews in Hyderabad
        </p>

        <div>
          <a
            href={googleProfileSummary.writeReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark-brown text-warm-ivory text-xs font-semibold hover:bg-charcoal-brown shadow transition-all"
          >
            <span>Write a Review on Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((rev) => (
          <div
            key={rev.id}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-warm-beige shadow-lux flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                  ))}
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                  Google Verified
                </span>
              </div>

              <p className="font-serif text-lg text-dark-brown italic font-light leading-relaxed">
                "{rev.text}"
              </p>
            </div>

            <div className="pt-4 border-t border-warm-beige/70 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-dark-brown text-warm-ivory font-serif text-xs font-bold flex items-center justify-center">
                {rev.avatar}
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-dark-brown">{rev.author}</h4>
                <span className="text-[11px] text-muted-brown">{rev.highlight}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
