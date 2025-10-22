"use client"
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Star, ShoppingCart, Sparkles, Droplets, Cherry, Grape, Wine, Package, ExternalLink, X, Thermometer, MapPin, ChefHat, User } from "lucide-react";
import { getWinesByCategory, getWineCountByCategory, WineProduct } from "./wineData";
import { motion, useInView } from "framer-motion";

const WineGridPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedWine, setSelectedWine] = useState<WineProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredWines = getWinesByCategory(selectedCategory);

  const getBadgeStyle = (badge?: string) => {
    switch(badge) {
      case 'bestseller': return { bg: '#ab8754', text: 'Bestseller' };
      case 'award': return { bg: '#FFD700', text: 'Oceněné' };
      case 'new': return { bg: '#10B981', text: 'Novinka' };
      case 'limited': return { bg: '#E11D48', text: 'Limitované' };
      case 'tip': return { bg: '#ab8754', text: 'Tip' };
      default: return null;
    }
  };


  const openModal = (wine: WineProduct) => {
    setSelectedWine(wine);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWine(null);
    document.body.style.overflow = 'unset';
  };

  const getDrynessLabel = (dryness?: string) => {
    switch(dryness) {
      case 'suche': return 'Suché';
      case 'polosuche': return 'Polosuché';
      case 'polosladke': return 'Polosladké';
      case 'sladke': return 'Sladké';
      default: return 'N/A';
    }
  };

  const getQualityLabel = (quality?: string) => {
    switch(quality) {
      case 'kabinet': return 'Kabinet';
      case 'pozdni-sber': return 'Pozdní sběr';
      case 'vyber-z-hroznu': return 'Výběr z hroznů';
      case 'vyber-z-bobuli': return 'Výběr z bobulí';
      case 'slama': return 'Slámové víno';
      case 'ledove': return 'Ledové víno';
      case 'moravske-zemske': return 'Moravské zemské';
      default: return 'Standard';
    }
  };

  const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <>
      <section 
        className="min-h-screen py-20 lg:py-28 relative overflow-hidden"
        style={{ 
          backgroundColor: "#fefbea"
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse" 
               style={{ background: `radial-gradient(circle, #ab875415, transparent)` }}></div>
          <div className="absolute bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse animation-delay-2000"
               style={{ background: `radial-gradient(circle, #ab875410, transparent)` }}></div>
        </div>
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16 px-4">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                  <Grape className="w-8 h-8" style={{ color: "#ab8754" }} />
                  <div className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-light text-gray-800">
                  Naše <span className="font-normal" style={{ color: "#ab8754" }}>vína</span>
                </h1>
                <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                  Kompletní nabídka našich oceněných vín z Pálavy
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Kategorie Filter - kompaktnější na mobilu */}
          <AnimatedSection delay={0.2}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`
                  flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full border transition-all duration-300 font-medium text-xs sm:text-base
                  ${selectedCategory === 'all' 
                    ? 'text-white border-transparent shadow-lg' 
                    : 'bg-white/90 text-gray-700 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md'
                  }
                `}
                style={selectedCategory === 'all' ? { backgroundColor: '#ab8754' } : {}}
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="whitespace-nowrap">Všechna vína</span>
                <span className={`${selectedCategory === 'all' ? 'text-white/80' : 'text-gray-500'} text-[10px] sm:text-base`}>
                  ({getWineCountByCategory('all')})
                </span>
              </button>

              <button
                onClick={() => setSelectedCategory('white')}
                className={`
                  flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full border transition-all duration-300 font-medium text-xs sm:text-base
                  ${selectedCategory === 'white' 
                    ? 'text-white border-transparent shadow-lg' 
                    : 'bg-white/90 text-gray-700 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md'
                  }
                `}
                style={selectedCategory === 'white' ? { backgroundColor: '#ab8754' } : {}}
              >
                <Droplets className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Bílá</span>
                <span className={`${selectedCategory === 'white' ? 'text-white/80' : 'text-gray-500'} text-[10px] sm:text-base`}>
                  ({getWineCountByCategory('white')})
                </span>
              </button>

              <button
                onClick={() => setSelectedCategory('red')}
                className={`
                  flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full border transition-all duration-300 font-medium text-xs sm:text-base
                  ${selectedCategory === 'red' 
                    ? 'text-white border-transparent shadow-lg' 
                    : 'bg-white/90 text-gray-700 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md'
                  }
                `}
                style={selectedCategory === 'red' ? { backgroundColor: '#ab8754' } : {}}
              >
                <Cherry className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Červená</span>
                <span className={`${selectedCategory === 'red' ? 'text-white/80' : 'text-gray-500'} text-[10px] sm:text-base`}>
                  ({getWineCountByCategory('red')})
                </span>
              </button>

              <button
                onClick={() => setSelectedCategory('rose')}
                className={`
                  flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full border transition-all duration-300 font-medium text-xs sm:text-base
                  ${selectedCategory === 'rose' 
                    ? 'text-white border-transparent shadow-lg' 
                    : 'bg-white/90 text-gray-700 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md'
                  }
                `}
                style={selectedCategory === 'rose' ? { backgroundColor: '#ab8754' } : {}}
              >
                <Grape className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Růžová</span>
                <span className={`${selectedCategory === 'rose' ? 'text-white/80' : 'text-gray-500'} text-[10px] sm:text-base`}>
                  ({getWineCountByCategory('rose')})
                </span>
              </button>

              <button
                onClick={() => setSelectedCategory('sparkling')}
                className={`
                  flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full border transition-all duration-300 font-medium text-xs sm:text-base
                  ${selectedCategory === 'sparkling' 
                    ? 'text-white border-transparent shadow-lg' 
                    : 'bg-white/90 text-gray-700 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md'
                  }
                `}
                style={selectedCategory === 'sparkling' ? { backgroundColor: '#ab8754' } : {}}
              >
                <Wine className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Perlivá</span>
                <span className={`${selectedCategory === 'sparkling' ? 'text-white/80' : 'text-gray-500'} text-[10px] sm:text-base`}>
                  ({getWineCountByCategory('sparkling')})
                </span>
              </button>

              <button
                onClick={() => setSelectedCategory('special')}
                className={`
                  flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full border transition-all duration-300 font-medium text-xs sm:text-base
                  ${selectedCategory === 'special' 
                    ? 'text-white border-transparent shadow-lg' 
                    : 'bg-white/90 text-gray-700 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md'
                  }
                `}
                style={selectedCategory === 'special' ? { backgroundColor: '#ab8754' } : {}}
              >
                <Package className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Mimosa</span>
                <span className={`${selectedCategory === 'special' ? 'text-white/80' : 'text-gray-500'} text-[10px] sm:text-base`}>
                  ({getWineCountByCategory('special')})
                </span>
              </button>
            </div>
          </div>
          </AnimatedSection>

          {/* Results Count */}
          <div className="mb-8 text-center">
            <p className="text-gray-600 text-lg">
              Zobrazeno <span className="font-semibold text-2xl" style={{ color: "#ab8754" }}>{filteredWines.length}</span> z celkem <span className="font-semibold" style={{ color: "#ab8754" }}>23</span> vín
            </p>
          </div>

          {/* Wine Grid - UPRAVENO: 2 sloupce na mobilu, menší mezery */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-6 lg:gap-8">
            {filteredWines.map((wine, index) => {
              const badge = getBadgeStyle(wine.badge);
              
              return (
                <AnimatedSection key={wine.id} delay={index * 0.05}>
                <div
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#ab8754]/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2"
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
                    />
                    
                    {badge && (
                      <div 
                        className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-white z-10 shadow-lg"
                        style={{ backgroundColor: badge.bg }}
                      >
                        {badge.text}
                      </div>
                    )}

                    {/* Quick view overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button 
                        onClick={() => openModal(wine)}
                        className="hidden sm:flex px-6 py-3 bg-white text-gray-900 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all transform hover:scale-105 items-center gap-2 shadow-xl"
                      >
                        <Wine className="w-4 h-4" />
                        Zobrazit produkt
                      </button>
                    </div>
                  </div>
                  
                  {/* Content - UPRAVENO: kompaktnější na mobilu */}
                  <div className="p-3 sm:p-5">
                    {/* Rating */}
                    <div className="flex items-center gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${
                            i < Math.floor(wine.rating || 0) 
                              ? 'text-yellow-400 fill-current' 
                              : i < (wine.rating || 0) 
                                ? 'text-yellow-400 fill-current opacity-50'
                                : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-gray-500 text-[10px] sm:text-sm ml-1 sm:ml-2 font-medium">({wine.rating?.toFixed(1) || '4.5'})</span>
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
                    {wine.volume && (
                      <div className="mb-2 sm:mb-3">
                        <span className="text-[9px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full" style={{ backgroundColor: "#ab875410", color: "#ab8754" }}>
                          {wine.volume === 200 ? "Mini 200ml" : wine.volume === 187 ? "187ml" : wine.volume === 375 ? "375ml" : wine.volume === 500 ? "500ml" : "750ml"}
                        </span>
                      </div>
                    )}
                    
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
                            {getQualityLabel(wine.quality)}
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
                </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredWines.length === 0 && (
            <div className="text-center py-20">
              <Wine className="w-20 h-20 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-light text-gray-600 mb-2">
                Žádná vína nenalezena
              </h3>
              <p className="text-gray-500">
                Zkuste změnit filtr kategorie
              </p>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-light text-gray-800 mb-4">
                Máte zájem o <span style={{ color: "#ab8754" }}>degustaci</span>?
              </h3>
              <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
                Navštivte naše vinařství v Mikulově a ochutnejte naše oceněná vína přímo u zdroje
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://shop.miqueen.cz/kontakt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-white rounded-full font-medium text-lg transition-all hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#ab8754" }}
                >
                  <ExternalLink className="w-5 h-5" />
                  Kontaktovat vinařství
                </a>
                <a 
                  href="https://shop.miqueen.cz/vsechna-vina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-gray-700 rounded-full font-medium text-lg border-2 border-gray-300 transition-all hover:border-gray-400 hover:shadow-lg inline-flex items-center justify-center gap-2"
                >
                  Zobrazit e-shop
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Modal - s viditelným scrollbarem */}
      {isModalOpen && selectedWine && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
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
              </div>

              {/* Details side - s viditelným scrollbarem */}
              <div className="lg:w-3/5 overflow-y-scroll custom-scrollbar flex-1">
                <div className="p-6 sm:p-8 lg:p-12">
                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                      {selectedWine.name}
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">
                      {selectedWine.grapeVariety}
                    </p>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(selectedWine.rating || 0)
                                ? 'text-yellow-400 fill-current'
                                : i < (selectedWine.rating || 0)
                                  ? 'text-yellow-400 fill-current opacity-50'
                                  : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 font-medium">({selectedWine.rating?.toFixed(1) || '4.5'})</span>
                    </div>
                  </div>

                  {/* Price section */}
                  <div className="bg-gradient-to-r from-[#ab875410] to-transparent p-4 sm:p-6 rounded-2xl mb-6">
                    <p className="text-gray-600 mb-2">Cena</p>
                    <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                      {selectedWine.price} <span className="text-xl sm:text-2xl">Kč</span>
                    </p>
                    {selectedWine.volume && (
                      <p className="text-gray-600 mt-2">
                        Objem: {selectedWine.volume}ml
                      </p>
                    )}
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
                      <p className="text-gray-900 font-semibold text-sm sm:text-base">{selectedWine.alcohol || 'N/A'}%</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                      <p className="text-gray-500 text-xs sm:text-sm mb-1">Kvalita</p>
                      <p className="text-gray-900 font-semibold text-sm sm:text-base">{getQualityLabel(selectedWine.quality)}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                      <p className="text-gray-500 text-xs sm:text-sm mb-1">Sladkost</p>
                      <p className="text-gray-900 font-semibold text-sm sm:text-base">{getDrynessLabel(selectedWine.dryness)}</p>
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
          </motion.div>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

        /* Custom scrollbar for modal */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ab8754;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #8b6d44;
        }

        /* Firefox scrollbar */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #ab8754 #f1f1f1;
        }
      `}</style>
    </>
  );
};

export default WineGridPage;