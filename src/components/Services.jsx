import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

export default function Services() {
  const { t } = useI18n()
  const sections = t('services.sections') || []

  return (
    <section className="relative py-28 bg-amber-50/60">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,232,201,0.6),rgba(255,255,255,0))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-serif text-emerald-950">{t('services.title')}</h1>
          <p className="mt-4 text-emerald-900/70">{t('services.sub')}</p>
        </motion.div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((sec, idx) => (
            <motion.div key={sec.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * idx, duration: 0.5 }} className="group relative overflow-hidden rounded-2xl bg-white/80 ring-1 ring-emerald-900/10 p-6 shadow-sm hover:shadow-xl">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-amber-200/60 to-emerald-200/60 blur-xl" />
              <h3 className="relative text-lg font-medium text-emerald-950">{sec.name}</h3>
              <p className="relative mt-2 text-sm text-emerald-900/70">{sec.blurb}</p>
              <a href="#contact" className="relative mt-6 inline-flex items-center rounded-full bg-emerald-900 px-4 py-2 text-xs font-medium text-amber-50 shadow hover:bg-emerald-800 transition">Book this service</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
