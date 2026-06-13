import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ServiceDetail } from '@/components/service-detail'
import { CtaBand } from '@/components/cta-band'
import { getService } from '@/lib/services'

const service = getService('operaciones-portuarias')!

export const metadata: Metadata = {
  title: 'Operaciones Portuarias | LBH Colombia',
  description:
    'Supervisión de cargue, descargue, estiba y maniobras con personal técnico en muelle. Reportes operativos en tiempo real en los 7 puertos de Colombia.',
  alternates: { canonical: 'https://www.lbhcolombia.com/servicios/operaciones-portuarias' },
}

export default function OperacionesPortuariasPage() {
  return (
    <>
      <PageHero
        eyebrowKey="nav.services"
        titleKey="route.port"
        leadKey="route.port.short"
        crumbKey="route.port"
      />
      <ServiceDetail service={service} />
      <CtaBand />
    </>
  )
}
