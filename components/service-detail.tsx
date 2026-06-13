'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Check, MessageCircle, ArrowUpRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { SERVICES, type ServiceDef } from '@/lib/services'
import { waLink, WA_MESSAGES } from '@/lib/config'
import { Reveal } from './reveal'

export function ServiceDetail({ service }: { service: ServiceDef }) {
  const { t } = useI18n()
  const Icon = service.icon
  const related = SERVICES.filter((s) => s.slug !== service.slug)

  return (
    <>
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/80">
                  {t(service.leadKey)}
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <h2 className="mt-10 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
                  {t('svcdetail.benefits')}
                </h2>
              </Reveal>
              <ul className="mt-5 space-y-3.5">
                {service.benefitKeys.map((b, i) => (
                  <Reveal key={b} delay={0.16 + i * 0.06} as="li">
                    <span className="flex items-start gap-3 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      {t(b)}
                    </span>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={0.5}>
                <a
                  href={waLink(WA_MESSAGES[service.waKey])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--ocean-deep)]"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t('cta.advisor')}
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={service.image || '/placeholder.svg'}
                  alt={t(service.labelKey)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <Reveal>
            <h2 className="mb-8 font-heading text-2xl font-bold text-foreground">
              {t('common.relatedServices')}
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {related.map((s, i) => {
              const RIcon = s.icon
              return (
                <Reveal key={s.slug} delay={i * 0.08}>
                  <Link
                    href={s.href}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
                      <RIcon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                      {t(s.labelKey)}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {t(s.shortKey)}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      {t('cta.viewService')}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
