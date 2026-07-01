'use client'

import { useI18n, type Lang } from '@/lib/i18n'

const LANG_META: Record<Lang, { label: string; short: string }> = {
  es: { label: 'ES', short: 'ES' },
  en: { label: 'EN', short: 'EN' },
}

export function LangToggle({ variant = 'desktop' }: { variant?: 'desktop' | 'mobile' }) {
  const { lang, setLang, t } = useI18n()
  const langs: Lang[] = ['es', 'en']

  if (variant === 'mobile') {
    return (
      <div className="flex gap-3">
        {langs.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            aria-label={l === 'es' ? t('lang.spanish') : t('lang.english')}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              lang === l
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-secondary text-muted-foreground hover:text-foreground'
            }`}
          >
            {LANG_META[l].short}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div
      className="flex items-center overflow-hidden rounded-full border border-border bg-secondary"
      role="group"
      aria-label={t('lang.spanish')} // Fallback, will be improved with i18n context
    >
      {langs.map((l) => (
        <div key={l} className="flex items-center">
          {l === 'en' && <span className="px-1 text-muted-foreground">/</span>}
          <button
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            aria-label={l === 'es' ? t('lang.spanish') : t('lang.english')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors ${
              lang === l
                ? 'rounded-full bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <span className="hidden sm:inline">
              {l === 'es' ? t('lang.spanish') : t('lang.english')}
            </span>
            <span className="sm:hidden">{LANG_META[l].short}</span>
          </button>
        </div>
      ))}
    </div>
  )
}
