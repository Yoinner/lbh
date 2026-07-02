// Central commercial configuration — edit contact channels in one place.

export const SITE = {
  // Base WhatsApp / contact number for the whole site.
  whatsappNumber: '573166914871', // +57 316 691 4871
  phoneDisplay: '+57 316 691 4871',
  instagram: 'lbhcolombia',
  instagramUrl: 'https://www.instagram.com/lbhcolombia',
  linkedin: 'LBH Colombia S.A.S. Ship Agency',
  linkedinUrl: 'https://www.linkedin.com/company/lbh-colombia-s-a-s-ship-agency',
  email: 'opz3@lbhcolombia.com',
  emailMarketing: 'commercial@lbhcolombia.com',
  emailLogistica: 'logistica@lbhcolombia.com',
  // Additional phone numbers
  phoneAgencyDisplay: '+57 316 691 4871',
  phoneFreightDisplay: '+57 316 018 4100',
} as const

// ─── Structured social links ─────────────────────────────────────────────────

export const SOCIAL_LINKS = [
  {
    id: 'instagram',
    label: '@lbhcolombia',
    url: 'https://www.instagram.com/lbhcolombia',
    iconName: 'instagram' as const,
  },
  {
    id: 'linkedin',
    label: 'LBH Colombia S.A.S. Ship Agency',
    url: 'https://www.linkedin.com/company/lbh-colombia-s-a-s-ship-agency',
    iconName: 'linkedin' as const,
  },
] as const

// ─── Email addresses ──────────────────────────────────────────────────────────

export const EMAILS = {
  /** Main operations / general inquiries */
  operations: 'opz3@lbhcolombia.com',
  /** Commercial */
  commercial: 'commercial@lbhcolombia.com',
  /** Logistics team */
  logistica: 'logistica@lbhcolombia.com',
} as const

// ─── Certifications & memberships ────────────────────────────────────────────
// Logos live in /public/certifications/ — drop the matching PNG to activate.

export interface CertDef {
  name: string
  description: string
  logo: string
}

export const CERTIFICATIONS: CertDef[] = [
  {
    name: 'BASC',
    description: 'Business Alliance for Secure Commerce',
    logo: '/certifications/basc.png',
  },
  {
    name: 'TRACE',
    description: 'TRACE Anti-Bribery Compliance',
    logo: '/certifications/trace.png',
  },
  {
    name: 'FITAC',
    description: 'Federación Colombiana de Agentes Logísticos en Comercio Internacional',
    logo: '/certifications/fitac.png',
  },
  {
    name: 'AmCham',
    description: 'Cámara de Comercio Colombo Americana',
    logo: '/certifications/amcham.png',
  },
  {
    name: 'ANALDEX',
    description: 'Asociación Nacional de Comercio Exterior',
    logo: '/certifications/analdex.png',
  },
  {
    name: 'Holland House Colombia',
    description: 'Cámara de Comercio Colombo-Holandesa',
    logo: '/certifications/holland-house.png',
  },
  {
    name: 'CCS / RUC',
    description: 'Consejo Colombiano de Seguridad — Registro Uniforme para Contratistas',
    logo: '/certifications/ccs-ruc.png',
  },
  {
    name: 'Cámara Colombo China',
    description: 'Cámara Colombo China de Inversión y Comercio',
    logo: '/certifications/camara-colombo-china.png',
  },
  {
    name: 'PEP',
    description: 'Promotora de Excelencia Personal',
    logo: '/certifications/pep.png',
  },
  // AFERRI removed — membership no longer active
]

// ─── WhatsApp routing ─────────────────────────────────────────────────────────

/** Base WhatsApp number used when no specific service is selected. */
export const DEFAULT_WHATSAPP = '573166914871'

/**
 * WhatsApp routing by service slug. The contact form picks the destination
 * number based on the selected service so each lead reaches the right team.
 */
export const WHATSAPP_BY_SERVICE: Record<string, { number: string; display: string }> = {
  'agencia-maritima': { number: '573166914871', display: '+57 316 691 4871' },
  'agentedecargainternacional': { number: '573160184100', display: '+57 316 018 4100' },
  logistica:          { number: '573160184100', display: '+57 316 018 4100' },
  'husbandry-services': { number: '573166914871', display: '+57 316 691 4871' },
}

/** Resolve the WhatsApp wa.me number for a given service slug. */
export function whatsappForService(slug: string): string {
  return WHATSAPP_BY_SERVICE[slug]?.number ?? DEFAULT_WHATSAPP
}

/** Resolve the human-readable WhatsApp display string for a given service slug. */
export function whatsappDisplayForService(slug: string): string {
  return WHATSAPP_BY_SERVICE[slug]?.display ?? SITE.phoneDisplay
}

/** Build a WhatsApp click-to-chat URL with a prefilled message. */
export function waLink(message: string, number: string = SITE.whatsappNumber): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

/** Default commercial intent messages (kept short and conversion-oriented). */
export const WA_MESSAGES = {
  general: 'Hola LBH Colombia. Quisiera recibir asesoría comercial sobre sus servicios marítimos.',
  advisor: 'Hola LBH Colombia. Quisiera hablar con un asesor comercial.',
} as const

export interface FormPayload {
  nombre: string
  empresa: string
  celular: string
  correo: string
  /** Service slug (used for WhatsApp routing). */
  servicio: string
  descripcion: string
}

/**
 * Compose the structured, professional WhatsApp message from the commercial
 * form. `servicioLabel` is the human-readable service name to display.
 */
export function composeFormMessage(p: FormPayload, servicioLabel: string): string {
  return [
    'Hola, equipo LBH Colombia.',
    '',
    `Mi nombre es: ${p.nombre}`,
    `Empresa: ${p.empresa}`,
    `Celular: ${p.celular}`,
    `Correo: ${p.correo}`,
    `Servicio requerido: ${servicioLabel}`,
    '',
    'Descripción de la necesidad:',
    p.descripcion,
    '',
    'Mensaje enviado desde el sitio web de LBH Colombia.',
  ].join('\n')
}
