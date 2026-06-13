'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import { useI18n } from '@/lib/i18n'
import { SectionHeader } from './reveal'

const metrics = [
  { target: 30, suffix: '+', key: 'metric.years' },
  { target: 15000, suffix: '+', key: 'metric.vessels', format: true },
  { target: 7, suffix: '', key: 'metric.ports' },
  { target: 30, suffix: '+', key: 'metric.countries' },
]

function Counter({ target, suffix, format }: { target: number; suffix: string; format?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame: number
    const start = performance.now()
    const duration = 1600
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(target * eased))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target])

  const display = format && val >= 1000 ? `${(val / 1000).toFixed(val >= target ? 0 : 1)}K` : val.toLocaleString()

  return (
    <div ref={ref} className="font-heading text-5xl font-bold text-foreground lg:text-6xl">
      {display}
      <span className="text-primary">{suffix}</span>
    </div>
  )
}

export function Metrics() {
  const { t } = useI18n()

  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow={t('metrics.eyebrow')}
          title={t('metrics.title')}
          align="center"
        />
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.key} className="text-center">
              <Counter target={m.target} suffix={m.suffix} format={m.format} />
              <div className="mx-auto mt-3 max-w-[12rem] text-sm text-muted-foreground">
                {t(m.key)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
