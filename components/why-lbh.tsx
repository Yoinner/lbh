'use client'

import { Check, X, Anchor } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { SectionHeader, Reveal } from './reveal'

const comparisonRows = [
  { label: 'why.r1.label', trad: 'why.r1.trad', lbh: 'why.r1.lbh' },
  { label: 'why.r2.label', trad: 'why.r2.trad', lbh: 'why.r2.lbh' },
  { label: 'why.r3.label', trad: 'why.r3.trad', lbh: 'why.r3.lbh' },
  { label: 'why.r4.label', trad: 'why.r4.trad', lbh: 'why.r4.lbh' },
  { label: 'why.r5.label', trad: 'why.r5.trad', lbh: 'why.r5.lbh' },
]

export function WhyLbh() {
  const { t } = useI18n()

  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-[1100px] px-5 md:px-8">
        <SectionHeader
          eyebrow={t('why.eyebrow')}
          title={t('why.title')}
          subtitle={t('why.subtitle')}
          align="center"
        />

        {/* ── Desktop table (md+) ── */}
        <Reveal>
          <div className="hidden overflow-hidden rounded-2xl border border-border md:block">
            {/* Header */}
            <div
              className="grid border-b border-border bg-secondary/40"
              style={{ gridTemplateColumns: 'minmax(110px, 0.65fr) minmax(0, 1fr) minmax(0, 1.1fr)' }}
            >
              <div className="px-5 py-5" />
              <div className="px-5 py-5 text-center text-sm font-semibold text-foreground/70">
                {t('why.col.traditional')}
              </div>
              <div className="flex items-center justify-center gap-2 bg-primary/10 px-5 py-5 text-center">
                <Anchor className="h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-sm font-bold text-foreground">{t('why.col.lbh')}</span>
              </div>
            </div>

            {/* Rows */}
            {comparisonRows.map((r, i) => (
              <Reveal key={r.label} delay={i * 0.06}>
                <div
                  className={`grid items-center${i !== comparisonRows.length - 1 ? ' border-b border-border' : ''}`}
                  style={{ gridTemplateColumns: 'minmax(110px, 0.65fr) minmax(0, 1fr) minmax(0, 1.1fr)' }}
                >
                  <div className="min-w-0 px-5 py-5 text-sm font-semibold leading-relaxed text-foreground">
                    {t(r.label)}
                  </div>
                  <div className="flex min-w-0 items-center justify-center gap-2 px-5 py-5 text-center text-sm leading-relaxed text-muted-foreground">
                    <X className="h-4 w-4 flex-shrink-0 text-foreground/30" />
                    <span className="min-w-0 break-words">{t(r.trad)}</span>
                  </div>
                  <div className="flex h-full min-w-0 items-center justify-center gap-2 bg-primary/[0.06] px-5 py-5 text-center text-sm font-medium leading-relaxed text-foreground">
                    <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="min-w-0 break-words">{t(r.lbh)}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* ── Mobile cards (below md) ── */}
        <div className="flex flex-col gap-4 md:hidden">
          {comparisonRows.map((r, i) => (
            <Reveal key={r.label} delay={i * 0.06}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                {/* Category label */}
                <div className="border-b border-border bg-secondary/40 px-4 py-3">
                  <span className="text-sm font-bold text-foreground">{t(r.label)}</span>
                </div>

                {/* Agencia Tradicional */}
                <div className="flex items-start gap-3 border-b border-border px-4 py-3">
                  <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-foreground/30" />
                  <div className="min-w-0">
                    <p className="mb-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      {t('why.col.traditional')}
                    </p>
                    <p className="break-words text-sm leading-relaxed text-muted-foreground">
                      {t(r.trad)}
                    </p>
                  </div>
                </div>

                {/* LBH Colombia */}
                <div className="flex items-start gap-3 bg-primary/[0.06] px-4 py-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <div className="min-w-0">
                    <p className="mb-0.5 flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-primary">
                      <Anchor className="h-3 w-3" />
                      {t('why.col.lbh')}
                    </p>
                    <p className="break-words text-sm font-medium leading-relaxed text-foreground">
                      {t(r.lbh)}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
