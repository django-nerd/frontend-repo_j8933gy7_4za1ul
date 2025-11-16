import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Services from './components/Services'
import { LanguageProvider } from './i18n'

export default function ServicesPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-amber-50/60 text-emerald-950">
        <Navbar />
        <main>
          <Services />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
