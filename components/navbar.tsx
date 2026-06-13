'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Anchor, Menu, X, ChevronDown, Instagram, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useI18n } from '@/lib/i18n'
import { LangToggle } from './lang-toggle'
import { SERVICES } from '@/lib/services'
import { SITE, waLink, WA_MESSAGES } from '@/lib/config'

export function Navbar() {
  const { t } = useI18n()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [svcOpen, setSvcOpen] = useState(false)
  const [mobileSvc, setMobileSvc] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setOpen(false)
    setSvcOpen(false)
    setMobileSvc(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-border bg-background/90 shadow-sm backdrop-blur-xl'
          : 'border-transparent bg-background/60 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-6 px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="LBH Colombia — Inicio">
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
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary' : 'text-foreground/75'
            }`}
          >
            {t('nav.home')}
          </Link>
          <Link
            href="/nosotros"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/nosotros') ? 'text-primary' : 'text-foreground/75'
            }`}
          >
            {t('nav.about')}
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <Link
              href="/servicios"
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                isActive('/servicios') ? 'text-primary' : 'text-foreground/75'
              }`}
            >
              {t('nav.services')}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${svcOpen ? 'rotate-180' : ''}`}
              />
            </Link>

            <AnimatePresence>
              {svcOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-[440px] -translate-x-1/2 pt-3"
                >
                  <div className="overflow-hidden rounded-xl border border-border bg-popover shadow-xl">
                    <div className="grid grid-cols-1 gap-1 p-2">
                      {SERVICES.map((s) => {
                        const Icon = s.icon
                        return (
                          <Link
                            key={s.slug}
                            href={s.href}
                            className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-secondary"
                          >
                            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                              <Icon className="h-[18px] w-[18px]" />
                            </span>
                            <span className="leading-tight">
                              <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
                                {t(s.labelKey)}
                              </span>
                              <span className="mt-0.5 block text-xs text-muted-foreground">
                                {t(s.shortKey)}
                              </span>
                            </span>
                          </Link>
                        )
                      })}
                    </div>
                    <Link
                      href="/servicios"
                      className="flex items-center justify-center border-t border-border bg-secondary/50 py-2.5 text-xs font-semibold text-primary transition-colors hover:bg-secondary"
                    >
                      {t('nav.viewAllServices')}
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/cobertura"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/cobertura') ? 'text-primary' : 'text-foreground/75'
            }`}
          >
            {t('nav.coverage')}
          </Link>
          <Link
            href="/contacto"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/contacto') ? 'text-primary' : 'text-foreground/75'
            }`}
          >
            {t('nav.contact')}
          </Link>
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de LBH Colombia"
            className="hidden h-9 w-9 items-center justify-center rounded-md border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary sm:flex"
          >
            <Instagram className="h-[18px] w-[18px]" />
          </a>
          <LangToggle />
          <a
            href={waLink(WA_MESSAGES.quote)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-[0.8rem] font-semibold text-primary-foreground transition-colors hover:bg-[var(--ocean-deep)] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            {t('cta.quote')}
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

      {/* Mobile menu */}
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
              <Link href="/" className="block border-b border-border py-3.5 text-base font-medium text-foreground/80">
                {t('nav.home')}
              </Link>
              <Link href="/nosotros" className="block border-b border-border py-3.5 text-base font-medium text-foreground/80">
                {t('nav.about')}
              </Link>

              {/* Mobile services accordion */}
              <button
                type="button"
                onClick={() => setMobileSvc((v) => !v)}
                className="flex w-full items-center justify-between border-b border-border py-3.5 text-base font-medium text-foreground/80"
                aria-expanded={mobileSvc}
              >
                {t('nav.services')}
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSvc ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {mobileSvc && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={s.href}
                        className="block border-b border-border py-3 pl-4 text-sm text-foreground/70"
                      >
                        {t(s.labelKey)}
                      </Link>
                    ))}
                    <Link
                      href="/servicios"
                      className="block border-b border-border py-3 pl-4 text-sm font-semibold text-primary"
                    >
                      {t('nav.viewAllServices')}
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href="/cobertura" className="block border-b border-border py-3.5 text-base font-medium text-foreground/80">
                {t('nav.coverage')}
              </Link>
              <Link href="/contacto" className="block border-b border-border py-3.5 text-base font-medium text-foreground/80">
                {t('nav.contact')}
              </Link>

              <a
                href={waLink(WA_MESSAGES.quote)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                {t('cta.quote')}
              </a>
              <div className="mt-4 flex items-center justify-between">
                <LangToggle variant="mobile" />
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center gap-2 text-sm font-medium text-foreground/70"
                >
                  <Instagram className="h-5 w-5" />@{SITE.instagram}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
