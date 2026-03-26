'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Package, Plus, Map, BarChart2, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

const nav = [
  { label: 'Overview',        href: '/dashboard',         icon: LayoutDashboard },
  { label: 'Shipments',       href: '/dashboard/shipments',icon: Package },
  { label: 'Create Shipment', href: '/dashboard/create',  icon: Plus },
  { label: 'Map & Drivers',   href: '/dashboard/map',     icon: Map },
  { label: 'Reports',         href: '/dashboard/reports', icon: BarChart2 },
  { label: 'Settings',        href: '/dashboard/settings',icon: Settings },
]

export default function DashboardSidebar() {
  const path = usePathname()
  return (
    <aside className="w-[200px] flex-shrink-0 bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0">
      <div className="h-16 flex items-center px-4 border-b border-gray-100">
        <Link href="/home" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-[#0e9de8] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="white" strokeWidth={2.5}>
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-bold text-base text-gray-900">Delivra</span>
        </Link>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {nav.map(({ label, href, icon: Icon }) => {
          const active = path === href || (href !== '/dashboard' && path.startsWith(href))
          return (
            <Link key={href} href={href} className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
              active ? 'bg-[#eff8ff] text-[#0e9de8] font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            )}>
              <Icon size={16} className={active ? 'text-[#0e9de8]' : 'text-gray-400'}/>
              {label}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-gray-100">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">PRO PLAN</div>
        <div className="text-xs text-gray-400 mb-2">1,240 / 5,000 shipments</div>
        <div className="h-1.5 bg-gray-100 rounded-full">
          <div className="h-1.5 bg-[#0e9de8] rounded-full" style={{ width: '24.8%' }}/>
        </div>
      </div>
    </aside>
  )
}
