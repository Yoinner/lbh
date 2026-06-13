'use client'

import { Check, X, Anchor } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { SectionHeader, Reveal } from './reveal'

const rows = [
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

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border">
            {/* Header row */}
            <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-border bg-secondary/40">
              <div className="px-5 py-5 text-sm font-semibold text-muted-foreground" />
              <div className="px-5 py-5 text-center text-sm font-semibold text-foreground/70">
                {t('why.col.traditional')}
              </div>
              <div className="flex items-center justify-center gap-2 bg-primary/10 px-5 py-5 text-center">
                <Anchor className="h-4 w-4 text-primary" />
                <span className="text-sm font-bold text-foreground">{t('why.col.lbh')}</span>
              </div>
            </div>

            {rows.map((r, i) => (
              <Reveal
                key={r.label}
                delay={i * 0.06}
                className={`grid grid-cols-[1.2fr_1fr_1fr] items-center ${
                  i !== rows.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <div className="px-5 py-5 text-sm font-semibold text-foreground">
                  {t(r.label)}
                </div>
                <div className="flex items-center justify-center gap-2 px-5 py-5 text-center text-sm text-muted-foreground">
                  <X className="h-4 w-4 flex-shrink-0 text-foreground/30" />
                  <span>{t(r.trad)}</span>
                </div>
                <div className="flex h-full items-center justify-center gap-2 bg-primary/[0.06] px-5 py-5 text-center text-sm font-medium text-foreground">
                  <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{t(r.lbh)}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
