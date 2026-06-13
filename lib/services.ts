import {
  Anchor,
  Boxes,
  Ship,
  FileCheck,
  type LucideIcon,
} from 'lucide-react'

export interface ServiceDef {
  slug: string
  href: string
  labelKey: string
  shortKey: string
  leadKey: string
  benefitKeys: string[]
  image: string
  icon: LucideIcon
  waKey: 'agency' | 'logistics' | 'port' | 'customs'
}

export const SERVICES: ServiceDef[] = [
  {
    slug: 'agencia-maritima',
    href: '/servicios/agencia-maritima',
    labelKey: 'route.agency',
    shortKey: 'route.agency.short',
    leadKey: 'sd.agency.lead',
    benefitKeys: ['sd.agency.b1', 'sd.agency.b2', 'sd.agency.b3', 'sd.agency.b4', 'sd.agency.b5'],
    image: '/sector-container.png',
    icon: Anchor,
    waKey: 'agency',
  },
  {
    slug: 'logistica',
    href: '/servicios/logistica',
    labelKey: 'route.logistics',
    shortKey: 'route.logistics.short',
    leadKey: 'sd.logistics.lead',
    benefitKeys: ['sd.logistics.b1', 'sd.logistics.b2', 'sd.logistics.b3', 'sd.logistics.b4', 'sd.logistics.b5'],
    image: '/sector-bulk.png',
    icon: Boxes,
    waKey: 'logistics',
  },
  {
    slug: 'operaciones-portuarias',
    href: '/servicios/operaciones-portuarias',
    labelKey: 'route.port',
    shortKey: 'route.port.short',
    leadKey: 'sd.port.lead',
    benefitKeys: ['sd.port.b1', 'sd.port.b2', 'sd.port.b3', 'sd.port.b4', 'sd.port.b5'],
    image: '/sector-project.png',
    icon: Ship,
    waKey: 'port',
  },
  {
    slug: 'aduanas',
    href: '/servicios/aduanas',
    labelKey: 'route.customs',
    shortKey: 'route.customs.short',
    leadKey: 'sd.customs.lead',
    benefitKeys: ['sd.customs.b1', 'sd.customs.b2', 'sd.customs.b3', 'sd.customs.b4', 'sd.customs.b5'],
    image: '/sector-tanker.png',
    icon: FileCheck,
    waKey: 'customs',
  },
]

export function getService(slug: string): ServiceDef | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

export const NAV_LINKS = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.about', href: '/nosotros' },
  // services handled via dropdown
  { key: 'nav.coverage', href: '/cobertura' },
  { key: 'nav.contact', href: '/contacto' },
]
