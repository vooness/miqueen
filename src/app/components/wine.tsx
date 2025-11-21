"use client";

import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import Image from "next/image";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Droplets,
  Cherry,
  Grape,
  Wine,
  Package,
  ShoppingCart,
  X,
  Thermometer,
  MapPin,
  ChefHat,
  User,
  Gift,
} from "lucide-react";

import {
  wines,
  getWinesByCategorySortedBySweetness,
  getWineCountByCategory,
  WineProduct,
} from "./wineData";

import WineFilterBar, { WineFilters } from "@/app/components/WineFilterBar";
import WineCard, { BadgeStyle } from "./WineCard";

const WineCollectionSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // místo currentIndex používáme page
  const [page, setPage] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [gap, setGap] = useState(24);
  const [selectedWine, setSelectedWine] = useState<WineProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // price range
  const priceRange = useMemo(
    () => ({
      min: Math.min(...wines.map((w) => w.price)),
      max: Math.max(...wines.map((w) => w.price)),
    }),
    []
  );

  // vintages
  const availableVintages = useMemo(
    () =>
      Array.from(
        new Set(wines.map((w) => w.vintage).filter(Boolean))
      ).sort((a, b) => b - a),
    []
  );

  const [filters, setFilters] = useState<WineFilters>({
    searchQuery: "",
    priceRange: [priceRange.min, priceRange.max],
    selectedVintages: [],
    selectedDryness: [],
    selectedQuality: [],
    selectedColors: [],
  });

  // detect mobile + itemsPerView
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

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

    checkMobile();

    let resizeTimer: number;
    const debouncedResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(checkMobile, 150) as unknown as number;
    };

    window.addEventListener("resize", debouncedResize, { passive: true });

    return () => {
      window.removeEventListener("resize", debouncedResize);
      window.clearTimeout(resizeTimer);
    };
  }, []);

  // base filtered wines by category
  const filteredWines = useMemo(() => {
    if (selectedCategory === "all") {
      return wines;
    }

    const baseWines =
      selectedCategory === "new"
        ? wines
            .filter((w) => w.badge === "new")
            .sort((a, b) => {
              const aHasSugar =
                a.residualSugar !== null && a.residualSugar !== undefined;
              const bHasSugar =
                b.residualSugar !== null && b.residualSugar !== undefined;
              if (!aHasSugar && !bHasSugar) return 0;
              if (!aHasSugar) return 1;
              if (!bHasSugar) return -1;
              return (a.residualSugar ?? 0) - (b.residualSugar ?? 0);
            })
        : getWinesByCategorySortedBySweetness(selectedCategory);

    return baseWines;
  }, [selectedCategory]);

  // apply filters
  const finalFilteredWines = useMemo(() => {
    let result = [...filteredWines];

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(
        (wine) =>
          wine.name.toLowerCase().includes(query) ||
          wine.variety.toLowerCase().includes(query)
      );
    }

    result = result.filter(
      (w) => w.price >= filters.priceRange[0] && w.price <= filters.priceRange[1]
    );

    if (filters.selectedVintages.length > 0) {
      result = result.filter((w) =>
        filters.selectedVintages.includes(w.vintage.toString())
      );
    }

    if (filters.selectedDryness.length > 0) {
      result = result.filter(
        (w) => w.dryness && filters.selectedDryness.includes(w.dryness)
      );
    }

    if (filters.selectedQuality.length > 0) {
      result = result.filter(
        (w) => w.quality && filters.selectedQuality.includes(w.quality)
      );
    }

    if (filters.selectedColors.length > 0) {
      result = result.filter(
        (w) => w.category && filters.selectedColors.includes(w.category)
      );
    }

    return result;
  }, [filteredWines, filters]);

  // paging
  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(finalFilteredWines.length / itemsPerView)),
    [finalFilteredWines.length, itemsPerView]
  );

  const pagedWines = useMemo(
    () =>
      finalFilteredWines.slice(
        page * itemsPerView,
        page * itemsPerView + itemsPerView
      ),
    [finalFilteredWines, page, itemsPerView]
  );

  // filters change => page reset
  useEffect(() => {
    setPage(0);
  }, [selectedCategory, filters]);

  const handleFiltersChange = useCallback((newFilters: WineFilters) => {
    setFilters(newFilters);
    setPage(0);
  }, []);

  const nextPage = useCallback(() => {
    setPage((p) => Math.min(p + 1, totalPages - 1));
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setPage((p) => Math.max(p - 1, 0));
  }, []);

  // swipe
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && page < totalPages - 1) {
      nextPage();
    }
    if (isRightSwipe && page > 0) {
      prevPage();
    }

    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, page, totalPages, nextPage, prevPage]);

  // helpers
  const getBadgeStyle = useCallback((badge?: string): BadgeStyle | null => {
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

  const getDrynessLabel = useCallback((dryness?: string) => {
    switch (dryness) {
      case "suche":
        return "Suché";
      case "polosuche":
        return "Polosuché";
      case "polosladke":
        return "Polosladké";
      case "sladke":
        return "Sladké";
      default:
        return "N/A";
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
      case "slama":
        return "Slámové víno";
      case "ledove":
        return "Ledové víno";
      default:
        return "Standard";
    }
  }, []);

  const getCategoryCount = useCallback((category: string): number => {
    if (category === "all") return wines.length;
    return getWineCountByCategory(category);
  }, []);

  const openModal = useCallback((wine: WineProduct) => {
    setSelectedWine(wine);
    setIsModalOpen(true);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedWine(null);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "unset";
    }
  }, []);

  const categories = useMemo(
    () => [
      { id: "all", icon: Sparkles, label: "Všechna vína", color: "#ab8754" },
      {
        id: "new",
        icon: Sparkles,
        label: "Novinky",
        color: "#10B981",
        count: wines.filter((w) => w.badge === "new").length,
      },
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
    <>
      <section
        className="relative min-h-screen py-12 sm:py-20 lg:py-28 overflow-hidden bg-[#fefbea]"
        suppressHydrationWarning={true}
      >
        {/* Animated background – jen desktop */}
        {!isMobile && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="hidden md:block absolute top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse opacity-60"
              style={{
                background: `radial-gradient(circle, #ab875415, transparent)`,
              }}
            />
            <div
              className="hidden md:block absolute bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse opacity-60"
              style={{
                background: `radial-gradient(circle, #ab875410, transparent)`,
                animationDelay: "2s",
              }}
            />
          </div>
        )}

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 px-4">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-4">
                <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                <Grape
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  style={{ color: "#ab8754" }}
                />
                <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent" />
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-light text-gray-800">
                Naše{" "}
                <span className="font-normal" style={{ color: "#ab8754" }}>
                  kolekce
                </span>
              </h2>
              <p className="text-base sm:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                Vína seřazená od nejsušších po nejsladší
              </p>

              {/* Info box kde koupit vína */}
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
                      <MapPin
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        style={{ color: "#ab8754" }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-2">
                        Kde koupíte naše vína?
                      </h3>
                      <p className="text-xs sm:text-base text-gray-700 leading-relaxed mb-3">
                        Naše vína můžete zakoupit online na e-shopu nebo v síti
                        prodejen po celé České republice.
                      </p>
                      <a
                        href="/mapa-vin"
                        className="inline-flex items-center gap-2 text-xs sm:text-base font-semibold hover:underline transition-colors touch-manipulation"
                        style={{ color: "#ab8754" }}
                      >
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        Zobrazit mapu prodejen
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kategorie */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                const count =
                  category.count !== undefined
                    ? category.count
                    : getCategoryCount(category.id);
                const isSelected = selectedCategory === category.id;

                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`
                      flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full border transition-all duration-300 font-medium text-xs sm:text-base touch-manipulation
                      ${
                        isSelected
                          ? "text-white border-transparent shadow-lg"
                          : "bg-white/90 text-gray-700 border-gray-200 active:scale-95"
                      }
                      ${
                        !isMobile && !isSelected
                          ? "hover:bg-white hover:border-gray-300 hover:shadow-md"
                          : ""
                      }
                    `}
                    style={isSelected ? { backgroundColor: category.color } : {}}
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="whitespace-nowrap">{category.label}</span>
                    <span
                      className={`${
                        isSelected ? "text-white/80" : "text-gray-500"
                      } text-[10px] sm:text-sm`}
                    >
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filtr */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
            <WineFilterBar
              filters={filters}
              onFiltersChange={handleFiltersChange}
              minPrice={priceRange.min}
              maxPrice={priceRange.max}
              availableVintages={availableVintages}
              resultCount={finalFilteredWines.length}
            />
          </div>

          {/* Products "slider" – teď stránkování */}
          <div className="relative">
            <div className="flex items-center justify-between mb-4 sm:mb-6 px-4">
              <h3 className="text-lg sm:text-2xl font-light text-gray-800">
                {selectedCategory === "all"
                  ? "Všechna vína"
                  : selectedCategory === "new"
                  ? "Novinky"
                  : selectedCategory === "white"
                  ? "Bílá vína"
                  : selectedCategory === "red"
                  ? "Červená vína"
                  : selectedCategory === "rose"
                  ? "Růžová vína"
                  : selectedCategory === "sparkling"
                  ? "Perlivá vína"
                  : selectedCategory === "set"
                  ? "Dárkové sety"
                  : "Speciální edice"}
              </h3>

              <span className="text-gray-600 text-xs sm:text-sm font-medium">
                {finalFilteredWines.length} produktů
              </span>
            </div>

            <div className="relative">
              {/* arrows */}
              <button
                onClick={prevPage}
                disabled={page === 0}
                className={`
                  absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-10
                  w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all shadow-lg touch-manipulation
                  ${
                    page === 0
                      ? "opacity-30 cursor-not-allowed"
                      : "active:scale-90"
                  }
                  ${
                    !isMobile && page !== 0 ? "hover:scale-110" : ""
                  }
                `}
                style={{
                  backgroundColor: page === 0 ? "#d1d5db" : "#ab8754",
                }}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>

              <button
                onClick={nextPage}
                disabled={page >= totalPages - 1}
                className={`
                  absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-10
                  w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all shadow-lg touch-manipulation
                  ${
                    page >= totalPages - 1
                      ? "opacity-30 cursor-not-allowed"
                      : "active:scale-90"
                  }
                  ${
                    !isMobile && page < totalPages - 1 ? "hover:scale-110" : ""
                  }
                `}
                style={{
                  backgroundColor:
                    page >= totalPages - 1 ? "#d1d5db" : "#ab8754",
                }}
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>

              <div
                className="overflow-hidden px-0"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="flex transition-opacity duration-200"
                  style={{ gap: `${gap}px` }}
                  key={page}
                >
                  {pagedWines.map((wine) => {
                    const badge = getBadgeStyle(wine.badge);
                    const qualityLabel = getQualityLabel(wine.quality);

                    return (
                      <div
                        key={wine.id}
                        className="flex-shrink-0 transition-all duration-500"
                        style={{
                          width: `calc((100% - ${
                            gap * (itemsPerView - 1)
                          }px) / ${itemsPerView})`,
                        }}
                      >
                        <WineCard
                          wine={wine}
                          isMobile={isMobile}
                          badge={badge}
                          qualityLabel={qualityLabel}
                          onOpenModal={openModal}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* dots */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-4 sm:mt-8 gap-1 sm:gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`
                      h-1.5 sm:h-2 rounded-full transition-all duration-300 touch-manipulation
                      ${
                        page === i
                          ? "w-6 sm:w-8 opacity-100"
                          : "w-1.5 sm:w-2 opacity-40"
                      }
                      ${
                        !isMobile && page !== i ? "hover:opacity-70" : ""
                      }
                    `}
                    style={{ backgroundColor: "#ab8754" }}
                    aria-label={`Přejít na stránku ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedWine && (
        <div className="fixed inset-0 z-50 overflow-y-auto" onClick={closeModal}>
          <div className="min-h-screen px-4 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" />

            <div
              className="relative bg-white rounded-2xl sm:rounded-3xl max-w-5xl w-full mx-auto shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg touch-manipulation"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                {/* Image section */}
                <div className="relative bg-gradient-to-br from-gray-50 to-white p-6 sm:p-12 flex items-center justify-center border-r border-gray-100">
                  {selectedWine.badge && (
                    <div
                      className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white text-xs sm:text-sm font-semibold shadow-lg z-10"
                      style={{
                        backgroundColor:
                          getBadgeStyle(selectedWine.badge)?.bg || "#ab8754",
                      }}
                    >
                      {getBadgeStyle(selectedWine.badge)?.text}
                    </div>
                  )}

                  <div className="relative w-full max-w-sm aspect-[1/2]">
                    <Image
                      src={selectedWine.image}
                      alt={selectedWine.name}
                      fill
                      className="object-contain"
                      priority
                      quality={isMobile ? 75 : 90}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </div>

                {/* Content section */}
                <div className="p-4 sm:p-8 lg:p-12 overflow-y-scroll max-h-[80vh] custom-scrollbar">
                  <div className="mb-4 sm:mb-6">
                    <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {selectedWine.name}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">
                      {selectedWine.grapeVariety}
                    </p>

                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex gap-0.5 sm:gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 sm:w-5 sm:h-5 ${
                              i < Math.floor(selectedWine.rating || 0)
                                ? "text-yellow-400 fill-current"
                                : i < (selectedWine.rating || 0)
                                ? "text-yellow-400 fill-current opacity-50"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 font-medium text-sm sm:text-base">
                        ({selectedWine.rating?.toFixed(1) || "4.5"})
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#ab875410] to-transparent p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
                    <p className="text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">
                      Cena
                    </p>
                    <p className="text-2xl sm:text-4xl font-bold text-gray-900">
                      {selectedWine.price}{" "}
                      <span className="text-lg sm:text-2xl">Kč</span>
                    </p>
                    {selectedWine.volume && (
                      <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
                        Objem: {selectedWine.volume}ml
                      </p>
                    )}
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                      Popis
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {selectedWine.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                      <p className="text-gray-500 text-xs sm:text-sm mb-1">
                        Ročník
                      </p>
                      <p className="text-gray-900 font-semibold text-sm sm:text-base">
                        {selectedWine.vintage}
                      </p>
                    </div>

                    <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                      <p className="text-gray-500 text-xs sm:text-sm mb-1">
                        Alkohol
                      </p>
                      <p className="text-gray-900 font-semibold text-sm sm:text-base">
                        {selectedWine.alcohol || "N/A"}%
                      </p>
                    </div>

                    <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                      <p className="text-gray-500 text-xs sm:text-sm mb-1">
                        Kvalita
                      </p>
                      <p className="text-gray-900 font-semibold text-sm sm:text-base">
                        {getQualityLabel(selectedWine.quality)}
                      </p>
                    </div>

                    <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                      <p className="text-gray-500 text-xs sm:text-sm mb-1">
                        Sladkost
                      </p>
                      <p className="text-gray-900 font-semibold text-sm sm:text-base">
                        {getDrynessLabel(selectedWine.dryness)}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {selectedWine.region && (
                      <div className="flex items-start gap-2 sm:gap-3">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#ab8754] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-500 text-xs sm:text-sm">
                            Region
                          </p>
                          <p className="text-gray-900 text-sm sm:text-base">
                            {selectedWine.region}
                          </p>
                        </div>
                      </div>
                    )}

                    {selectedWine.servingTemp && (
                      <div className="flex items-start gap-2 sm:gap-3">
                        <Thermometer className="w-4 h-4 sm:w-5 sm:h-5 text-[#ab8754] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-500 text-xs sm:text-sm">
                            Teplota servírování
                          </p>
                          <p className="text-gray-900 text-sm sm:text-base">
                            {selectedWine.servingTemp}
                          </p>
                        </div>
                      </div>
                    )}

                    {selectedWine.foodPairing &&
                      selectedWine.foodPairing.length > 0 && (
                        <div className="flex items-start gap-2 sm:gap-3">
                          <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 text-[#ab8754] mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-gray-500 text-xs sm:text-sm mb-2">
                              Doporučujeme k
                            </p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {selectedWine.foodPairing.map(
                                (food, index) => (
                                  <span
                                    key={index}
                                    className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#ab875410] text-[#ab8754] rounded-full text-xs sm:text-sm font-medium"
                                  >
                                    {food}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                    {selectedWine.winemaker && (
                      <div className="flex items-start gap-2 sm:gap-3">
                        <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#ab8754] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-500 text-xs sm:text-sm">
                            Vinařství
                          </p>
                          <p className="text-gray-900 text-sm sm:text-base">
                            {selectedWine.winemaker}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {selectedWine.notes && (
                    <div className="bg-[#ab875410] p-3 sm:p-4 rounded-xl mb-6 sm:mb-8">
                      <p className="text-[#ab8754] font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                        Poznámka vinaře
                      </p>
                      <p className="text-gray-700 text-xs sm:text-sm">
                        {selectedWine.notes}
                      </p>
                    </div>
                  )}

                  <div className="sticky bottom-0 left-0 right-0 bg-white pt-3 sm:pt-4 pb-safe">
                    <a
                      href={selectedWine.shopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full px-5 sm:px-6 py-3 sm:py-4 bg-[#ab8754] text-white rounded-full font-semibold text-sm sm:text-lg transition-all flex items-center justify-center gap-2 touch-optimized ${
                        !isMobile ? "hover:shadow-lg hover:scale-105" : "active:scale-95"
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
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
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
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

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #ab8754 #f1f1f1;
        }

        .touch-optimized {
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        @media (max-width: 767px) {
          .animate-pulse {
            animation: none;
          }
        }
      `}</style>
    </>
  );
};

export default React.memo(WineCollectionSection);
