"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Wine, Heart, ShoppingBag, Star, ShoppingCart, X, Thermometer, MapPin, ChefHat, User, ChevronDown } from "lucide-react";
import { motion, Variants, useReducedMotion } from "framer-motion";

interface MiniWine {
  id: number;
  name: string;
  variety: string;
  vintage: number;
  price: number;
  rating: number;
  description: string;
  image: string;
  shopUrl: string;
  badge?: 'new' | 'bestseller' | 'tip';
  quality?: string;
  dryness?: string;
  alcohol?: number;
  volume: number;
  region?: string;
  servingTemp?: string;
  foodPairing?: string[];
  winemaker?: string;
  notes?: string;
}

const MiQueenMiniPage = () => {
  const accentColor = "#ab8754";
  const paperColor = "#fefbea";
  
  const [selectedWine, setSelectedWine] = useState<MiniWine | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const miniWines: MiniWine[] = [
    {
      id: 1,
      name: "Pinot Noir 2022 mini",
      variety: "Pinot Noir",
      vintage: 2022,
      price: 69,
      rating: 4.8,
      description: "Nádherné víno cihlovo-rubínové barvy. Ve vůni nalezneme marmeládové a borůvkové tóny. Chuť je výrazně mnohovrstvá s tóny lesního ovoce, sušených brusinek, hořké čokolády s nekončícím závěrem.",
      image: "https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/120_pn22-mini.png?67b889e5",
      shopUrl: "https://shop.miqueen.cz/pinot-noir-2022-mini--vyber-z-hroznu---suche-1-ks/",
      badge: 'bestseller',
      quality: 'Výběr z hroznů',
      dryness: 'Suché',
      alcohol: 15.5,
      volume: 187,
      region: 'Mikulovská podoblast, Perná',
      servingTemp: '16-18°C',
      foodPairing: ['Degustace', 'Předkrmy', 'Tapas'],
      winemaker: 'MiQueen Winery',
      notes: 'Mini verze našeho oceňovaného Pinot Noir. Balení po 24ks.'
    },
    {
      id: 2,
      name: "Rulandské šedé 2023 mini",
      variety: "Rulandské šedé",
      vintage: 2023,
      price: 69,
      rating: 4.5,
      description: "Nádherné víno jemně narůžovělé barvy. Vůně je svěží s jemným chlebovinkovým aroma. Chuť je plná, harmonická s příjemnými minerálními tóny v závěru. Převládají zde tóny gdoulí a zralých meruněk.",
      image: "https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/87_rs23-mini.png?6647a134",
      shopUrl: "https://shop.miqueen.cz/rulandske-sede-2023-2/",
      quality: 'Výběr z hroznů',
      dryness: 'Polosladké',
      alcohol: 13.5,
      volume: 187,
      region: 'Mikulovská podoblast, Mikulov',
      servingTemp: '8-10°C',
      foodPairing: ['Předkrmy', 'Lehké saláty', 'Sushi'],
      winemaker: 'MiQueen Winery',
      notes: 'Ideální velikost pro ochutnávku nebo dárek. Balení po 24ks.'
    },
    {
      id: 3,
      name: "Ryzlink vlašský 2023 mini",
      variety: "Ryzlink vlašský",
      vintage: 2023,
      price: 69,
      rating: 4.5,
      description: "Nádherné víno žluto-zlatavé barvy vás zaujme příjemnou vůní červeného grepu a sušených bylinek. Chuť je výrazně minerální s velmi dlouhou a plnou dochutí.",
      image: "https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/81_rv23-mini.png?6647880c",
      shopUrl: "https://shop.miqueen.cz/ryzlink-vlassky-2023-2/",
      quality: 'Pozdní sběr',
      dryness: 'Suché',
      alcohol: 12,
      volume: 187,
      region: 'Mikulovská podoblast',
      servingTemp: '10-12°C',
      foodPairing: ['Aperitiv', 'Lehké předkrmy'],
      winemaker: 'MiQueen Winery',
      notes: 'Perfektní na ochutnávku. Balení po 24ks.'
    },
    {
      id: 4,
      name: "Ryzlink vlašský Frizzante 2023 mini",
      variety: "Ryzlink vlašský",
      vintage: 2023,
      price: 79,
      rating: 4.6,
      description: "Nádherné víno žluto-zlatavé barvy vás zaujme příjemnou vůní červeného grepu a sušených bylinek. Chuť je výrazně minerální s velmi dlouhou, plnou dochutí a lehounkou hořkostí v závěru.",
      image: "https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/102-1_friz-mini2.png?683ac153",
      shopUrl: "https://shop.miqueen.cz/frizzante-ryzlink-vlassky-2023-mini-moravske-zemske-polosuche-1-ks/",
      badge: 'new',
      quality: 'Moravské zemské',
      dryness: 'Polosuché',
      alcohol: 11,
      volume: 187,
      region: 'Mikulovská podoblast',
      servingTemp: '6-8°C',
      foodPairing: ['Aperitiv', 'Tapas'],
      winemaker: 'MiQueen Winery',
      notes: 'Vyrobeno metodou Charmat s jemným perlením. Balení po 24ks.'
    },
    {
      id: 5,
      name: "MIMOSA mini",
      variety: "Sauvignon Frizzante + 100% pomerančová šťáva",
      vintage: 2024,
      price: 89,
      rating: 4.7,
      description: "MIMOSA v kombinaci suchého Sauvignonu Frizzante a 100% pomerančové šťávy má svěží, lehce citrusovou chuť s výraznou kyselinkou. Vínová složka dodává suchý, minerální charakter.",
      image: "https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/159_navrh-bez-nazvu--43.png?6889cfcc",
      shopUrl: "https://shop.miqueen.cz/mimosa-mini/",
      badge: 'tip',
      dryness: 'Polosuché',
      alcohol: 8,
      volume: 200,
      region: 'Znojemská podoblast',
      servingTemp: '4-6°C',
      foodPairing: ['Brunch', 'Aperitiv', 'Ovocné saláty'],
      winemaker: 'MiQueen Winery',
      notes: 'Inovativní koktejl kombinující kvalitní víno s přírodní ovocnou šťávou.'
    }
  ];

  const benefits = [
    {
      icon: Wine,
      title: "Ideální porce",
      description: "Perfektní velikost 187-200ml pro jednu osobu. Vychutnej si sklenku kvalitního vína bez nutnosti otevírat celou láhev."
    },
    {
      icon: ShoppingBag,
      title: "Kabelkové víno",
      description: "Kompaktní rozměr, který se vejde do každé kabelky. Ideální na piknik, výlet nebo večer s přáteli."
    },
    {
      icon: Heart,
      title: "Skvělý dárek",
      description: "Originální darování možnost pro každou příležitost. Vytvoř si vlastní dárkovou sadu z mini lahviček."
    },
    {
      icon: Star,
      title: "Degustační set",
      description: "Vyzkoušej více druhů vín bez investice do velkých lahví. Objevuj nové chutě a najdi své oblíbené."
    }
  ];

  const getBadgeStyle = (badge?: string) => {
    switch(badge) {
      case 'bestseller': return { bg: '#ab8754', text: 'Bestseller' };
      case 'new': return { bg: '#10B981', text: 'Novinka' };
      case 'tip': return { bg: '#F59E0B', text: 'Tip' };
      default: return null;
    }
  };

  const openModal = (wine: MiniWine) => {
    setSelectedWine(wine);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWine(null);
    document.body.style.overflow = 'unset';
  };

  // Zjednodušené animace pro mobil a reduced motion
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.2 : 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15
      }
    }
  };

  return (
    <>
      <div className="min-h-screen" style={{ backgroundColor: paperColor }}>
        
        <section className="relative overflow-hidden py-12 md:py-16 lg:py-20">
          {/* Background animations - pouze na desktopu */}
          {!isMobile && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl" 
                   style={{ background: `radial-gradient(circle, ${accentColor}15, transparent)`, animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
              <div className="absolute bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl"
                   style={{ background: `radial-gradient(circle, ${accentColor}10, transparent)`, animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 2s' }}></div>
            </div>
          )}

          <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
            {/* Header */}
            <motion.div 
              className="text-center mb-10 md:mb-12 px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div 
                className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4"
                variants={fadeInUp}
              >
                <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <Wine className="w-6 h-6 md:w-8 md:h-8" style={{ color: accentColor }} />
                <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
              </motion.div>
              
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-gray-800 mb-2 md:mb-3"
                variants={fadeInUp}
              >
                MiQueen <span style={{ color: accentColor }}>mini</span>
              </motion.h1>
              <motion.p 
                className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Kvalitní víno v kabelkovém formátu 187-200ml
              </motion.p>
            </motion.div>

            {/* Benefits Grid - optimalizováno pro mobil */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={!isMobile ? { y: -8, transition: { duration: 0.3 } } : {}}
                    whileTap={isMobile ? { scale: 0.98 } : {}}
                    className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-200 hover:border-[#ab8754] hover:shadow-lg transition-all duration-300 text-center touch-manipulation"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center" style={{ backgroundColor: `${accentColor}20` }}>
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6" style={{ color: accentColor }} />
                    </div>
                    
                    <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1.5 md:mb-2">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Products Section Header */}
            <motion.div 
              className="mb-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-gray-600 text-base md:text-lg">
                Zobrazeno <span className="font-semibold text-xl md:text-2xl" style={{ color: accentColor }}>{miniWines.length}</span> z celkem <span className="font-semibold" style={{ color: accentColor }}>{miniWines.length}</span> vín
              </p>
            </motion.div>

            {/* Products Grid - PODLE WINEGRIDPAGE */}
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-6 lg:gap-8">
              {miniWines.map((wine, index) => {
                const badge = getBadgeStyle(wine.badge);
                
                return (
                  <motion.div
                    key={wine.id}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={!isMobile ? { y: -8, transition: { duration: 0.3 } } : {}}
                    whileTap={isMobile ? { scale: 0.98 } : {}}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#ab8754]/50 transition-all duration-500 shadow-lg hover:shadow-2xl touch-manipulation"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                      <Image
                        src={wine.image}
                        alt={wine.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        onClick={() => openModal(wine)}
                        loading="lazy"
                        quality={isMobile ? 75 : 90}
                      />
                      
                      {badge && (
                        <div 
                          className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-white z-10 shadow-lg"
                          style={{ backgroundColor: badge.bg }}
                        >
                          {badge.text}
                        </div>
                      )}

                      {/* Quick view overlay - pouze desktop */}
                      {!isMobile && (
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <button 
                            onClick={() => openModal(wine)}
                            className="hidden sm:flex px-6 py-3 bg-white text-gray-900 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all transform hover:scale-105 items-center gap-2 shadow-xl"
                          >
                            <Wine className="w-4 h-4" />
                            Zobrazit produkt
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Content - kompaktnější na mobilu */}
                    <div className="p-3 sm:p-5">
                      {/* Rating */}
                      <div className="flex items-center gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${
                              i < Math.floor(wine.rating) 
                                ? 'text-yellow-400 fill-yellow-400' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-gray-500 text-[10px] sm:text-sm ml-1 sm:ml-2 font-medium">({wine.rating.toFixed(1)})</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-gray-900 font-semibold text-xs sm:text-lg mb-1 sm:mb-2 line-clamp-2 min-h-[2rem] sm:min-h-[3.5rem] cursor-pointer hover:text-[#ab8754] transition-colors" onClick={() => openModal(wine)}>
                        {wine.name}
                      </h3>
                      
                      {/* Details */}
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <p className="text-gray-600 text-[10px] sm:text-sm line-clamp-1">
                          {wine.variety}
                        </p>
                        <span className="text-gray-500 text-[9px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 rounded-full">
                          {wine.vintage}
                        </span>
                      </div>
                      
                      {/* Volume badge */}
                      <div className="mb-2 sm:mb-3">
                        <span className="text-[9px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full" style={{ backgroundColor: "#ab875410", color: "#ab8754" }}>
                          Mini {wine.volume}ml
                        </span>
                      </div>
                      
                      {/* Description - skrytý na mobilu */}
                      <p className="hidden sm:block text-gray-500 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
                        {wine.description}
                      </p>
                      
                      {/* Price & Button */}
                      <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-500 text-[9px] sm:text-xs mb-0.5 sm:mb-1">Cena</p>
                            <p className="text-gray-900 font-bold text-lg sm:text-2xl">
                              {wine.price} <span className="text-sm sm:text-lg">Kč</span>
                            </p>
                          </div>
                          
                          {/* Mobile: Just circle with cart icon */}
                          <a
                            href={wine.shopUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sm:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-95"
                            style={{ backgroundColor: "#ab8754" }}
                          >
                            <ShoppingCart className="w-4 h-4 text-white" />
                          </a>
                          
                          {/* Desktop: Quality badge */}
                          {wine.quality && (
                            <span className="hidden sm:inline-block text-xs font-medium text-gray-600 px-2 py-1 bg-gray-50 rounded-lg">
                              {wine.quality}
                            </span>
                          )}
                        </div>
                        
                        {/* Desktop: Full button */}
                        <a
                          href={wine.shopUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden sm:flex w-full px-5 py-3 text-white rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:scale-105 items-center justify-center gap-2"
                          style={{ backgroundColor: "#ab8754" }}
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Koupit na e-shopu
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Modal - optimalizováno pro mobil */}
      {isModalOpen && selectedWine && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-0 md:p-4 overflow-hidden">
          <motion.div 
            className="relative bg-white w-full md:w-full md:max-w-6xl h-[90vh] md:h-auto md:max-h-[90vh] md:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            initial={{ opacity: 0, y: isMobile ? 100 : 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: isMobile ? 100 : 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 md:top-4 md:right-4 z-50 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all active:scale-90 touch-manipulation"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </button>

            <div className="flex flex-col lg:flex-row h-full overflow-hidden">
              {/* Image side */}
              <div className="lg:w-2/5 relative bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4 md:p-8 lg:p-12 flex-shrink-0">
                <div className="relative w-full max-w-sm aspect-[3/4]">
                  <Image
                    src={selectedWine.image}
                    alt={selectedWine.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    quality={isMobile ? 80 : 95}
                    priority
                  />
                </div>
                
                {/* Badge */}
                {selectedWine.badge && (
                  <div 
                    className="absolute top-4 md:top-6 left-4 md:left-6 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold text-white shadow-lg z-20"
                    style={{ backgroundColor: getBadgeStyle(selectedWine.badge)?.bg }}
                  >
                    {getBadgeStyle(selectedWine.badge)?.text}
                  </div>
                )}
                
                {/* Scroll indicator - pouze mobil */}
                {isMobile && (
                  <div className="lg:hidden absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent flex items-end justify-center pb-2">
                    <ChevronDown className="w-5 h-5 text-gray-400 animate-bounce" />
                  </div>
                )}
              </div>

              {/* Content side */}
              <div className="lg:w-3/5 flex-1 overflow-y-auto">
                <div className="p-5 md:p-6 lg:p-10">
                  {/* Header */}
                  <div className="mb-5 md:mb-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {selectedWine.name}
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-gray-600">{selectedWine.variety}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-3 md:mt-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-4 md:w-5 h-4 md:h-5 ${
                              i < Math.floor(selectedWine.rating) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 font-medium text-sm md:text-base">({selectedWine.rating.toFixed(1)})</span>
                    </div>
                  </div>

                  {/* Price section */}
                  <div className="bg-gradient-to-r from-[#ab875410] to-transparent p-4 md:p-6 rounded-xl md:rounded-2xl mb-5 md:mb-6">
                    <p className="text-gray-600 text-sm md:text-base mb-1 md:mb-2">Cena</p>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                      {selectedWine.price} <span className="text-lg md:text-xl lg:text-2xl">Kč</span>
                    </p>
                    <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">
                      Objem: {selectedWine.volume}ml
                    </p>
                  </div>

                  {/* Description */}
                  <div className="mb-5 md:mb-6">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3">Popis</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {selectedWine.description}
                    </p>
                  </div>

                  {/* Wine details grid */}
                  <div className="grid grid-cols-2 gap-2.5 md:gap-3 lg:gap-4 mb-5 md:mb-6">
                    <div className="bg-gray-50 p-3 md:p-4 rounded-lg md:rounded-xl">
                      <p className="text-gray-500 text-xs md:text-sm mb-1">Ročník</p>
                      <p className="text-gray-900 font-semibold text-sm md:text-base">{selectedWine.vintage}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 md:p-4 rounded-lg md:rounded-xl">
                      <p className="text-gray-500 text-xs md:text-sm mb-1">Alkohol</p>
                      <p className="text-gray-900 font-semibold text-sm md:text-base">{selectedWine.alcohol}%</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 md:p-4 rounded-lg md:rounded-xl">
                      <p className="text-gray-500 text-xs md:text-sm mb-1">Kvalita</p>
                      <p className="text-gray-900 font-semibold text-sm md:text-base">{selectedWine.quality}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 md:p-4 rounded-lg md:rounded-xl">
                      <p className="text-gray-500 text-xs md:text-sm mb-1">Sladkost</p>
                      <p className="text-gray-900 font-semibold text-sm md:text-base">{selectedWine.dryness}</p>
                    </div>
                  </div>

                  {/* Additional info */}
                  <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {selectedWine.region && (
                      <div className="flex items-start gap-2.5 md:gap-3">
                        <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#ab8754] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-500 text-xs md:text-sm">Region</p>
                          <p className="text-gray-900 text-sm md:text-base">{selectedWine.region}</p>
                        </div>
                      </div>
                    )}
                    
                    {selectedWine.servingTemp && (
                      <div className="flex items-start gap-2.5 md:gap-3">
                        <Thermometer className="w-4 h-4 md:w-5 md:h-5 text-[#ab8754] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-500 text-xs md:text-sm">Teplota servírování</p>
                          <p className="text-gray-900 text-sm md:text-base">{selectedWine.servingTemp}</p>
                        </div>
                      </div>
                    )}
                    
                    {selectedWine.foodPairing && selectedWine.foodPairing.length > 0 && (
                      <div className="flex items-start gap-2.5 md:gap-3">
                        <ChefHat className="w-4 h-4 md:w-5 md:h-5 text-[#ab8754] mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-gray-500 text-xs md:text-sm mb-2">Doporučujeme k</p>
                          <div className="flex flex-wrap gap-1.5 md:gap-2">
                            {selectedWine.foodPairing.map((food, index) => (
                              <span 
                                key={index}
                                className="px-2 md:px-3 py-0.5 md:py-1 bg-[#ab875410] text-[#ab8754] rounded-full text-xs md:text-sm font-medium"
                              >
                                {food}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {selectedWine.winemaker && (
                      <div className="flex items-start gap-2.5 md:gap-3">
                        <User className="w-4 h-4 md:w-5 md:h-5 text-[#ab8754] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-500 text-xs md:text-sm">Vinařství</p>
                          <p className="text-gray-900 text-sm md:text-base">{selectedWine.winemaker}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {selectedWine.notes && (
                    <div className="bg-[#ab875410] p-3 md:p-4 rounded-lg md:rounded-xl mb-6 md:mb-8">
                      <p className="text-[#ab8754] font-semibold mb-1.5 md:mb-2 text-sm md:text-base">Poznámka vinaře</p>
                      <p className="text-gray-700 text-xs md:text-sm">{selectedWine.notes}</p>
                    </div>
                  )}

                  {/* CTA Button */}
                  <div className="sticky bottom-0 left-0 right-0 bg-white pt-3 md:pt-4 pb-safe">
                    <a
                      href={selectedWine.shopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-5 md:px-6 py-3 md:py-4 bg-[#ab8754] text-white rounded-full font-semibold text-sm md:text-base lg:text-lg transition-all hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 touch-manipulation"
                    >
                      <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
                      Koupit na e-shopu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom, 1rem);
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }

        /* Touch optimizations */
        * {
          -webkit-tap-highlight-color: transparent;
        }

        .touch-manipulation {
          touch-action: manipulation;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default MiQueenMiniPage;