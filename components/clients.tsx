'use client'

import Image from 'next/image'
import { useI18n } from '@/lib/i18n'
import { Reveal, SectionHeader } from './reveal'

const segments = [
  {
    titleKey: 'sector.bulk',
    descKey: 'sector.bulk.desc',
    image: '/sector-bulk.png',
    alt: 'Buque granelero en terminal portuaria',
  },
  {
    titleKey: 'sector.containers',
    descKey: 'sector.containers.desc',
    image: '/sector-container.png',
    alt: 'Buque portacontenedores en puerto comercial',
  },
  {
    titleKey: 'sector.tankers',
    descKey: 'sector.tankers.desc',
    image: '/sector-tanker.png',
    alt: 'Buque tanquero en terminal marítima',
  },
  {
    titleKey: 'sector.project',
    descKey: 'sector.project.desc',
    image: '/sector-project.png',
    alt: 'Carga proyecto sobredimensionada en puerto',
  },
  {
    titleKey: 'sector.offshore',
    descKey: 'sector.offshore.desc',
    image: '/sector-offshore.png',
    alt: 'Embarcación offshore en operación marítima',
  },
]

export function Clients() {
  const { t } = useI18n()

  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow={t('clients.eyebrow')}
          title={t('clients.title')}
          subtitle={t('clients.subtitle')}
          align="center"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {segments.map((s, i) => (
            <Reveal key={s.titleKey} delay={i * 0.07}>
              <div className="group relative overflow-hidden rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-lg">
                {/* Background image */}
                <div className="relative h-52 w-full lg:h-56">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dark navy overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.055_250/0.92)] via-[oklch(0.24_0.055_250/0.65)] to-[oklch(0.24_0.055_250/0.25)]" />
                </div>

                {/* Text content pinned to bottom */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <h3 className="font-heading text-base font-bold leading-tight text-white">
                    {t(s.titleKey)}
                  </h3>
                  <p className="mt-1.5 text-[0.78rem] leading-snug text-white/75">
                    {t(s.descKey)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
