import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Galleries from './components/Galleries'
import { LanguageProvider } from './i18n'

export default function GalleriesPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-amber-50/60 text-emerald-950">
        <Navbar />
        <main>
          <Galleries />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
