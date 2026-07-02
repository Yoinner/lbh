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
    es: 'Agencia Marítima — Colombia',
    en: 'Maritime Agency — Colombia',
  },
  'hero.title1': { es: 'Ingeniería Marítima de', en: 'World-Class Maritime' },
  'hero.titleEm': { es: 'Clase Mundial', en: 'Operations' },
  'hero.title2': {
    es: 'en Puertos de Colombia',
    en: 'Across Colombian Ports',
  },
  'hero.desc': {
    es: '30 años coordinando operaciones marítimas de alta complejidad. 9 puertos estratégicos. Red LBH en 28+ países. Certificaciones BASC y TRACE. Respuesta ágil y acompañamiento operativo.',
    en: '30 years coordinating complex maritime operations. 9 strategic ports. LBH network across 28+ countries. BASC and TRACE certified. Agile response and operational support.',
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
    es: 'Nuestros Servicios',
    en: 'Our Services',
  },
  'services.subtitle': {
    es: '',
    en: '',
  },
  'services.viewFull': {
    es: 'Ver servicio completo',
    en: 'View full service',
  },

  'svc.agency.title': { es: 'Agenciamiento Marítimo', en: 'Ship Agency' },
  'svc.agency.desc': {
    es: 'Atendemos todo tipo de buques con carga a granel, tanto líquida como seca, en todos los puertos de Colombia. Coordinamos servicios portuarios, supervisamos las operaciones de carga y garantizamos el cumplimiento de las regulaciones marítimas y aduaneras, brindando una atención eficiente y confiable en cada recalada.',
    en: 'We attend all vessel types carrying bulk cargo, both liquid and dry, at all ports in Colombia. We coordinate port services, supervise cargo operations and ensure compliance with maritime and customs regulations, providing efficient and reliable attention at every call.',
  },
  'svc.agency.f1': {
    es: 'Coordinación de Servicios Portuarios',
    en: 'Port Services Coordination',
  },
  'svc.agency.f2': {
    es: 'Supervisión de Operaciones de Carga',
    en: 'Cargo Operations Supervision',
  },
  'svc.agency.f3': {
    es: 'Cumplimiento de Regulaciones Marítimas y Aduaneras',
    en: 'Maritime and Customs Regulations Compliance',
  },
  'svc.agency.f4': { es: '', en: '' },

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
    es: 'Coordinación médica y bienestar',
    en: 'Medical coordination & welfare',
  },

  'svc.freight.title': { es: 'Agente de carga internacional / Logística', en: 'International Freight Forwarding / Logistics' },
  'svc.freight.desc': {
    es: 'Integramos transporte marítimo, terrestre y aéreo con coordinación documental, seguimiento operativo y acompañamiento especializado para operaciones de importación, exportación y carga proyecto.',
    en: 'We integrate maritime, land and air transport with documentary coordination, operational tracking and specialized support for import, export and project cargo operations.',
  },
  'svc.freight.f1': { es: 'Granel seco y líquido', en: 'Dry & liquid bulk' },
  'svc.freight.f2': { es: 'Carga proyecto y OOG', en: 'Project cargo & OOG' },
  'svc.freight.f3': {
    es: 'Coordinación de estiba',
    en: 'Stowage coordination',
  },
  'svc.freight.f4': {
    es: 'Optimización de costos operativos',
    en: 'Operational cost optimization',
  },

  // Ports / Operations map
  'ops.eyebrow': { es: 'Mapa de Cobertura', en: 'Coverage Map' },
  'ops.title': {
    es: 'Seleccione un Puerto o Sede',
    en: 'Select a Port or Office',
  },
  'ops.subtitle': {
    es: 'Haga clic en cualquier punto del mapa para ver su perfil operativo, dirección y datos de contacto.',
    en: 'Click any point on the map to view its operational profile, address and contact details.',
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
    es: 'Cada operación sigue un protocolo de precisión que protege los intereses del armador en cada fase de la estadía en puerto.',
    en: "Every operation follows a precision protocol that protects the shipowner's interests at every phase of the port stay.",
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
  'why.r2.label': { es: 'Acompañamiento', en: 'Support' },
  'why.r2.trad': { es: 'Horario de oficina', en: 'Office hours' },
  'why.r2.lbh': { es: 'Acompañamiento operativo durante la escala', en: 'Operational support during the call' },
  'why.r3.label': { es: 'Cumplimiento', en: 'Compliance' },
  'why.r3.trad': { es: 'Sin certificaciones', en: 'No certifications' },
  'why.r3.lbh': { es: 'BASC · TRACE · ISO', en: 'BASC · TRACE · ISO' },
  'why.r4.label': { es: 'Alcance', en: 'Reach' },
  'why.r4.trad': { es: 'Solo local', en: 'Local only' },
  'why.r4.lbh': {
    es: 'Red LBH en 28+ países',
    en: 'LBH network in 28+ countries',
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
    es: 'Una Sola Red. Más de 28 Países.',
    en: 'One Network. 28+ Countries.',
  },
  'network.subtitle': {
    es: 'Como parte del grupo LBH, integramos estándares globales de servicio en cada operación local, conectando Colombia con los principales corredores marítimos del mundo.',
    en: 'As part of the LBH group, we embed global service standards into every local operation, connecting Colombia with the world\'s major maritime corridors.',
  },
  'network.countries': { es: 'Países', en: 'Countries' },
  'network.offices': { es: 'Oficinas globales', en: 'Global offices' },
  'network.continents': { es: 'Continentes', en: 'Continents' },
  'network.coords': { es: 'Coordinación', en: 'Coordination' },
  'network.viewAllOffices': { es: 'Ver todas las oficinas LBH Group', en: 'View all LBH Group offices' },
  'offices.viewMap': { es: 'Ver mapa de cobertura completo', en: 'View full coverage map' },

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
  'certs.analdex': {
    es: 'Asociación Nacional de Comercio Exterior',
    en: 'National Foreign Trade Association',
  },
  'certs.holland': {
    es: 'Cámara de Comercio Colombo-Holandesa',
    en: 'Colombian-Dutch Chamber of Commerce',
  },
  'certs.ccsruc': {
    es: 'Consejo Colombiano de Seguridad — RUC',
    en: 'Colombian Security Council — RUC',
  },
  'certs.china': {
    es: 'Cámara Colombo China de Inversión y Comercio',
    en: 'Colombian-Chinese Investment & Trade Chamber',
  },
  'certs.pep': {
    es: 'Promotora de Excelencia Personal',
    en: 'Promotora de Excelencia Personal',
  },
  'certs.aferri': {
    es: 'AFERRI',
    en: 'AFERRI',
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
    es: 'Operaciones para granel seco y líquido con coordinación portuaria especializada.',
    en: 'Dry and liquid bulk operations with specialized port coordination.',
  },
  'sector.project': { es: 'Carga Proyecto', en: 'Project Cargo' },
  'sector.project.desc': {
    es: 'Coordinación para carga sobredimensionada, breakbulk y proyectos especiales.',
    en: 'Coordination for oversized cargo, breakbulk and special projects.',
  },
  'sector.tankers': { es: 'Tanqueros', en: 'Tankers' },
  'sector.tankers.desc': {
    es: 'Soporte para operaciones de líquidos, combustibles y carga especializada.',
    en: 'Support for liquid, fuel and specialized cargo operations.',
  },
  'sector.containers': { es: 'Contenedores', en: 'Containers' },
  'sector.containers.desc': {
    es: 'Atención a líneas, operadores y carga contenerizada en puertos estratégicos.',
    en: 'Service for lines, operators and containerized cargo at strategic ports.',
  },
  'sector.offshore': { es: 'Offshore', en: 'Offshore' },
  'sector.offshore.desc': {
    es: 'Apoyo logístico y marítimo para operaciones offshore y servicios especializados.',
    en: 'Logistical and maritime support for offshore operations and specialized services.',
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
    es: 'Tres Décadas Protegiendo los Intereses Marítimos en Colombia',
    en: 'Three Decades Protecting Maritime Interests in Colombia',
  },
  'about.body': {
    es: 'Desde 1994 operamos como parte de la red internacional LBH, uno de los grupos de agenciamiento marítimo con mayor presencia en el mundo. En Colombia, somos el socio estratégico de operadores marítimos e internacionales que exigen precisión, cumplimiento normativo y respuesta inmediata.',
    en: 'Since 1994 we have operated as part of the international LBH network, one of the maritime agency groups with the greatest global presence. In Colombia, we are the strategic partner of maritime operators and international companies who demand precision, regulatory compliance, and immediate response.',
  },
  'about.p1.title': { es: 'BASC & TRACE certificados', en: 'BASC & TRACE certified' },
  'about.p1.desc': {
    es: 'Máxima garantía en comercio seguro y cumplimiento anticorrupción para operaciones internacionales.',
    en: 'Maximum guarantee in secure commerce and anti-corruption compliance for international operations.',
  },
  'about.p2.title': {
    es: 'Acompañamiento operativo',
    en: 'Operational support',
  },
  'about.p2.desc': {
    es: 'Equipo operacional presente en los puertos para acompañar y coordinar oportunamente cada fase de la operación.',
    en: 'An operational team present at the ports to support and coordinate every phase of the operation in a timely manner.',
  },
  'about.p3.title': {
    es: 'Red LBH en 28+ países',
    en: 'LBH network in 28+ countries',
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
    es: 'Cuéntenos los detalles de su operación y nuestro equipo canalizará su solicitud con el área correspondiente.',
    en: 'Tell us the details of your operation and our team will channel your request to the right area.',
  },
  'cta.primary': {
    es: 'Solicitar asesoría',
    en: 'Request advisory',
  },
  'cta.requestAdvisory': {
    es: 'Solicitar asesoría',
    en: 'Request advisory',
  },

  // Footer
  'footer.about': {
    es: 'Agencia marítima con presencia en los puertos estratégicos de Colombia. Parte de la red internacional LBH en 28+ países desde 1994.',
    en: 'Maritime agency with presence at strategic Colombian ports. Part of the international LBH network in 28+ countries since 1994.',
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
  'footer.credit': {
    es: 'Desarrollado por Haze Tech',
    en: 'Developed by Haze Tech',
  },
  'lang.spanish': { es: 'Español', en: 'Spanish' },
  'lang.english': { es: 'Inglés', en: 'English' },
  'lang.dev': { es: 'Desarrollado por', en: 'Developed by' },

  'certs.activeLabel': {
    es: 'Certificaciones y Membresías Activas',
    en: 'Active Certifications & Memberships',
  },
  'certs.marqueeNote': {
    es: 'Operamos bajo estándares de seguridad, transparencia y cumplimiento reconocidos por la industria.',
    en: 'We operate under industry-recognized standards of security, transparency and compliance.',
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
  'route.logistics': { es: 'Agente de carga internacional / Logística', en: 'International Freight Forwarding / Logistics' },
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
  'route.husbandry': { es: 'Husbandry Services', en: 'Husbandry Services' },
  'route.husbandry.short': {
    es: 'Soporte integral a tripulación y buque durante la escala.',
    en: 'Comprehensive crew and vessel support during the port call.',
  },
  'route.logistics.alternative': { es: 'Logística', en: 'Logistics' },

  // Hero (simplified)
  'hero.h1.a': { es: 'Agenciamiento Marítimo y Soluciones', en: 'Maritime Agency and Integral' },
  'hero.h1.em': { es: 'Logísticas Integrales', en: 'Logistics Solutions' },
  'hero.lead': {
    es: 'Su aliado estratégico en agenciamiento marítimo desde 1994, gestión de carga y contenedores, y soluciones logísticas integrales en Colombia.',
    en: 'Your strategic partner in maritime agency since 1994, cargo and container management, and integral logistics solutions in Colombia.',
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
    es: 'LBH en cifras',
    en: 'LBH in numbers',
  },
  'trust.subtitle': {
    es: '',
    en: '',
  },
  'trust.years': { es: 'Años de experiencia', en: 'Years of experience' },
  'trust.ops': { es: 'Operaciones realizadas', en: 'Operations completed' },
  'trust.ports': { es: 'Puertos cubiertos', en: 'Ports covered' },
  'trust.countries': { es: 'Países con cobertura internacional', en: 'Countries with international coverage' },
  'trust.attention': { es: 'Atención personalizada', en: 'Personalized attention' },
  'trust.response': { es: 'Respuesta rápida', en: 'Rapid response' },

  // Commercial form
  'form.eyebrow': { es: 'Asesoría Comercial', en: 'Commercial Advisory' },
  'form.title': {
    es: 'Cuéntenos su Necesidad',
    en: 'Tell us about your need',
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
    es: 'Cobertura Nacional',
    en: 'National Coverage',
  },
  'coverage.subtitle': {
    es: 'Operación permanente en ambas costas colombianas — Caribe y Pacífico — más sedes comerciales en Bogotá y Medellín. Conectamos Colombia con la red LBH en 28+ países.',
    en: 'Permanent operations on both Colombian coasts — Caribbean and Pacific — plus commercial offices in Bogotá and Medellín. Connecting Colombia to the LBH network in 28+ countries.',
  },

  // Clients / sectors served
  'clients.eyebrow': { es: 'Quiénes Confían en Nosotros', en: 'Who Trusts Us' },
  'clients.title': {
    es: 'Aliado de Operadores Marítimos, Operadores Logísticos y Tradings Internacionales',
    en: 'Partner to Maritime Operators, Logistics Operators and International Tradings',
  },
  'clients.subtitle': {
    es: 'Atendemos a los segmentos más exigentes de la industria marítima y de comercio exterior.',
    en: 'We serve the most demanding segments of the maritime and foreign trade industry.',
  },

  // Team marquee
  'team.eyebrow': { es: 'Nuestro Equipo', en: 'Our Team' },
  'team.title': {
    es: 'El equipo detrás de cada operación',
    en: 'The team behind every operation',
  },
  'team.subtitle': {
    es: 'Profesionales comerciales, operativos y logísticos coordinando soluciones marítimas en los principales puertos de Colombia.',
    en: 'Commercial, operational and logistics professionals coordinating maritime solutions across Colombia\'s main ports.',
  },

  // Final CTA band
  'band.title': {
    es: '¿Su operación requiere coordinación marítima en Colombia?',
    en: 'Does your operation require maritime coordination in Colombia?',
  },
  'band.subtitle': {
    es: 'Cuéntenos los detalles de su operación y nuestro equipo canalizará su solicitud con el área correspondiente.',
    en: 'Tell us the details of your operation and our team will channel your request to the right area.',
  },

  // About page
  'aboutpage.eyebrow': { es: 'Nosotros', en: 'About Us' },
  'aboutpage.lead': {
    es: 'Tres décadas de excelencia operativa al servicio del comercio marítimo de Colombia.',
    en: 'Three decades of operational excellence serving Colombia’s maritime trade.',
  },
  'aboutpage.missionTitle': { es: 'Nuestra Misión', en: 'Our Mission' },
  'aboutpage.mission': {
    es: 'Con una fuerza laboral altamente motivada, bien capacitada y experimentada, ofrecemos el más alto nivel de servicio profesional en los sectores portuario, aduanero, logístico y marítimo, tanto a los propietarios de carga como a los armadores. Nuestro equipo disfruta lo que hace: brindar confianza y fiabilidad. Nos aseguramos de que todo se realice de manera segura y eficiente, gestionando con precisión la documentación y las instrucciones requeridas por todas las partes involucradas y por las autoridades colombianas.\n\nCumplimos nuestra misión maximizando el potencial de nuestro talento humano, fomentando la innovación y la capacitación continua, respetando el negocio, minimizando el impacto ambiental de nuestro trabajo y dejando una impresión positiva en nuestros clientes y en las comunidades que nos acogen.',
    en: 'With a highly motivated, well-trained and experienced workforce, we offer the highest level of professional service in the port, customs, logistics and maritime sectors, both to cargo owners and shipowners. Our team enjoys what it does: providing trust and reliability. We ensure that everything is carried out safely and efficiently, precisely managing the documentation and instructions required by all parties involved and by Colombian authorities.\n\nWe fulfill our mission by maximizing the potential of our human talent, fostering innovation and continuous training, respecting the business, minimizing the environmental impact of our work and leaving a positive impression on our clients and the communities that welcome us.',
  },
  'aboutpage.visionTitle': { es: 'Nuestra Visión', en: 'Our Vision' },
  'aboutpage.vision': {
    es: 'Ser la agencia marítima de referencia en Colombia, integrando estándares globales de la red LBH con un conocimiento profundo del entorno portuario local.',
    en: "To be the benchmark maritime agency in Colombia, integrating the LBH network's global standards with deep knowledge of the local port environment.",
  },

  // Services index page
  'servicespage.lead': {
    es: 'Tres líneas de servicio especializadas: agenciamiento marítimo, agente de carga internacional / logística y husbandry services.',
    en: 'Three specialized service lines: ship agency, international freight forwarding / logistics and husbandry services.',
  },

  // Contact page
  'contactpage.eyebrow': { es: 'Contacto', en: 'Contact' },
  'contactpage.lead': {
    es: 'Comparta los detalles de su operación y nuestro equipo canalizará su solicitud con el área correspondiente.',
    en: 'Share the details of your operation and our team will channel your request to the right area.',
  },
  'contactpage.channels': { es: 'Canales directos', en: 'Direct channels' },
  'contactpage.whatsapp': { es: 'WhatsApp', en: 'WhatsApp' },
  'contactpage.phone': { es: 'Teléfono', en: 'Phone' },
  'contactpage.email': { es: 'Correo', en: 'Email' },
  'contactpage.emailMarketing': { es: 'Marketing', en: 'Marketing' },
  'contactpage.emailLogistica': { es: 'Logística', en: 'Logistics' },
  'contactpage.emailOps': { es: 'Operación', en: 'Operations' },

  // Service detail generic
  'svcdetail.benefits': { es: 'Beneficios clave', en: 'Key benefits' },
  'svcdetail.cta': {
    es: '¿Necesita este servicio? Hablemos.',
    en: 'Need this service? Let’s talk.',
  },

  // Agencia Marítima detail
  'sd.agency.lead': {
    es: 'Atendemos todo tipo de buques con carga a granel, tanto líquida como seca, en todos los puertos de Colombia. Coordinamos servicios portuarios, supervisamos las operaciones de carga y garantizamos el cumplimiento de las regulaciones marítimas y aduaneras, brindando una atención eficiente y confiable en cada recalada.',
    en: 'We attend all vessel types carrying bulk cargo, both liquid and dry, at all ports in Colombia. We coordinate port services, supervise cargo operations and ensure compliance with maritime and customs regulations, providing efficient and reliable attention at every call.',
  },
  'sd.agency.b1': { es: 'Coordinación de Servicios Portuarios', en: 'Port Services Coordination' },
  'sd.agency.b2': { es: 'Supervisión de Operaciones de Carga', en: 'Cargo Operations Supervision' },
  'sd.agency.b3': { es: 'Cumplimiento de Regulaciones Marítimas y Aduaneras', en: 'Maritime and Customs Regulations Compliance' },
  'sd.agency.b4': { es: 'Gestión de aduana e inmigración', en: 'Customs and immigration management' },
  'sd.agency.b5': { es: 'Acompañamiento operativo en los 7 puertos', en: 'Operational support at all 7 ports' },

  // Logística detail
  'sd.logistics.lead': {
    es: 'Servicios de Logistica integrados',
    en: 'Integrated Logistics Services',
  },
  'sd.logistics.b1': { es: 'Granel seco y líquido especializado', en: 'Specialized dry and liquid bulk' },
  'sd.logistics.b2': { es: 'Carga proyecto y sobredimensionada (OOG)', en: 'Project and oversized cargo (OOG)' },
  'sd.logistics.b3': { es: 'Coordinación de estiba y trincado', en: 'Stowage and lashing coordination' },
  'sd.logistics.b4': { es: 'Trazabilidad y seguimiento operativo', en: 'Traceability and operational tracking' },
  'sd.logistics.b5': { es: 'Optimización de costos operativos', en: 'Operational cost optimization' },

  // Operaciones Portuarias detail
  'sd.port.lead': {
    es: 'Supervisamos las maniobras de cargue, descargue y estiba con personal técnico en muelle, garantizando seguridad, eficiencia y reportes en tiempo real.',
    en: 'We supervise loading, discharge and stowage maneuvers with technical staff on the dock, ensuring safety, efficiency and real-time reporting.',
  },
  'sd.port.b1': { es: 'Supervisión de cargue y descargue', en: 'Loading and discharge supervision' },
  'sd.port.b2': { es: 'Control de estiba y maniobras', en: 'Stowage and maneuver control' },
  'sd.port.b3': { es: 'Reportes operativos en tiempo real', en: 'Real-time operational reporting' },
  'sd.port.b4': { es: 'Inspecciones y tally de carga', en: 'Cargo inspections and tally' },
  'sd.port.b5': { es: 'Coordinación con terminales', en: 'Terminal coordination' },

  // Aduanas detail
  'sd.customs.lead': {
    es: 'Gestionamos el despacho aduanero y el cumplimiento normativo de cada operación, protegiendo a la naviera frente a contingencias regulatorias.',
    en: 'We manage customs clearance and regulatory compliance for every operation, protecting the shipowner against regulatory contingencies.',
  },
  'sd.customs.b1': { es: 'Despacho aduanero de importación y exportación', en: 'Import and export customs clearance' },
  'sd.customs.b2': { es: 'Cumplimiento normativo integral', en: 'Comprehensive regulatory compliance' },
  'sd.customs.b3': { es: 'Gestión documental certificada', en: 'Certified documentation management' },
  'sd.customs.b4': { es: 'Coordinación con DIAN y autoridades', en: 'Coordination with DIAN and authorities' },
  'sd.customs.b5': { es: 'Asesoría en regímenes especiales', en: 'Advice on special regimes' },

  // Husbandry Services detail
  'sd.husbandry.lead': {
    es: 'Coordinamos servicios de soporte para el buque y su tripulación durante la estadía en puerto, integrando cambios de tripulación, transporte, provisiones, asistencia médica coordinada, efectivo al capitán y requerimientos operativos especiales.',
    en: 'We coordinate support services for the vessel and its crew during the port stay, integrating crew changes, transportation, provisions, coordinated medical assistance, cash to master and special operational requirements.',
  },
  'sd.husbandry.b1': { es: 'Crew change management', en: 'Crew change management' },
  'sd.husbandry.b2': { es: 'Provisiones y suministros', en: 'Provisions and supplies' },
  'sd.husbandry.b3': { es: 'Cash to Master (CTM)', en: 'Cash to Master (CTM)' },
  'sd.husbandry.b4': {
    es: 'Transporte terrestre y hotelería para tripulación',
    en: 'Ground transport and crew hotel arrangements',
  },
  'sd.husbandry.b5': { es: 'Coordinación médica y bienestar', en: 'Medical coordination and welfare' },
  'sd.husbandry.b6': {
    es: 'Gestión de repuestos, courier y requerimientos especiales',
    en: 'Spare parts, courier and special requirements management',
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
