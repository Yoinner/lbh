'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { Reveal } from './reveal'

export function PageHero({
  eyebrowKey,
  titleKey,
  leadKey,
  crumbKey,
  backgroundImage,
  backgroundImageMode = 'contain',
}: {
  eyebrowKey: string
  titleKey: string
  leadKey?: string
  crumbKey?: string
  backgroundImage?: string
  backgroundImageMode?: 'contain' | 'cover'
}) {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/30">
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className={
              backgroundImageMode === 'cover'
                ? 'object-cover opacity-30'
                : 'object-contain opacity-[0.15]'
            }
            priority
            aria-hidden="true"
          />
          {backgroundImageMode === 'cover' && (
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" aria-hidden="true" />
          )}
        </>
      )}
      <div className="relative z-10 mx-auto max-w-[1280px] px-5 py-16 md:px-8 lg:py-20">
        {crumbKey && (
          <Reveal>
            <nav className="mb-5 flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="transition-colors hover:text-primary">
                LBH
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground/70">{t(crumbKey)}</span>
            </nav>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
            {t(eyebrowKey)}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="max-w-3xl font-heading text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
            {t(titleKey)}
          </h1>
        </Reveal>
        {leadKey && (
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {t(leadKey)}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
