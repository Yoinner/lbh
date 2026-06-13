'use client'

import { useI18n, type Lang } from '@/lib/i18n'

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
            className={`rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
              lang === l
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-secondary text-muted-foreground hover:text-foreground'
            }`}
          >
            {l}
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
          className={`px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-widest transition-colors ${
            lang === l
              ? 'rounded-full bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
