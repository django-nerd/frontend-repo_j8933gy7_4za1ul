import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

export default function Pricing() {
  const { t } = useI18n()
  const tiers = t('pricing.tiers') || []

  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-serif text-emerald-950">{t('pricing.title')}</h2>
          <p className="mt-3 text-emerald-900/70">{t('pricing.sub')}</p>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, idx) => (
            <motion.div key={tier.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06, duration: 0.45 }} className="rounded-2xl bg-white ring-1 ring-emerald-900/10 p-6 shadow-sm hover:shadow-xl transition flex flex-col relative overflow-hidden">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-amber-200/60 to-emerald-200/60 blur-xl" />
              <div className="relative">
                <h3 className="text-lg font-medium text-emerald-950">{tier.name}</h3>
                <div className="mt-2 text-4xl font-serif text-emerald-950">${'{'}tier.price{'}'}</div>
                <ul className="mt-4 space-y-2 text-sm text-emerald-900/70">
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="relative mt-6 inline-flex items-center justify-center rounded-full bg-emerald-900 text-amber-50 px-6 py-3 text-sm font-medium shadow-lg hover:bg-emerald-800 transition">Book Now</a>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-amber-50" />
    </section>
  )
}
