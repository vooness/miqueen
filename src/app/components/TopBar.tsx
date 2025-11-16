"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Gift, X } from 'lucide-react';

const TopBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  // Zkontroluj, jestli už uživatel zavřel bar (uloženo v localStorage)
  useEffect(() => {
    const isClosed = localStorage.getItem('topBarClosed');
    if (isClosed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('topBarClosed', 'true');
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`
        relative w-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 
        text-white py-2 sm:py-3 px-4 shadow-lg z-50
        transition-all duration-300 ease-out
        ${isClosing ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center relative">
        {/* Animovaná ikona dárku */}
        <div className="absolute left-0 hidden sm:block">
          <Gift className="w-5 h-5 animate-bounce" />
        </div>

        {/* Hlavní obsah */}
        <Link 
          href="/akcni-nabidka"
          className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
        >
          {/* Ikona pro mobil */}
          <Gift className="w-4 h-4 sm:hidden animate-bounce" />
          
          {/* Text */}
          <p className="text-xs sm:text-sm md:text-base font-semibold text-center">
            🎁 <span className="hidden sm:inline">Hledáte </span>
            <span className="underline decoration-white/50 group-hover:decoration-white transition-all">
              perfektní dárek
            </span>
            <span className="hidden sm:inline"> pro milovníky vína</span>? 
            <span className="ml-1 sm:ml-2 font-bold group-hover:translate-x-1 inline-block transition-transform">
              Objevte naše dárkové sety →
            </span>
          </p>
        </Link>

        {/* Tlačítko zavřít */}
        <button
          onClick={handleClose}
          className="absolute right-0 p-1 hover:bg-white/20 rounded-full transition-all duration-200 active:scale-90"
          aria-label="Zavřít oznámení"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Animovaný gradient overlay pro efekt */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer pointer-events-none" />

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
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default TopBar;