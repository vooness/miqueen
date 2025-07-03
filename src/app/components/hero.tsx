"use client";
import React, { useState, useEffect } from "react";
import { Play, Award, MapPin, X } from "lucide-react";

interface HeroSectionProps {
  useAnimation?: boolean;
}

/* ──────────────────────────────────────────
   📱 Static data moved outside component
────────────────────────────────────────── */
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
  useAnimation = false, // default false so the video sequence is active
}) => {
  /* ──────────────────────────────────────────
     ❶ State for text slides
  ────────────────────────────────────────── */
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ──────────────────────────────────────────
     ❂ State for background‐video carousel
  ────────────────────────────────────────── */
  const [currentVideo, setCurrentVideo] = useState(0);

  /* ──────────────────────────────────────────
     ❸ State for modal film
  ────────────────────────────────────────── */
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  /* ──────────────────────────────────────────
     ➍ Timed transitions - now with proper dependencies
  ────────────────────────────────────────── */
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
  }, []); // Now ESLint won't complain since slides/videos are static

  /* ──────────────────────────────────────────
     ➏ Render
  ────────────────────────────────────────── */
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
      {/* ═════════ BACKGROUND  ═════════ */}
      <div className="absolute inset-0 w-full h-full">
        {useAnimation ? (
          /* Gradient animation fallback */
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-red-900 to-yellow-900">
            <div className="absolute inset-0 opacity-70">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-200"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-400"></div>
            </div>
          </div>
        ) : (
          /* Video carousel s vylepšeným pozadím */
          <div className="relative w-full h-full">
            {videos.map((src, idx) => (
              <video
                key={src}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
                  idx === currentVideo ? "opacity-90" : "opacity-0"
                }`}
                style={{
                  objectPosition: '50% 35%', // Posun videa níže pro lepší viditelnost
                  transform: 'scale(1.05)' // Mírné zvětšení pro lepší pokrytí
                }}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={src} type="video/mp4" />
              </video>
            ))}
            
            {/* Gradient přechody na krajích */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Horní gradient fade */}
              <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 lg:h-48 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>
              
              {/* Dolní gradient fade */}
              <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 lg:h-48 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              
              {/* Levý gradient fade */}
              <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
              
              {/* Pravý gradient fade */}
              <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-black/50 via-black/20 to-transparent"></div>
              
              {/* Centrální jemný overlay pro čitelnost */}
              <div className="absolute inset-0 bg-black/25"></div>
            </div>
          </div>
        )}
      </div>

      {/* ═════════ FOREGROUND CONTENT  ═════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* ––– Award badge ––– */}
          <div
            className="inline-flex items-center space-x-2 bg-black/30 border border-amber-600/50 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 backdrop-blur-sm"
            style={{ borderColor: "#ab8754" }}
          >
            <Award
              className="h-3 sm:h-4 w-3 sm:w-4 text-amber-400"
              style={{ color: "#ab8754" }}
            />
            <span
              className="text-amber-400 text-xs sm:text-sm font-medium tracking-wide"
              style={{ color: "#ab8754" }}
            >
              VÍTĚZ WINE COMPETITION 2024
            </span>
          </div>

          {/* ––– Title & stars ––– */}
          <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            <div className="overflow-hidden">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-none mb-4">
                <span className="inline-block text-white">Mi</span>
                <span
                  className="inline-block text-amber-400"
                  style={{ color: "#ab8754" }}
                >
                  Queen
                </span>
              </h1>

               {/* ––– Text pod hvězdami ––– */}
              <div className="mb-6">
                <p className="text-gray-300 text-sm sm:text-base font-light tracking-wide">
                  Každoročně oceňované ekologické vinařství
                </p>
              </div>
              <div className="flex justify-center space-x-2 mb-6">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 star-glow text-2xl sm:text-3xl flex items-center justify-center"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  >
                    ★
                  </div>
                ))}
              </div>
              
             
            </div>

            {/* ––– Decorative line ––– */}
            <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-6 sm:mb-8">
              <div
                className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent to-amber-400"
                style={{ background: "linear-gradient(to right, transparent, #ab8754)" }}
              />
              <div
                className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-amber-400 rounded-full"
                style={{ backgroundColor: "#ab8754" }}
              />
              <div
                className="w-4 sm:w-8 h-px bg-amber-400"
                style={{ backgroundColor: "#ab8754" }}
              />
              <div
                className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-amber-400 rounded-full"
                style={{ backgroundColor: "#ab8754" }}
              />
              <div
                className="w-8 sm:w-16 h-px bg-gradient-to-l from-transparent to-amber-400"
                style={{ background: "linear-gradient(to left, transparent, #ab8754)" }}
              />
            </div>

            {/* ––– Rotating slide content ––– */}
            <div className="h-36 sm:h-40 relative overflow-hidden px-4">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <h2 className="text-xl sm:text-3xl md:text-4xl font-light text-white mb-2">
                    {slide.title}
                  </h2>
                  <div
                    className="text-amber-400 text-sm sm:text-lg font-medium tracking-[0.1em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-4 whitespace-nowrap"
                    style={{ color: "#ab8754" }}
                  >
                    {slide.subtitle}
                  </div>
                  <p className="text-base sm:text-xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>

            {/* ––– Slide indicators ––– */}
            <div className="flex justify-center space-x-2 mb-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-6 sm:w-8" : "hover:bg-white/50"
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

          {/* ––– CTA buttons ––– */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
            <button className="group relative overflow-hidden w-full sm:w-auto">
              <div
                className="absolute inset-0 bg-amber-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                style={{ backgroundColor: "#ab8754" }}
              />
              <div
                className="relative bg-amber-600 hover:bg-amber-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full transition-all duration-300 font-medium text-base sm:text-lg tracking-wide shadow-2xl transform group-hover:scale-105 text-center whitespace-nowrap"
                style={{ backgroundColor: "#ab8754" }}
              >
                Objevte kolekci
              </div>
            </button>
            <button
              className="group relative overflow-hidden w-full sm:w-auto"
              onClick={() => setIsVideoPlaying(true)}
            >
              <div className="absolute inset-0 border-2 border-white/30 rounded-full group-hover:border-white/50 transition-all duration-300"></div>
              <div className="relative flex items-center justify-center space-x-3 text-gray-200 hover:text-white transition-colors duration-300 py-3 px-8 sm:px-12 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm">
                <div className="relative">
                  <div className="w-6 h-6 border border-current rounded-full flex items-center justify-center">
                    <Play className="h-3 w-3 ml-0.5" />
                  </div>
                </div>
                <span className="text-base sm:text-lg font-medium whitespace-nowrap">
                  Příběh vinařství
                </span>
              </div>
            </button>
          </div>

          {/* ––– Location badge ––– */}
          <div className="inline-flex items-center space-x-2 text-gray-300 text-sm">
            <MapPin className="h-4 w-4" />
            <span>Mikulov, Moravskoslezský kraj</span>
          </div>
        </div>
      </div>

      {/* ═════════ MODAL VIDEO PLAYER ═════════ */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full aspect-video bg-gray-900 rounded-lg sm:rounded-2xl overflow-hidden">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white/70 hover:text-white z-10 p-2 bg-black/30 rounded-full"
            >
              <X className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>
            <video className="w-full h-full" controls autoPlay>
              {/* You can also switch this to wine2/wine3 if preferred */}
              <source src="/video/wine.webm" type="video/webm" />
            </video>
          </div>
        </div>
      )}

      {/* ═════════ LOCAL STYLES ═════════ */}
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