import React from 'react';

/**
 * PEACH VELVET AURA GRADIENT
 * Base background: #faf8f2
 * 4 soft radial-gradient layers with exact blur definitions and GPU acceleration.
 */
export default function AuraBackground({ children, className = "" }) {
  return (
    <div className={`aura-container ${className}`}>
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
