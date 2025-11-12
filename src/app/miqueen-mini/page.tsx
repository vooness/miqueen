// app/miqueen-mini/page.tsx
import type { Metadata } from 'next';
import MiQueenMiniPage from '../components/mini-queen';

export const metadata: Metadata = {
  title: 'MiQueen Mini | Mini vína 187-200ml - Vinařství MiQueen',
  description: 'MiQueen Mini - prémiová vína v kabelkovém formátu 187-200ml. ✓ Ideální porce ✓ Dárkové sety ✓ MIMOSA koktejl ✓ Frizzante mini ✓ Doprava od 69 Kč',
  keywords: [
    'miqueen mini',
    'mini vína',
    'malé lahve vína',
    'mini lahvičky vína',
    'vína 187ml',
    'vína 200ml',
    'piccolo vína',
    'kabelkové víno',
    'single serve wine',
    'jednoporční víno',
    'mini prosecco',
    'mini frizzante',
    'mini růžové víno',
    'mini červené víno',
    'mini bílé víno',
    'mimosa mini',
    'mimosa koktejl',
    'vinný koktejl',
    'dárkový set mini vín',
    'degustační set mini',
    'víno na piknik',
    'víno na výlet',
    'víno do kabelky',
    'moravská vína',
    'vinařství mikulov',
  ],
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://miqueen.cz/miqueen-mini',
    siteName: 'Vinařství MiQueen',
    title: 'MiQueen Mini - Prémiová vína v kabelkovém formátu | 187-200ml',
    description: 'Objevte MiQueen Mini - kvalitní moravská vína v praktickém balení 187-200ml. Ideální na cesty, piknik nebo jako originální dárek. Od 69 Kč.',
    images: [
      {
        url: 'https://miqueen.cz/miqueen-mini-og.jpg',
        width: 1200,
        height: 630,
        alt: 'MiQueen Mini - Mini vína 187-200ml',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@miqueen_wines',
    title: 'MiQueen Mini - Kvalitní víno v kabelkovém formátu',
    description: 'Prémiová moravská vína v praktických lahvičkách 187-200ml. Ideální porce, žádný zbytek. Od 69 Kč.',
    images: ['https://miqueen.cz/miqueen-mini-twitter.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://miqueen.cz/miqueen-mini',
  },
  other: {
    'product:category': 'Mini Wines',
    'product:price:amount': '69-339',
    'product:price:currency': 'CZK',
    'product:availability': 'in stock',
    'rating_value': '4.7',
    'rating_count': '167',
  },
};

export default function Page() {
  return (
    <>
      {/* Strukturovaná data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            // ProductCollection Schema
            {
              '@context': 'https://schema.org',
              '@type': 'ProductCollection',
              '@id': 'https://miqueen.cz/miqueen-mini#collection',
              name: 'MiQueen Mini - Kolekce mini vín',
              description: 'Prémiová moravská vína v praktickém kabelkovém formátu 187-200ml. Ideální porce pro jednu osobu.',
              url: 'https://miqueen.cz/miqueen-mini',
              numberOfItems: 10,
            },

            // FAQPage Schema
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Jaká je velikost MiQueen Mini lahviček?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'MiQueen Mini vína jsou dostupná ve dvou velikostech: 187ml (klasická mini láhev) a 200ml (speciální produkty jako MIMOSA). To odpovídá přibližně jedné až jedné a půl skleničce vína.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Kolik stojí MiQueen Mini vína?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ceny MiQueen Mini vín začínají na 69 Kč za klasická vína (187ml), speciální produkty jako MIMOSA stojí 89 Kč (200ml) a degustační sety 4 lahviček od 309 Kč.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Lze koupit MiQueen Mini jednotlivě nebo jen po kartonech?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'MiQueen Mini vína lze koupit jak jednotlivě, tak v kartonech po 24 kusech pro lepší cenu. Speciální produkty jako MIMOSA se prodávají po 12 kusech.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Na jaké příležitosti jsou MiQueen Mini vína vhodná?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'MiQueen Mini jsou ideální na pikniky, výlety, festivaly, párty, jako welcome drink na svatbách, firemní dárky, nebo když chcete ochutnat víno bez nutnosti otevírat celou láhev.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Co je MIMOSA mini?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'MIMOSA mini je inovativní vinný koktejl kombinující kvalitní Sauvignon Frizzante se 100% přírodní pomerančovou šťávou. Obsahuje 8% alkoholu a je dodáván v 200ml lahvičkách.',
                  },
                },
              ],
            },

            // BreadcrumbList Schema
            {
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
                  name: 'Vína',
                  item: 'https://miqueen.cz/vina',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'MiQueen Mini',
                  item: 'https://miqueen.cz/miqueen-mini',
                },
              ],
            },
          ]),
        }}
      />

      <MiQueenMiniPage />
    </>
  );
}

export const dynamic = 'force-static';