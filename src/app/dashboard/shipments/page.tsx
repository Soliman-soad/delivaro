import Link from 'next/link'
import { Download, Plus, Filter, ChevronLeft, ChevronRight } from 'lucide-react'

const shipments = [
  { id:'DEL-82910', status:'In Transit', customer:'Velocity Retail', tier:'GOLD TIER MERCHANT', dest:'Chicago, IL', carrier:'FedEx', eta:'Oct 24, 2024' },
  { id:'DEL-82911', status:'Delivered',  customer:'Aura Home',       tier:'GOLD TIER MERCHANT', dest:'Miami, FL',    carrier:'UPS',   eta:'Oct 22, 2024' },
  { id:'DEL-82912', status:'Delayed',    customer:'Nexus Gear',      tier:'GOLD TIER MERCHANT', dest:'Seattle, WA',  carrier:'DHL',   eta:'Oct 25, 2024' },
  { id:'DEL-82913', status:'Pending',    customer:'Nova Labs',        tier:'GOLD TIER MERCHANT', dest:'Austin, TX',   carrier:'Delivra Express', eta:'Oct 26, 2024' },
  { id:'DEL-82914', status:'In Transit', customer:'Prime Goods',      tier:'GOLD TIER MERCHANT', dest:'Boston, MA',   carrier:'FedEx', eta:'Oct 24, 2024' },
  { id:'DEL-82915', status:'Delivered',  customer:'Eco Living',       tier:'GOLD TIER MERCHANT', dest:'Denver, CO',   carrier:'UPS',   eta:'Oct 21, 2024' },
  { id:'DEL-82916', status:'In Transit', customer:'Zenith Tech',      tier:'GOLD TIER MERCHANT', dest:'Phoenix, AZ',  carrier:'DHL',   eta:'Oct 24, 2024' },
  { id:'DEL-82917', status:'Delayed',    customer:'Urban Styles',     tier:'GOLD TIER MERCHANT', dest:'New York, NY', carrier:'FedEx', eta:'Oct 25, 2024' },
  { id:'DEL-82918', status:'Pending',    customer:'Modern Art',       tier:'GOLD TIER MERCHANT', dest:'San Jose, CA', carrier:'Delivra Express', eta:'Oct 27, 2024' },
  { id:'DEL-82919', status:'Delivered',  customer:'Bloom Florist',    tier:'GOLD TIER MERCHANT', dest:'Portland, OR', carrier:'UPS',   eta:'Oct 20, 2024' },
]

const statusStyle: Record<string, string> = {
  'In Transit': 'bg-blue-50 text-blue-700 border border-blue-100',
  'Delivered':  'bg-green-50 text-green-700 border border-green-100',
  'Delayed':    'bg-red-50 text-red-700 border border-red-100',
  'Pending':    'bg-amber-50 text-amber-700 border border-amber-100',
}

export default function ShipmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Shipments</h1>
          <p className="text-sm text-gray-500 mt-1">Manage and track your active outgoing deliveries.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 text-sm border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors">
            <Download size={14} className="text-gray-500"/> Export CSV
          </button>
          <Link href="/dashboard/create" className="flex items-center gap-2 text-sm bg-[#0e9de8] text-white rounded-lg px-4 py-2 hover:bg-[#027dc6] transition-colors font-medium">
            <Plus size={14}/> Create Shipment
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label:'TOTAL SHIPMENTS', value:'1,240', sub:'+12% from last month' },
          { label:'IN TRANSIT',      value:'482',   sub:'' },
          { label:'DELAYED',         value:'14',    sub:'-2 from yesterday' },
          { label:'PENDING LABEL',   value:'27',    sub:'' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-4">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">{s.label}</p>
            <p className="text-2xl font-bold text-gray-900">{s.value}</p>
            {s.sub && <p className="text-xs text-gray-400 mt-1">{s.sub}</p>}
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="flex items-center gap-3 p-4 border-b border-gray-50">
          <div className="flex-1 relative max-w-sm">
            <input placeholder="Filter by ID, Customer, or Destination..." className="w-full pl-8 pr-4 py-2 text-sm bg-gray-50 border border-gray-100 rounded-lg outline-none focus:border-[#0e9de8] focus:bg-white transition-colors"/>
            <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
          </div>
          {['All Statuses','All Carriers','Last 30 Days'].map(f => (
            <button key={f} className="text-sm border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 flex items-center gap-2 text-gray-600">
              {f} <ChevronRight size={12} className="rotate-90 text-gray-400"/>
            </button>
          ))}
          <button className="text-sm text-gray-500 hover:text-gray-700">Clear Filters</button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-50">
              <th className="pl-4 pr-2 py-3 w-8"><input type="checkbox" className="rounded"/></th>
              <th className="text-left px-4 py-3 font-medium">Shipment ID</th>
              <th className="text-left px-4 py-3 font-medium">Status</th>
              <th className="text-left px-4 py-3 font-medium">Customer</th>
              <th className="text-left px-4 py-3 font-medium">Destination</th>
              <th className="text-left px-4 py-3 font-medium">Carrier</th>
              <th className="text-left px-4 py-3 font-medium">ETA</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((s, i) => (
              <tr key={s.id} className="text-sm border-b border-gray-50 hover:bg-gray-50/60 transition-colors">
                <td className="pl-4 pr-2 py-3"><input type="checkbox" className="rounded"/></td>
                <td className="px-4 py-3">
                  <Link href={`/dashboard/shipments/${s.id}`} className="font-medium text-[#0e9de8] hover:underline">{s.id}</Link>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusStyle[s.status]}`}>{s.status}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium text-gray-900">{s.customer}</div>
                  <div className="text-xs text-gray-400">{s.tier}</div>
                </td>
                <td className="px-4 py-3 text-gray-600">{s.dest}</td>
                <td className="px-4 py-3 text-gray-600">{s.carrier}</td>
                <td className="px-4 py-3 text-gray-700">{s.eta}</td>
                <td className="px-4 py-3 text-center">
                  <button className="text-gray-400 hover:text-gray-700 p-1">•••</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-50">
          <p className="text-sm text-gray-400">Showing 10 of 1,240 shipments</p>
          <div className="flex items-center gap-2">
            <button className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 hover:bg-gray-50 flex items-center gap-1">
              <ChevronLeft size={14}/> Previous
            </button>
            {[1,2,3,'...',124].map((p,i) => (
              <button key={i} className={`text-sm w-8 h-8 rounded-lg ${p===1 ? 'bg-[#0e9de8] text-white' : 'text-gray-600 hover:bg-gray-50'}`}>{p}</button>
            ))}
            <button className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 hover:bg-gray-50 flex items-center gap-1">
              Next <ChevronRight size={14}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
