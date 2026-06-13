'use client'

import { ShieldCheck, Clock, Globe } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { SectionHeader, Reveal } from './reveal'

const points = [
  { icon: ShieldCheck, titleKey: 'about.p1.title', descKey: 'about.p1.desc' },
  { icon: Clock, titleKey: 'about.p2.title', descKey: 'about.p2.desc' },
  { icon: Globe, titleKey: 'about.p3.title', descKey: 'about.p3.desc' },
]

const numbers = [
  { value: '30+', key: 'metric.years' },
  { value: '7', key: 'stat.ports' },
  { value: '30+', key: 'network.countries' },
  { value: '15K+', key: 'stat.vessels' },
]

export function About() {
  const { t } = useI18n()

  return (
    <section id="nosotros" className="border-t border-border bg-secondary/30 py-24 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] gap-14 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        {/* numbers */}
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {numbers.map((n) => (
              <div key={n.key} className="bg-card p-7">
                <div className="font-heading text-4xl font-bold text-primary">{n.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{t(n.key)}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* text */}
        <div>
          <SectionHeader
            eyebrow={t('about.eyebrow')}
            title={t('about.title')}
            subtitle={t('about.body')}
          />
          <div className="space-y-5">
            {points.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={p.titleKey} delay={i * 0.1}>
                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground">{t(p.titleKey)}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {t(p.descKey)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
