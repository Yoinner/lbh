'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Anchor, FileCheck, Ship, LifeBuoy, Navigation } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { SectionHeader } from './reveal'

const steps = [
  { icon: Anchor, titleKey: 'process.s1.title', descKey: 'process.s1.desc', n: '01' },
  { icon: FileCheck, titleKey: 'process.s2.title', descKey: 'process.s2.desc', n: '02' },
  { icon: Ship, titleKey: 'process.s3.title', descKey: 'process.s3.desc', n: '03' },
  { icon: LifeBuoy, titleKey: 'process.s4.title', descKey: 'process.s4.desc', n: '04' },
  { icon: Navigation, titleKey: 'process.s5.title', descKey: 'process.s5.desc', n: '05' },
]

export function ProcessTimeline() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className="border-y border-border bg-secondary/30 py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow={t('process.eyebrow')}
          title={t('process.title')}
          subtitle={t('process.subtitle')}
        />

        <div ref={ref} className="relative">
          {/* desktop horizontal line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block">
            <motion.div
              style={{ scaleX: lineScale }}
              className="h-full origin-left bg-primary"
            />
          </div>

          <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.titleKey}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="relative flex flex-row gap-4 lg:flex-col"
                >
                  <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="pt-1 lg:pt-5">
                    <div className="font-heading text-xs font-bold tracking-widest text-primary">
                      {s.n}
                    </div>
                    <h3 className="mt-1 font-heading text-lg font-bold text-foreground">
                      {t(s.titleKey)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t(s.descKey)}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
