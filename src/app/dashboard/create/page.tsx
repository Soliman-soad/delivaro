'use client'
import { useState } from 'react'
import { RotateCcw } from 'lucide-react'

const steps = ['Method', 'Details', 'Service', 'Done']

export default function CreateShipmentPage() {
  const [step, setStep] = useState(0)
  const [method, setMethod] = useState<'manual'|'csv'|null>(null)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs text-[#0e9de8] font-medium bg-[#eff8ff] px-2 py-1 rounded-full">Logistic Engine</span>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">Create New Shipment</h1>
          <p className="text-sm text-gray-500 mt-1">Prepare individual labels or process bulk orders in seconds.</p>
        </div>
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
          <RotateCcw size={14}/> Reset Flow
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main flow */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 p-6">
          {/* Stepper */}
          <div className="flex items-center mb-8">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold ${i <= step ? 'bg-[#0e9de8] text-white' : 'border-2 border-gray-200 text-gray-400'}`}>
                    {i < step ? '✓' : i + 1}
                  </div>
                  <span className={`text-xs mt-1 font-medium ${i === step ? 'text-[#0e9de8]' : 'text-gray-400'}`}>{s}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`flex-1 h-px mx-2 mb-5 ${i < step ? 'bg-[#0e9de8]' : 'bg-gray-200'}`}/>
                )}
              </div>
            ))}
          </div>

          {/* Step 0: Method */}
          {step === 0 && (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setMethod('manual')}
                className={`p-6 rounded-xl border-2 text-left transition-all ${method === 'manual' ? 'border-[#0e9de8] bg-[#eff8ff]' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${method === 'manual' ? 'bg-[#0e9de8]' : 'bg-gray-100'}`}>
                  <span className={`text-xl ${method === 'manual' ? 'text-white' : ''}`}>+</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Manual Shipment</h3>
                <p className="text-sm text-gray-500">Enter details one-by-one for specific orders.</p>
                {method === 'manual' && <div className="mt-3 h-1 bg-[#0e9de8] rounded-full"/>}
              </button>
              <button
                onClick={() => setMethod('csv')}
                className={`p-6 rounded-xl border-2 text-left transition-all ${method === 'csv' ? 'border-[#0e9de8] bg-[#eff8ff]' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${method === 'csv' ? 'bg-[#0e9de8]' : 'bg-gray-100'}`}>
                  <span className="text-lg">📄</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">CSV Import</h3>
                <p className="text-sm text-gray-500">Upload a file for high-volume label processing.</p>
              </button>
            </div>
          )}

          {/* Step 1: Details */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sender Name</label>
                  <input className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-[#0e9de8]" placeholder="Queens Distribution"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Recipient Name</label>
                  <input className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-[#0e9de8]" placeholder="Jameson Residence"/>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Origin Address</label>
                  <input className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-[#0e9de8]" placeholder="123 Distribution Ave, Queens, NY 11101"/>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Destination Address</label>
                  <input className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-[#0e9de8]" placeholder="456 Hoboken St, Hoboken, NJ 07030"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Weight (lbs)</label>
                  <input type="number" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-[#0e9de8]" placeholder="2.5"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Package Type</label>
                  <select className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-[#0e9de8] bg-white">
                    <option>Box</option><option>Envelope</option><option>Tube</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Service */}
          {step === 2 && (
            <div className="space-y-3">
              {[
                { name:'Express Overnight', price:'$18.70', eta:'Next day by 10:30 AM', badge:'Fastest' },
                { name:'Priority 2-Day',    price:'$12.40', eta:'2 business days',       badge:null },
                { name:'Ground Economy',    price:'$7.20',  eta:'5–7 business days',      badge:'Best Value' },
              ].map((s, i) => (
                <label key={i} className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${i === 0 ? 'border-[#0e9de8] bg-[#eff8ff]' : 'border-gray-200 hover:border-gray-300'}`}>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="service" defaultChecked={i === 0} className="accent-[#0e9de8]"/>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900">{s.name}</span>
                        {s.badge && <span className="text-xs bg-[#0e9de8] text-white px-2 py-0.5 rounded-full">{s.badge}</span>}
                      </div>
                      <span className="text-xs text-gray-400">{s.eta}</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{s.price}</span>
                </label>
              ))}
            </div>
          )}

          {/* Step 3: Done */}
          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mx-auto mb-4">✓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Shipment Created!</h3>
              <p className="text-sm text-gray-500 mb-6">Your shipment label is ready to download.</p>
              <div className="flex gap-3 justify-center">
                <button className="text-sm bg-[#0e9de8] text-white px-6 py-2 rounded-lg hover:bg-[#027dc6] font-medium">Download Label</button>
                <button onClick={() => { setStep(0); setMethod(null) }} className="text-sm border border-gray-200 px-6 py-2 rounded-lg hover:bg-gray-50">New Shipment</button>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-4 border-t border-gray-50">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="text-sm border border-gray-200 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >Back</button>
            <div className="flex gap-3">
              <button className="text-sm text-gray-400 hover:text-gray-600">Save as Draft</button>
              <button
                onClick={() => setStep(Math.min(3, step + 1))}
                disabled={step === 0 && !method}
                className="text-sm bg-[#0e9de8] text-white px-6 py-2 rounded-lg hover:bg-[#027dc6] disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium"
              >Continue →</button>
            </div>
          </div>
        </div>

        {/* Shipment Summary sidebar */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm">📦</span>
              <h2 className="font-semibold text-gray-900">Shipment Summary</h2>
            </div>
            <p className="text-xs text-gray-400 mb-3">Real-time rate estimation</p>
            <div className="space-y-2 mb-4">
              {[['Service Fee','$12.50'],['Fuel Surcharge','$1.20'],['Insurance','$5.00']].map(([l,v]) => (
                <div key={l} className="flex justify-between text-sm">
                  <span className="text-gray-600">{l}</span>
                  <span className="text-gray-900">{v}</span>
                </div>
              ))}
              <div className="border-t border-gray-100 pt-2 flex justify-between">
                <span className="text-sm font-semibold text-gray-900">Estimated Total</span>
                <span className="text-sm font-bold text-[#0e9de8]">$18.70</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 bg-gray-50 rounded-lg p-3">
              Rates are based on commercial pricing and current carrier availability. Final charges may vary based on exact weight at pickup.
            </p>
            <button className="w-full mt-4 bg-[#0e9de8] text-white text-sm font-medium py-3 rounded-lg hover:bg-[#027dc6] transition-colors">
              Continue →
            </button>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4 flex gap-3">
            <span className="text-lg flex-shrink-0">🛡️</span>
            <div>
              <p className="text-sm font-medium text-gray-900">Need help with rates?</p>
              <a href="#" className="text-xs text-[#0e9de8] hover:underline">View our carrier guidelines</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
