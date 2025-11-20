"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { Play, Heart, Grape, Wine } from "lucide-react";
// Žádný framer-motion import

const AdoptujVinohrad: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // 1. Intersection Observer pro animace při scrollování (stejná logika jako u vinařství)
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "50px" });

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  // 2. Optimalizované načítání videa
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setVideoLoaded(true);
    video.addEventListener('canplay', handleCanPlay, { once: true });

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  const experiences = useMemo(() => [
    "Staň se virtuálním vinařem",
    "Poznej fáze práce na vinohradu",
    "Vyzkoušej si práci vinohradníka",
    "Měj kvalitní moravská vína",
    "Pojmenuj svůj mikrovinohrad",
    "Zažij celoroční vinařský zážitek"
  ], []);

  const benefits = useMemo(() => [
    {
      icon: Wine,
      title: "Staň se virtuálním vinařem",
      subtitle: "Zažij vinařský život na vlastní kůži"
    },
    {
      icon: Grape,
      title: "Poznej fáze práce na vinohradu",
      subtitle: "Od jara do podzimu s námi"
    },
    {
      icon: Wine,
      title: "Měj kvalitní moravská vína",
      subtitle: "Pravidelné dodávky přímo domů"
    },
    {
      icon: Grape,
      title: "Vyzkoušej si práci vinohradníka",
      subtitle: "Osobní zkušenost na vinohradu"
    },
    {
      icon: Heart,
      title: "Pojmenuj svůj mikrovinohrad",
      subtitle: "Personalizuj vlastní vinohrad"
    },
    {
      icon: Play,
      title: "Zažij celoroční vinařský zážitek",
      subtitle: "Celý rok plný nezapomenutelných okamžiků"
    }
  ], []);

  return (
    <section 
      className="py-12 md:py-16 lg:py-28 relative overflow-hidden" 
      style={{ backgroundColor: "#fefbea" }}
      suppressHydrationWarning={true}
    >
      {/* CSS Animace (bez JSX tagu) */}
      <style dangerouslySetInnerHTML={{__html: `
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          will-change: opacity, transform;
        }
        .reveal-on-scroll.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        
        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }
        .delay-300 { transition-delay: 0.3s; }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Touch optimalizace */
        .touch-manipulation {
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        /* Respektování nastavení uživatele */
        @media (prefers-reduced-motion: reduce) {
          .reveal-on-scroll {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .animate-pulse-slow {
            animation: none !important;
          }
        }
      `}} />
      
      {/* Animated background - pouze desktop (řešeno přes CSS hidden md:block) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hidden md:block absolute top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse-slow" 
             style={{ background: `radial-gradient(circle, #ab875415, transparent)` }}></div>
        <div className="hidden md:block absolute bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-slow animation-delay-2000"
             style={{ background: `radial-gradient(circle, #ab875410, transparent)` }}></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="reveal-on-scroll text-center mb-12 md:mb-16 lg:mb-20">
          <div className="space-y-3 md:space-y-4 lg:space-y-6">
            <div className="inline-flex items-center space-x-2 md:space-x-3 text-gray-600 font-medium text-xs md:text-sm tracking-wider uppercase mb-3 md:mb-4">
              <div className="w-6 md:w-8 lg:w-12 h-px bg-gradient-to-r from-transparent" style={{ backgroundColor: "#ab8754" }}></div>
              <span>Exkluzivní nabídka</span>
              <div className="w-6 md:w-8 lg:w-12 h-px bg-gradient-to-l from-transparent" style={{ backgroundColor: "#ab8754" }}></div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 tracking-wide px-4">
              <span style={{ color: "#ab8754" }}>Adoptuj</span> vinohrad
            </h2>
            
            <p 
              className="text-base md:text-lg lg:text-2xl font-light italic px-4" 
              style={{ color: "#ab8754" }}
            >
              Tvůj relax kdykoliv a kdekoliv
            </p>
          </div>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center mt-6 md:mt-8 lg:mt-12 px-4">
            <div className="w-12 md:w-16 lg:w-32 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <div className="mx-3 md:mx-4 lg:mx-8 flex items-center space-x-1.5 md:space-x-2 lg:space-x-3">
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full" style={{ backgroundColor: "#ab8754" }}></div>
              <Heart className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" style={{ color: "#ab8754" }} />
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full" style={{ backgroundColor: "#ab8754" }}></div>
            </div>
            <div className="w-12 md:w-16 lg:w-32 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 xl:gap-24 mb-12 md:mb-16 lg:mb-20">
          
          {/* Video section - left */}
          <div className="reveal-on-scroll relative delay-100">
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl shadow-2xl transition-all duration-500 mb-6 md:mb-8 touch-manipulation group active:scale-95 md:active:scale-100">
              {/* Video container */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
                <video
                  ref={videoRef}
                  className={`w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  // Optimalizace pro mobil: nenačítat data, dokud není potřeba
                  preload="metadata" 
                >
                  {/* ✅ VIDEO ZE SHOPTET CDN */}
                  <source src="https://shop.miqueen.cz/user/documents/upload/adoptuj-vinohrad.webm" type="video/webm" />
                  Váš prohlížeč nepodporuje přehrávání videa.
                </video>
                
                {/* Loading placeholder */}
                {!videoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                    <div className="w-12 h-12 border-4 border-gray-700 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-l-2 border-t-2 border-white/20 rounded-tl-xl md:rounded-tl-2xl pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-r-2 border-b-2 border-white/20 rounded-br-xl md:rounded-br-2xl pointer-events-none"></div>
              </div>
              
              {/* Elegant frame */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl lg:rounded-3xl border border-gray-200 pointer-events-none"></div>
            </div>

            {/* Informační notice */}
            <div 
              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 shadow-md border mb-4 md:mb-6"
              style={{ borderColor: "rgba(171, 135, 84, 0.2)" }}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(171, 135, 84, 0.1)" }}>
                  <Heart className="w-4 h-4 md:w-5 md:h-5" style={{ color: "#ab8754" }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    <span className="font-medium" style={{ color: "#ab8754" }}>Vítáme vás kdykoliv:</span> Vinohrad můžete navštívit během celého roku a být součástí vinařského života.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons pod videem */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6">
              <a 
                href="https://shop.miqueen.cz/adoptuj-vinohrad/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 text-white font-medium text-sm md:text-base transition-all duration-300 rounded-full text-center touch-manipulation active:scale-95 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: "#ab8754" }}
              >
                Adoptuj teď
              </a>
              
              <a 
                href="/kontakty/"
                rel="noopener noreferrer"
                className="px-6 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 text-gray-700 font-medium text-sm md:text-base border-2 rounded-full transition-all duration-300 text-center touch-manipulation active:scale-95 hover:bg-gray-50"
                style={{ borderColor: "#ab8754" }}
              >
                Více informací
              </a>
            </div>
          </div>
          
          {/* Content section - right */}
          <div className="reveal-on-scroll space-y-6 md:space-y-8 lg:space-y-10 delay-200">
            {/* Main description */}
            <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-light">
                Staň se virtuálním vinařem. Poznej fáze práce na vinohradu během celého roku, 
                vyzkoušej si práci vinohradníka, měj po celý rok skvělá moravská vína z Pálavy ve své 
                skleněce, pojmenuj svůj mikrovinohrad a zažij jeden velký celý rok trvající zážitek.
              </p>
              
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-gray-900">
                Tvůj relax kdykoliv a kdekoliv.
              </p>
            </div>

            {/* Experience list */}
            <div className="space-y-3 md:space-y-4">
              {experiences.map((experience, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 md:space-x-4"
                >
                  <div 
                    className="flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mt-2 md:mt-2.5" 
                    style={{ backgroundColor: "#ab8754" }}
                  ></div>
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                    {experience}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits section */}
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {/* Section header */}
          <div className="reveal-on-scroll text-center space-y-3 md:space-y-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-800">
              <span style={{ color: "#ab8754" }}>Výhody</span> adopce
            </h3>
            
            <p className="text-sm md:text-base lg:text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Jedinečný zážitek pro všechny smysly a celoroční radost z vlastního vinohradu
            </p>
          </div>

          {/* 3x2 Grid Cards */}
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-[1400px] mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                
                return (
                  <div 
                    key={index}
                    className="reveal-on-scroll"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-full bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg transition-all duration-300 border border-gray-100 touch-manipulation group active:scale-98 md:hover:shadow-2xl md:hover:border-amber-200 md:hover:-translate-y-2">
                      {/* Subtle gradient background - pouze desktop */}
                      <div className="hidden md:block absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                           style={{ 
                             background: `linear-gradient(135deg, rgba(171, 135, 84, 0.05), transparent)`,
                           }}>
                      </div>
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 transition-transform duration-500 md:group-hover:scale-110" style={{ backgroundColor: "rgba(171, 135, 84, 0.1)" }}>
                          <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: "#ab8754" }} />
                        </div>
                        
                        {/* Title */}
                        <h4 className="text-base md:text-lg lg:text-xl font-medium text-gray-900 mb-2 md:mb-3 leading-snug min-h-[3rem]">
                          {benefit.title}
                        </h4>
                        
                        {/* Subtitle */}
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          {benefit.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final CTA */}
          <div className="reveal-on-scroll mt-12 md:mt-16 lg:mt-20 text-center px-4 delay-300">
            <a 
              href="https://shop.miqueen.cz/adoptuj-vinohrad/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 md:px-10 lg:px-12 py-3.5 md:py-4 text-white font-medium text-base md:text-lg rounded-full transition-all duration-300 touch-manipulation active:scale-95 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "#ab8754" }}
            >
              Začni svou vinařskou cestu
            </a>
            
            <div className="mt-4 md:mt-6 text-gray-600 text-xs md:text-sm">
              nebo {" "}
              <a 
                href="/kontakt"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-900 transition-colors font-medium touch-manipulation" 
                style={{ color: "#ab8754" }}
              >
                získej více informací
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdoptujVinohrad;