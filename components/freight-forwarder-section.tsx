'use client'

import Image from 'next/image'
import { Globe2, CheckCircle2 } from 'lucide-react'
import { Reveal } from './reveal'

export function FreightForwarderSection() {
  return (
    <section className="border-t border-border bg-background py-20 lg:py-24">
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

        {/* Freight Forwarder highlight card — two columns with agentc image */}
        <Reveal delay={0.18}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-sm">
            <div className="grid gap-0 lg:grid-cols-2">
              {/* Left: image */}
              <div className="relative min-h-[260px] overflow-hidden lg:min-h-[360px]">
                <Image
                  src="/agentc.png"
                  alt="Agente de carga internacional LBH Colombia en operación portuaria"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--ocean-deep)]/30" />
              </div>
              {/* Right: content */}
              <div className="flex flex-col justify-center px-8 py-10 lg:px-10">
                <div className="flex items-center gap-3">
                  <Globe2 className="h-8 w-8 text-primary" aria-hidden="true" />
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Freight Forwarder
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Respaldados por la red internacional de LBH Group.
                </p>
                <p className="mt-4 text-base leading-relaxed text-foreground/80">
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
  )
}
