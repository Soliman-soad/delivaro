'use client'
import { useState } from 'react'
import Link from 'next/link'

const steps = ['Connect Store', 'Import Orders', 'Preferences']
const stores = [
  { name:'Shopify',      desc:'The leading platform for high-volume e-commerce.',           icon:'🛍️' },
  { name:'Etsy',         desc:'Sync your handmade and vintage shop orders.',                icon:'🏪' },
  { name:'WooCommerce',  desc:'WordPress-based flexible e-commerce solution.',              icon:'🌐' },
  { name:'Custom Store', desc:'Connect via our robust REST API or CSV import.',             icon:'⚙️' },
]

export default function OnboardingPage() {
  const [selected, setSelected] = useState<string|null>(null)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="h-16 border-b border-gray-100 flex items-center justify-between px-8">
        <Link href="/home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#0e9de8] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="white" strokeWidth={2.5}>
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-bold text-gray-900">Delivra</span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">JD</div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Stepper */}
        <div className="flex items-center gap-0 mb-12">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${i === 0 ? 'bg-[#0e9de8] text-white' : 'border-2 border-gray-200 text-gray-400'}`}>{i + 1}</div>
                <span className="text-xs mt-1 text-gray-500 whitespace-nowrap">{s}</span>
              </div>
              {i < steps.length - 1 && <div className="w-32 h-px bg-gray-200 mb-5 mx-1"/>}
            </div>
          ))}
        </div>

        <div className="w-full max-w-xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Connect your storefront</h1>
            <p className="text-gray-500">Delivra syncs directly with your existing store to automate label creation and tracking.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {stores.map(store => (
              <button
                key={store.name}
                onClick={() => setSelected(store.name)}
                className={`p-5 rounded-xl border-2 text-left transition-all hover:border-gray-300 ${selected === store.name ? 'border-[#0e9de8] bg-[#eff8ff]' : 'border-gray-200'}`}
              >
                <div className="text-2xl mb-3">{store.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{store.name}</h3>
                <p className="text-sm text-gray-500">{store.desc}</p>
              </button>
            ))}
          </div>

          <div className="h-px bg-gray-100 mb-6"/>

          <div className="flex justify-between">
            <button className="text-sm border border-gray-200 rounded-xl px-6 py-3 text-gray-600 hover:bg-gray-50 transition-colors">Skip for now</button>
            <Link href="/dashboard" className={`text-sm font-semibold px-6 py-3 rounded-xl transition-colors ${selected ? 'bg-[#0e9de8] text-white hover:bg-[#027dc6]' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
              Continue →
            </Link>
          </div>
        </div>
      </div>

      <footer className="py-4 text-center text-xs text-gray-400 border-t border-gray-50">
        © 2024 Delivra Logistics Inc. · <a href="#" className="hover:text-gray-600">Privacy Policy</a> · <a href="#" className="hover:text-gray-600">Terms of Service</a>
      </footer>
    </div>
  )
}
