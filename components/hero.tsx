'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const { t } = useI18n()

  return (
    <section
      id="top"
      className="relative -mt-[72px] flex min-h-[92svh] items-center overflow-hidden pt-[72px]"
      aria-label="Presentación principal"
    >
      {/* Dominant vessel image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-vessel.png"
          alt="Buque portacontenedores atendido por LBH Colombia en puerto"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Clean, light-leaning wash for legibility (avoids heavy darkness) */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 py-20 md:px-8">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t('hero.eyebrow')}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="mt-6 font-heading text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.9rem]"
          >
            {t('hero.h1.a')}{' '}
            <span className="text-primary">{t('hero.h1.em')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            {t('hero.lead')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-[var(--ocean-deep)]"
            >
              <MessageCircle className="h-4 w-4" />
              {t('cta.quote')}
            </Link>
            <a
              href="#servicios"
              className="group inline-flex items-center gap-2 rounded-md border border-border bg-card/70 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-primary"
            >
              {t('hero.ctaSecondary')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>


        </div>
      </div>
    </section>
  )
}
