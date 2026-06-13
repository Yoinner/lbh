'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type Lang = 'es' | 'en'

type Dict = Record<string, { es: string; en: string }>

const I18nContext = createContext<{
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}>({ lang: 'es', setLang: () => {}, t: (k) => k })

export const dict: Dict = {
  // Nav
  'nav.about': { es: 'Nosotros', en: 'About' },
  'nav.services': { es: 'Servicios', en: 'Services' },
  'nav.ports': { es: 'Puertos', en: 'Ports' },
  'nav.network': { es: 'Red Global', en: 'Network' },
  'nav.certs': { es: 'Certificaciones', en: 'Certifications' },
  'nav.quote': { es: 'Solicitar Cotización', en: 'Request Quote' },

  // Hero
  'hero.eyebrow': {
    es: 'Agencia Naviera — Colombia',
    en: 'Maritime Agency — Colombia',
  },
  'hero.title1': { es: 'Ingeniería Marítima de', en: 'World-Class Maritime' },
  'hero.titleEm': { es: 'Clase Mundial', en: 'Operations' },
  'hero.title2': {
    es: 'en Puertos de Colombia',
    en: 'Across Colombian Ports',
  },
  'hero.desc': {
    es: '30 años coordinando operaciones navieras de alta complejidad. 7 puertos estratégicos. Red LBH en 30+ países. Certificaciones BASC y TRACE. Disponibilidad total 24/7.',
    en: '30 years coordinating complex maritime operations. 7 strategic ports. LBH network across 30+ countries. BASC and TRACE certified. Full 24/7 availability.',
  },
  'hero.ctaPrimary': {
    es: 'Solicitar Consultoría',
    en: 'Request Consultation',
  },
  'hero.ctaSecondary': { es: 'Ver Servicios', en: 'View Services' },
  'hero.metricLive': { es: 'Operaciones en vivo', en: 'Live operations' },

  // Stats
  'stat.years': { es: 'Años de operaciones', en: 'Years of operations' },
  'stat.vessels': { es: 'Buques atendidos', en: 'Vessels serviced' },
  'stat.ports': { es: 'Puertos estratégicos', en: 'Strategic ports' },
  'stat.response': { es: 'Respuesta garantizada', en: 'Guaranteed response' },

  // Services
  'services.eyebrow': {
    es: 'Servicios Especializados',
    en: 'Specialized Services',
  },
  'services.title': {
    es: 'Operaciones Marítimas Integrales',
    en: 'Comprehensive Maritime Operations',
  },
  'services.subtitle': {
    es: 'Desde el arribo hasta el zarpe, coordinamos cada detalle de la escala con precisión técnica y disponibilidad permanente.',
    en: 'From arrival to departure, we coordinate every detail of the port call with technical precision and permanent availability.',
  },
  'services.viewFull': {
    es: 'Ver servicio completo',
    en: 'View full service',
  },

  'svc.agency.title': { es: 'Agenciamiento Naviero', en: 'Ship Agency' },
  'svc.agency.desc': {
    es: 'Representación completa ante autoridades portuarias y marítimas. Coordinación de maniobras, documentación y despacho en todos los puertos colombianos.',
    en: 'Full representation before port and maritime authorities. Maneuvering coordination, documentation and clearance at all Colombian ports.',
  },
  'svc.agency.f1': {
    es: 'Port clearance & documentación',
    en: 'Port clearance & documentation',
  },
  'svc.agency.f2': {
    es: 'Practicaje y remolcadores',
    en: 'Pilotage & towage',
  },
  'svc.agency.f3': {
    es: 'Cuentas de desembolso',
    en: 'Disbursement accounts',
  },
  'svc.agency.f4': { es: 'Aduana e inmigración', en: 'Customs & immigration' },

  'svc.husbandry.title': { es: 'Husbandry Services', en: 'Husbandry Services' },
  'svc.husbandry.desc': {
    es: 'Atención integral a tripulación y buque en puerto. Provisiones, logística de personal, asistencia médica, transporte y todos los servicios de bienestar a bordo.',
    en: 'Comprehensive vessel and crew care in port. Provisions, crew logistics, medical assistance, transportation, and all on-board welfare services.',
  },
  'svc.husbandry.f1': {
    es: 'Crew change management',
    en: 'Crew change management',
  },
  'svc.husbandry.f2': {
    es: 'Provisiones y suministros',
    en: 'Provisions & supplies',
  },
  'svc.husbandry.f3': {
    es: 'Efectivo al capitán (CTM)',
    en: 'Cash to master (CTM)',
  },
  'svc.husbandry.f4': {
    es: 'Asistencia médica 24/7',
    en: 'Medical assistance 24/7',
  },

  'svc.freight.title': { es: 'Agente de Carga', en: 'Freight Forwarding' },
  'svc.freight.desc': {
    es: 'Gestión especializada de carga a granel seca y líquida, carga proyecto y breakbulk. Optimización logística y coordinación operativa de extremo a extremo.',
    en: 'Specialized management of dry and liquid bulk, project cargo and breakbulk. Logistics optimization and end-to-end operational coordination.',
  },
  'svc.freight.f1': { es: 'Granel seco y líquido', en: 'Dry & liquid bulk' },
  'svc.freight.f2': { es: 'Carga proyecto y OOG', en: 'Project cargo & OOG' },
  'svc.freight.f3': {
    es: 'Coordinación de estiba',
    en: 'Stowage coordination',
  },
  'svc.freight.f4': {
    es: 'Documentación DG/HAZMAT',
    en: 'DG/HAZMAT documentation',
  },

  // Ports / Operations map
  'ops.eyebrow': { es: 'Operaciones Globales', en: 'Global Operations' },
  'ops.title': {
    es: 'Cobertura Total en Puertos Colombianos',
    en: 'Full Coverage Across Colombian Ports',
  },
  'ops.subtitle': {
    es: 'Presencia operativa permanente en los siete puertos estratégicos de Colombia, en ambas costas. Seleccione un puerto para ver su perfil operativo.',
    en: 'Permanent operational presence at Colombia’s seven strategic ports, on both coasts. Select a port to view its operational profile.',
  },
  'ops.coast.caribbean': { es: 'Costa Caribe', en: 'Caribbean Coast' },
  'ops.coast.pacific': { es: 'Costa Pacífico', en: 'Pacific Coast' },
  'ops.office': { es: 'Oficina operativa', en: 'Operational office' },

  // Process timeline
  'process.eyebrow': { es: 'Proceso Operativo', en: 'Operational Process' },
  'process.title': {
    es: 'La Escala, Coordinada de Extremo a Extremo',
    en: 'The Port Call, Coordinated End to End',
  },
  'process.subtitle': {
    es: 'Cada operación sigue un protocolo de precisión que protege los intereses de la naviera en cada fase de la estadía en puerto.',
    en: 'Every operation follows a precision protocol that protects the shipowner’s interests at every phase of the port stay.',
  },
  'process.s1.title': { es: 'Arribo', en: 'Arrival' },
  'process.s1.desc': {
    es: 'Coordinación previa de fondeo, pilotaje y atraque. Notificaciones y pre-aviso a todas las autoridades.',
    en: 'Pre-coordination of anchorage, pilotage and berthing. Notifications and pre-advice to all authorities.',
  },
  'process.s2.title': { es: 'Despacho Portuario', en: 'Port Clearance' },
  'process.s2.desc': {
    es: 'Gestión documental, aduana, migración y sanidad. Cumplimiento normativo integral en tiempo récord.',
    en: 'Documentation, customs, immigration and health. Comprehensive regulatory compliance in record time.',
  },
  'process.s3.title': { es: 'Operaciones', en: 'Operations' },
  'process.s3.desc': {
    es: 'Supervisión de cargue/descargue, estiba y maniobras. Reportes operativos en tiempo real.',
    en: 'Supervision of loading/discharge, stowage and maneuvers. Real-time operational reporting.',
  },
  'process.s4.title': { es: 'Soporte a Tripulación', en: 'Crew Support' },
  'process.s4.desc': {
    es: 'Cambios de tripulación, provisiones, asistencia médica y bienestar a bordo durante toda la estadía.',
    en: 'Crew changes, provisions, medical assistance and on-board welfare throughout the stay.',
  },
  'process.s5.title': { es: 'Zarpe', en: 'Departure' },
  'process.s5.desc': {
    es: 'Despacho de salida, liquidación de cuentas de desembolso y cierre operativo documentado.',
    en: 'Outbound clearance, settlement of disbursement accounts and documented operational closure.',
  },

  // Why LBH
  'why.eyebrow': { es: 'Por Qué LBH Colombia', en: 'Why LBH Colombia' },
  'why.title': {
    es: 'El Estándar Internacional, en Aguas Colombianas',
    en: 'The International Standard, in Colombian Waters',
  },
  'why.subtitle': {
    es: 'La diferencia entre una agencia local y un operador de clase mundial respaldado por una red global.',
    en: 'The difference between a local agency and a world-class operator backed by a global network.',
  },
  'why.col.traditional': {
    es: 'Agencia Tradicional',
    en: 'Traditional Agency',
  },
  'why.col.lbh': { es: 'LBH Colombia', en: 'LBH Colombia' },
  'why.r1.label': { es: 'Cobertura', en: 'Coverage' },
  'why.r1.trad': { es: 'Uno o dos puertos', en: 'One or two ports' },
  'why.r1.lbh': {
    es: '7 puertos en ambas costas',
    en: '7 ports on both coasts',
  },
  'why.r2.label': { es: 'Disponibilidad', en: 'Availability' },
  'why.r2.trad': { es: 'Horario de oficina', en: 'Office hours' },
  'why.r2.lbh': { es: '24/7/365 garantizado', en: '24/7/365 guaranteed' },
  'why.r3.label': { es: 'Cumplimiento', en: 'Compliance' },
  'why.r3.trad': { es: 'Sin certificaciones', en: 'No certifications' },
  'why.r3.lbh': { es: 'BASC · TRACE · ISO', en: 'BASC · TRACE · ISO' },
  'why.r4.label': { es: 'Alcance', en: 'Reach' },
  'why.r4.trad': { es: 'Solo local', en: 'Local only' },
  'why.r4.lbh': {
    es: 'Red LBH en 30+ países',
    en: 'LBH network in 30+ countries',
  },
  'why.r5.label': { es: 'Respaldo', en: 'Backing' },
  'why.r5.trad': { es: 'Operador individual', en: 'Individual operator' },
  'why.r5.lbh': {
    es: 'Grupo marítimo global',
    en: 'Global maritime group',
  },

  // Network
  'network.eyebrow': { es: 'Red Internacional', en: 'International Network' },
  'network.title': {
    es: 'Una Sola Red. Más de 30 Países.',
    en: 'One Network. 30+ Countries.',
  },
  'network.subtitle': {
    es: 'Como parte del grupo LBH, integramos estándares globales de servicio en cada operación local, conectando Colombia con los principales corredores marítimos del mundo.',
    en: 'As part of the LBH group, we embed global service standards into every local operation, connecting Colombia with the world’s major maritime corridors.',
  },
  'network.countries': { es: 'Países', en: 'Countries' },
  'network.offices': { es: 'Oficinas globales', en: 'Global offices' },
  'network.continents': { es: 'Continentes', en: 'Continents' },
  'network.coords': { es: 'Coordinación', en: 'Coordination' },

  // Certifications
  'certs.eyebrow': { es: 'Certificaciones & Cumplimiento', en: 'Certifications & Compliance' },
  'certs.title': {
    es: 'Confianza Verificada y Certificada',
    en: 'Trust, Verified and Certified',
  },
  'certs.subtitle': {
    es: 'Operamos bajo los más altos estándares internacionales de seguridad, transparencia y cumplimiento anticorrupción.',
    en: 'We operate under the highest international standards of security, transparency and anti-corruption compliance.',
  },
  'certs.basc': {
    es: 'Business Alliance for Secure Commerce',
    en: 'Business Alliance for Secure Commerce',
  },
  'certs.trace': {
    es: 'Anti-soborno internacional',
    en: 'International anti-bribery',
  },
  'certs.iso': {
    es: 'Gestión de calidad certificada',
    en: 'Certified quality management',
  },
  'certs.fitac': {
    es: 'Federación de agentes logísticos',
    en: 'Logistics agents federation',
  },
  'certs.amcham': {
    es: 'Cámara de Comercio Colombo-Americana',
    en: 'Colombian-American Chamber',
  },

  // Sectors
  'sectors.eyebrow': { es: 'Sectores Industriales', en: 'Industry Sectors' },
  'sectors.title': {
    es: 'Experiencia en Cada Tipo de Operación',
    en: 'Expertise Across Every Operation Type',
  },
  'sectors.subtitle': {
    es: 'Capacidad técnica comprobada en los segmentos más exigentes de la industria marítima.',
    en: 'Proven technical capability in the most demanding segments of the maritime industry.',
  },
  'sector.bulk': { es: 'Carga a Granel', en: 'Bulk Cargo' },
  'sector.bulk.desc': {
    es: 'Granel seco y líquido con supervisión especializada.',
    en: 'Dry and liquid bulk with specialized supervision.',
  },
  'sector.project': { es: 'Carga Proyecto', en: 'Project Cargo' },
  'sector.project.desc': {
    es: 'Piezas de gran dimensión, OOG y breakbulk.',
    en: 'Oversized pieces, OOG and breakbulk.',
  },
  'sector.tankers': { es: 'Tanqueros', en: 'Tankers' },
  'sector.tankers.desc': {
    es: 'Operaciones de hidrocarburos y químicos.',
    en: 'Hydrocarbon and chemical operations.',
  },
  'sector.containers': { es: 'Contenedores', en: 'Containers' },
  'sector.containers.desc': {
    es: 'Coordinación de líneas y terminales.',
    en: 'Line and terminal coordination.',
  },
  'sector.offshore': { es: 'Offshore', en: 'Offshore' },
  'sector.offshore.desc': {
    es: 'Apoyo a operaciones costa afuera.',
    en: 'Support for offshore operations.',
  },
  'sector.cruise': { es: 'Cruceros', en: 'Cruise' },
  'sector.cruise.desc': {
    es: 'Atención integral de pasaje y buque.',
    en: 'Full passenger and vessel attention.',
  },

  // Metrics
  'metrics.eyebrow': { es: 'Excelencia Operacional', en: 'Operational Excellence' },
  'metrics.title': {
    es: 'Resultados que Definen una Trayectoria',
    en: 'Results That Define a Track Record',
  },
  'metric.years': {
    es: 'Años de operación ininterrumpida',
    en: 'Years of uninterrupted operation',
  },
  'metric.vessels': {
    es: 'Buques atendidos desde 1994',
    en: 'Vessels serviced since 1994',
  },
  'metric.ports': {
    es: 'Puertos estratégicos cubiertos',
    en: 'Strategic ports covered',
  },
  'metric.countries': {
    es: 'Países en la red LBH global',
    en: 'Countries in the LBH global network',
  },

  // About / authority
  'about.eyebrow': { es: 'Sobre LBH Colombia', en: 'About LBH Colombia' },
  'about.title': {
    es: 'Tres Décadas Protegiendo los Intereses de Navieras en Colombia',
    en: 'Three Decades Protecting Shipowner Interests in Colombia',
  },
  'about.body': {
    es: 'Desde 1994 operamos como parte de la red internacional LBH, uno de los grupos de agenciamiento marítimo con mayor presencia en el mundo. En Colombia, somos el socio estratégico de navieras y operadores que exigen precisión, cumplimiento normativo y respuesta inmediata.',
    en: 'Since 1994 we have operated as part of the international LBH network, one of the maritime agency groups with the greatest global presence. In Colombia, we are the strategic partner of shipowners and operators who demand precision, regulatory compliance, and immediate response.',
  },
  'about.p1.title': { es: 'BASC & TRACE certificados', en: 'BASC & TRACE certified' },
  'about.p1.desc': {
    es: 'Máxima garantía en comercio seguro y cumplimiento anticorrupción para operaciones internacionales.',
    en: 'Maximum guarantee in secure commerce and anti-corruption compliance for international operations.',
  },
  'about.p2.title': {
    es: 'Disponibilidad 24/7/365',
    en: '24/7/365 availability',
  },
  'about.p2.desc': {
    es: 'Equipo operacional activo en todos los puertos para respuesta inmediata ante cualquier contingencia.',
    en: 'Operational team active at all ports for immediate response to any contingency.',
  },
  'about.p3.title': {
    es: 'Red LBH en 30+ países',
    en: 'LBH network in 30+ countries',
  },
  'about.p3.desc': {
    es: 'Estándares internacionales de servicio con conocimiento profundo del entorno portuario colombiano.',
    en: 'International service standards with deep knowledge of the Colombian port environment.',
  },

  // CTA
  'cta.eyebrow': { es: 'Inicie su Operación', en: 'Start Your Operation' },
  'cta.title': {
    es: '¿Su buque llega a un puerto colombiano?',
    en: 'Is your vessel arriving at a Colombian port?',
  },
  'cta.body': {
    es: 'Contáctenos ahora para una cotización inmediata o use AMANDA, nuestra asistente de inteligencia marítima disponible 24 horas.',
    en: 'Contact us now for an immediate quote or use AMANDA, our maritime intelligence assistant available 24 hours.',
  },
  'cta.primary': {
    es: 'Solicitar Cotización Ahora',
    en: 'Request Quote Now',
  },
  'cta.secondary': {
    es: 'Línea de Emergencia 24/7',
    en: 'Emergency Line 24/7',
  },

  // Footer
  'footer.about': {
    es: 'Agencia naviera con presencia en 7 puertos estratégicos de Colombia. Parte de la red internacional LBH en 30+ países desde 1994.',
    en: 'Maritime agency with presence at 7 strategic Colombian ports. Part of the international LBH network in 30+ countries since 1994.',
  },
  'footer.services': { es: 'Servicios', en: 'Services' },
  'footer.viewAll': {
    es: 'Ver todos los servicios',
    en: 'View all services',
  },
  'footer.company': { es: 'Empresa', en: 'Company' },
  'footer.aboutUs': { es: 'Sobre Nosotros', en: 'About Us' },
  'footer.contact': { es: 'Contacto', en: 'Contact' },
  'footer.portCoverage': {
    es: 'Puertos de Cobertura',
    en: 'Port Coverage',
  },
  'footer.rights': {
    es: 'Todos los derechos reservados.',
    en: 'All rights reserved.',
  },
  'footer.privacy': { es: 'Política de Privacidad', en: 'Privacy Policy' },
  'footer.terms': { es: 'Términos de Uso', en: 'Terms of Use' },

  'certs.activeLabel': {
    es: 'Certificaciones activas',
    en: 'Active certifications',
  },

  // Nav routes
  'nav.home': { es: 'Inicio', en: 'Home' },
  'nav.coverage': { es: 'Cobertura', en: 'Coverage' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  'nav.servicesMenu': { es: 'Nuestros servicios', en: 'Our services' },
  'nav.viewAllServices': { es: 'Ver todos los servicios', en: 'View all services' },

  // Service routes (labels + short desc for dropdown)
  'route.agency': { es: 'Agencia Marítima', en: 'Ship Agency' },
  'route.agency.short': {
    es: 'Representación integral del buque en puerto.',
    en: 'Full vessel representation in port.',
  },
  'route.logistics': { es: 'Logística', en: 'Logistics' },
  'route.logistics.short': {
    es: 'Coordinación de carga de extremo a extremo.',
    en: 'End-to-end cargo coordination.',
  },
  'route.port': { es: 'Operaciones Portuarias', en: 'Port Operations' },
  'route.port.short': {
    es: 'Supervisión de maniobras y estiba.',
    en: 'Maneuver and stowage supervision.',
  },
  'route.customs': { es: 'Aduanas', en: 'Customs' },
  'route.customs.short': {
    es: 'Despacho y cumplimiento normativo.',
    en: 'Clearance and regulatory compliance.',
  },

  // Hero (simplified)
  'hero.h1.a': { es: 'Su buque en buenas manos', en: 'Your vessel in good hands' },
  'hero.h1.em': { es: 'en cualquier puerto de Colombia', en: 'at any port in Colombia' },
  'hero.lead': {
    es: 'Agencia naviera con 30 años coordinando operaciones en los 7 puertos estratégicos del país. Respuesta 24/7.',
    en: 'Ship agency with 30 years coordinating operations across Colombia’s 7 strategic ports. 24/7 response.',
  },

  // Global CTAs
  'cta.quote': { es: 'Solicitar Cotización', en: 'Request a Quote' },
  'cta.advisor': { es: 'Hablar con un Asesor', en: 'Talk to an Advisor' },
  'cta.whatsapp': { es: 'Contactar por WhatsApp', en: 'Contact via WhatsApp' },
  'cta.solution': { es: 'Necesito una Solución Logística', en: 'I Need a Logistics Solution' },
  'cta.info': { es: 'Solicitar Información', en: 'Request Information' },
  'cta.viewService': { es: 'Conocer servicio', en: 'View service' },

  // Fleet 3D showcase
  'fleet.eyebrow': { es: 'Flota que Atendemos', en: 'Fleet We Service' },
  'fleet.title': {
    es: 'Experiencia en Cada Tipo de Buque',
    en: 'Expertise for Every Vessel Type',
  },
  'fleet.subtitle': {
    es: 'Seleccione un tipo de embarcación para explorar el modelo en 3D.',
    en: 'Select a vessel type to explore it in 3D.',
  },
  'fleet.bulk': { es: 'Granelero', en: 'Bulk Carrier' },
  'fleet.container': { es: 'Portacontenedores', en: 'Container Ship' },
  'fleet.tanker': { es: 'Tanquero / LNG', en: 'Tanker / LNG' },
  'fleet.cargo': { es: 'Carga General', en: 'General Cargo' },

  // Trust / metrics section
  'trust.eyebrow': { es: 'Confianza Comprobada', en: 'Proven Trust' },
  'trust.title': {
    es: 'Números que Respaldan Cada Operación',
    en: 'Numbers That Back Every Operation',
  },
  'trust.subtitle': {
    es: 'Tres décadas de excelencia operativa al servicio de navieras y operadores internacionales.',
    en: 'Three decades of operational excellence serving international shipowners and operators.',
  },
  'trust.years': { es: 'Años de experiencia', en: 'Years of experience' },
  'trust.ops': { es: 'Operaciones realizadas', en: 'Operations completed' },
  'trust.ports': { es: 'Puertos cubiertos', en: 'Ports covered' },
  'trust.attention': { es: 'Atención personalizada', en: 'Personalized attention' },
  'trust.response': { es: 'Respuesta rápida', en: 'Rapid response' },

  // Commercial form
  'form.eyebrow': { es: 'Asesoría Comercial', en: 'Commercial Advisory' },
  'form.title': {
    es: 'Cuéntenos su Necesidad Logística',
    en: 'Tell Us Your Logistics Need',
  },
  'form.subtitle': {
    es: 'Complete el formulario y le responderemos de inmediato por WhatsApp.',
    en: 'Fill out the form and we’ll respond immediately via WhatsApp.',
  },
  'form.name': { es: 'Nombre', en: 'Name' },
  'form.company': { es: 'Empresa', en: 'Company' },
  'form.phone': { es: 'Celular', en: 'Mobile' },
  'form.email': { es: 'Correo', en: 'Email' },
  'form.service': { es: 'Tipo de servicio', en: 'Service type' },
  'form.servicePlaceholder': { es: 'Seleccione un servicio', en: 'Select a service' },
  'form.description': { es: 'Descripción de la necesidad', en: 'Description of your need' },
  'form.descriptionPlaceholder': {
    es: 'Cuéntenos brevemente qué necesita...',
    en: 'Briefly tell us what you need...',
  },
  'form.submit': { es: 'Enviar por WhatsApp', en: 'Send via WhatsApp' },
  'form.note': {
    es: 'Al enviar, se abrirá WhatsApp con su mensaje listo para enviar.',
    en: 'On submit, WhatsApp will open with your message ready to send.',
  },
  'form.required': { es: 'Este campo es obligatorio', en: 'This field is required' },

  // Coverage page
  'coverage.eyebrow': { es: 'Cobertura Nacional', en: 'National Coverage' },
  'coverage.title': {
    es: 'Presencia en los 7 Puertos Estratégicos',
    en: 'Presence at All 7 Strategic Ports',
  },
  'coverage.subtitle': {
    es: 'Operación permanente en ambas costas, conectando Colombia con el comercio marítimo global.',
    en: 'Permanent operations on both coasts, connecting Colombia with global maritime trade.',
  },

  // Generic
  'common.backHome': { es: 'Volver al inicio', en: 'Back to home' },
  'common.allServices': { es: 'Todos los Servicios', en: 'All Services' },
  'common.relatedServices': { es: 'Otros servicios', en: 'Other services' },
  'common.keyFeatures': { es: 'Qué incluye', en: 'What’s included' },
  'common.followUs': { es: 'Síguenos', en: 'Follow us' },
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')

  useEffect(() => {
    try {
      const stored = localStorage.getItem('lbh-lang') as Lang | null
      if (stored === 'es' || stored === 'en') setLangState(stored)
    } catch {}
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem('lbh-lang', l)
    } catch {}
    document.documentElement.setAttribute('lang', l)
  }, [])

  const t = useCallback(
    (key: string) => dict[key]?.[lang] ?? key,
    [lang],
  )

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}

// Alias for convenience
export const LanguageProvider = I18nProvider
