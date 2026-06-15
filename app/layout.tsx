import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'

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
  title: 'LBH Colombia | Agencia Naviera — Ship Agency & Logística Marítima',
  description:
    'LBH Colombia — Agencia Naviera con 30 años de excelencia en 7 puertos estratégicos. Agenciamiento marítimo, logística, operaciones portuarias y aduanas. BASC y TRACE certificados.',
  keywords: [
    'agencia naviera Colombia',
    'ship agency Colombia',
    'logística marítima',
    'operaciones portuarias',
    'agente de aduanas',
    'Barranquilla',
    'Cartagena',
    'Santa Marta',
    'agente marítimo',
  ],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.lbhcolombia.com/',
  },
  openGraph: {
    title: 'LBH Colombia | Agencia Naviera & Logística Marítima',
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
  colorScheme: 'light',
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LBH Colombia',
  description:
    'Agencia naviera que ofrece agenciamiento marítimo, logística, operaciones portuarias y aduanas en 7 puertos colombianos',
  url: 'https://www.lbhcolombia.com',
  logo: 'https://www.lbhcolombia.com/logo.png',
  foundingDate: '1994',
  areaServed: 'Colombia',
  telephone: '+57-317-579-8972',
  email: 'opz3@lbhcolombia.com',
  sameAs: [
    'https://www.instagram.com/lbhcolombia',
    'https://www.linkedin.com/company/lbh-colombia-s-a-s-ship-agency',
  ],
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
      className={`${inter.variable} ${playfair.variable} bg-background`}
    >
      <body className="bg-background font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <LanguageProvider>
          <div className="relative flex min-h-screen flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppFloat />
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
