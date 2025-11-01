"use client";
import React, { useState, useEffect, useRef } from "react";
import { Play, Heart, Grape, Wine } from "lucide-react";
import { motion, useInView, useReducedMotion, type Easing } from "framer-motion";

const AdoptujVinohrad: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const experiences = [
    "Staň se virtuálním vinařem",
    "Poznej fáze práce na vinohradu",
    "Vyzkoušej si práci vinohradníka",
    "Měj kvalitní moravská vína",
    "Pojmenuj svůj mikrovinohrad",
    "Zažij celoroční vinařský zážitek"
  ];

  const benefits = [
    {
      icon: Wine,
      title: "Staň se virtuálním vinařem",
      subtitle: "Zažij vinařský život na vlastní kůži"
    },
    {
      icon: Grape,
      title: "Poznej fáze práce na vinohradu",
      subtitle: "Od jara do podzimu s námi"
    },
    {
      icon: Wine,
      title: "Měj kvalitní moravská vína",
      subtitle: "Pravidelné dodávky přímo domů"
    },
    {
      icon: Grape,
      title: "Vyzkoušej si práci vinohradníka",
      subtitle: "Osobní zkušenost na vinohradu"
    },
    {
      icon: Heart,
      title: "Pojmenuj svůj mikrovinohrad",
      subtitle: "Personalizuj vlastní vinohrad"
    },
    {
      icon: Play,
      title: "Zažij celoroční vinařský zážitek",
      subtitle: "Celý rok plný nezapomenutelných okamžiků"
    }
  ];

  // Easing křivka s typem
  const customEase: Easing = [0.22, 1, 0.36, 1];

  // Framer Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.2 : 0.6, ease: customEase }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: prefersReducedMotion ? 0.2 : 0.7, ease: customEase }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: prefersReducedMotion ? 0.2 : 0.7, ease: customEase }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: prefersReducedMotion ? 0 : 0.2
      }
    }
  };

  // Ref pro scroll animace
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
    <section 
      className="py-12 md:py-16 lg:py-28 relative overflow-hidden" 
      style={{ 
        backgroundColor: "#fefbea"
      }}
    >
      
      {/* Animated background elements - pouze na desktopu */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse" 
               style={{ background: `radial-gradient(circle, #ab875415, transparent)` }}></div>
          <div className="absolute bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse animation-delay-2000"
               style={{ background: `radial-gradient(circle, #ab875410, transparent)` }}></div>
        </div>
      )}

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - s animací */}
        <motion.div 
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="space-y-3 md:space-y-4 lg:space-y-6">
            <motion.div 
              className="inline-flex items-center space-x-2 md:space-x-3 text-gray-600 font-medium text-xs md:text-sm tracking-wider uppercase mb-3 md:mb-4"
              variants={fadeInUp}
            >
              <div className="w-6 md:w-8 lg:w-12 h-px bg-gradient-to-r from-transparent" style={{ backgroundColor: "#ab8754" }}></div>
              <span>Exkluzivní nabídka</span>
              <div className="w-6 md:w-8 lg:w-12 h-px bg-gradient-to-l from-transparent" style={{ backgroundColor: "#ab8754" }}></div>
            </motion.div>
            
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 tracking-wide px-4"
              variants={fadeInUp}
            >
              <span style={{ color: "#ab8754" }}>Adoptuj</span> vinohrad
            </motion.h2>
            
            <motion.p 
              className="text-base md:text-lg lg:text-2xl font-light italic px-4" 
              style={{ color: "#ab8754" }}
              variants={fadeInUp}
            >
              Tvůj relax kdykoliv a kdekoliv
            </motion.p>
          </div>
          
          {/* Decorative divider */}
          <motion.div 
            className="flex items-center justify-center mt-6 md:mt-8 lg:mt-12 px-4"
            variants={fadeInUp}
          >
            <div className="w-12 md:w-16 lg:w-32 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <div className="mx-3 md:mx-4 lg:mx-8 flex items-center space-x-1.5 md:space-x-2 lg:space-x-3">
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full" style={{ backgroundColor: "#ab8754" }}></div>
              <Heart className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" style={{ color: "#ab8754" }} />
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full" style={{ backgroundColor: "#ab8754" }}></div>
            </div>
            <div className="w-12 md:w-16 lg:w-32 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </motion.div>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 xl:gap-24 mb-12 md:mb-16 lg:mb-20">
          
          {/* Video section - left - s animací */}
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
          >
            <div 
              className="relative overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl shadow-2xl transition-all duration-500 mb-6 md:mb-8 touch-manipulation group"
            >
              {/* Video container */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload={isMobile ? "metadata" : "auto"}
                >
                  <source src="/video/adoptuj-vinohrad.webm" type="video/webm" />
                  Váš prohlížeč nepodporuje přehrávání videa.
                </video>
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-l-2 border-t-2 border-white/20 rounded-tl-xl md:rounded-tl-2xl pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-r-2 border-b-2 border-white/20 rounded-br-xl md:rounded-br-2xl pointer-events-none"></div>
              </div>
              
              {/* Elegant frame */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl lg:rounded-3xl border border-gray-200 pointer-events-none"></div>
            </div>

            {/* CTA Buttons pod videem */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6">
              <motion.a 
                href="https://shop.miqueen.cz/adoptuj-vinohrad/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 text-white font-medium text-sm md:text-base transition-all duration-300 rounded-full text-center touch-manipulation"
                style={{ backgroundColor: "#ab8754" }}
                whileHover={{ scale: isMobile ? 1 : 1.05, boxShadow: "0 20px 40px rgba(171, 135, 84, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Adoptuj teď
              </motion.a>
              
              <motion.a 
                href="https://shop.miqueen.cz/kontakt/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 text-gray-700 font-medium text-sm md:text-base border-2 rounded-full transition-all duration-300 text-center touch-manipulation"
                style={{ borderColor: "#ab8754" }}
                whileHover={{ 
                  scale: isMobile ? 1 : 1.05, 
                  backgroundColor: "#ab875410",
                  borderColor: "#ab8754"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Více informací
              </motion.a>
            </div>
          </motion.div>
          
          {/* Content section - right - s animací */}
          <motion.div 
            className="space-y-6 md:space-y-8 lg:space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
          >
            {/* Main description */}
            <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-light">
                Staň se virtuálním vinařem. Poznej fáze práce na vinohradu během celého roku, 
                vyzkoušej si práci vinohradníka, měj po celý rok skvělá moravská vína z Pálavy ve své 
                skleněce, pojmenuj svůj mikrovinohrad a zažij jeden velký celý rok trvající zážitek.
              </p>
              
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-gray-900">
                Tvůj relax kdykoliv a kdekoliv.
              </p>
            </div>

            {/* Experience list - s stagger animací */}
            <motion.div 
              className="space-y-3 md:space-y-4"
              variants={staggerContainer}
            >
              {experiences.map((experience, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3 md:space-x-4"
                  variants={fadeInUp}
                >
                  <div 
                    className="flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mt-2 md:mt-2.5" 
                    style={{ backgroundColor: "#ab8754" }}
                  ></div>
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                    {experience}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Benefits section */}
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {/* Section header - s animací */}
          <AnimatedSection>
            <div className="text-center space-y-3 md:space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-800">
                <span style={{ color: "#ab8754" }}>Výhody</span> adopce
              </h3>
              
              <p className="text-sm md:text-base lg:text-lg text-gray-600 font-light max-w-2xl mx-auto">
                Jedinečný zážitek pro všechny smysly a celoroční radost z vlastního vinohradu
              </p>
            </div>
          </AnimatedSection>

          {/* 3x2 Grid Cards - s scroll animacemi */}
          <div className="relative px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-[1400px] mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    whileHover={!isMobile ? { 
                      y: -8,
                      transition: { duration: 0.3 }
                    } : {}}
                    whileTap={isMobile ? { scale: 0.98 } : {}}
                  >
                    <div className="relative h-full bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200 touch-manipulation group">
                      {/* Subtle gradient background on hover */}
                      <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                           style={{ 
                             background: `linear-gradient(135deg, rgba(171, 135, 84, 0.05), transparent)`,
                           }}>
                      </div>
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: "rgba(171, 135, 84, 0.1)" }}>
                          <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: "#ab8754" }} />
                        </div>
                        
                        {/* Title */}
                        <h4 className="text-base md:text-lg lg:text-xl font-medium text-gray-900 mb-2 md:mb-3 leading-snug min-h-[3rem]">
                          {benefit.title}
                        </h4>
                        
                        {/* Subtitle */}
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          {benefit.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Final CTA - s animací */}
          <AnimatedSection delay={0.3}>
            <div className="mt-12 md:mt-16 lg:mt-20 text-center px-4">
              <motion.a 
                href="https://shop.miqueen.cz/adoptuj-vinohrad/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 md:px-10 lg:px-12 py-3.5 md:py-4 text-white font-medium text-base md:text-lg rounded-full transition-all duration-300 touch-manipulation"
                style={{ backgroundColor: "#ab8754" }}
                whileHover={{ 
                  scale: isMobile ? 1 : 1.05,
                  boxShadow: "0 20px 40px rgba(171, 135, 84, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Začni svou vinařskou cestu
              </motion.a>
              
              <div className="mt-4 md:mt-6 text-gray-600 text-xs md:text-sm">
                nebo {" "}
                <a 
                  href="/kontakt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-900 transition-colors font-medium touch-manipulation" 
                  style={{ color: "#ab8754" }}
                >
                  získej více informací
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          will-change: opacity;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* Touch optimizations */
        * {
          -webkit-tap-highlight-color: transparent;
        }

        .touch-manipulation {
          touch-action: manipulation;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AdoptujVinohrad;