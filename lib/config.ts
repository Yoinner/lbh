// Central commercial configuration — edit contact channels in one place.

export const SITE = {
  // Base WhatsApp / contact number for the whole site.
  whatsappNumber: '573175798972', // +57 317 579 8972
  phoneDisplay: '+57 317 579 8972',
  instagram: 'lbhcolombia',
  instagramUrl: 'https://www.instagram.com/lbhcolombia',
  linkedin: 'LBH Colombia S.A.S. Ship Agency',
  linkedinUrl: 'https://www.linkedin.com/company/lbh-colombia-s-a-s-ship-agency',
  email: 'opz3@lbhcolombia.com',
  emailMarketing: 'marketing@lbhcolombia.com',
  emailLogistica: 'logistica@lbhcolombia.com',
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
  /** Marketing & commercial */
  marketing: 'marketing@lbhcolombia.com',
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
    name: 'ISO',
    description: 'ISO International Standards Certification',
    logo: '/certifications/iso.png',
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
]

// ─── WhatsApp routing ─────────────────────────────────────────────────────────

/** Base WhatsApp number used when no specific service is selected. */
export const DEFAULT_WHATSAPP = '573175798972'

/**
 * WhatsApp routing by service slug. The contact form picks the destination
 * number based on the selected service so each lead reaches the right team.
 */
export const WHATSAPP_BY_SERVICE: Record<string, { number: string; display: string }> = {
  'agencia-maritima': { number: '573157457075', display: '+57 315 745 7075' },
  logistica:          { number: '573165295744', display: '+57 316 529 5744' },
  'operaciones-portuarias': { number: '573158984080', display: '+57 315 898 4080' },
  aduanas:            { number: '573183627911', display: '+57 318 362 7911' },
  'husbandry-services': { number: '573160104325', display: '+57 316 010 4325' },
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
