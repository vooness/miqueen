"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Gift, Calendar, CheckCircle, Star, Mail, CreditCard, MapPin, Info } from "lucide-react";

const MiQueenVouchersPage: React.FC = () => {
  const accentColor = "#ab8754";
  const paperColor = "#fefbea";
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);

  const voucherAmounts = [
    { value: 1000, popular: true },
    { value: 2000, popular: false },
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
      description: "PDF s unikátním kódem vám dorazí na e-mail ihned po platbě. Můžete vytisknout nebo přeposlat."
    },
    {
      icon: Calendar,
      title: "Platnost do 30.6.2025",
      description: "Poukazy zakoupené v roce 2024 jsou platné až do 30. června 2025."
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse" 
               style={{ background: `radial-gradient(circle, ${accentColor}15, transparent)` }}></div>
          <div className="absolute bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse animation-delay-2000"
               style={{ background: `radial-gradient(circle, ${accentColor}10, transparent)` }}></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          {/* Header */}
          <div className="text-center mb-16 px-4">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <Gift className="w-8 h-8" style={{ color: accentColor }} />
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-light text-gray-800 mb-4">
              Dárkové <span style={{ color: accentColor }}>poukazy</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Darujte zážitek z oceňovaných ekologických vín z Pálavy. Perfektní dárek pro každou příležitost.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {voucherBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#ab8754] hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: `${accentColor}20` }}>
                    <IconComponent className="w-6 h-6" style={{ color: accentColor }} />
                  </div>
                  
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Main Voucher Card */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image Side */}
                <div className="md:col-span-2 relative aspect-square md:aspect-auto bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/96_voucher-na-nakup-vin.jpg?67334076"
                      alt="Dárkový poukaz MiQueen"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-md" style={{ backgroundColor: accentColor }}>
                      Bestseller
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-gray-600 text-sm ml-2">(5.0)</span>
                  </div>

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
                      {voucherAmounts.map((amount) => (
                        <button
                          key={amount.value}
                          onClick={() => setSelectedAmount(amount.value)}
                          className={`relative px-4 py-3 rounded-lg border-2 transition-all text-center ${
                            selectedAmount === amount.value
                              ? 'border-[#ab8754] bg-[#ab875410]'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {amount.popular && (
                            <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-2 py-0.5 bg-[#ab8754] text-white text-xs rounded-full whitespace-nowrap">
                              Nejoblíbenější
                            </span>
                          )}
                          <p className="text-lg font-bold text-gray-900">
                            {amount.value.toLocaleString()} Kč
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Display */}
                  <div className="border-t border-gray-100 pt-4 mb-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Cena poukazu</p>
                        <p className="text-gray-900 font-bold text-3xl">
                          {selectedAmount.toLocaleString()} <span className="text-xl">Kč</span>
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                        <CreditCard className="w-4 h-4" />
                        <span>Platba kartou</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="https://shop.miqueen.cz/voucher/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3.5 text-white text-center rounded-lg font-semibold text-base transition-all hover:opacity-90 shadow-lg"
                    style={{ backgroundColor: accentColor }}
                  >
                    Koupit poukaz v e-shopu
                  </a>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    Elektronický poukaz dostanete ihned na e-mail po platbě
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800 text-center mb-10">
              Ideální dárek <span style={{ color: accentColor }}>pro každou příležitost</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#ab8754] hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-3">{useCase.icon}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="text-center mb-10">
              <Info className="w-10 h-10 mx-auto mb-4" style={{ color: accentColor }} />
              <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-3">
                Nejčastější <span style={{ color: accentColor }}>otázky</span>
              </h2>
              <p className="text-gray-600">
                Vše, co potřebujete vědět o dárkových poukazech
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#ab8754] transition-all"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm text-white font-bold" style={{ backgroundColor: accentColor }}>
                      ?
                    </span>
                    {item.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-9">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Location */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Email Contact */}
              <div className="text-center md:text-left">
                <Mail className="w-10 h-10 mb-4 mx-auto md:mx-0" style={{ color: accentColor }} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Kontakt
                </h3>
                <p className="text-gray-600 mb-3">
                  Máte dotaz k poukazu?
                </p>
                <a 
                  href="mailto:info@miqueen.cz"
                  className="text-lg font-medium hover:underline"
                  style={{ color: accentColor }}
                >
                  info@miqueen.cz
                </a>
              </div>

              {/* Physical Location */}
              <div className="text-center md:text-left">
                <MapPin className="w-10 h-10 mb-4 mx-auto md:mx-0" style={{ color: accentColor }} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Osobní uplatnění
                </h3>
                <p className="text-gray-600 mb-1">
                  Rovensklípek Brno-Chrlice
                </p>
                <p className="text-gray-600 mb-1">
                  Chrlické náměstí 1
                </p>
                <p className="text-sm text-gray-500">
                  Po předchozí domluvě
                </p>
              </div>
            </div>
          </div>
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

export default MiQueenVouchersPage;