import React from 'react';

/**
 * DEEP WALNUT & TEAK LUXURY AMBIENT BACKGROUND
 * Base background: #241A15
 * Soft depth layers with restrained dark teak and antique brass ambient tones.
 */
export default function AuraBackground({ children, className = "" }) {
  return (
    <div className={`aura-container min-h-screen bg-[#FAF8F5] text-[#1A1715] flex flex-col ${className}`}>
      {/* Layer 1 */}
      <div 
        className="aura-layer aura-layer-1" 
        aria-hidden="true"
      />
      
      {/* Layer 2 */}
      <div 
        className="aura-layer aura-layer-2" 
        aria-hidden="true"
      />
      
      {/* Layer 3 */}
      <div 
        className="aura-layer aura-layer-3" 
        aria-hidden="true"
      />
      
      {/* Layer 4 */}
      <div 
        className="aura-layer aura-layer-4" 
        aria-hidden="true"
      />
      
      {/* Main Interactive Content */}
      <div className="aura-content min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
}
