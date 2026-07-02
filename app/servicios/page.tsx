import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ServicesGrid } from '@/components/services-grid'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Servicios | LBH Colombia — Agenciamiento Marítimo, Agente de Carga Internacional / Logística y Husbandry Services',
  description:
    'LBH Colombia ofrece agenciamiento marítimo, agente de carga internacional / logística y husbandry services en los 9 puertos estratégicos de Colombia. Parte de la red LBH en 28+ países.',
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
        backgroundImage="/servicios-hero-bg.png"
        backgroundImageMode="cover"
      />
      <ServicesGrid />
      <CtaBand />
    </>
  )
}
