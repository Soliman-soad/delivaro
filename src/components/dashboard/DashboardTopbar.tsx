import { Search, Bell, HelpCircle } from 'lucide-react'

export default function DashboardTopbar() {
  return (
    <div className="h-16 bg-white border-b border-gray-100 flex items-center gap-4 px-6 sticky top-0 z-20">
      <div className="flex-1 relative max-w-md py-8">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
        <input placeholder="Search orders, shipments, drivers..." className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-100 rounded-lg outline-none focus:border-[#0e9de8] focus:bg-white transition-colors"/>
      </div>
      <div className="flex items-center gap-3 ml-auto">
        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors relative">
          <Bell size={16} className="text-gray-500"/>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"/>
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
          <HelpCircle size={16} className="text-gray-500"/>
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-xs font-medium">JD</div>
        </div>
      </div>
    </div>
  )
}
