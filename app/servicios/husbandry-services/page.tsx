import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ServiceDetail } from '@/components/service-detail'
import { CtaBand } from '@/components/cta-band'
import { getService } from '@/lib/services'

const service = getService('husbandry-services')!

export const metadata: Metadata = {
  title: 'Husbandry Services | LBH Colombia',
  description:
    'Soporte integral al buque y tripulación en puerto: crew change management, provisiones, Cash to Master, coordinación médica, transporte y requerimientos especiales en los 7 puertos estratégicos de Colombia.',
  alternates: { canonical: 'https://www.lbhcolombia.com/servicios/husbandry-services' },
}

export default function HusbandryServicesPage() {
  return (
    <>
      <PageHero
        eyebrowKey="nav.services"
        titleKey="route.husbandry"
        leadKey="route.husbandry.short"
        crumbKey="route.husbandry"
      />
      <ServiceDetail service={service} />
      <CtaBand />
    </>
  )
}
