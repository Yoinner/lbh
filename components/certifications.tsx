'use client'

import { motion } from 'motion/react'
import { ShieldCheck, Scale, Award, Network, Building2 } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { SectionHeader, Reveal } from './reveal'

const certs = [
  { code: 'BASC', icon: ShieldCheck, descKey: 'certs.basc' },
  { code: 'TRACE', icon: Scale, descKey: 'certs.trace' },
  { code: 'ISO', icon: Award, descKey: 'certs.iso' },
  { code: 'FITAC', icon: Network, descKey: 'certs.fitac' },
  { code: 'AmCham', icon: Building2, descKey: 'certs.amcham' },
]

export function Certifications() {
  const { t } = useI18n()

  return (
    <section id="certificaciones" className="py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow={t('certs.eyebrow')}
          title={t('certs.title')}
          subtitle={t('certs.subtitle')}
          align="center"
        />

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {certs.map((c, i) => {
            const Icon = c.icon
            return (
              <Reveal key={c.code} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-6 text-center"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="mt-4 font-heading text-lg font-bold tracking-wide text-foreground">
                    {c.code}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {t(c.descKey)}
                  </p>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
