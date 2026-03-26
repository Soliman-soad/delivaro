'use client'
import { useState } from 'react'
import { Shield } from 'lucide-react'

const tabs = ['Company Profile','Billing & Subscription','Team Management','API & Integrations','Notification Templates']

export default function SettingsPage() {
  const [tab, setTab] = useState(0)

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
          <p className="text-sm text-gray-500 mt-1">Configure your logistics operations, team permissions, and enterprise billing.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-2">
          <Shield size={14} className="text-green-600"/> Enterprise Security Enabled
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex gap-0 overflow-x-auto">
          {tabs.map((t, i) => (
            <button key={i} onClick={() => setTab(i)} className={`text-sm px-4 py-3 font-medium border-b-2 whitespace-nowrap transition-colors ${tab===i?'border-[#0e9de8] text-[#0e9de8]':'border-transparent text-gray-500 hover:text-gray-700'}`}>{t}</button>
          ))}
        </div>
      </div>

      {tab === 0 && (
        <div className="space-y-6">
          {/* Business Identity */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-900 mb-1">Business Identity</h2>
            <p className="text-sm text-gray-400 mb-5">Manage your public company information and branding.</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-bold">GL</div>
              <div>
                <button className="text-sm border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors">Change Logo</button>
                <p className="text-xs text-gray-400 mt-1">Recommended: 400x400px PNG or SVG</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Legal Name</label>
                <input defaultValue="Global Logistics Corp" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-[#0e9de8]"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID / VAT Number</label>
                <input defaultValue="US-987654321" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-[#0e9de8]"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                <input defaultValue="https://globallogistics.com" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-[#0e9de8]"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                <input defaultValue="E-commerce Retail" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-[#0e9de8]"/>
              </div>
            </div>
          </div>

          {/* Primary Address */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-900 mb-1">Primary Address</h2>
            <p className="text-sm text-gray-400 mb-5">The default pickup and billing address for your operations.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                <input defaultValue="1200 Logistics Way, Suite 400" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-[#0e9de8]"/>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input defaultValue="San Francisco" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-[#0e9de8]"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State / Province</label>
                  <input defaultValue="CA" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-[#0e9de8]"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ZIP / Postal Code</label>
                  <input defaultValue="94105" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-[#0e9de8]"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <input defaultValue="United States" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-[#0e9de8]"/>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button className="text-sm bg-[#0e9de8] text-white px-6 py-2.5 rounded-lg hover:bg-[#027dc6] font-medium transition-colors">Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {tab !== 0 && (
        <div className="bg-white rounded-xl border border-gray-100 p-16 text-center">
          <p className="text-gray-400 text-sm">{tabs[tab]} settings</p>
        </div>
      )}
    </div>
  )
}
