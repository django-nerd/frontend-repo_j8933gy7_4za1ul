export default function Pricing() {
  const tiers = [
    { name: 'Signature Glow', price: 280, features: ['Light laser refresh', 'Mild texture refinement', 'No downtime'] },
    { name: 'Classic Renewal', price: 520, features: ['Mid‑depth resurfacing', 'Pigment and redness balance', '24–48h glow period'] },
    { name: 'Private Collection', price: 980, features: ['Advanced fractional treatment', 'Custom protocol across face & neck', 'Concierge follow‑up'] },
  ]

  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-serif text-emerald-950">Pricing</h2>
          <p className="mt-3 text-emerald-900/70">Transparent, premium care. All consultations are fully redeemable toward treatment.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="rounded-2xl bg-white ring-1 ring-emerald-900/10 p-6 shadow-sm hover:shadow-md transition flex flex-col">
              <div>
                <h3 className="text-lg font-medium text-emerald-950">{tier.name}</h3>
                <div className="mt-2 text-4xl font-serif text-emerald-950">${'{'}tier.price{'}'}</div>
                <ul className="mt-4 space-y-2 text-sm text-emerald-900/70">
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-900 text-amber-50 px-6 py-3 text-sm font-medium shadow-lg hover:bg-emerald-800 transition">Book Now</a>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-amber-50" />
    </section>
  )
}
