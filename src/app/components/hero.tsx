"use client";
import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Play, MapPin, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface HeroSectionProps {
  useAnimation?: boolean;
}

const videos = [
  "/video/wine.webm",
  "/video/wine2.webm",
  "/video/wine3.webm",
];

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
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set([0]));
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Detekce mobilního zařízení
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer pro lazy loading
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Inteligentní preload následujícího videa
  useEffect(() => {
    if (!isInView || useAnimation) return;

    const nextVideo = (currentVideo + 1) % videos.length;
    
    // Načti následující video jen pokud ještě není načtené
    if (!loadedVideos.has(nextVideo)) {
      const timer = setTimeout(() => {
        setLoadedVideos(prev => new Set(prev).add(nextVideo));
      }, 1000); // Počká 1s než začne načítat další video
      
      return () => clearTimeout(timer);
    }
  }, [currentVideo, isInView, useAnimation, loadedVideos]);

  // Optimalizované časovače s cleanup
  useEffect(() => {
    if (!isInView) return;

    const slideInterval = isMobile ? 10000 : 8000;
    const videoInterval = isMobile ? 10000 : 8000;

    const slideTimer = setInterval(
      () => setCurrentSlide((p) => (p + 1) % slides.length),
      slideInterval
    );

    const videoTimer = setInterval(
      () => setCurrentVideo((p) => (p + 1) % videos.length),
      videoInterval
    );

    return () => {
      clearInterval(slideTimer);
      clearInterval(videoTimer);
    };
  }, [isMobile, isInView]);

  // Optimalizované přehrávání videí
  useEffect(() => {
    if (useAnimation || !isInView) return;

    const currentRef = videoRefs.current[currentVideo];
    
    if (currentRef && loadedVideos.has(currentVideo)) {
      // Použij requestAnimationFrame pro plynulejší přehrávání
      requestAnimationFrame(() => {
        currentRef.play().catch(() => {});
      });
    }

    // Pozastaví ostatní videa
    videoRefs.current.forEach((ref, idx) => {
      if (ref && idx !== currentVideo && ref.readyState >= 2) {
        ref.pause();
      }
    });
  }, [currentVideo, useAnimation, isInView, loadedVideos]);

  // Zjednodušené animace pro mobily
  const fadeInUp = useMemo(() => 
    prefersReducedMotion || isMobile
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0 }
  , [prefersReducedMotion, isMobile]);

  const initialState = useMemo(() => 
    prefersReducedMotion || isMobile
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 30 }
  , [prefersReducedMotion, isMobile]);

  const closeModal = useCallback(() => {
    setIsVideoPlaying(false);
  }, []);

  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Komponenta pro video s lazy loadingem
  const VideoElement = useCallback(({ src, idx }: { src: string; idx: number }) => {
    const shouldLoad = loadedVideos.has(idx);
    const isActive = idx === currentVideo;
    
    return (
      <video
        key={src}
        ref={(el) => { videoRefs.current[idx] = el; }}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
          isActive ? "opacity-90" : "opacity-0"
        }`}
        style={{
          objectPosition: '50% 35%',
          transform: 'scale(1.05)',
          willChange: isActive ? 'opacity' : 'auto'
        }}
        autoPlay={idx === 0 && isInView}
        muted
        loop
        playsInline
        preload={shouldLoad ? "auto" : "none"}
        poster={isMobile ? `/video/wine${idx + 1}-poster.jpg` : undefined}
      >
        {shouldLoad && <source src={src} type="video/webm" />}
      </video>
    );
  }, [loadedVideos, currentVideo, isInView, isMobile]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 w-full h-full">
        {useAnimation ? (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-red-900 to-yellow-900">
            <div className="absolute inset-0 opacity-70">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-200"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-400"></div>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full">
            {videos.map((src, idx) => (
              <VideoElement key={src} src={src} idx={idx} />
            ))}
            
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
            <div className="overflow-hidden">
              {/* Hlavní nadpis - méně animací na mobilu */}
              {isMobile ? (
                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight sm:leading-tight md:leading-none mb-3 sm:mb-4 px-2">
                  <span className="inline-block text-white">
                    Mikulovská královna vín
                  </span>
                </h1>
              ) : (
                <motion.h1 
                  className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight sm:leading-tight md:leading-none mb-3 sm:mb-4 px-2"
                  initial={initialState}
                  whileInView={fadeInUp}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: "easeOut" }}
                >
                  <span className="inline-block text-white">
                    Mikulovská královna vín
                  </span>
                </motion.h1>
              )}
            </div>

            {/* Stars - statické na mobilu */}
            {isMobile ? (
              <div className="flex justify-center items-center space-x-1 sm:space-x-2 mb-4 sm:mb-6 md:mb-8">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-yellow-400 text-2xl sm:text-3xl md:text-4xl flex items-center justify-center"
                  >
                    ★
                  </div>
                ))}
              </div>
            ) : (
              <motion.div 
                className="flex justify-center items-center space-x-1 sm:space-x-2 mb-4 sm:mb-6 md:mb-8"
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.3 }}
              >
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-yellow-400 star-glow text-2xl sm:text-3xl md:text-4xl flex items-center justify-center"
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0 }}
                    whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={prefersReducedMotion ? {} : { 
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
            )}

            {/* Rotating slide content */}
            <motion.div 
              className="h-32 sm:h-36 md:h-32 lg:h-28 relative overflow-hidden px-4 sm:px-6"
              initial={initialState}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: prefersReducedMotion || isMobile ? 0 : 0.7, delay: 0.5 }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ willChange: index === currentSlide ? 'opacity, transform' : 'auto' }}
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white mb-1.5 sm:mb-2 leading-snug px-2">
                    {slide.title}
                  </h2>
                  
                  <div
                    className="text-amber-400 text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-wide sm:tracking-wider uppercase mb-1.5 sm:mb-2 md:mb-3"
                    style={{ color: "#ab8754" }}
                  >
                    {slide.subtitle}
                  </div>
                  
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto px-2">
                    {slide.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Slide indicators */}
            <div className="flex justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-6 sm:w-8 md:w-10" : "w-2 sm:w-2.5 hover:bg-white/50"
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
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-10 px-4"
            initial={prefersReducedMotion || isMobile ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion || isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: prefersReducedMotion || isMobile ? 0 : 0.6, delay: 0.6 }}
          >
            <a 
              href="/vsechna-nase-vina"
              className="relative group px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 bg-white rounded-full overflow-hidden transition-all duration-300 w-full sm:w-auto sm:min-w-[200px] md:min-w-[220px] text-center block cursor-pointer touch-manipulation"
            >
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 font-semibold text-sm sm:text-base">
                Objevte naše vína
              </span>
              <div className="absolute -inset-1 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom bg-[#ab8754]" />
            </a>
            
            <button
              className="relative group px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 bg-white rounded-full overflow-hidden transition-all duration-300 w-full sm:w-auto sm:min-w-[200px] md:min-w-[220px] cursor-pointer touch-manipulation"
              onClick={() => setIsVideoPlaying(true)}
              aria-label="Přehrát video"
            >
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 font-semibold text-sm sm:text-base flex items-center justify-center gap-2">
                <Play className="h-4 w-4 fill-current" />
                Přehrát video
              </span>
              <div className="absolute -inset-1 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom bg-[#ab8754]" />
            </button>
          </motion.div>

          {/* Location badge */}
          <motion.div 
            className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 mx-4"
            initial={prefersReducedMotion || isMobile ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
            whileInView={prefersReducedMotion || isMobile ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: prefersReducedMotion || isMobile ? 0 : 0.5, delay: 0.7 }}
          >
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 flex-shrink-0" style={{ color: "#ab8754" }} />
            <span className="text-gray-200 text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">
              Mikulov, jižní Morava
            </span>
          </motion.div>
        </div>
      </div>

      {/* MODAL VIDEO PLAYER - načte se až když se klikne */}
      {isVideoPlaying && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closeModal}
        >
          <motion.div 
            className="relative max-w-4xl w-full aspect-video bg-gray-900 rounded-lg sm:rounded-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white/70 hover:text-white z-10 p-2 bg-black/30 rounded-full cursor-pointer touch-manipulation"
              aria-label="Zavřít video"
            >
              <X className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>
            <video className="w-full h-full" controls autoPlay playsInline>
              <source src="/video/adoptuj-vinohrad.webm" type="video/webm" />
            </video>
          </motion.div>
        </motion.div>
      )}

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
          animation: ${isMobile ? 'none' : 'starGlow 2s ease-in-out infinite'};
          opacity: ${isMobile ? '1' : 'inherit'};
        }
      `}</style>
    </section>
  );
};

export default HeroSection;