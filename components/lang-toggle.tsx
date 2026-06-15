'use client'

import { useI18n, type Lang } from '@/lib/i18n'

const LANG_META: Record<Lang, { flag: string; label: string }> = {
  es: { flag: '🇨🇴', label: 'Español' },
  en: { flag: '🇺🇸', label: 'English' },
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
            aria-label={LANG_META[l].label}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              lang === l
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-secondary text-muted-foreground hover:text-foreground'
            }`}
          >
            <span aria-hidden="true">{LANG_META[l].flag}</span>
            <span className="text-xs uppercase tracking-widest">{l}</span>
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
      {langs.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          aria-label={LANG_META[l].label}
          className={`flex items-center gap-1.5 px-3 py-1.5 transition-colors ${
            lang === l
              ? 'rounded-full bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <span aria-hidden="true" className="text-base leading-none">{LANG_META[l].flag}</span>
          <span className="text-[0.7rem] font-bold uppercase tracking-widest">{l}</span>
        </button>
      ))}
    </div>
  )
}
