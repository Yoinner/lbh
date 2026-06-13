import type { Metadata } from 'next'
import { LegalPage, type LegalSection } from '@/components/legal-page'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Política de Privacidad y Tratamiento de Datos | LBH Colombia',
  description:
    'Política de Tratamiento de Datos Personales de LBH Colombia S.A.S. conforme a la Ley 1581 de 2012, el Decreto 1377 de 2013 y el derecho de Habeas Data.',
  alternates: {
    canonical: 'https://www.lbhcolombia.com/politica-de-privacidad',
  },
}

const sections: LegalSection[] = [
  {
    heading: 'Objeto y marco normativo',
    body: [
      'La presente Política de Tratamiento de Datos Personales (en adelante, la "Política") regula la recolección, almacenamiento, uso, circulación, supresión y, en general, el tratamiento de los datos personales realizado por LBH Colombia S.A.S. (en adelante, "LBH Colombia"), sociedad domiciliada en Barranquilla, Colombia.',
      'Esta Política se expide en cumplimiento de la Constitución Política de Colombia, la Ley 1581 de 2012 (Régimen General de Protección de Datos Personales), el Decreto 1377 de 2013, la Ley 1266 de 2008 (Habeas Data financiero, cuando aplique) y demás normas concordantes que las modifiquen, reglamenten o sustituyan.',
    ],
  },
  {
    heading: 'Responsable del tratamiento',
    body: [
      'LBH Colombia S.A.S. actúa como Responsable del Tratamiento de los datos personales recolectados a través de su sitio web, formularios de contacto, canales de WhatsApp comercial, correo electrónico y demás puntos de contacto comercial.',
      'Datos de contacto del Responsable: correo electrónico opz3@lbhcolombia.com, teléfono +57 301 791 2617, con domicilio en Barranquilla, Colombia.',
    ],
  },
  {
    heading: 'Datos personales que recolectamos',
    body: [
      'LBH Colombia recolecta únicamente los datos personales necesarios para gestionar relaciones comerciales y prestar sus servicios de agenciamiento marítimo, logística, operaciones portuarias y aduanas. Entre estos se incluyen:',
    ],
    list: [
      'Datos de identificación y contacto: nombre, empresa, cargo, número de celular, correo electrónico.',
      'Información comercial: tipo de servicio solicitado, descripción de la operación y requerimientos logísticos.',
      'Datos de navegación del sitio web: cookies, dirección IP y datos analíticos de uso, conforme a la sección de Cookies.',
      'Comunicaciones electrónicas que el titular dirija a LBH Colombia por correo, formularios o WhatsApp.',
    ],
  },
  {
    heading: 'Finalidades del tratamiento',
    body: [
      'Los datos personales son tratados con las siguientes finalidades:',
    ],
    list: [
      'Atender solicitudes de cotización, asesoría comercial e información sobre nuestros servicios.',
      'Gestionar, ejecutar y dar seguimiento a operaciones marítimas, logísticas, portuarias y aduaneras.',
      'Enviar comunicaciones comerciales, operativas y de servicio a través de los canales autorizados por el titular.',
      'Dar cumplimiento a obligaciones legales, contractuales, contables y regulatorias.',
      'Realizar análisis estadísticos y de mejora de la experiencia en el sitio web.',
    ],
  },
  {
    heading: 'Autorización del titular',
    body: [
      'El tratamiento de datos personales requiere la autorización previa, expresa e informada del titular, la cual podrá ser otorgada de manera escrita, verbal o mediante conductas inequívocas, como el diligenciamiento de formularios de contacto o el envío de mensajes a través de nuestros canales de WhatsApp y correo electrónico.',
      'Al suministrar sus datos a través del sitio web o de cualquier canal de LBH Colombia, el titular declara conocer y aceptar la presente Política.',
    ],
  },
  {
    heading: 'Derechos del titular (Habeas Data)',
    body: [
      'De conformidad con el artículo 8 de la Ley 1581 de 2012, el titular de los datos personales tiene derecho a:',
    ],
    list: [
      'Conocer, actualizar y rectificar sus datos personales frente a LBH Colombia.',
      'Solicitar prueba de la autorización otorgada para el tratamiento.',
      'Ser informado sobre el uso que se ha dado a sus datos personales.',
      'Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la ley.',
      'Revocar la autorización y/o solicitar la supresión de los datos cuando no exista un deber legal o contractual que imponga conservarlos.',
      'Acceder de forma gratuita a sus datos personales que hayan sido objeto de tratamiento.',
    ],
  },
  {
    heading: 'Procedimiento para ejercer sus derechos',
    body: [
      'El titular podrá ejercer sus derechos de consulta y reclamo enviando una solicitud al correo electrónico opz3@lbhcolombia.com, indicando su nombre, datos de contacto y la descripción de la petición.',
      'Las consultas serán atendidas en un término máximo de diez (10) días hábiles y los reclamos en un término máximo de quince (15) días hábiles, contados a partir del día siguiente a su recepción, conforme a los artículos 14 y 15 de la Ley 1581 de 2012. Cuando no fuere posible atender la solicitud dentro de dicho plazo, se informará al interesado los motivos de la demora y la fecha en que será atendida.',
    ],
  },
  {
    heading: 'Cookies y tecnologías de seguimiento',
    body: [
      'El sitio web de LBH Colombia utiliza cookies y tecnologías similares con fines analíticos y de mejora de la experiencia de navegación. Las cookies son pequeños archivos que se almacenan en el dispositivo del usuario.',
      'El usuario puede configurar su navegador para rechazar o eliminar las cookies; sin embargo, esto podría afectar el correcto funcionamiento de algunas secciones del sitio.',
    ],
  },
  {
    heading: 'Comunicaciones electrónicas y WhatsApp comercial',
    body: [
      'Al contactar a LBH Colombia mediante WhatsApp, correo electrónico o formularios web, el titular autoriza el uso de dichos canales para recibir respuestas comerciales y operativas relacionadas con su solicitud.',
      'LBH Colombia no remite comunicaciones comerciales masivas no solicitadas (spam) y respeta en todo momento la voluntad del titular de no recibir más comunicaciones.',
    ],
  },
  {
    heading: 'Seguridad y conservación de la información',
    body: [
      'LBH Colombia adopta medidas técnicas, humanas y administrativas razonables para proteger los datos personales frente a accesos no autorizados, pérdida, alteración o uso indebido.',
      'Los datos se conservarán durante el tiempo necesario para cumplir las finalidades descritas y las obligaciones legales aplicables. Una vez cumplidas dichas finalidades, los datos serán suprimidos o anonimizados.',
    ],
  },
  {
    heading: 'Transferencia y transmisión de datos',
    body: [
      'LBH Colombia podrá compartir datos personales con sus aliados de la red internacional LBH, autoridades portuarias, marítimas y aduaneras, y proveedores de servicios, exclusivamente cuando sea necesario para la ejecución de las operaciones contratadas y bajo deberes de confidencialidad y seguridad.',
    ],
  },
  {
    heading: 'Vigencia y modificaciones',
    body: [
      'La presente Política rige a partir de su publicación y permanecerá vigente mientras LBH Colombia realice tratamiento de datos personales. Cualquier modificación sustancial será informada a través del sitio web. Las bases de datos sujetas a tratamiento se conservarán por el término legalmente exigido.',
    ],
  },
]

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <LegalPage
        crumb="Política de Privacidad"
        title="Política de Privacidad y Tratamiento de Datos Personales"
        intro="En LBH Colombia protegemos la información de nuestros clientes y aliados conforme a la legislación colombiana vigente en materia de protección de datos personales."
        updated="Junio de 2026"
        sections={sections}
      />
      <CtaBand />
    </>
  )
}
