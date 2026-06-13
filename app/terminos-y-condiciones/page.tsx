import type { Metadata } from 'next'
import { LegalPage, type LegalSection } from '@/components/legal-page'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Uso | LBH Colombia',
  description:
    'Términos y Condiciones de uso del sitio web de LBH Colombia S.A.S., condiciones de los servicios de agenciamiento marítimo, logística y aduanas, y uso de canales de contacto.',
  alternates: {
    canonical: 'https://www.lbhcolombia.com/terminos-y-condiciones',
  },
}

const sections: LegalSection[] = [
  {
    heading: 'Aceptación de los términos',
    body: [
      'Los presentes Términos y Condiciones (en adelante, los "Términos") regulan el acceso y uso del sitio web de LBH Colombia S.A.S. (en adelante, "LBH Colombia"), así como los canales de contacto comercial puestos a disposición de los usuarios.',
      'El acceso y la navegación en el sitio web implican la aceptación plena y sin reservas de estos Términos. Si el usuario no está de acuerdo con ellos, deberá abstenerse de utilizar el sitio.',
    ],
  },
  {
    heading: 'Identificación de la empresa',
    body: [
      'LBH Colombia S.A.S. es una agencia naviera con domicilio en Barranquilla, Colombia, que presta servicios de agenciamiento marítimo, logística, operaciones portuarias y aduanas, como parte de la red internacional LBH presente en más de 30 países.',
    ],
  },
  {
    heading: 'Objeto del sitio web',
    body: [
      'El sitio web tiene una finalidad informativa y comercial. A través de él, los usuarios pueden conocer los servicios de LBH Colombia, su cobertura portuaria y solicitar asesoría o cotizaciones.',
      'La información publicada no constituye una oferta comercial vinculante. Toda relación comercial se formaliza mediante acuerdos específicos entre LBH Colombia y sus clientes.',
    ],
  },
  {
    heading: 'Naturaleza de los servicios',
    body: [
      'Los servicios prestados por LBH Colombia se rigen por las cotizaciones, contratos y condiciones particulares acordadas con cada cliente, así como por la normatividad marítima, portuaria y aduanera colombiana aplicable.',
      'Los tiempos, tarifas y alcances indicados en el sitio web son referenciales y pueden variar según las características de cada operación, las autoridades competentes y las condiciones operativas de cada puerto.',
    ],
  },
  {
    heading: 'Uso correcto del sitio',
    body: [
      'El usuario se compromete a utilizar el sitio web de manera lícita y conforme a estos Términos. En particular, se obliga a:',
    ],
    list: [
      'No realizar actividades que puedan dañar, sobrecargar o deteriorar el sitio o impedir su normal funcionamiento.',
      'No utilizar el sitio con fines fraudulentos o contrarios a la ley, la moral y el orden público.',
      'Suministrar información veraz y actualizada en los formularios de contacto y canales comerciales.',
      'No vulnerar los derechos de propiedad intelectual de LBH Colombia ni de terceros.',
    ],
  },
  {
    heading: 'Formularios de contacto y canales comerciales',
    body: [
      'El sitio web pone a disposición formularios de contacto y enlaces a WhatsApp comercial y correo electrónico para facilitar la comunicación con LBH Colombia.',
      'La información enviada a través de estos canales será tratada conforme a la Política de Privacidad y Tratamiento de Datos Personales. El usuario es responsable de la veracidad de los datos que suministra.',
    ],
  },
  {
    heading: 'Propiedad intelectual',
    body: [
      'Todos los contenidos del sitio web —incluyendo textos, logotipos, marcas, imágenes, diseños y código— son propiedad de LBH Colombia o de sus titulares y están protegidos por las normas de propiedad intelectual e industrial colombianas e internacionales.',
      'Queda prohibida la reproducción, distribución o transformación total o parcial de dichos contenidos sin autorización previa y escrita de LBH Colombia.',
    ],
  },
  {
    heading: 'Enlaces a terceros',
    body: [
      'El sitio web puede contener enlaces a servicios de terceros, como mapas, redes sociales o plataformas de mensajería. LBH Colombia no se hace responsable del contenido, las políticas de privacidad ni las prácticas de dichos terceros.',
    ],
  },
  {
    heading: 'Limitación de responsabilidad',
    body: [
      'LBH Colombia realiza esfuerzos razonables para mantener la información del sitio actualizada y disponible, pero no garantiza la ausencia de errores, interrupciones o indisponibilidad técnica.',
      'LBH Colombia no será responsable por daños derivados del uso indebido del sitio, de la imposibilidad de acceso o de decisiones tomadas con base únicamente en la información referencial publicada.',
    ],
  },
  {
    heading: 'Protección de datos personales',
    body: [
      'El tratamiento de los datos personales recolectados a través del sitio web se rige por la Política de Privacidad y Tratamiento de Datos Personales de LBH Colombia, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.',
    ],
  },
  {
    heading: 'Ley aplicable y jurisdicción',
    body: [
      'Estos Términos se rigen por las leyes de la República de Colombia. Cualquier controversia derivada de su interpretación o aplicación se someterá a la jurisdicción de los jueces y tribunales competentes de Colombia.',
    ],
  },
  {
    heading: 'Modificaciones',
    body: [
      'LBH Colombia se reserva el derecho de modificar en cualquier momento estos Términos. Las modificaciones entrarán en vigencia desde su publicación en el sitio web. Se recomienda al usuario revisar periódicamente esta sección.',
    ],
  },
]

export default function TerminosCondicionesPage() {
  return (
    <>
      <LegalPage
        crumb="Términos y Condiciones"
        title="Términos y Condiciones de Uso"
        intro="Estos Términos regulan el uso del sitio web de LBH Colombia y de sus canales de contacto comercial, conforme a la legislación colombiana vigente."
        updated="Junio de 2026"
        sections={sections}
      />
      <CtaBand />
    </>
  )
}
