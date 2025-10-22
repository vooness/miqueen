"use client";
import React, { useState, useEffect } from "react";
import { Play, MapPin, X } from "lucide-react";
import { motion } from "framer-motion";

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

  useEffect(() => {
    const slideTimer = setInterval(
      () => setCurrentSlide((p) => (p + 1) % slides.length),
      8000
    );

    const videoTimer = setInterval(
      () => setCurrentVideo((p) => (p + 1) % videos.length),
      8000
    );

    return () => {
      clearInterval(slideTimer);
      clearInterval(videoTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
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
              <video
                key={src}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
                  idx === currentVideo ? "opacity-90" : "opacity-0"
                }`}
                style={{
                  objectPosition: '50% 35%',
                  transform: 'scale(1.05)'
                }}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={src} type="video/mp4" />
              </video>
            ))}
            
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 lg:h-48 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 lg:h-48 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
              <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-black/50 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 bg-black/35"></div>
            </div>
          </div>
        )}
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Title & stars */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 mb-8 sm:mb-12 md:mb-16">
            <div className="overflow-hidden">
              {/* Hlavní nadpis s Framer Motion */}
              <motion.h1 
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight sm:leading-tight md:leading-none mb-3 sm:mb-4 px-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="inline-block text-white">
                  Mikulovská královna vín
                </span>
              </motion.h1>

              {/* Eco Badge s animací */}
              <motion.div 
                className="flex justify-center mb-4 sm:mb-6 px-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-500/30 rounded-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-300 text-xs sm:text-sm font-medium">
                    Každoročně oceňované ekologické vinařství
                  </span>
                </div>
              </motion.div>
              
              {/* Stars s postupnou animací */}
              <motion.div 
                className="flex justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-yellow-400 star-glow text-2xl sm:text-3xl md:text-4xl flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
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
            </div>

            {/* Rotating slide content */}
            <motion.div 
              className="h-44 sm:h-48 md:h-40 lg:h-36 relative overflow-hidden px-4 sm:px-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white mb-2 sm:mb-3 leading-snug px-2">
                    {slide.title}
                  </h2>
                  
                  <div
                    className="text-amber-400 text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-wide sm:tracking-wider uppercase mb-2 sm:mb-3 md:mb-4"
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
            <div className="flex justify-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
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
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* CTA buttons s animací */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 md:mb-16 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a 
              href="/vsechna-nase-vina"
              className="relative group px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 bg-white rounded-full overflow-hidden transition-all duration-300 w-full sm:w-auto sm:min-w-[200px] md:min-w-[220px] text-center block cursor-pointer"
            >
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 font-semibold text-sm sm:text-base">
                Objevte naše vína
              </span>
              <div className="absolute -inset-1 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom bg-[#ab8754]" />
            </a>
            
            <button
              className="relative group px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 bg-white rounded-full overflow-hidden transition-all duration-300 w-full sm:w-auto sm:min-w-[200px] md:min-w-[220px] cursor-pointer"
              onClick={() => setIsVideoPlaying(true)}
            >
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 font-semibold text-sm sm:text-base flex items-center justify-center gap-2">
                <Play className="h-4 w-4 fill-current" />
                Přehrát video
              </span>
              <div className="absolute -inset-1 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom bg-[#ab8754]" />
            </button>
          </motion.div>

          {/* Location badge s animací */}
          <motion.div 
            className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 mx-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 flex-shrink-0" style={{ color: "#ab8754" }} />
            <span className="text-gray-200 text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">
              Mikulov, jižní Morava
            </span>
          </motion.div>
        </div>
      </div>

      {/* MODAL VIDEO PLAYER */}
      {isVideoPlaying && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="relative max-w-4xl w-full aspect-video bg-gray-900 rounded-lg sm:rounded-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          >
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white/70 hover:text-white z-10 p-2 bg-black/30 rounded-full cursor-pointer"
            >
              <X className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>
            <video className="w-full h-full" controls autoPlay>
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
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
        .star-glow {
          animation: starGlow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;