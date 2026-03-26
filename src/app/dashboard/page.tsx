import { TrendingUp, TrendingDown, Clock, AlertCircle, Plus } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { label: 'Shipments Today', value: '1,284', change: '+12.5%', up: true },
  { label: 'On-Time Delivery', value: '98.2%', change: '+0.4%', up: true },
  { label: 'Average Transit', value: '4.2 hrs', change: '-8.1%', up: false },
  { label: 'Active Alerts', value: '12', change: '3 new', up: false, warn: true },
]

const shipments = [
  { id: 'DV-9021', dest: 'Los Angeles, CA', status: 'In Transit', driver: 'Mark Wilson', eta: '14:20' },
  { id: 'DV-8842', dest: 'San Francisco, CA', status: 'Delayed', driver: 'Sarah Chen', eta: '16:45' },
  { id: 'DV-7731', dest: 'Seattle, WA', status: 'Delivered', driver: 'James Bond', eta: '11:15' },
  { id: 'DV-9102', dest: 'Austin, TX', status: 'In Transit', driver: 'Elena Rossi', eta: '18:00' },
  { id: 'DV-6654', dest: 'Miami, FL', status: 'Pending', driver: 'David Lee', eta: 'Tomorrow' },
]

const activity = [
  { text: 'New shipment DV-9102 dispatched', time: '14 minutes ago', color: 'text-blue-500' },
  { text: 'Route optimized for Zone B', time: '42 minutes ago', color: 'text-blue-500' },
  { text: 'Delay alert: DV-8842 traffic (I-5)', time: '1 hour ago', color: 'text-red-500' },
  { text: 'Driver Sarah Chen signed in', time: '2 hours ago', color: 'text-blue-500' },
  { text: 'Batch upload: 142 records processed', time: '3 hours ago', color: 'text-blue-500' },
  { text: 'Vehicle maintenance alert: TR-44', time: '5 hours ago', color: 'text-red-500' },
]

const statusColor: Record<string, string> = {
  'In Transit': 'bg-blue-50 text-blue-700',
  'Delayed': 'bg-red-50 text-red-700',
  'Delivered': 'bg-green-50 text-green-700',
  'Pending': 'bg-amber-50 text-amber-700',
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
          <p className="text-sm text-gray-500 mt-1">Real-time snapshots of your logistics performance.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 text-sm border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors">
            <Clock size={14} className="text-gray-500"/> View Logs
          </button>
          <Link href="/dashboard/create" className="flex items-center gap-2 text-sm bg-[#0e9de8] text-white rounded-lg px-4 py-2 hover:bg-[#027dc6] transition-colors font-medium">
            <Plus size={14}/> New Shipment
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-gray-500">{s.label}</p>
              <span className={`flex items-center gap-1 text-xs font-medium ${s.warn ? 'text-red-500' : s.up ? 'text-green-600' : 'text-red-500'}`}>
                {!s.warn && (s.up ? <TrendingUp size={12}/> : <TrendingDown size={12}/>)}
                {s.warn && <AlertCircle size={12}/>}
                {s.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Shipments */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-50">
            <div>
              <h2 className="font-semibold text-gray-900">Live Shipments</h2>
              <p className="text-xs text-gray-400 mt-0.5">Ongoing deliveries across all active zones.</p>
            </div>
            <Link href="/dashboard/shipments" className="text-xs text-[#0e9de8] font-medium hover:underline">View all →</Link>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-400 border-b border-gray-50">
                <th className="text-left px-4 py-3 font-medium">Order ID</th>
                <th className="text-left px-4 py-3 font-medium">Destination</th>
                <th className="text-left px-4 py-3 font-medium">Status</th>
                <th className="text-left px-4 py-3 font-medium">Driver</th>
                <th className="text-right px-4 py-3 font-medium">ETA</th>
              </tr>
            </thead>
            <tbody>
              {shipments.map((s, i) => (
                <tr key={s.id} className={`text-sm border-b border-gray-50 hover:bg-gray-50 transition-colors ${i % 2 === 0 ? '' : 'bg-gray-50/30'}`}>
                  <td className="px-4 py-3 font-medium text-[#0e9de8]">
                    <Link href={`/dashboard/shipments/${s.id}`}>{s.id}</Link>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{s.dest}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor[s.status]}`}>{s.status}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{s.driver}</td>
                  <td className="px-4 py-3 text-right text-gray-700 font-medium">{s.eta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Fleet Map placeholder */}
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-50">
              <h2 className="font-semibold text-gray-900">Fleet Map</h2>
              <span className="text-xs bg-green-50 text-green-700 font-medium px-2 py-1 rounded-full">84 Online</span>
            </div>
            <div className="h-48 bg-gray-900 relative flex items-center justify-center">
              <p className="text-gray-500 text-xs">Live map view</p>
              {[{t:15,l:60},{t:35,l:30},{t:50,l:75},{t:70,l:50}].map((p,i) => (
                <div key={i} style={{top:`${p.t}%`,left:`${p.l}%`}} className="absolute w-6 h-6 rounded-full bg-white/90 border-2 border-[#0e9de8] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#0e9de8]"/>
                </div>
              ))}
            </div>
            <div className="p-3">
              <button className="w-full text-xs text-gray-600 border border-gray-200 rounded-lg py-2 hover:bg-gray-50 transition-colors">
                Focus Fleet
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl border border-gray-100">
            <div className="p-4 border-b border-gray-50">
              <h2 className="font-semibold text-gray-900">Recent Activity</h2>
              <p className="text-xs text-gray-400 mt-0.5">System events and operational alerts.</p>
            </div>
            <div className="p-4 space-y-4">
              {activity.map((a, i) => (
                <div key={i} className="flex gap-3">
                  <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${a.color === 'text-red-500' ? 'bg-red-400' : 'bg-blue-400'}`}/>
                  <div>
                    <p className="text-xs text-gray-700">{a.text}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-4 pb-4">
              <button className="w-full text-xs text-[#0e9de8] border border-[#0e9de8]/20 rounded-lg py-2 hover:bg-[#eff8ff] transition-colors font-medium">
                View Audit Log
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chart placeholder */}
      <div className="bg-white rounded-xl border border-gray-100 p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-semibold text-gray-900">Performance Analytics</h2>
            <p className="text-xs text-gray-400 mt-0.5">Volume and fulfillment trends over the last 7 days.</p>
          </div>
          <button className="text-xs border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 hover:bg-gray-50">This Week</button>
        </div>
        <div className="h-48 flex items-end gap-2 px-2">
          {[300,420,250,380,520,480,340].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-t-sm bg-[#0e9de8]/20 hover:bg-[#0e9de8]/40 transition-colors cursor-pointer" style={{height: `${h/520*100}%`}}/>
              <span className="text-xs text-gray-400">{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
