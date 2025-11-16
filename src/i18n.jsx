import React, { createContext, useContext, useMemo, useState } from 'react'

const I18nContext = createContext()

const translations = {
  en: {
    brand: 'MediSpa',
    nav: {
      procedures: 'Procedures',
      pricing: 'Pricing',
      contact: 'Contact',
      services: 'Services',
      galleries: 'Galleries',
      bookNow: 'Book Now',
    },
    hero: {
      eyebrow: 'Laser Dermatology',
      title: 'MediSpa — Discreet, Old‑Money Skin Perfection',
      sub: 'Advanced laser therapy for texture, tone, and timeless glow. Subtle luxury, clinical excellence.',
      ctaPricing: 'View Pricing',
      ctaConsult: 'Book Consultation',
    },
    procedures: {
      title: 'Treatments, Curated',
      sub: 'Our menu blends clinically proven technology with a refined, understated approach.',
      book: 'Book this treatment',
      items: [
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
      ],
    },
    pricing: {
      title: 'Pricing',
      sub: 'Transparent, premium care. All consultations are fully redeemable toward treatment.',
      tiers: [
        { name: 'Signature Glow', price: 280, features: ['Light laser refresh', 'Mild texture refinement', 'No downtime'] },
        { name: 'Classic Renewal', price: 520, features: ['Mid‑depth resurfacing', 'Pigment and redness balance', '24–48h glow period'] },
        { name: 'Private Collection', price: 980, features: ['Advanced fractional treatment', 'Custom protocol across face & neck', 'Concierge follow‑up'] },
      ],
    },
    contact: {
      title: 'Private Consultation',
      sub: 'Share a few details and our concierge will arrange your visit.',
      name: 'Full name',
      phone: 'Phone',
      email: 'Email',
      note: 'Notes (optional)',
      submit: 'Request Booking',
      success: 'Thank you. We will reach out shortly.',
      error: 'Something went wrong. Please try again or call us.'
    },
    services: {
      title: 'Laser Services',
      sub: 'A private collection of evidence‑based laser protocols tailored to your skin biology.',
      sections: [
        {
          name: 'Texture & Resurfacing',
          blurb: 'Porcelain‑smooth texture via fractional laser micro‑columns that stimulate neocollagenesis.',
        },
        {
          name: 'Pigment & Brightening',
          blurb: 'Selective photothermolysis for sun damage, melasma, and dyschromia without over‑treating.',
        },
        {
          name: 'Redness & Vascular',
          blurb: 'Vascular‑specific wavelengths to quiet flushing, broken capillaries, and rosacea.',
        },
        {
          name: 'Hair Removal',
          blurb: 'Comfort‑first permanent reduction across face and body with premium cooling.',
        },
      ],
    },
    galleries: {
      title: 'Before & After',
      sub: 'Subtle, elegant improvements. Real results with clinical restraint.',
      disclaimer: 'Individual results vary. Images shown with consent.',
    },
    footer: {
      line1: 'Discreet luxury skincare. By appointment only.'
    }
  },
  es: {
    brand: 'MediSpa',
    nav: {
      procedures: 'Procedimientos',
      pricing: 'Precios',
      contact: 'Contacto',
      services: 'Servicios',
      galleries: 'Galerías',
      bookNow: 'Reservar',
    },
    hero: {
      eyebrow: 'Dermatología Láser',
      title: 'MediSpa — Perfección discreta para la piel',
      sub: 'Terapia láser avanzada para textura, tono y brillo atemporal. Lujo sutil, excelencia clínica.',
      ctaPricing: 'Ver Precios',
      ctaConsult: 'Reservar Consulta',
    },
    procedures: {
      title: 'Tratamientos Curados',
      sub: 'Un menú que une tecnología probada con un enfoque refinado y discreto.',
      book: 'Reservar este tratamiento',
      items: [
        {
          title: 'Láser fraccional de resurfacing',
          desc: 'Refina la textura, suaviza líneas finas y estimula colágeno para un acabado porcelana.',
        },
        {
          title: 'Corrección de pigmentación',
          desc: 'Trata manchas solares, melasma y tono irregular para una piel luminosa.',
        },
        {
          title: 'Terapia vascular láser',
          desc: 'Aborda enrojecimiento, capilares rotos y rosácea con precisión.',
        },
        {
          title: 'Depilación láser',
          desc: 'Reducción efectiva y cómoda con resultados a largo plazo.',
        },
      ],
    },
    pricing: {
      title: 'Precios',
      sub: 'Cuidado premium y transparente. La consulta es canjeable en el tratamiento.',
      tiers: [
        { name: 'Brillo Signature', price: 280, features: ['Refresco láser ligero', 'Refinamiento de textura', 'Sin tiempo de inactividad'] },
        { name: 'Renovación Clásica', price: 520, features: ['Resurfacing medio', 'Equilibrio de pigmento y rojez', '24–48h de brillo'] },
        { name: 'Colección Privada', price: 980, features: ['Tratamiento fraccional avanzado', 'Protocolo a medida rostro y cuello', 'Seguimiento concierge'] },
      ],
    },
    contact: {
      title: 'Consulta Privada',
      sub: 'Comparta unos datos y nuestro concierge organizará su visita.',
      name: 'Nombre completo',
      phone: 'Teléfono',
      email: 'Correo',
      note: 'Notas (opcional)',
      submit: 'Solicitar Cita',
      success: 'Gracias. Nos pondremos en contacto en breve.',
      error: 'Algo salió mal. Inténtelo de nuevo o llámenos.'
    },
    services: {
      title: 'Servicios Láser',
      sub: 'Una colección privada de protocolos basados en evidencia adaptados a su biología cutánea.',
      sections: [
        {
          name: 'Textura y Resurfacing',
          blurb: 'Textura tipo porcelana mediante micro‑columnas fraccionales que estimulan el colágeno.',
        },
        {
          name: 'Pigmento y Luminosidad',
          blurb: 'Fototermólisis selectiva para daño solar y discromías sin sobre‑tratar.',
        },
        {
          name: 'Rojez y Vascular',
          blurb: 'Longitudes de onda vasculares para rubor, capilares y rosácea.',
        },
        {
          name: 'Depilación',
          blurb: 'Reducción permanente con máxima comodidad y enfriamiento premium.',
        },
      ],
    },
    galleries: {
      title: 'Antes y Después',
      sub: 'Mejoras sutiles y elegantes. Resultados reales con contención clínica.',
      disclaimer: 'Los resultados varían. Imágenes mostradas con consentimiento.',
    },
    footer: {
      line1: 'Cuidado de la piel de lujo, solo con cita.'
    }
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const value = useMemo(() => {
    const t = (path) => {
      const parts = path.split('.')
      let cur = translations[lang]
      for (const p of parts) cur = cur?.[p]
      return cur
    }
    return { lang, setLang, t, dict: translations[lang] }
  }, [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}
