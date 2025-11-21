"use client";

import React from "react";
import Image from "next/image";
import { Star, ShoppingCart, Wine } from "lucide-react";
import { WineProduct } from "./wineData";

export interface BadgeStyle {
  bg: string;
  text: string;
}

interface WineCardProps {
  wine: WineProduct;
  isMobile: boolean;
  badge: BadgeStyle | null;
  qualityLabel: string;
  onOpenModal: (wine: WineProduct) => void;
  /** kompaktnější verze karty – kratší obrázek, menší paddingy */
  compact?: boolean;
}

const WineCard: React.FC<WineCardProps> = ({
  wine,
  isMobile,
  badge,
  qualityLabel,
  onOpenModal,
  compact = false,
}) => {
  return (
    <div
      className={`group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 shadow-lg h-full flex flex-col ${
        !isMobile
          ? "hover:border-[#ab8754]/50 hover:shadow-2xl hover:-translate-y-2"
          : "active:scale-95"
      }`}
    >
      {/* Image Container – KOMPAKTNĚJŠÍ POMĚR STRAN */}
      <div
        className={`relative overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-50
        ${compact ? "aspect-[4/3]" : "aspect-square"}`}
      >
        <Image
          src={wine.image}
          alt={wine.name}
          fill
          className={`object-contain cursor-pointer ${
            !isMobile ? "group-hover:scale-105 transition-transform duration-500" : ""
          }`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          onClick={() => onOpenModal(wine)}
          loading="lazy"
          quality={isMobile ? 70 : 85}
        />

        {badge && (
          <div
            className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-white shadow-lg z-10"
            style={{ backgroundColor: badge.bg }}
          >
            {badge.text}
          </div>
        )}

        {/* Quick view overlay - pouze desktop */}
        {!isMobile && (
          <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
            <button
              onClick={() => onOpenModal(wine)}
              className="px-4 sm:px-5 py-2 bg-white text-gray-900 rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl pointer-events-auto"
            >
              <Wine className="w-3 h-3 sm:w-4 sm:h-4" />
              Zobrazit produkt
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className={`flex flex-col flex-grow bg-white ${
          compact ? "p-3 sm:p-4" : "p-3 sm:p-5"
        }`}
      >
        {/* Rating */}
        <div
          className={`flex items-center gap-0.5 sm:gap-1 ${
            compact ? "mb-1.5 sm:mb-2" : "mb-2 sm:mb-3"
          }`}
        >
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 sm:w-4 sm:h-4 ${
                i < Math.floor(wine.rating || 0)
                  ? "text-yellow-400 fill-current"
                  : i < (wine.rating || 0)
                  ? "text-yellow-400 fill-current opacity-50"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-gray-500 text-[10px] sm:text-sm ml-1 sm:ml-2 font-medium">
            ({wine.rating?.toFixed(1) || "4.5"})
          </span>
        </div>

        {/* Title */}
        <h3
          className={`text-gray-900 font-semibold text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-2 min-h-[2rem] sm:min-h-[3rem] cursor-pointer transition-colors ${
            !isMobile ? "hover:text-[#ab8754]" : ""
          }`}
          onClick={() => onOpenModal(wine)}
        >
          {wine.name}
        </h3>

        {/* Details */}
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <p className="text-gray-600 text-[10px] sm:text-xs line-clamp-1">
            {wine.variety}
          </p>
          <span className="text-gray-500 text-[9px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 rounded-full">
            {wine.vintage}
          </span>
        </div>

        {/* Volume badge */}
        {wine.volume && (
          <div className={compact ? "mb-2" : "mb-2 sm:mb-3"}>
            <span
              className="text-[9px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full"
              style={{ backgroundColor: "#ab875410", color: "#ab8754" }}
            >
              {wine.volume === 200
                ? "Mini 200ml"
                : wine.volume === 187
                ? "Mini 187ml"
                : wine.volume === 375
                ? "375ml"
                : wine.volume === 500
                ? "500ml"
                : "750ml"}
            </span>
          </div>
        )}

        {/* Description – jen 2 řádky, skryté na mobilu */}
        <p className="hidden sm:block text-gray-500 text-xs sm:text-sm mb-3 line-clamp-2 min-h-[2.2rem]">
          {wine.description}
        </p>

        {/* Price & Button */}
        <div className="flex flex-col gap-2 sm:gap-3 pt-2 border-t border-gray-100 mt-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-[9px] sm:text-xs mb-0.5 sm:mb-1">
                Cena
              </p>
              <p className="text-gray-900 font-bold text-base sm:text-xl">
                {wine.price} <span className="text-xs sm:text-lg">Kč</span>
              </p>
            </div>

            {/* Mobile: jen kolečko s košíkem */}
            <a
              href={wine.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all active:scale-90 touch-manipulation"
              style={{ backgroundColor: "#ab8754" }}
            >
              <ShoppingCart className="w-4 h-4 text-white" />
            </a>

            {/* Desktop: Quality badge */}
            {qualityLabel && (
              <span className="hidden sm:inline-block text-[10px] sm:text-xs font-medium text-gray-600 px-2 py-1 bg-gray-50 rounded-lg">
                {qualityLabel}
              </span>
            )}
          </div>

          {/* Desktop: Full button */}
          <a
            href={wine.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:flex w-full px-4 py-2.5 text-white rounded-full font-semibold text-xs sm:text-sm transition-all items-center justify-center gap-2 ${
              !isMobile ? "hover:shadow-lg hover:scale-105" : ""
            }`}
            style={{ backgroundColor: "#ab8754" }}
          >
            <ShoppingCart className="w-4 h-4" />
            Koupit na e-shopu
          </a>
        </div>
      </div>

      {/* Clamp styly */}
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
      `}</style>
    </div>
  );
};

export default React.memo(WineCard);
