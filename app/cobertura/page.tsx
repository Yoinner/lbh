import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { OperationsMap } from '@/components/operations-map'
import { Network } from '@/components/network'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Cobertura Nacional | LBH Colombia — 9 Puertos Estratégicos en Ambas Costas',
  description:
    'Cobertura nacional permanente en los puertos estratégicos de Colombia: Costa Caribe y Pacífico. Sedes comerciales en Bogotá y Medellín. Red LBH en 28+ países desde 1994.',
  alternates: { canonical: 'https://www.lbhcolombia.com/cobertura' },
}

export default function CoberturaPage() {
  return (
    <>
      <PageHero
        eyebrowKey="coverage.eyebrow"
        titleKey="coverage.title"
        leadKey="coverage.subtitle"
        crumbKey="nav.coverage"
        backgroundImage="/cobertura-hero-bg.png"
        backgroundImageMode="cover"
      />
      <OperationsMap />
      <Network />
      <CtaBand />
    </>
  )
}
