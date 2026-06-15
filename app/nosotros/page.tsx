import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { AboutValues } from '@/components/about-values'
import { TrustMetrics } from '@/components/trust-metrics'
import { CertificationsMarquee } from '@/components/certifications-marquee'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Nosotros | LBH Colombia — Agencia Naviera',
  description:
    'Conozca a LBH Colombia: 30 años protegiendo los intereses de navieras y operadores en los 7 puertos estratégicos del país, como parte de la red internacional LBH.',
  alternates: { canonical: 'https://www.lbhcolombia.com/nosotros' },
}

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrowKey="aboutpage.eyebrow"
        titleKey="about.title"
        leadKey="aboutpage.lead"
        crumbKey="nav.about"
        backgroundImage="/lbh-logo.png"
      />
      <AboutValues />
      <TrustMetrics />
      <CertificationsMarquee
        withBackground
        backgroundImage="/certifications-nosotros-bg.png"
        eyebrowKey="certs.activeLabel"
        titleKey="certs.title"
        subtitleKey="certs.subtitle"
      />
      <CtaBand />
    </>
  )
}
