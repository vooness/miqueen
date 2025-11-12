'use client';

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface WineSeries {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

const wineSeries: WineSeries[] = [
  {
    id: 1,
    name: 'Tichá terroir vína',
    subtitle: 'řada',
    description: 'Vína terroir jsou tichá vína, která nesou jedinečný otisk svého původu – půdy, klimatu a práce vinaře. Každý doušek odráží charakter vinične trati Za Cihelnou, její minerálnost, svěžest i vůni místa. Jsou to vína s duší, která vyprávějí příběh krajiny, z níž vzešla. Všechna vína jsou míchána 3 až 9 měsíců na jemných kalech, což jim dodává plnost, hebkost a komplexní chuťový projev.',
    image: '/vino5.png',
  },
  {
    id: 2,
    name: 'Perlivá vína',
    subtitle: 'řada',
    description: 'Vína Frizzante z tratě Za Cihelnou vynikají svěžestí a lehkostí, která dokonale odráží charakter mikulovského terroiru s vápenitým podložím a sprašovou půdou. Jsou sycena přírodním CO2 vzniklým při kvašení, takže mají jemné, přirozené perlení, které zvýrazňuje jejich ovocný a minerální projev. Díky původu z trati Za Cihelnou si uchovávají typickou minerální slanost, živou kyselinku a elegantní citrusové tóny – ideální vína pro letní osvěžení i lehké gastronomické párování.',
    image: '/vino1.png',
  },
  {
    id: 3,
    name: 'MiQueen mini',
    subtitle: 'řada',
    description: 'MiQueen Mini představuje moderní a praktický způsob, jak si vychutnat kvalitní víno v menším, osobním balení. Menší objem 187 ml u tichých vín a 200 ml u perlivých vín zaručuje, že si otevřete vždy čerstvou láhev – ideální pro chvíle, kdy si chcete dopřát sklenku bez nutnosti otevírat celé víno. Mini lahve jsou perfektní na cesty, pikniky, hotely, eventy i stylové dárky, a přitom uchovávají stejnou kvalitu a terroirový charakter jako standardní balení. MiQueen Mini je o pohodlí, eleganci a svobodě vychutnat si víno kdykoli a kdekoli, a to s maximální čerstvostí.',
    image: '/vino3.png',
  },
  {
    id: 4,
    name: 'MiQueen MIMOSA',
    subtitle: 'řada',
    description: 'Mimosa MiQueen je svěží a elegantní nápoj, který spojuje suchý Sauvignon z trati Za Cihelnou s 100 % pomerančovou šťávou ze Španělska. Základem je Sauvignon s výraznou mineralitou, citrusovými tóny a živou kyselinkou, pocházející z vápenitého podloží mikulovského terroiru. Díky spojení s prémiovou pomerančovou šťávou vzniká harmonický a šťavnatý drink s vyvážeností svěží kyselosti a sladce ovocného aroma – ideální pro brunch, letní osvěžení nebo lehký aperitiv.',
    image: '/vino2.png',
  },
];

const WineSeriesSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  const accentColor = '#ab8754';
  const bgColor = '#fefbea';

  // Detekce mobilního zařízení
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    
    const debouncedResize = () => {
      clearTimeout((window as Window & { seriesResizeTimer?: number }).seriesResizeTimer);
      (window as Window & { seriesResizeTimer?: number }).seriesResizeTimer = window.setTimeout(checkMobile, 150);
    };
    
    window.addEventListener('resize', debouncedResize, { passive: true });
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout((window as Window & { seriesResizeTimer?: number }).seriesResizeTimer);
    };
  }, []);

  // Autoplay timer s cleanup
  useEffect(() => {
    if (!isAutoPlay || isMobile || prefersReducedMotion) return;
    
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
    
    autoPlayTimerRef.current = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % wineSeries.length);
    }, 12000);
    
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
        autoPlayTimerRef.current = null;
      }
    };
  }, [isAutoPlay, isMobile, prefersReducedMotion]);

  // Optimalizovaný handler pro kliknutí na sérii
  const handleSeriesClick = useCallback((index: number) => {
    setSelectedIndex(index);
    setIsAutoPlay(false);
    
    // Cleanup předchozího pause timeru
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
    }
    
    // Znovu spustit autoplay po 30 sekundách
    pauseTimerRef.current = setTimeout(() => {
      setIsAutoPlay(true);
    }, 30000);
  }, []);

  // Cleanup při unmount
  useEffect(() => {
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current);
      }
    };
  }, []);

  // Memoizace aktuálního vína
  const currentWine = useMemo(() => wineSeries[selectedIndex], [selectedIndex]);

  // Optimalizované motion props
  const getMotionProps = useCallback((delay = 0) => {
    if (isMobile || prefersReducedMotion) {
      return {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        transition: { duration: 0 }
      };
    }
    return {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6, delay }
    };
  }, [isMobile, prefersReducedMotion]);

  // Conditional wrapper pro motion
  const MotionWrapper = isMobile || prefersReducedMotion ? 'div' : motion.div;

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: bgColor }}>
      <div className="relative w-full h-auto">
        <Image 
          src="/border.png" 
          alt="" 
          width={1920} 
          height={176} 
          className="w-full h-auto object-contain" 
          priority 
          quality={isMobile ? 60 : 90}
        />
      </div>

      <div className="py-12 sm:py-20 md:py-28 lg:py-36 relative">
        {/* Background vineyard image */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src="/vinice_ostra3_master_shopet.webp" 
              alt="" 
              fill 
              className="object-contain md:object-cover opacity-[0.07] md:opacity-[0.12] scale-110" 
              style={{ filter: 'sepia(0.2)' }} 
              priority={false}
              quality={isMobile ? 50 : 75}
            />
          </div>
        </div>
        
        {/* Accent gradients - pouze desktop */}
        {!isMobile && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute top-1/4 -right-48 w-96 h-96 rounded-full blur-[120px] opacity-20" 
              style={{ background: `radial-gradient(circle, ${accentColor}, transparent)` }} 
            />
            <div 
              className="absolute bottom-1/4 -left-48 w-96 h-96 rounded-full blur-[120px] opacity-20" 
              style={{ background: `radial-gradient(circle, ${accentColor}, transparent)` }} 
            />
          </div>
        )}
        
        <div className="container mx-auto px-2 sm:px-4 lg:px-12 relative z-10">
          {/* Header */}
          <MotionWrapper className="text-center mb-8 sm:mb-12 md:mb-20" {...getMotionProps()}>
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              {!isMobile && (
                <>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-12 sm:w-20" />
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
                  <div className="h-px bg-gradient-to-l from-transparent via-gray-400 to-transparent w-12 sm:w-20" />
                </>
              )}
            </div>
            
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-800 mb-3 sm:mb-4 px-4">
              Naše <span className="font-normal" style={{ color: accentColor }}>vinařské řady</span>
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto px-4">
              Objevte rozmanitost našich vín
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-2 lg:grid-cols-12 gap-2 sm:gap-4 md:gap-6 lg:gap-12 max-w-[1400px] mx-auto">
            
            {/* Series Navigation */}
            <MotionWrapper 
              className="col-span-1 lg:col-span-3 space-y-0.5 sm:space-y-1 md:space-y-2" 
              {...(isMobile || prefersReducedMotion ? {} : {
                initial: { opacity: 0, x: -30 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.6 }
              })}
            >
              {wineSeries.map((wine, index) => {
                const isActive = selectedIndex === index;
                const ButtonWrapper = isMobile || prefersReducedMotion ? 'button' : motion.button;
                
                return (
                  <ButtonWrapper
                    key={wine.id}
                    onClick={() => handleSeriesClick(index)}
                    className={`relative w-full text-left py-1 sm:py-2 md:py-3 transition-all duration-300 group touch-manipulation ${isMobile ? 'active:scale-95' : ''}`}
                    {...(isMobile || prefersReducedMotion ? {} : {
                      whileHover: { x: 4 },
                      whileTap: { scale: 0.98 }
                    })}
                  >
                    <div className="relative">
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 mb-0.5 md:mb-1 uppercase tracking-wider font-light">
                        {wine.subtitle}
                      </p>
                      <h3 
                        className={`text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl transition-all duration-300 ${
                          isActive 
                            ? 'font-semibold border-b-2 border-dotted pb-1' 
                            : `font-light ${!isMobile ? 'group-hover:translate-x-1' : ''}`
                        }`}
                        style={{ 
                          color: accentColor, 
                          borderColor: isActive ? accentColor : 'transparent' 
                        }}
                      >
                        {wine.name}
                      </h3>
                    </div>
                  </ButtonWrapper>
                );
              })}
            </MotionWrapper>

            {/* Wine Image */}
            <div className="col-span-1 lg:col-span-5 flex justify-center items-center py-4 md:py-8 lg:py-0 mb-12 sm:mb-20">
              {isMobile || prefersReducedMotion ? (
                <div className="relative">
                  <div className="relative">
                    <div 
                      className="absolute inset-0 blur-xl opacity-10 rounded-full" 
                      style={{ backgroundColor: accentColor }} 
                    />
                    <Image 
                      src={currentWine.image} 
                      alt={currentWine.name} 
                      width={600} 
                      height={1200} 
                      className="relative z-10 w-full scale-[2] sm:scale-100 h-auto object-contain drop-shadow-2xl" 
                      priority 
                      quality={isMobile ? 70 : 85}
                    />
                  </div>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentWine.id} 
                    initial={{ opacity: 0, x: 100 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0, x: -100 }} 
                    transition={{ duration: 0.7, ease: "easeOut" }} 
                    className="relative"
                  >
                    <div className="relative">
                      <div 
                        className="absolute inset-0 blur-2xl md:blur-3xl opacity-10 md:opacity-20 rounded-full" 
                        style={{ backgroundColor: accentColor }} 
                      />
                      <Image 
                        src={currentWine.image} 
                        alt={currentWine.name} 
                        width={600} 
                        height={1200} 
                        className="relative z-10 w-full lg:scale-110 xl:scale-100 2xl:scale-100 h-auto object-contain drop-shadow-2xl" 
                        priority 
                        quality={85}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {/* Wine Description */}
            <MotionWrapper 
              className="col-span-2 lg:col-span-4 mt-8 sm:mt-0 px-4 sm:px-0" 
              {...(isMobile || prefersReducedMotion ? {} : {
                initial: { opacity: 0, x: 30 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.6 }
              })}
            >
              {isMobile || prefersReducedMotion ? (
                <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-0 min-h-[300px] sm:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px] flex flex-col">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 mb-2 uppercase tracking-wider">
                      {currentWine.subtitle}
                    </p>
                    <h3 
                      className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6" 
                      style={{ color: accentColor }}
                    >
                      {currentWine.name}
                    </h3>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-xs sm:text-base md:text-lg text-gray-700 leading-relaxed">
                      {currentWine.description}
                    </p>
                  </div>

                  <a 
                    href="https://shop.miqueen.cz/vina/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 mt-4 sm:mt-6 transition-all touch-manipulation active:scale-95" 
                    style={{ color: accentColor }}
                  >
                    <span className="text-base sm:text-lg font-medium">e-shop</span>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentWine.id} 
                    initial={{ opacity: 0, x: 80 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0, x: -80 }} 
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }} 
                    className="space-y-6 sm:space-y-8 pt-8 sm:pt-0 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px] flex flex-col"
                  >
                    <div>
                      <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider">
                        {currentWine.subtitle}
                      </p>
                      <h3 
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6" 
                        style={{ color: accentColor }}
                      >
                        {currentWine.name}
                      </h3>
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        {currentWine.description}
                      </p>
                    </div>

                    <a 
                      href="https://shop.miqueen.cz/vina/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 group mt-6 hover:gap-3 transition-all" 
                      style={{ color: accentColor }}
                    >
                      <span className="text-lg font-medium">e-shop</span>
                      <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                </AnimatePresence>
              )}
            </MotionWrapper>
          </div>

          {/* Progress Indicators */}
          <MotionWrapper 
            className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12 lg:mt-20 px-4" 
            {...(isMobile || prefersReducedMotion ? {} : {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.3 }
            })}
          >
            {wineSeries.map((_, index) => {
              const isActive = selectedIndex === index;
              
              return (
                <button
                  key={index}
                  onClick={() => handleSeriesClick(index)}
                  className={`relative h-1.5 flex-1 max-w-[80px] sm:max-w-[120px] bg-gray-300/50 rounded-full overflow-hidden transition-colors touch-manipulation ${!isMobile ? 'hover:bg-gray-300 group' : 'active:scale-95'}`}
                >
                  {isMobile || prefersReducedMotion ? (
                    <div
                      className="absolute inset-0 rounded-full transition-all duration-300"
                      style={{ 
                        backgroundColor: isActive ? accentColor : 'transparent',
                        width: isActive ? '100%' : '0%'
                      }}
                    />
                  ) : (
                    <motion.div
                      className="absolute inset-0 rounded-full shadow-lg"
                      style={{ 
                        backgroundColor: accentColor, 
                        boxShadow: isActive ? `0 0 10px ${accentColor}50` : 'none' 
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: isActive ? '100%' : 0 }}
                      transition={{ 
                        duration: isActive && !isMobile && !prefersReducedMotion ? 12 : 0.3, 
                        ease: isActive ? 'linear' : 'easeOut' 
                      }}
                    />
                  )}
                  {!isMobile && (
                    <div 
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity" 
                      style={{ backgroundColor: accentColor }} 
                    />
                  )}
                </button>
              );
            })}
          </MotionWrapper>
        </div>
      </div>

      <div className="relative w-full">
        <Image 
          src="/border.png" 
          alt="" 
          width={1920} 
          height={176} 
          className="w-full h-auto object-contain" 
          loading="lazy"
          quality={isMobile ? 60 : 90}
        />
      </div>

      <style jsx>{`
        /* Touch optimalizace */
        * {
          -webkit-tap-highlight-color: transparent;
        }

        .touch-manipulation {
          touch-action: manipulation;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 767px) {
          * {
            will-change: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WineSeriesSection;