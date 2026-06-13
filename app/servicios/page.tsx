import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ServicesGrid } from '@/components/services-grid'
import { ProcessTimeline } from '@/components/process-timeline'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Servicios | LBH Colombia — Agenciamiento, Logística, Operaciones y Aduanas',
  description:
    'Servicios marítimos integrales de LBH Colombia: agencia marítima, logística, operaciones portuarias y aduanas en los 7 puertos estratégicos del país.',
  alternates: { canonical: 'https://www.lbhcolombia.com/servicios' },
}

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrowKey="services.eyebrow"
        titleKey="services.title"
        leadKey="servicespage.lead"
        crumbKey="nav.services"
      />
      <ServicesGrid />
      <ProcessTimeline />
      <CtaBand />
    </>
  )
}
