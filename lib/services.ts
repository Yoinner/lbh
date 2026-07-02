// NOTE: Icons are referenced by string name (not component references) so that
// ServiceDef objects remain fully serializable when passed from Server
// Components to Client Components. Resolve the icon via `iconMap` inside a
// Client Component using the `iconName` field.
export type ServiceIconName = 'agency' | 'logistics' | 'port' | 'customs' | 'husbandry'

export interface ServiceDef {
  slug: string
  href: string
  labelKey: string
  shortKey: string
  leadKey: string
  benefitKeys: string[]
  image: string
  iconName: ServiceIconName
  /** wa.me number for this service's dedicated WhatsApp line */
  whatsappNumber: string
  /** Human-readable phone display for this service */
  whatsappDisplay: string
}

export const SERVICES: ServiceDef[] = [
  {
    slug: 'agencia-maritima',
    href: '/servicios/agencia-maritima',
    labelKey: 'route.agency',
    shortKey: 'route.agency.short',
    leadKey: 'sd.agency.lead',
    benefitKeys: ['sd.agency.b1', 'sd.agency.b2', 'sd.agency.b3', 'sd.agency.b4', 'sd.agency.b5'],
    image: '/service-agency.png',
    iconName: 'agency',
    whatsappNumber: '573166914871',
    whatsappDisplay: '+57 316 691 4871',
  },
  {
    slug: 'agentedecargainternacional',
    href: '/servicios/agentedecargainternacional',
    labelKey: 'route.logistics',
    shortKey: 'route.logistics.short',
    leadKey: 'sd.logistics.lead',
    benefitKeys: ['sd.logistics.b1', 'sd.logistics.b2', 'sd.logistics.b3', 'sd.logistics.b4', 'sd.logistics.b5'],
    image: '/agente2.png',
    iconName: 'logistics',
    whatsappNumber: '573160184100',
    whatsappDisplay: '+57 316 018 4100',
  },
  {
    slug: 'husbandry-services',
    href: '/servicios/husbandry-services',
    labelKey: 'route.husbandry',
    shortKey: 'route.husbandry.short',
    leadKey: 'sd.husbandry.lead',
    benefitKeys: [
      'sd.husbandry.b1',
      'sd.husbandry.b2',
      'sd.husbandry.b3',
      'sd.husbandry.b4',
      'sd.husbandry.b5',
      'sd.husbandry.b6',
    ],
    image: '/service-husbandry.png',
    iconName: 'husbandry',
    whatsappNumber: '573166914871',
    whatsappDisplay: '+57 316 691 4871',
  },
  {
    slug: 'logistica',
    href: '/servicios/agentedecargainternacional',
    labelKey: 'route.logistics.alternative',
    shortKey: 'route.logistics.short',
    leadKey: 'sd.logistics.lead',
    benefitKeys: ['sd.logistics.b1', 'sd.logistics.b2', 'sd.logistics.b3', 'sd.logistics.b4', 'sd.logistics.b5'],
    image: '/agente2.png',
    iconName: 'logistics',
    whatsappNumber: '573160184100',
    whatsappDisplay: '+57 316 018 4100',
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
