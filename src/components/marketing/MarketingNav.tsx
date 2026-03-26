'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Caravan, Menu, X } from 'lucide-react'

export default function MarketingNav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#0e9de8] flex items-center justify-center">
            <Caravan color='white'/>
          </div>
          <span className="font-bold text-lg text-gray-900">Delivra</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
          <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
          <Link href="/integrations" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Integrations</Link>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link href="/signin" className="text-sm text-gray-600 hover:text-gray-900 px-3 py-2 transition-colors">Sign in</Link>
          <Link href="/signup" className="text-sm text-gray-600 hover:text-gray-900 px-3 py-2 transition-colors">Sign up</Link>
          <Link href="/demo" className="text-sm bg-[#0e9de8] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#027dc6] transition-colors">Request demo</Link>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          <Link href="/features" className="block text-sm text-gray-700 py-2">Features</Link>
          <Link href="/pricing" className="block text-sm text-gray-700 py-2">Pricing</Link>
          <Link href="/integrations" className="block text-sm text-gray-700 py-2">Integrations</Link>
          <Link href="/signin" className="block text-sm text-gray-700 py-2">Sign in</Link>
          <Link href="/demo" className="block text-sm bg-[#0e9de8] text-white px-4 py-2 rounded-lg text-center font-medium">Request demo</Link>
        </div>
      )}
    </nav>
  )
}
