// app/miqueen-mini/[slug]/page.tsx
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { wines } from '@/app/components/wineData';
import { Star, ShoppingCart, Thermometer, MapPin, ChefHat, User, ArrowLeft } from 'lucide-react';

// Helper funkce pro vytvoření slug
const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Získej všechny mini produkty
const getMiniWines = () => {
  return wines.filter(wine => {
    const isMiniVolume = wine.volume && wine.volume < 250;
    const isMiniName = wine.name.toLowerCase().includes('mini');
    const isSet = wine.category === 'set' || wine.id === 38 || wine.id === 39;
    return isMiniVolume || isMiniName || isSet;
  });
};

// Získej produkt podle slug
const getWineBySlug = (slug: string) => {
  const miniWines = getMiniWines();
  return miniWines.find(wine => createSlug(wine.name) === slug);
};

// Generate static params pro všechny mini produkty
export function generateStaticParams() {
  const miniWines = getMiniWines();
  return miniWines.map((wine) => ({
    slug: createSlug(wine.name),
  }));
}

// Dynamic metadata
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const wine = getWineBySlug(slug);

  if (!wine) {
    return {
      title: 'Produkt nenalezen | MiQueen Mini',
    };
  }

  const isSet = wine.category === 'set';
  const productType = isSet ? 'Degustační set' : 'Mini víno';
  const volume = isSet ? `4x ${wine.volume}ml` : `${wine.volume}ml`;

  return {
    title: `${wine.name} ${volume} | MiQueen Mini - ${wine.price} Kč`,
    description: `${wine.description} ${productType} v balení ${volume} za ${wine.price} Kč. ${wine.variety}, ${wine.vintage}. Kvalitní moravské víno z vinařství MiQueen.`,
    keywords: [
      wine.name.toLowerCase(),
      `${wine.variety.toLowerCase()} mini`,
      `mini ${wine.category}`,
      `${wine.vintage} mini`,
      'miqueen mini',
      'mini víno',
      'kabelkové víno',
      `${wine.volume}ml víno`,
      isSet ? 'degustační set' : 'single serve wine',
    ],
    openGraph: {
      title: `${wine.name} - ${productType} ${volume}`,
      description: wine.description,
      url: `https://miqueen.cz/miqueen-mini/${slug}`,
      type: 'website',
      siteName: 'Vinařství MiQueen',
      locale: 'cs_CZ',
      images: [
        {
          url: `https://miqueen.cz${wine.image}`,
          width: 800,
          height: 1200,
          alt: wine.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${wine.name} - ${wine.price} Kč`,
      description: wine.description,
      images: [`https://miqueen.cz${wine.image}`],
    },
    alternates: {
      canonical: `https://miqueen.cz/miqueen-mini/${slug}`,
    },
    other: {
      'product:price:amount': wine.price.toString(),
      'product:price:currency': 'CZK',
      'product:availability': 'in stock',
      'product:condition': 'new',
      'product:brand': 'MiQueen',
      'product:category': 'Mini Wine',
    },
  };
}

// Page component
export default async function MiniWineProductPage({ params }: PageProps) {
  const { slug } = await params;
  const wine = getWineBySlug(slug);

  if (!wine) {
    notFound();
  }

  const isSet = wine.category === 'set';
  const productType = isSet ? 'Degustační set' : 'Mini víno';

  // Product Schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `https://miqueen.cz/miqueen-mini/${slug}#product`,
    name: wine.name,
    description: wine.description,
    image: `https://miqueen.cz${wine.image}`,
    brand: {
      '@type': 'Brand',
      name: 'MiQueen',
      url: 'https://miqueen.cz',
    },
    offers: {
      '@type': 'Offer',
      price: wine.price,
      priceCurrency: 'CZK',
      availability: 'https://schema.org/InStock',
      url: wine.shopUrl,
      seller: {
        '@type': 'Organization',
        name: 'Vinařství MiQueen',
      },
    },
    aggregateRating: wine.rating ? {
      '@type': 'AggregateRating',
      ratingValue: wine.rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: Math.floor(wine.rating * 20),
    } : undefined,
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Objem',
        value: `${wine.volume}ml`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Ročník',
        value: wine.vintage.toString(),
      },
      wine.alcohol ? {
        '@type': 'PropertyValue',
        name: 'Alkohol',
        value: `${wine.alcohol}%`,
      } : null,
    ].filter(Boolean),
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Domů',
        item: 'https://miqueen.cz',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'MiQueen Mini',
        item: 'https://miqueen.cz/miqueen-mini',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: wine.name,
        item: `https://miqueen.cz/miqueen-mini/${slug}`,
      },
    ],
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="min-h-screen bg-[#fefbea]">
        {/* Breadcrumbs */}
        <div className="bg-gray-900 text-white py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="hover:text-[#ab8754] transition-colors">
                Domů
              </Link>
              <span className="text-gray-500">›</span>
              <Link href="/vina/vsechna-vina" className="hover:text-[#ab8754] transition-colors">
                Vína
              </Link>
              <span className="text-gray-500">›</span>
              <Link href="/miqueen-mini" className="hover:text-[#ab8754] transition-colors">
                MiQueen mini
              </Link>
              <span className="text-gray-500">›</span>
              <span className="text-gray-400">{wine.name}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 mt-20">
          {/* Back button - jednoduchý link */}
          <Link
            href="/miqueen-mini"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#ab8754] transition-colors mb-6 md:mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zpět na vína</span>
          </Link>

          {/* Product content */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Image side */}
            <div className="relative bg-white rounded-2xl p-8 md:p-12">
              <div className="relative aspect-[3/4] max-w-md mx-auto">
                <Image
                  src={wine.image}
                  alt={wine.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {wine.badge && (
                <div
                  className="absolute top-6 left-6 px-5 py-2.5 rounded-full text-sm font-bold text-white shadow-xl"
                  style={{
                    backgroundColor:
                      wine.badge === 'new'
                        ? '#10B981'
                        : wine.badge === 'bestseller'
                        ? '#ab8754'
                        : wine.badge === 'tip'
                        ? '#F59E0B'
                        : '#6366F1',
                  }}
                >
                  {wine.badge === 'new' ? 'Novinka' : wine.badge === 'bestseller' ? 'Bestseller' : wine.badge === 'tip' ? 'Tip' : 'Ocenění'}
                </div>
              )}
            </div>

            {/* Content side */}
            <div>
              {/* Header */}
              <div className="mb-6">
                <p className="text-[#ab8754] font-medium mb-2">{productType}</p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                  {wine.name}
                </h1>
                <p className="text-lg md:text-xl text-gray-600">{wine.variety}</p>

                {/* Rating */}
                {wine.rating && (
                  <div className="flex items-center gap-2 mt-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            wine.rating && i < Math.floor(wine.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 font-medium">({wine.rating.toFixed(1)})</span>
                  </div>
                )}
              </div>

              {/* Price section */}
              <div className="bg-gradient-to-r from-[#ab875410] to-transparent p-6 rounded-xl mb-6">
                <p className="text-gray-600 mb-2">Cena</p>
                <p className="text-4xl font-bold text-gray-900">
                  {wine.price} <span className="text-2xl">Kč</span>
                </p>
                <p className="text-gray-600 mt-2">
                  {isSet ? `Degustační set 4x ${wine.volume}ml` : `Objem: ${wine.volume}ml`}
                </p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Popis</h2>
                <p className="text-gray-600 leading-relaxed">{wine.description}</p>
              </div>

              {/* Wine details grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-gray-500 text-sm mb-1">Ročník</p>
                  <p className="text-gray-900 font-semibold">{wine.vintage}</p>
                </div>

                {wine.alcohol && (
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-gray-500 text-sm mb-1">Alkohol</p>
                    <p className="text-gray-900 font-semibold">{wine.alcohol}%</p>
                  </div>
                )}

                {wine.quality && (
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-gray-500 text-sm mb-1">Kvalita</p>
                    <p className="text-gray-900 font-semibold">{wine.quality}</p>
                  </div>
                )}

                {wine.dryness && (
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-gray-500 text-sm mb-1">Sladkost</p>
                    <p className="text-gray-900 font-semibold">{wine.dryness}</p>
                  </div>
                )}
              </div>

              {/* Additional info */}
              <div className="space-y-4 mb-8">
                {wine.region && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#ab8754] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-500 text-sm">Region</p>
                      <p className="text-gray-900">{wine.region}</p>
                    </div>
                  </div>
                )}

                {wine.servingTemp && (
                  <div className="flex items-start gap-3">
                    <Thermometer className="w-5 h-5 text-[#ab8754] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-500 text-sm">Teplota servírování</p>
                      <p className="text-gray-900">{wine.servingTemp}</p>
                    </div>
                  </div>
                )}

                {wine.foodPairing && wine.foodPairing.length > 0 && (
                  <div className="flex items-start gap-3">
                    <ChefHat className="w-5 h-5 text-[#ab8754] mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-gray-500 text-sm mb-2">Doporučujeme k</p>
                      <div className="flex flex-wrap gap-2">
                        {wine.foodPairing.map((food, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-[#ab875410] text-[#ab8754] rounded-full text-sm font-medium"
                          >
                            {food}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {wine.winemaker && (
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-[#ab8754] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-500 text-sm">Vinařství</p>
                      <p className="text-gray-900">{wine.winemaker}</p>
                    </div>
                  </div>
                )}
              </div>

              {wine.notes && (
                <div className="bg-[#ab875410] p-4 rounded-xl mb-8">
                  <p className="text-[#ab8754] font-semibold mb-2">Poznámka vinaře</p>
                  <p className="text-gray-700 text-sm">{wine.notes}</p>
                </div>
              )}

              {/* CTA Button */}
              <a
                href={wine.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 bg-[#ab8754] text-white rounded-full font-semibold text-lg transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Koupit na e-shopu za {wine.price} Kč
              </a>

              <p className="text-center text-gray-500 text-sm mt-4">
                Doprava od 69 Kč • Doručení do 2-3 dnů
              </p>
            </div>
          </div>

          {/* Related Products Section */}
          <div className="mt-16 md:mt-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Další <span className="text-[#ab8754]">mini produkty</span>
              </h2>
              <p className="text-gray-600">Objevte další vína z naší mini kolekce</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {getMiniWines()
                .filter(w => w.id !== wine.id)
                .slice(0, 4)
                .map((relatedWine) => {
                  const relatedSlug = createSlug(relatedWine.name);
                  const isRelatedSet = relatedWine.category === 'set';
                  
                  return (
                    <Link
                      key={relatedWine.id}
                      href={`/miqueen-mini/${relatedSlug}`}
                      className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#ab8754]/50 transition-all duration-300 shadow-md hover:shadow-xl"
                    >
                      {/* Image */}
                      <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                        <Image
                          src={relatedWine.image}
                          alt={relatedWine.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        
                        {relatedWine.badge && (
                          <div
                            className="absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-semibold text-white shadow-lg"
                            style={{
                              backgroundColor:
                                relatedWine.badge === 'new'
                                  ? '#10B981'
                                  : relatedWine.badge === 'bestseller'
                                  ? '#ab8754'
                                  : '#F59E0B',
                            }}
                          >
                            {relatedWine.badge === 'new' ? 'Novinka' : relatedWine.badge === 'bestseller' ? 'Bestseller' : 'Tip'}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-3 md:p-4">
                        {/* Title */}
                        <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem] group-hover:text-[#ab8754] transition-colors">
                          {relatedWine.name}
                        </h3>

                        {/* Volume badge */}
                        <div className="mb-3">
                          <span
                            className="text-xs font-medium px-2 py-1 rounded-full"
                            style={{ backgroundColor: '#ab875410', color: '#ab8754' }}
                          >
                            {isRelatedSet ? `Set 4x ${relatedWine.volume}ml` : `Mini ${relatedWine.volume}ml`}
                          </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Cena</p>
                            <p className="text-lg md:text-xl font-bold text-gray-900">
                              {relatedWine.price} <span className="text-sm">Kč</span>
                            </p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#ab8754] flex items-center justify-center">
                            <ArrowLeft className="w-4 h-4 text-white rotate-180" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>

            {/* View All Button */}
            <div className="text-center mt-8 md:mt-12">
              <Link
                href="/miqueen-mini"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#ab8754] text-[#ab8754] rounded-full font-semibold text-lg transition-all hover:bg-[#ab8754] hover:text-white hover:shadow-lg"
              >
                Zobrazit všechny mini produkty
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Export config
export const dynamic = 'force-static';
export const dynamicParams = false;