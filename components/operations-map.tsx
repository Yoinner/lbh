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
import { MapPin, Building2, Mail, Phone, Smartphone } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { SectionHeader, Reveal } from './reveal'

type Coast = 'caribbean' | 'pacific'
type PointType = 'port' | 'office'

interface ContactInfo {
  code: string
  address: string
  phones?: string[]
  mobile?: string
  email: string
  department?: string
}

interface Port {
  id: string
  name: string
  coordinates: [number, number]
  coast: Coast
  cargo: { es: string; en: string }
  contact: ContactInfo
  type: PointType
  // Optional: override the Google Maps query. If omitted, uses address.
  mapsQuery?: string
  // If true, use lat/lng from coordinates for the map embed (don't change it)
  keepOriginalMapLocation?: boolean
}

const ports: Port[] = [
  {
    id: 'barranquilla',
    name: 'Barranquilla',
    coordinates: [-74.8, 11.0],
    coast: 'caribbean',
    cargo: { es: 'Granel · Carga general · Contenedores', en: 'Bulk · General cargo · Containers' },
    contact: {
      code: 'OPZ1',
      address: 'Carrera 51B #76-136, Of. 607, Edif. La Previsora',
      phones: ['+57 605 3859287'],
      email: 'opz1@lbhcolombia.com',
    },
    type: 'port',
    mapsQuery: 'Carrera 51B #76-136, Of. 607, Edif. La Previsora, Barranquilla, Colombia',
  },
  {
    id: 'cartagena',
    name: 'Cartagena',
    coordinates: [-75.51, 10.4],
    coast: 'caribbean',
    cargo: { es: 'Contenedores · Cruceros · Líquidos', en: 'Containers · Cruise · Liquids' },
    contact: {
      code: 'OPZ3',
      address: 'Manga Av California # 26-64',
      phones: ['+57 5 6935041'],
      email: 'opz3@lbhcolombia.com',
    },
    type: 'port',
    mapsQuery: 'Manga Av California #26-64, Cartagena, Colombia',
  },
  {
    id: 'santa-marta',
    name: 'Ciénaga / Santa Marta',
    coordinates: [-74.2, 11.24],
    coast: 'caribbean',
    cargo: { es: 'Carbón · Granel · Contenedores', en: 'Coal · Bulk · Containers' },
    contact: {
      code: 'OPZ2',
      address: 'Carrera 4 # 26 - 40 Of. 405, CC Prado Plaza',
      phones: ['+57 5 4368124'],
      email: 'opz2@lbhcolombia.com',
    },
    type: 'port',
    mapsQuery: 'Carrera 4 #26-40 Of. 405, CC Prado Plaza, Ciénaga, Magdalena, Colombia',
  },
  {
    id: 'covenas',
    name: 'Coveñas / Tolú',
    coordinates: [-75.69, 9.4],
    coast: 'caribbean',
    cargo: { es: 'Crudo · Terminal petrolera', en: 'Crude oil · Oil terminal' },
    contact: {
      code: 'OPZ3',
      address: 'Cra 3ra # 3-13, Edif. Socaire Urb. Alicante 2da Etapa, Apto 201',
      phones: ['+57 5 6935041'],
      email: 'opz3@lbhcolombia.com',
    },
    type: 'port',
    mapsQuery: 'Cra 3ra #3-13, Edif. Socaire Urb. Alicante 2da Etapa, Coveñas, Sucre, Colombia',
  },
  {
    id: 'puerto-bolivar',
    name: 'Puerto Bolívar',
    coordinates: [-71.97, 12.22],
    coast: 'caribbean',
    cargo: { es: 'Carbón · Exportación a granel', en: 'Coal · Bulk export' },
    contact: {
      code: 'OPZ1',
      address: 'Carrera 51B #76-136, Of. 607, Edif. La Previsora',
      phones: ['+57 605 3859287'],
      email: 'opz1@lbhcolombia.com',
    },
    type: 'port',
    keepOriginalMapLocation: true,
  },
  {
    id: 'turbo-uraba',
    name: 'Turbo / Urabá',
    coordinates: [-76.73, 8.09],
    coast: 'caribbean',
    cargo: { es: 'Banano · Carga proyecto', en: 'Banana · Project cargo' },
    contact: {
      code: 'OPZ5',
      address: 'Cr. 100 con Cl. 89 Nueva Milla de Oro de Apartadó, Centro Empresarial Santa María Oficina 326',
      email: 'opz5-uraba@lbhcolombia.com',
    },
    type: 'port',
    mapsQuery: 'Cr. 100 con Cl. 89 Nueva Milla de Oro de Apartadó, Centro Empresarial Santa María Oficina 326, Apartadó, Antioquia, Colombia',
  },
  {
    id: 'buenaventura',
    name: 'Buenaventura',
    coordinates: [-77.02, 3.88],
    coast: 'pacific',
    cargo: { es: 'Contenedores · Granel · Pacífico', en: 'Containers · Bulk · Pacific' },
    contact: {
      code: 'OPZ4',
      address: 'Calle 7 # 3-11 Of. 200, Edif. Pacific Trade Center',
      phones: ['+57 2 2413078'],
      email: 'opz4@lbhcolombia.com',
    },
    type: 'port',
    mapsQuery: 'Calle 7 #3-11 Of. 200, Edif. Pacific Trade Center, Buenaventura, Colombia',
  },
  {
    id: 'riohacha-puerto-brisa',
    name: 'Riohacha / Puerto Brisa',
    coordinates: [-72.92, 11.55],
    coast: 'caribbean',
    cargo: { es: 'Carga general · Graneles', en: 'General cargo · Bulk' },
    contact: {
      code: 'OPZ2',
      address: 'Calle 14G # 21A - 05, Barrio Cooperativo',
      phones: ['+57 5 4368124'],
      email: 'opz2@lbhcolombia.com',
    },
    type: 'port',
    mapsQuery: 'Calle 14G #21A-05, Barrio Cooperativo, Riohacha, La Guajira, Colombia',
  },
  {
    id: 'bogota',
    name: 'Bogotá',
    coordinates: [-74.09, 4.71],
    coast: 'caribbean', // not used for office type, just a placeholder
    cargo: { es: 'Sede comercial · Relaciones internacionales', en: 'Commercial HQ · International relations' },
    contact: {
      code: 'Comercial',
      address: 'Bogotá, Colombia',
      mobile: '+57 310 728 5809',
      email: 'm.luna@lbhcolombia.com',
      department: 'Commercial Relations Department | Liquids & Bulk Clean Cargoes',
    },
    type: 'office',
    mapsQuery: 'Bogotá, Colombia',
  },
  {
    id: 'medellin',
    name: 'Medellín',
    coordinates: [-75.57, 6.25],
    coast: 'caribbean', // not used for office type
    cargo: { es: 'Sede comercial · Logística', en: 'Commercial HQ · Logistics' },
    contact: {
      code: 'Comercial',
      address: 'Medellín, Antioquia',
      email: 'logistica@lbhcolombia.com',
      department: 'Logistics Department',
    },
    type: 'office',
    mapsQuery: 'Medellín, Antioquia, Colombia',
  },
]

// Slug aliases so legacy query params still work
const SLUG_ALIASES: Record<string, string> = {
  santamarta: 'santa-marta',
  cienaga: 'santa-marta',
  'cienaga-santa-marta': 'santa-marta',
  'puertobolivar': 'puerto-bolivar',
  turbo: 'turbo-uraba',
  'uraba-apartado': 'turbo-uraba',
  riohacha: 'riohacha-puerto-brisa',
  medellin: 'medellin',
  bogota: 'bogota',
}

function resolveSlug(slug: string): Port | undefined {
  const normalized = slug.toLowerCase()
  return (
    ports.find((p) => p.id === normalized) ??
    ports.find((p) => p.id === SLUG_ALIASES[normalized])
  )
}

function buildMapSrc(port: Port): string {
  if (port.keepOriginalMapLocation) {
    const [lng, lat] = port.coordinates
    return `https://www.google.com/maps?q=${lat},${lng}&z=12&output=embed`
  }
  const query = encodeURIComponent(port.mapsQuery ?? port.contact.address)
  return `https://www.google.com/maps?q=${query}&z=14&output=embed`
}

function ContactCard({ contact, type }: { contact: ContactInfo; type: PointType }) {
  const isOffice = type === 'office'

  return (
    <div className="mt-4 rounded-lg border border-border bg-secondary/30 p-4 text-sm">
      <p className="mb-2 flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary">
        {isOffice ? <Building2 className="h-3.5 w-3.5" /> : <MapPin className="h-3.5 w-3.5" />}
        {isOffice ? 'Sede comercial' : 'Oficina responsable'}
      </p>

      <p className="font-semibold text-foreground">
        {contact.code}
        {!isOffice && ` · `}
        {!isOffice && <span className="font-normal text-foreground/70">{contact.address.split(',')[0]}</span>}
      </p>

      {contact.department && (
        <p className="mt-1 text-foreground/70">{contact.department}</p>
      )}

      <p className="mt-2 text-foreground/80">{contact.address}</p>

      {contact.phones && contact.phones.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
          {contact.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="flex items-center gap-1 text-foreground/80 transition-colors hover:text-primary"
            >
              <Phone className="h-3 w-3 shrink-0" />
              {phone}
            </a>
          ))}
        </div>
      )}

      {contact.mobile && (
        <div className="mt-1.5">
          <a
            href={`tel:${contact.mobile.replace(/\s/g, '')}`}
            className="flex items-center gap-1 text-foreground/80 transition-colors hover:text-primary"
          >
            <Smartphone className="h-3 w-3 shrink-0" />
            {contact.mobile}
          </a>
        </div>
      )}

      <div className="mt-1.5">
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-1 text-foreground/80 transition-colors hover:text-primary"
        >
          <Mail className="h-3 w-3 shrink-0" />
          {contact.email}
        </a>
      </div>
    </div>
  )
}

const GEO_URL = '/colombia.geo.json'

function OperationsMapInner() {
  const { t, lang } = useI18n()
  const searchParams = useSearchParams()
  const [active, setActive] = useState<Port>(ports.find((p) => p.id === 'cartagena')!)

  useEffect(() => {
    const slug = searchParams.get('puerto')
    if (!slug) return
    const found = resolveSlug(slug)
    if (found) setActive(found)
  }, [searchParams])

  const mapsSrc = buildMapSrc(active)

  const portPoints = ports.filter((p) => p.type === 'port')
  const officePoints = ports.filter((p) => p.type === 'office')

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

                {/* Port markers (gold/amber) */}
                {portPoints.map((p) => {
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

                {/* Office markers (green) */}
                {officePoints.map((p) => {
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
                          stroke="oklch(0.60 0.18 145)"
                          strokeWidth={1.2}
                          opacity={0.7}
                        >
                          <animate attributeName="r" from="5" to="16" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="opacity" from="0.7" to="0" dur="2s" repeatCount="indefinite" />
                        </circle>
                      )}
                      <circle
                        r={isActive ? 5 : 3.5}
                        fill={isActive ? 'oklch(0.60 0.18 145)' : 'oklch(0.70 0.18 145)'}
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
                          fill: isActive ? 'oklch(0.70 0.18 145)' : 'oklch(0.75 0.15 145)',
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
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">
                    {active.type === 'office' ? 'Sede Comercial' : t(`ops.coast.${active.coast}`)}
                  </span>
                  {active.type === 'office' && (
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-emerald-400">
                      Comercial
                    </span>
                  )}
                </div>
                <h3 className="mt-2 flex items-center gap-2 font-heading text-2xl font-bold text-foreground">
                  {active.type === 'office' ? (
                    <Building2 className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <MapPin className="h-5 w-5 text-primary" />
                  )}
                  {active.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {active.type === 'office' ? 'Sede / Departamento' : t('ops.office')}
                </p>
                <div className="mt-4 rounded-lg border border-border bg-secondary/40 p-4 text-sm text-foreground/85">
                  {active.cargo[lang]}
                </div>

                {/* Contact block */}
                <ContactCard contact={active.contact} type={active.type} />

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

              {/* Port buttons */}
              <div className="space-y-2">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">Puertos</p>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-2">
                  {portPoints.map((p) => (
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

                {/* Office buttons */}
                <p className="pt-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">Sedes comerciales</p>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-2">
                  {officePoints.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActive(p)}
                      className={`rounded-lg border px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                        p.id === active.id
                          ? 'border-emerald-500/50 bg-emerald-500/10 text-foreground'
                          : 'border-border bg-card text-foreground/70 hover:border-emerald-500/30 hover:text-foreground'
                      }`}
                    >
                      <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 align-middle" />
                      {p.name}
                    </button>
                  ))}
                </div>
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
