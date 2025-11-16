import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Procedures from './components/Procedures'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-amber-50/60 text-emerald-950">
      <Navbar />
      <main>
        <Hero />
        <Procedures />
        <Pricing />
        <Contact />
        <footer className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-emerald-900/70">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p>© {new Date().getFullYear()} MediSpa. All rights reserved.</p>
              <p className="text-emerald-900/60">Discreet luxury skincare. By appointment only.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
