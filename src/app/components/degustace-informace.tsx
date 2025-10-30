"use client";
import React from "react";
import Image from "next/image";
import { Wine, MapPin, Users, Star, EyeOff, Phone, Mail, ExternalLink, CheckCircle, Home, Trees, Music, Utensils, Car, LucideIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface EquipmentItem {
  icon: LucideIcon;
  text: string;
}

interface DegustaceCard {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  address: string;
  capacity: string;
  features?: string[];
  wines?: string[];
  equipment?: EquipmentItem[];
  accommodation?: EquipmentItem[];
  occasions?: string[];
  nearby?: string[];
  specialFeatures?: EquipmentItem[];
  symbols?: string;
  url: string;
  color: string;
  highlight?: boolean;
  price?: string;
}

const DegustaceSection: React.FC = () => {
  const accentColor = "#ab8754";
  const paperColor = "#fefbea";

  const degustaceCards: DegustaceCard[] = [
    {
      id: 1,
      title: "Degustace Brno",
      subtitle: "Sklepní vinárna pod radnicí",
      tagline: "Historický sklep. Moderní atmosféra. Jedinečné víno.",
      description: "Pod radnicí v Brně-Chrlicích se ukrývá místo, které spojuje historii, styl a chuť. Sklepní vinárna navazuje na staletou tradici sklepení původní chrlické tvrze.",
      image: "/fotky/vinarna2.jpg",
      address: "Chrlické náměstí 1/4, Brno-Chrlice",
      capacity: "až 50 osob",
      features: [
        "Narozeninové oslavy",
        "Firemní večírky a teambuildingy",
        "Rozlučky se svobodou",
        "Uzavřené společnosti",
        "Ochutnávky pro přátele",
        "Obchodní partnery"
      ],
      wines: [
        "Bílá, červená, růžová vína",
        "Frizzante i tichá vína",
        "Výběrové šarže oceněné na AWC Vienna",
        "Možnost nákupu lahví přímo na místě"
      ],
      equipment: [
        { icon: Wine, text: "Stylové posezení ve sklepním prostoru" },
        { icon: Utensils, text: "Bar s obsluhou (na přání)" },
        { icon: Music, text: "Ozvučení, projektor, Wi-Fi" },
        { icon: Home, text: "Toalety a zázemí" },
        { icon: Car, text: "Parkování v okolí" }
      ],
      symbols: "♠ ♣ ♥ ♦",
      url: "https://shop.miqueen.cz/degustace-brno/",
      color: "#ab8754"
    },
    {
      id: 2,
      title: "Degustace Čejkovice",
      subtitle: "Ubytování a degustace přímo ve sklepě",
      tagline: "Vína s příběhem, sklep s duší, pohostinnost srdcem.",
      description: "V samém srdci vinařské obce Čejkovice se nachází útulný sklep Vinařství MiQueen – místo, kde se potkává poctivé ekologické vinohradnictví, špičková kvalita vín a atmosféra, na kterou se nezapomíná.",
      image: "/fotky/cejkoviceposledni.jpg",
      address: "Za Valama 938, 696 15 Čejkovice",
      capacity: "až 20 osob na degustaci, 15 lůžek ubytování",
      features: [
        "Řízená degustace s výkladem",
        "Aktuální sortiment MiQueen",
        "Archivní vína ROVENIUS",
        "Stylové sklepní prostředí",
        "Degustační menu na míru",
        "Autentická atmosféra"
      ],
      accommodation: [
        { icon: Home, text: "15 lůžek přímo v objektu" },
        { icon: Trees, text: "Zahrada, gril, venkovní relax" },
        { icon: MapPin, text: "Další ubytování do 100 m od sklepa" }
      ],
      occasions: [
        "Rodinné oslavy a přátelská setkání",
        "Firemní akce a teambuildingy",
        "Tematické degustace",
        "Vinařské víkendy"
      ],
      nearby: [
        "T. G. Masarykovo muzeum",
        "Sonnentor",
        "Bylinkové stezky",
        "Cyklotrasy Jižní Moravou"
      ],
      url: "https://shop.miqueen.cz/degustace-cejkovice/",
      color: "#10B981"
    },
    {
      id: 3,
      title: "Degustace potmě Brno",
      subtitle: "Zapojte smysly jinak",
      tagline: "Když se zhasne světlo, rozsvítí se chuť.",
      description: "Pravidelné degustace potmě, při kterých se zcela ponoříte do světa chutí a vůní. Bez zrakového vjemu vnímáte víno intenzivněji – a každý doušek se stává dobrodružstvím.",
      image: "/fotky/20240628024036423.jpeg",
      address: "Chrlické náměstí 1/4, Brno-Chrlice",

      specialFeatures: [
        { icon: EyeOff, text: "Trénink smyslů" },
        { icon: Music, text: "Tichá atmosféra" },
        { icon: Wine, text: "Sklepní mystika" }
      ],
      highlight: true,
      url: "https://shop.miqueen.cz/degustace-potme-brno/",
      color: "#1F2937",
      capacity: ""
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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: paperColor }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
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
            <Wine className="w-8 h-8" style={{ color: accentColor }} />
            <div className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
          </motion.div>

          <motion.h2 
            className="text-4xl lg:text-6xl font-light text-gray-800 mb-6"
            variants={fadeInUp}
          >
            <span style={{ color: accentColor }}>Degustační</span> zážitky
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Vinařství MiQueen nabízí skvělé zážitkové degustace svých vín z ekologické vinohradnické produkce, 
            která jsou oceňovaná na mnoha výstavách u nás i v zahraničí. Degustaci vín s výkladem si můžete užít 
            buď ve stylové sklepní vinárně v Brně-Chrlicích nebo v tradičním moravském sklípku v Čejkovicích 
            i s možností ubytování. Těšíme se na společná setkání, zábavu s spoustu vinných i nevinných zážitků.
          </motion.p>
        </motion.div>

        {/* Degustace Cards - 3 sekce */}
        <motion.div 
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {degustaceCards.map((card, index) => (
            <motion.div
              key={card.id}
              variants={fadeInUp}
              className={`bg-white rounded-3xl overflow-hidden border-2 ${
                card.highlight ? 'border-gray-800' : 'border-gray-200'
              } hover:shadow-2xl transition-all duration-500`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className={`relative h-[400px] lg:h-auto ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-3">
                      <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full flex items-center gap-2">
                        <MapPin className="w-4 h-4" style={{ color: card.color }} />
                        <span className="font-semibold text-gray-900 text-sm">{card.address}</span>
                      </div>
                      <div className="px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full flex items-center gap-2">
                        <Users className="w-4 h-4 text-white" />
                        <span className="text-white text-sm font-medium">{card.capacity}</span>
                      </div>
                      {card.price && (
                        <div className="px-4 py-2 backdrop-blur-sm rounded-full text-white font-bold text-lg" style={{ backgroundColor: card.color }}>
                          {card.price}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {card.symbols && (
                    <div className="absolute top-6 right-6">
                      <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                        <span className="text-2xl">{card.symbols}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Side */}
                <div className={`p-8 lg:p-12 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xl font-medium mb-3" style={{ color: card.color }}>
                    {card.subtitle}
                  </p>
                  <p className="text-lg italic text-gray-600 mb-4">
                    {card.tagline}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Features */}
                  {card.features && (
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" style={{ color: card.color }} />
                        Ideální pro
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {card.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: card.color }}></div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Wines */}
                  {card.wines && (
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Wine className="w-5 h-5" style={{ color: card.color }} />
                        Vína a sortiment
                      </h4>
                      <div className="space-y-2">
                        {card.wines.map((wine, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Star className="w-4 h-4 mt-1 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{wine}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Equipment */}
                  {card.equipment && (
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Technické vybavení</h4>
                      <div className="space-y-2">
                        {card.equipment.map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <div key={idx} className="flex items-center gap-3">
                              <IconComp className="w-4 h-4" style={{ color: card.color }} />
                              <span className="text-gray-700 text-sm">{item.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Accommodation */}
                  {card.accommodation && (
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Ubytování</h4>
                      <div className="space-y-2">
                        {card.accommodation.map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <div key={idx} className="flex items-center gap-3">
                              <IconComp className="w-4 h-4" style={{ color: card.color }} />
                              <span className="text-gray-700 text-sm">{item.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Occasions */}
                  {card.occasions && (
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Skvělé pro</h4>
                      <div className="flex flex-wrap gap-2">
                        {card.occasions.map((occasion, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1.5 rounded-full text-xs font-medium text-white"
                            style={{ backgroundColor: card.color }}
                          >
                            {occasion}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Nearby Attractions */}
                  {card.nearby && (
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">V okolí navštivte</h4>
                      <div className="flex flex-wrap gap-2">
                        {card.nearby.map((place, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-700"
                          >
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Special Features */}
                  {card.specialFeatures && (
                    <div className="mb-6 p-6 rounded-2xl" style={{ backgroundColor: `${card.color}10` }}>
                      <div className="space-y-3">
                        {card.specialFeatures.map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <div key={idx} className="flex items-center gap-3">
                              <IconComp className="w-5 h-5" style={{ color: card.color }} />
                              <span className="text-gray-900 font-medium">{item.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white rounded-full font-semibold transition-all hover:shadow-lg hover:scale-105"
                    style={{ backgroundColor: card.color }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Rezervovat {card.title}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          className="mt-20 bg-gradient-to-br from-white via-white to-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Wine className="w-16 h-16 mx-auto mb-6" style={{ color: accentColor }} />
          
          <h3 className="text-3xl lg:text-4xl font-light text-gray-800 mb-4">
            Máte zájem o <span style={{ color: accentColor }}>degustaci</span>?
          </h3>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Kontaktujte nás a domluvíme termín i program na míru vašim představám
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.a
              href="mailto:info@miqueen.cz"
              whileHover={{ scale: 1.05 }}
              className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#ab8754] transition-all duration-300 hover:shadow-xl"
            >
              <Mail className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ color: accentColor }} />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">E-mail</h4>
              <p className="text-gray-600 mb-2">Napište nám</p>
              <p className="text-lg font-bold" style={{ color: accentColor }}>info@miqueen.cz</p>
            </motion.a>

            <motion.a
              href="tel:+420731610344"
              whileHover={{ scale: 1.05 }}
              className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#ab8754] transition-all duration-300 hover:shadow-xl"
            >
              <Phone className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ color: accentColor }} />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Telefon</h4>
              <p className="text-gray-600 mb-2">Zavolejte nám</p>
              <p className="text-lg font-bold" style={{ color: accentColor }}>+420 731 610 344</p>
            </motion.a>
          </div>

          <p className="mt-8 text-gray-500 text-sm">
            Sledujte nás na <a href="https://www.facebook.com/vinarstvi.miqueen/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[#ab8754]">Facebook @vinarstvi.miqueen</a> a <a href="https://www.instagram.com/vinarstvi.miqueen/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[#ab8754]">Instagram @vinarstvi.miqueen</a>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default DegustaceSection;