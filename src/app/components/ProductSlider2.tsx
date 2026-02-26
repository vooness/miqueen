"use client";

import React, {
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";

import { wines, WineProduct, getWineUrl } from "./wineData";
import WineCard from "./WineCard";

const accentColor = "#ab8754";
const GAP = 24; // px – používáme níže ve style

const PopularWinesSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  // Nejoblíbenější vína – TOP 6 podle ratingu
  const popularWines: WineProduct[] = useMemo(() => {
    const rated = wines.filter((w) => typeof w.rating === "number");
    const sorted = [...rated].sort(
      (a, b) => (b.rating ?? 0) - (a.rating ?? 0)
    ).reverse();
    return sorted.slice(0, 6);
  }, []);

  // helper: badge styl
  const getBadgeStyle = useCallback(
    (badge?: WineProduct["badge"]) => {
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
    },
    []
  );

  // helper: quality label
  const getQualityLabel = useCallback(
    (quality?: WineProduct["quality"]) => {
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
    },
    []
  );

  // responsivní počet karet + isMobile
  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;
      const mobile = w < 768;

      setIsMobile(mobile);

      if (w < 640) {
        setItemsPerView(2); // mobil – 2 karty
      } else if (w < 1024) {
        setItemsPerView(3);
      } else if (w < 1280) {
        setItemsPerView(4);
      } else {
        setItemsPerView(5); // velký desktop – 5 karet
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout, { passive: true });
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const maxIndex = Math.max(0, popularWines.length - itemsPerView);

  const handlePrev = useCallback(
    () => setCurrentIndex((prev) => Math.max(prev - 1, 0)),
    []
  );

  const handleNext = useCallback(
    () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex)),
    [maxIndex]
  );

  // kliknutí na kartu → URL z wineData (bez localhostu)
  const handleOpenModal = useCallback(
    (wine: WineProduct) => {
      const url = getWineUrl(wine);
      router.push(url);
    },
    [router]
  );

  if (!popularWines.length) return null;

  return (
    <section className="bg-[#fefbea] py-12 sm:py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* HLAVIČKA */}
        <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-gray-500">
              MiQueen • výběr zákazníků
            </p>

            <div className="flex items-center gap-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900">
                Nejoblíbenější vína
              </h2>
              <Sparkles className="w-6 h-6" style={{ color: accentColor }} />
            </div>

            <p className="text-sm sm:text-base text-gray-600 max-w-xl">
              Vína, která si zákazníci oblíbili nejvíc – podle hodnocení
              a prodejů. Ideální start, pokud MiQueen teprve objevujete.
            </p>
          </div>
        </div>

        {/* SLIDER */}
        <div className="relative">
          {/* ŠIPKY – jen když je co posouvat */}
          {popularWines.length > itemsPerView && (
            <>
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg transition-all
                ${
                  currentIndex === 0
                    ? "opacity-30 cursor-not-allowed bg-gray-300"
                    : "bg-[#ab8754] text-white hover:scale-110 active:scale-95"
                }`}
                aria-label="Předchozí vína"
              >
                ‹
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className={`absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg transition-all
                ${
                  currentIndex >= maxIndex
                    ? "opacity-30 cursor-not-allowed bg-gray-300"
                    : "bg-[#ab8754] text-white hover:scale-110 active:scale-95"
                }`}
                aria-label="Další vína"
              >
                ›
              </button>
            </>
          )}

          {/* TRACK */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(calc(-${currentIndex} * (${
                  100 / itemsPerView
                }% + ${GAP / itemsPerView}px)))`,
              }}
            >
              {popularWines.map((wine) => (
                <div
                  key={wine.id}
                  className="flex-shrink-0"
                  style={{
                    width: `calc((100% - ${
                      GAP * (itemsPerView - 1)
                    }px) / ${itemsPerView})`,
                  }}
                >
                  <WineCard
                    wine={wine}
                    isMobile={isMobile}
                    badge={getBadgeStyle(wine.badge)}
                    qualityLabel={getQualityLabel(wine.quality)}
                    onOpenModal={handleOpenModal}
                    compact // 🔥 stejný kompaktní mód jako u dárkových setů
                  />
                </div>
              ))}
            </div>
          </div>

          {/* TEČKY POD SLIDEREM */}
          {popularWines.length > itemsPerView && (
            <div className="flex justify-center mt-6 gap-1.5 sm:gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i
                      ? "w-6 sm:w-8 opacity-100"
                      : "w-1.5 sm:w-2 opacity-40"
                  }`}
                  style={{ backgroundColor: accentColor }}
                  aria-label={`Přejít na slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(PopularWinesSlider);
