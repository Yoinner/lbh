'use client'

import { Anchor, Phone, Mail } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const services = [
  { key: 'svc.agency.title' },
  { key: 'svc.husbandry.title' },
  { key: 'svc.freight.title' },
  { key: 'footer.viewAll' },
]

const company = [
  { key: 'footer.aboutUs', href: '#nosotros' },
  { key: 'nav.ports', href: '#puertos' },
  { key: 'nav.certs', href: '#certificaciones' },
  { key: 'footer.contact', href: '#contacto' },
]

const ports = [
  'Barranquilla',
  'Cartagena',
  'Santa Marta',
  'Buenaventura',
  'Coveñas',
  'Puerto Bolívar',
  'Turbo / Urabá',
]

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-border bg-[var(--ocean-deep)]">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Anchor className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading text-lg font-bold text-foreground">LBH</span>
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Colombia
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {t('footer.about')}
          </p>
          <div className="mt-6 space-y-2.5">
            <a href="tel:+573157360015" className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary">
              <Phone className="h-3.5 w-3.5" /> +57 315 736 0015
            </a>
            <a href="mailto:opz3@lbhcolombia.com" className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary">
              <Mail className="h-3.5 w-3.5" /> opz3@lbhcolombia.com
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-foreground">{t('footer.services')}</p>
          <nav className="flex flex-col gap-2.5">
            {services.map((s) => (
              <a key={s.key} href="#servicios" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {t(s.key)}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-foreground">{t('footer.company')}</p>
          <nav className="flex flex-col gap-2.5">
            {company.map((c) => (
              <a key={c.key} href={c.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {t(c.key)}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-foreground">{t('footer.portCoverage')}</p>
          <div className="flex flex-wrap gap-2">
            {ports.map((p) => (
              <span key={p} className="rounded border border-border bg-white/5 px-2.5 py-1 text-xs text-foreground/70">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row md:px-8">
          <p>© 2025 LBH Colombia S.A.S. {t('footer.rights')}</p>
          <nav className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary">{t('footer.privacy')}</a>
            <a href="#" className="transition-colors hover:text-primary">{t('footer.terms')}</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
