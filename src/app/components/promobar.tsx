"use client";
import React, { useState, useEffect } from 'react';
import { X, Truck } from 'lucide-react';

const PromoBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Zobrazit lištu s animací po načtení stránky
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Zobrazí se po 1 sekundě
    
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-40 transform transition-transform duration-500 ease-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Main bar with border */}
      <div className="relative bg-black/95 backdrop-blur-sm text-white shadow-2xl border-t-2" style={{ borderTopColor: '#ab8754' }}>
        <div className="relative">
          <div className="flex items-center justify-center px-4 py-3 sm:py-4">
            
            {/* Main content */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Simple truck icon */}
              <div className="relative bg-[#ab8754]/10 p-2 rounded-full border border-[#ab8754]/30">
                <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-[#ab8754]" />
              </div>
              
              {/* Text content */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-center sm:text-left">
                <span className="text-xs sm:text-sm font-light tracking-wider uppercase text-gray-300">
                  Akce:
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-medium">
                    Doprava ZDARMA od
                  </span>
                  <span 
                    className="font-bold text-base sm:text-lg tracking-wider px-2.5 py-0.5 rounded-md"
                    style={{ 
                      backgroundColor: 'rgba(171, 135, 84, 0.15)',
                      color: '#ab8754',
                      border: '1px solid rgba(171, 135, 84, 0.3)'
                    }}
                  >
                    2 500 Kč
                  </span>
                </div>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-3 sm:right-5 p-2 hover:bg-white/10 rounded-full transition-all duration-200 group"
              aria-label="Zavřít oznámení"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white group-hover:rotate-90 transition-all duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* CSS for shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PromoBar;