"use client"
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Award, Leaf, MapPin, Users, Wine, Star, Crown, Trophy, Sparkles, ChevronRight, Grape } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const AboutWinerySection = () => {
  const storyImageUrl = "/frontpage.webp";
  
  const accentColor = "#ab8754";
  const paperColor = "#fefbea";

  // Detekce mobilního zařízení pro optimalizaci
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    checkMobile();
    const debouncedResize = () => {
      clearTimeout((window as Window & { resizeTimer?: number }).resizeTimer);
      (window as Window & { resizeTimer?: number }).resizeTimer = window.setTimeout(checkMobile, 150);
    };
    window.addEventListener('resize', debouncedResize, { passive: true });
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout((window as Window & { resizeTimer?: number }).resizeTimer);
    };
  }, []);

  const galleryPhotos = useMemo(() => [
    { src: "/fotky/fotka1.jpg", alt: "Vinařství MiQueen 1" },
    { src: "/fotky/fotka2.jpg", alt: "Vinařství MiQueen 2" },
    { src: "/fotky/fotka3.jpg", alt: "Vinařství MiQueen 3" },
    { src: "/fotky/fotka4.jpg", alt: "Vinařství MiQueen 4" },
    { src: "/fotky/fotka5.jpg", alt: "Vinařství MiQueen 5" },
    { src: "/fotky/fotka6.jpg", alt: "Vinařství MiQueen 6" }
  ], []);

  const achievements = useMemo(() => [
    {
      id: 1,
      title: "AWC Vienna 2025",
      goldMedals: 5,
      silverMedals: 1,
      totalMedals: "Titul Čtyřhvězdičkové vinařství + 5 zlatých + 1 stříbrná",
      year: "2025",
      type: "premium",
      icon: Star,
      highlight: true,
      image: "/medaile/awc_gold.webp"
    },
    {
      id: 2,
      title: "Král vín 2025",
      goldMedals: 6,
      silverMedals: 1,
      totalMedals: "4 velké zlaté + 2 zlaté + 1 stříbrná",
      year: "2025",
      type: "grand",
      icon: Crown,
      image: "/medaile/loga_soutezi_shop_ostra5.webp"
    },
    {
      id: 3,
      title: "Zlatý pohár Československa 2024",
      goldMedals: 7,
      silverMedals: 0,
      totalMedals: "1 vítěz kategorie + 2 velké zlaté + 4 zlaté",
      year: "2024",
      type: "main",
      icon: Trophy,
      image: "/medaile/loga_soutezi_shop_ostra5.webp"
    },
    {
      id: 4,
      title: "Nominační výstava Mikulov 2025",
      goldMedals: 5,
      silverMedals: 0,
      totalMedals: "1 velká zlatá + 4 zlaté medaile",
      year: "2025",
      type: "gold",
      icon: Wine,
      image: "/medaile/loga_soutezi_shop_ostra3.webp"
    },
    {
      id: 5,
      title: "AWC Vienna 2024",
      goldMedals: 2,
      silverMedals: 7,
      totalMedals: "2 zlaté + 7 stříbrných medailí",
      year: "2024",
      type: "international",
      icon: Trophy,
      image: "/medaile/awc_medaillen2024_visuals_all_gold.webp"
    },
    {
      id: 6,
      title: "Valtické vinné trhy 2024",
      goldMedals: 4,
      silverMedals: 0,
      totalMedals: "4 zlaté medaile",
      year: "2024",
      type: "gold",
      icon: Trophy,
      image: "/medaile/loga_soutezi_shop_ostra2.webp"
    },
    {
      id: 7,
      title: "GRAND PRIX VINEX 2024",
      goldMedals: 1,
      silverMedals: 5,
      totalMedals: "1 velká zlatá + 5 stříbrných medailí",
      year: "2024",
      type: "international",
      icon: Sparkles,
      image: "/medaile/loga_soutezi_shop_ostra3.webp"
    },
    {
      id: 8,
      title: "Nominační výstava Mikulov 2024",
      goldMedals: 3,
      silverMedals: 0,
      totalMedals: "3 zlaté medaile",
      year: "2024",
      type: "gold",
      icon: Wine,
      image: "/medaile/loga_soutezi_shop_ostra3.webp"
    },
    {
      id: 9,
      title: "Pardubický festival vína 2025",
      goldMedals: 3,
      silverMedals: 0,
      totalMedals: "1 velká zlatá + 2 zlaté medaile",
      year: "2025",
      type: "gold",
      icon: Award,
      image: "/medaile/loga_soutezi_shop_ostra.webp"
    },
    {
      id: 10,
      title: "Weinparade Poysdorf 2024",
      goldMedals: 2,
      silverMedals: 6,
      totalMedals: "2 zlaté + 6 stříbrných medailí",
      year: "2024",
      type: "international",
      icon: Wine,
      image: "/medaile/loga_soutezi_shop_ostra4.webp"
    },
    {
      id: 11,
      title: "Galerie rulandských vín 2025",
      goldMedals: 2,
      silverMedals: 0,
      totalMedals: "2 zlaté medaile",
      year: "2025",
      type: "gold",
      icon: Wine,
      image: "/medaile/zlato_vvt.webp"
    },
    {
      id: 12,
      title: "VINUM JUVENALE 2023",
      goldMedals: 2,
      silverMedals: 2,
      totalMedals: "2 zlaté + 2 stříbrné medaile",
      year: "2023",
      type: "youth",
      icon: Award,
      image: "/medaile/loga_soutezi_shop_ostra3.webp"
    },
    {
      id: 13,
      title: "Jarovín 2024",
      goldMedals: 2,
      silverMedals: 0,
      totalMedals: "2 zlaté medaile",
      year: "2024",
      type: "gold",
      icon: Award,
      image: "/medaile/loga_soutezi_shop_ostra.webp"
    },
    {
      id: 14,
      title: "Nejlepší biopotravina roku 2025",
      goldMedals: 2,
      silverMedals: 1,
      totalMedals: "1 vítěz kategorie + 1 zlatá + 1 stříbrná",
      year: "2025",
      type: "bio",
      icon: Leaf,
      image: "/medaile/loga_soutezi_shop_ostra.webp"
    },
    {
      id: 15,
      title: "Král vín 2024",
      goldMedals: 2,
      silverMedals: 1,
      totalMedals: "1 vítěz kategorie + 1 zlatá + 1 stříbrná",
      year: "2024",
      type: "main",
      icon: Crown,
      image: "/medaile/loga_soutezi_shop_ostra5.webp"
    },
    {
      id: 16,
      title: "Jarovín 2025",
      goldMedals: 1,
      silverMedals: 1,
      totalMedals: "1 zlatá + 1 stříbrná medaile",
      year: "2025",
      type: "main",
      icon: Award,
      image: "/medaile/medaile_jarovin_zlata.webp"
    },
    {
      id: 17,
      title: "Valtické vinné trhy 2025",
      goldMedals: 1,
      silverMedals: 0,
      totalMedals: "1 zlatá medaile",
      year: "2025",
      type: "gold",
      icon: Trophy,
      image: "/medaile/zlato_vvt.webp"
    },
    {
      id: 18,
      title: "Salon vín 2025",
      goldMedals: 0,
      silverMedals: 1,
      totalMedals: "1 stříbrná medaile",
      year: "2025",
      type: "silver",
      icon: Wine,
      image: "/medaile/loga_soutezi_shop_ostra.webp"
    }
  ], []);

  const highlights = useMemo(() => [
    {
      icon: Leaf,
      title: "Ekologické hospodaření",
      description: "31,2 hektarů vinic v plně ekologickém režimu",
      stat: "31,2 ha"
    },
    {
      icon: MapPin,
      title: "Mikulovský terroir",
      description: "Jedinečné minerální podloží z jurského vápence",
      stat: "Mikulov"
    },
    {
      icon: Users,
      title: "Symbol přírody a čistoty",
      description: "Náš soused",
      stat: "Náš Dudek"
    },
    {
      icon: Wine,
      title: "130 000 lahví ročně",
      description: "Prémiová kvalita v každé lahvi",
      stat: "130k+"
    }
  ], []);

  const totalGold = useMemo(() => 
    achievements.reduce((sum, achievement) => sum + achievement.goldMedals, 0)
  , [achievements]);
  
  const totalSilver = useMemo(() => 
    achievements.reduce((sum, achievement) => sum + achievement.silverMedals, 0)
  , [achievements]);

  // State pro filtrování podle roku
  const [selectedYear, setSelectedYear] = useState<string>("Vše");

  // Získání všech unikátních roků seřazených od nejnovějšího
  const years = useMemo(() => 
    ["Vše", ...Array.from(new Set(achievements.map(a => a.year))).sort((a, b) => b.localeCompare(a))]
  , [achievements]);

  // Filtrování podle vybraného roku
  const filteredAchievements = useMemo(() => 
    selectedYear === "Vše" 
      ? achievements 
      : achievements.filter(a => a.year === selectedYear)
  , [selectedYear, achievements]);

  // Optimalizace: méně duplikací na mobilu
  const duplicatedAchievements = useMemo(() => 
    isMobile 
      ? [...filteredAchievements, ...filteredAchievements]
      : [...filteredAchievements, ...filteredAchievements, ...filteredAchievements]
  , [isMobile, filteredAchievements]);

  // Optimalizované motion props pro mobil
  const getMotionProps = (delay = 0) => {
    if (isMobile || prefersReducedMotion) {
      return {
        initial: { opacity: 1 },
        whileinview: { opacity: 1 },
        transition: { duration: 0 }
      };
    }
    return {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.6, delay }
    };
  };

  const MotionDiv = isMobile ? 'div' : motion.div;

  return (
    <section 
      className="relative overflow-hidden" 
      style={{ 
        backgroundColor: paperColor
      }}
    >
      
      {/* Top Border */}
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

      <div className="py-12 md:py-20 lg:py-32">
        {/* Animated background elements - pouze desktop */}
        {!isMobile && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse" 
                 style={{ background: `radial-gradient(circle, ${accentColor}15, transparent)` }}></div>
            <div className="absolute bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse animation-delay-2000"
                 style={{ background: `radial-gradient(circle, ${accentColor}10, transparent)` }}></div>
          </div>
        )}

        {/* Header Section */}
        <MotionDiv 
          className="relative z-10 text-center mb-12 md:mb-20 px-4"
          {...getMotionProps()}
        >
          <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <Grape className="w-6 h-6 md:w-8 md:h-8" style={{ color: accentColor }} />
            <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-gray-800 mb-4 md:mb-6">
            Náš <span className="font-normal" style={{ color: accentColor }}>příběh</span>
          </h2>
          
          <p className="text-base md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Vinařství MiQueen v sobě snoubí moderní prvky s mnohaletou tradicí a zkušeností
          </p>
        </MotionDiv>

        {/* Main Content */}
        <MotionDiv 
          className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 md:mb-32"
          {...getMotionProps(0.2)}
        >
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 lg:gap-20">
            
            {/* Left Column - Story with Image */}
            <MotionDiv 
              className="space-y-6 md:space-y-8"
              {...(isMobile ? {} : {
                initial: { opacity: 0, x: -30 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true, margin: "-100px" },
                transition: { duration: 0.6 }
              })}
            >
              {/* Hero Image */}
              <div className="relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl touch-manipulation">
                <Image 
                  src={storyImageUrl} 
                  alt="Vinařství MiQueen"
                  width={900}
                  height={600}
                  className={`w-full h-auto object-contain ${!isMobile ? 'group-hover:scale-105 transition-transform duration-700' : ''}`}
                  loading="lazy"
                  quality={isMobile ? 60 : 90}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              {/* Story Text */}
              <div className="space-y-4 md:space-y-5 text-gray-700 max-w-4xl">
                <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                  Kolébkou všeho byla rodinná výroba vína, časem umocněna zkušenostmi ze srdce velké vinařské firmy. 
                  <span className="text-gray-900 font-medium"> Od roku 2006</span> jsme rostli s láskou k vínu a tradicím.
                </p>
                
                <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                  V roce <span className="text-gray-900 font-medium">2009</span> vznikla samostatná rodinná firma 
                  s výrobní kapacitou 30 000 lahví. Dnes je vinařství MiQueen 
                  <span className="font-medium" style={{ color: accentColor }}> kompletně ekologicky hospodařící</span> na 
                  téměř 32 hektarech vinic.
                </p>
                
                <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                  Naše vína získávají typický mikulovský minerální charakter díky 
                  <span className="text-gray-900 font-medium"> minerálnímu podloží z jurského vápence s jíly</span> v 
                  lokalitě Za cihelnou.
                </p>
              </div>
            </MotionDiv>

            {/* Right Column - Stats & CTA */}
            <MotionDiv 
              className="space-y-6 md:space-y-8 lg:sticky lg:top-8 lg:self-start"
              {...(isMobile ? {} : {
                initial: { opacity: 0, x: 30 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true, margin: "-100px" },
                transition: { duration: 0.6, delay: 0.2 }
              })}
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {highlights.map((highlight, index) => {
                  const IconComponent = highlight.icon;
                  const CardWrapper = isMobile ? 'div' : motion.div;
                  return (
                    <CardWrapper 
                      key={index}
                      className={`group relative bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-gray-100 transition-all duration-300 overflow-hidden touch-manipulation ${!isMobile ? 'hover:border-transparent hover:shadow-2xl' : 'active:scale-95'}`}
                      {...(isMobile ? {} : {
                        initial: { opacity: 0, scale: 0.9 },
                        whileInView: { opacity: 1, scale: 1 },
                        viewport: { once: true },
                        transition: { duration: 0.4, delay: index * 0.1 },
                        whileHover: { y: -4 }
                      })}
                    >
                      {/* Gradient overlay - pouze desktop */}
                      {!isMobile && (
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                             style={{ 
                               background: `linear-gradient(135deg, ${accentColor}15, transparent)`,
                             }}></div>
                      )}
                      
                      {/* Animated border - pouze desktop */}
                      {!isMobile && (
                        <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                             style={{ 
                               boxShadow: `0 0 0 1px ${accentColor}40`,
                             }}></div>
                      )}
                      
                      <div className="relative z-10">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl mb-3 md:mb-4 flex items-center justify-center ${!isMobile ? 'transition-all duration-500 group-hover:scale-110' : ''}`}
                             style={{ 
                               background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}10)`,
                             }}>
                          <IconComponent className="w-5 h-5 md:w-6 md:h-6" style={{ color: accentColor }} />
                        </div>
                        
                        <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                          {highlight.stat}
                        </div>
                        
                        <h3 className="text-gray-900 text-sm md:text-base font-semibold mb-1 md:mb-2">
                          {highlight.title}
                        </h3>
                        
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </CardWrapper>
                  );
                })}
              </div>

              {/* CTA Card */}
              <MotionDiv 
                className={`relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-100 shadow-lg overflow-hidden group transition-all duration-300 touch-manipulation ${!isMobile ? 'hover:shadow-2xl' : 'active:scale-95'}`}
                {...(isMobile ? {} : {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: 0.4 }
                })}
              >
                {/* Background pattern - pouze desktop */}
                {!isMobile && (
                  <div className="absolute inset-0 opacity-5"
                       style={{
                         backgroundImage: `radial-gradient(circle at 2px 2px, ${accentColor} 1px, transparent 0)`,
                         backgroundSize: '24px 24px'
                       }}></div>
                )}
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-2 md:mb-3">
                    Objevte naši filozofii
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                    Každé víno vypráví příběh našeho terroir a vášně pro vinařství.
                  </p>
                  <a 
                    href="/blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 text-white text-sm md:text-base font-medium rounded-full transition-all duration-300 shadow-lg touch-manipulation ${!isMobile ? 'hover:shadow-xl transform hover:scale-105' : ''} active:scale-95`}
                    style={{ 
                      background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`,
                    }}
                  >
                    <span>Více v blogu vinařství</span>
                    <ChevronRight className={`w-4 h-4 ${!isMobile ? 'group-hover/btn:translate-x-1 transition-transform' : ''}`} />
                  </a>
                </div>
              </MotionDiv>
            </MotionDiv>
          </div>
        </MotionDiv>

        {/* PHOTO GALLERY SECTION */}
        <MotionDiv 
          className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 md:mb-32"
          {...getMotionProps()}
        >
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {galleryPhotos.map((photo, index) => {
              const PhotoWrapper = isMobile ? 'div' : motion.div;
              return (
                <PhotoWrapper
                  key={index}
                  className={`photo-card group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-lg transition-all duration-300 touch-manipulation ${!isMobile ? 'hover:shadow-2xl' : 'active:scale-95'}`}
                  {...(isMobile ? {} : {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: "-50px" },
                    transition: { duration: 0.5, delay: index * 0.1 }
                  })}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={600}
                      height={450}
                      className={`w-full h-full object-cover ${!isMobile ? 'group-hover:scale-110 transition-transform duration-700' : ''}`}
                      loading="lazy"
                      quality={isMobile ? 60 : 90}
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Subtle overlay - pouze desktop */}
                    {!isMobile && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    )}
                  </div>
                  
                  {/* Decorative border - pouze desktop */}
                  {!isMobile && (
                    <div 
                      className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ 
                        boxShadow: `inset 0 0 0 2px ${accentColor}40`,
                      }}
                    ></div>
                  )}
                </PhotoWrapper>
              );
            })}
          </div>
        </MotionDiv>

        {/* Awards Section */}
        <MotionDiv 
          className="relative w-full overflow-hidden"
          {...getMotionProps()}
        >
          {/* Section Header */}
          <MotionDiv 
            className="text-center mb-8 md:mb-16 px-4"
            {...getMotionProps()}
          >
            <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <Trophy className="w-6 h-6 md:w-8 md:h-8" style={{ color: accentColor }} />
              <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-light text-gray-800 mb-4 md:mb-6">
              Naše <span className="font-normal" style={{ color: accentColor }}>ocenění</span>
            </h3>
            
            <p className="text-base md:text-xl text-gray-600 font-light max-w-2xl mx-auto mb-6 md:mb-8">
              Na významných soutěžích získáváme krásná ocenění
            </p>

            {/* Stats Bar */}
            <div className="flex justify-center">
              <div className="inline-flex flex-col sm:flex-row items-center bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-full p-2 border border-gray-200 shadow-lg">
                <div className="px-6 md:px-8 py-3 md:py-4 text-center">
                  <div className="text-2xl md:text-4xl font-bold text-amber-500">{totalGold}</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Zlatých</div>
                </div>
                <div className="w-full sm:w-px h-px sm:h-16 bg-gray-200"></div>
                <div className="px-6 md:px-8 py-3 md:py-4 text-center">
                  <div className="text-2xl md:text-4xl font-bold text-gray-400">{totalSilver}</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Stříbrných</div>
                </div>
                <div className="w-full sm:w-px h-px sm:h-16 bg-gray-200"></div>
                <div className="px-6 md:px-8 py-3 md:py-4 text-center">
                  <div className="text-2xl md:text-4xl font-bold" style={{ color: accentColor }}>{achievements.length}</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Soutěží</div>
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* Filtrování podle roku */}
          <MotionDiv 
            className="flex justify-center mb-8 md:mb-12 px-4"
            {...(isMobile ? {} : {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.2 }
            })}
          >
            <div className="inline-flex flex-wrap justify-center gap-2 md:gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-200 shadow-lg">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`
                    px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium text-sm md:text-base
                    transition-all duration-300 touch-manipulation
                    ${selectedYear === year 
                      ? 'text-white shadow-lg' 
                      : 'text-gray-700 active:scale-95'
                    }
                    ${!isMobile && selectedYear !== year ? 'hover:bg-gray-100 hover:scale-105' : ''}
                  `}
                  style={selectedYear === year ? { 
                    backgroundColor: accentColor,
                    boxShadow: `0 4px 12px ${accentColor}40`
                  } : {}}
                >
                  {year}
                  {year !== "Vše" && (
                    <span className={`ml-2 text-xs ${selectedYear === year ? 'text-white/80' : 'text-gray-500'}`}>
                      ({achievements.filter(a => a.year === year).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </MotionDiv>

          {/* Awards Slider Container */}
          <MotionDiv 
            className="awards-slider-container overflow-hidden relative py-4 md:py-8"
            {...(isMobile ? {} : {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { duration: 0.8 }
            })}
            key={selectedYear}
          >
            <div 
              className={`awards-slider flex gap-4 md:gap-6 ${isMobile || prefersReducedMotion ? 'awards-slider-paused' : ''}`}
              style={{
                animationDuration: isMobile ? '80s' : '60s'
              }}
            >
              {duplicatedAchievements.map((achievement, index) => {
                return (
                  <div 
                    key={`${achievement.id}-${index}`}
                    className={`award-card group relative flex-shrink-0 w-[260px] sm:w-[280px] md:w-[320px] bg-white rounded-2xl md:rounded-3xl border border-gray-200 transition-all duration-300 overflow-hidden shadow-lg touch-manipulation ${!isMobile ? 'hover:border-gray-300 hover:shadow-2xl' : 'active:scale-95'}`}
                    style={{ 
                      borderColor: achievement.highlight ? `${accentColor}` : undefined
                    }}
                  >
                    {/* Year badge */}
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20 px-2.5 py-1 md:px-3 md:py-1 rounded-full"
                         style={{ backgroundColor: `${accentColor}` }}>
                      <span className="text-white text-xs font-bold">{achievement.year}</span>
                    </div>

                    {/* Background accent gradient - pouze desktop */}
                    {!isMobile && (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                           style={{ background: `linear-gradient(135deg, ${accentColor}10, transparent)` }}></div>
                    )}

                    {/* Medal Image */}
                    <div className="relative h-24 md:h-32 mb-4 md:mb-6 flex items-center justify-center mt-6 md:mt-8">
                      {achievement.image && (
                        <Image 
                          src={achievement.image}
                          alt={achievement.title}
                          width={100}
                          height={100}
                          className={`object-contain drop-shadow-2xl rounded-xl md:rounded-2xl ${!isMobile ? 'group-hover:scale-110 transition-transform duration-500' : ''}`}
                          loading="lazy"
                          quality={isMobile ? 60 : 85}
                        />
                      )}
                    </div>
                    
                    <div className="relative z-10 px-5 md:px-8 pb-5 md:pb-8">
                      {/* Title */}
                      <h4 className="text-gray-900 text-sm md:text-lg font-medium mb-3 md:mb-4 min-h-[2.5rem] md:min-h-[3rem]">
                        {achievement.title}
                      </h4>

                      {/* Medals */}
                      <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4">
                        {achievement.goldMedals > 0 && (
                          <div className="flex items-center gap-1.5 md:gap-2">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-xl">
                              <span className="text-white text-xs md:text-sm font-bold">{achievement.goldMedals}</span>
                            </div>
                            <span className="text-amber-600 text-xs md:text-sm font-medium">zlaté</span>
                          </div>
                        )}
                        {achievement.silverMedals > 0 && (
                          <div className="flex items-center gap-1.5 md:gap-2">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center shadow-xl">
                              <span className="text-white text-xs md:text-sm font-bold">{achievement.silverMedals}</span>
                            </div>
                            <span className="text-gray-600 text-xs md:text-sm font-medium">stříbrné</span>
                          </div>
                        )}
                      </div>

                      {/* Total medals text */}
                      <p className="text-xs md:text-sm font-medium mb-3 md:mb-4" style={{ color: accentColor }}>
                        {achievement.totalMedals}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </MotionDiv>

          {/* Final CTA */}
          <MotionDiv 
            className="text-center mt-12 md:mt-20 px-4"
            {...getMotionProps()}
          >
            <a 
              href="/vina/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-4 md:py-5 text-white text-base md:text-lg font-medium rounded-full transition-all duration-300 shadow-xl touch-manipulation ${!isMobile ? 'hover:shadow-2xl hover:scale-105' : ''} active:scale-95`}
              style={{ backgroundColor: accentColor }}
            >
              <span>Objevte oceněná vína</span>
              <ChevronRight className={`w-4 h-4 md:w-5 md:h-5 ${!isMobile ? 'group-hover:translate-x-1 transition-transform' : ''}`} />
            </a>
          </MotionDiv>
        </MotionDiv>
      </div>

      {/* Bottom Border */}
      <div className="relative w-full">
        <Image 
          src="/border.png"
          alt=""
          width={1920}
          height={176}
          className="w-full h-auto"
          style={{ display: 'block' }}
          loading="lazy"
          quality={isMobile ? 60 : 90}
        />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }

        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          will-change: opacity;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* Photo Gallery - pouze desktop hover */
        @media (hover: hover) and (min-width: 768px) {
          .photo-card {
            will-change: transform;
          }
          .photo-card:hover {
            transform: translateY(-8px);
          }
        }

        /* Awards slider */
        .awards-slider-container {
          mask: linear-gradient(90deg, transparent, white 5%, white 95%, transparent);
          -webkit-mask: linear-gradient(90deg, transparent, white 5%, white 95%, transparent);
        }

        .awards-slider {
          animation: slide 60s linear infinite;
          width: fit-content;
        }

        /* Pause animace na mobilu */
        .awards-slider-paused {
          animation-play-state: paused;
        }

        /* Pause při touch na mobilu */
        @media (hover: none) {
          .awards-slider-container:active .awards-slider {
            animation-play-state: paused;
          }
        }

        /* Hover pause pouze na desktopu */
        @media (hover: hover) and (min-width: 768px) {
          .awards-slider:hover {
            animation-play-state: paused;
          }
        }

        /* Award cards - pouze desktop hover */
        @media (hover: hover) and (min-width: 768px) {
          .award-card {
            will-change: transform;
            transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .award-card:hover {
            transform: translateY(-8px) scale(1.02);
          }
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

        /* Reduced motion - respektování uživatelských preferencí */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Optimalizace pro low-end zařízení */
        @media (max-width: 767px) {
          .animate-pulse,
          .awards-slider {
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

export default AboutWinerySection;