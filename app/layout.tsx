import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lbhcolombia.com'),
  title: 'LBH Colombia | Maritime Agency — Ship Agency & Husbandry Services',
  description:
    'LBH Colombia — Agencia Naviera con 30 años de excelencia operacional en 7 puertos estratégicos. Ship Agency, Husbandry, Freight Forwarding. BASC y TRACE certificados.',
  keywords: [
    'agencia naviera Colombia',
    'ship agency Colombia',
    'husbandry services',
    'Barranquilla',
    'Cartagena',
    'Santa Marta',
    'agente marítimo',
    'port clearance Colombia',
  ],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.lbhcolombia.com/',
    languages: {
      es: 'https://www.lbhcolombia.com/',
      en: 'https://www.lbhcolombia.com/home',
    },
  },
  openGraph: {
    title: 'LBH Colombia | Maritime Agency — Ship Agency & Husbandry Services',
    description:
      '30 años de excelencia en agenciamiento naviero. 7 puertos estratégicos. BASC certificado. Red internacional LBH en 30+ países.',
    type: 'website',
    url: 'https://www.lbhcolombia.com/',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A1628',
  width: 'device-width',
  initialScale: 1,
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LBH Colombia',
  description:
    'Maritime agency providing ship agency, husbandry and freight forwarding services across 7 Colombian ports',
  url: 'https://www.lbhcolombia.com',
  logo: 'https://www.lbhcolombia.com/logo.png',
  foundingDate: '1994',
  areaServed: 'Colombia',
  telephone: '+57-315-736-0015',
  email: 'opz3@lbhcolombia.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CO',
    addressLocality: 'Barranquilla',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} dark bg-background`}
    >
      <body className="bg-background font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
