'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import { useI18n } from '@/lib/i18n'
import { Reveal } from './reveal'

interface Stat {
  to: number
  suffix: string
  labelKey: string
}

const STATS: Stat[] = [
  { to: 30, suffix: '+', labelKey: 'trust.years' },
  { to: 15000, suffix: '+', labelKey: 'trust.ops' },
  { to: 7, suffix: '', labelKey: 'trust.ports' },
  { to: 100, suffix: '%', labelKey: 'trust.attention' },
  { to: 24, suffix: '/7', labelKey: 'trust.response' },
]

function fmt(n: number) {
  return n >= 1000 ? `${Math.round(n / 1000)}K` : `${Math.round(n)}`
}

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(to * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref}>
      {fmt(val)}
      <span className="text-primary">{suffix}</span>
    </span>
  )
}

export function TrustMetrics() {
  const { t } = useI18n()

  return (
    <section id="confianza" className="section-dark py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="mb-14 max-w-3xl">
          <Reveal>
            <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
              {t('trust.eyebrow')}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-heading text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              {t('trust.title')}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              {t('trust.subtitle')}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s, i) => (
            <Reveal key={s.labelKey} delay={i * 0.08}>
              <div>
                <div className="font-heading text-4xl font-bold leading-none tracking-tight text-foreground sm:text-5xl">
                  <CountUp to={s.to} suffix={s.suffix} />
                </div>
                <p className="mt-3 text-sm leading-snug text-muted-foreground">
                  {t(s.labelKey)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
