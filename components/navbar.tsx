'use client'

import { useEffect, useState } from 'react'
import { Anchor, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useI18n } from '@/lib/i18n'
import { LangToggle } from './lang-toggle'

const links = [
  { key: 'nav.about', href: '#nosotros' },
  { key: 'nav.services', href: '#servicios' },
  { key: 'nav.ports', href: '#puertos' },
  { key: 'nav.network', href: '#red' },
  { key: 'nav.certs', href: '#certificaciones' },
]

export function Navbar() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-border bg-background/85 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-6 px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="LBH Colombia — Inicio">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Anchor className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-bold tracking-tight text-foreground">
              LBH
            </span>
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Colombia
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
          {links.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className="group relative text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
            >
              {t(l.key)}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle />
          <a
            href="#contacto"
            className="hidden rounded-md bg-primary px-4 py-2 text-[0.8rem] font-semibold text-primary-foreground transition-colors hover:bg-[var(--copper-light)] sm:inline-block"
          >
            {t('nav.quote')}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className="rounded-md border border-border p-2 text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="px-5 py-4">
              {links.map((l) => (
                <a
                  key={l.key}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-3.5 text-base font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {t(l.key)}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-4 block rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                {t('nav.quote')}
              </a>
              <div className="mt-4">
                <LangToggle variant="mobile" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
