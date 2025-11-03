'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

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
    name: 'Tichá terroir vína',
    subtitle: 'řada',
    description: 'Vína terroir jsou tichá vína, která nesou jedinečný otisk svého původu – půdy, klimatu a práce vinaře. Každý doušek odráží charakter vinične trati Za Cihelnou, její minerálnost, svěžest i vůni místa. Jsou to vína s duší, která vyprávějí příběh krajiny, z níž vzešla. Všechna vína jsou míchána 3 až 9 měsíců na jemných kalech, což jim dodává plnost, hebkost a komplexní chuťový projev.',
    image: '/vino1.png',
  },
  {
    id: 2,
    name: 'Perlivá vína',
    subtitle: 'řada',
    description: 'Vína Frizzante z tratě Za Cihelnou vynikají svěžestí a lehkostí, která dokonale odráží charakter mikulovského terroiru s vápenitým podložím a sprašovou půdou. Jsou sycena přírodním CO2 vzniklým při kvašení, takže mají jemné, přirozené perlení, které zvýrazňuje jejich ovocný a minerální projev. Díky původu z trati Za Cihelnou si uchovávají typickou minerální slanost, živou kyselinku a elegantní citrusové tóny – ideální vína pro letní osvěžení i lehké gastronomické párování.',
    image: '/vino1.png',
  },
  {
    id: 3,
    name: 'MiQueen mini',
    subtitle: 'řada',
    description: 'MiQueen Mini představuje moderní a praktický způsob, jak si vychutnat kvalitní víno v menším, osobním balení. Menší objem 187 ml u tichých vín a 200 ml u perlivých vín zaručuje, že si otevřete vždy čerstvou láhev – ideální pro chvíle, kdy si chcete dopřát sklenku bez nutnosti otevírat celé víno. Mini lahve jsou perfektní na cesty, pikniky, hotely, eventy i stylové dárky, a přitom uchovávají stejnou kvalitu a terroirový charakter jako standardní balení. MiQueen Mini je o pohodlí, eleganci a svobodě vychutnat si víno kdykoli a kdekoli, a to s maximální čerstvostí.',
    image: '/vino2.png',
  },
  {
    id: 4,
    name: 'MiQueen MIMOSA',
    subtitle: 'řada',
    description: 'Mimosa MiQueen je svěží a elegantní nápoj, který spojuje suchý Sauvignon z trati Za Cihelnou s 100 % pomerančovou šťávou ze Španělska. Základem je Sauvignon s výraznou mineralitou, citrusovými tóny a živou kyselinkou, pocházející z vápenitého podloží mikulovského terroiru. Díky spojení s prémiovou pomerančovou šťávou vzniká harmonický a šťavnatý drink s vyvážeností svěží kyselosti a sladce ovocného aroma – ideální pro brunch, letní osvěžení nebo lehký aperitiv.',
    image: '/vino3.png',
  },
];

const WineSeriesSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const accentColor = '#ab8754';
  const bgColor = '#fefbea';

  // Auto-rotate every 12 seconds
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % wineSeries.length);
    }, 12000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleSeriesClick = (index: number) => {
    setSelectedIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 30000);
  };

  const currentWine = wineSeries[selectedIndex];

  return (
    <section 
      className="relative overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Top Border */}
      <div className="relative w-full h-auto">
        <Image 
          src="/border.png"
          alt=""
          width={1920}
          height={176}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      <div className="py-20 md:py-28 lg:py-36 relative">
        {/* Vineyard background image */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/vinice_ostra3_master_shopet.webp"
              alt=""
              fill
              className="object-contain md:object-cover opacity-[0.07] md:opacity-[0.12] scale-110"
              style={{ filter: 'sepia(0.2)' }}
              priority
            />
          </div>
        </div>
        
        {/* Subtle background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 -right-48 w-96 h-96 rounded-full blur-[120px] opacity-20"
            style={{ background: `radial-gradient(circle, ${accentColor}, transparent)` }}
          />
          <div 
            className="absolute bottom-1/4 -left-48 w-96 h-96 rounded-full blur-[120px] opacity-20"
            style={{ background: `radial-gradient(circle, ${accentColor}, transparent)` }}
          />
        </div>
        
        <div className="container mx-auto px-2 sm:px-4 lg:px-12 relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-12 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ width: 80 }}
              />
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: accentColor }}
              />
              <motion.div 
                className="h-px bg-gradient-to-l from-transparent via-gray-400 to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ width: 80 }}
              />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-800 mb-4">
              Naše <span className="font-normal" style={{ color: accentColor }}>vinařské řady</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Objevte rozmanitost našich vín
            </p>
          </motion.div>

          {/* Main Content - Side by side on Mobile, 3 columns on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-2 sm:gap-4 md:gap-6 lg:gap-12 max-w-[1400px] mx-auto">
            
            {/* LEFT - Wine Series Menu */}
            <motion.div 
              className="col-span-1 lg:col-span-3 space-y-0.5 sm:space-y-1 md:space-y-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {wineSeries.map((wine, index) => {
                const isActive = selectedIndex === index;
                
                return (
                  <motion.button
                    key={wine.id}
                    onClick={() => handleSeriesClick(index)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full text-left py-1 sm:py-2 md:py-3 transition-all duration-300 group"
                  >
                    <div className="relative">
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 mb-0.5 md:mb-1 uppercase tracking-wider font-light">
                        {wine.subtitle}
                      </p>
                      <h3 
                        className={`
                          text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl transition-all duration-300
                          ${isActive 
                            ? 'font-normal' 
                            : 'font-light group-hover:translate-x-1'
                          }
                        `}
                        style={{
                          color: isActive ? accentColor : 'transparent',
                          WebkitTextStroke: isActive ? 'none' : `1.5px ${accentColor}`,
                          WebkitTextFillColor: isActive ? accentColor : 'transparent',
                        }}
                      >
                        {wine.name}
                      </h3>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* CENTER - Wine Bottle (Right side on Mobile) - ZVĚTŠENO NA DESKTOPU */}
            <div className="col-span-1 lg:col-span-5 flex justify-center items-center py-4 md:py-8 lg:py-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWine.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="relative">
                    {/* Glow effect behind bottle - smaller on mobile */}
                    <div 
                      className="absolute inset-0 blur-2xl md:blur-3xl opacity-10 md:opacity-20 rounded-full"
                      style={{ backgroundColor: accentColor }}
                    />
                    {/* OPRAVA: Zvětšeno víno na desktopu - přidán scale-125 pro lg a xl */}
                    <Image
                      src={currentWine.image}
                      alt={currentWine.name}
                      width={600}
                      height={1200}
                      className="relative z-10 w-full scale-[2.5] sm:scale-100 lg:scale-110 xl:scale-100 2xl:scale-100 h-auto object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT - Wine Description (Full width below on Mobile) - FIXNÍ VÝŠKA PRO ZAMEZENÍ POSKAKOVÁNÍ */}
            <motion.div 
              className="col-span-2 lg:col-span-4 mt-8 sm:mt-0 px-4 sm:px-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWine.id}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  // OPRAVA: Přidána min-height pro zamezení poskakování - různé velikosti na různých breakpointech
                  className="space-y-8 sm:space-y-6 pt-8 sm:pt-0 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px] flex flex-col"
                >
                  <div>
                    <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider">
                      {currentWine.subtitle}
                    </p>
                    
                    <h3 
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-8 sm:mb-6"
                      style={{ color: accentColor }}
                    >
                      {currentWine.name}
                    </h3>
                  </div>
                  
                  {/* Flex-1 zajistí, že popis zabere zbývající prostor */}
                  <div className="flex-1">
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mt-8 sm:mt-0">
                      {currentWine.description}
                    </p>
                  </div>

                  <a
                    href="https://shop.miqueen.cz/vina/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 group mt-6 hover:gap-3 transition-all"
                    style={{ color: accentColor }}
                  >
                    <span className="text-lg font-medium">e-shop</span>
                    <ChevronRight 
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                    />
                  </a>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Progress Indicator */}
          <motion.div 
            className="flex justify-center gap-3 mt-12 lg:mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {wineSeries.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSeriesClick(index)}
                className="relative h-1.5 flex-1 max-w-[120px] bg-gray-300/50 rounded-full overflow-hidden hover:bg-gray-300 transition-colors group"
              >
                <motion.div
                  className="absolute inset-0 rounded-full shadow-lg"
                  style={{ 
                    backgroundColor: accentColor,
                    boxShadow: index === selectedIndex ? `0 0 10px ${accentColor}50` : 'none'
                  }}
                  initial={{ width: 0 }}
                  animate={{ 
                    width: index === selectedIndex ? '100%' : 0 
                  }}
                  transition={{ 
                    duration: index === selectedIndex ? 12 : 0.3,
                    ease: index === selectedIndex ? 'linear' : 'easeOut'
                  }}
                />
                {/* Hover indicator */}
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity"
                  style={{ backgroundColor: accentColor }}
                />
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="relative w-full">
        <Image 
          src="/border.png"
          alt=""
          width={1920}
          height={176}
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default WineSeriesSection;