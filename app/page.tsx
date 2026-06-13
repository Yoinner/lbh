import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { FleetShowcase } from '@/components/fleet-showcase'
import { WhyLbh } from '@/components/why-lbh'
import { OperationsMap } from '@/components/operations-map'
import { Clients } from '@/components/clients'
import { TrustMetrics } from '@/components/trust-metrics'
import { ContactForm } from '@/components/contact-form'
import { CtaBand } from '@/components/cta-band'

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <FleetShowcase />
      <WhyLbh />
      <OperationsMap />
      <Clients />
      <TrustMetrics />
      <ContactForm />
      <CtaBand />
    </>
  )
}
