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
  title: 'LBH Colombia | Agenciamiento Marítimo y Agente de Carga Internacional',
  description:
    'LBH Colombia — Agenciamiento Marítimo y Agente de Carga Internacional con 30 años de excelencia en 11 puertos estratégicos. BASC y TRACE certificados.',
  keywords: [
    'agenciamiento marítimo Colombia',
    'agente de carga internacional',
    'maritime agency Colombia',
    'freight forwarding',
    'agente marítimo',
    'Barranquilla',
    'Cartagena',
    'Santa Marta',
    'operaciones marítimas',
  ],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.lbhcolombia.com/',
  },
  openGraph: {
    title: 'LBH Colombia | Agenciamiento Marítimo y Agente de Carga Internacional',
    description:
      '30 años de excelencia en agenciamiento marítimo y carga internacional. 11 puertos estratégicos. BASC certificado. Red internacional LBH en 28+ países.',
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
    'Agenciamiento Marítimo y Agente de Carga Internacional en 11 puertos estratégicos colombianos',
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
