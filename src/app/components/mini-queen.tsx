"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Wine, Heart, ShoppingBag, Star, Eye, ShoppingCart, X, Thermometer, MapPin, ChefHat, User, ChevronDown } from "lucide-react";
import { motion, Variants } from "framer-motion";

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
      volume: 200, // MIMOSA mini má 200 ml
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

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <>
      <div className="min-h-screen" style={{ backgroundColor: paperColor }}>
        
        <section className="relative overflow-hidden py-16 lg:py-20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl" 
                 style={{ background: `radial-gradient(circle, ${accentColor}15, transparent)`, animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
            <div className="absolute bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl"
                 style={{ background: `radial-gradient(circle, ${accentColor}10, transparent)`, animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 2s' }}></div>
          </div>

          <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            {/* Header */}
            <motion.div 
              className="text-center mb-12 px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div 
                className="inline-flex items-center gap-3 mb-4"
                variants={fadeInUp}
              >
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <Wine className="w-8 h-8" style={{ color: accentColor }} />
                <div className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-light text-gray-800 mb-3"
                variants={fadeInUp}
              >
                MiQueen <span style={{ color: accentColor }}>mini</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Kvalitní víno v kabelkovém formátu 187-200ml
              </motion.p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
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
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#ab8754] hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: `${accentColor}20` }}>
                      <IconComponent className="w-6 h-6" style={{ color: accentColor }} />
                    </div>
                    
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Products Section Header */}
            <motion.div 
              className="text-center mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-2">
                Zobrazeno <span style={{ color: accentColor }}>5</span> z celkem <span style={{ color: accentColor }}>5</span> vín
              </h2>
            </motion.div>

            {/* Products Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {miniWines.map((wine) => {
                const badge = getBadgeStyle(wine.badge);
                
                return (
                  <motion.div
                    key={wine.id}
                    variants={fadeInUp}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#ab8754] hover:shadow-xl transition-all duration-300"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[3/4] bg-white overflow-hidden">
                      <Image
                        src={wine.image}
                        alt={wine.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        onClick={() => openModal(wine)}
                      />
                      
                      {badge && (
                        <div 
                          className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-md z-10"
                          style={{ backgroundColor: badge.bg }}
                        >
                          {badge.text}
                        </div>
                      )}

                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-white border border-gray-200 text-gray-700 shadow-sm">
                          {wine.volume}ml
                        </span>
                      </div>

                      {/* Hover Quick View */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                        <button
                          onClick={() => openModal(wine)}
                          className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all flex items-center gap-2 shadow-xl"
                        >
                          <Eye className="w-4 h-4" />
                          Rychlý náhled
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      {/* Rating */}
                      <div className="flex items-center gap-0.5 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(wine.rating) 
                                ? 'text-yellow-400 fill-yellow-400' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-gray-600 text-sm ml-1">({wine.rating.toFixed(1)})</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-gray-900 font-semibold text-base mb-2 line-clamp-2 min-h-[3rem] cursor-pointer hover:text-[#ab8754] transition-colors" onClick={() => openModal(wine)}>
                        {wine.name}
                      </h3>
                      
                      {/* Details Row */}
                      <div className="flex items-center justify-between mb-2 text-sm">
                        <p className="text-gray-600">{wine.variety}</p>
                        <span className="text-gray-500">{wine.vintage}</span>
                      </div>

                      {/* Volume Badge */}
                      <div className="mb-3">
                        <span className="inline-block text-xs font-medium px-2 py-1 rounded" style={{ backgroundColor: "#ab875415", color: "#ab8754" }}>
                          Mini {wine.volume}ml
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2 min-h-[2.5rem]">
                        {wine.description}
                      </p>
                      
                      {/* Price Section */}
                      <div className="border-t border-gray-100 pt-3 mb-3">
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-gray-500 text-xs mb-0.5">Cena</p>
                            <p className="text-gray-900 font-bold text-2xl">
                              {wine.price} <span className="text-lg">Kč</span>
                            </p>
                          </div>
                          
                          {wine.quality && (
                            <span className="text-xs font-medium text-gray-600 px-2 py-1 bg-gray-50 rounded">
                              {wine.quality}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Button */}
                      <a
                        href={wine.shopUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-2.5 text-white text-center rounded-lg font-semibold text-sm transition-all hover:opacity-90"
                        style={{ backgroundColor: accentColor }}
                      >
                        Koupit v e-shopu
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div 
              className="mt-20 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl max-w-4xl mx-auto">
                <Heart className="w-12 h-12 mx-auto mb-4" style={{ color: accentColor }} />
                
                <h3 className="text-3xl lg:text-4xl font-light text-gray-800 mb-4">
                  Vytvoř si <span style={{ color: accentColor }}>vlastní set</span>
                </h3>
                
                <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
                  Vyber si své oblíbené mini lahvičky a poskládej si degustační set přesně podle svých představ
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://shop.miqueen.cz/mini-miqueen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 text-white rounded-full font-medium text-lg transition-all hover:scale-105 shadow-lg"
                    style={{ backgroundColor: accentColor }}
                  >
                    Zobrazit mini kolekci
                  </a>
                  
                  <a
                    href="https://shop.miqueen.cz/vsechna-vina/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-gray-700 rounded-full font-medium text-lg border-2 border-gray-300 transition-all hover:border-gray-400 hover:shadow-lg"
                  >
                    Všechna vína
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Modal */}
      {isModalOpen && selectedWine && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          <div 
            className="relative bg-white rounded-none sm:rounded-3xl w-full sm:max-w-5xl h-full sm:h-auto sm:max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            <div className="flex flex-col lg:flex-row h-full overflow-hidden">
              {/* Image side */}
              <div className="lg:w-2/5 relative bg-gradient-to-br from-gray-100 to-gray-50 flex-shrink-0">
                <div className="relative h-[40vh] sm:h-[50vh] lg:h-full flex items-center justify-center p-6 lg:p-12">
                  <div className="relative w-full h-full max-w-md mx-auto">
                    <Image 
                      src={selectedWine.image}
                      alt={selectedWine.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  
                  {selectedWine.badge && (
                    <div 
                      className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg"
                      style={{ backgroundColor: getBadgeStyle(selectedWine.badge)?.bg }}
                    >
                      {getBadgeStyle(selectedWine.badge)?.text}
                    </div>
                  )}
                </div>
                
                <div className="lg:hidden absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent flex items-end justify-center pb-2">
                  <ChevronDown className="w-5 h-5 text-gray-400 animate-bounce" />
                </div>
              </div>

              {/* Content side */}
              <div className="lg:w-3/5 flex-1 overflow-y-auto">
                <div className="p-6 lg:p-10">
                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {selectedWine.name}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600">{selectedWine.variety}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-4 sm:w-5 h-4 sm:h-5 ${
                              i < Math.floor(selectedWine.rating) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 font-medium">({selectedWine.rating.toFixed(1)})</span>
                    </div>
                  </div>

                  {/* Price section */}
                  <div className="bg-gradient-to-r from-[#ab875410] to-transparent p-4 sm:p-6 rounded-2xl mb-6">
                    <p className="text-gray-600 mb-2">Cena</p>
                    <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                      {selectedWine.price} <span className="text-xl sm:text-2xl">Kč</span>
                    </p>
                    <p className="text-gray-600 mt-2">
                      Objem: {selectedWine.volume}ml
                    </p>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Popis</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedWine.description}
                    </p>
                  </div>

                  {/* Wine details grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                      <p className="text-gray-500 text-xs sm:text-sm mb-1">Ročník</p>
                      <p className="text-gray-900 font-semibold text-sm sm:text-base">{selectedWine.vintage}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                      <p className="text-gray-500 text-xs sm:text-sm mb-1">Alkohol</p>
                      <p className="text-gray-900 font-semibold text-sm sm:text-base">{selectedWine.alcohol}%</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                      <p className="text-gray-500 text-xs sm:text-sm mb-1">Kvalita</p>
                      <p className="text-gray-900 font-semibold text-sm sm:text-base">{selectedWine.quality}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                      <p className="text-gray-500 text-xs sm:text-sm mb-1">Sladkost</p>
                      <p className="text-gray-900 font-semibold text-sm sm:text-base">{selectedWine.dryness}</p>
                    </div>
                  </div>

                  {/* Additional info */}
                  <div className="space-y-4 mb-8">
                    {selectedWine.region && (
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#ab8754] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-500 text-xs sm:text-sm">Region</p>
                          <p className="text-gray-900 text-sm sm:text-base">{selectedWine.region}</p>
                        </div>
                      </div>
                    )}
                    
                    {selectedWine.servingTemp && (
                      <div className="flex items-start gap-3">
                        <Thermometer className="w-5 h-5 text-[#ab8754] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-500 text-xs sm:text-sm">Teplota servírování</p>
                          <p className="text-gray-900 text-sm sm:text-base">{selectedWine.servingTemp}</p>
                        </div>
                      </div>
                    )}
                    
                    {selectedWine.foodPairing && selectedWine.foodPairing.length > 0 && (
                      <div className="flex items-start gap-3">
                        <ChefHat className="w-5 h-5 text-[#ab8754] mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-gray-500 text-xs sm:text-sm mb-2">Doporučujeme k</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedWine.foodPairing.map((food, index) => (
                              <span 
                                key={index}
                                className="px-2 sm:px-3 py-1 bg-[#ab875410] text-[#ab8754] rounded-full text-xs sm:text-sm font-medium"
                              >
                                {food}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {selectedWine.winemaker && (
                      <div className="flex items-start gap-3">
                        <User className="w-5 h-5 text-[#ab8754] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-500 text-xs sm:text-sm">Vinařství</p>
                          <p className="text-gray-900 text-sm sm:text-base">{selectedWine.winemaker}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {selectedWine.notes && (
                    <div className="bg-[#ab875410] p-4 rounded-xl mb-8">
                      <p className="text-[#ab8754] font-semibold mb-2 text-sm sm:text-base">Poznámka vinaře</p>
                      <p className="text-gray-700 text-xs sm:text-sm">{selectedWine.notes}</p>
                    </div>
                  )}

                  {/* CTA Button */}
                  <div className="sticky bottom-0 left-0 right-0 bg-white pt-4 pb-safe">
                    <a
                      href={selectedWine.shopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-6 py-4 bg-[#ab8754] text-white rounded-full font-semibold text-base sm:text-lg transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Koupit na e-shopu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      `}</style>
    </>
  );
};

export default MiQueenMiniPage;