'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
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
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" />
                {t('cta.quote')}
              </Link>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
