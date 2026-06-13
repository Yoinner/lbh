'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { MessageSquare, X, Send } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

interface Msg {
  from: 'amanda' | 'user'
  text: string
}

export function AmandaWidget() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Msg[]>([])
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMessages([{ from: 'amanda', text: t('amanda.greeting') }])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const send = () => {
    const text = input.trim()
    if (!text) return
    setMessages((m) => [...m, { from: 'user', text }])
    setInput('')
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'amanda', text: t('amanda.reply') }])
    }, 700)
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="flex h-[460px] w-[min(360px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                  A
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-foreground">AMANDA</div>
                  <div className="flex items-center gap-1.5 text-[0.7rem] text-primary">
                    <span className="h-1.5 w-1.5 animate-blink rounded-full bg-primary" />
                    {t('amanda.status')}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar chat"
                className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-4" role="log" aria-live="polite">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.from === 'user'
                        ? 'rounded-br-sm bg-primary text-primary-foreground'
                        : 'rounded-bl-sm bg-secondary text-foreground'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="flex items-center gap-2 border-t border-border p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder={t('amanda.placeholder')}
                aria-label="Mensaje a AMANDA"
                className="flex-1 rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50"
              />
              <button
                type="button"
                onClick={send}
                aria-label="Enviar mensaje"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-[var(--copper-light)]"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir asistente marítimo AMANDA"
        aria-expanded={open}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-105"
      >
        {!open && (
          <span
            className="absolute inset-0 rounded-full bg-primary"
            style={{ animation: 'pulse-ring 2.4s ease-out infinite' }}
          />
        )}
        {open ? <X className="relative h-6 w-6" /> : <MessageSquare className="relative h-6 w-6" />}
      </button>
    </div>
  )
}
