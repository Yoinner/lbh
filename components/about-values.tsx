'use client'

import Image from 'next/image'
import { Target, Eye, ShieldCheck, Clock, Globe2 } from 'lucide-react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useRef } from 'react'
import { useI18n } from '@/lib/i18n'
import { Reveal } from './reveal'

const pillars = [
  { icon: ShieldCheck, titleKey: 'about.p1.title', descKey: 'about.p1.desc', accent: 'from-primary/10 to-primary/5' },
  { icon: Clock, titleKey: 'about.p2.title', descKey: 'about.p2.desc', accent: 'from-ocean-deep/10 to-ocean-deep/5' },
  { icon: Globe2, titleKey: 'about.p3.title', descKey: 'about.p3.desc', accent: 'from-steel/10 to-steel/5' },
]

/* Tilt-on-hover card wrapper */
function TiltCard({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6])
  const glowX = useTransform(springX, [-0.5, 0.5], ['0%', '100%'])
  const glowY = useTransform(springY, [-0.5, 0.5], ['0%', '100%'])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <Reveal delay={delay}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
        whileHover={{ scale: 1.02 }}
        transition={{ scale: { duration: 0.25 } }}
        className={`relative overflow-hidden ${className}`}
      >
        {/* Moving glare highlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(180px circle at ${glowX} ${glowY}, oklch(0.45 0.11 248 / 12%), transparent 70%)`,
          }}
        />
        {children}
      </motion.div>
    </Reveal>
  )
}

export function AboutValues() {
  const { t } = useI18n()

  return (
    <section className="relative py-24 lg:py-28">
      {/* ── Logo watermark ── */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/lbh-logo.png"
          alt=""
          width={680}
          height={340}
          className="w-[500px] max-w-[70vw] select-none object-contain opacity-[0.045] dark:opacity-[0.06]"
          draggable={false}
          priority={false}
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        {/* Intro paragraph */}
        <Reveal>
          <p className="max-w-3xl text-pretty text-lg leading-relaxed text-foreground/80">
            {t('about.body')}
          </p>
        </Reveal>

        {/* Mission / Vision */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {/* Misión */}
          <TiltCard delay={0} className="group">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card/80 p-8 backdrop-blur-sm">
              {/* Subtle gradient top bar */}
              <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <motion.span
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary"
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                transition={{ duration: 0.4 }}
              >
                <Target className="h-5 w-5" />
              </motion.span>
              <h2 className="mt-5 font-heading text-xl font-bold text-foreground" style={{ transform: 'translateZ(24px)' }}>
                {t('aboutpage.missionTitle')}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t('aboutpage.mission')}
              </p>
            </div>
          </TiltCard>

          {/* Visión */}
          <TiltCard delay={0.1} className="group">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card/80 p-8 backdrop-blur-sm">
              <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <motion.span
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary"
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                transition={{ duration: 0.4 }}
              >
                <Eye className="h-5 w-5" />
              </motion.span>
              <h2 className="mt-5 font-heading text-xl font-bold text-foreground" style={{ transform: 'translateZ(24px)' }}>
                {t('aboutpage.visionTitle')}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t('aboutpage.vision')}
              </p>
            </div>
          </TiltCard>
        </div>

        {/* Pillars */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <TiltCard key={p.titleKey} delay={i * 0.08} className="group">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card/80 p-8 backdrop-blur-sm">
                  <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {/* Background icon watermark */}
                  <div className="pointer-events-none absolute bottom-4 right-4 text-primary/5 transition-all duration-500 group-hover:scale-110 group-hover:text-primary/10" aria-hidden="true">
                    <Icon className="h-20 w-20 stroke-[0.8]" />
                  </div>
                  <motion.span
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary"
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-foreground" style={{ transform: 'translateZ(20px)' }}>
                    {t(p.titleKey)}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {t(p.descKey)}
                  </p>
                </div>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
