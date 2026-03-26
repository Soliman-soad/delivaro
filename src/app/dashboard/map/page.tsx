const drivers = [
  { name:'Marcus Chen',    status:'active', zone:'Downtown Hub',    capacity:85, time:'4 MINS',  color:'bg-blue-500' },
  { name:'Sarah Jenkins',  status:'active', zone:'North District',  capacity:40, time:'12 MINS', color:'bg-blue-500' },
  { name:'Robert Vance',   status:'idle',   zone:'Central Depot',   capacity:0,  time:'',        color:'bg-gray-400' },
  { name:'Elena Rodriguez',status:'delayed',zone:'Industrial Zone', capacity:95, time:'DELAYED', color:'bg-red-500' },
  { name:'David Kim',      status:'idle',   zone:'West Terminal',   capacity:20, time:'',        color:'bg-gray-400' },
]

export default function MapPage() {
  return (
    <div className="-m-6 h-[calc(100vh-56px)] flex overflow-hidden">
      {/* Fleet Manager Panel */}
      <div className="w-72 flex-shrink-0 bg-white border-r border-gray-100 flex flex-col">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-sm">👥</span>
              <h2 className="font-semibold text-gray-900">Fleet Manager</h2>
            </div>
            <button className="text-gray-400 hover:text-gray-600">▼</button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[{l:'ONLINE',v:'24',c:'text-gray-900'},{l:'IDLE',v:'08',c:'text-gray-900'},{l:'ALERTS',v:'02',c:'text-red-600'}].map(s => (
              <div key={s.l} className="bg-gray-50 rounded-lg p-2 text-center">
                <p className="text-xs text-gray-400 mb-1">{s.l}</p>
                <p className={`text-lg font-bold ${s.c}`}>{s.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 border-b border-gray-50">
          <input placeholder="Search drivers..." className="w-full text-sm bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 outline-none focus:border-[#0e9de8] focus:bg-white transition-colors"/>
        </div>

        <div className="px-3 py-2 border-b border-gray-50 flex gap-4">
          <button className="text-sm font-medium text-[#0e9de8] border-b-2 border-[#0e9de8] pb-1">All Drivers</button>
          <button className="text-sm text-gray-400 pb-1">Idle (8)</button>
        </div>

        <div className="flex-1 overflow-auto">
          {drivers.map((d, i) => (
            <div key={i} className={`p-3 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer ${i === 0 ? 'bg-gray-50' : ''}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full ${d.color} flex items-center justify-center text-white text-xs font-medium`}>
                    {d.name.split(' ').map(n=>n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{d.name}</p>
                    <div className="flex items-center gap-1">
                      <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${d.status==='active'?'bg-green-50 text-green-700':d.status==='delayed'?'bg-red-50 text-red-700':'bg-gray-100 text-gray-500'}`}>{d.status}</span>
                      <span className="text-xs text-gray-400">{d.zone}</span>
                    </div>
                  </div>
                </div>
                {d.time && <span className={`text-xs font-medium ${d.status==='delayed'?'text-red-600':'text-gray-500'}`}>{d.time}</span>}
              </div>
              {d.capacity > 0 && (
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>CAPACITY</span><span>{d.capacity}%</span>
                  </div>
                  <div className="h-1 bg-gray-100 rounded-full">
                    <div className={`h-1 rounded-full ${d.capacity > 80 ? 'bg-red-400' : 'bg-[#0e9de8]'}`} style={{width:`${d.capacity}%`}}/>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-3 border-t border-gray-100 space-y-2">
          <button className="w-full bg-[#0e9de8] text-white text-sm font-medium py-2.5 rounded-lg hover:bg-[#027dc6] transition-colors flex items-center justify-center gap-2">
            ✦ Optimize All Routes
          </button>
          <div className="text-center">
            <span className="text-xs text-green-600 font-medium">● Live Sync Active</span>
            <span className="text-xs text-gray-400 ml-2">Last update: 2s ago</span>
          </div>
        </div>
      </div>

      {/* Map area */}
      <div className="flex-1 relative bg-gray-900">
        {/* Performance bar */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
          <div className="flex items-center gap-6 bg-white/95 backdrop-blur rounded-xl px-4 py-2 shadow-sm text-sm">
            <span className="font-semibold text-gray-900">Fleet Performance: 98.2%</span>
            <span className="text-gray-500">↗ Avg ETA: 12.4m</span>
            <span className="text-gray-500">🕐 Shift Peak: 14:00</span>
          </div>
          <div className="flex gap-2">
            <button className="w-9 h-9 bg-white rounded-lg shadow flex items-center justify-center text-sm font-bold hover:bg-gray-50">⛶</button>
            <button className="w-9 h-9 bg-white rounded-lg shadow flex items-center justify-center hover:bg-gray-50">📍</button>
          </div>
        </div>

        {/* Fake map grid */}
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:'linear-gradient(rgba(100,150,200,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(100,150,200,0.4) 1px,transparent 1px)',backgroundSize:'48px 48px'}}/>
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">Live driver tracking map</div>

        {/* Driver pins */}
        {[{t:25,l:55,c:'bg-blue-500'},{t:40,l:25,c:'bg-blue-500'},{t:55,l:70,c:'bg-red-500'},{t:65,l:45,c:'bg-gray-400'},{t:35,l:80,c:'bg-blue-500'}].map((p,i) => (
          <div key={i} style={{top:`${p.t}%`,left:`${p.l}%`}} className="absolute">
            <div className={`w-9 h-9 rounded-full ${p.c} border-2 border-white shadow flex items-center justify-center text-white text-xs font-medium`}>
              {drivers[i]?.name.split(' ').map(n=>n[0]).join('')}
            </div>
          </div>
        ))}

        {/* Blue unassigned order dots */}
        {[{t:50,l:35},{t:30,l:60},{t:70,l:65}].map((p,i)=>(
          <div key={i} style={{top:`${p.t}%`,left:`${p.l}%`}} className="absolute w-5 h-5 rounded-full bg-blue-400 border-2 border-white shadow"/>
        ))}

        {/* Selected driver detail popup */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl p-4 flex items-center gap-4 min-w-72">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">MC</div>
            <div className="absolute bottom-0 right-0 bg-[#0e9de8] text-white text-xs rounded px-1.5">Selected</div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">Assignment: Marcus Chen</h3>
            <p className="text-xs text-gray-400">Currently: Hub</p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[['84%','🔋'],['12','📦'],['0','⚠️']].map(([v,icon],i)=>(
              <div key={i}>
                <p className="text-sm font-bold text-gray-900">{v}</p>
                <p className="text-xs text-gray-400">{['Battery','Orders','Issues'][i]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map legend */}
        <div className="absolute bottom-4 right-4 bg-white rounded-xl shadow-sm p-3 text-xs">
          <p className="font-medium text-gray-900 mb-2">MAP LEGEND</p>
          {[['Active Driver','bg-blue-500'],['Idle Driver','bg-gray-400'],['Delayed Driver','bg-red-500'],['Unassigned Order','bg-blue-400']].map(([l,c])=>(
            <div key={l} className="flex items-center gap-2 mb-1.5">
              <div className={`w-3 h-3 rounded-full ${c}`}/>
              <span className="text-gray-600">{l}</span>
            </div>
          ))}
        </div>

        {/* Zoom controls */}
        <div className="absolute top-1/3 right-4 flex flex-col gap-1">
          <button className="w-8 h-8 bg-white rounded-t-lg shadow flex items-center justify-center font-bold text-gray-700 hover:bg-gray-50">+</button>
          <button className="w-8 h-8 bg-white rounded-b-lg shadow flex items-center justify-center font-bold text-gray-700 hover:bg-gray-50">−</button>
        </div>
      </div>
    </div>
  )
}
