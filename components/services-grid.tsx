'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { SERVICES } from '@/lib/services'
import { Reveal } from './reveal'

export function ServicesGrid() {
  const { t } = useI18n()

  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.slug} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="h-full"
                >
                  <Link
                    href={s.href}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="mt-6 font-heading text-2xl font-bold text-foreground">
                      {t(s.labelKey)}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {t(s.shortKey)}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      {t('cta.viewService')}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
