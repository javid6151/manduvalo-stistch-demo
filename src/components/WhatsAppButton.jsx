import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Interactive Tooltip Callout */}
      {showTooltip && (
        <div className="mb-3 p-4 bg-[#1A1715] text-[#FAF8F5] rounded-2xl shadow-2xl border border-white/10 max-w-xs text-xs space-y-2 relative animate-in fade-in slide-in-from-bottom-2">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-stone-400 hover:text-white p-1"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-serif text-sm font-bold text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#176B57]" />
            Manduva Logillu Specialist
          </div>
          <p className="text-stone-300 font-light leading-relaxed">
            Looking for authentic antique teakwood or bespoke furniture in Hyderabad? Chat with us directly on WhatsApp.
          </p>
          <button
            onClick={() => {
              setShowTooltip(false);
              openWhatsApp({ intent: 'general' });
            }}
            className="w-full py-2 bg-[#176B57] hover:bg-[#135746] text-white rounded-lg font-semibold text-center block text-[11px] transition-colors font-sans"
          >
            Start WhatsApp Chat
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => openWhatsApp({ intent: 'general' })}
        onMouseEnter={() => setShowTooltip(true)}
        className="group flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#176B57] hover:bg-[#135746] text-white shadow-xl transition-all duration-200 border border-[#2B806A]/60 focus:outline-none"
        aria-label="Chat on WhatsApp with Manduva Logillu"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="font-semibold text-xs sm:text-sm tracking-wide hidden sm:inline text-white font-sans">
          Chat on WhatsApp
        </span>
      </button>

    </div>
  );
}
