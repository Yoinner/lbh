'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight, Phone, Ship, Activity } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { WorldRoutes } from './world-routes'

const stats = [
  { value: '30', suffix: '+', key: 'stat.years' },
  { value: '15', suffix: 'K+', key: 'stat.vessels' },
  { value: '7', suffix: '', key: 'stat.ports' },
  { value: '24', suffix: '/7', key: 'stat.response' },
]

const certs = ['BASC', 'TRACE', 'ISO', 'FITAC', 'AmCham']

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const { t } = useI18n()

  return (
    <section
      id="top"
      className="relative -mt-[72px] flex min-h-[100svh] items-center overflow-hidden pt-[72px]"
      aria-label="Presentación principal"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-vessel.png"
          alt="Buque portacontenedores en puerto al atardecer"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Nautical chart grid */}
      <div className="chart-grid mask-radial absolute inset-0 opacity-60" aria-hidden="true" />

      {/* World trade routes */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[60%] opacity-90 lg:block">
        <WorldRoutes className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="glass mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-primary" />
            {t('hero.eyebrow')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="font-heading text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem]"
          >
            {t('hero.title1')}{' '}
            <span className="text-primary">{t('hero.titleEm')}</span>{' '}
            {t('hero.title2')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground"
          >
            {t('hero.desc')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-[var(--copper-light)] hover:shadow-[0_10px_30px_-8px_var(--copper)]"
            >
              <Phone className="h-4 w-4" />
              {t('hero.ctaPrimary')}
            </a>
            <a
              href="#servicios"
              className="glass group inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              {t('hero.ctaSecondary')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* certifications */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10"
          >
            <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {t('certs.activeLabel')}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {certs.map((c) => (
                <span
                  key={c}
                  className="rounded border border-border bg-white/5 px-3 py-1.5 text-[0.7rem] font-bold tracking-wider text-foreground/75"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: floating metric panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
          className="relative"
        >
          {/* floating vessel badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="glass absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-[35px] px-4 py-3 shadow-xl sm:flex italic"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <Ship className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-foreground">LBH Network</div>
              <div className="text-[0.7rem] text-muted-foreground">30+ {t('network.countries')}</div>
            </div>
          </motion.div>

          <div className="glass animate-float relative overflow-hidden rounded-2xl p-1.5 shadow-2xl">
            <div className="flex items-center justify-between rounded-xl bg-background/40 px-4 py-3">
              <div className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                <Activity className="h-3.5 w-3.5 text-primary" />
                {t('hero.metricLive')}
              </div>
              <span className="flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-primary">
                <span className="h-1.5 w-1.5 animate-blink rounded-full bg-primary" />
                Live
              </span>
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border">
              {stats.map((s, i) => (
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="bg-card/80 p-5"
                >
                  <div className="font-heading text-3xl font-bold leading-none text-foreground sm:text-4xl">
                    {s.value}
                    <span className="text-primary">{s.suffix}</span>
                  </div>
                  <div className="mt-1.5 text-xs text-muted-foreground">
                    {t(s.key)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
