"use client";

import React, {
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { useRouter } from "next/navigation";
import { Gift } from "lucide-react";

import { wines, WineProduct, getWineUrl } from "./wineData";
import WineCard from "./WineCard";

const accentColor = "#ab8754";
const GAP = 24; // px – používáme níže ve style

const ProductSlider1: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  // jen dárkové sety
  const giftSets: WineProduct[] = useMemo(
    () => wines.filter((w) => w.category === "set"),
    []
  );

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
        // mobil – dva produkty vedle sebe, ale stále slider
        setItemsPerView(2);
      } else if (w < 1024) {
        setItemsPerView(2);
      } else if (w < 1440) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout, { passive: true });
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const maxIndex = Math.max(0, giftSets.length - itemsPerView);

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
      const url = getWineUrl(wine); // např. /vina/darkove-sety/set-4x-mini-klasika
      router.push(url);
    },
    [router]
  );

  if (!giftSets.length) return null;

  return (
    <section className="bg-[#fefbea] py-12 sm:py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* HLAVIČKA NAD SLIDEREM */}
        <div className="mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-gray-500 mb-3">
            MiQueen • dárkové kolekce
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3 sm:space-y-4 max-w-xl">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900">
                  Dárkové sety
                </h2>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Gift
                  className="w-8 h-8 p-1.5 rounded-full"
                  style={{ color: accentColor, backgroundColor: "#ab875410" }}
                />
                <div className="text-xs sm:text-sm text-gray-600">
                  <div>Ideální pro firemní dárky, výročí a svátky.</div>
                  <div>Prémiové balení připravené rovnou k předání.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDER – JEDEN ŘÁDEK KARET (i na mobilu, jen 2 vedle sebe) */}
        <div className="relative">
          {/* ŠIPKY */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg transition-all
              ${
                currentIndex === 0
                  ? "opacity-30 cursor-not-allowed bg-gray-300"
                  : "bg-[#ab8754] text-white hover:scale-110 active:scale-95"
              }`}
            aria-label="Předchozí set"
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
            aria-label="Další set"
          >
            ›
          </button>

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
              {giftSets.map((wine) => (
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
                    compact
                  />
                </div>
              ))}
            </div>
          </div>

          {/* TEČKY POD SLIDEREM */}
          {giftSets.length > itemsPerView && (
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

export default React.memo(ProductSlider1);
