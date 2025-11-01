"use client"
import React, { useState, useEffect } from 'react';
import { Cookie, Wine, ChevronDown } from 'lucide-react';

const SimpleCookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Zkontrolovat, zda uživatel již souhlasil
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setShowBanner(true), 500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] animate-fadeIn" />
      
      {/* Modal uprostřed */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-slideUp">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 max-w-lg w-full">
          
          <div className="flex flex-col items-center text-center">
            {/* Ikony - koláček + víno */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-[#ab8754]/10 flex items-center justify-center animate-bounce-slow">
                <Cookie className="w-7 h-7 text-[#ab8754]" />
              </div>
              <span className="text-2xl">+</span>
              <div className="w-14 h-14 rounded-full bg-[#ab8754]/10 flex items-center justify-center animate-bounce-slow animation-delay-200">
                <Wine className="w-7 h-7 text-[#ab8754]" />
              </div>
            </div>
            
            {/* Vtipný nadpis */}
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Aby vám naše víno ještě lépe chutnalo...
            </h3>
            
            <p className="text-xl font-medium text-[#ab8754] mb-4">
              Dejte si k němu koláčky! 🍪
            </p>
            
            {/* Text */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              Používáme cookies (neboli koláčky), abychom vám zajistili 
              ten nejlepší zážitek na našich webových stránkách.
            </p>

            {/* Rozbalovací detaily */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#ab8754] transition-colors mb-6"
            >
              <span>Co jsou cookies?</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
            </button>

            {showDetails && (
              <div className="w-full bg-white/50 rounded-2xl p-4 mb-6 text-left animate-slideDown">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Cookies jsou malé textové soubory, které ukládáme do vašeho prohlížeče. 
                  Pomáhají nám zapamatovat si vaše preference a zlepšovat váš zážitek z návštěvy. 
                  Více se dozvíte v našich{' '}
                  <a 
                    href="/zasady-ochrany-osobnich-udaju" 
                    className="text-[#ab8754] hover:underline font-medium"
                    target="_blank"
                  >
                    zásadách ochrany osobních údajů
                  </a>.
                </p>
              </div>
            )}

            {/* Tlačítka */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                onClick={handleReject}
                className="flex-1 px-6 py-3 text-gray-700 bg-white/80 rounded-full font-semibold hover:bg-white hover:shadow-md transition-all border border-gray-200"
              >
                Ne, díky
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-6 py-3 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all relative overflow-hidden group"
                style={{ backgroundColor: '#ab8754' }}
              >
                <span className="relative z-10">Ano, chci koláčky! 🍪</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b6d44] to-[#ab8754] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>

            {/* Malý text pod tlačítky */}
            <p className="text-xs text-gray-500 mt-4">
              Kliknutím souhlasíte s našimi podmínkami
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 200px;
          }
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </>
  );
};

export default SimpleCookieBanner;