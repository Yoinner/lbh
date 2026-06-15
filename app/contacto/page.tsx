import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PageHero } from '@/components/page-hero'
import { ContactChannels } from '@/components/contact-channels'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contacto | LBH Colombia',
  description:
    'Cuéntenos su necesidad logística. Complete el formulario y su solicitud será canalizada con el área correspondiente, o use nuestros canales directos en los puertos de Colombia.',
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
      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
      <ContactChannels />
    </>
  )
}
