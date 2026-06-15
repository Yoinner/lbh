'use client'

import { useI18n } from '@/lib/i18n'
import { SectionHeader, Reveal } from './reveal'

const stats = [
  { value: '30+', key: 'network.countries' },
  { value: '120+', key: 'network.offices' },
  { value: '5', key: 'network.continents' },
  { value: 'Oportuna', key: 'network.coords' },
]

export function Network() {
  const { t } = useI18n()

  return (
    <section id="red" className="relative overflow-hidden border-y border-border bg-secondary/30 py-24 lg:py-28">
      <div className="chart-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow={t('network.eyebrow')}
          title={t('network.title')}
          subtitle={t('network.subtitle')}
          align="center"
        />

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.08} className="bg-card/80 p-7 text-center backdrop-blur-sm">
              <div className="font-heading text-[28px] font-bold text-primary lg:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{t(s.key)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
