"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, User, MessageSquare, Building2, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const MiQueenContactPage: React.FC = () => {
  const accentColor = "#ab8754";
  const paperColor = "#fefbea";

  const [] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Building2,
      title: "Sídlo společnosti",
      lines: [
        "Vinařství MiQueen s.r.o.",
        "IČO: 17942187",
        "Za Valama 938",
        "696 15 Čejkovice"
      ]
    },
    {
      icon: Phone,
      title: "Telefon",
      lines: ["+420 731 610 345"],
      link: "tel:+420731610345"
    },
    {
      icon: Mail,
      title: "E-mail",
      lines: ["obchod@miqueen.cz"],
      link: "mailto:obchod@miqueen.cz"
    },
    
  ];

  const locations = [
    {
      name: "Vinařství Čejkovice",
      address: "Za Valama 938, 696 15 Čejkovice",
      description: "Hlavní sídlo vinařství a výroba",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.8!2d16.9857!3d48.8746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712f2e0e0e0e0e0%3A0x0!2zWmEgVmFsYW1hIDkzOCwgNjk2IDE1IMSMZWprb3ZpY2U!5e0!3m2!1scs!2scz!4v1234567890"
    },
    {
      name: "Sklepní vinárna",
      address: "Chrlické náměstí 1/4, Brno-Chrlice",
      description: "Degustace a prodej",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.2!2d16.6529!3d49.1548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712f2e0e0e0e0e0%3A0x0!2zQ2hybGlja8OpIG7DoW3Em3N0w60gMS80LCBCcm5vLUNocmxpY2U!5e0!3m2!1scs!2scz!4v1234567890"
    }
  ];

  const teamMembers = [
    {
      name: "Miroslav Marada",
      position: "Majitel & hlavní vinař",
      image: "/profil1.png",
      description: "Zakladatel vinařství s více než 20letou zkušeností v oboru",
      email: "miroslav.marada@miqueen.cz"
    },
    {
      name: "Petra Maradová",
      position: "Obchodní ředitelka",
      image: "/profil2.png",
      description: "Specialistka na degustace a firemní události",
      email: "petra.maradova@miqueen.cz"
    },
    {
      name: "Jan Novák",
      position: "Vedoucí výroby",
      image: "/profil3.png",
      description: "Expert na ekologické vinohradnictví a udržitelnou produkci",
      email: "jan.novak@miqueen.cz"
    }
  ];

  const subjectOptions = [
    "Adoptuj vinohrad",
    "Objednávka vín",
    "Degustace Chrlice",
    "Degustace Čejkovice",
    "Firemní spolupráce",
    "Akce a události",
    "Dotaz k produktům",
    "Jiné"
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: paperColor }}>
      
      <section className="relative overflow-hidden py-16 lg:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse" 
               style={{ background: `radial-gradient(circle, ${accentColor}15, transparent)` }}></div>
          <div className="absolute bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse animation-delay-2000"
               style={{ background: `radial-gradient(circle, ${accentColor}10, transparent)` }}></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <Mail className="w-8 h-8" style={{ color: accentColor }} />
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-light text-gray-800 mb-6">
              Kontaktujte <span style={{ color: accentColor }}>nás</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Máte dotaz nebo zájem o naše služby? Rádi vám poradíme a vytvoříme nabídku na míru.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-12 mb-20">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${accentColor}20` }}
                      >
                        <IconComponent className="w-6 h-6" style={{ color: accentColor }} />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-gray-700 hover:underline font-medium"
                            style={{ color: accentColor }}
                          >
                            {info.lines.map((line, idx) => (
                              <div key={idx}>{line}</div>
                            ))}
                          </a>
                        ) : (
                          info.lines.map((line, idx) => (
                            <div key={idx} className="text-gray-600 text-sm">{line}</div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Sledujte nás</h3>
                <div className="space-y-3">
                  <a
                    href="https://www.facebook.com/vinarstvi.miqueen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-[#ab8754] transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>@vinarstvi.miqueen</span>
                  </a>
                  <a
                    href="https://www.instagram.com/vinarstvi.miqueen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-[#ab8754] transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>@vinarstvi.miqueen</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-light text-gray-900 mb-3">
                    Kontaktní formulář
                  </h2>
                  <p className="text-gray-600">
                    Pro odeslání zprávy prosím použijte e-mail: <a href="mailto:info@miqueen.cz" className="font-semibold hover:underline" style={{ color: accentColor }}>info@miqueen.cz</a>
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Jméno a příjmení *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#ab8754] transition-all"
                        placeholder="Vaše jméno"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#ab8754] transition-all"
                          placeholder="vas@email.cz"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefon
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#ab8754] transition-all"
                          placeholder="+420 123 456 789"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Předmět *
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#ab8754] transition-all appearance-none bg-white"
                    >
                      <option value="">Vyberte předmět zprávy</option>
                      {subjectOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Zpráva *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        rows={6}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#ab8754] transition-all resize-none"
                        placeholder="Napište nám váš dotaz nebo zprávu..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <a
                    href="mailto:obchod@miqueen.cz"
                    className="w-full py-4 text-white rounded-full font-semibold text-base transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                    style={{ backgroundColor: accentColor }}
                  >
                    <Send className="w-5 h-5" />
                    Odeslat e-mailem
                  </a>

                  <p className="text-xs text-gray-500 text-center">
                    * Kliknutím se otevře váš e-mailový klient
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section - UPRAVENÁ SEKCE */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800 text-center mb-4">
              Náš <span style={{ color: accentColor }}>tým</span>
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
              Poznejte lidi, kteří stojí za kvalitou našich vín a výjimečným servisem
            </p>
            
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  {/* Circular Profile Image */}
                  <div className="mb-6 relative inline-block">
                    <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={224}
                        height={224}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  
                  {/* Position */}
                  <p 
                    className="text-sm font-semibold uppercase tracking-wider mb-4"
                    style={{ color: accentColor }}
                  >
                    {member.position}
                  </p>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-5 max-w-xs mx-auto leading-relaxed">
                    {member.description}
                  </p>
                  
                  {/* Contact icons */}
                  <div className="flex justify-center gap-4">
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-[#ab8754] transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a 
                      href="tel:+420731610345"
                      className="text-gray-400 hover:text-[#ab8754] transition-colors"
                      aria-label="Telefon"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800 text-center mb-12">
              Kde nás <span style={{ color: accentColor }}>najdete</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${accentColor}20` }}
                    >
                      <MapPin className="w-6 h-6" style={{ color: accentColor }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {location.name}
                      </h3>
                      <p className="text-gray-600 mb-2">{location.address}</p>
                      <p className="text-sm text-gray-500">{location.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl text-center">
            <h3 className="text-3xl font-light text-gray-800 mb-4">
              Potřebujete <span style={{ color: accentColor }}>rychlou odpověď?</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Zavolejte nám přímo nebo napište e-mail. Jsme tu pro vás!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+420731610344"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: accentColor }}
              >
                <Phone className="w-5 h-5" />
                +420 731 610 344
              </a>
              <a
                href="mailto:obchod@miqueen.cz"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-full font-semibold text-lg border-2 border-gray-300 transition-all hover:border-gray-400 hover:shadow-lg"
              >
                <Mail className="w-5 h-5" />
                obchod@miqueen.cz
              </a>
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

export default MiQueenContactPage;