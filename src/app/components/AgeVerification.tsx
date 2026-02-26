'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AgeVerification() {
  const [isVerified, setIsVerified] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verified = localStorage.getItem('ageVerified');
    if (verified === 'true') {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
    setIsLoading(false);
  }, []);

  const handleVerify = (isAdult: boolean) => {
    if (isAdult) {
      localStorage.setItem('ageVerified', 'true');
      setIsVerified(true);
      // Vyvolat event pro cookie banner
      window.dispatchEvent(new Event('storage'));
    } else {
      window.location.href = 'https://www.google.com';
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <AnimatePresence>
      {!isVerified && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
          />
          
          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Levá strana - ikona + text */}
                <div className="flex items-center gap-4 text-center sm:text-left">
                  <div className="w-12 h-12 rounded-full bg-[#ab8754]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">🍷</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      Je vám 18 let?
                    </h3>
                    <p className="text-sm text-gray-600">
                      Pro vstup na naše stránky musíte být plnoletí.
                    </p>
                  </div>
                </div>

                {/* Pravá strana - tlačítka */}
                <div className="flex gap-3 flex-shrink-0">
                  <button
                    onClick={() => handleVerify(false)}
                    className="px-6 py-3 text-gray-700 bg-white/80 rounded-full font-semibold hover:bg-white hover:shadow-md transition-all border border-gray-200"
                  >
                    Ne
                  </button>
                  <button
                    onClick={() => handleVerify(true)}
                    style={{ backgroundColor: '#ab8754' }}
                    className="px-8 py-3 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all relative overflow-hidden group"
                  >
                    <span className="relative z-10">Ano, je mi 18+</span>
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: 'linear-gradient(to right, #8b6d44, #ab8754)' }}
                    ></div>
                  </button>
                </div>
              </div>

              {/* Legal text */}
              <p className="text-xs text-gray-500 text-center mt-4">
                Prodej alkoholu osobám mladším 18 let je zákonem zakázán.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}