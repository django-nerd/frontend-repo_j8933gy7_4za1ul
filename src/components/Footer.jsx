import { useI18n } from '../i18n'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-emerald-900/70">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} MediSpa. All rights reserved.</p>
          <p className="text-emerald-900/60">{t('footer.line1')}</p>
        </div>
      </div>
    </footer>
  )
}
