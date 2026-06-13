'use client'

import { Phone, ArrowRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { Reveal } from './reveal'

export function Cta() {
  const { t } = useI18n()

  return (
    <section id="contacto" className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.28_0.05_250)_0%,var(--background)_70%)]" />
      <div className="chart-grid mask-radial absolute inset-0 opacity-50" />
      <div
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle, oklch(0.66 0.12 55 / 0.16) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-2xl px-5 text-center md:px-8">
        <Reveal>
          <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
            {t('cta.eyebrow')}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-heading text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t('cta.title')}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            {t('cta.body')}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:opz3@lbhcolombia.com"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-[var(--copper-light)] hover:shadow-[0_10px_30px_-8px_var(--copper)]"
            >
              {t('cta.primary')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+573157360015"
              className="glass inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {t('cta.secondary')}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
