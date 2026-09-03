import React from 'react';
import { Sparkles, MapPin, Phone, MessageSquare, Clock, Navigation, ExternalLink } from 'lucide-react';
import LocationSection from '../components/LocationSection';
import EnquirySection from '../components/EnquirySection';

export default function ContactPage({ storeConfig }) {
  return (
    <div className="pt-32 pb-24 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm-beige/60 text-dark-brown text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-deep-orange" />
          <span>CONNECT & VISIT</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-dark-brown leading-tight">
          Contact & Showroom
        </h1>
        <p className="text-muted-brown text-base sm:text-lg font-light leading-relaxed">
          We invite you to experience our solid teakwood and antique creations in person at our Hyderabad destination.
        </p>
      </div>

      {/* Location Details */}
      <LocationSection storeConfig={storeConfig} />

      {/* Enquiry Form */}
      <EnquirySection storeConfig={storeConfig} />

    </div>
  );
}
