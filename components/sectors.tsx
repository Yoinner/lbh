'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { useI18n } from '@/lib/i18n'
import { SectionHeader, Reveal } from './reveal'

const sectors = [
  { img: '/sector-bulk.png', titleKey: 'sector.bulk', descKey: 'sector.bulk.desc' },
  { img: '/sector-project.png', titleKey: 'sector.project', descKey: 'sector.project.desc' },
  { img: '/sector-tanker.png', titleKey: 'sector.tankers', descKey: 'sector.tankers.desc' },
  { img: '/sector-container.png', titleKey: 'sector.containers', descKey: 'sector.containers.desc' },
  { img: '/sector-offshore.png', titleKey: 'sector.offshore', descKey: 'sector.offshore.desc' },
  { img: '/sector-cruise.png', titleKey: 'sector.cruise', descKey: 'sector.cruise.desc' },
]

export function Sectors() {
  const { t } = useI18n()

  return (
    <section className="border-t border-border bg-secondary/30 py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow={t('sectors.eyebrow')}
          title={t('sectors.title')}
          subtitle={t('sectors.subtitle')}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal key={s.titleKey} delay={(i % 3) * 0.1}>
              <motion.div
                whileHover="hover"
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border"
              >
                <motion.div
                  variants={{ hover: { scale: 1.06 } }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={s.img}
                    alt={t(s.titleKey)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {t(s.titleKey)}
                  </h3>
                  <p className="mt-1 max-w-xs text-sm text-foreground/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {t(s.descKey)}
                  </p>
                </div>
                <span className="absolute left-0 top-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
