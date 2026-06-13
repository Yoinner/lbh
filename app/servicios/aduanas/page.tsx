import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ServiceDetail } from '@/components/service-detail'
import { CtaBand } from '@/components/cta-band'
import { getService } from '@/lib/services'

const service = getService('aduanas')!

export const metadata: Metadata = {
  title: 'Aduanas | LBH Colombia',
  description:
    'Despacho aduanero de importación y exportación, cumplimiento normativo y coordinación con la DIAN. Gestión documental certificada en Colombia.',
  alternates: { canonical: 'https://www.lbhcolombia.com/servicios/aduanas' },
}

export default function AduanasPage() {
  return (
    <>
      <PageHero
        eyebrowKey="nav.services"
        titleKey="route.customs"
        leadKey="route.customs.short"
        crumbKey="route.customs"
      />
      <ServiceDetail service={service} />
      <CtaBand />
    </>
  )
}
