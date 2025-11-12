"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface HeroSectionProps {
  useAnimation?: boolean;
}

const slides = [
  {
    title: "Mikulovská královna",
    subtitle: "protože víno je nápoj králů",
    description: "a královen. A ti se spokojí jen s tím nejlepším.",
  },
  {
    title: "Degustační zážitky",
    subtitle: "exkluzivní programy",
    description:
      "Objevte tajemství našich vín prostřednictvím privátních degustací a speciálních vinařských večerů.",
  },
  {
    title: "Adoptuj vinohrad",
    subtitle: "staň se součástí tradice",
    description:
      "Adoptuj si svůj vlastní vinohrad a sleduj cestu od révy až po láhev tvého osobního vína.",
  },
];

const HeroSection: React.FC<HeroSectionProps> = ({
  useAnimation = false,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Detekce mobilního zařízení - optimalizovaná
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    
    const debouncedResize = () => {
      clearTimeout((window as Window & { heroResizeTimer?: number }).heroResizeTimer);
      (window as Window & { heroResizeTimer?: number }).heroResizeTimer = window.setTimeout(checkMobile, 150);
    };
    
    window.addEventListener('resize', debouncedResize, { passive: true });
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout((window as Window & { heroResizeTimer?: number }).heroResizeTimer);
    };
  }, []);

  // Intersection Observer pro lazy loading
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Optimalizované načítání videa
  useEffect(() => {
    if (useAnimation || !isInView || !videoRef.current || videoLoaded || videoError) return;

    const video = videoRef.current;

    const handleCanPlay = () => {
      setVideoLoaded(true);
      requestAnimationFrame(() => {
        video.play().catch((error) => {
          console.warn('Video autoplay failed:', error);
          setVideoError(true);
        });
      });
    };

    const handleError = () => {
      console.error('Video loading error');
      setVideoError(true);
    };

    // Přidání event listenerů
    video.addEventListener('canplay', handleCanPlay, { once: true });
    video.addEventListener('error', handleError, { once: true });

    // Preload hint pro prohlížeč
    if (video.readyState >= 3) {
      handleCanPlay();
    } else {
      video.load();
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [useAnimation, isInView, videoLoaded, videoError]);

  // Časovač pro slide text - memoizovaný callback
  const startSlideTimer = useCallback(() => {
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current);
    }

    const slideInterval = isMobile ? 10000 : 8000;
    
    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideInterval);
  }, [isMobile]);

  useEffect(() => {
    if (!isInView) {
      if (slideTimerRef.current) {
        clearInterval(slideTimerRef.current);
        slideTimerRef.current = null;
      }
      return;
    }

    startSlideTimer();

    return () => {
      if (slideTimerRef.current) {
        clearInterval(slideTimerRef.current);
        slideTimerRef.current = null;
      }
    };
  }, [isInView, startSlideTimer]);

  // Optimalizované motion props
  const getMotionProps = useCallback((delay = 0) => {
    if (isMobile || prefersReducedMotion) {
      return {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0 }
      };
    }
    return {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.6, delay }
    };
  }, [isMobile, prefersReducedMotion]);

  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
    startSlideTimer(); // Reset timeru při manuální změně
  }, [startSlideTimer]);

  // Conditional wrapper pro motion
  const MotionWrapper = isMobile || prefersReducedMotion ? 'div' : motion.div;

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 w-full h-full">
        {useAnimation ? (
          // Fallback animované pozadí
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-red-900 to-yellow-900">
            {!isMobile && (
              <div className="absolute inset-0 opacity-70">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-200"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-400"></div>
              </div>
            )}
          </div>
        ) : (
          // Video pozadí s optimalizací
          <div className="relative w-full h-full" style={{ transform: 'translateZ(0)' }}>
            {/* Poster image jako placeholder */}
            {!videoLoaded && !videoError && (
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url(/video-poster.jpg)',
                  backgroundPosition: '50% 35%'
                }}
              />
            )}

            {/* Video element */}
            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                videoLoaded ? 'opacity-90' : 'opacity-0'
              }`}
              style={{
                objectPosition: '50% 35%',
                transform: 'scale(1.05) translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: videoLoaded ? 'auto' : 'opacity'
              }}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/video-poster.jpg"
            >
              <source src="/video.webm" type="video/webm" />
              <source src="/video.mp4" type="video/mp4" />
            </video>

            {/* Fallback pro chybu načtení videa */}
            {videoError && (
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url(/video-poster.jpg)',
                  backgroundPosition: '50% 35%'
                }}
              />
            )}
            
            {/* Gradient overlays */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 lg:h-48 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 lg:h-48 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              {!isMobile && (
                <>
                  <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
                  <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-black/50 via-black/20 to-transparent"></div>
                </>
              )}
              <div className="absolute inset-0 bg-black/35"></div>
            </div>
          </div>
        )}
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Title & stars */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 mb-6 sm:mb-8 md:mb-12">
            {/* Hlavní nadpis */}
            <div className="overflow-hidden">
              {isMobile || prefersReducedMotion ? (
                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight sm:leading-tight md:leading-none mb-3 sm:mb-4 px-2">
                  <span className="inline-block text-white drop-shadow-lg">
                    Mikulovská královna vín
                  </span>
                </h1>
              ) : (
                <motion.h1 
                  className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight sm:leading-tight md:leading-none mb-3 sm:mb-4 px-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <span className="inline-block text-white drop-shadow-lg">
                    Mikulovská královna vín
                  </span>
                </motion.h1>
              )}
            </div>

            {/* Stars */}
            {isMobile || prefersReducedMotion ? (
              <div className="space-y-2 mb-4 sm:mb-6 md:mb-8">
                <div className="flex justify-center items-center space-x-1 sm:space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-yellow-400 text-2xl sm:text-3xl md:text-4xl flex items-center justify-center drop-shadow-lg"
                    >
                      ★
                    </div>
                  ))}
                </div>
                <div className="text-white/90 text-xs sm:text-sm font-light tracking-wide drop-shadow-md">
                  Čtyřhvězdičkové vinařství AWC Vienna 2025
                </div>
              </div>
            ) : (
              <div className="space-y-3 mb-4 sm:mb-6 md:mb-8">
                <motion.div 
                  className="flex justify-center items-center space-x-1 sm:space-x-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-yellow-400 star-glow text-2xl sm:text-3xl md:text-4xl flex items-center justify-center drop-shadow-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.4 + (i * 0.1),
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      ★
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div 
                  className="text-white/90 text-sm md:text-base font-light tracking-wide drop-shadow-md"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Čtyřhvězdičkové vinařství AWC Vienna 2025
                </motion.div>
              </div>
            )}

            {/* Rotating slide content */}
            <MotionWrapper 
              className="h-32 sm:h-36 md:h-32 lg:h-28 relative overflow-hidden px-4 sm:px-6"
              {...(isMobile || prefersReducedMotion ? {} : getMotionProps(0.5))}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ 
                    willChange: index === currentSlide ? 'opacity, transform' : 'auto',
                    pointerEvents: index === currentSlide ? 'auto' : 'none'
                  }}
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white mb-1.5 sm:mb-2 leading-snug px-2 drop-shadow-md">
                    {slide.title}
                  </h2>
                  
                  <div
                    className="text-amber-400 text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-wide sm:tracking-wider uppercase mb-1.5 sm:mb-2 md:mb-3 drop-shadow-md"
                    style={{ color: "#ab8754" }}
                  >
                    {slide.subtitle}
                  </div>
                  
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto px-2 drop-shadow-md">
                    {slide.description}
                  </p>
                </div>
              ))}
            </MotionWrapper>

            {/* Slide indicators */}
            <div className="flex justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 touch-manipulation ${
                    index === currentSlide 
                      ? "w-6 sm:w-8 md:w-10" 
                      : `w-2 sm:w-2.5 ${!isMobile ? 'hover:bg-white/50' : ''} active:scale-90`
                  }`}
                  style={{
                    backgroundColor:
                      index === currentSlide
                        ? "#ab8754"
                        : "rgba(255, 255, 255, 0.3)",
                  }}
                  onClick={() => handleSlideChange(index)}
                  aria-label={`Přejít na slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <MotionWrapper 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-10 px-4"
            {...(isMobile || prefersReducedMotion ? {} : getMotionProps(0.6))}
          >
            <a 
              href="/vina"
              className={`relative group px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 bg-white rounded-full overflow-hidden transition-all duration-300 w-full sm:w-auto sm:min-w-[200px] md:min-w-[220px] text-center block cursor-pointer touch-manipulation ${isMobile ? 'active:scale-95' : ''}`}
            >
              <span className={`relative z-10 text-black transition-colors duration-300 font-semibold text-sm sm:text-base ${!isMobile ? 'group-hover:text-white' : ''}`}>
                Objevte naše vína
              </span>
              {!isMobile && (
                <div className="absolute -inset-1 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom bg-[#ab8754]" />
              )}
            </a>
            
            <a
              href="/mapa-vin"
              className={`relative group px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 bg-white rounded-full overflow-hidden transition-all duration-300 w-full sm:w-auto sm:min-w-[200px] md:min-w-[220px] text-center block cursor-pointer touch-manipulation ${isMobile ? 'active:scale-95' : ''}`}
            >
              <span className={`relative z-10 text-black transition-colors duration-300 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 ${!isMobile ? 'group-hover:text-white' : ''}`}>
                <MapPin className="h-4 w-4" />
                Kde koupíte vína
              </span>
              {!isMobile && (
                <div className="absolute -inset-1 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom bg-[#ab8754]" />
              )}
            </a>
          </MotionWrapper>

          {/* Location badge */}
          <MotionWrapper 
            className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 mx-4"
            {...(isMobile || prefersReducedMotion ? {} : getMotionProps(0.7))}
          >
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 flex-shrink-0" style={{ color: "#ab8754" }} />
            <span className="text-gray-200 text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">
              Mikulov, jižní Morava
            </span>
          </MotionWrapper>
        </div>
      </div>

      {/* LOCAL STYLES */}
      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 2s;
        }
        .animation-delay-400 {
          animation-delay: 4s;
        }
        
        @keyframes starGlow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
        
        .star-glow {
          animation: ${isMobile || prefersReducedMotion ? 'none' : 'starGlow 2s ease-in-out infinite'};
        }

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

        /* Video optimalizace */
        video {
          -webkit-transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
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

        /* Low-end device optimization */
        @media (max-width: 767px) {
          .animate-pulse {
            animation: none;
          }
          
          * {
            will-change: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;