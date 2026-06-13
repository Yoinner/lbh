import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ContactChannels } from '@/components/contact-channels'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contacto | LBH Colombia — Asesoría 24/7',
  description:
    'Contacte a LBH Colombia por WhatsApp, teléfono o correo. Asesoría comercial inmediata y atención de emergencias 24/7 en los puertos de Colombia.',
  alternates: { canonical: 'https://www.lbhcolombia.com/contacto' },
}

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrowKey="contactpage.eyebrow"
        titleKey="form.title"
        leadKey="contactpage.lead"
        crumbKey="nav.contact"
      />
      <ContactChannels />
      <ContactForm />
    </>
  )
}
