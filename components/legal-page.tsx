import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export interface LegalSection {
  heading: string
  body: string[]
  list?: string[]
}

export function LegalPage({
  crumb,
  title,
  intro,
  updated,
  sections,
}: {
  crumb: string
  title: string
  intro: string
  updated: string
  sections: LegalSection[]
}) {
  return (
    <>
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 lg:py-20">
          <nav
            className="mb-5 flex items-center gap-1.5 text-xs text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition-colors hover:text-primary">
              LBH
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground/70">{crumb}</span>
          </nav>
          <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
            Marco Legal
          </p>
          <h1 className="max-w-3xl text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {intro}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Última actualización: {updated}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="space-y-10">
            {sections.map((s, i) => (
              <article key={s.heading}>
                <h2 className="font-heading text-xl font-bold text-foreground">
                  <span className="mr-2 text-primary">{i + 1}.</span>
                  {s.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((p, j) => (
                    <p key={j} className="text-pretty leading-relaxed text-foreground/80">
                      {p}
                    </p>
                  ))}
                  {s.list && (
                    <ul className="mt-2 space-y-2.5 pl-1">
                      {s.list.map((item, k) => (
                        <li
                          key={k}
                          className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-secondary/40 p-7">
            <h2 className="font-heading text-lg font-bold text-foreground">
              Contacto del Responsable del Tratamiento
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              LBH Colombia S.A.S. — Barranquilla, Colombia.
              <br />
              Correo electrónico:{' '}
              <a
                href="mailto:opz3@lbhcolombia.com"
                className="font-medium text-primary hover:underline"
              >
                opz3@lbhcolombia.com
              </a>
              <br />
              Teléfono / WhatsApp: +57 301 791 2617
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
