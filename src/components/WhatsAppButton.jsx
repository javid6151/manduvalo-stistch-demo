import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Interactive Tooltip Callout */}
      {showTooltip && (
        <div className="mb-3 p-4 bg-white rounded-2xl shadow-2xl border border-warm-beige max-w-xs text-xs space-y-2 relative animate-in fade-in slide-in-from-bottom-2">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-muted-brown hover:text-dark-brown p-1"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-serif text-sm font-bold text-dark-brown flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Manduva Logillu Specialist
          </div>
          <p className="text-charcoal-brown font-light">
            Looking for authentic antique teakwood or bespoke furniture in Hyderabad? Chat with us directly on WhatsApp.
          </p>
          <button
            onClick={() => {
              setShowTooltip(false);
              openWhatsApp({ intent: 'general' });
            }}
            className="w-full py-2 bg-emerald-700 text-white rounded-lg font-semibold text-center block text-[11px]"
          >
            Start WhatsApp Chat
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => openWhatsApp({ intent: 'general' })}
        onMouseEnter={() => setShowTooltip(true)}
        className="group flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/80 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat on WhatsApp with Manduva Logillu"
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-emerald-600" />
        <span className="font-semibold text-xs sm:text-sm tracking-wide hidden sm:inline">
          Chat on WhatsApp
        </span>
      </button>

    </div>
  );
}
