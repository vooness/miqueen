"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Sparkles, Droplets, Cherry, Grape, Wine, Package, ShoppingCart, X, Thermometer, MapPin, ChefHat, User, ChevronDown } from "lucide-react";
import { getWinesByCategory, getWineCountByCategory, WineProduct } from "./wineData";

const WineCollectionSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [selectedWine, setSelectedWine] = useState<WineProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Responzivní počet viditelných produktů
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === 'undefined') return;
      
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(4);
      } else {
        setItemsPerView(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredWines = getWinesByCategory(selectedCategory);
  const maxIndex = Math.max(0, filteredWines.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const getBadgeStyle = (badge?: string) => {
    switch(badge) {
      case 'bestseller': return { bg: '#ab8754', text: 'Bestseller' };
      case 'award': return { bg: '#ab8754', text: 'Oceněné' };
      case 'new': return { bg: '#10B981', text: 'Novinka' };
      case 'limited': return { bg: '#E11D48', text: 'Limitované' };
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
      default: return 'Standard';
    }
  };

  return (
    <>
      <section 
        className="relative min-h-screen py-20 lg:py-28 overflow-hidden"
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
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 px-4">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <Grape className="w-8 h-8" style={{ color: "#ab8754" }} />
                <div className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
              </div>
              
              <h2 className="text-5xl lg:text-7xl font-light text-gray-800">
                Naše <span className="font-normal" style={{ color: "#ab8754" }}>kolekce</span>
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                Objevte naše nejcennější a nejlépe hodnocená vína
              </p>
            </div>
          </div>

          {/* Kategorie */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 font-medium
                  ${selectedCategory === 'all' 
                    ? 'text-white border-transparent shadow-lg' 
                    : 'bg-white/90 text-gray-700 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md'
                  }
                `}
                style={selectedCategory === 'all' ? { backgroundColor: '#ab8754' } : {}}
              >
                <Sparkles className="w-4 h-4" />
                <span>Všechna vína</span>
                <span className={`${selectedCategory === 'all' ? 'text-white/80' : 'text-gray-500'}`}>
                  ({getWineCountByCategory('all')})
                </span>
              </button>

              <button
                onClick={() => setSelectedCategory('white')}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 font-medium
                  ${selectedCategory === 'white' 
                    ? 'text-white border-transparent shadow-lg' 
                    : 'bg-white/90 text-gray-700 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md'
                  }
                `}
                style={selectedCategory === 'white' ? { backgroundColor: '#ab8754' } : {}}
              >
                <Droplets className="w-4 h-4" />
                <span>Bílá</span>
                <span className={`${selectedCategory === 'white' ? 'text-white/80' : 'text-gray-500'}`}>
                  ({getWineCountByCategory('white')})
                </span>
              </button>

              <button
                onClick={() => setSelectedCategory('red')}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 font-medium
                  ${selectedCategory === 'red' 
                    ? 'text-white border-transparent shadow-lg' 
                    : 'bg-white/90 text-gray-700 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md'
                  }
                `}
                style={selectedCategory === 'red' ? { backgroundColor: '#ab8754' } : {}}
              >
                <Cherry className="w-4 h-4" />
                <span>Červená</span>
                <span className={`${selectedCategory === 'red' ? 'text-white/80' : 'text-gray-500'}`}>
                  ({getWineCountByCategory('red')})
                </span>
              </button>

              <button
                onClick={() => setSelectedCategory('rose')}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 font-medium
                  ${selectedCategory === 'rose' 
                    ? 'text-white border-transparent shadow-lg' 
                    : 'bg-white/90 text-gray-700 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md'
                  }
                `}
                style={selectedCategory === 'rose' ? { backgroundColor: '#ab8754' } : {}}
              >
                <Grape className="w-4 h-4" />
                <span>Růžová</span>
                <span className={`${selectedCategory === 'rose' ? 'text-white/80' : 'text-gray-500'}`}>
                  ({getWineCountByCategory('rose')})
                </span>
              </button>

              <button
                onClick={() => setSelectedCategory('sparkling')}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 font-medium
                  ${selectedCategory === 'sparkling' 
                    ? 'text-white border-transparent shadow-lg' 
                    : 'bg-white/90 text-gray-700 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md'
                  }
                `}
                style={selectedCategory === 'sparkling' ? { backgroundColor: '#ab8754' } : {}}
              >
                <Wine className="w-4 h-4" />
                <span>Perlivá</span>
                <span className={`${selectedCategory === 'sparkling' ? 'text-white/80' : 'text-gray-500'}`}>
                  ({getWineCountByCategory('sparkling')})
                </span>
              </button>

              <button
                onClick={() => setSelectedCategory('special')}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 font-medium
                  ${selectedCategory === 'special' 
                    ? 'text-white border-transparent shadow-lg' 
                    : 'bg-white/90 text-gray-700 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md'
                  }
                `}
                style={selectedCategory === 'special' ? { backgroundColor: '#ab8754' } : {}}
              >
                <Package className="w-4 h-4" />
                <span>Mimosa</span>
                <span className={`${selectedCategory === 'special' ? 'text-white/80' : 'text-gray-500'}`}>
                  ({getWineCountByCategory('special')})
                </span>
              </button>
            </div>
          </div>

          {/* Products Slider */}
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-light text-gray-800">
                {selectedCategory === 'all' ? 'Všechna vína' : 
                 selectedCategory === 'white' ? 'Bílá vína' :
                 selectedCategory === 'red' ? 'Červená vína' :
                 selectedCategory === 'rose' ? 'Růžová vína' :
                 selectedCategory === 'sparkling' ? 'Perlivá vína' :
                 'Speciální edice'}
              </h3>
              
              <div className="flex items-center gap-3">
                <span className="text-gray-600 text-sm font-medium">
                  {filteredWines.length} produktů
                </span>
                
                {/* Slider controls */}
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all
                      ${currentIndex === 0 
                        ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100 bg-white shadow-sm'}`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    disabled={currentIndex >= maxIndex}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all
                      ${currentIndex >= maxIndex 
                        ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100 bg-white shadow-sm'}`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Slider container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ 
                  gap: '24px',
                  transform: `translateX(calc(-${currentIndex} * (${100 / itemsPerView}% + ${24 / itemsPerView}px)))`
                }}
              >
                {filteredWines.map((wine) => {
                  const badge = getBadgeStyle(wine.badge);
                  
                  return (
                    <div
                      key={wine.id}
                      className="flex-shrink-0 transition-all duration-500"
                      style={{ 
                        width: `calc((100% - ${24 * (itemsPerView - 1)}px) / ${itemsPerView})`
                      }}
                    >
                      <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#ab8754]/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                        
                        {/* Image Container */}
                        <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden flex-shrink-0">
                          <Image 
                            src={wine.image}
                            alt={wine.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                            sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw`}
                            onClick={() => openModal(wine)}
                          />
                          
                          {badge && (
                            <div 
                              className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg z-10"
                              style={{ backgroundColor: badge.bg }}
                            >
                              {badge.text}
                            </div>
                          )}

                          {/* Quick view overlay */}
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 pointer-events-none group-hover:pointer-events-auto">
                            <button
                              onClick={() => openModal(wine)}
                              className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl"
                            >
                              <Wine className="w-4 h-4" />
                              Zobrazit produkt
                            </button>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-5 flex flex-col flex-grow bg-white">
                          {/* Rating */}
                          <div className="flex items-center gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(wine.rating || 0) 
                                    ? 'text-yellow-400 fill-current' 
                                    : i < (wine.rating || 0)
                                      ? 'text-yellow-400 fill-current opacity-50'
                                      : 'text-gray-300'
                                }`}
                              />
                            ))}
                            <span className="text-gray-500 text-sm ml-2 font-medium">({wine.rating?.toFixed(1) || '4.5'})</span>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-gray-900 font-semibold text-sm mb-2 line-clamp-2 min-h-[3.5rem] cursor-pointer hover:text-[#ab8754] transition-colors" onClick={() => openModal(wine)}>
                            {wine.name}
                          </h3>
                          
                          {/* Details */}
                          <div className="flex items-center justify-between mb-3">
                            <p className="text-gray-600 text-sm">
                              {wine.variety}
                            </p>
                            <span className="text-gray-500 text-xs font-medium px-2 py-1 bg-gray-100 rounded-full">
                              {wine.vintage}
                            </span>
                          </div>
                          
                          {/* Volume badge */}
                          {wine.volume && (
                            <div className="mb-3">
                              <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ backgroundColor: "#ab875410", color: "#ab8754" }}>
                                {wine.volume === 200 ? "Mini 200ml" : wine.volume === 375 ? "375ml" : wine.volume === 500 ? "500ml" : "750ml"}
                              </span>
                            </div>
                          )}
                          
                          {/* Description */}
                          <p className="text-gray-500 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
                            {wine.description}
                          </p>
                          
                          {/* Price & Button */}
                          <div className="flex flex-col gap-3 pt-4 border-t border-gray-100 mt-auto">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-gray-500 text-xs mb-1">Cena</p>
                                <p className="text-gray-900 font-bold text-2xl">
                                  {wine.price} <span className="text-lg">Kč</span>
                                </p>
                              </div>
                              
                              {wine.quality && (
                                <span className="text-xs font-medium text-gray-600 px-2 py-1 bg-gray-50 rounded-lg">
                                  {getQualityLabel(wine.quality)}
                                </span>
                              )}
                            </div>
                            
                            <a
                              href={wine.shopUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full px-5 py-3 text-white rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                              style={{ backgroundColor: "#ab8754" }}
                            >
                              <ShoppingCart className="w-4 h-4" />
                              Koupit na e-shopu
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Slider dots */}
            {filteredWines.length > itemsPerView && (
              <div className="flex justify-center mt-6 sm:mt-8 gap-1 sm:gap-2">
                {Array.from({ length: Math.min(8, maxIndex + 1) }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`transition-all duration-300 rounded-full
                      ${currentIndex === i 
                        ? 'w-6 sm:w-8 h-1.5 sm:h-2' 
                        : 'w-1.5 sm:w-2 h-1.5 sm:h-2'
                      }`}
                    style={{
                      backgroundColor: currentIndex === i ? "#ab8754" : "rgba(171, 135, 84, 0.3)"
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <a 
              href="https://shop.miqueen.cz/vsechna-vina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 text-white text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              style={{ backgroundColor: "#ab8754" }}
            >
              Zobrazit e-shop
            </a>
          </div>

        </div>
      </section>

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
              {/* Image side - optimized for mobile */}
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
                
                {/* Visual separator with scroll indicator for mobile */}
                <div className="lg:hidden absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent flex items-end justify-center pb-2">
                  <ChevronDown className="w-5 h-5 text-gray-400 animate-bounce" />
                </div>
              </div>

              {/* Content side - scrollable */}
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

                  {/* CTA Button - fixed at bottom on mobile */}
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
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </>
  );
};

export default WineCollectionSection;