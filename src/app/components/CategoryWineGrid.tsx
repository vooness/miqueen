"use client"
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Wine, MapPin, ExternalLink } from "lucide-react";
import { getWinesByCategorySortedBySweetness } from "./wineData";
import { motion, useInView } from "framer-motion";
import WineFilterBar, { WineFilters } from "./WineFilterBar";
import { createSlug } from "@/app/lib/wineUtils";

interface CategoryWineGridProps {
  category: string;
  categoryName: string;
  categoryDescription: string;
}

// Funkce pro mapování kategorií na URL slugs
const getCategorySlug = (category: string): string => {
  const mapping: Record<string, string> = {
    'white': 'bila-vina',
    'red': 'cervena-vina',
    'rose': 'ruzova-vina',
    'sparkling': 'perliva-vina',
    'special': 'mimosa-specialni',
    'set': 'darkove-sety'
  };
  return mapping[category] || category;
};

const CategoryWineGrid: React.FC<CategoryWineGridProps> = ({ 
  category, 
  categoryName, 
  categoryDescription 
}) => {
  // Získej vína pro kategorii
  const categoryWines = getWinesByCategorySortedBySweetness(category);
  
  // Vypočítej min a max cenu z dat kategorie
  const minPrice = Math.min(...categoryWines.map(w => w.price));
  const maxPrice = Math.max(...categoryWines.map(w => w.price));

  // Získej všechny unikátní ročníky v kategorii
  const availableVintages = Array.from(
    new Set(categoryWines.map(w => w.vintage).filter(Boolean))
  ).sort((a, b) => b - a);

  // State pro filtry
  const [filters, setFilters] = useState<WineFilters>({
    searchQuery: '',
    priceRange: [minPrice, maxPrice],
    selectedVintages: [],
    selectedDryness: [],
    selectedQuality: [],
    selectedColors: []
  });

  // Handler pro změnu filtrů
  const handleFiltersChange = (newFilters: WineFilters) => {
    setFilters(newFilters);
  };

  // Aplikuj filtry
  const filteredWines = categoryWines.filter(wine => {
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
    return true;
  });

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

  const getQualityLabel = (quality?: string) => {
    switch(quality) {
      case 'kabinet': return 'Kabinet';
      case 'pozdni-sber': return 'Pozdní sběr';
      case 'vyber-z-hroznu': return 'Výběr z hroznů';
      case 'vyber-z-bobuli': return 'Výběr z bobulí';
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
    <section 
      className="min-h-screen py-20 lg:py-28 relative overflow-hidden mt-12"
      style={{ backgroundColor: "#fefbea" }}
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
              
              <h1 className="text-5xl lg:text-7xl font-light text-gray-800">
                {categoryName}
              </h1>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                {categoryDescription}
              </p>
              
              <div className="text-center">
                <p className="text-lg text-gray-600">
                  Zobrazeno <span className="font-semibold text-2xl" style={{ color: "#ab8754" }}>
                    {categoryWines.length}
                  </span> produktů
                </p>
              </div>
              
              {/* Navigace na ostatní kategorie */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <Link 
                  href="/vina"
                  className="px-4 py-2 rounded-full bg-white/90 text-gray-700 border border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300 font-medium text-sm"
                >
                  Všechna vína
                </Link>
                {category !== 'white' && (
                  <Link 
                    href="/vina/bila-vina"
                    className="px-4 py-2 rounded-full bg-white/90 text-gray-700 border border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300 font-medium text-sm"
                  >
                    Bílá vína
                  </Link>
                )}
                {category !== 'red' && (
                  <Link 
                    href="/vina/cervena-vina"
                    className="px-4 py-2 rounded-full bg-white/90 text-gray-700 border border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300 font-medium text-sm"
                  >
                    Červená vína
                  </Link>
                )}
                {category !== 'rose' && (
                  <Link 
                    href="/vina/ruzova-vina"
                    className="px-4 py-2 rounded-full bg-white/90 text-gray-700 border border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300 font-medium text-sm"
                  >
                    Růžová vína
                  </Link>
                )}
                {category !== 'sparkling' && (
                  <Link 
                    href="/vina/perliva-vina"
                    className="px-4 py-2 rounded-full bg-white/90 text-gray-700 border border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300 font-medium text-sm"
                  >
                    Perlivá vína
                  </Link>
                )}
                {category !== 'special' && (
                  <Link 
                    href="/vina/mimosa-specialni"
                    className="px-4 py-2 rounded-full bg-white/90 text-gray-700 border border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300 font-medium text-sm"
                  >
                    MIMOSA
                  </Link>
                )}
                {category !== 'set' && (
                  <Link 
                    href="/vina/darkove-sety"
                    className="px-4 py-2 rounded-full bg-white/90 text-gray-700 border border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300 font-medium text-sm"
                  >
                    Dárkové sety
                  </Link>
                )}
              </div>
              
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
        </AnimatedSection>

        {/* WineFilterBar */}
        <AnimatedSection delay={0.2}>
          <div className="mb-8">
            <WineFilterBar 
              filters={filters}
              onFiltersChange={handleFiltersChange}
              minPrice={minPrice}
              maxPrice={maxPrice}
              availableVintages={availableVintages}
              resultCount={filteredWines.length}
            />
          </div>
        </AnimatedSection>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-gray-600 text-lg">
            Zobrazeno <span className="font-semibold text-2xl" style={{ color: "#ab8754" }}>{filteredWines.length}</span> z <span className="font-semibold" style={{ color: "#ab8754" }}>{categoryWines.length}</span> {categoryName.toLowerCase()}
          </p>
        </div>

        {/* Wine Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-6 lg:gap-8">
          {filteredWines.map((wine, index) => {
            const badge = getBadgeStyle(wine.badge);
            const wineUrl = `/vina/${getCategorySlug(wine.category)}/${createSlug(wine.name)}`;
            
            return (
              <AnimatedSection key={wine.id} delay={index * 0.05}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#ab8754]/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2">
                  {/* Image Container s hover efektem */}
                  <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                    <Image 
                      src={wine.image}
                      alt={wine.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    
                    {badge && (
                      <div 
                        className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-white z-10 shadow-lg"
                        style={{ backgroundColor: badge.bg }}
                      >
                        {badge.text}
                      </div>
                    )}

                    {/* Overlay s tlačítkem Zobrazit produkt při hoveru */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link
                        href={wineUrl}
                        className="hidden sm:flex px-6 py-3 bg-white text-gray-900 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all transform hover:scale-105 items-center gap-2 shadow-xl"
                      >
                        <Wine className="w-4 h-4" />
                        Zobrazit produkt
                      </Link>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-3 sm:p-5">
                    {/* Rating */}
                    <div className="flex items-center gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${
                            i < Math.floor(wine.rating || 0) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-gray-500 text-[10px] sm:text-sm ml-1 sm:ml-2 font-medium">
                        ({wine.rating?.toFixed(1) || '4.5'})
                      </span>
                    </div>
                    
                    {/* Title - klikatelný */}
                    <Link href={wineUrl}>
                      <h3 className="text-gray-900 font-semibold text-xs sm:text-lg mb-1 sm:mb-2 line-clamp-2 min-h-[2rem] sm:min-h-[3.5rem] hover:text-[#ab8754] transition-colors cursor-pointer">
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
                    {wine.volume && (
                      <div className="mb-2 sm:mb-3">
                        <span className="text-[9px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full" style={{ backgroundColor: "#ab875410", color: "#ab8754" }}>
                          {wine.volume === 200 ? "Mini 200ml" : wine.volume === 187 ? "Mini 187ml" : "750ml"}
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
                        
                        {/* Mobile: ikona košíku */}
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
                      
                      {/* Desktop: Pouze tlačítko Koupit na e-shopu */}
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
              Zkuste změnit filtry
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
                href="/kontakty/"
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

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
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
      `}</style>
    </section>
  );
};

export default CategoryWineGrid;