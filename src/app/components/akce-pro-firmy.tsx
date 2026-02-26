"use client";
import React from "react";
import Image from "next/image";
import { Calendar, Users, Wine, Award, MapPin, Clock, CheckCircle, Phone, Mail, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const CorporateEventsPage: React.FC = () => {
  const accentColor = "#ab8754";
  const paperColor = "#fefbea";

  const eventTypes = [
    {
      id: 1,
      title: "Teambuildingy",
      subtitle: "Posílení týmové spolupráce",
      description: "Unikátní teambuildingové aktivity v autentických moravských sklepích. Společné degustace, soutěže a výzvy, které stmelí váš tým.",
      features: [
        "Řízená degustace s výkladem sommeliera",
        "Týmové vinařské soutěže",
        "Degustace potmě pro odvážné",
        "Prohlídka vinohradu s výkladem"
      ],
      capacity: "10-50 osob",
      duration: "3-8 hodin",
      image: "/fotky/20240628024106809.jpeg"
    },
    {
      id: 2,
      title: "Firemní večírky",
      subtitle: "Stylové oslavy úspěchů",
      description: "Elegantní prostředí historických sklepů pro vaše firemní oslavy, výroční setkání nebo vánoční večírky.",
      features: [
        "Kompletní catering na míru",
        "Živá hudba nebo DJ",
        "Sommeliérský doprovod",
        "Možnost rautu nebo banketu"
      ],
      capacity: "20-100 osob",
      duration: "4-12 hodin",
      image: "/fotky/vinarna5.jpg"
    },
    {
      id: 3,
      title: "Business degustace",
      subtitle: "Profesionální ochutnávky",
      description: "Komentované degustace oceňovaných vín z ekologického vinařství. Ideální pro obchodní partnery nebo VIP klienty.",
      features: [
        "Degustace 6-12 vzorků vín",
        "Profesionální výklad sommeliera",
        "Párování vín s lokálními specialitami",
        "Certifikát o absolvování degustace"
      ],
      capacity: "6-30 osob",
      duration: "2-4 hodiny",
      image: "/fotky/20240628024036423.jpeg"
    },
    {
      id: 4,
      title: "Meeting & Wine",
      subtitle: "Pracovní setkání s noblesou",
      description: "Kombinace produktivního jednání a příjemné atmosféry vinařského prostředí. Inspirativní místo pro vaše obchodní schůzky.",
      features: [
        "Technické vybavení (projektor, Wi-Fi)",
        "Coffee break s vínem",
        "Možnost working lunch",
        "Soukromý salonek"
      ],
      capacity: "4-20 osob",
      duration: "2-8 hodin",
      image: "/fotky/vinarna2.jpg"
    }
  ];

  const locations = [
    {
      name: "Sklepní vinárna pod radnicí",
      city: "Brno-Chrlice",
      description: "Historické sklepení v centru Chrlic s kapacitou až 50 osob. Autentické prostředí s moderním zázemím.",
      features: [
        "Stylové sklepní prostory",
        "Bar s kompletním sortimentem",
        "Ozvučení a projektor",
        "Parkování v okolí"
      ],
      image: "/fotky/koutek1.png"
    },
    {
      name: "Vinařství MiQueen",
      city: "Čejkovice",
      description: "Moderní vinařství s degustační místností a terasou s výhledem na vinohrady. Ideální pro větší akce.",
      features: [
        "Degustační místnost",
        "Venkovní terasa",
        "Prohlídka výroby",
        "Vlastní parkoviště"
      ],
      image: "/fotky/cejkoviceposledni.jpg"
    }
  ];

  const benefits = [
    { icon: Wine, text: "Oceňovaná vína z ekologického vinařství" },
    { icon: Users, text: "Profesionální tým s individuálním přístupem" },
    { icon: Award, text: "Čtyřhvězdičkové vinařství AWC Vienna" },
    { icon: MapPin, text: "Autentické moravské prostředí" }
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
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${accentColor}10, transparent)` }}
            animate={{ 
              x: [0, -30, 0],
              y: [0, 20, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
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
              <Calendar className="w-8 h-8" style={{ color: accentColor }} />
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-light text-gray-800 mb-6"
              variants={fadeInUp}
            >
              Firemní <span style={{ color: accentColor }}>akce na míru</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Zažijte s námi nezapomenutelné firemní akce v autentickém prostředí moravských sklepů. 
              Od teambuildingů přes degustace až po elegantní večírky.
            </motion.p>

            {/* Benefits bar */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mt-10"
              variants={fadeInUp}
            >
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <IconComponent className="w-5 h-5" style={{ color: accentColor }} />
                    <span className="text-sm md:text-base">{benefit.text}</span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Event Types Grid 2x2 */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {eventTypes.map((event) => (
              <motion.div
                key={event.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Image */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-lg opacity-90">{event.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {event.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: accentColor }} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Meta info */}
                  <div className="flex items-center gap-6 text-sm text-gray-500 border-t pt-4">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      <span>{event.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{event.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Locations */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-5xl font-light text-gray-800 text-center mb-4">
              Naše <span style={{ color: accentColor }}>prostory</span>
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Vyberte si z našich dvou unikátních lokací pro vaši firemní akci
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 text-white">
                      <p className="text-2xl font-semibold">{location.city}</p>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{location.name}</h3>
                    <p className="text-gray-600 mb-6">{location.description}</p>
                    
                    <div className="space-y-2">
                      {location.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" style={{ color: accentColor }} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
              <Sparkles className="w-16 h-16 mx-auto mb-6" style={{ color: accentColor }} />
              
              <h2 className="text-3xl lg:text-5xl font-light text-gray-800 mb-6">
                Připravíme akci <span style={{ color: accentColor }}>přesně pro vás</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                Každou firemní akci připravujeme na míru podle vašich požadavků. 
                Kontaktujte nás a společně vytvoříme nezapomenutelný zážitek pro váš tým.
              </p>

              {/* Contact info */}
              <div className="flex flex-col sm:flex-row gap-8 justify-center mb-10">
                <motion.a
                  href="mailto:info@miqueen.cz"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Mail className="w-5 h-5" style={{ color: accentColor }} />
                  <span className="font-medium">info@miqueen.cz</span>
                </motion.a>

                <motion.a
                  href="tel:+420731610344"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Phone className="w-5 h-5" style={{ color: accentColor }} />
                  <span className="font-medium">+420 731 610 344</span>
                </motion.a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/kontakt"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                  style={{ backgroundColor: accentColor }}
                >
                  Nezávazná poptávka
                  <ChevronRight className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="/pro-firmy/firemni-vina"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-gray-700 rounded-full font-semibold text-lg border-2 border-gray-300 hover:border-gray-400 shadow-md hover:shadow-lg transition-all"
                >
                  <Wine className="w-5 h-5" />
                  Firemní vína
                </motion.a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default CorporateEventsPage;