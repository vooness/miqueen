'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // PŘIDAT IMPORT
import { Wine, ShoppingCart, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import { akceWines } from './akce-data';
import { wines, createSlug } from './wineData'; // PŘIDAT createSlug

const WineGridAkce = () => {
  const accentColor = "#ab8754";
  const paperColor = "#fefbea";

  // Načtení mini setů z databáze (ID 38 a 39)
  const giftSets = wines.filter(wine => wine.id === 38 || wine.id === 39);

  // Vánoční sekce s mini sety
  const ChristmasGiftSection = () => (
    <div className="relative py-20 lg:py-24" style={{ backgroundColor: paperColor }}>
      {/* Pozadí se sněhovými vločkami */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sněhové vločky animace */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            >
              ❄️
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 mt-20">
        {/* Vánoční header - čistý */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-light text-gray-800 mb-3">
            Ideální <span className="font-normal text-red-600">vánoční</span> dárek
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Darujte elegantní degustační sety mini vín v luxusním balení
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Praktické balení 4× 187ml - perfektní pro ochutnávku našich nejlepších vín
          </p>
        </motion.div>

        {/* Gift Sets Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {giftSets.map((set, index) => {
            // VYTVOŘIT URL PRO DETAIL PRODUKTU
            const productUrl = `/vina/darkove-sety/${createSlug(set.name)}`;
            
            return (
              <motion.div
                key={set.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-200 relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                {/* Jednoduchý gift badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <Gift className="w-3.5 h-3.5" />
                    <span>Vánoční tip</span>
                  </div>
                </div>

                {/* KLIKATELNÝ OBRÁZEK */}
                <Link href={productUrl} className="block">
                  <div className="relative h-72 bg-white overflow-hidden cursor-pointer">
                    <Image
                      src={set.image}
                      alt={set.name}
                      fill
                      className="object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  {/* KLIKATELNÝ NADPIS */}
                  <Link href={productUrl}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-[#ab8754] transition-colors cursor-pointer">
                      {set.name}
                    </h3>
                  </Link>
                  
                  {/* Obsah setu */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">Obsahuje:</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {set.id === 38 
                        ? "Ryzlink vlašský 2023 • Rulandské šedé 2023 • Frankovka rosé 2024 • Pinot Noir 2022"
                        : "MIMOSA 2024 • Frizzante Ryzlink vlašský 2023 • Ryzlink vlašský 2023 • Pinot Noir 2022"
                      }
                    </p>
                  </div>

                  {/* Features - jednoduché */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      Dárkové balení
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      4× 187ml
                    </span>
                    <span 
                      className="px-3 py-1 text-white text-xs rounded-full"
                      style={{ backgroundColor: accentColor }}
                    >
                      {set.name.includes('premium') ? 'Premium' : 'Bestseller'}
                    </span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-2xl font-bold" style={{ color: accentColor }}>
                        {set.price} Kč
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        Set 4 mini vín
                      </p>
                    </div>
                    
                    {/* TLAČÍTKA - zobrazit detail a koupit */}
                    <div className="flex gap-2">
                      {/* Tlačítko Detail */}
                      <Link
                        href={productUrl}
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gray-100 text-gray-700 font-medium transition-all hover:bg-gray-200"
                      >
                        Detail
                      </Link>
                      
                      {/* Tlačítko Koupit */}
                      <motion.a
                        href={set.shopUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-all hover:shadow-lg"
                        style={{ backgroundColor: accentColor }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Koupit
                        <ShoppingCart className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Vánoční CTA */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6">
            <span className="font-medium">Objednejte do 20. prosince</span> a garantujeme doručení před Vánoci
          </p>
          
          <motion.a
            href="https://shop.miqueen.cz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium text-lg transition-all hover:shadow-xl"
            style={{ backgroundColor: accentColor }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Zobrazit všechny dárkové sety</span>
            <Gift className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* CSS pro sněhové vločky */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );

  // HLAVNÍ RETURN
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: paperColor }}>
      {/* Vánoční sekce */}
      <ChristmasGiftSection />
      
      {/* Pokud nejsou žádné akční nabídky */}
      {akceWines.length === 0 && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                  <Wine className="w-10 h-10 text-gray-400" />
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Momentálně není žádná další akce
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  Kromě vánočních dárkových setů momentálně nemáme žádné další akční nabídky. 
                  Sledujte naše stránky nebo se přihlaste k odběru newsletteru.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/vina"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-medium transition-all hover:shadow-lg"
                    style={{ backgroundColor: accentColor }}
                  >
                    Zobrazit všechna vína
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WineGridAkce;