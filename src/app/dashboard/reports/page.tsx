import { Download } from 'lucide-react'

const carriers = [
  { name:'Swift Logistics',  shipments:1240, onTime:'98.2%', cost:'$4.20/kg' },
  { name:'Falcon Express',   shipments:980,  onTime:'94.5%', cost:'$3.85/kg' },
  { name:'Global Haul',      shipments:850,  onTime:'91.2%', cost:'$4.50/kg' },
  { name:'Metro Deliver',    shipments:720,  onTime:'96.8%', cost:'$5.10/kg' },
  { name:'City Sprint',      shipments:640,  onTime:'89.4%', cost:'$3.50/kg' },
]

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-sm text-gray-500 mt-1">Monitor your logistics efficiency and cost performance.</p>
        </div>
        <div className="flex items-center gap-3">
          {['7D','30D','90D'].map(p => (
            <button key={p} className={`text-sm px-3 py-1.5 rounded-lg ${p==='30D'?'bg-gray-100 font-medium text-gray-900':'text-gray-500 hover:bg-gray-50'}`}>{p}</button>
          ))}
          <button className="flex items-center gap-2 text-sm border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50">📅 Custom Range</button>
          <button className="flex items-center gap-2 text-sm bg-[#0e9de8] text-white rounded-lg px-4 py-2 hover:bg-[#027dc6] font-medium">
            <Download size={14}/> Export to PDF
          </button>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label:'Total Shipments', value:'12,842', change:'+12.5% vs last period', up:true },
          { label:'Avg. Delivery Time', value:'1.4 Days', change:'-0.2 days vs last period', up:true },
          { label:'SLA Compliance', value:'94.2%', change:'+2.1% vs last period', up:true },
          { label:'Total Shipping Cost', value:'$48,240', change:'+5.4% vs last period', up:false },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-4">
            <p className="text-xs text-gray-400 mb-2">{s.label}</p>
            <p className="text-2xl font-bold text-gray-900 mb-1">{s.value}</p>
            <p className={`text-xs font-medium ${s.up?'text-green-600':'text-red-500'}`}>{s.up?'↗':'↘'} {s.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Delivery Performance chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-semibold text-gray-900">Delivery Performance</h2>
              <p className="text-xs text-gray-400">Daily volume and success rate</p>
            </div>
            <span className="text-xs bg-green-50 text-green-700 font-medium px-2 py-1 rounded-full">● Live Data</span>
          </div>
          <div className="h-48 flex items-end gap-2">
            {[
              [380,10],[300,8],[200,6],[280,18],[390,12],[340,15],[260,22]
            ].map(([on,del], i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex flex-col items-center gap-0.5">
                  <div className="w-full bg-[#0e9de8] rounded-t-sm" style={{height:`${on/390*160}px`}}/>
                  <div className="w-full bg-red-400" style={{height:`${del/390*160}px`}}/>
                </div>
                <span className="text-xs text-gray-400">{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-[#0e9de8]"/><span className="text-xs text-gray-500">On-Time</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-red-400"/><span className="text-xs text-gray-500">Delayed</span></div>
            <div className="ml-auto text-xs text-gray-400">On-Time Deliveries: <strong className="text-gray-900">11,200</strong></div>
            <div className="text-xs text-gray-400">Delayed: <strong className="text-gray-900">1,642</strong></div>
          </div>
        </div>

        {/* SLA Gauge */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <div>
            <h2 className="font-semibold text-gray-900">SLA Compliance</h2>
            <p className="text-xs text-gray-400">Overall goal: 95%</p>
          </div>
          <div className="flex items-center justify-center my-6">
            <div className="relative w-36 h-36">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle cx="60" cy="60" r="48" fill="none" stroke="#f3f4f6" strokeWidth="12"/>
                <circle cx="60" cy="60" r="48" fill="none" stroke="#0e9de8" strokeWidth="12"
                  strokeDasharray={`${2*Math.PI*48*0.94} ${2*Math.PI*48}`} strokeLinecap="round"/>
                <circle cx="60" cy="60" r="48" fill="none" stroke="#ef4444" strokeWidth="12"
                  strokeDasharray={`${2*Math.PI*48*0.06} ${2*Math.PI*48}`}
                  strokeDashoffset={`-${2*Math.PI*48*0.94}`} strokeLinecap="round"/>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center rotate-0">
                <span className="text-2xl font-bold text-gray-900">94%</span>
                <span className="text-xs text-gray-400">Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue vs Cost chart */}
      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-semibold text-gray-900">Shipping Cost vs. Order Revenue</h2>
            <p className="text-xs text-gray-400">Profitability trend over 6 months</p>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-1"><div className="w-8 h-px bg-[#0e9de8]"/> Revenue</div>
            <div className="flex items-center gap-1"><div className="w-8 h-px bg-orange-400"/> Shipping Cost</div>
          </div>
        </div>
        <div className="h-40 relative flex items-end">
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400 pr-2">
            {['$20k','$15k','$10k','$5k','$0k'].map(v=><span key={v}>{v}</span>)}
          </div>
          <div className="flex-1 ml-10 relative h-full">
            {/* Revenue line */}
            <svg className="absolute inset-0" viewBox="0 0 600 160" preserveAspectRatio="none">
              <polyline points="0,120 100,115 200,118 300,100 400,80 500,60 600,20" fill="none" stroke="#0e9de8" strokeWidth="2" strokeLinecap="round"/>
              {[0,100,200,300,400,500,600].map((x,i)=>(
                <circle key={i} cx={x} cy={[120,115,118,100,80,60,20][i]} r="4" fill="#0e9de8"/>
              ))}
            </svg>
            {/* Cost line */}
            <svg className="absolute inset-0" viewBox="0 0 600 160" preserveAspectRatio="none">
              <polyline points="0,140 100,138 200,137 300,130 400,120 500,115 600,110" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
              {[0,100,200,300,400,500,600].map((x,i)=>(
                <circle key={i} cx={x} cy={[140,138,137,130,120,115,110][i]} r="4" fill="#f97316"/>
              ))}
            </svg>
            <div className="absolute bottom-0 inset-x-0 flex justify-between text-xs text-gray-400 pt-1 border-t border-gray-50">
              {['Jan','Feb','Mar','Apr','May','Jun'].map(m=><span key={m}>{m}</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* Carrier Performance */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-50">
          <div>
            <h2 className="font-semibold text-gray-900">Carrier Performance Ranking</h2>
            <p className="text-xs text-gray-400">Efficiency metrics by shipping partner</p>
          </div>
          <button className="text-sm text-[#0e9de8] font-medium hover:underline">View Full Report</button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-50">
              <th className="text-left px-4 py-3 font-medium">Carrier</th>
              <th className="text-left px-4 py-3 font-medium">Total Shipments</th>
              <th className="text-left px-4 py-3 font-medium">On-Time Rate</th>
              <th className="text-left px-4 py-3 font-medium">Avg. Cost</th>
              <th className="px-4 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {carriers.map((c, i) => (
              <tr key={i} className="text-sm border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">{c.name[0]}</div>
                    <span className="font-medium text-gray-900">{c.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-600">{c.shipments.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full max-w-20">
                      <div className="h-1.5 bg-green-500 rounded-full" style={{width:c.onTime}}/>
                    </div>
                    <span className="text-green-600 font-medium text-xs">{c.onTime}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-600">{c.cost}</td>
                <td className="px-4 py-3 text-center text-[#0e9de8]">↗</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Custom report CTA */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#eff8ff] flex items-center justify-center text-2xl">📋</div>
          <div>
            <h3 className="font-semibold text-gray-900">Need a custom perspective?</h3>
            <p className="text-sm text-gray-500">Use our drag-and-drop report builder to combine any metrics, carriers, and timeframes into a bespoke dashboard.</p>
          </div>
        </div>
        <button className="flex-shrink-0 text-sm bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-medium">
          + Build Custom Report
        </button>
      </div>
    </div>
  )
}
