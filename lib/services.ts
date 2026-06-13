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
  icon: LucideIcon
  waKey: 'agency' | 'logistics' | 'port' | 'customs'
}

export const SERVICES: ServiceDef[] = [
  {
    slug: 'agencia-maritima',
    href: '/servicios/agencia-maritima',
    labelKey: 'route.agency',
    shortKey: 'route.agency.short',
    icon: Anchor,
    waKey: 'agency',
  },
  {
    slug: 'logistica',
    href: '/servicios/logistica',
    labelKey: 'route.logistics',
    shortKey: 'route.logistics.short',
    icon: Boxes,
    waKey: 'logistics',
  },
  {
    slug: 'operaciones-portuarias',
    href: '/servicios/operaciones-portuarias',
    labelKey: 'route.port',
    shortKey: 'route.port.short',
    icon: Ship,
    waKey: 'port',
  },
  {
    slug: 'aduanas',
    href: '/servicios/aduanas',
    labelKey: 'route.customs',
    shortKey: 'route.customs.short',
    icon: FileCheck,
    waKey: 'customs',
  },
]

export const NAV_LINKS = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.about', href: '/nosotros' },
  // services handled via dropdown
  { key: 'nav.coverage', href: '/cobertura' },
  { key: 'nav.contact', href: '/contacto' },
]
