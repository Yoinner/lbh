'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'motion/react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps'
import { MapPin } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { SectionHeader, Reveal } from './reveal'

type Coast = 'caribbean' | 'pacific'

interface Port {
  id: string
  name: string
  // [longitude, latitude]
  coordinates: [number, number]
  coast: Coast
  cargo: { es: string; en: string }
}

const ports: Port[] = [
  { id: 'barranquilla', name: 'Barranquilla', coordinates: [-74.8, 11.0], coast: 'caribbean', cargo: { es: 'Granel · Carga general · Contenedores', en: 'Bulk · General cargo · Containers' } },
  { id: 'cartagena', name: 'Cartagena', coordinates: [-75.51, 10.4], coast: 'caribbean', cargo: { es: 'Contenedores · Cruceros · Líquidos', en: 'Containers · Cruise · Liquids' } },
  { id: 'santamarta', name: 'Santa Marta', coordinates: [-74.2, 11.24], coast: 'caribbean', cargo: { es: 'Carbón · Granel · Contenedores', en: 'Coal · Bulk · Containers' } },
  { id: 'covenas', name: 'Coveñas', coordinates: [-75.69, 9.4], coast: 'caribbean', cargo: { es: 'Crudo · Terminal petrolera', en: 'Crude oil · Oil terminal' } },
  { id: 'puertobolivar', name: 'Puerto Bolívar', coordinates: [-71.97, 12.22], coast: 'caribbean', cargo: { es: 'Carbón · Exportación a granel', en: 'Coal · Bulk export' } },
  { id: 'turbo', name: 'Turbo / Urabá', coordinates: [-76.73, 8.09], coast: 'caribbean', cargo: { es: 'Banano · Carga proyecto', en: 'Banana · Project cargo' } },
  { id: 'buenaventura', name: 'Buenaventura', coordinates: [-77.02, 3.88], coast: 'pacific', cargo: { es: 'Contenedores · Granel · Pacífico', en: 'Containers · Bulk · Pacific' } },
]

const GEO_URL = '/colombia.geo.json'

function OperationsMapInner() {
  const { t, lang } = useI18n()
  const searchParams = useSearchParams()
  const [active, setActive] = useState<Port>(ports[1])

  // Sync selection from ?puerto= (e.g. when arriving from the footer links)
  useEffect(() => {
    const slug = searchParams.get('puerto')
    if (!slug) return
    const found = ports.find((p) => p.id === slug.toLowerCase())
    if (found) setActive(found)
  }, [searchParams])

  const [lng, lat] = active.coordinates
  const mapsSrc = `https://www.google.com/maps?q=${lat},${lng}&z=12&output=embed`

  return (
    <section id="puertos" className="py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow={t('ops.eyebrow')}
          title={t('ops.title')}
          subtitle={t('ops.subtitle')}
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Real Colombia map */}
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card sm:aspect-[5/4] lg:aspect-auto lg:h-full lg:min-h-[520px]">
              <div className="chart-grid absolute inset-0 opacity-30" />
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ center: [-73.2, 4.6], scale: 1850 }}
                className="absolute inset-0 h-full w-full"
                style={{ width: '100%', height: '100%' }}
              >
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: 'oklch(0.30 0.045 250 / 0.55)',
                            stroke: 'oklch(0.66 0.12 55 / 0.45)',
                            strokeWidth: 0.4,
                            outline: 'none',
                          },
                          hover: {
                            fill: 'oklch(0.34 0.05 250 / 0.7)',
                            stroke: 'oklch(0.66 0.12 55 / 0.6)',
                            strokeWidth: 0.5,
                            outline: 'none',
                          },
                          pressed: { outline: 'none' },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {ports.map((p) => {
                  const isActive = p.id === active.id
                  return (
                    <Marker
                      key={p.id}
                      coordinates={p.coordinates}
                      onClick={() => setActive(p)}
                      style={{ default: { cursor: 'pointer' }, hover: { cursor: 'pointer' }, pressed: {} }}
                    >
                      {isActive && (
                        <circle
                          r={11}
                          fill="none"
                          stroke="oklch(0.66 0.12 55)"
                          strokeWidth={1.2}
                          opacity={0.7}
                        >
                          <animate attributeName="r" from="5" to="16" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="opacity" from="0.7" to="0" dur="2s" repeatCount="indefinite" />
                        </circle>
                      )}
                      <circle
                        r={isActive ? 5 : 3.5}
                        fill={isActive ? 'oklch(0.66 0.12 55)' : 'oklch(0.85 0.02 250)'}
                        stroke="oklch(0.20 0.03 250)"
                        strokeWidth={1}
                      />
                      <text
                        textAnchor="middle"
                        y={-10}
                        style={{
                          fontFamily: 'var(--font-inter), sans-serif',
                          fontSize: isActive ? 11 : 9,
                          fontWeight: 700,
                          fill: isActive ? 'oklch(0.72 0.13 55)' : 'oklch(0.9 0.02 250)',
                          pointerEvents: 'none',
                        }}
                      >
                        {p.name}
                      </text>
                    </Marker>
                  )
                })}
              </ComposableMap>
            </div>
          </Reveal>

          {/* Port detail + Google Maps + list */}
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
                <h3 className="mt-2 flex items-center gap-2 font-heading text-2xl font-bold text-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  {active.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{t('ops.office')}</p>
                <div className="mt-4 rounded-lg border border-border bg-secondary/40 p-4 text-sm text-foreground/85">
                  {active.cargo[lang]}
                </div>

                {/* Embedded Google Maps mini view */}
                <div className="mt-4 overflow-hidden rounded-lg border border-border">
                  <iframe
                    key={active.id}
                    title={`Ubicación de ${active.name}`}
                    src={mapsSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-48 w-full"
                  />
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

export function OperationsMap() {
  return (
    <Suspense fallback={<div className="min-h-[520px]" />}>
      <OperationsMapInner />
    </Suspense>
  )
}
