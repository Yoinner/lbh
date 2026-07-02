'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import { Reveal, SectionHeader } from './reveal'
import { ArrowRight } from 'lucide-react'

interface CityCard {
  id: string
  name: string
  region: { es: string; en: string }
  coast: { es: string; en: string }
  photo: string
  /** slug passed as ?location= to /cobertura */
  locationSlug: string
}

const cities: CityCard[] = [
  {
    id: 'barranquilla',
    name: 'Barranquilla',
    region: { es: 'Atlántico', en: 'Atlántico' },
    coast: { es: 'Costa Caribe', en: 'Caribbean Coast' },
    photo: '/ciudades/Barranquilla.jpeg',
    locationSlug: 'barranquilla',
  },
  {
    id: 'cartagena',
    name: 'Cartagena',
    region: { es: 'Bolívar', en: 'Bolívar' },
    coast: { es: 'Costa Caribe', en: 'Caribbean Coast' },
    photo: '/ciudades/Cartagena.jpeg',
    locationSlug: 'cartagena',
  },
  {
    id: 'cienaga',
    name: 'Ciénaga',
    region: { es: 'Magdalena', en: 'Magdalena' },
    coast: { es: 'Costa Caribe', en: 'Caribbean Coast' },
    photo: '/ciudades/cienaga.jpg',
    locationSlug: 'cienaga',
  },
  {
    id: 'santa-marta',
    name: 'Santa Marta',
    region: { es: 'Magdalena', en: 'Magdalena' },
    coast: { es: 'Costa Caribe', en: 'Caribbean Coast' },
    photo: '/ciudades/Santamarta.jpeg',
    locationSlug: 'santamarta',
  },
  {
    id: 'riohacha',
    name: 'Riohacha / Puerto Brisa',
    region: { es: 'La Guajira', en: 'La Guajira' },
    coast: { es: 'Costa Caribe', en: 'Caribbean Coast' },
    photo: '/ciudades/Rioacha.jpeg',
    locationSlug: 'riohacha',
  },
  {
    id: 'puerto-bolivar',
    name: 'Puerto Bolívar',
    region: { es: 'La Guajira', en: 'La Guajira' },
    coast: { es: 'Costa Caribe', en: 'Caribbean Coast' },
    photo: '/ciudades/PuertoBolivar.jpeg',
    locationSlug: 'puertobolivar',
  },
  {
    id: 'covenas',
    name: 'Coveñas / Tolú',
    region: { es: 'Sucre', en: 'Sucre' },
    coast: { es: 'Costa Caribe', en: 'Caribbean Coast' },
    photo: '/ciudades/Covenas.jpeg',
    locationSlug: 'covenas',
  },
  {
    id: 'turbo',
    name: 'Turbo / Urabá',
    region: { es: 'Antioquia', en: 'Antioquia' },
    coast: { es: 'Costa Caribe', en: 'Caribbean Coast' },
    photo: '/ciudades/Turbouraba.jpeg',
    locationSlug: 'turbo',
  },
  {
    id: 'buenaventura',
    name: 'Buenaventura',
    region: { es: 'Valle del Cauca', en: 'Valle del Cauca' },
    coast: { es: 'Costa Pacífico', en: 'Pacific Coast' },
    photo: '/ciudades/Buenaventura.jpeg',
    locationSlug: 'buenaventura',
  },
  {
    id: 'tumaco',
    name: 'Tumaco',
    region: { es: 'Nariño', en: 'Nariño' },
    coast: { es: 'Costa Pacífico', en: 'Pacific Coast' },
    photo: '/ciudades/Tumaco.jpeg',
    locationSlug: 'tumaco',
  },
  {
    id: 'bogota',
    name: 'Bogotá',
    region: { es: 'Cundinamarca', en: 'Cundinamarca' },
    coast: { es: 'Sede Comercial', en: 'Commercial Office' },
    photo: '/ciudades/Bogota.jpeg',
    locationSlug: 'bogota',
  },
  {
    id: 'medellin',
    name: 'Medellín',
    region: { es: 'Antioquia', en: 'Antioquia' },
    coast: { es: 'Sede Comercial', en: 'Commercial Office' },
    photo: '/ciudades/Medellin.jpeg',
    locationSlug: 'medellin',
  },
]

export function OfficesCarousel() {
  const { t, lang } = useI18n()

  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow={t('coverage.eyebrow')}
          title={t('coverage.title')}
          subtitle={t('coverage.subtitle')}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cities.map((city, i) => (
            <Reveal key={city.id} delay={i * 0.04}>
              <Link
                href={`/cobertura?location=${city.locationSlug}`}
                className="group relative block overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={city.photo}
                    alt={`Vista de ${city.name}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-primary/20 px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-primary backdrop-blur-sm">
                    {city.coast[lang]}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-semibold text-foreground leading-tight">{city.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{city.region[lang]}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.48} className="mt-10 flex justify-center">
          <Link
            href="/cobertura"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            {t('offices.viewMap')}
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
