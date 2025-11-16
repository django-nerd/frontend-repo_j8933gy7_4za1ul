import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

export default function Procedures() {
  const { t } = useI18n()
  const items = t('procedures.items') || []

  return (
    <section id="procedures" className="relative py-28 bg-amber-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-serif text-emerald-950">{t('procedures.title')}</h2>
          <p className="mt-3 text-emerald-900/70">{t('procedures.sub')}</p>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05, duration: 0.45 }} className="rounded-2xl bg-white ring-1 ring-emerald-900/10 p-6 shadow-sm hover:shadow-xl transition relative overflow-hidden">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-amber-200/60 to-emerald-200/60 blur-xl" />
              <h3 className="relative font-medium text-emerald-950">{it.title}</h3>
              <p className="relative mt-2 text-sm text-emerald-900/70">{it.desc}</p>
              <a href="#contact" className="relative mt-4 inline-block text-sm text-emerald-900 hover:underline">{t('procedures.book')}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
