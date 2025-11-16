import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

export default function Hero() {
  const { t } = useI18n()
  return (
    <section id="top" className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 pointer-events-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="max-w-2xl">
            <p className="uppercase tracking-[0.25em] text-emerald-900/70 text-xs mb-4">{t('hero.eyebrow')}</p>
            <h1 className="text-4xl sm:text-6xl font-serif font-semibold text-emerald-950 leading-[1.1]">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-emerald-950/80 max-w-xl">
              {t('hero.sub')}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 pointer-events-auto">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-emerald-900 text-amber-50 px-6 py-3 text-sm font-medium shadow-lg shadow-emerald-900/10 hover:bg-emerald-800 transition">{t('hero.ctaPricing')}</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white/80 ring-1 ring-emerald-900/10 text-emerald-900 px-6 py-3 text-sm font-medium hover:bg-white transition">{t('hero.ctaConsult')}</a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amber-50/80 via-amber-50/20 to-transparent" />
    </section>
  )
}
