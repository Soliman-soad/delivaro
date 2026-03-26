import Link from 'next/link'
import { ArrowLeft, Download, UserCheck, X } from 'lucide-react'

const timeline = [
  { event: 'Out for Delivery',     time: '10:45 AM, Oct 24', loc: 'Midtown, New York' },
  { event: 'Arrived at Local Hub', time: '06:12 AM, Oct 24', loc: 'Jersey City Terminal' },
  { event: 'Picked up by Courier', time: '09:30 PM, Oct 23', loc: 'Regional Distribution Center' },
  { event: 'Shipment Processed',   time: '04:15 PM, Oct 23', loc: 'Warehouse A, Queens' },
  { event: 'Order Confirmed',      time: '11:20 AM, Oct 23', loc: 'Digital Entry' },
]

const notifications = [
  { text: 'Delivery status updated to "Out for Delivery"', time: '10 min ago', type: 'info' },
  { text: 'Delayed: Heavy traffic on I-95 North',          time: '1 hour ago',  type: 'warn' },
  { text: 'Customer requested front porch delivery',       time: '2 hours ago', type: 'info' },
]

export default function ShipmentDetailPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/shipments" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
          <ArrowLeft size={16}/> Back to Shipments
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">DLV-742910-US</h1>
          <span className="text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full">Out for Delivery</span>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 text-sm border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors text-gray-600">
            <Download size={14}/> Download Label
          </button>
          <button className="flex items-center gap-2 text-sm border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors text-gray-600">
            <UserCheck size={14}/> Reassign
          </button>
          <button className="flex items-center gap-2 text-sm border border-red-200 rounded-lg px-4 py-2 hover:bg-red-50 transition-colors text-red-600">
            <X size={14}/> Cancel
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left: Summary + Timeline + Notes */}
        <div className="lg:col-span-2 space-y-6">
          {/* Shipment Summary */}
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-[#0e9de8]/10 flex items-center justify-center">
                <span className="text-[#0e9de8] text-xs">📦</span>
              </div>
              <h2 className="font-semibold text-gray-900">Shipment Summary</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Origin</p>
                <p className="text-sm font-medium text-gray-900">Queens Distribution</p>
                <p className="text-xs text-gray-400">New York, NY 11101</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Destination</p>
                <p className="text-sm font-medium text-gray-900">Jameson Residence</p>
                <p className="text-xs text-gray-400">Hoboken, NJ 07030</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Service Level</p>
                <span className="text-xs bg-green-50 text-green-700 font-medium px-2 py-0.5 rounded">Express</span>
                <span className="text-xs text-gray-500 ml-2">Overnight</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Est. Delivery</p>
                <p className="text-sm font-medium text-gray-900">📅 Oct 24, 2024</p>
              </div>
            </div>
          </div>

          {/* Tracking Timeline */}
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-[#0e9de8]/10 flex items-center justify-center">
                <span className="text-[#0e9de8] text-xs">🕐</span>
              </div>
              <h2 className="font-semibold text-gray-900">Tracking Timeline</h2>
            </div>
            <div className="space-y-4">
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 ${i === 0 ? 'bg-[#0e9de8]' : 'bg-gray-200'}`}/>
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-gray-100 mt-1"/>}
                  </div>
                  <div className="pb-3">
                    <p className="text-sm font-medium text-gray-900">{t.event}</p>
                    <p className="text-xs text-gray-400 mt-0.5">🕐 {t.time}</p>
                    <p className="text-xs text-gray-400">📍 {t.loc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="text-sm text-[#0e9de8] font-medium hover:underline mt-2">View full history</button>
          </div>

          {/* Internal Notes */}
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm">💬</span>
              <h2 className="font-semibold text-gray-900">Internal Team Notes</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 mb-3 text-sm text-gray-700 italic">
              "Checked gate code with building manager. It's #4492 for today." - Alex (Operations)
            </div>
            <textarea placeholder="Add a private note for the dispatch team..." className="w-full text-sm border border-gray-200 rounded-lg p-3 outline-none focus:border-[#0e9de8] resize-none" rows={3}/>
            <div className="flex justify-between mt-2">
              <button className="text-sm text-gray-400 hover:text-gray-600">Clear</button>
              <button className="flex items-center gap-2 text-sm bg-[#0e9de8] text-white px-4 py-2 rounded-lg hover:bg-[#027dc6] transition-colors font-medium">
                📋 Post Note
              </button>
            </div>
          </div>
        </div>

        {/* Right: Map + Driver + Notifications */}
        <div className="lg:col-span-3 space-y-6">
          {/* Map */}
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="h-72 bg-gray-800 relative">
              <div className="absolute inset-0 opacity-60" style={{backgroundImage:'linear-gradient(rgba(0,50,100,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(0,50,100,0.3) 1px,transparent 1px)',backgroundSize:'32px 32px'}}/>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Live map — driver location tracking</div>
              </div>
              {/* Driver popup */}
              <div className="absolute top-4 left-4 bg-white rounded-xl shadow-lg p-3 min-w-48">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-medium">MR</div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Marcus Rivera</p>
                    <p className="text-xs text-gray-400">ID: DRV-9920 · Van 42</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="bg-gray-50 rounded-lg p-2">
                    <p className="text-xs text-gray-400">SPEED</p>
                    <p className="text-sm font-bold text-gray-900">42 mph</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <p className="text-xs text-gray-400">BATTERY</p>
                    <p className="text-sm font-bold text-green-600">84%</p>
                  </div>
                </div>
                <button className="w-full text-xs text-[#0e9de8] border border-[#0e9de8]/20 rounded-lg py-1.5 hover:bg-[#eff8ff] transition-colors font-medium">Message Driver</button>
              </div>
              {/* Route dots */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="w-8 h-8 bg-white rounded-lg shadow flex items-center justify-center text-gray-600 text-sm font-bold hover:bg-gray-50">A</button>
                <button className="w-8 h-8 bg-white rounded-lg shadow flex items-center justify-center text-gray-600 hover:bg-gray-50">+</button>
              </div>
            </div>
          </div>

          {/* Recent Notifications */}
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm">🔔</span>
                <h2 className="font-semibold text-gray-900">Recent Notifications</h2>
              </div>
              <span className="text-xs bg-blue-50 text-blue-700 font-medium px-2 py-0.5 rounded-full">3 New</span>
            </div>
            <div className="space-y-3">
              {notifications.map((n, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-lg bg-gray-50">
                  <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${n.type === 'warn' ? 'bg-red-400' : 'bg-blue-400'}`}/>
                  <div>
                    <p className="text-sm text-gray-700">{n.text}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
