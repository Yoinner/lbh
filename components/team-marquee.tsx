'use client'

import Image from 'next/image'
import { useI18n } from '@/lib/i18n'
import { SectionHeader } from './reveal'

const teamImages = [
  {
    src: '/equipo/equipo-1.jpg',
    alt: 'Equipo directivo y comercial de LBH Colombia',
  },
  {
    src: '/equipo/equipo-2.jpg',
    alt: 'Equipo operativo y logístico de LBH Colombia',
  },
]

// Duplicate for seamless infinite loop: [1, 2, 1, 2]
const loop = [...teamImages, ...teamImages]

export function TeamMarquee() {
  const { t } = useI18n()

  return (
    <section className="overflow-hidden py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow={t('team.eyebrow')}
          title={t('team.title')}
          subtitle={t('team.subtitle')}
          align="center"
        />
      </div>

      {/* Full-width marquee — intentionally breaks out of the content container */}
      <div
        className="lbh-team-pause relative mt-10 w-full overflow-hidden"
        aria-label="Carrusel del equipo LBH Colombia"
      >
        {/* Left edge fade */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-24"
          style={{ background: 'linear-gradient(to right, var(--background), transparent)' }}
          aria-hidden="true"
        />
        {/* Right edge fade */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-24"
          style={{ background: 'linear-gradient(to left, var(--background), transparent)' }}
          aria-hidden="true"
        />

        <div className="lbh-team-track">
          {loop.map((img, i) => (
            <div
              key={i}
              className="shrink-0"
              style={{ lineHeight: 0 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={2048}
                height={1152}
                className="block h-[260px] w-auto object-cover md:h-[340px] lg:h-[400px]"
                draggable={false}
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
