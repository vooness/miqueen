"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";

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
    description: "Objevte tajemství našich vín prostřednictvím privátních degustací a speciálních vinařských večerů.",
  },
  {
    title: "Adoptuj vinohrad",
    subtitle: "staň se součástí tradice",
    description: "Adoptuj si svůj vlastní vinohrad a sleduj cestu od révy až po láhev tvého osobního vína.",
  },
];

const HeroSection: React.FC<HeroSectionProps> = ({ useAnimation = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // ✅ Detekce mount stavu pro prevenci hydration mismatch
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // ✅ Slide timer
  useEffect(() => {
    if (!isMounted) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    slideTimerRef.current = timer;
    return () => {
      if (slideTimerRef.current) {
        clearInterval(slideTimerRef.current);
      }
    };
  }, [isMounted]);

  // ✅ Video autoplay fix pro mobil
  useEffect(() => {
    if (!isMounted || useAnimation || !videoRef.current) return;
    
    const video = videoRef.current;

    // Zkusíme přehrát video, jakmile je to možné
    const playVideo = async () => {
      try {
        // Některé prohlížeče vyžadují muted pro autoplay (máte nastaveno, ale pro jistotu)
        video.muted = true; 
        await video.play();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        console.log('Video autoplay blocked by browser policy (likely Low Power Mode or Data Saver)');
      }
    };

    // Event listener pro případ, že se video načte později
    if (video.readyState >= 3) {
        playVideo();
    } else {
        video.addEventListener('canplay', playVideo, { once: true });
    }

    return () => {
        video.removeEventListener('canplay', playVideo);
    };
  }, [isMounted, useAnimation]);

  // ✅ FIX: Správně typovaný callback
  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
    
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current);
    }
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    
    slideTimerRef.current = timer;
  }, []);

  // ✅ Base classes pro prevenci hydration issues
  const sectionClass = "relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16";
  const backgroundClass = "absolute inset-0 w-full h-full";
  const videoContainerClass = "relative w-full h-full";
  const placeholderClass = "absolute inset-0 w-full h-full bg-gray-900";
  const videoClass = "absolute inset-0 w-full h-full object-cover";
  const overlayClass = "absolute inset-0 pointer-events-none";

  return (
    <section className={sectionClass}>
      {/* POZADÍ */}
      <div className={backgroundClass}>
        {useAnimation ? (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-red-900 to-yellow-900" />
        ) : (
          <div className={videoContainerClass}>
            {/* Placeholder vždy viditelný při načítání - ideálně sem dejte IMAGE místo barvy */}
            <div className={placeholderClass}>
                {/* Doporučuji sem dát <Image /> komponentu jako fallback, kdyby video nejelo */}
            </div>
            
            {/* Video element - renderuje se vždy stejně */}
            <video
              ref={videoRef}
              className={`${videoClass} ${isMounted ? 'opacity-90' : 'opacity-0'}`}
              style={{
                objectPosition: '50% 35%',
                transform: 'scale(1.05)',
                transition: 'opacity 1s ease-in-out'
              }}
              autoPlay
              muted
              loop
              playsInline
              // OPRAVA: Změněno z 'none' na 'auto'. Mobil musí vědět, že má video začít načítat.
              preload="auto" 
              // DOPORUČENÍ: Přidejte cestu k obrázku (poster), který se zobrazí, než se video načte, nebo pokud je blokováno.
              // poster="/cesta-k-obrazku-z-videa.jpg" 
            >
              {/* Doporučuji přidat i MP4 zdroj jako první pro maximální kompatibilitu na iPhonech */}
              {/* <source src="...video.mp4" type="video/mp4" /> */}
              
              <source 
                src="https://shop.miqueen.cz/user/documents/upload/video.webm" 
                type="video/webm" 
              />
            </video>
            
            {/* Gradient overlays */}
            <div className={overlayClass}>
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 lg:h-48 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 lg:h-48 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            </div>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Title */}
          <h1 className={`
            text-3xl sm:text-5xl md:text-7xl lg:text-8xl 
            font-bold leading-tight text-white drop-shadow-lg mb-6
            transition-all duration-800
            ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}>
            Mikulovská královna vín
          </h1>

          {/* Stars */}
          <div className="space-y-2 mb-8">
            <div className="flex justify-center items-center space-x-2">
              {[...Array(4)].map((_, i) => (
                <span 
                  key={i} 
                  className={`
                    text-yellow-400 text-2xl sm:text-3xl drop-shadow-lg
                    transition-all duration-400
                    ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
                  `}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  ★
                </span>
              ))}
            </div>
            <div className="text-white/90 text-sm font-light tracking-wide">
              Čtyřhvězdičkové vinařství AWC Vienna 2025
            </div>
          </div>

          {/* Slides */}
          <div className="h-32 relative overflow-hidden px-4 mb-6">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`
                  absolute inset-0 transition-all duration-700
                  ${index === currentSlide 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8 pointer-events-none'
                  }
                `}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-2">
                  {slide.title}
                </h2>
                <div className="text-amber-400 text-sm uppercase tracking-wider mb-2" style={{ color: '#ab8754' }}>
                  {slide.subtitle}
                </div>
                <p className="text-gray-200 text-base max-w-3xl mx-auto">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-3 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${index === currentSlide 
                    ? 'w-8 bg-amber-600' 
                    : 'w-2 bg-white/30 hover:bg-white/50'
                  }
                `}
                style={{ backgroundColor: index === currentSlide ? '#ab8754' : undefined }}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA Buttons - TAILWIND HOVER */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link 
              href="/vina/vsechna-vina" 
              className="
                px-8 py-3 rounded-full font-semibold 
                w-full sm:w-auto sm:min-w-[200px] text-center
                bg-white text-black
                transition-all duration-300
                hover:bg-[#ab8754] hover:text-white
                active:opacity-90
              "
            >
              Objevte naše vína
            </Link>
            
            <Link 
              href="/mapa-vin" 
              className="
                px-8 py-3 rounded-full font-semibold 
                w-full sm:w-auto sm:min-w-[200px] text-center
                flex items-center justify-center gap-2
                bg-white text-black
                transition-all duration-300
                hover:bg-[#ab8754] hover:text-white
                active:opacity-90
                group
              "
            >
              <MapPin className="h-4 w-4 transition-colors duration-300 group-hover:text-white" />
              Kde koupíte vína
            </Link>
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full">
            <MapPin className="h-4 w-4" style={{ color: '#ab8754' }} />
            <span className="text-gray-200 text-sm">
              Mikulov, jižní Morava
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);