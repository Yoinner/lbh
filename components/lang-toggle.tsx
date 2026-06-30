'use client'

import { useI18n, type Lang } from '@/lib/i18n'

const LANG_META: Record<Lang, { label: string; short: string; fullLabel: string }> = {
  es: { label: 'ES', short: 'ES', fullLabel: 'Español' },
  en: { label: 'EN', short: 'EN', fullLabel: 'Inglés' },
}

export function LangToggle({ variant = 'desktop' }: { variant?: 'desktop' | 'mobile' }) {
  const { lang, setLang } = useI18n()
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
            aria-label={LANG_META[l].fullLabel}
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
      aria-label="Seleccionar idioma"
    >
      {langs.map((l, i) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          aria-label={LANG_META[l].fullLabel}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors ${
            lang === l
              ? 'rounded-full bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <span className="hidden sm:inline">{i === 0 ? 'Español' : 'Inglés'}</span>
          <span className="sm:hidden">{LANG_META[l].short}</span>
        </button>
      ))}
    </div>
  )
}
