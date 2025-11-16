import { useState } from 'react'
import { Menu, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#procedures', label: 'Procedures' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-emerald-900/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#top" className="group inline-flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-200 to-emerald-200 ring-1 ring-emerald-900/10 shadow-inner" />
              <span className="text-lg font-semibold tracking-wide text-emerald-900">MediSpa</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-emerald-900/80 hover:text-emerald-900 transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-4 py-2 text-sm font-medium text-amber-50 shadow-md hover:shadow-lg hover:bg-emerald-800 transition"
              >
                <Phone size={16} /> Book Now
              </a>
            </nav>
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-emerald-900/10 bg-white/80"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              <Menu className="text-emerald-900" />
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-emerald-900/10 px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-emerald-900/80 hover:text-emerald-900"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-900 px-4 py-2 text-sm font-medium text-amber-50 shadow-md"
              >
                <Phone size={16} /> Book Now
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
