"use client"
import React, { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";

export interface WineFilters {
  searchQuery: string;
  priceRange: [number, number];
  selectedVintages: string[];
  selectedDryness: string[];
  selectedQuality: string[];
  selectedColors: string[];  // Nový filtr pro barvu vína
}

interface WineFilterBarProps {
  filters: WineFilters;
  onFiltersChange: (filters: WineFilters) => void;
  minPrice: number;
  maxPrice: number;
  availableVintages: number[];
  resultCount: number;
}

const WineFilterBar: React.FC<WineFilterBarProps> = ({
  filters,
  onFiltersChange,
  minPrice,
  maxPrice,
  availableVintages,
  resultCount
}) => {
  const [showFilters, setShowFilters] = useState(false);

  const updateFilters = (updates: Partial<WineFilters>) => {
    onFiltersChange({ ...filters, ...updates });
  };

  const resetFilters = () => {
    onFiltersChange({
      searchQuery: '',
      priceRange: [minPrice, maxPrice],
      selectedVintages: [],
      selectedDryness: [],
      selectedQuality: [],
      selectedColors: []
    });
  };

  const toggleArrayFilter = (value: string, key: keyof Pick<WineFilters, 'selectedVintages' | 'selectedDryness' | 'selectedQuality' | 'selectedColors'>) => {
    const current = filters[key];
    
    // RADIO BUTTON LOGIKA - jen jedna možnost z kategorie
    if (current.includes(value)) {
      // Pokud už je vybraná, odznač ji (prázdné pole)
      updateFilters({ [key]: [] });
      console.log(`Odznačeno: ${value} z ${key}`);
    } else {
      // Pokud není vybraná, vyber JEN tuto (nahraď celé pole)
      updateFilters({ [key]: [value] });
      console.log(`Vybráno: ${value} v ${key}`);
    }
  };

  const hasActiveFilters = 
    filters.searchQuery !== '' ||
    filters.priceRange[0] !== minPrice ||
    filters.priceRange[1] !== maxPrice ||
    filters.selectedVintages.length > 0 ||
    filters.selectedDryness.length > 0 ||
    filters.selectedQuality.length > 0 ||
    filters.selectedColors.length > 0;

  const getDrynessLabel = (dryness: string) => {
    const labels: Record<string, string> = {
      'suche': 'Suché',
      'polosuche': 'Polosuché',
      'polosladke': 'Polosladké',
      'sladke': 'Sladké'
    };
    return labels[dryness] || dryness;
  };

  const getQualityLabel = (quality: string) => {
    const labels: Record<string, string> = {
      'moravske-zemske': 'Moravské zemské',
      'pozdni-sber': 'Pozdní sběr',
      'vyber-z-hroznu': 'Výběr z hroznů'
    };
    return labels[quality] || quality;
  };

  const getColorLabel = (color: string) => {
    const labels: Record<string, string> = {
      'white': 'Bílé víno',
      'rose': 'Růžové víno',
      'claret': 'Klaret',
      'red': 'Červené víno'
    };
    return labels[color] || color;
  };

  return (
    <div className="w-full bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm">
      {/* Hlavní řádek */}
      <div className="flex items-center gap-2 p-3">
        {/* Vyhledávání */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Hledat víno..."
            value={filters.searchQuery}
            onChange={(e) => updateFilters({ searchQuery: e.target.value })}
            className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ab8754] focus:border-[#ab8754] transition-all"
          />
        </div>

        {/* Tlačítka */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
            showFilters || hasActiveFilters
              ? 'bg-[#ab8754] text-white border-[#ab8754]'
              : 'bg-white text-gray-600 border-gray-200 hover:border-[#ab8754] hover:text-[#ab8754]'
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="hidden sm:inline">Filtry</span>
        </button>

        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="p-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:border-red-400 hover:text-red-600 transition-all"
            title="Resetovat filtry"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Počet výsledků */}
        <div className="hidden sm:flex items-center text-sm text-gray-600 ml-2">
          <span className="font-semibold text-[#ab8754]">{resultCount}</span>
          <span className="ml-1">vín</span>
        </div>
      </div>

      {/* Rozbalovací filtry */}
      {showFilters && (
        <div className="border-t border-gray-200 p-4 space-y-4 bg-white/80">
          
          {/* Cena */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-3">
              Cena: {filters.priceRange[0]} - {filters.priceRange[1]} Kč
            </label>
            <div className="flex gap-3 items-center">
              <input
                type="number"
                value={filters.priceRange[0]}
                onChange={(e) => updateFilters({ priceRange: [parseInt(e.target.value) || minPrice, filters.priceRange[1]] })}
                className="w-24 px-3 py-2 text-base font-bold text-gray-900 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ab8754] focus:border-[#ab8754] bg-white shadow-sm"
                min={minPrice}
                max={filters.priceRange[1]}
              />
              <div className="flex-1 flex flex-col gap-1 px-2">
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={filters.priceRange[0]}
                  onChange={(e) => updateFilters({ priceRange: [parseInt(e.target.value), filters.priceRange[1]] })}
                  className="w-full accent-[#ab8754] slider-custom"
                />
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={filters.priceRange[1]}
                  onChange={(e) => updateFilters({ priceRange: [filters.priceRange[0], parseInt(e.target.value)] })}
                  className="w-full accent-[#ab8754] slider-custom"
                />
              </div>
              <input
                type="number"
                value={filters.priceRange[1]}
                onChange={(e) => updateFilters({ priceRange: [filters.priceRange[0], parseInt(e.target.value) || maxPrice] })}
                className="w-24 px-3 py-2 text-base font-bold text-gray-900 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ab8754] focus:border-[#ab8754] bg-white shadow-sm"
                min={filters.priceRange[0]}
                max={maxPrice}
              />
            </div>
          </div>

          {/* Barva vína - NOVÁ SEKCE */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Barva vína
            </label>
            <div className="flex flex-wrap gap-1.5">
              {['white', 'rose', 'claret', 'red'].map(color => (
                <button
                  key={color}
                  onClick={() => toggleArrayFilter(color, 'selectedColors')}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md border-2 transition-all ${
                    filters.selectedColors.includes(color)
                      ? 'bg-[#ab8754] text-white border-[#ab8754] shadow-md'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-[#ab8754]'
                  }`}
                >
                  {getColorLabel(color)}
                </button>
              ))}
            </div>
          </div>

          {/* Ročník */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Ročník
            </label>
            <div className="flex flex-wrap gap-1.5">
              {availableVintages.map(vintage => (
                <button
                  key={vintage}
                  onClick={() => toggleArrayFilter(vintage.toString(), 'selectedVintages')}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md border-2 transition-all ${
                    filters.selectedVintages.includes(vintage.toString())
                      ? 'bg-[#ab8754] text-white border-[#ab8754] shadow-md'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-[#ab8754]'
                  }`}
                >
                  {vintage}
                </button>
              ))}
            </div>
          </div>

          {/* Sladkost */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Sladkost
            </label>
            <div className="flex flex-wrap gap-1.5">
              {['suche', 'polosuche', 'polosladke', 'sladke'].map(dryness => (
                <button
                  key={dryness}
                  onClick={() => toggleArrayFilter(dryness, 'selectedDryness')}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md border-2 transition-all ${
                    filters.selectedDryness.includes(dryness)
                      ? 'bg-[#ab8754] text-white border-[#ab8754] shadow-md'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-[#ab8754]'
                  }`}
                >
                  {getDrynessLabel(dryness)}
                </button>
              ))}
            </div>
          </div>

          {/* Kategorie vín - UPRAVENO, pouze 3 možnosti */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Kategorie vín
            </label>
            <div className="flex flex-wrap gap-1.5">
              {['moravske-zemske', 'pozdni-sber', 'vyber-z-hroznu'].map(quality => (
                <button
                  key={quality}
                  onClick={() => toggleArrayFilter(quality, 'selectedQuality')}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md border-2 transition-all ${
                    filters.selectedQuality.includes(quality)
                      ? 'bg-[#ab8754] text-white border-[#ab8754] shadow-md'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-[#ab8754]'
                  }`}
                >
                  {getQualityLabel(quality)}
                </button>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Mobilní počet výsledků */}
      <div className="sm:hidden border-t border-gray-200 px-3 py-2 text-center">
        <span className="text-xs text-gray-600">
          Nalezeno <span className="font-semibold text-[#ab8754]">{resultCount}</span> vín
        </span>
      </div>

      <style jsx>{`
        input[type="range"].slider-custom {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          cursor: pointer;
          height: 6px;
        }

        input[type="range"].slider-custom::-webkit-slider-track {
          height: 6px;
          border-radius: 3px;
          background: #9ca3af;
          border: 1px solid #6b7280;
        }

        input[type="range"].slider-custom::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ab8754;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          margin-top: -7px;
          cursor: grab;
        }

        input[type="range"].slider-custom::-webkit-slider-thumb:active {
          cursor: grabbing;
          transform: scale(1.1);
        }

        input[type="range"].slider-custom::-moz-range-track {
          height: 6px;
          border-radius: 3px;
          background: #9ca3af;
          border: 1px solid #6b7280;
        }

        input[type="range"].slider-custom::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ab8754;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          cursor: grab;
        }

        input[type="range"].slider-custom::-moz-range-thumb:active {
          cursor: grabbing;
          transform: scale(1.1);
        }

        /* Starý fallback CSS - odstraněn */
      `}</style>
    </div>
  );
};

export default WineFilterBar;