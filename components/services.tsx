'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Anchor, Users, Container, ArrowUpRight, Check } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { Reveal, SectionHeader } from './reveal'

const services = [
  {
    icon: Anchor,
    titleKey: 'svc.agency.title',
    descKey: 'svc.agency.desc',
    features: ['svc.agency.f1', 'svc.agency.f2', 'svc.agency.f3', 'svc.agency.f4'],
  },
  {
    icon: Users,
    titleKey: 'svc.husbandry.title',
    descKey: 'svc.husbandry.desc',
    features: ['svc.husbandry.f1', 'svc.husbandry.f2', 'svc.husbandry.f3', 'svc.husbandry.f4'],
  },
  {
    icon: Container,
    titleKey: 'svc.freight.title',
    descKey: 'svc.freight.desc',
    features: ['svc.freight.f1', 'svc.freight.f2', 'svc.freight.f3', 'svc.freight.f4'],
  },
]

export function Services() {
  const { t } = useI18n()

  return (
    <section id="servicios" className="py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.titleKey} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-8"
                >
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {t(s.titleKey)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t(s.descKey)}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/80">
                        <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                        {t(f)}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/servicios"
                    className="mt-7 flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    {t('services.viewFull')}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
