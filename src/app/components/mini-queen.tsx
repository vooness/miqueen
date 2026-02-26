"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Wine, Heart, ShoppingBag, Star, ShoppingCart, Gift } from "lucide-react";
import { motion, Variants, useReducedMotion } from "framer-motion";
import { wines, WineProduct } from "./wineData";
import WineFilterBar, { WineFilters } from "./WineFilterBar";

// Helper funkce pro vytvoření slug
const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const MiQueenMiniPage = () => {
  const accentColor = "#ab8754";
  const paperColor = "#fefbea";
  
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Pomocná funkce pro řazení podle sladkosti
  const getDrynessOrder = (dryness?: string): number => {
    const order: { [key: string]: number } = {
      'Suché': 1,
      'Polosuché': 2,
      'Polosladké': 3,
      'Sladké': 4
    };
    return dryness ? (order[dryness] || 999) : 999;
  };

  // Filtrování pouze mini vín a setů
  const baseMiniWines: WineProduct[] = wines.filter(wine => {
    const isMiniVolume = wine.volume && wine.volume < 250;
    const isMiniName = wine.name.toLowerCase().includes('mini');
    const isSet = wine.category === 'set' || wine.id === 38 || wine.id === 39;
    
    return isMiniVolume || isMiniName || isSet;
  }).sort((a, b) => {
    if ((a.category === 'set') && (b.category !== 'set')) return 1;
    if ((a.category !== 'set') && (b.category === 'set')) return -1;
    
    const drynessOrder = getDrynessOrder(a.dryness) - getDrynessOrder(b.dryness);
    if (drynessOrder !== 0) return drynessOrder;
    
    return a.id - b.id;
  });

  const minPrice = Math.min(...baseMiniWines.map(w => w.price));
  const maxPrice = Math.max(...baseMiniWines.map(w => w.price));
  const availableVintages = Array.from(new Set(baseMiniWines.map(w => w.vintage).filter(Boolean))).sort((a, b) => b - a);

  const [filters, setFilters] = useState<WineFilters>({
    searchQuery: '',
    priceRange: [minPrice, maxPrice],
    selectedVintages: [],
    selectedDryness: [],
    selectedQuality: [],
    selectedColors: []
  });

  const handleFiltersChange = (newFilters: WineFilters) => {
    setFilters(newFilters);
  };

  // Aplikuj filtry
  const miniWines = baseMiniWines.filter(wine => {
    if (filters.searchQuery && !wine.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
        !wine.variety.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
      return false;
    }
    if (wine.price < filters.priceRange[0] || wine.price > filters.priceRange[1]) {
      return false;
    }
    if (filters.selectedVintages.length > 0 && !filters.selectedVintages.includes(wine.vintage.toString())) {
      return false;
    }
    if (filters.selectedDryness.length > 0 && wine.dryness && !filters.selectedDryness.includes(wine.dryness)) {
      return false;
    }
    if (filters.selectedQuality.length > 0 && wine.quality && !filters.selectedQuality.includes(wine.quality)) {
      return false;
    }
    if (filters.selectedColors.length > 0 && wine.category && !filters.selectedColors.includes(wine.category)) {
      return false;
    }
    return true;
  });

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
      description: "Originální dárková možnost pro každou příležitost. Vytvoř si vlastní dárkovou sadu z mini lahviček."
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
      case 'award': return { bg: '#6366F1', text: 'Ocenění' };
      case 'limited': return { bg: '#DC2626', text: 'Limitovaná edice' };
      default: return null;
    }
  };

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
    <div className="min-h-screen" style={{ backgroundColor: paperColor }}>
      <section className="relative overflow-hidden py-12 md:py-16 lg:py-20">
        {/* Background animations - pouze desktop */}
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

          {/* Benefits Grid */}
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

          {/* WineFilterBar */}
          <motion.div
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <WineFilterBar 
              filters={filters}
              onFiltersChange={handleFiltersChange}
              minPrice={minPrice}
              maxPrice={maxPrice}
              availableVintages={availableVintages}
              resultCount={miniWines.length}
            />
          </motion.div>

          {/* Results Count */}
          <motion.div 
            className="mb-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-gray-600 text-base md:text-lg">
              Zobrazeno <span className="font-semibold text-xl md:text-2xl" style={{ color: accentColor }}>{miniWines.length}</span> z celkem <span className="font-semibold" style={{ color: accentColor }}>{baseMiniWines.length}</span> mini produktů
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-6 lg:gap-8">
            {miniWines.map((wine, index) => {
              const badge = getBadgeStyle(wine.badge);
              const isSet = wine.category === 'set';
              const wineSlug = createSlug(wine.name);
              
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
                  <Link href={`/miqueen-mini/${wineSlug}`}>
                    <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden cursor-pointer">
                      <Image
                        src={wine.image}
                        alt={wine.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
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

                      {isSet && (
                        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#ab8754] flex items-center justify-center shadow-lg z-10">
                          <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                      )}

                      {/* Quick view overlay - pouze desktop */}
                      {!isMobile && (
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold text-sm flex items-center gap-2 shadow-xl">
                            <Wine className="w-4 h-4" />
                            Zobrazit produkt
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-3 sm:p-5">
                    {/* Rating */}
                    {wine.rating && (
                      <div className="flex items-center gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${
                              wine.rating && i < Math.floor(wine.rating) 
                                ? 'text-yellow-400 fill-yellow-400' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-gray-500 text-[10px] sm:text-sm ml-1 sm:ml-2 font-medium">({wine.rating.toFixed(1)})</span>
                      </div>
                    )}

                    {/* Title */}
                    <Link href={`/miqueen-mini/${wineSlug}`}>
                      <h3 className="text-gray-900 font-semibold text-xs sm:text-lg mb-1 sm:mb-2 line-clamp-2 min-h-[2rem] sm:min-h-[3.5rem] cursor-pointer hover:text-[#ab8754] transition-colors">
                        {wine.name}
                      </h3>
                    </Link>
                    
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
                        {isSet ? `Set 4x ${wine.volume}ml` : `Mini ${wine.volume}ml`}
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

          {/* Empty State */}
          {miniWines.length === 0 && (
            <div className="text-center py-20">
              <Wine className="w-20 h-20 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-light text-gray-600 mb-2">
                Žádná vína nenalezena
              </h3>
              <p className="text-gray-500">
                Zkuste změnit filtry
              </p>
            </div>
          )}
        </div>
      </section>

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

        * {
          -webkit-tap-highlight-color: transparent;
        }

        .touch-manipulation {
          touch-action: manipulation;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MiQueenMiniPage;