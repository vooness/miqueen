"use client";
import React from "react";
import Image from "next/image";
import { Heart, Grape, Wine, Calendar, Gift, User, Mail, MapPin, Users, FileText } from "lucide-react";
import { motion, Variants } from "framer-motion";

const AdoptujVinohradPage = () => {
  const accentColor = "#ab8754";
  const paperColor = "#fefbea";

  const packages = [
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
  ];

  const benefits = [
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
  ];

  const steps = [
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

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: paperColor }}>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-40" 
               style={{ background: `radial-gradient(circle, ${accentColor}30, transparent)`, animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
          <div className="absolute bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-40"
               style={{ background: `radial-gradient(circle, ${accentColor}20, transparent)`, animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 2s' }}></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="inline-flex items-center gap-3 mb-6"
              variants={fadeInUp}
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <Heart className="w-8 h-8" style={{ color: accentColor }} />
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-7xl font-light text-gray-800 mb-6"
              variants={fadeInUp}
            >
              <span style={{ color: accentColor }}>Adoptuj</span> vinohrad
            </motion.h1>
            
            <motion.p 
              className="text-2xl lg:text-3xl font-light italic mb-8" 
              style={{ color: accentColor }}
              variants={fadeInUp}
            >
              Tvůj relax kdykoliv a kdekoliv
            </motion.p>

            <motion.p 
              className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Staň se virtuálním vinařem. Poznej fáze práce na vinohradu během celého roku, 
              vyzkoušej si práci vinohradníka, měj po celý rok skvělá moravská vína z Pálavy ve své sklénce, 
              pojmenuj svůj mikrovinohrad a zažij jeden velký celý rok trvající zážitek.
            </motion.p>
          </motion.div>

          {/* Video Section */}
          <motion.div 
            className="max-w-5xl mx-auto mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200">
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-black">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  <source src="/video/adoptuj-vinohrad.webm" type="video/webm" />
                  Váš prohlížeč nepodporuje přehrávání videa.
                </video>
              </div>
            </div>
            
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-lg text-gray-600">
                Adoptovat vinohrad můžeš <span className="font-semibold" style={{ color: accentColor }}>sám pro sebe</span> anebo jako <span className="font-semibold" style={{ color: accentColor }}>dárek</span>
              </p>
            </motion.div>
          </motion.div>
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
        />
      </div>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-4">
              Vyber si <span style={{ color: accentColor }}>balíček</span>
            </h2>
            <p className="text-xl text-gray-600">
              Každý balíček zahrnuje péči o révu po celý rok a pravidelné dodávky vína
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-500 hover:shadow-2xl ${
                  pkg.popular ? 'border-[#ab8754] shadow-xl scale-105' : 'border-gray-200'
                }`}
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
                  className={`block w-full py-4 rounded-2xl font-bold text-center transition-all hover:scale-105 ${
                    pkg.popular
                      ? 'text-white shadow-lg'
                      : 'text-gray-700 border-2 border-gray-300 hover:border-gray-400'
                  }`}
                  style={pkg.popular ? { backgroundColor: accentColor } : {}}
                >
                  Adoptovat nyní
                </a>
              </motion.div>
            ))}
          </motion.div>
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
        />
      </div>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: paperColor }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-4">
              Co <span style={{ color: accentColor }}>získáš</span>?
            </h2>
            <p className="text-xl text-gray-600">
              Adopce vinohradu je celoroční zážitek plný výhod
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#ab8754] hover:shadow-xl transition-all duration-500"
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
                </motion.div>
              );
            })}
          </motion.div>
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
        />
      </div>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-800 mb-4">
              Jak to <span style={{ color: accentColor }}>funguje</span>?
            </h2>
            <p className="text-xl text-gray-600">
              4 jednoduché kroky k vlastnímu vinohradu
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative"
                variants={fadeInUp}
              >
                <div className="text-center">
                  <motion.div 
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 text-3xl font-bold text-white shadow-xl" 
                    style={{ backgroundColor: accentColor }}
                    whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                  >
                    {step.number}
                  </motion.div>
                  
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: paperColor }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Gift className="w-16 h-16 mx-auto mb-6" style={{ color: accentColor }} />
            </motion.div>
            
            <motion.h2 
              className="text-4xl font-light text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Perfektní <span style={{ color: accentColor }}>dárek</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Chceš sobě nebo někomu jinému věnovat skvělý zážitek? 
              Vyber si svoji odrůdu a můžeš se s námi pustit do vinohradnického dobrodružství.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.a
                href="https://shop.miqueen.cz/adoptuj-vinohrad/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 text-white rounded-full font-bold text-lg transition-all shadow-xl"
                style={{ backgroundColor: accentColor }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Adoptovat vinohrad
              </motion.a>
              
              <motion.a
                href="https://shop.miqueen.cz/kontakt/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-white text-gray-700 rounded-full font-bold text-lg border-2 border-gray-300 transition-all hover:border-gray-400 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Mám dotaz
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
};

export default AdoptujVinohradPage;