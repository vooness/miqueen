"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Briefcase, Wine, Calendar, Gift, Phone, Mail, MapPin, Sparkles, Award, Heart, CheckCircle, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <p className="text-gray-400">Žádné obrázky</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full group">
      <Image
        src={images[currentIndex]}
        alt={`${alt} - ${currentIndex + 1}`}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      
      {images.length > 1 && (
        <>
          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-lg z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-lg z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-white w-6' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const MiQueenCorporatePage: React.FC = () => {
  const accentColor = "#ab8754";
  const paperColor = "#fefbea";

  const corporateServices = [
    {
      icon: Wine,
      title: "Firemní vína",
      subtitle: "Personalizované lahve s vaším logem",
      features: [
        "Personalizace etikety a medaile",
        "Grafické zpracování na míru",
        "Velkoobchodní ceny",
        "Degustace vzorků zdarma"
      ],
      images: [
        "/fotky/IMG_6362.jpg"
      ]
    },
    {
      icon: Calendar,
      title: "Akce pro firmy",
      subtitle: "Zážitkové akce v historických sklepeních",
      features: [
        "Teambuildingy na míru",
        "Firemní večírky s noblesou",
        "Profesionální degustace",
        "Meetingy s inspirací"
      ],
      images: [
        "/fotky/20240628024059866.jpeg"
      ]
    }
  ];

  const eventTypes = [
    { 
      symbol: "♠", 
      name: "Teambuildingy", 
      desc: "Oživte týmovou spolupráci v historických sklepeních",
      images: [
        "/fotky/20240628024106809.jpeg"
      ]
    },
    { 
      symbol: "♣", 
      name: "Firemní večírky", 
      desc: "Přeneste hosty do světa kvalitních vín",
      images: [
        "/fotky/vinarna5.jpg"
      ]
    },
    { 
      symbol: "♥", 
      name: "Degustace na klíč", 
      desc: "Profesionální program s oceněnými víny",
      images: [
        "/fotky/20240628024036423.jpeg"
      ]
    },
    { 
      symbol: "♦", 
      name: "Meetingy", 
      desc: "Stylové zasedání v moravském sklepě",
      images: [
        "/fotky/vinarna2.jpg"
      ]
    }
  ];

  const locations = [
    {
      name: "Brno-Chrlice",
      title: "Historická sklepení",
      subtitle: "Rovensklípek",
      images: [
        "/fotky/koutek1.png"
      ]
    },
    {
      name: "Čejkovice",
      title: "Moravské sklepy",
      subtitle: "Vinařství MiQueen",
      images: [
        "/fotky/cejkoviceposledni.jpg"
      ]
    }
  ];

  const wineVarieties = [
    { name: "Ryzlink rýnský", type: "white" },
    { name: "Ryzlink vlašský", type: "white" },
    { name: "Tramín červený", type: "white" },
    { name: "Chardonnay", type: "white" },
    { name: "Sauvignon", type: "white" },
    { name: "Frankovka", type: "rose" },
    { name: "Pinot Noir", type: "red" }
  ];

  const useCases = [
    { icon: Gift, title: "Klientské dárky", color: "#ab8754" },
    { icon: Award, title: "VIP balíčky na akce", color: "#FFD700" },
    { icon: Heart, title: "Ocenění pro zaměstnance", color: "#E11D48" },
    { icon: Briefcase, title: "Propagační materiály", color: "#10B981" }
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer: Variants = {
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl" 
               style={{ background: `radial-gradient(circle, ${accentColor}15, transparent)`, animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
          <div className="absolute bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl"
               style={{ background: `radial-gradient(circle, ${accentColor}10, transparent)`, animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 2s' }}></div>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          
          {/* Header */}
          <motion.div 
            className="text-center mb-20 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="inline-flex items-center gap-3 mb-4"
              variants={fadeInUp}
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <Briefcase className="w-8 h-8" style={{ color: accentColor }} />
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-7xl font-light text-gray-800 mb-6"
              variants={fadeInUp}
            >
              Řešení <span style={{ color: accentColor }}>pro firmy</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Darujte svým partnerům, klientům či zaměstnancům něco výjimečného. Kvalitní víno z Pálavy s vaším logem nebo zážitkovou akcí v našich historických sklepeních.
            </motion.p>
          </motion.div>

          {/* Main Services - Large Cards with Gallery */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {corporateServices.map((service, index) => {
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image Gallery Section */}
                  <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                    <ImageGallery images={service.images} alt={service.title} />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.subtitle}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accentColor }} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      className="w-full py-3.5 text-white rounded-full font-semibold text-base transition-all hover:shadow-lg hover:scale-105"
                      style={{ backgroundColor: accentColor }}
                    >
                      Zjistit více
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Wine Varieties Section */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800 text-center mb-4">
              Naše <span style={{ color: accentColor }}>odrůdy vín</span>
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Z 31 hektarů vinic v ekologickém režimu na jižní Moravě
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {wineVarieties.map((variety, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-white rounded-full border-2 border-gray-200 hover:border-[#ab8754] transition-all duration-300 hover:shadow-md"
                >
                  <span className="font-medium text-gray-800">{variety.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Event Types with Galleries - 2x2 Grid */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl lg:text-4xl font-light text-gray-800 text-center mb-10"
              variants={fadeInUp}
            >
              Typy <span style={{ color: accentColor }}>firemních akcí</span>
            </motion.h2>
            
            <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {eventTypes.map((event, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#ab8754] hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Image Gallery - Increased Height */}
                  <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-50">
                    <ImageGallery images={event.images} alt={event.name} />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                      {event.symbol}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {event.name}
                    </h3>
                    <p className="text-base text-gray-600">
                      {event.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl lg:text-4xl font-light text-gray-800 text-center mb-10"
              variants={fadeInUp}
            >
              Ideální <span style={{ color: accentColor }}>pro každou příležitost</span>
            </motion.h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => {
                const IconComponent = useCase.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 text-center group"
                  >
                    <div 
                      className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${useCase.color}20` }}
                    >
                      <IconComponent className="w-8 h-8" style={{ color: useCase.color }} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">
                      {useCase.title}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Locations with Galleries */}
          <motion.div 
            className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800 text-center mb-10">
              Naše <span style={{ color: accentColor }}>lokace</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {locations.map((location, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#ab8754] transition-all duration-300 hover:shadow-xl"
                >
                  {/* Image Gallery */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-50">
                    <ImageGallery images={location.images} alt={location.name} />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-4" style={{ color: accentColor }} />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{location.name}</h3>
                    <p className="text-gray-600 text-lg mb-1">{location.title}</p>
                    <p className="text-sm text-gray-500">{location.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="bg-gradient-to-br from-white via-white to-gray-50 rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="p-8 lg:p-16 text-center">
              <Sparkles className="w-16 h-16 mx-auto mb-6" style={{ color: accentColor }} />
              
              <h2 className="text-3xl lg:text-5xl font-light text-gray-800 mb-6">
                Vyžádejte si <span style={{ color: accentColor }}>individuální nabídku</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                Každý projekt konzultujeme individuálně. Společně navrhneme sortiment, množství i design tak, aby firemní víno perfektně reprezentovalo vaši značku.
              </p>

              {/* Contact Cards */}
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
                <motion.a
                  href="mailto:info@miqueen.cz"
                  whileHover={{ scale: 1.05 }}
                  className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#ab8754] transition-all duration-300 hover:shadow-xl"
                >
                  <Mail className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ color: accentColor }} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">E-mail</h3>
                  <p className="text-gray-600 mb-2">Napište nám</p>
                  <p className="text-lg font-bold" style={{ color: accentColor }}>info@miqueen.cz</p>
                </motion.a>

                <motion.a
                  href="tel:+420731610344"
                  whileHover={{ scale: 1.05 }}
                  className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#ab8754] transition-all duration-300 hover:shadow-xl"
                >
                  <Phone className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ color: accentColor }} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefon</h3>
                  <p className="text-gray-600 mb-2">Zavolejte nám</p>
                  <p className="text-lg font-bold" style={{ color: accentColor }}>+420 731 610 344</p>
                </motion.a>
              </div>

              {/* Bottom CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://shop.miqueen.cz/firemni-vina"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 text-white rounded-full font-semibold text-lg transition-all shadow-lg"
                  style={{ backgroundColor: accentColor }}
                >
                  <ExternalLink className="w-5 h-5" />
                  Firemní vína
                </motion.a>
                
                <motion.a
                  href="https://shop.miqueen.cz/akce-pro-firmy"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-gray-700 rounded-full font-semibold text-lg border-2 border-gray-300 transition-all hover:border-gray-400 hover:shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Akce pro firmy
                </motion.a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default MiQueenCorporatePage;