'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useI18n } from '@/lib/i18n'
import { SectionHeader } from './reveal'

interface Cert {
  name: string
  descKey: string
  logo: string
}

// Logos are provided by LBH and dropped into /public/certifications.
// File names map 1:1 to each certification/membership.
const CERTIFICATIONS: Cert[] = [
  { name: 'BASC', descKey: 'certs.basc', logo: '/certifications/basc.png' },
  { name: 'TRACE', descKey: 'certs.trace', logo: '/certifications/trace.png' },
  { name: 'ISO', descKey: 'certs.iso', logo: '/certifications/iso.png' },
  { name: 'FITAC', descKey: 'certs.fitac', logo: '/certifications/fitac.png' },
  { name: 'AmCham', descKey: 'certs.amcham', logo: '/certifications/amcham.png' },
]

function LogoCard({ cert }: { cert: Cert }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="mx-3 flex h-24 w-44 shrink-0 items-center justify-center rounded-xl border border-border bg-card px-6 shadow-sm">
      {failed ? (
        <span className="font-heading text-lg font-bold tracking-wide text-foreground/70">
          {cert.name}
        </span>
      ) : (
        <Image
          src={cert.logo || '/placeholder.svg'}
          alt={`Logo ${cert.name}`}
          width={140}
          height={64}
          className="h-14 w-auto object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

export function CertificationsMarquee({
  withBackground = false,
  centered = true,
  eyebrowKey = 'certs.activeLabel',
  titleKey = 'certs.title',
  subtitleKey = 'certs.marqueeNote',
  backgroundImage = '/certifications-bg.png',
}: {
  withBackground?: boolean
  centered?: boolean
  eyebrowKey?: string
  titleKey?: string
  subtitleKey?: string
  backgroundImage?: string
}) {
  const { t } = useI18n()
  // Duplicate the list so the horizontal loop is seamless.
  const loop = [...CERTIFICATIONS, ...CERTIFICATIONS]

  return (
    <section
      id="certificaciones"
      className={`relative overflow-hidden py-20 lg:py-24 ${withBackground ? '' : 'bg-secondary/30'}`}
    >
      {withBackground && (
        <>
          <Image
            src={backgroundImage || '/placeholder.svg'}
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
            className="object-cover opacity-[0.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/80 to-secondary/60" />
        </>
      )}

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow={t(eyebrowKey)}
          title={t(titleKey)}
          subtitle={t(subtitleKey)}
          align={centered ? 'center' : 'left'}
        />

        <div className="lbh-marquee-pause relative mt-4 w-full overflow-hidden">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
          <div className="lbh-marquee-track py-2" aria-hidden="false">
            {loop.map((cert, i) => (
              <LogoCard key={`${cert.name}-${i}`} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
