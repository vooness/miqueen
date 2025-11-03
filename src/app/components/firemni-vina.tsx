"use client";
import React from "react";
import Image from "next/image";
import { Wine, Gift, Award, CheckCircle, Phone, Mail, ChevronRight, Star, Package, Palette } from "lucide-react";
import { motion } from "framer-motion";

const CorporateWinesPage: React.FC = () => {
  const accentColor = "#ab8754";
  const paperColor = "#fefbea";

  const wineSets = [
    {
      id: 1,
      name: "Set 4x mini",
      subtitle: "Ryzlink vlašský, Rulandské šedé, Frankovka rosé, Pinot noir",
      volume: "4x 187 ml",
      prices: [
        { quantity: "1-23 ks", price: "309 Kč/set" },
        { quantity: "24-100 ks", price: "279 Kč/set", discount: "-10%" },
        { quantity: "100+ ks", price: "259 Kč/set", discount: "-16%" }
      ],
      features: [
        "Elegantní dárkové balení",
        "Oceňovaná vína",
        "Ideální firemní pozornost",
        "Možnost personalizace od 24 ks"
      ],
      image: "/2.jpg"
    },
    {
      id: 2,
      name: "Set 4x mini premium",
      subtitle: "Mimosa, Frizzante Ryzlink vlašský, Ryzlink vlašský, Pinot noir",
      volume: "3x 187 ml + 1x 200 ml",
      prices: [
        { quantity: "1-23 ks", price: "339 Kč/set" },
        { quantity: "24-100 ks", price: "305 Kč/set", discount: "-10%" },
        { quantity: "100+ ks", price: "285 Kč/set", discount: "-16%" }
      ],
      features: [
        "Obsahuje specialitu MIMOSA",
        "Mix tichých a perlivých vín",
        "Luxusní prezentace",
        "Možnost personalizace od 24 ks"
      ],
      image: "/2.jpg"
    }
  ];

  const personalizations = [
    {
      id: 1,
      title: "Medaile s logem",
      subtitle: "Od 24 ks lahví nebo setů",
      description: "Medaile s logem v barvě pro vás rádi zrealizujeme od 24 ks lahví 0,75l nebo 24 ks setů MiQueen mini (po 4ks), a to zdarma v ceně objednávky.",
      features: [
        "Zdarma od 24 ks",
        "Plnobarevný tisk loga",
        "Profesionální grafický návrh",
        "Rychlá realizace"
      ],
      minQuantity: "24 ks",
      price: "ZDARMA",
      image: "/1.jpg"
    },
    {
      id: 2,
      title: "Kombinované možnosti",
      subtitle: "Flexibilní řešení od 24 ks",
      description: "Od 24 ks lahví 0,75 l pro vás rádi zrealizujeme medaile s logem v barvě, a to zdarma v ceně objednávky. Od 100 ks lahví 0,75 l jednoho druhu pro vás rádi zrealizujeme buď medaili s logem v barvě nebo vlastní personalizovanou etiketu včetně grafického návrhu.",
      features: [
        "Od 24 ks - medaile s logem zdarma",
        "Od 100 ks - etiketa nebo medaile",
        "Stylové krabičky na 1 nebo 2 lahve",
        "Možnost zahrnout MIMOSU"
      ],
      minQuantity: "24-100 ks",
      price: "Dle množství",
      image: "/3.jpg"
    },
    {
      id: 3,
      title: "Vlastní etiketa",
      subtitle: "Kompletní personalizace od 100 ks",
      description: "Vlastní personalizovanou etiketu pro vás rádi zrealizujeme od 100 ks lahví 0,75 l jednoho druhu. A to buď přidáním vašeho loga do stávající etikety anebo realizací etikety na míru. Rádi vám připravíme personalizovanou nabídku přímo na míru.",
      features: [
        "Kompletní redesign etikety",
        "Nebo logo na stávající etiketě",
        "Profesionální grafický návrh",
        "Konzultace designu zdarma"
      ],
      minQuantity: "100 ks",
      price: "Na vyžádání",
      image: "/4.jpg"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: paperColor }}>
      
      <section className="relative overflow-hidden py-16 lg:py-20">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${accentColor}15, transparent)` }}
            animate={{ 
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          
          {/* Header */}
          <motion.div 
            className="text-center mb-16 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="inline-flex items-center gap-3 mb-6"
              variants={fadeInUp}
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <Wine className="w-8 h-8" style={{ color: accentColor }} />
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-light text-gray-800 mb-6"
              variants={fadeInUp}
            >
              Firemní <span style={{ color: accentColor }}>vína</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
              variants={fadeInUp}
            >
              Darujte svým obchodním partnerům, klientům či zaměstnancům něco výjimečného. 
              Lahev kvalitního vína s personalizovanou etiketou je neotřelý způsob, jak vyjádřít 
              poděkování a podpořit dobré vztahy.
            </motion.p>

            {/* Benefits */}
            <motion.div 
              className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10"
              variants={fadeInUp}
            >
              <div className="flex flex-col items-center">
                <Award className="w-10 h-10 mb-3" style={{ color: accentColor }} />
                <h3 className="font-semibold text-gray-900 mb-1">Oceňovaná vína</h3>
                <p className="text-sm text-gray-600">AWC Vienna, Král vín</p>
              </div>
              <div className="flex flex-col items-center">
                <Package className="w-10 h-10 mb-3" style={{ color: accentColor }} />
                <h3 className="font-semibold text-gray-900 mb-1">Velkoobchodní ceny</h3>
                <p className="text-sm text-gray-600">Výhodné ceny od 24 ks</p>
              </div>
              <div className="flex flex-col items-center">
                <Palette className="w-10 h-10 mb-3" style={{ color: accentColor }} />
                <h3 className="font-semibold text-gray-900 mb-1">Personalizace zdarma</h3>
                <p className="text-sm text-gray-600">Grafický návrh v ceně</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Wine Sets Section */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl lg:text-5xl font-light text-gray-800 text-center mb-12"
              variants={fadeInUp}
            >
              Dárkové <span style={{ color: accentColor }}>sety MiQueen mini</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {wineSets.map((set) => (
                <motion.div
                  key={set.id}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={set.image}
                      alt={set.name}
                      fill
                      className="object-contain p-8"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{set.name}</h3>
                    <p className="text-gray-600 mb-2">{set.subtitle}</p>
                    <p className="text-sm text-gray-500 mb-6">{set.volume}</p>

                    {/* Prices */}
                    <div className="space-y-3 mb-6 p-4 bg-gray-50 rounded-xl">
                      {set.prices.map((price, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">{price.quantity}</span>
                          <div className="flex items-center gap-2">
                            <span className="font-bold" style={{ color: accentColor }}>
                              {price.price}
                            </span>
                            {price.discount && (
                              <span className="text-xs text-green-600 font-semibold">
                                {price.discount}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {set.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: accentColor }} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personalization Options - 2x2 Grid */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl lg:text-5xl font-light text-gray-800 text-center mb-12"
              variants={fadeInUp}
            >
              Možnosti <span style={{ color: accentColor }}>personalizace</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* First two items in top row */}
              {personalizations.slice(0, 2).map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-6"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold"
                         style={{ backgroundColor: accentColor }}>
                      {item.minQuantity}
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.subtitle}</p>
                    <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>

                    <div className="space-y-2 mb-6">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: accentColor }} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-sm text-gray-500">Cena personalizace:</span>
                      <span className="text-xl font-bold" style={{ color: accentColor }}>
                        {item.price}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Third item spanning full width */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
              className="mt-8 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-full bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={personalizations[2].image}
                    alt={personalizations[2].title}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                <div className="p-8 md:p-12">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-white text-sm font-semibold"
                          style={{ backgroundColor: accentColor }}>
                      {personalizations[2].minQuantity}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {personalizations[2].title}
                  </h3>
                  <p className="text-gray-600 mb-4">{personalizations[2].subtitle}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {personalizations[2].description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {personalizations[2].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: accentColor }} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-600 mb-2">Pro individuální nabídku kontaktujte:</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="mailto:info@miqueen.cz" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                        <Mail className="w-4 h-4" style={{ color: accentColor }} />
                        <span className="font-medium">info@miqueen.cz</span>
                      </a>
                      <a href="tel:+420731610344" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                        <Phone className="w-4 h-4" style={{ color: accentColor }} />
                        <span className="font-medium">+420 731 610 344</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="bg-white rounded-3xl overflow-hidden shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="p-8 lg:p-16 text-center"
                 style={{ 
                   background: `linear-gradient(135deg, white, ${paperColor}50)` 
                 }}>
              <Gift className="w-16 h-16 mx-auto mb-6" style={{ color: accentColor }} />
              
              <h2 className="text-3xl lg:text-5xl font-light text-gray-800 mb-6">
                Vyžádejte si <span style={{ color: accentColor }}>individuální nabídku</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Každý projekt konzultujeme individuálně. Společně navrhneme sortiment, množství i design tak, 
                aby firemní víno perfektně reprezentovalo vaši značku.
              </p>

              <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto mb-10">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Co pro vás rádi zajistíme:</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accentColor }} />
                    <div>
                      <p className="font-medium text-gray-900">Degustace zdarma</p>
                      <p className="text-sm text-gray-600">U vás nebo v našich sklepích</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accentColor }} />
                    <div>
                      <p className="font-medium text-gray-900">Variabilita řešení</p>
                      <p className="text-sm text-gray-600">Splníme i nevšední požadavky</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="flex flex-col sm:flex-row gap-8 justify-center mb-10">
                <motion.a
                  href="mailto:info@miqueen.cz"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Mail className="w-5 h-5" style={{ color: accentColor }} />
                  <span className="font-medium text-lg">info@miqueen.cz</span>
                </motion.a>

                <motion.a
                  href="tel:+420731610344"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Phone className="w-5 h-5" style={{ color: accentColor }} />
                  <span className="font-medium text-lg">+420 731 610 344</span>
                </motion.a>
              </div>

              {/* CTA Button */}
              <motion.a
                href="/kontakt"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-12 py-4 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: accentColor }}
              >
                Získat nabídku
                <ChevronRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default CorporateWinesPage;