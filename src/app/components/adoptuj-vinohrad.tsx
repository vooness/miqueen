"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { 
  Heart, Grape, Wine, Gift, Check, ChevronDown, ChevronUp, 
  Star, ShieldCheck, ArrowRight} from "lucide-react";

const AdoptujVinohradLuxury = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  
  // Konstanty pro design
  const accentColor = "#ab8754";
  const bgColor = "#fefbea"; // Požadovaná béžová všude
  const textColor = "#1a1a1a"; // Téměř černá pro maximální kontrast

  // Intersection Observer pro odhalování prvků
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Načtení videa
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const onPlay = () => setVideoLoaded(true);
      video.addEventListener('canplay', onPlay, { once: true });
    }
  }, []);

  const scrollToPackages = () => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // DATA - Přesně podle zadání
  const packages = [
    {
      id: 0,
      title: "Malý vinař",
      description: "Ideální vstup do světa vinařství",
      heads: 12,
      bottles: 12,
      deliveries: "2x ročně (6+6 lahví)",
      price: "4 990 Kč",
      isPopular: false,
      giftText: "2x sklenice + vývrtka",
      features: [
        "12 hlav révy s jmenovkou",
        "Certifikát vlastníka",
        "Pravidelný newsletter",
        "Osobní návštěva vinohradu"
      ]
    },
    {
      id: 1,
      title: "Zlatý střed",
      description: "Nejoblíbenější volba našich klientů",
      heads: 24,
      bottles: 24,
      deliveries: "4x ročně (po 6 lahvích)",
      price: "8 690 Kč",
      isPopular: true,
      giftText: "4x sklenice + vývrtka",
      features: [
        "24 hlav révy s jmenovkou",
        "Certifikát vlastníka",
        "Pravidelný newsletter",
        "Přístup do VIP skupiny",
        "Pozvánka na akce"
      ]
    },
    {
      id: 2,
      title: "Velkostatkář",
      description: "Pro maximální zážitek z Moravy",
      heads: 36,
      bottles: 36,
      deliveries: "6x ročně (po 6 lahvích)",
      price: "9 900 Kč",
      isPopular: false,
      giftText: "6x sklenic + vývrtka",
      features: [
        "36 hlav révy s jmenovkou",
        "Certifikát vlastníka",
        "Pravidelný newsletter",
        "VIP péče a servis",
        "Soukromá degustace"
      ]
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-[#ab8754] selection:text-white" style={{ backgroundColor: bgColor, color: textColor }}>
      
      {/* CSS pro animace */}
      <style dangerouslySetInnerHTML={{__html: `
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1); }
        .reveal.active { opacity: 1; transform: translateY(0); }
        .glass-card { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.5); }
      `}} />

      {/* 1. HERO SECTION - Čistý design s videem */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Levá strana: Text (Cols 5) */}
          <div className="lg:col-span-5 reveal z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-[#ab8754] rounded-full">
              <Star size={12} fill={accentColor} stroke="none" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#ab8754]">Limitovaná nabídka 2025</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif mb-6 leading-[1.1]">
              Staňte se <br/>
              <span className="italic" style={{ color: accentColor }}>majitelem</span> vinohradu
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
              Adoptujte hlavy révy na Pálavě. Získejte <strong>vlastní víno</strong>, jméno na vinici a zážitek, který trvá celý rok.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToPackages}
                className="px-8 py-4 bg-[#ab8754] text-white text-lg font-bold rounded-xl shadow-xl hover:bg-[#9a7848] transition-colors flex items-center justify-center gap-2"
              >
                Vybrat adopci <ArrowRight size={20} />
              </button>
              <div className="flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-gray-600 border border-[#ab8754]/30 rounded-xl">
                <ShieldCheck size={18} className="text-[#ab8754]" /> Garance spokojenosti
              </div>
            </div>

            {/* Trust Strip */}
            <div className="mt-10 pt-8 border-t border-[#ab8754]/20 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-[#ab8754]">500+</div>
                <div className="text-xs text-gray-600 font-bold uppercase">Rodin</div>
              </div>
              <div className="text-center border-l border-[#ab8754]/20">
                <div className="font-serif text-2xl font-bold text-[#ab8754]">12-36</div>
                <div className="text-xs text-gray-600 font-bold uppercase">Lahví vína</div>
              </div>
              <div className="text-center border-l border-[#ab8754]/20">
                <div className="font-serif text-2xl font-bold text-[#ab8754]">365</div>
                <div className="text-xs text-gray-600 font-bold uppercase">Dní radosti</div>
              </div>
            </div>
          </div>

          {/* Pravá strana: Video (Cols 7) */}
          <div className="lg:col-span-7 reveal delay-200 relative">
            <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
               <video
                  ref={videoRef}
                  className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                  autoPlay muted loop playsInline controls
                  poster="https://shop.miqueen.cz/user/documents/upload/sklenicesvyvrtkou.jpg"
                >
                  <source src="https://shop.miqueen.cz/user/documents/upload/adoptuj-vinohrad.webm" type="video/webm" />
                </video>
                {/* Překryv pokud se video nenačte hned */}
                <div className={`absolute inset-0 bg-[#eaddc5] flex items-center justify-center transition-opacity duration-500 ${videoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                  <div className="w-12 h-12 border-4 border-[#ab8754] border-t-transparent rounded-full animate-spin"></div>
                </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 hidden lg:block bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-gray-100">
              <p className="font-serif text-xl italic text-[#ab8754] mb-2">&quot;Skvělý dárek!&quot;</p>
              <p className="text-sm text-gray-600">Nejčastěji kupováno jako dárek k narozeninám či výročí. Certifikát přijde ihned.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION - "Proč to děláme" */}
      <section className="py-16 px-4 reveal">
        <div className="max-w-6xl mx-auto bg-white rounded-[2rem] p-8 lg:p-12 shadow-sm border border-[#ab8754]/10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 bg-[#fefbea] rounded-full flex items-center justify-center mb-4">
                 <Wine size={32} strokeWidth={1.5} color={accentColor} />
               </div>
               <h3 className="text-lg font-bold mb-2">Vína MiQueen</h3>
               <p className="text-gray-600 text-sm">Pravidelné zásilky oceňovaných vín z Pálavy až k vašim dveřím.</p>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 bg-[#fefbea] rounded-full flex items-center justify-center mb-4">
                 <Heart size={32} strokeWidth={1.5} color={accentColor} />
               </div>
               <h3 className="text-lg font-bold mb-2">Jméno na vinohradu</h3>
               <p className="text-gray-600 text-sm">Každý řádek má svou cedulku. Vyberte si jméno, které na ní bude stát.</p>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 bg-[#fefbea] rounded-full flex items-center justify-center mb-4">
                 <Grape size={32} strokeWidth={1.5} color={accentColor} />
               </div>
               <h3 className="text-lg font-bold mb-2">Zážitek na rok</h3>
               <p className="text-gray-600 text-sm">Sledujte vývoj hroznů, přijeďte na návštěvu a staňte se součástí příběhu.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. PRICING - JÁDRO STRÁNKY */}
      <section id="pricing" className="py-16 lg:py-24 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl lg:text-5xl font-serif mb-4">Vyberte si svůj <span style={{color: accentColor}}>balíček</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Všechny balíčky jsou na 12 měsíců. Platba je jednorázová.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, i) => (
              <div 
                key={i} 
                className={`reveal relative flex flex-col rounded-3xl p-8 transition-transform duration-300 ${
                  pkg.isPopular 
                    ? 'bg-white shadow-2xl ring-1 ring-[#ab8754] scale-100 md:scale-105 z-10' 
                    : 'bg-white shadow-lg border border-gray-100 hover:-translate-y-1'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ab8754] text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                    NEJOBLÍBENĚJŠÍ
                  </div>
                )}

                <div className="mb-6 text-center">
                   <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                   <p className="text-sm text-gray-500 h-10">{pkg.description}</p>
                </div>

                <div className="text-center mb-8">
                  <span className="text-4xl font-serif font-bold" style={{color: accentColor}}>{pkg.price}</span>
                  <span className="text-gray-400 text-sm block mt-1">/ rok</span>
                </div>

                {/* Vizuální oddělovač */}
                <div className="flex items-center justify-center gap-4 mb-8 p-4 bg-[#fefbea] rounded-xl">
                   <div className="text-center">
                     <span className="block font-bold text-lg">{pkg.heads}</span>
                     <span className="text-xs text-gray-500 uppercase">Hlav</span>
                   </div>
                   <div className="w-px h-8 bg-[#ab8754]/20"></div>
                   <div className="text-center">
                     <span className="block font-bold text-lg">{pkg.bottles}</span>
                     <span className="text-xs text-gray-500 uppercase">Lahví</span>
                   </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <Check size={18} className="text-[#ab8754] flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                  {/* Zvýrazněný dárek v seznamu */}
                  <li className="flex items-start gap-3 text-sm font-bold text-[#ab8754] bg-[#ab8754]/10 p-2 rounded-lg">
                    <Gift size={18} className="flex-shrink-0 mt-0.5" />
                    <span>Zdarma: {pkg.giftText}</span>
                  </li>
                </ul>

                <a 
                  href="https://shop.miqueen.cz/adoptuj-vinohrad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                    pkg.isPopular 
                      ? 'bg-[#ab8754] text-white hover:bg-[#9a7848] shadow-lg' 
                      : 'bg-white border-2 border-gray-200 text-gray-800 hover:border-[#ab8754] hover:text-[#ab8754]'
                  }`}
                >
                  Zvolit balíček
                </a>
                <p className="text-center text-xs text-gray-400 mt-4">{pkg.deliveries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BONUS SECTION - Vizuální a přehledná */}
      <section className="py-16 px-4 reveal">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-[#ab8754]/20">
            <div className="grid lg:grid-cols-2">
              
              {/* Vizualizace produktu - OPRAVA IMG TAGU NA NEXT/IMAGE */}
              <div className="relative h-[350px] lg:h-auto bg-[#fefbea] p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#ab8754]/10">
                <Image 
                  src="https://shop.miqueen.cz/user/documents/upload/sklenicesvyvrtkou.jpg" 
                  alt="Dárkový set" 
                  width={500}
                  height={500}
                  unoptimized // Zabrání problémům s konfigurací domény pro Next.js
                  className="max-h-full max-w-full object-contain mix-blend-multiply w-auto h-auto"
                />
                <div className="absolute top-6 left-6 bg-[#ab8754] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Dárek ke každé adopci
                </div>
              </div>

              {/* Informace */}
              <div className="p-8 lg:p-16 flex flex-col justify-center">
                <h3 className="text-3xl font-serif mb-4">Uvítací balíček <span style={{color: accentColor}}>zdarma</span></h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Aby byl váš zážitek kompletní, hned na začátku vám pošleme profesionální vinařské vybavení v hodnotě 890 Kč.
                </p>

                {/* Ikony dárků */}
                <div className="flex gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#fefbea] flex items-center justify-center border border-[#ab8754]/20">
                      <Wine size={20} color={accentColor} />
                    </div>
                    <div>
                      <div className="font-bold">Sklenice</div>
                      <div className="text-xs text-gray-500">Gravírované</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-12 h-12 rounded-full bg-[#fefbea] flex items-center justify-center border border-[#ab8754]/20">
                      <Gift size={20} color={accentColor} />
                    </div>
                    <div>
                      <div className="font-bold">Vývrtka</div>
                      <div className="text-xs text-gray-500">Someliérská</div>
                    </div>
                  </div>
                </div>

                {/* Tabulka množství - velmi čistá */}
                <div className="bg-[#fefbea] rounded-xl p-6">
                  <h4 className="font-bold text-sm uppercase tracking-wide text-gray-500 mb-4 border-b border-[#ab8754]/10 pb-2">Počet sklenic v balíčku</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Malý vinař (12 hlav)</span>
                      <span className="font-bold">2 ks + vývrtka</span>
                    </div>
                     <div className="flex justify-between text-[#ab8754]">
                      <span className="font-bold">Zlatý střed (24 hlav)</span>
                      <span className="font-bold">4 ks + vývrtka</span>
                    </div>
                     <div className="flex justify-between">
                      <span>Velkostatkář (36 hlav)</span>
                      <span className="font-bold">6 ks + vývrtka</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ - Clean Accordion */}
      <section className="py-16 px-4 max-w-3xl mx-auto reveal mb-20">
        <h2 className="text-3xl font-serif text-center mb-10">Časté dotazy</h2>
        <div className="space-y-3">
          <AccordionItem question="Kdy obdržím certifikát?" answer="Ihned po zaplacení vám přijde elektronická verze v PDF, kterou si můžete vytisknout nebo přeposlat jako dárek." />
          <AccordionItem question="Kdy chodí víno?" answer="První balíček s dárky odesíláme ihned. Další zásilky následují v pravidelných intervalech dle zvoleného balíčku (jaro, léto, podzim, zima)." />
          <AccordionItem question="Mohu si vybrat odrůdu?" answer="Ano! Po výběru balíčku budete mít možnost specifikovat preferovanou odrůdu z naší aktuální nabídky." />
        </div>
        <div className="text-center mt-8">
           <a href="/kontakty/" className="text-sm font-bold text-[#ab8754] border-b border-[#ab8754] hover:text-black hover:border-black transition-colors pb-0.5">Mám jiný dotaz</a>
        </div>
      </section>

      {/* 6. MOBILE STICKY BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold text-gray-400">Cena od</span>
          <span className="font-bold text-xl text-[#1a1a1a]">4 990 Kč</span>
        </div>
        <button 
          onClick={scrollToPackages}
          className="bg-[#ab8754] text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-transform"
        >
          Adoptovat
        </button>
      </div>

    </div>
  );
};

// Pomocná komponenta pro FAQ
const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-[#ab8754]/10 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#fefbea] transition-colors"
      >
        <span className="font-bold text-gray-800">{question}</span>
        {isOpen ? <ChevronUp size={18} className="text-[#ab8754]" /> : <ChevronDown size={18} className="text-gray-400" />}
      </button>
      <div 
        className={`px-5 text-gray-600 text-sm leading-relaxed transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {answer}
      </div>
    </div>
  );
};

export default AdoptujVinohradLuxury;