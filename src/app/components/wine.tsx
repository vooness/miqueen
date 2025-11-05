"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Sparkles, Droplets, Cherry, Grape, Wine, Package, ShoppingCart, X, Thermometer, MapPin, ChefHat, User, Gift } from "lucide-react";

// ZMĚNA: Import nové funkce pro řazení podle sladkosti
import { wines, getWinesByCategorySortedBySweetness, getWineCountByCategory, WineProduct } from "./wineData";

// Import WineFilterBar komponenty
import WineFilterBar, { WineFilters } from "@/app/components/WineFilterBar";

// Debug: Zkontrolujte počet produktů při načtení komponenty
console.log('Celkový počet vín v databázi:', wines.length);
console.log('Bílá vína:', wines.filter(w => w.category === 'white').length);
console.log('Červená vína:', wines.filter(w => w.category === 'red').length);
console.log('Růžová vína:', wines.filter(w => w.category === 'rose').length);
console.log('Perlivá vína:', wines.filter(w => w.category === 'sparkling').length);
console.log('Speciální:', wines.filter(w => w.category === 'special').length);
console.log('Sety:', wines.filter(w => w.category === 'set').length);

const WineCollectionSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [gap, setGap] = useState(24);
  const [selectedWine, setSelectedWine] = useState<WineProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Vypočítání min/max ceny z aktuální databáze
  const minPrice = Math.min(...wines.map(w => w.price));
  const maxPrice = Math.max(...wines.map(w => w.price));

  // Získej všechny unikátní ročníky jako čísla
  const availableVintages = Array.from(new Set(wines.map(w => w.vintage).filter(Boolean))).sort((a, b) => b - a);

  // State pro filtry - podle správného WineFilters interface
  const [filters, setFilters] = useState<WineFilters>({
    searchQuery: '',
    priceRange: [minPrice, maxPrice],
    selectedVintages: [],
    selectedDryness: [],
    selectedQuality: [],
    selectedColors: []  // Nový filtr pro barvu vína
  });

  // Separate state pro řazení (není součástí WineFilters)
  const [] = useState<'name' | 'price-asc' | 'price-desc' | 'rating'>('name');

  // Responzivní počet viditelných produktů
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === 'undefined') return;
      
      if (window.innerWidth < 640) {
        setItemsPerView(2);
        setGap(12);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
        setGap(24);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
        setGap(24);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(4);
        setGap(24);
      } else {
        setItemsPerView(5);
        setGap(24);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ZMĚNA: Použití nové funkce pro řazení podle sladkosti - OD NEJSUŠŠÍCH PO NEJSLADŠÍ
  const filteredWines = selectedCategory === 'new' 
    ? wines.filter(w => w.badge === 'new').sort((a, b) => {
        // Seřadit novinky také podle sladkosti - OD NEJSUŠŠÍCH (VZESTUPNĚ)
        const aHasSugar = a.residualSugar !== null && a.residualSugar !== undefined;
        const bHasSugar = b.residualSugar !== null && b.residualSugar !== undefined;
        if (!aHasSugar && !bHasSugar) return 0;
        if (!aHasSugar) return 1;
        if (!bHasSugar) return -1;
        return a.residualSugar! - b.residualSugar!; // ZMĚNĚNO: vzestupně (od nejmenšího po největší)
      })
    : getWinesByCategorySortedBySweetness(selectedCategory);
  
  // Aplikace filtrů - vína jsou již seřazená od nejsušších po nejsladší, takže nepřeřazujeme
  const applyFilters = (wines: WineProduct[]) => {
    let result = [...wines];

    // Filtr vyhledávání
    if (filters.searchQuery) {
      result = result.filter(wine => 
        wine.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        wine.variety.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }

    // Filtr podle ceny
    result = result.filter(w => 
      w.price >= filters.priceRange[0] && w.price <= filters.priceRange[1]
    );

    // Filtr ročníků
    if (filters.selectedVintages.length > 0) {
      result = result.filter(w => filters.selectedVintages.includes(w.vintage.toString()));
    }

    // Filtr podle sladkosti
    if (filters.selectedDryness.length > 0) {
      result = result.filter(w => w.dryness && filters.selectedDryness.includes(w.dryness));
    }

    // Filtr podle kvality
    if (filters.selectedQuality.length > 0) {
      result = result.filter(w => w.quality && filters.selectedQuality.includes(w.quality));
    }

    // Filtr podle barvy vína - NOVÝ
    if (filters.selectedColors.length > 0) {
      result = result.filter(w => w.category && filters.selectedColors.includes(w.category));
    }

    return result;
  };

  const finalFilteredWines = applyFilters(filteredWines);
  const maxIndex = Math.max(0, finalFilteredWines.length - itemsPerView);

  // Callback pro změnu filtrů
  const handleFiltersChange = (newFilters: WineFilters) => {
    setFilters(newFilters);
    setCurrentIndex(0); // Reset na první slide při změně filtrů
  };

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory, filters]); // Reset i při změně filtrů

  const getBadgeStyle = (badge?: string) => {
    switch(badge) {
      case 'bestseller': return { bg: '#ab8754', text: 'Bestseller' };
      case 'award': return { bg: '#ab8754', text: 'Oceněné' };
      case 'new': return { bg: '#10B981', text: 'Novinka' };
      case 'limited': return { bg: '#E11D48', text: 'Limitované' };
      case 'tip': return { bg: '#F59E0B', text: 'Tip' };
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
      case 'moravske-zemske': return 'Moravské zemské';
      case 'slama': return 'Slámové víno';
      case 'ledove': return 'Ledové víno';
      default: return 'Standard';
    }
  };

  // Správné počty pro 40 produktů
  const getCategoryCount = (category: string): number => {
    if (category === 'all') return 40; // Celkem 40 produktů
    return getWineCountByCategory(category);
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
                Vína seřazená od nejsušších po nejsladší
              </p>
              
              {/* Informace kde koupit vína */}
              <div className="mt-8 max-w-3xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border-2 shadow-lg" style={{ borderColor: "#ab875440" }}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(171, 135, 84, 0.1)" }}>
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#ab8754" }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                        Kde koupíte naše vína?
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                        Naše vína můžete zakoupit online na e-shopu nebo v síti prodejen po celé České republice.
                      </p>
                      <a 
                        href="/mapa-vin"
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold hover:underline transition-colors"
                        style={{ color: "#ab8754" }}
                      >
                        <MapPin className="w-4 h-4" />
                        Zobrazit mapu prodejen
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kategorie - se správnými počty */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
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
                  ({getCategoryCount('all')})
                </span>
              </button>
              
              <button
                onClick={() => setSelectedCategory('new')}
                className={`
                  flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full border transition-all duration-300 font-medium text-xs sm:text-base
                  ${selectedCategory === 'new' 
                    ? 'text-white border-transparent shadow-lg' 
                    : 'bg-white/90 text-gray-700 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md'
                  }
                `}
                style={selectedCategory === 'new' ? { backgroundColor: '#10B981' } : {}}
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="whitespace-nowrap">Novinky</span>
                <span className={`${selectedCategory === 'new' ? 'text-white/80' : 'text-gray-500'} text-[10px] sm:text-base`}>
                  ({wines.filter(w => w.badge === 'new').length})
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
                  ({getCategoryCount('white')})
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
                  ({getCategoryCount('red')})
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
                  ({getCategoryCount('rose')})
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
                  ({getCategoryCount('sparkling')})
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
                  ({getCategoryCount('special')})
                </span>
              </button>

              <button
                onClick={() => setSelectedCategory('set')}
                className={`
                  flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full border transition-all duration-300 font-medium text-xs sm:text-base
                  ${selectedCategory === 'set' 
                    ? 'text-white border-transparent shadow-lg' 
                    : 'bg-white/90 text-gray-700 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md'
                  }
                `}
                style={selectedCategory === 'set' ? { backgroundColor: '#ab8754' } : {}}
              >
                <Gift className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Sety</span>
                <span className={`${selectedCategory === 'set' ? 'text-white/80' : 'text-gray-500'} text-[10px] sm:text-base`}>
                  ({getCategoryCount('set')})
                </span>
              </button>
            </div>
          </div>

          {/* WineFilterBar - Filtrační lišta nad produkty */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <WineFilterBar 
              filters={filters}
              onFiltersChange={handleFiltersChange}
              minPrice={minPrice}
              maxPrice={maxPrice}
              availableVintages={availableVintages}
              resultCount={finalFilteredWines.length}
            />
          </div>

          {/* Products Slider */}
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-light text-gray-800">
                {selectedCategory === 'all' ? 'Všechna vína' : 
                 selectedCategory === 'new' ? 'Novinky' :
                 selectedCategory === 'white' ? 'Bílá vína' :
                 selectedCategory === 'red' ? 'Červená vína' :
                 selectedCategory === 'rose' ? 'Růžová vína' :
                 selectedCategory === 'sparkling' ? 'Perlivá vína' :
                 selectedCategory === 'set' ? 'Dárkové sety' :
                 'Speciální edice'}
              </h3>
              
              <div className="flex items-center gap-3">
                <span className="text-gray-600 text-sm font-medium">
                  {finalFilteredWines.length} produktů
                </span>
              </div>
            </div>

            {/* Slider container with arrows on sides (desktop and mobile) */}
            <div className="relative">
              {/* Šipky po stranách uprostřed vertikálně - pro všechna zařízení */}
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`
                  absolute -left-4 top-1/2 -translate-y-1/2 z-10
                  w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg
                  ${currentIndex === 0 
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'hover:scale-110 active:scale-95'}
                `}
                style={{ backgroundColor: currentIndex === 0 ? '#d1d5db' : '#ab8754' }}
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              
              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className={`
                  absolute -right-4 top-1/2 -translate-y-1/2 z-10
                  w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg
                  ${currentIndex >= maxIndex 
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'hover:scale-110 active:scale-95'}
                `}
                style={{ backgroundColor: currentIndex >= maxIndex ? '#d1d5db' : '#ab8754' }}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>

              <div className="overflow-hidden px-0 sm:px-0">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ 
                    gap: `${gap}px`,
                    transform: `translateX(calc(-${currentIndex} * (${100 / itemsPerView}% + ${gap / itemsPerView}px)))`
                  }}
                >
                  {finalFilteredWines.map((wine) => {
                    const badge = getBadgeStyle(wine.badge);
                    
                    return (
                      <div
                        key={wine.id}
                        className="flex-shrink-0 transition-all duration-500"
                        style={{ 
                          width: `calc((100% - ${gap * (itemsPerView - 1)}px) / ${itemsPerView})`
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
                              sizes={`(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw`}
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
                          <div className="p-3 sm:p-5 flex flex-col flex-grow bg-white">
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
                            <h3 className="text-gray-900 font-semibold text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-2 min-h-[2rem] sm:min-h-[3.5rem] cursor-pointer hover:text-[#ab8754] transition-colors" onClick={() => openModal(wine)}>
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
                                  {wine.volume === 200 ? "Mini 200ml" : wine.volume === 187 ? "Mini 187ml" : wine.volume === 375 ? "375ml" : wine.volume === 500 ? "500ml" : "750ml"}
                                </span>
                              </div>
                            )}
                            
                            {/* Description - hidden on mobile */}
                            <p className="hidden sm:block text-gray-500 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
                              {wine.description}
                            </p>
                            
                            {/* Price & Button */}
                            <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-4 border-t border-gray-100 mt-auto">
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
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Slider dots */}
            {finalFilteredWines.length > itemsPerView && (
              <div className="flex justify-center mt-6 sm:mt-8 gap-1 sm:gap-2">
                {Array.from({ length: Math.min(8, maxIndex + 1) }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === i 
                        ? 'w-8 opacity-100' 
                        : 'w-2 opacity-40 hover:opacity-70'
                    }`}
                    style={{ backgroundColor: "#ab8754" }}
                    aria-label={`Přejít na slide ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal - stejný jako v původním kódu, zkráceno pro úsporu místa */}
      {isModalOpen && selectedWine && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={closeModal}
        >
          <div className="min-h-screen px-4 flex items-center justify-center">
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            />
            
            <div 
              className="relative bg-white rounded-3xl max-w-5xl w-full mx-auto shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 sm:p-12 flex items-center justify-center border-r border-gray-100">
                  {selectedWine.badge && (
                    <div 
                      className="absolute top-6 left-6 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg z-10"
                      style={{ backgroundColor: getBadgeStyle(selectedWine.badge)?.bg }}
                    >
                      {getBadgeStyle(selectedWine.badge)?.text}
                    </div>
                  )}
                  
                  <div className="relative w-full max-w-sm">
                    <Image
                      src={selectedWine.image}
                      alt={selectedWine.name}
                      width={400}
                      height={800}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-12 overflow-y-scroll max-h-[80vh] custom-scrollbar">
                  <div className="mb-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                      {selectedWine.name}
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">
                      {selectedWine.grapeVariety}
                    </p>
                    
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

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Popis</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedWine.description}
                    </p>
                  </div>

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

export default WineCollectionSection;