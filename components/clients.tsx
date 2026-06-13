'use client'

import { Box, Container, Fuel, Package, Anchor, Ship } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { Reveal, SectionHeader } from './reveal'

const segments = [
  { icon: Box, key: 'sector.bulk' },
  { icon: Container, key: 'sector.containers' },
  { icon: Fuel, key: 'sector.tankers' },
  { icon: Package, key: 'sector.project' },
  { icon: Anchor, key: 'sector.offshore' },
  { icon: Ship, key: 'sector.cruise' },
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

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {segments.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.key} delay={i * 0.06}>
                <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card px-4 py-8 text-center transition-colors hover:border-primary/40">
                  <Icon className="h-7 w-7 text-primary" />
                  <span className="text-sm font-semibold text-foreground">{t(s.key)}</span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
