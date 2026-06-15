'use client'

import Image from 'next/image'
import { useI18n } from '@/lib/i18n'
import { SectionHeader } from './reveal'

function ImageGroup({ aria }: { aria?: boolean }) {
  return (
    <div className="lbh-team-group" aria-hidden={aria ?? undefined}>
      <Image
        src="/equipo/equipo-1.jpg"
        alt={aria ? '' : 'Equipo directivo y comercial de LBH Colombia'}
        width={2048}
        height={1152}
        className="lbh-team-img"
        draggable={false}
        priority={false}
      />
      <Image
        src="/equipo/equipo-2.jpg"
        alt={aria ? '' : 'Equipo operativo y logístico de LBH Colombia'}
        width={2048}
        height={1152}
        className="lbh-team-img"
        draggable={false}
        priority={false}
      />
    </div>
  )
}

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

      {/* Full-width marquee strip */}
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

        {/* Track: [equipo-1][equipo-2][equipo-1][equipo-2] */}
        <div className="lbh-team-track">
          <ImageGroup />
          <ImageGroup aria />
        </div>
      </div>
    </section>
  )
}
