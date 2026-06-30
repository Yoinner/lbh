import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ServiceDetail } from '@/components/service-detail'
import { CtaBand } from '@/components/cta-band'
import { LogisticaSection } from '@/components/logistica-section'
import { getService } from '@/lib/services'

const service = getService('logistica')!

export const metadata: Metadata = {
  title: 'Agente de carga internacional (cod. 1218) | LBH Colombia',
  description:
    'Servicios de Logistica integrados. Integramos transporte marítimo, terrestre y aéreo con coordinación documental, seguimiento operativo y acompañamiento especializado.',
  alternates: { canonical: 'https://www.lbhcolombia.com/servicios/logistica' },
}

export default function LogisticaPage() {
  return (
    <>
      <PageHero
        eyebrowKey="nav.services"
        titleKey="route.logistics"
        leadKey="sd.logistics.lead"
        crumbKey="route.logistics"
      />
      <ServiceDetail service={service} hideRelated />
      <CtaBand />
      <LogisticaSection />
    </>
  )
}
