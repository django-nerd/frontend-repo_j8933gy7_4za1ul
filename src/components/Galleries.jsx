import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

const samples = [
  { id: 1, before: 'https://images.unsplash.com/photo-1515468381879-40d0ded81016?q=80&w=800&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop', label: 'Texture refinement' },
  { id: 2, before: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop', label: 'Pigment balance' },
  { id: 3, before: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1542060748-10c28b62716a?q=80&w=800&auto=format&fit=crop', label: 'Redness calming' },
]

function SplitImage({ before, after, label }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl ring-1 ring-emerald-900/10 bg-white">
      <div className="relative aspect-[4/5] w-full">
        <img src={before} alt={label + ' before'} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 w-1/2 overflow-hidden transition-all duration-700 group-hover:w-full">
          <img src={after} alt={label + ' after'} className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="absolute bottom-3 left-3 rounded-full bg-emerald-900/90 px-3 py-1 text-xs text-amber-50 shadow">{label}</div>
    </div>
  )
}

export default function Galleries() {
  const { t } = useI18n()
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-serif text-emerald-950">{t('galleries.title')}</h1>
          <p className="mt-4 text-emerald-900/70">{t('galleries.sub')}</p>
        </motion.div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {samples.map((s, idx) => (
            <motion.div key={s.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * idx, duration: 0.5 }}>
              <SplitImage before={s.before} after={s.after} label={s.label} />
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-xs text-emerald-900/60">{t('galleries.disclaimer')}</p>
      </div>
    </section>
  )
}
