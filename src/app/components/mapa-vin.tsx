"use client";
import React, { useRef, useMemo } from "react";
import Link from "next/link";
import { MapPin, Navigation, Wine, Phone, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";

// ============================================
// CONSTANTS - Memoizované konstanty
// ============================================
const ACCENT_COLOR = "#ab8754";
const PAPER_COLOR = "#fefbea";

// Kontaktní informace jako konstanta
const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Telefon",
    value: "+420 731 610 345",
    link: "tel:+420 731 610 345"
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "info@miqueen.cz",
    link: "mailto:info@miqueen.cz"
  }
] as const;

// ============================================
// OPTIMALIZOVANÉ ANIMATION VARIANTS
// ============================================
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

// Zredukovaná animace pro mobil
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
const animationConfig = {
  duration: isMobile ? 0.3 : 0.6,
  ease: "easeOut" as const
};

// ============================================
// ANIMATED SECTION - Memoizovaná komponenta
// ============================================
interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedSection = React.memo<AnimatedSectionProps>(({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px",
    // Reduce sensitivity on mobile
    amount: isMobile ? 0.1 : 0.3
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUpVariants}
      transition={{ ...animationConfig, delay }}
    >
      {children}
    </motion.div>
  );
});

AnimatedSection.displayName = "AnimatedSection";

// ============================================
// CONTACT CARD - Memoizovaná sub-komponenta
// ============================================
interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  link: string;
}

const ContactCard = React.memo<ContactCardProps>(({ icon: IconComponent, title, value, link }) => (
  <div className="text-center md:text-left">
    <div 
      className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4" 
      style={{ backgroundColor: `${ACCENT_COLOR}20` }}
    >
      <IconComponent className="w-6 h-6" style={{ color: ACCENT_COLOR }} />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">
      {title}
    </h3>
    <a 
      href={link}
      className="text-gray-700 hover:underline transition-colors text-lg"
      style={{ color: value === "info@miqueen.cz" ? ACCENT_COLOR : undefined }}
    >
      {value}
    </a>
  </div>
));

ContactCard.displayName = "ContactCard";

// ============================================
// MAIN COMPONENT
// ============================================
const MapaVinPage: React.FC = () => {
  // Memoizované styly pro background animace
  const backgroundStyles = useMemo(() => ({
    top: {
      background: `radial-gradient(circle, ${ACCENT_COLOR}15, transparent)`
    },
    bottom: {
      background: `radial-gradient(circle, ${ACCENT_COLOR}10, transparent)`
    }
  }), []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: PAPER_COLOR }}>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        {/* Animated background - vypnuto na mobilu pro performance */}
        {!isMobile && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse" 
              style={backgroundStyles.top}
            />
            <div 
              className="absolute bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse animation-delay-2000"
              style={backgroundStyles.bottom}
            />
          </div>
        )}

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16 px-4">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                <MapPin className="w-8 h-8" style={{ color: ACCENT_COLOR }} />
                <div className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent" />
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-light text-gray-800 mb-6">
                Kde koupíte <span style={{ color: ACCENT_COLOR }}>naše vína</span>
              </h1>
              
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Najděte nejbližší prodejnu nebo si víno objednejte online s pohodlným doručením až k vám domů
              </p>
              
              <div className="mt-8 max-w-2xl mx-auto">
                <div 
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 shadow-lg" 
                  style={{ borderColor: `${ACCENT_COLOR}40` }}
                >
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <MapPin className="w-6 h-6" style={{ color: ACCENT_COLOR }} />
                    <h3 className="text-lg font-semibold text-gray-800">
                      Výhodná nabídka
                    </h3>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed text-center">
                    V síti čerpacích stanic <span className="font-semibold" style={{ color: ACCENT_COLOR }}>Eurobit</span> koupíte 
                    vína Vinařství MiQueen <span className="font-semibold">za cenu stejnou jako na e-shopu</span>
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Map Section */}
          <AnimatedSection delay={isMobile ? 0.1 : 0.2}>
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
                />
              </div>
              
              <div className="p-6 lg:p-8 bg-gradient-to-br from-white to-gray-50">
                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: ACCENT_COLOR }} />
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
          <AnimatedSection delay={isMobile ? 0.15 : 0.3}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-4">
                  Máte <span style={{ color: ACCENT_COLOR }}>dotaz</span>?
                </h2>
                <p className="text-gray-600">
                  Rádi vám poradíme s výběrem vína nebo zodpovíme vaše otázky
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {CONTACT_INFO.map((info, index) => (
                  <ContactCard
                    key={index}
                    icon={info.icon}
                    title={info.title}
                    value={info.value}
                    link={info.link}
                  />
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-6">
                  Chcete se stát naším obchodním partnerem?
                </p>
                <a
                  href="mailto:info@miqueen.cz?subject=Obchodní spolupráce"
                  className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-semibold text-base shadow-lg transition-all hover:scale-105 touch-optimized"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  <Mail className="w-5 h-5" />
                  Kontaktujte nás
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Bottom CTA */}
          <AnimatedSection delay={isMobile ? 0.2 : 0.4}>
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-lg max-w-3xl mx-auto">
                <Wine className="w-16 h-16 mx-auto mb-6" style={{ color: ACCENT_COLOR }} />
                
                <h3 className="text-2xl lg:text-3xl font-light text-gray-800 mb-4">
                  Nejrychlejší cesta k našim <span style={{ color: ACCENT_COLOR }}>vínům</span>
                </h3>
                
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                  Prohlédněte si kompletní nabídku našich oceňovaných vín a objednejte si je online s doručením přímo domů
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://shop.miqueen.cz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 text-white rounded-full font-semibold text-base shadow-lg transition-all hover:scale-105 touch-optimized"
                    style={{ backgroundColor: ACCENT_COLOR }}
                  >
                    Navštívit e-shop
                  </a>
                  
                  <Link
                    href="/vina"
                    className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold text-base border-2 border-gray-300 transition-all hover:border-gray-400 hover:shadow-lg touch-optimized"
                  >
                    Prohlédnout vína
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Inline styles - pouze když nejsme na mobilu */}
      {!isMobile && (
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
      )}
    </div>
  );
};

// Export s React.memo pro prevenci zbytečných re-renderů
export default React.memo(MapaVinPage);