import { useState } from 'react'
import { useI18n } from '../i18n'

export default function Contact() {
  const [status, setStatus] = useState('')
  const { t } = useI18n()

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus(t('contact.success'))
      e.currentTarget.reset()
    } catch (err) {
      setStatus(t('contact.error'))
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-amber-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-serif text-emerald-950">{t('contact.title')}</h2>
          <p className="mt-3 text-emerald-900/70">{t('contact.sub')}</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-10 grid gap-4 sm:grid-cols-2">
          <input name="name" required placeholder={t('contact.name')} className="rounded-xl border border-emerald-900/10 bg-white/90 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200" />
          <input name="phone" required placeholder={t('contact.phone')} className="rounded-xl border border-emerald-900/10 bg-white/90 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200" />
          <input name="email" type="email" placeholder={t('contact.email')} className="rounded-xl border border-emerald-900/10 bg-white/90 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200 sm:col-span-2" />
          <textarea name="note" rows="4" placeholder={t('contact.note')} className="rounded-xl border border-emerald-900/10 bg-white/90 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200 sm:col-span-2" />
          <button className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-emerald-900 text-amber-50 px-6 py-3 text-sm font-medium shadow-lg hover:bg-emerald-800 transition">{t('contact.submit')}</button>
        </form>
        {status && <p className="mt-4 text-sm text-emerald-900/80">{status}</p>}
      </div>
    </section>
  )
}
