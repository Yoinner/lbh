'use client'

import { motion } from 'motion/react'

/**
 * Stylized world map (equirectangular) with animated maritime trade routes
 * radiating from Colombia. Lightweight inline SVG — no external geo data.
 */

// Trade route endpoints (x,y in 0-1000 / 0-500 viewBox space)
const COLOMBIA = { x: 268, y: 268 }
const HUBS = [
  { x: 470, y: 150, label: 'Rotterdam' },
  { x: 520, y: 175, label: 'Algeciras' },
  { x: 760, y: 235, label: 'Singapore' },
  { x: 800, y: 175, label: 'Shanghai' },
  { x: 175, y: 195, label: 'Houston' },
  { x: 545, y: 330, label: 'Cape Town' },
  { x: 690, y: 300, label: 'Mumbai' },
  { x: 250, y: 360, label: 'Callao' },
]

function curve(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2
  const my = (a.y + b.y) / 2 - Math.abs(b.x - a.x) * 0.22
  return `M${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`
}

export function WorldRoutes({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 500"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="glow" cx="27%" cy="54%" r="60%">
          <stop offset="0%" stopColor="oklch(0.66 0.12 55 / 0.18)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="route" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.66 0.12 55 / 0.1)" />
          <stop offset="50%" stopColor="oklch(0.74 0.11 60 / 0.7)" />
          <stop offset="100%" stopColor="oklch(0.66 0.12 55 / 0.1)" />
        </linearGradient>
      </defs>

      <rect width="1000" height="500" fill="url(#glow)" />

      {/* Dotted landmass field (stylized world via dot grid mask) */}
      <g fill="oklch(0.45 0.05 248 / 0.55)">
        {Array.from({ length: 26 }).map((_, row) =>
          Array.from({ length: 52 }).map((_, col) => {
            const x = col * 19 + 12
            const y = row * 19 + 12
            // crude landmass mask: keep dots within rough continent bands
            const inAmericas =
              x < 320 && y > 120 && y < 420 && Math.abs(x - 230) < 130 - Math.abs(y - 250) * 0.4
            const inEurAfr =
              x > 430 && x < 600 && y > 110 && y < 410
            const inAsia = x > 600 && x < 880 && y > 120 && y < 320
            const show = inAmericas || inEurAfr || inAsia
            if (!show) return null
            return <circle key={`${row}-${col}`} cx={x} cy={y} r="1.6" />
          }),
        )}
      </g>

      {/* Trade routes */}
      {HUBS.map((h, i) => (
        <motion.path
          key={h.label}
          d={curve(COLOMBIA, h)}
          fill="none"
          stroke="url(#route)"
          strokeWidth="1.4"
          className="route-dash"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.3 + i * 0.12, ease: 'easeOut' }}
        />
      ))}

      {/* Hub nodes */}
      {HUBS.map((h, i) => (
        <motion.circle
          key={`node-${h.label}`}
          cx={h.x}
          cy={h.y}
          r="2.6"
          fill="oklch(0.74 0.11 60)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 + i * 0.1 }}
        />
      ))}

      {/* Colombia origin pulse */}
      <circle cx={COLOMBIA.x} cy={COLOMBIA.y} r="5" fill="oklch(0.74 0.11 60)" />
      <circle
        cx={COLOMBIA.x}
        cy={COLOMBIA.y}
        r="5"
        fill="none"
        stroke="oklch(0.74 0.11 60)"
        strokeWidth="1.5"
        opacity="0.6"
        style={{ transformOrigin: `${COLOMBIA.x}px ${COLOMBIA.y}px`, animation: 'pulse-ring 2.4s ease-out infinite' }}
      />
    </svg>
  )
}
