"use client";

import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface WineSeries {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

const wineSeries: WineSeries[] = [
  {
    id: 1,
    name: "Tichá terroir vína",
    subtitle: "řada",
    description:
      "Vína terroir jsou tichá vína, která nesou jedinečný otisk svého původu – půdy, klimatu a práce vinaře. Každý doušek odráží charakter vinične trati Za Cihelnou, její minerálnost, svěžest i vůni místa. Jsou to vína s duší, která vyprávějí příběh krajiny, z níž vzešla. Všechna vína jsou míchána 3 až 9 měsíců na jemných kalech, což jim dodává plnost, hebkost a komplexní chuťový projev.",
    image: "/vino5.png",
  },
  {
    id: 2,
    name: "Perlivá vína",
    subtitle: "řada",
    description:
      "Vína Frizzante z tratě Za Cihelnou vynikají svěžestí a lehkostí, která dokonale odráží charakter mikulovského terroiru s vápenitým podložím a sprašovou půdou. Jsou sycena přírodním CO2 vzniklým při kvašení, takže mají jemné, přirozené perlení, které zvýrazňuje jejich ovocný a minerální projev. Díky původu z trati Za Cihelnou si uchovávají typickou minerální slanost, živou kyselinku a elegantní citrusové tóny – ideální vína pro letní osvěžení i lehké gastronomické párování.",
    image: "/vino1.png",
  },
  {
    id: 3,
    name: "MiQueen mini",
    subtitle: "řada",
    description:
      "MiQueen Mini představuje moderní a praktický způsob, jak si vychutnat kvalitní víno v menším, osobním balení. Menší objem 187 ml u tichých vín a 200 ml u perlivých vín zaručuje, že si otevřete vždy čerstvou láhev – ideální pro chvíle, kdy si chcete dopřát sklenku bez nutnosti otevírat celé víno. Mini lahve jsou perfektní na cesty, pikniky, hotely, eventy i stylové dárky, a přitom uchovávají stejnou kvalitu a terroirový charakter jako standardní balení. MiQueen Mini je o pohodlí, eleganci a svobodě vychutnat si víno kdykoli a kdekoli, a to s maximální čerstvostí.",
    image: "/vino3.png",
  },
  {
    id: 4,
    name: "MiQueen MIMOSA",
    subtitle: "řada",
    description:
      "Mimosa MiQueen je svěží a elegantní nápoj, který spojuje suchý Sauvignon z trati Za Cihelnou s 100 % pomerančovou šťávou ze Španělska. Základem je Sauvignon s výraznou mineralitou, citrusovými tóny a živou kyselinkou, pocházející z vápenitého podloží mikulovského terroiru. Díky spojení s prémiovou pomerančovou šťávou vzniká harmonický a šťavnatý drink s vyvážeností svěží kyselosti a sladce ovocného aroma – ideální pro brunch, letní osvěžení nebo lehký aperitiv.",
    image: "/vino2.png",
  },
];

const accentColor = "#ab8754";

const WineSeriesSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const autoPlayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // autoplay – čistě client-side, neovlivňuje SSR HTML
  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % wineSeries.length);
    }, 12000);

    autoPlayTimerRef.current = timer;

    return () => {
      clearInterval(timer);
    };
  }, [isAutoPlay]);

  const handleSeriesClick = useCallback((index: number) => {
    setSelectedIndex(index);
    setIsAutoPlay(false);

    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
    }

    pauseTimerRef.current = setTimeout(() => {
      setIsAutoPlay(true);
    }, 30000);
  }, []);

  // cleanup timerů
  useEffect(() => {
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  const currentWine = useMemo(
    () => wineSeries[selectedIndex],
    [selectedIndex]
  );

  return (
    <section className="relative overflow-hidden bg-[#fefbea]">
      {/* Top border */}
      <div className="relative w-full h-auto">
        <Image
          src="/border.png"
          alt=""
          width={1920}
          height={176}
          className="w-full h-auto object-contain"
          priority
          quality={60}
          sizes="100vw"
        />
      </div>

      <div className="py-12 sm:py-20 md:py-28 lg:py-36 relative">
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <Image
            src="/vinice_ostra3_master_shopet.webp"
            alt=""
            fill
            className="object-cover"
            loading="lazy"
            quality={30}
            sizes="100vw"
          />
        </div>

        <div className="container mx-auto px-2 sm:px-4 lg:px-12 relative z-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-20 transition-all duration-700 opacity-100 translate-y-0">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-800 mb-3 sm:mb-4 px-4">
              Naše{" "}
              <span className="font-normal" style={{ color: accentColor }}>
                vinařské řady
              </span>
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto px-4">
              Objevte rozmanitost našich vín
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-12 gap-2 sm:gap-4 md:gap-6 lg:gap-12 max-w-[1400px] mx-auto">
            {/* Series Navigation */}
            <div className="col-span-1 lg:col-span-3 space-y-0.5 sm:space-y-1 md:space-y-2">
              {wineSeries.map((wine, index) => {
                const isActive = selectedIndex === index;

                return (
                  <button
                    key={wine.id}
                    onClick={() => handleSeriesClick(index)}
                    className={`
                      relative w-full text-left py-1 sm:py-2 md:py-3 
                      transition-all duration-300
                      hover:translate-x-1
                      ${isActive ? "translate-x-2" : ""}
                    `}
                  >
                    <div className="relative">
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 mb-0.5 md:mb-1 uppercase tracking-wider font-light">
                        {wine.subtitle}
                      </p>
                      <h3
                        className={`
                          text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 
                          transition-all duration-300
                          ${
                            isActive
                              ? "font-semibold border-b-2 border-dotted pb-1"
                              : "font-light"
                          }
                        `}
                        style={{
                          color: accentColor,
                          borderColor: isActive ? accentColor : "transparent",
                        }}
                      >
                        {wine.name}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Wine Image */}
            <div className="col-span-1 lg:col-span-5 flex justify-center items-center py-4 md:py-8 lg:py-0 mb-12 sm:mb-20">
              <div className="relative">
                <div
                  className="absolute inset-0 blur-xl opacity-10 rounded-full"
                  style={{ backgroundColor: accentColor }}
                />
                <div className="relative z-10">
                  {wineSeries.map((wine, index) => (
                    <Image
                      key={wine.id}
                      src={wine.image}
                      alt={wine.name}
                      width={600}
                      height={1200}
                      className={`
                        w-full scale-[2] sm:scale-100 h-auto object-contain drop-shadow-2xl
                        transition-opacity duration-700
                        ${
                          index === selectedIndex
                            ? "opacity-100"
                            : "opacity-0 absolute inset-0"
                        }
                      `}
                      priority={index === 0}
                      quality={70}
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Wine Description */}
            <div className="col-span-2 lg:col-span-4 mt-8 sm:mt-0 px-4 sm:px-0">
              <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-0 min-h-[300px] sm:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px] flex flex-col">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 mb-2 uppercase tracking-wider">
                    {currentWine.subtitle}
                  </p>
                  <h3
                    className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 transition-all duration-500"
                    style={{ color: accentColor }}
                  >
                    {currentWine.name}
                  </h3>
                </div>

                <div className="flex-1">
                  <p className="text-xs sm:text-base md:text-lg text-gray-700 leading-relaxed transition-opacity duration-500">
                    {currentWine.description}
                  </p>
                </div>

                <a
                  href="https://shop.miqueen.cz/vina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 sm:mt-6 transition-all hover:gap-4 active:opacity-70"
                  style={{ color: accentColor }}
                >
                  <span className="text-base sm:text-lg font-medium">
                    e-shop
                  </span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12 lg:mt-20 px-4">
            {wineSeries.map((_, index) => {
              const isActive = selectedIndex === index;

              return (
                <button
                  key={index}
                  onClick={() => handleSeriesClick(index)}
                  className="relative h-1.5 flex-1 max-w-[80px] sm:max-w-[120px] bg-gray-300/50 rounded-full overflow-hidden transition-colors hover:bg-gray-300"
                >
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundColor: isActive ? accentColor : "transparent",
                      width: isActive ? "100%" : "0%",
                      transition: isActive
                        ? "width 12s linear"
                        : "width 0.3s ease-out",
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="relative w-full">
        <Image
          src="/border.png"
          alt=""
          width={1920}
          height={176}
          className="w-full h-auto object-contain"
          loading="lazy"
          quality={60}
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default React.memo(WineSeriesSection);
