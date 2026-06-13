import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ServiceDetail } from '@/components/service-detail'
import { CtaBand } from '@/components/cta-band'
import { getService } from '@/lib/services'

const service = getService('logistica')!

export const metadata: Metadata = {
  title: 'Logística | LBH Colombia',
  description:
    'Coordinación de carga de extremo a extremo: granel seco y líquido, carga proyecto, OOG y breakbulk. Optimización logística en los puertos de Colombia.',
  alternates: { canonical: 'https://www.lbhcolombia.com/servicios/logistica' },
}

export default function LogisticaPage() {
  return (
    <>
      <PageHero
        eyebrowKey="nav.services"
        titleKey="route.logistics"
        leadKey="route.logistics.short"
        crumbKey="route.logistics"
      />
      <ServiceDetail service={service} />
      <CtaBand />
    </>
  )
}
