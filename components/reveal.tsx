'use client'

import { motion, type Variant } from 'motion/react'
import type { ReactNode } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'li' | 'section'
}) {
  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={`mb-14 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <Reveal>
        <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-heading text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className={`mt-4 text-pretty text-base leading-relaxed text-muted-foreground ${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}

export type { Variant }
