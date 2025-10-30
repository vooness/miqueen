"use client"
import React, { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";

export interface WineFilters {
  searchQuery: string;
  priceRange: [number, number];
  selectedVintages: string[];
  selectedDryness: string[];
  selectedQuality: string[];
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
      selectedQuality: []
    });
  };

  const toggleArrayFilter = (value: string, key: keyof Pick<WineFilters, 'selectedVintages' | 'selectedDryness' | 'selectedQuality'>) => {
    const current = filters[key];
    const updated = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];
    updateFilters({ [key]: updated });
  };

  const hasActiveFilters = 
    filters.searchQuery !== '' ||
    filters.priceRange[0] !== minPrice ||
    filters.priceRange[1] !== maxPrice ||
    filters.selectedVintages.length > 0 ||
    filters.selectedDryness.length > 0 ||
    filters.selectedQuality.length > 0;

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
      'kabinet': 'Kabinet',
      'pozdni-sber': 'Pozdní sběr',
      'vyber-z-hroznu': 'Výběr z hroznů',
      'vyber-z-bobuli': 'Výběr z bobulí',
      'slama': 'Slámové',
      'ledove': 'Ledové'
    };
    return labels[quality] || quality;
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
        <div className="border-t border-gray-200 p-4 space-y-4 bg-white/40">
          
          {/* Cena */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              Cena: {filters.priceRange[0]} - {filters.priceRange[1]} Kč
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                value={filters.priceRange[0]}
                onChange={(e) => updateFilters({ priceRange: [parseInt(e.target.value) || minPrice, filters.priceRange[1]] })}
                className="w-20 px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-[#ab8754]"
                min={minPrice}
                max={filters.priceRange[1]}
              />
              <div className="flex-1 flex gap-2">
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={filters.priceRange[0]}
                  onChange={(e) => updateFilters({ priceRange: [parseInt(e.target.value), filters.priceRange[1]] })}
                  className="flex-1 accent-[#ab8754] h-1"
                />
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={filters.priceRange[1]}
                  onChange={(e) => updateFilters({ priceRange: [filters.priceRange[0], parseInt(e.target.value)] })}
                  className="flex-1 accent-[#ab8754] h-1"
                />
              </div>
              <input
                type="number"
                value={filters.priceRange[1]}
                onChange={(e) => updateFilters({ priceRange: [filters.priceRange[0], parseInt(e.target.value) || maxPrice] })}
                className="w-20 px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-[#ab8754]"
                min={filters.priceRange[0]}
                max={maxPrice}
              />
            </div>
          </div>

          {/* Ročník */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">Ročník</label>
            <div className="flex flex-wrap gap-1.5">
              {availableVintages.map(vintage => (
                <button
                  key={vintage}
                  onClick={() => toggleArrayFilter(vintage.toString(), 'selectedVintages')}
                  className={`px-3 py-1 text-xs rounded-md border transition-all ${
                    filters.selectedVintages.includes(vintage.toString())
                      ? 'bg-[#ab8754] text-white border-[#ab8754]'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#ab8754]'
                  }`}
                >
                  {vintage}
                </button>
              ))}
            </div>
          </div>

          {/* Sladkost */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">Sladkost</label>
            <div className="flex flex-wrap gap-1.5">
              {['suche', 'polosuche', 'polosladke', 'sladke'].map(dryness => (
                <button
                  key={dryness}
                  onClick={() => toggleArrayFilter(dryness, 'selectedDryness')}
                  className={`px-3 py-1 text-xs rounded-md border transition-all ${
                    filters.selectedDryness.includes(dryness)
                      ? 'bg-[#ab8754] text-white border-[#ab8754]'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#ab8754]'
                  }`}
                >
                  {getDrynessLabel(dryness)}
                </button>
              ))}
            </div>
          </div>

          {/* Kvalita */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">Kvalita</label>
            <div className="flex flex-wrap gap-1.5">
              {['kabinet', 'pozdni-sber', 'vyber-z-hroznu', 'vyber-z-bobuli', 'slama', 'ledove'].map(quality => (
                <button
                  key={quality}
                  onClick={() => toggleArrayFilter(quality, 'selectedQuality')}
                  className={`px-2.5 py-1 text-xs rounded-md border transition-all ${
                    filters.selectedQuality.includes(quality)
                      ? 'bg-[#ab8754] text-white border-[#ab8754]'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#ab8754]'
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
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          cursor: pointer;
        }

        input[type="range"]::-webkit-slider-track {
          height: 4px;
          border-radius: 2px;
          background: #e5e7eb;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ab8754;
          border: 2px solid white;
          box-shadow: 0 1px 3px rgba(0,0,0,0.2);
          margin-top: -6px;
        }

        input[type="range"]::-moz-range-track {
          height: 4px;
          border-radius: 2px;
          background: #e5e7eb;
        }

        input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ab8754;
          border: 2px solid white;
          box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default WineFilterBar;