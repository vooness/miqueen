"use client";
import React, { useRef } from "react";
import { MapPin, Navigation, Wine, Phone, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";

const MapaVinPage: React.FC = () => {
  const accentColor = "#ab8754";
  const paperColor = "#fefbea";

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: "+420 XXX XXX XXX",
      link: "tel:+420XXXXXXXXX"
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "info@miqueen.cz",
      link: "mailto:info@miqueen.cz"
    }
  ];

  const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: paperColor }}>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse" 
               style={{ background: `radial-gradient(circle, ${accentColor}15, transparent)` }}></div>
          <div className="absolute bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse animation-delay-2000"
               style={{ background: `radial-gradient(circle, ${accentColor}10, transparent)` }}></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16 px-4">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <MapPin className="w-8 h-8" style={{ color: accentColor }} />
                <div className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-light text-gray-800 mb-6">
                Kde koupíte <span style={{ color: accentColor }}>naše vína</span>
              </h1>
              
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Najděte nejbližší prodejnu nebo si víno objednejte online s pohodlným doručením až k vám domů
              </p>
              
              <div className="mt-8 max-w-2xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 shadow-lg" style={{ borderColor: `${accentColor}40` }}>
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <MapPin className="w-6 h-6" style={{ color: accentColor }} />
                    <h3 className="text-lg font-semibold text-gray-800">
                      Výhodná nabídka
                    </h3>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed text-center">
                    V síti čerpacích stanic <span className="font-semibold" style={{ color: accentColor }}>Eurobit</span> koupíte 
                    vína Vinařství MiQueen <span className="font-semibold">za cenu stejnou jako na e-shopu</span>
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Map Section */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 mb-16">
              <div className="aspect-[16/10] lg:aspect-[16/9] relative">
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1BBvo4tmDCfcXZAfT1t4SCUzuZZ0Jh0Y&z=8"
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa prodejen MiQueen vín"
                ></iframe>
              </div>
              
              <div className="p-6 lg:p-8 bg-gradient-to-br from-white to-gray-50">
                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: accentColor }} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Interaktivní mapa prodejen
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Klikněte na značky v mapě pro zobrazení podrobností o jednotlivých prodejnách. 
                      Mapa zobrazuje všechna místa, kde můžete zakoupit naše vína po celé České republice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.3}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-4">
                  Máte <span style={{ color: accentColor }}>dotaz</span>?
                </h2>
                <p className="text-gray-600">
                  Rádi vám poradíme s výběrem vína nebo zodpovíme vaše otázky
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="text-center md:text-left">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: `${accentColor}20` }}>
                        <IconComponent className="w-6 h-6" style={{ color: accentColor }} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <a 
                        href={info.link}
                        className="text-gray-700 hover:underline transition-colors text-lg"
                        style={{ color: info.value === "info@miqueen.cz" ? accentColor : undefined }}
                      >
                        {info.value}
                      </a>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-6">
                  Chcete se stát naším obchodním partnerem?
                </p>
                <a
                  href="mailto:info@miqueen.cz?subject=Obchodní spolupráce"
                  className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-semibold text-base shadow-lg transition-all hover:scale-105"
                  style={{ backgroundColor: accentColor }}
                >
                  <Mail className="w-5 h-5" />
                  Kontaktujte nás
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Bottom CTA */}
          <AnimatedSection delay={0.4}>
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-lg max-w-3xl mx-auto">
                <Wine className="w-16 h-16 mx-auto mb-6" style={{ color: accentColor }} />
                
                <h3 className="text-2xl lg:text-3xl font-light text-gray-800 mb-4">
                  Nejrychlejší cesta k našim <span style={{ color: accentColor }}>vínům</span>
                </h3>
                
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                  Prohlédněte si kompletní nabídku našich oceňovaných vín a objednejte si je online s doručením přímo domů
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://shop.miqueen.cz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 text-white rounded-full font-semibold text-base shadow-lg transition-all hover:scale-105"
                    style={{ backgroundColor: accentColor }}
                  >
                    Navštívit e-shop
                  </a>
                  
                  <a
                    href="/vina"
                    className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold text-base border-2 border-gray-300 transition-all hover:border-gray-400 hover:shadow-lg"
                  >
                    Prohlédnout vína
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

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
    </div>
  );
};

export default MapaVinPage;