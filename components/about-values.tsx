'use client'

import { Target, Eye, ShieldCheck, Clock, Globe2 } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { Reveal } from './reveal'

const pillars = [
  { icon: ShieldCheck, titleKey: 'about.p1.title', descKey: 'about.p1.desc' },
  { icon: Clock, titleKey: 'about.p2.title', descKey: 'about.p2.desc' },
  { icon: Globe2, titleKey: 'about.p3.title', descKey: 'about.p3.desc' },
]

export function AboutValues() {
  const { t } = useI18n()

  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        {/* Intro paragraph */}
        <Reveal>
          <p className="max-w-3xl text-pretty text-lg leading-relaxed text-foreground/80">
            {t('about.body')}
          </p>
        </Reveal>

        {/* Mission / Vision */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <Target className="h-5 w-5" />
              </span>
              <h2 className="mt-5 font-heading text-xl font-bold text-foreground">
                {t('aboutpage.missionTitle')}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t('aboutpage.mission')}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <Eye className="h-5 w-5" />
              </span>
              <h2 className="mt-5 font-heading text-xl font-bold text-foreground">
                {t('aboutpage.visionTitle')}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t('aboutpage.vision')}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Pillars */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.titleKey} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                    {t(p.titleKey)}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {t(p.descKey)}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
