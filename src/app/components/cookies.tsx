"use client"
import React, { useState, useEffect } from 'react';
import { Cookie, ChevronDown } from 'lucide-react';

const SimpleCookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Funkce pro kontrolu, zda zobrazit banner
    const checkAndShowBanner = () => {
      const consent = localStorage.getItem('cookieConsent');
      const ageVerified = localStorage.getItem('ageVerified');
      
      // Zobrazit cookies banner POUZE pokud je věk ověřen a cookies nejsou potvrzeny
      if (!consent && ageVerified === 'true') {
        setTimeout(() => setShowBanner(true), 500);
      }
    };

    // Kontrola při načtení
    checkAndShowBanner();

    // Poslouchat na storage event (když se potvrdí age verification)
    window.addEventListener('storage', checkAndShowBanner);

    return () => {
      window.removeEventListener('storage', checkAndShowBanner);
    };
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
      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] p-2 sm:p-4 animate-slideUp">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 p-3 sm:p-5 max-w-6xl mx-auto">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            
            {/* Levá strana - ikona + text */}
            <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0 text-center sm:text-left">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#ab8754]/10 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-4 h-4 sm:w-6 sm:h-6 text-[#ab8754]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs sm:text-base font-bold text-gray-900 mb-0.5 sm:mb-1">
                  Aby vám naše víno ještě lépe chutnalo... 🍷
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                  Používáme cookies, abychom vám zajistili ten nejlepší zážitek.
                  {' '}
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-[#ab8754] hover:underline inline-flex items-center font-medium"
                  >
                    <span className="hidden sm:inline">Více informací</span>
                    <span className="sm:hidden">Info</span>
                    <ChevronDown className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ml-0.5 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
                  </button>
                </p>
              </div>
            </div>

            {/* Pravá strana - tlačítka */}
            <div className="flex gap-2 sm:gap-3 flex-shrink-0">
              <button
                onClick={handleReject}
                className="px-3 sm:px-6 py-1.5 sm:py-3 text-xs sm:text-base text-white rounded-full font-semibold hover:shadow-lg transition-all"
                style={{ backgroundColor: '#ab8754' }}
              >
                <span className="hidden sm:inline">Ne, díky</span>
                <span className="sm:hidden">Ne</span>
              </button>
              <button
                onClick={handleAccept}
                className="px-3 sm:px-6 py-1.5 sm:py-3 text-xs sm:text-base text-white rounded-full font-semibold hover:shadow-xl hover:brightness-110 transition-all relative overflow-hidden group"
                style={{ backgroundColor: '#ab8754' }}
              >
                <span className="relative z-10 hidden sm:inline">Ano, chci koláčky! 🍪</span>
                <span className="relative z-10 sm:hidden">Ano</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b6d44] to-[#ab8754] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>

          {/* Rozbalovací detaily */}
          {showDetails && (
            <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-200 animate-slideDown">
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
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
            transform: translateY(100px);
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

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default SimpleCookieBanner;