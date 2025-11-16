import { Globe } from 'lucide-react'
import { useI18n } from '../i18n'

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n()
  const toggle = () => setLang(lang === 'en' ? 'es' : 'en')

  return (
    <button onClick={toggle} className="inline-flex items-center gap-2 rounded-full bg-white/80 ring-1 ring-emerald-900/10 px-3 py-1.5 text-xs text-emerald-900 hover:bg-white transition">
      <Globe size={14} /> {lang === 'en' ? 'ES' : 'EN'}
    </button>
  )
}
