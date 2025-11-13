"use client";
import React, { useState, useMemo, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Sparkles, Droplets, Cherry, Grape, Wine, Package, ExternalLink, Gift, MapPin } from "lucide-react";
import { wines, getWinesByCategorySortedBySweetness, getWineCountByCategory } from "./wineData";
import WineFilterBar, { WineFilters } from "./WineFilterBar";
import { createSlug } from "@/app/lib/wineUtils";

// Props interface
interface WineGridPageProps {
  initialCategory?: string;
}

// Reverzní mapování kategorie na URL slug
const getCategorySlug = (category: string): string => {
  const reverseMapping: Record<string, string> = {
    all: "vsechna-vina",
    new: "novinky",
    white: "bila-vina",
    red: "cervena-vina",
    rose: "ruzova-vina",
    sparkling: "perliva-vina",
    special: "mimosa-special",
    set: "darkove-sety",
  };
  return reverseMapping[category] || "vsechna-vina";
};

const WineGridPage: React.FC<WineGridPageProps> = ({ initialCategory = "all" }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  // Aktualizuj kategorii když se změní initialCategory (z URL)
  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  // Detekce mobilního zařízení
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    const debouncedResize = () => {
      clearTimeout((window as Window & { gridResizeTimer?: number }).gridResizeTimer);
      (window as Window & { gridResizeTimer?: number }).gridResizeTimer = window.setTimeout(checkMobile, 150);
    };

    window.addEventListener("resize", debouncedResize, { passive: true });
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout((window as Window & { gridResizeTimer?: number }).gridResizeTimer);
    };
  }, []);

  // Memoizace min/max ceny
  const priceRange = useMemo(
    () => ({
      min: Math.min(...wines.map((w) => w.price)),
      max: Math.max(...wines.map((w) => w.price)),
    }),
    []
  );

  // Memoizace unikátních ročníků
  const availableVintages = useMemo(
    () => Array.from(new Set(wines.map((w) => w.vintage).filter(Boolean))).sort((a, b) => b - a),
    []
  );

  // State pro filtry
  const [filters, setFilters] = useState<WineFilters>({
    searchQuery: "",
    priceRange: [priceRange.min, priceRange.max],
    selectedVintages: [],
    selectedDryness: [],
    selectedQuality: [],
    selectedColors: [],
  });

  // Handler pro změnu filtrů
  const handleFiltersChange = useCallback((newFilters: WineFilters) => {
    setFilters(newFilters);
  }, []);

  // Memoizace filtrovaných vín
  const filteredWines = useMemo(() => {
    // Filtrování podle kategorie - seřazeno od nejsušších
    const wines_filtered =
      selectedCategory === "new"
        ? wines.filter((w) => w.badge === "new").sort((a, b) => {
            const aHasSugar = a.residualSugar !== null && a.residualSugar !== undefined;
            const bHasSugar = b.residualSugar !== null && b.residualSugar !== undefined;
            if (!aHasSugar && !bHasSugar) return 0;
            if (!aHasSugar) return 1;
            if (!bHasSugar) return -1;
            return a.residualSugar! - b.residualSugar!;
          })
        : selectedCategory === "all"
        ? [...wines].sort((a, b) => {
            const aHasSugar = a.residualSugar !== null && a.residualSugar !== undefined;
            const bHasSugar = b.residualSugar !== null && b.residualSugar !== undefined;
            if (!aHasSugar && !bHasSugar) return 0;
            if (!aHasSugar) return 1;
            if (!bHasSugar) return -1;
            return a.residualSugar! - b.residualSugar!;
          })
        : getWinesByCategorySortedBySweetness(selectedCategory);

    // Aplikuj filtry
    return wines_filtered.filter((wine) => {
      if (
        filters.searchQuery &&
        !wine.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
        !wine.variety.toLowerCase().includes(filters.searchQuery.toLowerCase())
      ) {
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
  }, [selectedCategory, filters]);

  // Memoizace helper funkcí
  const getBadgeStyle = useCallback((badge?: string) => {
    switch (badge) {
      case "bestseller":
        return { bg: "#ab8754", text: "Bestseller" };
      case "award":
        return { bg: "#ab8754", text: "Oceněné" };
      case "new":
        return { bg: "#10B981", text: "Novinka" };
      case "limited":
        return { bg: "#E11D48", text: "Limitované" };
      case "tip":
        return { bg: "#F59E0B", text: "Tip" };
      default:
        return null;
    }
  }, []);

  const getQualityLabel = useCallback((quality?: string) => {
    switch (quality) {
      case "kabinet":
        return "Kabinet";
      case "pozdni-sber":
        return "Pozdní sběr";
      case "vyber-z-hroznu":
        return "Výběr z hroznů";
      case "vyber-z-bobuli":
        return "Výběr z bobulí";
      case "moravske-zemske":
        return "Moravské zemské";
      default:
        return "Standard";
    }
  }, []);

  // Memoizace kategorií
  const categories = useMemo(
    () => [
      { id: "all", icon: Sparkles, label: "Všechna vína", color: "#ab8754", count: wines.length },
      { id: "new", icon: Sparkles, label: "Novinky", color: "#10B981", count: wines.filter((w) => w.badge === "new").length },
      { id: "white", icon: Droplets, label: "Bílá", color: "#ab8754" },
      { id: "red", icon: Cherry, label: "Červená", color: "#ab8754" },
      { id: "rose", icon: Grape, label: "Růžová", color: "#ab8754" },
      { id: "sparkling", icon: Wine, label: "Perlivá", color: "#ab8754" },
      { id: "special", icon: Package, label: "Mimosa", color: "#ab8754" },
      { id: "set", icon: Gift, label: "Sety", color: "#ab8754" },
    ],
    []
  );

  return (
    <section className="min-h-screen py-12 sm:py-20 lg:py-28 relative" style={{ backgroundColor: "#fefbea" }}>
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <Grape className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: "#ab8754" }} />
              <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-light text-gray-800">
              Naše <span className="font-normal" style={{ color: "#ab8754" }}>vína</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Vína seřazená od nejsušších po nejsladší
            </p>

            {/* Informace kde koupit vína */}
            <div className="mt-6 sm:mt-8 max-w-3xl mx-auto">
              <div
                className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 shadow-lg"
                style={{ borderColor: "#ab875440" }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(171, 135, 84, 0.1)" }}
                  >
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#ab8754" }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-2">Kde koupíte naše vína?</h3>
                    <p className="text-xs sm:text-base text-gray-700 leading-relaxed mb-3">
                      Naše vína můžete zakoupit online na e-shopu nebo v síti prodejen po celé České republice.
                    </p>
                    <Link
                      href="/mapa-vin"
                      className="inline-flex items-center gap-2 text-xs sm:text-base font-semibold hover:underline transition-colors touch-manipulation"
                      style={{ color: "#ab8754" }}
                    >
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      Zobrazit mapu prodejen
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kategorie Filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const count = category.count !== undefined ? category.count : getWineCountByCategory(category.id);
              const isSelected = selectedCategory === category.id;
              const categorySlug = getCategorySlug(category.id);

              return (
                <Link
                  key={category.id}
                  href={`/vina/${categorySlug}`}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full border transition-all duration-300 font-medium text-xs sm:text-base touch-manipulation
                    ${isSelected ? "text-white border-transparent shadow-lg" : "bg-white/90 text-gray-700 border-gray-200 active:scale-95"}
                    ${!isMobile && !isSelected ? "hover:bg-white hover:border-gray-300 hover:shadow-md" : ""}
                  `}
                  style={isSelected ? { backgroundColor: category.color } : {}}
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="whitespace-nowrap">{category.label}</span>
                  <span className={`${isSelected ? "text-white/80" : "text-gray-500"} text-[10px] sm:text-sm`}>({count})</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* WineFilterBar */}
        <div className="mb-6 sm:mb-8">
          <WineFilterBar
            filters={filters}
            onFiltersChange={handleFiltersChange}
            minPrice={priceRange.min}
            maxPrice={priceRange.max}
            availableVintages={availableVintages}
            resultCount={filteredWines.length}
          />
        </div>

        {/* Results Count */}
        <div className="mb-6 sm:mb-8 text-center">
          <p className="text-gray-600 text-sm sm:text-lg">
            Zobrazeno{" "}
            <span className="font-semibold text-xl sm:text-2xl" style={{ color: "#ab8754" }}>
              {filteredWines.length}
            </span>{" "}
            z celkem{" "}
            <span className="font-semibold" style={{ color: "#ab8754" }}>
              {wines.length}
            </span>{" "}
            vín
          </p>
        </div>

        {/* Wine Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-6 lg:gap-8">
          {filteredWines.map((wine) => {
            const badge = getBadgeStyle(wine.badge);
            const wineUrl = `/vina/${getCategorySlug(wine.category)}/${createSlug(wine.name)}`;

            return (
              <div
                key={wine.id}
                className={`group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 shadow-lg ${
                  isMobile ? "active:scale-95" : "hover:border-[#ab8754]/50 hover:shadow-2xl hover:-translate-y-2"
                }`}
              >
                {/* Image Container - KLIKATELNÝ */}
                <Link href={wineUrl} className="block">
                  <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                    <Image
                      src={wine.image}
                      alt={wine.name}
                      fill
                      className={`object-cover ${!isMobile ? "group-hover:scale-110 transition-transform duration-700" : ""}`}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      loading="lazy"
                      quality={isMobile ? 70 : 85}
                    />

                    {badge && (
                      <div
                        className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-white z-10 shadow-lg pointer-events-none"
                        style={{ backgroundColor: badge.bg }}
                      >
                        {badge.text}
                      </div>
                    )}

                    {/* Overlay - pouze desktop */}
                    {!isMobile && (
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <div className="flex px-6 py-3 bg-white text-gray-900 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all transform hover:scale-105 items-center gap-2 shadow-xl">
                          <Wine className="w-4 h-4" />
                          Zobrazit produkt
                        </div>
                      </div>
                    )}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-3 sm:p-5">
                  {/* Rating */}
                  <div className="flex items-center gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${
                          i < Math.floor(wine.rating || 0) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-gray-500 text-[10px] sm:text-sm ml-1 sm:ml-2 font-medium">
                      ({wine.rating?.toFixed(1) || "4.5"})
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={wineUrl}>
                    <h3
                      className={`text-gray-900 font-semibold text-xs sm:text-lg mb-1 sm:mb-2 line-clamp-2 min-h-[2rem] sm:min-h-[3.5rem] transition-colors cursor-pointer ${
                        !isMobile ? "hover:text-[#ab8754]" : ""
                      }`}
                    >
                      {wine.name}
                    </h3>
                  </Link>

                  {/* Details */}
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <p className="text-gray-600 text-[10px] sm:text-sm line-clamp-1">{wine.variety}</p>
                    <span className="text-gray-500 text-[9px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 rounded-full">
                      {wine.vintage}
                    </span>
                  </div>

                  {/* Volume badge */}
                  {wine.volume && (
                    <div className="mb-2 sm:mb-3">
                      <span
                        className="text-[9px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full"
                        style={{ backgroundColor: "#ab875410", color: "#ab8754" }}
                      >
                        {wine.volume === 200 ? "Mini 200ml" : wine.volume === 187 ? "Mini 187ml" : "750ml"}
                      </span>
                    </div>
                  )}

                  {/* Description - skrytý na mobilu */}
                  <p className="hidden sm:block text-gray-500 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">{wine.description}</p>

                  {/* Price & Button */}
                  <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-[9px] sm:text-xs mb-0.5 sm:mb-1">Cena</p>
                        <p className="text-gray-900 font-bold text-base sm:text-2xl">
                          {wine.price} <span className="text-xs sm:text-lg">Kč</span>
                        </p>
                      </div>

                      {/* Mobile: ikona košíku */}
                      <a
                        href={wine.shopUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-90 touch-manipulation"
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

                    {/* Desktop: Button */}
                    <a
                      href={wine.shopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hidden sm:flex w-full px-5 py-3 text-white rounded-full font-semibold text-sm transition-all items-center justify-center gap-2 ${
                        !isMobile ? "hover:shadow-lg hover:scale-105" : ""
                      }`}
                      style={{ backgroundColor: "#ab8754" }}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Koupit na e-shopu
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredWines.length === 0 && (
          <div className="text-center py-12 sm:py-20">
            <Wine className="w-16 h-16 sm:w-20 sm:h-20 text-gray-300 mx-auto mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-light text-gray-600 mb-2">Žádná vína nenalezena</h3>
            <p className="text-sm sm:text-base text-gray-500">Zkuste změnit filtry</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-200 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-800 mb-3 sm:mb-4">
              Máte zájem o <span style={{ color: "#ab8754" }}>degustaci</span>?
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-lg max-w-2xl mx-auto">
              Navštivte naše vinařství v Mikulově a ochutnejte naše oceněná vína přímo u zdroje
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/kontakty/"
                className={`px-6 sm:px-8 py-3 sm:py-4 text-white rounded-full font-medium text-sm sm:text-lg transition-all shadow-lg inline-flex items-center justify-center gap-2 touch-manipulation ${
                  isMobile ? "active:scale-95" : "hover:scale-105"
                }`}
                style={{ backgroundColor: "#ab8754" }}
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                Kontaktovat vinařství
              </Link>
              <a
                href="https://shop.miqueen.cz/vsechna-vina/"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-700 rounded-full font-medium text-sm sm:text-lg border-2 border-gray-300 transition-all inline-flex items-center justify-center gap-2 touch-manipulation ${
                  isMobile ? "active:scale-95" : "hover:border-gray-400 hover:shadow-lg"
                }`}
              >
                Zobrazit e-shop
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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

        * {
          -webkit-tap-highlight-color: transparent;
        }

        .touch-manipulation {
          touch-action: manipulation;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }
      `}</style>
    </section>
  );
};

export default WineGridPage;