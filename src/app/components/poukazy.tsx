"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Calendar, CheckCircle, Star, Mail, CreditCard, MapPin, Info, ChevronDown } from "lucide-react";

const MiQueenVouchersPage: React.FC = () => {
  const accentColor = "#ab8754";
  const paperColor = "#fefbea";
  const [selectedAmount, setSelectedAmount] = useState<number>(2000);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const voucherAmounts = [
    { value: 1000, popular: false },
    { value: 2000, popular: true },
    { value: 5000, popular: false }
  ];

  const voucherBenefits = [
    {
      icon: Gift,
      title: "Ideální dárek",
      description: "Darujte zážitek z kvalitních moravských vín. Obdarovaný si může vybrat přesně to, co má rád."
    },
    {
      icon: Mail,
      title: "Elektronický poukaz",
      description: "PDF s unikátním kódem vám dorazí na e-mail  po platbě. Můžete vytisknout nebo přeposlat."
    },
    {
      icon: Calendar,
      title: "Platnost 12 měsíců",
      description: "Poukazy jsou platné 12 měsíců od data zakoupení."
    },
    {
      icon: CheckCircle,
      title: "Snadné uplatnění",
      description: "Použijte online na e-shopu nebo osobně v Rovensko Brno-Chrlice."
    }
  ];

  const useCases = [
    {
      title: "Narozeniny",
      description: "Oslavte s vínem od MiQueen",
      icon: "🎂"
    },
    {
      title: "Vánoce",
      description: "Nejlepší dárek pod stromeček",
      icon: "🎄"
    },
    {
      title: "Výročí",
      description: "Připomeňte si krásné chvíle",
      icon: "💝"
    },
    {
      title: "Poděkování",
      description: "Vyjádřete vděčnost stylově",
      icon: "🙏"
    }
  ];

  const faqItems = [
    {
      question: "Jak funguje platba?",
      answer: "Elektronické poukazy lze zaplatit pouze platební kartou nebo zrychlenou online platbou."
    },
    {
      question: "Jak obdržím poukaz?",
      answer: "Po zaplacení vám na e-mail dorazí soubor ve formátu PDF s unikátním kódem. Pokud e-mail nedorazil, zkontrolujte nevyžádanou poštu nebo nás kontaktujte na info@miqueen.cz"
    },
    {
      question: "Jak poukaz uplatnit?",
      answer: "Hodnota dárkového poukazu musí být vyčerpána najednou. Hodnota nákupu musí být minimálně v hodnotě poukazu. Pokud bude hodnota nákupu vyšší, lze zboží doplatit."
    },
    {
      question: "Kde lze poukaz použít?",
      answer: "Dárkový poukaz lze uplatnit na e-shopu shop.miqueen.cz nebo osobně v Rovensklípek Brno-Chrlice, Chrlické náměstí 1, po předchozí domluvě."
    },
    {
      question: "Lze poukaz vrátit?",
      answer: "Elektronický dárkový poukaz nelze vrátit ani vyměnit za peníze."
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: paperColor }}>
      
      <section className="relative overflow-hidden py-16 lg:py-20">
        {/* Animated background blobs */}
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

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          {/* Header */}
          <motion.div 
            className="text-center mb-16 px-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.div 
              className="inline-flex items-center gap-3 mb-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
              <Gift className="w-8 h-8" style={{ color: accentColor }} />
              <motion.div 
                className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-light text-gray-800 mb-4">
              Dárkové <span style={{ color: accentColor }}>poukazy</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Darujte zážitek z oceňovaných ekologických vín z Pálavy. Perfektní dárek pro každou příležitost.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {voucherBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#ab8754] hover:shadow-lg transition-all duration-300 text-center"
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" 
                    style={{ backgroundColor: `${accentColor}20` }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="w-6 h-6" style={{ color: accentColor }} />
                  </motion.div>
                  
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Main Voucher Card */}
          <motion.div 
            className="max-w-5xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInScale}
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image Side */}
                <motion.div 
                  className="md:col-span-2 relative aspect-square md:aspect-auto bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <motion.div 
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/96_voucher-na-nakup-vin.jpg?67334076"
                      alt="Dárkový poukaz MiQueen"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute top-4 left-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.8 }}
                  >
                    <div className="px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-md" style={{ backgroundColor: accentColor }}>
                      Bestseller
                    </div>
                  </motion.div>
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  className="md:col-span-3 p-8 lg:p-10 flex flex-col justify-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <motion.div 
                    className="flex items-center gap-0.5 mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                      >
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    ))}
                    <span className="text-gray-600 text-sm ml-2">(5.0)</span>
                  </motion.div>

                  <h2 className="text-3xl font-light text-gray-900 mb-4">
                    Voucher na nákup vín
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Elektronický dárkový poukaz na nákup vín Vinařství MiQueen. Po zaplacení obdržíte PDF s unikátním kódem na e-mail.
                  </p>

                  {/* Amount Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Vyberte hodnotu poukazu
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {voucherAmounts.map((amount, index) => (
                        <motion.button
                          key={amount.value}
                          onClick={() => setSelectedAmount(amount.value)}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative px-4 py-3 rounded-lg border-2 transition-all text-center ${
                            selectedAmount === amount.value
                              ? 'border-[#ab8754] bg-[#ab875410]'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <AnimatePresence>
                            {amount.popular && (
                              <motion.span 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-2 py-0.5 bg-[#ab8754] text-white text-xs rounded-full whitespace-nowrap"
                              >
                                Nejoblíbenější
                              </motion.span>
                            )}
                          </AnimatePresence>
                          <p className="text-lg font-bold text-gray-900">
                            {amount.value.toLocaleString()} Kč
                          </p>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Price Display */}
                  <div className="border-t border-gray-100 pt-4 mb-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Cena poukazu</p>
                        <AnimatePresence mode="wait">
                          <motion.p 
                            key={selectedAmount}
                            className="text-gray-900 font-bold text-3xl"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {selectedAmount.toLocaleString()} <span className="text-xl">Kč</span>
                          </motion.p>
                        </AnimatePresence>
                      </div>
                      
                      <motion.div 
                        className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <CreditCard className="w-4 h-4" />
                        <span>Platba kartou</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="https://shop.miqueen.cz/voucher/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3.5 text-white text-center rounded-lg font-semibold text-base transition-all hover:opacity-90 shadow-lg"
                    style={{ backgroundColor: accentColor }}
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Koupit poukaz v e-shopu
                  </motion.a>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    Elektronický poukaz dostanete na e-mail po platbě
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Use Cases */}
          <div className="mb-16">
            <motion.h2 
              className="text-3xl lg:text-4xl font-light text-gray-800 text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ideální dárek <span style={{ color: accentColor }}>pro každou příležitost</span>
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#ab8754] hover:shadow-lg transition-all duration-300 text-center"
                >
                  <motion.div 
                    className="text-4xl mb-3"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {useCase.icon}
                  </motion.div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Info className="w-10 h-10 mx-auto mb-4" style={{ color: accentColor }} />
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-3">
                Nejčastější <span style={{ color: accentColor }}>otázky</span>
              </h2>
              <p className="text-gray-600">
                Vše, co potřebujete vědět o dárkových poukazech
              </p>
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl border border-gray-200 hover:border-[#ab8754] transition-all overflow-hidden cursor-pointer"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm text-white font-bold" style={{ backgroundColor: accentColor }}>
                          ?
                        </span>
                        {item.question}
                      </div>
                      <motion.div
                        animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </motion.div>
                    </h3>
                    <AnimatePresence>
                      {expandedFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-gray-600 leading-relaxed pl-9 mt-3">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Contact & Location */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Email Contact */}
              <motion.div 
                className="text-center md:text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Mail className="w-10 h-10 mb-4 mx-auto md:mx-0" style={{ color: accentColor }} />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Kontakt
                </h3>
                <p className="text-gray-600 mb-3">
                  Máte dotaz k poukazu?
                </p>
                <motion.a 
                  href="mailto:info@miqueen.cz"
                  className="text-lg font-medium hover:underline inline-block"
                  style={{ color: accentColor }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  info@miqueen.cz
                </motion.a>
              </motion.div>

              {/* Physical Location */}
              <motion.div 
                className="text-center md:text-left"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MapPin className="w-10 h-10 mb-4 mx-auto md:mx-0" style={{ color: accentColor }} />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Osobní uplatnění
                </h3>
                <p className="text-gray-600 mb-1">
                 Sklepní vinárna Brno-Chrlice
                </p>
                <p className="text-gray-600 mb-1">
                  Chrlické náměstí 1
                </p>
                <p className="text-sm text-gray-500">
                  Po předchozí domluvě
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MiQueenVouchersPage;