'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { useI18n } from '@/lib/i18n'
import { SectionHeader, Reveal } from './reveal'

type Coast = 'caribbean' | 'pacific'

interface Port {
  id: string
  name: string
  // percentage coords over the map container
  x: number
  y: number
  coast: Coast
  cargo: { es: string; en: string }
}

const ports: Port[] = [
  { id: 'barranquilla', name: 'Barranquilla', x: 44, y: 18, coast: 'caribbean', cargo: { es: 'Granel · Carga general · Contenedores', en: 'Bulk · General cargo · Containers' } },
  { id: 'cartagena', name: 'Cartagena', x: 35, y: 23, coast: 'caribbean', cargo: { es: 'Contenedores · Cruceros · Líquidos', en: 'Containers · Cruise · Liquids' } },
  { id: 'santamarta', name: 'Santa Marta', x: 50, y: 13, coast: 'caribbean', cargo: { es: 'Carbón · Granel · Contenedores', en: 'Coal · Bulk · Containers' } },
  { id: 'covenas', name: 'Coveñas', x: 33, y: 31, coast: 'caribbean', cargo: { es: 'Crudo · Terminal petrolera', en: 'Crude oil · Oil terminal' } },
  { id: 'puertobolivar', name: 'Puerto Bolívar', x: 63, y: 9, coast: 'caribbean', cargo: { es: 'Carbón · Exportación a granel', en: 'Coal · Bulk export' } },
  { id: 'turbo', name: 'Turbo / Urabá', x: 26, y: 36, coast: 'caribbean', cargo: { es: 'Banano · Carga proyecto', en: 'Banana · Project cargo' } },
  { id: 'buenaventura', name: 'Buenaventura', x: 21, y: 60, coast: 'pacific', cargo: { es: 'Contenedores · Granel · Pacífico', en: 'Containers · Bulk · Pacific' } },
]

// Stylized Colombia outline path (decorative, normalized to a 0-100 box-ish)
const COLOMBIA_PATH =
  'M58 4 L70 7 L72 16 L64 22 L60 30 L66 38 L62 50 L54 58 L46 56 L38 62 L30 60 L22 66 L16 74 L20 84 L30 90 L34 80 L40 74 L48 70 L52 60 L44 52 L40 42 L34 36 L30 30 L34 24 L42 22 L46 14 L52 8 Z'

export function OperationsMap() {
  const { t, lang } = useI18n()
  const [active, setActive] = useState<Port>(ports[1])

  return (
    <section id="puertos" className="py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow={t('ops.eyebrow')}
          title={t('ops.title')}
          subtitle={t('ops.subtitle')}
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Map */}
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card sm:aspect-[5/4] lg:aspect-auto lg:h-full lg:min-h-[480px]">
              <div className="chart-grid absolute inset-0 opacity-40" />
              <svg viewBox="0 0 90 96" className="absolute inset-0 h-full w-full p-6" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <path
                  d={COLOMBIA_PATH}
                  fill="oklch(0.28 0.04 250 / 0.6)"
                  stroke="oklch(0.66 0.12 55 / 0.45)"
                  strokeWidth="0.6"
                />
              </svg>

              {/* Port nodes */}
              {ports.map((p) => {
                const isActive = p.id === active.id
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActive(p)}
                    aria-label={p.name}
                    aria-pressed={isActive}
                    className="group absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  >
                    {isActive && (
                      <span
                        className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary"
                        style={{ animation: 'pulse-ring 2s ease-out infinite' }}
                      />
                    )}
                    <span
                      className={`relative block h-3 w-3 rounded-full ring-2 transition-all ${
                        isActive
                          ? 'bg-primary ring-primary/40'
                          : 'bg-foreground/40 ring-transparent group-hover:bg-primary group-hover:ring-primary/30'
                      }`}
                    />
                    <span
                      className={`pointer-events-none absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap rounded px-1.5 py-0.5 text-[0.6rem] font-semibold transition-colors ${
                        isActive ? 'bg-primary text-primary-foreground' : 'text-foreground/60 group-hover:text-foreground'
                      }`}
                    >
                      {p.name}
                    </span>
                  </button>
                )
              })}
            </div>
          </Reveal>

          {/* Port detail + list */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-5">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">
                  {t(`ops.coast.${active.coast}`)}
                </span>
                <h3 className="mt-2 font-heading text-2xl font-bold text-foreground">
                  {active.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{t('ops.office')}</p>
                <div className="mt-5 rounded-lg border border-border bg-secondary/40 p-4 text-sm text-foreground/85">
                  {active.cargo[lang]}
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-2">
                {ports.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActive(p)}
                    className={`rounded-lg border px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                      p.id === active.id
                        ? 'border-primary/50 bg-primary/10 text-foreground'
                        : 'border-border bg-card text-foreground/70 hover:border-primary/30 hover:text-foreground'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
