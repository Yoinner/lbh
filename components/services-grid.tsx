'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { SERVICES } from '@/lib/services'
import { ServiceIcon } from './icons/service-icon'
import { Reveal } from './reveal'

export function ServicesGrid() {
  const { t } = useI18n()

  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map((s, i) => {
            return (
              <Reveal key={s.slug} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="h-full"
                >
                  <Link
                    href={s.href}
                    className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-2xl border border-border p-8 transition-colors hover:border-primary/40"
                  >
                    {/* Background image */}
                    <Image
                      src={s.image || '/placeholder.svg'}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Navy overlay for legibility */}
                    <span className="absolute inset-0 bg-[var(--ocean-deep)]/82 transition-colors duration-300 group-hover:bg-[var(--ocean-deep)]/88" />
                    <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[var(--ocean-deep)] to-transparent" />

                    {/* Content */}
                    <div className="relative flex h-full flex-col">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
                        <ServiceIcon name={s.iconName} className="h-6 w-6" />
                      </span>
                      <h2 className="mt-6 font-heading text-2xl font-bold text-white">
                        {t(s.labelKey)}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/80">
                        {t(s.shortKey)}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                        {t('cta.viewService')}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
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
