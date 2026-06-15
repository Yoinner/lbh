'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import { MessageCircle, Send } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { SERVICES } from '@/lib/services'
import { waLink, whatsappForService, composeFormMessage, type FormPayload } from '@/lib/config'
import { Reveal, SectionHeader } from './reveal'

const EMPTY: FormPayload = {
  nombre: '',
  empresa: '',
  celular: '',
  correo: '',
  servicio: '',
  descripcion: '',
}

export function ContactForm() {
  const { t } = useI18n()
  const searchParams = useSearchParams()
  const [data, setData] = useState<FormPayload>(EMPTY)
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  // Preselect the service from ?servicio=<slug> (e.g. /contacto?servicio=logistica)
  useEffect(() => {
    const servicio = searchParams.get('servicio')
    if (servicio && SERVICES.some((s) => s.slug === servicio)) {
      setData((d) => ({ ...d, servicio }))
    }
  }, [searchParams])

  const set = (k: keyof FormPayload, v: string) => {
    setData((d) => ({ ...d, [k]: v }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: false }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const required: (keyof FormPayload)[] = ['nombre', 'empresa', 'celular', 'correo', 'servicio', 'descripcion']
    const next: Record<string, boolean> = {}
    required.forEach((k) => {
      if (!data[k].trim()) next[k] = true
    })
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const selected = SERVICES.find((s) => s.slug === data.servicio)
    const servicioLabel = selected ? t(selected.labelKey) : data.servicio
    const number = whatsappForService(data.servicio)
    const url = waLink(composeFormMessage(data, servicioLabel), number)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const field =
    'w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary'

  return (
    <section id="contacto" className="py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left: intent copy */}
          <div>
            <SectionHeader
              eyebrow={t('form.eyebrow')}
              title={t('form.title')}
              subtitle={t('form.subtitle')}
            />
            <Reveal delay={0.2}>
              <ul className="space-y-4">
                {[t('cta.advisor'), t('cta.solution'), t('cta.info')].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/12 text-primary">
                      <MessageCircle className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-foreground">
                    {t('form.name')}
                  </label>
                  <input
                    id="nombre"
                    value={data.nombre}
                    onChange={(e) => set('nombre', e.target.value)}
                    className={`${field} ${errors.nombre ? 'border-destructive' : 'border-input'}`}
                    autoComplete="name"
                  />
                  {errors.nombre && <p className="mt-1 text-xs text-destructive">{t('form.required')}</p>}
                </div>
                <div>
                  <label htmlFor="empresa" className="mb-2 block text-sm font-medium text-foreground">
                    {t('form.company')}
                  </label>
                  <input
                    id="empresa"
                    value={data.empresa}
                    onChange={(e) => set('empresa', e.target.value)}
                    className={`${field} ${errors.empresa ? 'border-destructive' : 'border-input'}`}
                    autoComplete="organization"
                  />
                  {errors.empresa && <p className="mt-1 text-xs text-destructive">{t('form.required')}</p>}
                </div>
                <div>
                  <label htmlFor="celular" className="mb-2 block text-sm font-medium text-foreground">
                    {t('form.phone')}
                  </label>
                  <input
                    id="celular"
                    type="tel"
                    value={data.celular}
                    onChange={(e) => set('celular', e.target.value)}
                    className={`${field} ${errors.celular ? 'border-destructive' : 'border-input'}`}
                    autoComplete="tel"
                  />
                  {errors.celular && <p className="mt-1 text-xs text-destructive">{t('form.required')}</p>}
                </div>
                <div>
                  <label htmlFor="correo" className="mb-2 block text-sm font-medium text-foreground">
                    {t('form.email')}
                  </label>
                  <input
                    id="correo"
                    type="email"
                    value={data.correo}
                    onChange={(e) => set('correo', e.target.value)}
                    className={`${field} ${errors.correo ? 'border-destructive' : 'border-input'}`}
                    autoComplete="email"
                  />
                  {errors.correo && <p className="mt-1 text-xs text-destructive">{t('form.required')}</p>}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="servicio" className="mb-2 block text-sm font-medium text-foreground">
                  {t('form.service')}
                </label>
                <select
                  id="servicio"
                  value={data.servicio}
                  onChange={(e) => set('servicio', e.target.value)}
                  className={`${field} ${errors.servicio ? 'border-destructive' : 'border-input'}`}
                >
                  <option value="" disabled>
                    {t('form.servicePlaceholder')}
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {t(s.labelKey)}
                    </option>
                  ))}
                </select>
                {errors.servicio && <p className="mt-1 text-xs text-destructive">{t('form.required')}</p>}
              </div>

              <div className="mt-5">
                <label htmlFor="descripcion" className="mb-2 block text-sm font-medium text-foreground">
                  {t('form.description')}
                </label>
                <textarea
                  id="descripcion"
                  rows={4}
                  value={data.descripcion}
                  onChange={(e) => set('descripcion', e.target.value)}
                  placeholder={t('form.descriptionPlaceholder')}
                  className={`${field} resize-none ${errors.descripcion ? 'border-destructive' : 'border-input'}`}
                />
                {errors.descripcion && <p className="mt-1 text-xs text-destructive">{t('form.required')}</p>}
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--ocean-deep)] sm:w-auto"
              >
                <Send className="h-4 w-4" />
                {t('form.submit')}
              </button>
              <p className="mt-3 text-xs text-muted-foreground">{t('form.note')}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
