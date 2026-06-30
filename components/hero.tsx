'use client'

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
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          src="/videos/cargaseca_hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
        {/* Dark/bluish overlay for legibility */}
        <div className="absolute inset-0 bg-[#071c2e]/62" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071c2e]/70 via-[#071c2e]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071c2e]/55 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 py-20 md:px-8">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t('hero.eyebrow')}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="mt-6 font-heading text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.9rem]"
          >
            {t('hero.h1.a')}{' '}
            <span className="text-primary">{t('hero.h1.em')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/85"
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
            <Link
              href="/servicios"
              className="group inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/20"
            >
              {t('hero.ctaSecondary')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
