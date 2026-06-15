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

/** Base WhatsApp number used when no specific service is selected. */
export const DEFAULT_WHATSAPP = '573175798972'

/**
 * WhatsApp routing by service slug. The contact form picks the destination
 * number based on the selected service so each lead reaches the right team.
 */
export const WHATSAPP_BY_SERVICE: Record<string, string> = {
  'agencia-maritima': '573157457075',
  logistica: '573165295744',
  'operaciones-portuarias': '573158984080',
  aduanas: '573183627911',
  'husbandry-services': '573160104325',
}

/** Resolve the WhatsApp number for a given service slug. */
export function whatsappForService(slug: string): string {
  return WHATSAPP_BY_SERVICE[slug] ?? DEFAULT_WHATSAPP
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
