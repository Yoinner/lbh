// Central commercial configuration — edit contact channels in one place.

export const SITE = {
  whatsappNumber: '573017912617', // +57 301 791 2617
  instagram: 'lbhcolombia',
  instagramUrl: 'https://instagram.com/lbhcolombia',
  email: 'opz3@lbhcolombia.com',
  phoneDisplay: '+57 301 791 2617',
  emergencyPhone: '+57 315 736 0015',
} as const

/** Build a WhatsApp click-to-chat URL with a prefilled message. */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/** Default commercial intent messages (kept short and conversion-oriented). */
export const WA_MESSAGES = {
  general: 'Hola LBH Colombia. Quisiera recibir asesoría comercial sobre sus servicios marítimos.',
  quote: 'Hola LBH Colombia. Me gustaría solicitar una cotización para una operación marítima.',
  advisor: 'Hola LBH Colombia. Quisiera hablar con un asesor comercial.',
  solution: 'Hola LBH Colombia. Necesito una solución logística para una operación portuaria.',
  agency: 'Hola LBH Colombia. Necesito información sobre Agenciamiento Marítimo.',
  logistics: 'Hola LBH Colombia. Necesito información sobre servicios de Logística.',
  port: 'Hola LBH Colombia. Necesito información sobre Operaciones Portuarias.',
  customs: 'Hola LBH Colombia. Necesito información sobre servicios de Aduanas.',
} as const

export interface FormPayload {
  nombre: string
  empresa: string
  celular: string
  correo: string
  servicio: string
  descripcion: string
}

/** Compose the structured WhatsApp message from the commercial form. */
export function composeFormMessage(p: FormPayload): string {
  return [
    'Hola LBH Colombia.',
    '',
    `Nombre: ${p.nombre}`,
    `Empresa: ${p.empresa}`,
    `Celular: ${p.celular}`,
    `Correo: ${p.correo}`,
    `Servicio: ${p.servicio}`,
    'Descripción:',
    p.descripcion,
    '',
    'Quisiera recibir asesoría comercial.',
  ].join('\n')
}
