export default function Procedures() {
  const items = [
    {
      title: 'Fractional Laser Resurfacing',
      desc: 'Refines texture, reduces fine lines, and stimulates collagen for a porcelain-smooth finish.',
    },
    {
      title: 'Pigmentation Correction',
      desc: 'Targets sun spots, melasma, and uneven tone for clear, luminous skin.',
    },
    {
      title: 'Vascular Laser Therapy',
      desc: 'Treats redness, broken capillaries, and rosacea with precise vascular targeting.',
    },
    {
      title: 'Laser Hair Removal',
      desc: 'Gentle, effective hair reduction designed for comfort and long-term results.',
    },
  ]

  return (
    <section id="procedures" className="relative py-24 bg-amber-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-serif text-emerald-950">Treatments, Curated</h2>
          <p className="mt-3 text-emerald-900/70">Our menu blends clinically proven technology with a refined, understated approach.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-white ring-1 ring-emerald-900/10 p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-medium text-emerald-950">{it.title}</h3>
              <p className="mt-2 text-sm text-emerald-900/70">{it.desc}</p>
              <a href="#contact" className="mt-4 inline-block text-sm text-emerald-900 hover:underline">Book this treatment</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
