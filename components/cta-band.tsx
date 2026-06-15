'use client'

import { MessageCircle, Phone } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { SITE, waLink, WA_MESSAGES } from '@/lib/config'
import { Reveal } from './reveal'

export function CtaBand() {
  const { t } = useI18n()

  return (
    <section className="section-dark py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-2xl">
              <h2 className="font-heading text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                {t('band.title')}
              </h2>
              <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                {t('band.subtitle')}
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap items-center justify-center gap-3">
              <a
                href={waLink(WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" />
                {t('cta.quote')}
              </a>
              <a
                href={`tel:${SITE.phoneDisplay.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
              >
                <Phone className="h-4 w-4" />
                {t('cta.secondary')}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
