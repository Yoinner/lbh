import { Suspense } from 'react'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { FleetShowcase } from '@/components/fleet-showcase'
import { OfficesCarousel } from '@/components/offices-carousel'
import { Network } from '@/components/network'
import { CertificationsMarquee } from '@/components/certifications-marquee'
import { TrustMetrics } from '@/components/trust-metrics'
import { ContactForm } from '@/components/contact-form'
import { CtaBand } from '@/components/cta-band'

export default function Page() {
  return (
    <>
      <Hero />
      <CertificationsMarquee
        eyebrowKey="certs.activeLabel"
        titleKey="certs.title"
        subtitleKey="certs.marqueeNote"
      />
      <Services />
      <FleetShowcase />
      <OfficesCarousel />
      <Network />
      <TrustMetrics />
      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
      <CtaBand />
    </>
  )
}
