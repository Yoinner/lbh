'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Anchor,
  Truck,
  Plane,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Zap,
  Scale,
  Lock,
  HeartHandshake,
  PackageSearch,
  BarChart3,
  Globe2,
} from 'lucide-react'
import { Reveal } from './reveal'

/* ------------------------------------------------------------------ */
/* Sub-components                                                       */
/* ------------------------------------------------------------------ */

type TabId = 'maritime' | 'land' | 'air'

interface Tab {
  id: TabId
  label: string
  Icon: React.ElementType
  headline: string
  description: string
  items: string[]
}

const TABS: Tab[] = [
  {
    id: 'maritime',
    label: 'Marítimo',
    Icon: Anchor,
    headline: 'Transporte Marítimo',
    description:
      'Soluciones para carga FCL, LCL, consolidada y carga pesada, con acompañamiento en cada etapa del tránsito internacional.',
    items: [
      'Contenedor completo (FCL)',
      'Carga consolidada (LCL)',
      'Carga pesada y sobredimensionada',
      'Breakbulk y granel',
    ],
  },
  {
    id: 'land',
    label: 'Terrestre',
    Icon: Truck,
    headline: 'Transporte Terrestre',
    description:
      'Coordinación de transporte terrestre nacional e internacional, OTM y proyectos especiales de carga con alcance regional.',
    items: [
      'OTM nacional e internacional',
      'Transporte de carga proyecto',
      'Distribución puerta a puerta',
      'Fletes internacionales terrestres',
    ],
  },
  {
    id: 'air',
    label: 'Aéreo',
    Icon: Plane,
    headline: 'Transporte Aéreo',
    description:
      'Servicios puerta a puerta, carga consolidada y courier para envíos urgentes o de alto valor con cobertura global.',
    items: [
      'Servicio puerta a puerta',
      'Carga consolidada aérea',
      'Courier internacional',
      'Manejo de carga sensible y urgente',
    ],
  },
]

const OFFER_ITEMS = [
  { Icon: Zap, label: 'Eficiencia' },
  { Icon: Scale, label: 'Legalidad' },
  { Icon: Lock, label: 'Seguridad' },
  { Icon: ShieldCheck, label: 'Confiabilidad' },
  { Icon: HeartHandshake, label: 'Servicio personalizado' },
  { Icon: Layers, label: 'Soluciones integrales' },
]

const INTEGRAL_ITEMS = [
  'Cargue y descargue',
  'Consolidación y desconsolidación',
  'Transporte nacional e internacional',
  'Almacenamiento',
  'Seguro internacional',
  'Distribución',
  'Monitoreo',
  'Trazabilidad',
  'Carga proyecto',
]

/* ------------------------------------------------------------------ */
/* Main Component                                                       */
/* ------------------------------------------------------------------ */

export function LogisticaSection() {
  const [activeTab, setActiveTab] = useState<TabId>('maritime')
  const current = TABS.find((t) => t.id === activeTab)!

  return (
    <div className="border-t border-border">
      {/* ── Bloque 1: Introducción ─────────────────────────── */}
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <Reveal>
            <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
              Freight Forwarder · Coordinación Global
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-heading text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
              Logística Internacional de Extremo a Extremo
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-3xl text-pretty text-lg leading-relaxed text-foreground/75">
              Integramos transporte marítimo, terrestre y aéreo con coordinación documental,
              seguimiento operativo y acompañamiento especializado para operaciones de importación,
              exportación y carga proyecto.
            </p>
          </Reveal>

          {/* Freight Forwarder highlight card */}
          <Reveal delay={0.18}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-sm">
              <div className="grid gap-0 lg:grid-cols-[1fr_2fr]">
                <div className="flex flex-col justify-center bg-primary/8 px-8 py-10 lg:px-10">
                  <Globe2 className="h-10 w-10 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
                    Freight Forwarder
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Respaldados por la red internacional de LBH Group.
                  </p>
                </div>
                <div className="px-8 py-10 lg:px-10">
                  <p className="text-base leading-relaxed text-foreground/80">
                    Actuamos como un único punto de contacto para coordinar y gestionar su
                    operación logística, integrando consultoría, transporte, documentación,
                    trazabilidad y soporte personalizado.
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      'Consultoría logística experta',
                      'Acompañamiento personalizado',
                      'Punto único de coordinación',
                      'Importación y exportación',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Bloque 2: Modalidades de Transporte ───────────── */}
      <section className="bg-secondary/30 py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Modalidades de Transporte
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
              Soluciones multimodales adaptadas a cada tipo de carga y ruta internacional.
            </p>
          </Reveal>

          {/* Tab selector */}
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Modalidades de transporte">
            {TABS.map((tab) => {
              const Icon = tab.Icon
              const isActive = tab.id === activeTab
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tab-panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                      : 'border-border bg-card text-foreground/70 hover:border-primary/40 hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Tab panel */}
          <div
            id={`tab-panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            className="mt-6"
          >
            <Reveal key={current.id}>
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <current.Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {current.headline}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {current.description}
                    </p>
                  </div>
                </div>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {current.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Bloque 3: Qué Ofrecemos ──────────────────────── */}
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Qué Ofrecemos
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
              Contratamos, coordinamos y supervisamos los servicios requeridos por su carga,
              asegurando eficiencia, legalidad, seguridad y confiabilidad.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OFFER_ITEMS.map(({ Icon, label }, i) => (
              <Reveal key={label} delay={i * 0.07}>
                <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-heading text-base font-bold text-foreground">{label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bloque 4: Logística Integral Especializada ────── */}
      <section className="bg-secondary/30 py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
                  Logística Integral Especializada
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="font-heading text-balance text-2xl font-bold text-foreground sm:text-3xl">
                  Desde la Producción Hasta la Distribución
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                  Gestionamos cargue, descargue, consolidación, desconsolidación, transporte,
                  almacenamiento, seguro internacional, distribución, monitoreo y trazabilidad.
                </p>
              </Reveal>
              <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {INTEGRAL_ITEMS.map((item, i) => (
                  <Reveal key={item} delay={0.16 + i * 0.05} as="li">
                    <span className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <PackageSearch className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {item}
                    </span>
                  </Reveal>
                ))}
              </ul>
            </div>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-border shadow-sm">
                <Image
                  src="/logistica/equipo-logistica-1.jpg"
                  alt="Equipo LBH Colombia — Directivos y comerciales"
                  width={1440}
                  height={810}
                  className="w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Bloque 5: Equipo que Respalda la Operación ───── */}
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <Reveal>
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
                  Nuestro Equipo
                </p>
                <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                  El Equipo que Respalda la Operación
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Profesionales especializados en logística y comercio exterior, presentes en los
                principales puertos y ciudades de Colombia.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal delay={0}>
              <div className="group overflow-hidden rounded-2xl border border-border shadow-sm transition-shadow hover:shadow-md">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src="/logistica/equipo-logistica-1.jpg"
                    alt="Equipo directivo y comercial de LBH Colombia"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="bg-card px-6 py-5">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-primary" aria-hidden="true" />
                    <p className="font-heading text-base font-bold text-foreground">
                      Equipo Directivo y Comercial
                    </p>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    Director General, Relaciones Comerciales, Planificación Estratégica y
                    Operaciones Portuarias.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="group overflow-hidden rounded-2xl border border-border shadow-sm transition-shadow hover:shadow-md">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src="/logistica/equipo-logistica-2.jpg"
                    alt="Equipo gerentes operativos de LBH Colombia"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="bg-card px-6 py-5">
                  <div className="flex items-center gap-2">
                    <Globe2 className="h-4 w-4 text-primary" aria-hidden="true" />
                    <p className="font-heading text-base font-bold text-foreground">
                      Gerentes Operativos por Área
                    </p>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    Gerentes de las cuatro áreas operativas regionales, División de Logística e
                    Innovación y Tecnología.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
