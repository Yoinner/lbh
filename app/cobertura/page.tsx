import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { OperationsMap } from '@/components/operations-map'
import { Network } from '@/components/network'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Cobertura | LBH Colombia — 7 Puertos Estratégicos',
  description:
    'Presencia operativa permanente en los 7 puertos estratégicos de Colombia en ambas costas, conectada con la red internacional LBH en 30+ países.',
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
      />
      <OperationsMap />
      <Network />
      <CtaBand />
    </>
  )
}
