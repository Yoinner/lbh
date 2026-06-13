'use client'

import { MapPin } from 'lucide-react'

const ports = [
  'Barranquilla',
  'Cartagena',
  'Santa Marta',
  'Buenaventura',
  'Coveñas',
  'Puerto Bolívar',
  'Turbo / Urabá',
]

export function PortsMarquee() {
  const items = [...ports, ...ports]
  return (
    <div className="relative overflow-hidden border-y border-border bg-secondary/40">
      <div className="flex w-max animate-[marquee_32s_linear_infinite] items-center">
        {items.map((p, i) => (
          <div
            key={`${p}-${i}`}
            className="flex flex-shrink-0 items-center gap-2.5 border-r border-border px-7 py-4"
          >
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span className="whitespace-nowrap text-sm font-semibold tracking-wide text-foreground/70">
              {p}
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
