'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { InstagramIcon } from './icons/instagram-icon'
import { LinkedInIcon } from './icons/linkedin-icon'
import { useI18n } from '@/lib/i18n'
import { SERVICES, NAV_LINKS } from '@/lib/services'
import { SITE, waLink, WA_MESSAGES } from '@/lib/config'

const ports = [
  { id: 'barranquilla', name: 'Barranquilla' },
  { id: 'cartagena', name: 'Cartagena' },
  { id: 'santa-marta', name: 'Santa Marta' },
  { id: 'buenaventura', name: 'Buenaventura' },
  { id: 'covenas', name: 'Coveñas' },
  { id: 'puerto-bolivar', name: 'Puerto Bolívar' },
  { id: 'turbo-uraba', name: 'Turbo / Urabá' },
  { id: 'riohacha-puerto-brisa', name: 'Riohacha / P. Brisa' },
  { id: 'tumaco', name: 'Tumaco' },
  { id: 'bogota', name: 'Bogotá' },
  { id: 'medellin', name: 'Medellín' },
]

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="section-dark border-t border-border">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/lbh-logo.png"
              alt="LBH Group Colombia"
              width={88}
              height={88}
              className="h-11 w-11 rounded-full object-cover ring-1 ring-white/15"
            />
            <span className="flex flex-col leading-none">
              <span className="font-heading text-lg font-bold text-foreground">LBH Group</span>
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Colombia
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {t('footer.about')}
          </p>
          <div className="mt-6 space-y-2.5">
            <a
              href={`tel:+573166914871`}
              aria-label="Teléfono Agenciamiento Marítimo LBH Colombia"
              className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary-foreground"
            >
              <Phone className="h-3.5 w-3.5" /> +57 316 691 4871{' '}
              <span className="text-xs text-muted-foreground">(Agenciamiento Marítimo)</span>
            </a>
            <a
              href={`tel:+573160184100`}
              aria-label="Teléfono Agente de carga internacional LBH Colombia"
              className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary-foreground"
            >
              <Phone className="h-3.5 w-3.5" /> +57 316 018 4100{' '}
              <span className="text-xs text-muted-foreground">(Agente de carga internacional)</span>
            </a>
            <a href={`mailto:${SITE.emailMarketing}`} className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary-foreground">
              <Mail className="h-3.5 w-3.5" /> {SITE.emailMarketing}
            </a>
            <a href={`mailto:${SITE.emailLogistica}`} className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary-foreground">
              <Mail className="h-3.5 w-3.5" /> {SITE.emailLogistica}
            </a>
            <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram de LBH Colombia" className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary-foreground">
              <InstagramIcon className="h-3.5 w-3.5" /> @{SITE.instagram}
            </a>
            <a href={SITE.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de LBH Colombia" className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary-foreground">
              <LinkedInIcon className="h-3.5 w-3.5" /> {SITE.linkedin}
            </a>
          </div>
          <a
            href={waLink(WA_MESSAGES.advisor, SITE.whatsappNumber)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hablar con un asesor por WhatsApp"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            {t('cta.advisor')}
          </a>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-foreground">{t('footer.services')}</p>
          <nav className="flex flex-col gap-2.5">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={s.href} className="text-sm text-muted-foreground transition-colors hover:text-primary-foreground">
                {t(s.labelKey)}
              </Link>
            ))}
            <Link href="/servicios" className="text-sm font-medium text-primary transition-colors hover:text-primary-foreground">
              {t('footer.viewAll')}
            </Link>
          </nav>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-foreground">{t('footer.company')}</p>
          <nav className="flex flex-col gap-2.5">
            {NAV_LINKS.map((c) => (
              <Link key={c.key} href={c.href} className="text-sm text-muted-foreground transition-colors hover:text-primary-foreground">
                {t(c.key)}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-foreground">{t('footer.portCoverage')}</p>
          <div className="flex flex-wrap gap-2">
            {ports.map((p) => (
              <Link
                key={p.id}
                href={`/cobertura?location=${p.id}`}
                className="rounded border border-border bg-white/5 px-2.5 py-1 text-xs text-foreground/70 transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary-foreground"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-muted-foreground md:px-8">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between w-full">
            <p>© {new Date().getFullYear()} LBH Colombia S.A.S. {t('footer.rights')}</p>
            <nav className="flex items-center gap-6">
              <Link href="/politica-de-privacidad" className="transition-colors hover:text-primary-foreground">{t('footer.privacy')}</Link>
              <Link href="/terminos-y-condiciones" className="transition-colors hover:text-primary-foreground">{t('footer.terms')}</Link>
            </nav>
          </div>
          <p className="text-center sm:text-right text-xs text-muted-foreground">
            {t('lang.dev')} {' '}
            <Link
              href="https://www.hazetech.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary transition-colors hover:text-primary-foreground hover:underline"
            >
              Haze Tech
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
