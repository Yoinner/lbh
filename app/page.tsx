import { Suspense } from 'react'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { FleetShowcase } from '@/components/fleet-showcase'
import { WhyLbh } from '@/components/why-lbh'
import { OperationsMap } from '@/components/operations-map'
import { Clients } from '@/components/clients'
import { TeamMarquee } from '@/components/team-marquee'
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
      <WhyLbh />
      <OperationsMap />
      <Clients />
      <TeamMarquee />
      <TrustMetrics />
      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
      <CtaBand />
    </>
  )
}
