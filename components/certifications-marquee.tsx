'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useI18n } from '@/lib/i18n'
import { CERTIFICATIONS, type CertDef } from '@/lib/config'
import { SectionHeader } from './reveal'

// ─── Logo card ────────────────────────────────────────────────────────────────

function LogoCard({ cert }: { cert: CertDef }) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className="mx-3 flex h-24 w-48 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-card px-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
      aria-label={cert.name}
    >
      {failed ? (
        <span className="font-heading text-base font-bold tracking-wide text-foreground/70">
          {cert.name}
        </span>
      ) : (
        <Image
          src={cert.logo}
          alt={`${cert.name} — ${cert.description}`}
          width={150}
          height={72}
          className="h-14 w-auto max-w-[140px] object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

// ─── Marquee track ────────────────────────────────────────────────────────────

function MarqueeTrack({ items, paused }: { items: CertDef[]; paused: boolean }) {
  // Duplicate exactly once so the CSS `translateX(-50%)` keyframe loops seamlessly.
  const loop = [...items, ...items]

  return (
    <div
      className="lbh-marquee-track py-2"
      style={{ animationPlayState: paused ? 'paused' : 'running' }}
      aria-hidden="false"
    >
      {loop.map((cert, i) => (
        <LogoCard key={`${cert.name}-${i}`} cert={cert} />
      ))}
    </div>
  )
}

// ─── Public component ─────────────────────────────────────────────────────────

export function CertificationsMarquee({
  title,
  subtitle,
  withBackground = false,
  centered = true,
  eyebrowKey = 'certs.activeLabel',
  titleKey = 'certs.title',
  subtitleKey = 'certs.marqueeNote',
  backgroundImage = '/certifications-nosotros-bg.png',
}: {
  title?: string
  subtitle?: string
  withBackground?: boolean
  centered?: boolean
  eyebrowKey?: string
  titleKey?: string
  subtitleKey?: string
  backgroundImage?: string
}) {
  const { t } = useI18n()
  const [paused, setPaused] = useState(false)

  const resolvedTitle = title ?? t(titleKey)
  const resolvedSubtitle = subtitle ?? t(subtitleKey)

  return (
    <section
      id="certificaciones"
      className={`relative overflow-hidden py-20 lg:py-24 ${withBackground ? '' : 'bg-secondary/30'}`}
    >
      {/* Optional background image with overlay */}
      {withBackground && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
            className="object-cover opacity-[0.10]"
            priority={false}
          />
          {/* Gradient overlay: keeps text legible against the faint image */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/90" />
        </>
      )}

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow={t(eyebrowKey)}
          title={resolvedTitle}
          subtitle={resolvedSubtitle}
          align={centered ? 'center' : 'left'}
        />

        {/* Marquee wrapper — clips overflow and adds edge fades */}
        <div
          className="relative mt-10 w-full overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Left edge fade */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20"
            style={{
              background: withBackground
                ? 'linear-gradient(to right, var(--background), transparent)'
                : 'linear-gradient(to right, var(--secondary), transparent)',
            }}
          />
          {/* Right edge fade */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20"
            style={{
              background: withBackground
                ? 'linear-gradient(to left, var(--background), transparent)'
                : 'linear-gradient(to left, var(--secondary), transparent)',
            }}
          />

          <MarqueeTrack items={CERTIFICATIONS} paused={paused} />
        </div>
      </div>
    </section>
  )
}
