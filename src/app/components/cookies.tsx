"use client"
import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const SimpleCookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

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
            {/* Ikona */}
            <div className="w-16 h-16 rounded-full bg-[#ab875410] flex items-center justify-center mb-6">
              <Cookie className="w-8 h-8 text-[#ab8754]" />
            </div>
            
            {/* Nadpis */}
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Používáme cookies
            </h3>
            
            {/* Text */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              Tento web používá cookies pro zlepšení vašeho zážitku. 
              Více informací najdete v našich{' '}
              <a href="/zasady-ochrany-osobnich-udaju" className="text-[#ab8754] hover:underline font-medium">
                zásadách ochrany osobních údajů
              </a>.
            </p>

            {/* Tlačítka */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                onClick={handleReject}
                className="flex-1 px-6 py-3 text-gray-700 bg-gray-100 rounded-full font-semibold hover:bg-gray-200 transition-all"
              >
                Odmítnout
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-6 py-3 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
                style={{ backgroundColor: '#ab8754' }}
              >
                Přijmout
              </button>
            </div>
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
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default SimpleCookieBanner;