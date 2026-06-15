'use client'

import { MessageCircle, Mail } from 'lucide-react'
import { InstagramIcon } from './icons/instagram-icon'
import { LinkedInIcon } from './icons/linkedin-icon'
import { useI18n } from '@/lib/i18n'
import { SITE, waLink, WA_MESSAGES } from '@/lib/config'
import { Reveal } from './reveal'

export function ContactChannels() {
  const { t } = useI18n()

  const channels = [
    {
      icon: MessageCircle,
      label: t('contactpage.whatsapp'),
      value: SITE.phoneDisplay,
      href: waLink(WA_MESSAGES.general),
      external: true,
      ariaLabel: 'WhatsApp de LBH Colombia',
    },
    {
      icon: Mail,
      label: t('contactpage.emailMarketing'),
      value: SITE.emailMarketing,
      href: `mailto:${SITE.emailMarketing}`,
    },
    {
      icon: Mail,
      label: t('contactpage.emailLogistica'),
      value: SITE.emailLogistica,
      href: `mailto:${SITE.emailLogistica}`,
    },
    {
      icon: Mail,
      label: t('contactpage.emailOps'),
      value: SITE.email,
      href: `mailto:${SITE.email}`,
    },
    {
      icon: InstagramIcon,
      label: 'Instagram',
      value: `@${SITE.instagram}`,
      href: SITE.instagramUrl,
      external: true,
      ariaLabel: 'Instagram de LBH Colombia',
    },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      value: 'LBH Colombia',
      href: SITE.linkedinUrl,
      external: true,
      ariaLabel: 'LinkedIn de LBH Colombia',
    },
  ]

  return (
    <section className="border-b border-border bg-secondary/30 py-16">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Reveal>
          <p className="mb-6 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
            {t('contactpage.channels')}
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((c, i) => {
            const Icon = c.icon
            return (
              <Reveal key={c.label} delay={i * 0.06}>
                <a
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  {...(c.ariaLabel ? { 'aria-label': c.ariaLabel } : {})}
                  className="flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="mt-1 text-sm font-medium text-foreground">{c.value}</div>
                  </div>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
