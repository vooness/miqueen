"use client";
import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Award, Crown, Zap, TrendingUp, Wine } from "lucide-react";

interface Wine {
  id: number;
  name: string;
  variety: string;
  vintage: number;
  rating: number;
  reviews: number;
  badge: 'bestseller' | 'award' | 'limited' | 'trending';
  volume: number;
  description: string;
}

const FeaturedWinesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredWines: Wine[] = [
    {
      id: 1,
      name: "Mikulovská Královna",
      variety: "Riesling",
      vintage: 2023,
      rating: 4.8,
      reviews: 247,
      badge: 'bestseller',
      volume: 750,
      description: "Výjimečné bílé víno s minerální strukturou a elegantním doznívání"
    },
    {
      id: 2,
      name: "Královský Vintage",
      variety: "Pinot Noir",
      vintage: 2021,
      rating: 4.9,
      reviews: 189,
      badge: 'award',
      volume: 750,
      description: "Oceněné červené víno s prestižní medailí a sametovými taniny"
    },
    {
      id: 3,
      name: "Sunset Reserve",
      variety: "Rosé Selection",
      vintage: 2023,
      rating: 4.7,
      reviews: 156,
      badge: 'limited',
      volume: 750,
      description: "Limitovaná edice našeho prémiového rosé z nejlepších vinic"
    },
    {
      id: 4,
      name: "Celebration Frizzante",
      variety: "Chardonnay",
      vintage: 2022,
      rating: 4.7,
      reviews: 203,
      badge: 'trending',
      volume: 750,
      description: "Elegantní šumivé víno s přírodním perlením a jemnou chutí"
    },
    {
      id: 5,
      name: "Zlaté Rulandské",
      variety: "Rulandské bílé",
      vintage: 2022,
      rating: 4.8,
      reviews: 134,
      badge: 'award',
      volume: 750,
      description: "Prémiové víno s bohatou chutí a komplexní strukturou"
    },
    {
      id: 6,
      name: "Mini Kolekce Set",
      variety: "Degustační set",
      vintage: 2023,
      rating: 4.9,
      reviews: 421,
      badge: 'bestseller',
      volume: 1875,
      description: "Degustační set našich nejlepších vín v elegantním balení"
    },
    {
      id: 7,
      name: "Perla Moravy",
      variety: "Sauvignon Blanc",
      vintage: 2023,
      rating: 4.6,
      reviews: 98,
      badge: 'trending',
      volume: 750,
      description: "Svěží víno s intenzivní ovocnou vůní a živou kyselinkou"
    },
    {
      id: 8,
      name: "Barrique Selection",
      variety: "Cabernet Sauvignon",
      vintage: 2019,
      rating: 4.8,
      reviews: 167,
      badge: 'award',
      volume: 750,
      description: "Prémiové víno zrálé v francouzských dubových sudech"
    }
  ];

  // Duplikace pro nekonečný loop
  const infiniteWines = [...featuredWines, ...featuredWines, ...featuredWines];
  const totalWines = featuredWines.length;

  // Auto-play každé 3 sekundy
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => prev + 1);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  // Reset pozice pro nekonečný loop
  useEffect(() => {
    if (currentIndex >= totalWines * 2) {
      setTimeout(() => {
        setCurrentIndex(totalWines);
      }, 700);
    } else if (currentIndex < totalWines) {
      setTimeout(() => {
        setCurrentIndex(totalWines);
      }, 700);
    }
  }, [currentIndex, totalWines]);

  const getBadgeConfig = (badge: Wine['badge']) => {
    switch (badge) {
      case 'bestseller':
        return { icon: Crown, text: 'Bestseller' };
      case 'award':
        return { icon: Award, text: 'Oceněné' };
      case 'limited':
        return { icon: Zap, text: 'Limitované' };
      case 'trending':
        return { icon: TrendingUp, text: 'Trending' };
    }
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => prev - 1);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(totalWines + index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 overflow-hidden" style={{ backgroundColor: "#1C1C1E" }}>
      <div className="w-full">
        
        {/* Elegantní header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white tracking-wide">
              <span style={{ color: "#ab8754" }}>Nejoblíbenější</span> vína
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
              Objevte naše nejcennější a nejlépe hodnocená vína z kolekce
            </p>
          </div>
          
          {/* Vinařský divider s hrozny */}
          <div className="flex items-center justify-center mt-8 sm:mt-12">
            <div className="w-16 sm:w-24 lg:w-32 h-px bg-gradient-to-r from-transparent to-white/20"></div>
            <div className="mx-4 sm:mx-6 lg:mx-8 flex items-center space-x-2 sm:space-x-3">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full" style={{ backgroundColor: "#ab8754" }}></div>
              <Wine className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: "#ab8754" }} />
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full" style={{ backgroundColor: "#ab8754" }}></div>
            </div>
            <div className="w-16 sm:w-24 lg:w-32 h-px bg-gradient-to-l from-transparent to-white/20"></div>
          </div>
        </div>

        {/* Slider container s šipkami */}
        <div className="relative w-full">
          
          {/* Slider wrapper */}
          <div className="relative h-[500px] sm:h-[550px] lg:h-[600px] flex items-center group/slider">
            
            {/* Levá šipka - pouze na hover */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 lg:left-6 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-black/40 backdrop-blur-sm border border-white/20 rounded-full hover:border-white/40 hover:bg-black/60 transition-all duration-300 group opacity-0 group-hover/slider:opacity-100"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:text-white/80 transition-colors duration-300" />
            </button>

            {/* Pravá šipka - pouze na hover */}
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 lg:right-6 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-black/40 backdrop-blur-sm border border-white/20 rounded-full hover:border-white/40 hover:bg-black/60 transition-all duration-300 group opacity-0 group-hover/slider:opacity-100"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:text-white/80 transition-colors duration-300" />
            </button>

            {/* Slider content */}
            <div className="w-full overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ 
                  transform: `translateX(calc(-${currentIndex * 280}px + 50vw - 700px))`,
                  width: `${infiniteWines.length * 280}px`
                }}
              >
                {infiniteWines.map((wine, index) => {
                  const badgeConfig = getBadgeConfig(wine.badge);
                  const BadgeIcon = badgeConfig.icon;
                  
                  return (
                    <div 
                      key={`${wine.id}-${Math.floor(index / totalWines)}-${index}`} 
                      className="flex-shrink-0 px-2 sm:px-3 lg:px-4"
                      style={{ width: '280px' }}
                    >
                      
                      {/* Luxusní minimalistická karta */}
                      <div 
                        className="group wine-card cursor-pointer select-none h-full hover:scale-105 transition-all duration-500"
                        onClick={() => {
                          // Zde můžeš přidat logiku pro přesměrování na detail produktu
                          console.log(`Klik na víno: ${wine.name}`);
                        }}
                      >
                        
                        {/* Obrázek produktu */}
                        <div className="relative aspect-[3/4] bg-gradient-to-b from-white/5 to-white/10 rounded-xl lg:rounded-2xl mb-4 sm:mb-6 overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20">
                          
                          {/* Obrázek vína s hover zoom efektem */}
                          <div className="absolute inset-0 flex items-center justify-center p-6 overflow-hidden">
                            <img 
                              src="/vino.png" 
                              alt={wine.name}
                              className="w-full h-full object-contain group-hover:scale-125 transition-transform duration-500 ease-out"
                            />
                          </div>
                          
                          {/* Jemný badge */}
                          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 group-hover:opacity-80 transition-opacity duration-300">
                            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-black/60 backdrop-blur-sm rounded-full border border-white/20">
                              <BadgeIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" style={{ color: "#ab8754" }} />
                              <span className="text-white text-xs font-medium">{badgeConfig.text}</span>
                            </div>
                          </div>

                          {/* Rating v rohu */}
                          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 group-hover:opacity-80 transition-opacity duration-300">
                            <div className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-black/60 backdrop-blur-sm rounded-full border border-white/20">
                              <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-current" />
                              <span className="text-white text-xs font-medium">{wine.rating}</span>
                            </div>
                          </div>

                          {/* Jemný hover efekt - gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Čistý obsah */}
                        <div className="space-y-3 sm:space-y-4">
                          
                          {/* Název */}
                          <div className="text-center space-y-1 sm:space-y-2">
                            <h3 className="text-white text-sm sm:text-base lg:text-lg font-medium group-hover:text-white/80 transition-colors duration-300 line-clamp-2">
                              {wine.name}
                            </h3>
                            <p className="text-gray-400 text-xs sm:text-sm font-light">
                              {wine.variety} • {wine.vintage}
                            </p>
                          </div>

                          {/* Rating a recenze */}
                          <div className="flex items-center justify-center gap-2 sm:gap-3">
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                              <span className="text-white text-xs sm:text-sm font-medium">{wine.rating}</span>
                            </div>
                            <span className="text-gray-500 text-xs sm:text-sm">({wine.reviews})</span>
                          </div>

                          {/* Popis */}
                          <div className="text-center">
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light line-clamp-2">
                              {wine.description}
                            </p>
                          </div>

                          {/* Jemný CTA link */}
                          <div className="text-center pt-1 sm:pt-2">
                            <button className="text-xs sm:text-sm font-medium transition-all duration-300 hover:text-white border-b border-transparent hover:border-white/30 pb-1 group/link cursor-pointer" style={{ color: "#ab8754" }}>
                              <span className="group-hover/link:tracking-wide transition-all duration-300">
                                Zobrazit detail →
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Elegantní indikátory */}
        <div className="flex items-center justify-center gap-4 mt-12 sm:mt-16 px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2">
            {featuredWines.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 rounded-full hover:scale-110 ${
                  (currentIndex % totalWines) === index 
                    ? "w-6 sm:w-8 h-2" 
                    : "w-2 h-2 hover:w-3 sm:hover:w-4"
                }`}
                style={{
                  backgroundColor: (currentIndex % totalWines) === index ? "#ab8754" : "rgba(255, 255, 255, 0.3)"
                }}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          
          {/* Auto-play indikátor */}
          <div className="ml-4 flex items-center gap-2">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border transition-all duration-300 flex items-center justify-center ${
                isAutoPlaying 
                  ? 'border-white/40 bg-white/10' 
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                isAutoPlaying ? 'bg-green-400' : 'bg-white/40'
              }`}></div>
            </button>
            <span className="text-gray-500 text-xs sm:text-sm font-light">
              {isAutoPlaying ? 'Auto-play' : 'Pozastaveno'}
            </span>
          </div>
        </div>

        {/* Minimalistické CTA */}
        <div className="text-center mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8">
          <button className="group px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-white font-light text-sm sm:text-base lg:text-lg border border-white/20 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-black/10">
            <span className="group-hover:text-white/80 transition-colors duration-300 group-hover:tracking-wide">
              Prozkoumat celou kolekci
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .group:hover {
          cursor: pointer;
        }
        
        .wine-card:hover {
          transform: translateY(-8px);
        }
      `}</style>
    </section>
  );
};

export default FeaturedWinesSection;