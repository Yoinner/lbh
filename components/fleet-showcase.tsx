'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Ship, Box, Container, Fuel, Package } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { Reveal } from './reveal'

interface Vessel {
  id: string
  labelKey: string
  icon: typeof Ship
  // Sketchfab model id for embed
  model: string
}

const VESSELS: Vessel[] = [
  { id: 'bulk', labelKey: 'fleet.bulk', icon: Box, model: '3b6f77363f1b41dfb9e4c95bd300eee9' },
  { id: 'container', labelKey: 'fleet.container', icon: Container, model: 'aaa41cca946b4a08bc08cf692b7757be' },
  { id: 'tanker', labelKey: 'fleet.tanker', icon: Fuel, model: '960b3933addf4ffbb6cb7879b7a579d2' },
  { id: 'cargo', labelKey: 'fleet.cargo', icon: Package, model: '4c7050163da94332a5fab662646e2984' },
]

function embedUrl(model: string) {
  // Lightweight Sketchfab embed: autostart off, UI minimal, dark theme.
  return `https://sketchfab.com/models/${model}/embed?ui_theme=dark&ui_infos=0&ui_controls=1&ui_stop=0&ui_watermark=0&ui_hint=0&autospin=0.2`
}

export function FleetShowcase() {
  const { t } = useI18n()
  const [active, setActive] = useState<Vessel>(VESSELS[1])

  return (
    <section id="flota" className="section-dark py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="mb-12 max-w-3xl">
          <Reveal>
            <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
              {t('fleet.eyebrow')}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-heading text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              {t('fleet.title')}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              {t('fleet.subtitle')}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          {/* Selector */}
          <div className="mb-6 flex flex-wrap gap-2.5">
            {VESSELS.map((v) => {
              const Icon = v.icon
              const isActive = v.id === active.id
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setActive(v)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-card/60 text-foreground/75 hover:border-primary/40 hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {t(v.labelKey)}
                </button>
              )
            })}
          </div>

          {/* 3D viewer */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
            <div className="aspect-[16/10] w-full sm:aspect-[16/8]">
              <AnimatePresence mode="wait">
                <motion.iframe
                  key={active.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  title={`${t(active.labelKey)} — modelo 3D`}
                  src={embedUrl(active.model)}
                  loading="lazy"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </AnimatePresence>
            </div>
            <div className="flex items-center gap-3 border-t border-border px-6 py-4">
              <Ship className="h-5 w-5 text-primary" />
              <span className="font-heading text-lg font-bold text-foreground">
                {t(active.labelKey)}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
