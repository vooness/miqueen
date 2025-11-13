"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Heart, Grape, Wine, Calendar, Gift, User, Mail, MapPin, Users, FileText } from "lucide-react";
import { motion, Variants, useReducedMotion } from "framer-motion";

const AdoptujVinohradPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const accentColor = "#ab8754";
  const paperColor = "#fefbea";

  // Detekce mobilního zařízení
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    const debouncedResize = () => {
      clearTimeout((window as Window & { adoptResizeTimer?: number }).adoptResizeTimer);
      (window as Window & { adoptResizeTimer?: number }).adoptResizeTimer = window.setTimeout(checkMobile, 150);
    };

    window.addEventListener('resize', debouncedResize, { passive: true });
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout((window as Window & { adoptResizeTimer?: number }).adoptResizeTimer);
    };
  }, []);

  // Vypni animace na mobilu
  const shouldAnimate = !isMobile && !prefersReducedMotion;

  // Memoizované balíčky
  const packages = useMemo(() => [
    {
      heads: 12,
      bottles: 12,
      deliveries: "2x ročně po 6 lahvích",
      price: "4 990 Kč",
      popular: false
    },
    {
      heads: 24,
      bottles: 24,
      deliveries: "4x ročně po 6 lahvích",
      price: "8 690 Kč",
      popular: true
    },
    {
      heads: 36,
      bottles: 36,
      deliveries: "6x ročně po 6 lahvích",
      price: "9 900 Kč",
      popular: false
    }
  ], []);

  // Memoizované benefity
  const benefits = useMemo(() => [
    {
      icon: Grape,
      title: "Vlastní mikrovinohrad",
      description: "12, 24 nebo 36 hlav révy dle vlastního výběru. Můžeš rezervovat hlavy z konkrétních čísel řádků - třeba z data narození nebo seznámení."
    },
    {
      icon: User,
      title: "Pojmenuj si vinohrad",
      description: "Jméno bude vyvěšeno na krajovém sloupku tvého řádku. Omezení je jen v počtu znaků - maximálně 25."
    },
    {
      icon: FileText,
      title: "Certifikát vlastníka",
      description: "Zašleme ti v PDF formátu certifikát, ve kterém můžeš uvést, pro koho je adopce určena i od koho."
    },
    {
      icon: Wine,
      title: "Kvalitní moravská vína",
      description: "1 hlava = 1 láhev oceňovaného vína MiQueen s personalizovanou nálepkou. Vlastní výběr vín z naší kolekce."
    },
    {
      icon: Mail,
      title: "Newsletter z vinohradu",
      description: "Informace o tom, jak to na vinohradu chodí a jaké práce se aktuálně provádí. 1x za 14 dnů přímo do mailu."
    },
    {
      icon: MapPin,
      title: "Práce na vinohradu",
      description: "1x ročně tě pozveme na minimálně 2 hodiny zažít si osobně práci (podlom, řez). Termíny vypisovány 2x ročně."
    },
    {
      icon: Users,
      title: "Uzavřená skupina",
      description: "Přístup do Facebook skupiny adoptivních vinohradníků. Sdílej zážitky a buď v kontaktu s děním na vinohradu."
    },
    {
      icon: Calendar,
      title: "Celoroční zážitek",
      description: "Délka adopce je na 1 rok. Zažij vinařský rok od jara do podzimu s námi."
    }
  ], []);

  // Memoizované kroky
  const steps = useMemo(() => [
    {
      number: "01",
      title: "Vyber si balíček",
      description: "Zvol počet hlav révy - 12, 24 nebo 36 podle tvých preferencí"
    },
    {
      number: "02",
      title: "Personalizuj",
      description: "Pojmenuj svůj mikrovinohrad a vyber čísla řádků"
    },
    {
      number: "03",
      title: "Získej certifikát",
      description: "Obdržíš certifikát vlastníka v PDF formátu"
    },
    {
      number: "04",
      title: "Užívej si víno",
      description: "Pravidelně dostáváš skvělá vína po celý rok"
    }
  ], []);

  // Conditional animation variants
  const fadeInUp: Variants = shouldAnimate ? {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  } : {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer: Variants = shouldAnimate ? {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  } : {
    hidden: { opacity: 1 },
    visible: { opacity: 1 }
  };

  const scaleIn: Variants = shouldAnimate ? {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  } : {
    hidden: { opacity: 1, scale: 1 },
    visible: { opacity: 1, scale: 1 }
  };

  // Conditional wrapper component
  const MotionWrapper = shouldAnimate ? motion.div : 'div';

  return (
    <div className="min-h-screen" style={{ backgroundColor: paperColor }}>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Animated background - pouze desktop */}
        {!isMobile && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-40" 
                 style={{ background: `radial-gradient(circle, ${accentColor}30, transparent)`, animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
            <div className="absolute bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-40"
                 style={{ background: `radial-gradient(circle, ${accentColor}20, transparent)`, animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 2s' }}></div>
          </div>
        )}

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          {/* Header */}
          <MotionWrapper 
            className="text-center mb-16"
            {...(shouldAnimate ? {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true, margin: "-100px" },
              variants: staggerContainer
            } : {})}
          >
            <MotionWrapper 
              className="inline-flex items-center gap-3 mb-6"
              {...(shouldAnimate ? { variants: fadeInUp } : {})}
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <Heart className="w-8 h-8" style={{ color: accentColor }} />
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
            </MotionWrapper>

            <MotionWrapper 
              className="text-5xl lg:text-7xl font-light text-gray-800 mb-6"
              {...(shouldAnimate ? { variants: fadeInUp } : {})}
            >
              <span style={{ color: accentColor }}>Adoptuj</span> vinohrad
            </MotionWrapper>
            
            <MotionWrapper 
              className="text-2xl lg:text-3xl font-light italic mb-8" 
              style={{ color: accentColor }}
              {...(shouldAnimate ? { variants: fadeInUp } : {})}
            >
              Tvůj relax kdykoliv a kdekoliv
            </MotionWrapper>

            <MotionWrapper 
              className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
              {...(shouldAnimate ? { variants: fadeInUp } : {})}
            >
              Staň se virtuálním vinařem. Poznej fáze práce na vinohradu během celého roku, 
              vyzkoušej si práci vinohradníka, měj po celý rok skvělá moravská vína z Pálavy ve své sklénce, 
              pojmenuj svůj mikrovinohrad a zažij jeden velký celý rok trvající zážitek.
            </MotionWrapper>
          </MotionWrapper>

          {/* Video Section - SHOPTET CDN */}
          <MotionWrapper 
            className="max-w-5xl mx-auto mb-20"
            {...(shouldAnimate ? {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true, margin: "-100px" },
              variants: scaleIn
            } : {})}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200">
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-black">
                <video
                  className="w-full h-full object-cover"
                  autoPlay={!isMobile}
                  muted
                  loop
                  playsInline
                  controls
                  preload={isMobile ? "metadata" : "auto"}
                >
                  {/* ✅ VIDEO ZE SHOPTET CDN - NEPOČÍTÁ SE DO VERCEL BANDWIDTH */}
                  <source src="https://shop.miqueen.cz/user/documents/upload/adoptuj-vinohrad.webm" type="video/webm" />
                  Váš prohlížeč nepodporuje přehrávání videa.
                </video>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg text-gray-600 mb-6">
                Adoptovat vinohrad můžeš <span className="font-semibold" style={{ color: accentColor }}>sám pro sebe</span> anebo jako <span className="font-semibold" style={{ color: accentColor }}>dárek</span>
              </p>
              
              {/* Upozornění o návštěvě vinohradu */}
              <div 
                className="inline-flex items-start gap-3 px-6 py-4 bg-white rounded-2xl shadow-lg border-2 max-w-2xl mx-auto"
                style={{ borderColor: accentColor }}
              >
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: accentColor }} />
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 mb-1">Vinohrad můžeš navštívit kdykoliv během roku</h3>
                  <p className="text-sm text-gray-600">
                    Přijeď se podívat na svůj mikrovinohrad, poznej práci vinaře a užij si atmosféru Pálavských vinic
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Border Between Sections */}
      <div className="relative w-full">
        <Image 
          src="/border.png"
          alt=""
          width={1920}
          height={176}
          className="w-full h-auto"
          style={{ display: 'block' }}
          loading="lazy"
          quality={isMobile ? 70 : 85}
        />
      </div>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-4">
              Vyber si <span style={{ color: accentColor }}>balíček</span>
            </h2>
            <p className="text-xl text-gray-600">
              Každý balíček zahrnuje péči o révu po celý rok a pravidelné dodávky vína
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 ${
                  pkg.popular ? 'border-[#ab8754] shadow-xl scale-105' : 'border-gray-200'
                } ${!isMobile ? 'hover:shadow-2xl' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full text-white text-sm font-bold shadow-lg" style={{ backgroundColor: accentColor }}>
                      NEJOBLÍBENĚJŠÍ
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4" style={{ backgroundColor: `${accentColor}20` }}>
                    <Grape className="w-10 h-10" style={{ color: accentColor }} />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {pkg.heads} hlav révy
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {pkg.bottles} lahví ročně
                  </p>
                  
                  <p className="text-sm text-gray-500 mb-6">
                    {pkg.deliveries}
                  </p>

                  <div className="text-4xl font-bold mb-6" style={{ color: accentColor }}>
                    {pkg.price}
                  </div>
                </div>

                <a
                  href="https://shop.miqueen.cz/adoptuj-vinohrad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 rounded-2xl font-bold text-center transition-all touch-manipulation ${
                    pkg.popular
                      ? 'text-white shadow-lg'
                      : 'text-gray-700 border-2 border-gray-300'
                  } ${!isMobile ? 'hover:scale-105' : 'active:scale-95'}`}
                  style={pkg.popular ? { backgroundColor: accentColor } : {}}
                >
                  Adoptovat nyní
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Border Between Sections */}
      <div className="relative w-full">
        <Image 
          src="/border.png"
          alt=""
          width={1920}
          height={176}
          className="w-full h-auto"
          style={{ display: 'block' }}
          loading="lazy"
          quality={isMobile ? 70 : 85}
        />
      </div>

      {/* Special Offer Section - Uvítací balíček */}
      <section className="py-20" style={{ backgroundColor: paperColor }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: `${accentColor}20` }}>
              <Gift className="w-5 h-5" style={{ color: accentColor }} />
              <span className="font-bold text-sm" style={{ color: accentColor }}>SPECIÁLNÍ NABÍDKA</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-4">
              <span style={{ color: accentColor }}>Uvítací balíček</span> pro nové adoptivní rodiče
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Děkujeme, že jste se rozhodli stát se součástí vinařské rodiny MiQueen
            </p>
          </div>

          {/* Main Content Card */}
          <div
            className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 transition-shadow duration-300"
            style={{ borderColor: accentColor }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              
              {/* Left side - Image */}
              <div className="relative h-[400px] lg:h-[600px] bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src="https://shop.miqueen.cz/user/documents/upload/sklenicesvyvrtkou.jpg"
                  alt="Uvítací balíček - sklenice s vývrtkou"
                  fill
                  className="object-contain p-8"
                  loading="lazy"
                  quality={isMobile ? 70 : 85}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Right side - Content */}
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Co získáte zdarma k adopci?
                </h3>

                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${accentColor}20` }}>
                      <Wine className="w-5 h-5" style={{ color: accentColor }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Sklenice s gravírováním</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Elegantní sklenice na víno s vygravírovaným logem Vinařství MiQueen
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${accentColor}20` }}>
                      <Gift className="w-5 h-5" style={{ color: accentColor }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Vývrtka s logem</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Praktická vývrtka s logem vinařství pro snadné otevírání vašich lahví
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${accentColor}20` }}>
                      <Calendar className="w-5 h-5" style={{ color: accentColor }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Dodání s první bedýnkou</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Uvítací balíček obdržíte společně s vaší první dodávkou vína
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${accentColor}20` }}>
                      <Mail className="w-5 h-5" style={{ color: accentColor }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Pro nákupy přes eshop</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Balíček je určen pro všechny zákazníky, kteří si adopci zakoupí online
                      </p>
                    </div>
                  </div>
                </div>

                {/* Package Details */}
                <div className="rounded-2xl p-6 mb-8" style={{ backgroundColor: `${accentColor}10` }}>
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Počet sklenic podle balíčku:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">12 hlav révy</span>
                      <span className="font-bold" style={{ color: accentColor }}>2 sklenice + vývrtka</span>
                    </div>
                    <div className="h-px bg-gray-300"></div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">24 hlav révy</span>
                      <span className="font-bold" style={{ color: accentColor }}>4 sklenice + vývrtka</span>
                    </div>
                    <div className="h-px bg-gray-300"></div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">36 hlav révy</span>
                      <span className="font-bold" style={{ color: accentColor }}>6 sklenic + vývrtka</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://shop.miqueen.cz/adoptuj-vinohrad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-bold text-lg shadow-lg transition-all touch-manipulation ${
                    !isMobile ? 'hover:scale-105 hover:shadow-xl' : 'active:scale-95'
                  }`}
                  style={{ backgroundColor: accentColor }}
                >
                  Adoptovat vinohrad
                  <Gift className="w-5 h-5" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Border Between Sections */}
      <div className="relative w-full">
        <Image 
          src="/border.png"
          alt=""
          width={1920}
          height={176}
          className="w-full h-auto"
          style={{ display: 'block' }}
          loading="lazy"
          quality={isMobile ? 70 : 85}
        />
      </div>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: paperColor }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-4">
              Co <span style={{ color: accentColor }}>získáš</span>?
            </h2>
            <p className="text-xl text-gray-600">
              Adopce vinohradu je celoroční zážitek plný výhod
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 border border-gray-200 transition-all duration-300 ${
                    !isMobile ? 'hover:border-[#ab8754] hover:shadow-xl hover:-translate-y-2' : ''
                  }`}
                >
                  <div className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center" style={{ backgroundColor: `${accentColor}20` }}>
                    <IconComponent className="w-7 h-7" style={{ color: accentColor }} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Border Between Sections */}
      <div className="relative w-full">
        <Image 
          src="/border.png"
          alt=""
          width={1920}
          height={176}
          className="w-full h-auto"
          style={{ display: 'block' }}
          loading="lazy"
          quality={isMobile ? 70 : 85}
        />
      </div>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-4">
              Jak to <span style={{ color: accentColor }}>funguje</span>?
            </h2>
            <p className="text-xl text-gray-600">
              4 jednoduché kroky k vlastnímu vinohradu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div 
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 text-3xl font-bold text-white shadow-xl" 
                    style={{ backgroundColor: accentColor }}
                  >
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#ab8754] to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Border Between Sections */}
      <div className="relative w-full">
        <Image 
          src="/border.png"
          alt=""
          width={1920}
          height={176}
          className="w-full h-auto"
          style={{ display: 'block' }}
          loading="lazy"
          quality={isMobile ? 70 : 85}
        />
      </div>

      {/* Video Gallery Section - VŠECHNA VIDEA ZE SHOPTET CDN */}
      <section className="py-20" style={{ backgroundColor: paperColor }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-4">
              Podívej se <span style={{ color: accentColor }}>blíže</span>
            </h2>
            <p className="text-xl text-gray-600">
              Zážitky z vinohradu v pohybu
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Video 1 */}
            <div
              className={`relative rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 transition-all duration-300 ${
                !isMobile ? 'hover:shadow-2xl hover:border-[#ab8754]' : ''
              }`}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-black">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  {/* ✅ VIDEO ZE SHOPTET CDN */}
                  <source src="https://shop.miqueen.cz/user/documents/upload/promo1.mp4" type="video/mp4" />
                  Váš prohlížeč nepodporuje přehrávání videa.
                </video>
              </div>
            </div>

            {/* Video 2 */}
            <div
              className={`relative rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 transition-all duration-300 ${
                !isMobile ? 'hover:shadow-2xl hover:border-[#ab8754]' : ''
              }`}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-black">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  {/* ✅ VIDEO ZE SHOPTET CDN */}
                  <source src="https://shop.miqueen.cz/user/documents/upload/promo2-2.webm" type="video/webm" />
                  Váš prohlížeč nepodporuje přehrávání videa.
                </video>
              </div>
            </div>

            {/* Video 3 */}
            <div
              className={`relative rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 transition-all duration-300 ${
                !isMobile ? 'hover:shadow-2xl hover:border-[#ab8754]' : ''
              }`}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-black">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  {/* ✅ VIDEO ZE SHOPTET CDN */}
                  <source src="https://shop.miqueen.cz/user/documents/upload/promo3.mp4" type="video/mp4" />
                  Váš prohlížeč nepodporuje přehrávání videa.
                </video>
              </div>
            </div>

            {/* Video 4 */}
            <div
              className={`relative rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 transition-all duration-300 ${
                !isMobile ? 'hover:shadow-2xl hover:border-[#ab8754]' : ''
              }`}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-black">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  {/* ✅ VIDEO ZE SHOPTET CDN */}
                  <source src="https://shop.miqueen.cz/user/documents/upload/promo4.mp4" type="video/mp4" />
                  Váš prohlížeč nepodporuje přehrávání videa.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Border Between Sections */}
      <div className="relative w-full">
        <Image 
          src="/border.png"
          alt=""
          width={1920}
          height={176}
          className="w-full h-auto"
          style={{ display: 'block' }}
          loading="lazy"
          quality={isMobile ? 70 : 85}
        />
      </div>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: paperColor }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
            <Gift className="w-16 h-16 mx-auto mb-6" style={{ color: accentColor }} />
            
            <h2 className="text-4xl font-light text-gray-800 mb-6">
              Perfektní <span style={{ color: accentColor }}>dárek</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Chceš sobě nebo někomu jinému věnovat skvělý zážitek? 
              Vyber si svoji odrůdu a můžeš se s námi pustit do vinohradnického dobrodružství.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://shop.miqueen.cz/adoptuj-vinohrad/"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-10 py-5 text-white rounded-full font-bold text-lg shadow-xl touch-manipulation transition-all ${
                  !isMobile ? 'hover:scale-105' : 'active:scale-95'
                }`}
                style={{ backgroundColor: accentColor }}
              >
                Adoptovat vinohrad
              </a>
              
              <a
                href="/kontakty/"
                rel="noopener noreferrer"
                className={`px-10 py-5 bg-white text-gray-700 rounded-full font-bold text-lg border-2 border-gray-300 touch-manipulation transition-all ${
                  !isMobile ? 'hover:border-gray-400 hover:shadow-lg hover:scale-105' : 'active:scale-95'
                }`}
              >
                Mám dotaz
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        * {
          -webkit-tap-highlight-color: transparent;
        }

        .touch-manipulation {
          touch-action: manipulation;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }

        /* Vypni animace na mobilu */
        @media (max-width: 767px) {
          * {
            animation: none !important;
            transition-duration: 0.1s !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AdoptujVinohradPage;