import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ServiceDetail } from '@/components/service-detail'
import { CtaBand } from '@/components/cta-band'
import { getService } from '@/lib/services'

const service = getService('agencia-maritima')!

export const metadata: Metadata = {
  title: 'Agencia Marítima | LBH Colombia',
  description:
    'Representación integral del buque ante autoridades portuarias, aduaneras y marítimas. Port clearance, practicaje, cuentas de desembolso y atención 24/7 en 7 puertos.',
  alternates: { canonical: 'https://www.lbhcolombia.com/servicios/agencia-maritima' },
}

export default function AgenciaMaritimaPage() {
  return (
    <>
      <PageHero
        eyebrowKey="nav.services"
        titleKey="route.agency"
        leadKey="route.agency.short"
        crumbKey="route.agency"
      />
      <ServiceDetail service={service} />
      <CtaBand />
    </>
  )
}
