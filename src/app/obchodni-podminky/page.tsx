import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FileText, ShoppingCart, CreditCard, Truck, AlertCircle, Shield, Scale, Download } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Obchodní podmínky */}
      <section className="py-20 lg:py-28 bg-[#fefbea]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 mt-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <Scale className="w-8 h-8" style={{ color: "#ab8754" }} />
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-light text-gray-800 mb-4">
              Obchodní <span className="font-normal" style={{ color: "#ab8754" }}>podmínky</span>
            </h1>
            <p className="text-lg text-gray-600">
              Účinné od 1. května 2024
            </p>
          </div>

          {/* Obsah */}
          <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 space-y-10">
            
            {/* Úvod */}
            <div className="bg-gradient-to-r from-[#ab875410] to-transparent p-6 rounded-2xl border border-[#ab875420]">
              <p className="text-gray-700 leading-relaxed">
                Tyto všeobecné obchodní podmínky (&quot;<strong>Podmínky</strong>&quot;) společnosti <strong>Vinařství MiQueen s.r.o.</strong>, 
                se sídlem Za Valama 938, 696 15 Čejkovice, IČO 17942187, zapsaná v obchodním rejstříku pod sp. zn. 
                C 132202/KSBR Krajský soud v Brně, e-mail <a href="mailto:info@miqueen.cz" className="text-[#ab8754] hover:underline">info@miqueen.cz</a>, 
                telefonní číslo <a href="tel:+420731610344" className="text-[#ab8754] hover:underline">+420 731 610 344</a> upravují 
                v souladu s ustanovením § 1751 odst. 1 zákona č. 89/2012 Sb., občanský zákoník, vzájemná práva a povinnosti 
                kupujících a prodávajícího.
              </p>
            </div>

            {/* I. DEFINICE */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3" style={{ color: "#ab8754" }}>
                <FileText className="w-6 h-6" />
                I. Základní pojmy
              </h2>
              <div className="grid gap-3">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="font-semibold text-gray-900">Cena</p>
                  <p className="text-gray-600 text-sm">Finanční částka, kterou budete hradit za Zboží</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="font-semibold text-gray-900">Cena za dopravu</p>
                  <p className="text-gray-600 text-sm">Finanční částka za doručení Zboží včetně balení</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="font-semibold text-gray-900">Celková cena</p>
                  <p className="text-gray-600 text-sm">Součet Ceny a Ceny za dopravu</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="font-semibold text-gray-900">Objednávka</p>
                  <p className="text-gray-600 text-sm">Váš neodvolatelný návrh na uzavření smlouvy o koupi Zboží</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="font-semibold text-gray-900">Uživatelský účet</p>
                  <p className="text-gray-600 text-sm">Účet umožňující uchování údajů a historie objednávek</p>
                </div>
              </div>
            </div>

            {/* II. OBECNÁ USTANOVENÍ */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3" style={{ color: "#ab8754" }}>
                <AlertCircle className="w-6 h-6" />
                II. Obecná ustanovení a poučení
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="text-[#ab8754] font-bold text-xl">1.</span>
                  <p>Koupě Zboží je možná jen přes webové rozhraní E-shopu.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#ab8754] font-bold text-xl">2.</span>
                  <p>Při nákupu Zboží je Vaše povinnost poskytnout všechny informace správně a pravdivě.</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
                  <span className="text-amber-600 font-bold text-xl">⚠️</span>
                  <p><strong>Důležité:</strong> Nakupující potvrzuje, že jeho věk je 18 let a vyšší.</p>
                </div>
              </div>
            </div>

            {/* III. UZAVŘENÍ SMLOUVY */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3" style={{ color: "#ab8754" }}>
                <ShoppingCart className="w-6 h-6" />
                III. Uzavření smlouvy
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-2xl border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-3">📝 Obsah objednávky:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Informace o nakupovaném Zboží</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Informace o Ceně a způsobu platby</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Identifikační a kontaktní údaje</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Požadovaný způsob doručení Zboží</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-green-700">✅ Potvrzení objednávky:</strong> Vaši objednávku Vám v co nejkratší době 
                    potvrdíme zprávou odeslanou na Vaši e-mailovou adresu. Potvrzením objednávky dochází k uzavření smlouvy.
                  </p>
                </div>

                <div className="p-6 bg-red-50 rounded-2xl border border-red-200">
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-red-700">⚠️ Zjevně chybná cena:</strong> V případě zjevně chybné ceny nejsme povinni 
                    Vám Zboží za tuto cenu dodat. Za zjevnou chybu se považuje například situace, kdy cena neodpovídá obvyklé ceně 
                    nebo chybí či přebývá cifra.
                  </p>
                </div>
              </div>
            </div>

            {/* IV. UŽIVATELSKÝ ÚČET */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3" style={{ color: "#ab8754" }}>
                <Shield className="w-6 h-6" />
                IV. Uživatelský účet
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Na základě Vaší registrace můžete přistupovat do svého uživatelského účtu, který umožňuje 
                  rychlejší objednávání a přístup k historii objednávek.
                </p>
                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
                  <h3 className="font-semibold text-gray-900 mb-3">🔐 Bezpečnost účtu:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>Uživatelský účet je osobní - neposkytujte přístup třetím osobám</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>Zachovávejte mlčenlivost ohledně přihlašovacích údajů</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>V případě zneužití neneseme odpovědnost</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>Účet můžeme zrušit při více než 1 rok nečinnosti</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* V. CENOVÉ A PLATEBNÍ PODMÍNKY */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3" style={{ color: "#ab8754" }}>
                <CreditCard className="w-6 h-6" />
                V. Cenové a platební podmínky
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Celková cena je uvedena včetně DPH včetně veškerých poplatků stanovených zákonem. 
                Platbu vyžadujeme po uzavření smlouvy a před předáním Zboží.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white border-2 border-[#ab8754] rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#ab8754] flex items-center justify-center">
                      <span className="text-white font-bold">🏦</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">Bankovní převod</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Splatnost: 14 dnů</p>
                </div>

                <div className="p-5 bg-white border-2 border-[#ab8754] rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#ab8754] flex items-center justify-center">
                      <span className="text-white font-bold">💳</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">Kartou online</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Splatnost: Ihned (přes UniCredit Bank)</p>
                </div>

                <div className="p-5 bg-white border-2 border-[#ab8754] rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#ab8754] flex items-center justify-center">
                      <span className="text-white font-bold">📦</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">Dobírka</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Platba při převzetí zboží</p>
                </div>

                <div className="p-5 bg-white border-2 border-[#ab8754] rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#ab8754] flex items-center justify-center">
                      <span className="text-white font-bold">💵</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">Hotově</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Při osobním odběru na provozovně</p>
                </div>
              </div>

              <div className="mt-6 p-6 bg-blue-50 rounded-2xl border border-blue-200">
                <p className="text-gray-700">
                  <strong>📄 Faktura:</strong> Bude vystavena v elektronické podobě po uhrazení celkové ceny 
                  a zaslána na Vaši e-mailovou adresu. Faktura bude též přiložena ke zboží.
                </p>
              </div>

              <div className="mt-6 p-6 bg-purple-50 rounded-2xl border border-purple-200">
                <p className="text-gray-700">
                  <strong>🔒 Výhrada vlastnického práva:</strong> Vlastnické právo ke zboží na Vás přechází 
                  až poté, co zaplatíte celkovou cenu a zboží převezmete.
                </p>
              </div>
            </div>

            {/* VI. DORUČENÍ ZBOŽÍ */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3" style={{ color: "#ab8754" }}>
                <Truck className="w-6 h-6" />
                VI. Doručení zboží
              </h2>
              
              <p className="text-gray-700 mb-6">
                Zboží Vám bude doručeno způsobem dle Vaší volby:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 bg-white border-2 border-gray-200 rounded-xl hover:border-[#ab8754] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏪</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Osobní odběr na provozovně</h3>
                    <p className="text-gray-600 text-sm">Za Valama 938, 696 15 Čejkovice</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white border-2 border-gray-200 rounded-xl hover:border-[#ab8754] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Výdejní místa Messenger</h3>
                    <p className="text-gray-600 text-sm">Síť výdejních míst po celé ČR</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white border-2 border-gray-200 rounded-xl hover:border-[#ab8754] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🚚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Doručení kurýrem Messenger</h3>
                    <p className="text-gray-600 text-sm">Doručení na adresu v ČR</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-amber-50 rounded-2xl border border-amber-200">
                <p className="text-gray-700 leading-relaxed">
                  <strong>⏱️ Doba doručení:</strong> Předpokládaná doba doručení zboží Vám bude sdělena 
                  v potvrzení objednávky. Doba uvedená na e-shopu je pouze orientační.
                </p>
              </div>

              <div className="mt-6 p-6 bg-red-50 rounded-2xl border border-red-200">
                <p className="text-gray-700 leading-relaxed">
                  <strong>📦 Kontrola zásilky:</strong> Po převzetí zboží je Vaše povinnost zkontrolovat 
                  neporušenost obalu a v případě závad tuto skutečnost neprodleně oznámit dopravci i nám.
                </p>
              </div>
            </div>

            {/* VII. PRÁVA Z VADNÉHO PLNĚNÍ (REKLAMACE) */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3" style={{ color: "#ab8754" }}>
                <AlertCircle className="w-6 h-6" />
                VII. Práva z vadného plnění (reklamace)
              </h2>

              <div className="space-y-6">
                <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
                  <h3 className="font-semibold text-gray-900 mb-3">✅ Záruka jakosti</h3>
                  <p className="text-gray-700">
                    Zaručujeme, že v době přechodu nebezpečí škody na zboží je zboží bez vad, 
                    má dohodnuté vlastnosti, je vhodné pro obvyklé účely a splňuje požadavky právních předpisů.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-2xl border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-4">📋 Vaše práva při podstatné vadě:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">1.</span>
                      <span>Dodání nového zboží bez vady</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">2.</span>
                      <span>Opravu zboží</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">3.</span>
                      <span>Přiměřenou slevu z ceny</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">4.</span>
                      <span>Odstoupení od smlouvy</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-transparent p-6 rounded-2xl border border-purple-200">
                  <h3 className="font-semibold text-gray-900 mb-4">📋 Vaše práva při nepodstatné vadě:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">1.</span>
                      <span>Dodání nového zboží bez vady</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">2.</span>
                      <span>Opravu zboží</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">3.</span>
                      <span>Přiměřenou slevu z ceny</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-3 italic">
                    Pokud vadu neodstraníme včas nebo odmítneme vadu odstranit, můžete od smlouvy odstoupit.
                  </p>
                </div>

                <div className="p-6 bg-[#ab875410] rounded-2xl border border-[#ab8754]">
                  <h3 className="font-semibold text-gray-900 mb-3">⏱️ Lhůty pro reklamaci</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Spotřebitelé:</strong> Práva z vadného plnění lze uplatnit u vady, která se vyskytne 
                      ve lhůtě <strong className="text-[#ab8754]">24 měsíců</strong> od převzetí zboží.
                    </p>
                    <p>
                      <strong>Podnikatelé:</strong> Vadu je třeba oznámit bez zbytečného odkladu, 
                      nejpozději do <strong className="text-[#ab8754]">3 dnů</strong> od převzetí zboží.
                    </p>
                    <p className="text-sm italic bg-white p-3 rounded-lg">
                      ℹ️ Reklamaci vyřídíme bez zbytečného odkladu, nejpozději do 30 dnů od jejího obdržení.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* VIII. ODSTOUPENÍ OD SMLOUVY */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3" style={{ color: "#ab8754" }}>
                <FileText className="w-6 h-6" />
                VIII. Odstoupení od smlouvy
              </h2>

              <div className="space-y-6">
                <div className="p-6 bg-green-50 rounded-2xl border-2 border-green-300">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🛡️</span>
                    Právo spotřebitele odstoupit od smlouvy
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Jako spotřebitel máte právo odstoupit od smlouvy <strong>bez udání důvodu ve lhůtě 14 dnů</strong> ode 
                    dne doručení zboží.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      📧 Odstoupení můžete oznámit e-mailem na <a href="mailto:info@miqueen.cz" className="text-[#ab8754] hover:underline">info@miqueen.cz</a> nebo 
                      poštou na adresu naší provozovny.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-red-50 rounded-2xl border border-red-200">
                  <h3 className="font-semibold text-gray-900 mb-3">❌ Kdy NELZE odstoupit od smlouvy:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Dodání alkoholických nápojů s cenou závislou na výchylkách trhu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Zboží upravené podle Vašeho přání nebo pro Vaši osobu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Zboží, které podléhá rychlé zkáze</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Zboží v uzavřeném obalu vyňaté z obalu (z hygienických důvodů)</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-3">💰 Vrácení peněz</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Cenu Vám vrátíme do <strong>14 dnů</strong> od odstoupení na účet, ze kterého byla připsána. 
                    Částka však nebude vrácena dříve, než nám zboží vrátíte nebo prokážete jeho odeslání. 
                    Náklady na vrácení zboží hradíte Vy.
                  </p>
                </div>
              </div>
            </div>

            {/* IX. ŘEŠENÍ SPORŮ */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3" style={{ color: "#ab8754" }}>
                <Scale className="w-6 h-6" />
                IX. Řešení sporů se spotřebiteli
              </h2>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Vyřizování stížností spotřebitelů zajišťujeme prostřednictvím e-mailu:{' '}
                  <a href="mailto:obchod@miqueen.cz" className="text-[#ab8754] hover:underline font-medium">
                    obchod@miqueen.cz
                  </a>
                </p>

                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">📋 Mimosoudní řešení sporů:</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-900">Česká obchodní inspekce</p>
                      <p className="text-sm text-gray-600">Štěpánská 567/15, 120 00 Praha 2</p>
                      <p className="text-sm text-gray-600">IČ: 000 20 869</p>
                      <a href="http://www.coi.cz" target="_blank" rel="noopener noreferrer" className="text-[#ab8754] hover:underline text-sm">
                        www.coi.cz
                      </a>
                    </div>

                    <div>
                      <p className="font-medium text-gray-900">Platforma pro řešení sporů online (ODR)</p>
                      <a href="http://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#ab8754] hover:underline text-sm">
                        ec.europa.eu/consumers/odr
                      </a>
                    </div>

                    <div>
                      <p className="font-medium text-gray-900">Evropské spotřebitelské centrum ČR</p>
                      <p className="text-sm text-gray-600">Štěpánská 567/15, 120 00 Praha 2</p>
                      <a href="http://www.evropskyspotrebitel.cz" target="_blank" rel="noopener noreferrer" className="text-[#ab8754] hover:underline text-sm">
                        www.evropskyspotrebitel.cz
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* X. ZÁVĚREČNÁ USTANOVENÍ */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ab8754" }}>
                X. Závěrečná ustanovení
              </h2>

              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  <strong>1. Aplikovatelné právo:</strong> Pokud vztah obsahuje mezinárodní prvek, bude se vždy řídit právem České republiky.
                </p>
                <p className="leading-relaxed">
                  <strong>2. Komunikace:</strong> Veškerou písemnou korespondenci si budeme doručovat elektronickou poštou.
                </p>
                <p className="leading-relaxed">
                  <strong>3. Vyšší moc:</strong> V případě vyšší moci (přírodní katastrofa, pandemie, provozní poruchy apod.) 
                  neneseme odpovědnost za škodu. Pokud stav vyšší moci trvá déle než 10 dnů, můžeme od smlouvy odstoupit.
                </p>
                <p className="leading-relaxed">
                  <strong>4. Archivace:</strong> Smlouva včetně podmínek je archivována v elektronické podobě u nás. 
                  Vždy však obdržíte potvrzení objednávky a podmínky e-mailem.
                </p>
              </div>

              <div className="mt-6 p-6 bg-[#ab875420] rounded-2xl border-2 border-[#ab8754]">
                <p className="text-gray-900 font-semibold text-center">
                  Tyto podmínky nabývají účinnosti 1. května 2024
                </p>
              </div>
            </div>

            {/* Přílohy - formuláře ke stažení */}
            <div className="border-t-2 border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-[#ab8754]" />
                Formuláře ke stažení
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <a 
                  href="/formulare/reklamacni-formular.pdf" 
                  className="flex items-center gap-3 p-4 bg-white border-2 border-gray-200 hover:border-[#ab8754] rounded-xl transition-colors"
                >
                  <FileText className="w-8 h-8 text-[#ab8754]" />
                  <div>
                    <p className="font-medium text-gray-900">Reklamační formulář</p>
                    <p className="text-xs text-gray-500">PDF ke stažení</p>
                  </div>
                </a>
                <a 
                  href="/formulare/odstoupeni-od-smlouvy.pdf" 
                  className="flex items-center gap-3 p-4 bg-white border-2 border-gray-200 hover:border-[#ab8754] rounded-xl transition-colors"
                >
                  <FileText className="w-8 h-8 text-[#ab8754]" />
                  <div>
                    <p className="font-medium text-gray-900">Odstoupení od smlouvy</p>
                    <p className="text-xs text-gray-500">PDF ke stažení</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Kontakt */}
            <div className="bg-gradient-to-r from-[#ab875420] to-transparent p-8 rounded-2xl border-2 border-[#ab8754]">
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#ab8754" }}>
                Máte otázky k obchodním podmínkám?
              </h3>
              <p className="text-gray-700 mb-6">
                Neváhejte nás kontaktovat, rádi Vám pomůžeme:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ab8754] flex items-center justify-center">
                    <span className="text-white text-lg">📧</span>
                  </div>
                  <a href="mailto:info@miqueen.cz" className="text-[#ab8754] hover:underline text-lg font-medium">
                    info@miqueen.cz
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ab8754] flex items-center justify-center">
                    <span className="text-white text-lg">📞</span>
                  </div>
                  <a href="tel:+420731610344" className="text-[#ab8754] hover:underline text-lg font-medium">
                    +420 731 610 344
                  </a>
                </div>
              </div>
            </div>

            {/* Související dokumenty */}
            <div className="border-t-2 border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📑 Související dokumenty</h3>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="/zasady-ochrany-osobnich-udaju" 
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 font-medium transition-colors"
                >
                  Zásady ochrany osobních údajů
                </a>
                <a 
                  href="/cookies" 
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 font-medium transition-colors"
                >
                  Zásady používání cookies
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}