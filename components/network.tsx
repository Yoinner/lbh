'use client'

import { useI18n } from '@/lib/i18n'
import { SectionHeader, Reveal } from './reveal'
import { ExternalLink } from 'lucide-react'

const stats = [
  { value: '28+', key: 'network.countries' },
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

        <Reveal delay={0.32} className="mt-10 flex justify-center">
          <a
            href="https://lbh-group.com/offices"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            {t('network.viewAllOffices')}
            <ExternalLink className="h-4 w-4 shrink-0" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
