'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Wine, ShoppingCart, Star, Award, Sparkles, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { akceWines } from './akce-data';

type CategoryFilter = 'all' | 'white' | 'red' | 'rose' | 'sparkling';

const categoryLabels: Record<CategoryFilter, string> = {
  all: 'Vše',
  white: 'Bílá',
  red: 'Červená',
  rose: 'Růžová',
  sparkling: 'Šumivá'
};

const badgeLabels: Record<string, { label: string; icon: React.ReactNode; color: string }> = {
  bestseller: { 
    label: 'Bestseller', 
    icon: <Star className="w-3 h-3" />, 
    color: 'bg-amber-500' 
  },
  award: { 
    label: 'Oceněné', 
    icon: <Award className="w-3 h-3" />, 
    color: 'bg-purple-500' 
  },
  new: { 
    label: 'Novinka', 
    icon: <Sparkles className="w-3 h-3" />, 
    color: 'bg-green-500' 
  },
  limited: { 
    label: 'Limitovaná edice', 
    icon: <Clock className="w-3 h-3" />, 
    color: 'bg-red-500' 
  },
  'last-pieces': { 
    label: 'Poslední kusy', 
    icon: <AlertCircle className="w-3 h-3" />, 
    color: 'bg-orange-500' 
  }
};

const WineGridAkce = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const accentColor = "#ab8754";
  const paperColor = "#fefbea";

  // Filtrování vín podle kategorie
  const filteredWines = activeFilter === 'all' 
    ? akceWines 
    : akceWines.filter(wine => wine.category === activeFilter);

  // Pokud nejsou žádná akční vína
  if (akceWines.length === 0) {
    return (
      <section 
        className="relative overflow-hidden" 
        style={{ backgroundColor: paperColor }}
      >
        <div className="py-20 lg:py-32">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse" 
              style={{ background: `radial-gradient(circle, ${accentColor}15, transparent)` }}
            />
            <div 
              className="absolute bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse animation-delay-2000"
              style={{ background: `radial-gradient(circle, ${accentColor}10, transparent)` }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            {/* Header - Animated */}
            <motion.div 
              className="text-center mb-16 mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <Wine className="w-6 h-6" style={{ color: accentColor }} />
                <div className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-4">
                Akční <span className="font-normal" style={{ color: accentColor }}>nabídka</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Objevte naše speciální nabídky a získejte prémiová vína za výhodné ceny
              </p>
            </motion.div>

            {/* Zpráva o žádné akci - Animated */}
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-12 text-center">
                <motion.div 
                  className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                >
                  <Wine className="w-10 h-10 text-gray-400" />
                </motion.div>
                
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Momentálně není žádná akce
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  V tuto chvíli nemáme žádné akční nabídky. Sledujte naše stránky 
                  nebo se přihlaste k odběru newsletteru, abyste byli první, 
                  kdo se dozví o nadcházejících akcích a speciálních nabídkách.
                </p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <a 
                    href="/vsechna-nase-vina"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-medium transition-all hover:shadow-lg"
                    style={{ backgroundColor: accentColor }}
                  >
                    Zobrazit všechna vína
                  </a>
                  
                  <a 
                    href="/kontakt"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white border-2 text-gray-700 font-medium transition-all hover:bg-gray-50"
                    style={{ borderColor: accentColor }}
                  >
                    Přihlásit k newsletteru
                  </a>
                </motion.div>
              </div>
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
            className="w-full h-auto"
            style={{ display: 'block' }}
          />
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.6; }
          }

          .animate-pulse {
            animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </section>
    );
  }

  // Normální zobrazení s produkty
  return (
    <section 
      className="relative overflow-hidden" 
      style={{ backgroundColor: paperColor }}
    >
      {/* Top Border */}
      <div className="relative w-full h-auto">
        <Image 
          src="/border.png"
          alt=""
          width={1920}
          height={176}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="py-20 lg:py-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse" 
            style={{ background: `radial-gradient(circle, ${accentColor}15, transparent)` }}
          />
          <div 
            className="absolute bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse animation-delay-2000"
            style={{ background: `radial-gradient(circle, ${accentColor}10, transparent)` }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header - Animated */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <Wine className="w-6 h-6" style={{ color: accentColor }} />
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-4">
              Akční <span className="font-normal" style={{ color: accentColor }}>nabídka</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Objevte naše speciální nabídky a získejte prémiová vína za výhodné ceny
            </p>
          </motion.div>

          {/* Filter Tabs - Animated */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {(Object.keys(categoryLabels) as CategoryFilter[]).map((category, index) => {
              const count = category === 'all' 
                ? akceWines.length 
                : akceWines.filter(w => w.category === category).length;
              
              return (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                    activeFilter === category
                      ? 'text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                  style={activeFilter === category ? { backgroundColor: accentColor } : {}}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {categoryLabels[category]}
                  <span className="ml-2 text-sm opacity-75">({count})</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Wine Grid - Animated Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWines.map((wine, index) => (
              <motion.div
                key={wine.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -8 }}
              >
                {/* Image Container */}
                <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <Image
                    src={wine.image}
                    alt={wine.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Discount Badge */}
                  <motion.div 
                    className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                  >
                    -{wine.discount}%
                  </motion.div>

                  {/* Additional Badge */}
                  {wine.badge && (
                    <motion.div 
                      className={`absolute top-4 right-4 ${badgeLabels[wine.badge].color} text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg`}
                      initial={{ scale: 0, rotate: 180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                    >
                      {badgeLabels[wine.badge].icon}
                      {badgeLabels[wine.badge].label}
                    </motion.div>
                  )}

                  {/* Stock Warning */}
                  {wine.stockCount && wine.stockCount < 15 && (
                    <motion.div 
                      className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <AlertCircle className="w-3 h-3" />
                      Zbývá {wine.stockCount} ks
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Wine Name & Vintage */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {wine.name}
                    </h3>
                    <p className="text-sm text-gray-500">Ročník {wine.vintage}</p>
                  </div>

                  {/* Rating */}
                  {wine.rating && (
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(wine.rating!)
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {wine.rating}
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {wine.description}
                  </p>

                  {/* Wine Details */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {wine.dryness && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {wine.dryness === 'suche' && 'Suché'}
                        {wine.dryness === 'polosuche' && 'Polosuché'}
                        {wine.dryness === 'polosladke' && 'Polosladké'}
                        {wine.dryness === 'sladke' && 'Sladké'}
                      </span>
                    )}
                    {wine.alcohol && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {wine.alcohol}% alk.
                      </span>
                    )}
                    {wine.volume && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {wine.volume} ml
                      </span>
                    )}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold" style={{ color: accentColor }}>
                          {wine.price} Kč
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                          {wine.originalPrice} Kč
                        </span>
                      </div>
                      {wine.validUntil && (
                        <p className="text-xs text-gray-500 mt-1">
                          Akce do {new Date(wine.validUntil).toLocaleDateString('cs-CZ')}
                        </p>
                      )}
                    </div>
                    
                    <motion.a
                      href={wine.shopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full text-white transition-all hover:shadow-lg group/btn"
                      style={{ backgroundColor: accentColor }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section - Animated */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="https://shop.miqueen.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium text-lg transition-all hover:shadow-xl"
              style={{ backgroundColor: accentColor }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(171, 135, 84, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Navštivte náš e-shop
              <ShoppingCart className="w-5 h-5" />
            </motion.a>
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
          className="w-full h-auto"
          style={{ display: 'block' }}
        />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default WineGridAkce;