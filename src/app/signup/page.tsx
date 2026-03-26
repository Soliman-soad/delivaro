import { Caravan } from 'lucide-react'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-white border-r border-gray-100">
        <Link href="/home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#0e9de8] flex items-center justify-center">
            <Caravan color='white'/>
          </div>
          <span className="font-bold text-gray-900">Delivra</span>
        </Link>

        <div>
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-600 mb-6">
            🛡️ ENTERPRISE GRADE SECURITY
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The modern standard for{' '}
            <span className="text-[#0e9de8]">logistics operations.</span>
          </h1>
          <p className="text-gray-500 mb-8">Connect your storefront, automate shipments, and delight your customers with real-time tracking that actually works.</p>
          <div className="space-y-4 mb-10">
            {[
              ['Global Carrier Network', 'Instant access to 50+ global and local carriers with pre-negotiated rates.'],
              ['Real-time Analytics', 'Deep insights into shipping costs, delivery times, and carrier performance.'],
              ['Developer Friendly', 'Robust APIs and webhooks designed to integrate with your existing stack in minutes.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0e9de8]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#0e9de8]"/>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t}</p>
                  <p className="text-sm text-gray-500">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {['bg-blue-400','bg-green-400','bg-purple-400','bg-amber-400'].map((c,i) => (
                <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white`}/>
              ))}
            </div>
            <p className="text-sm text-gray-600">Joined by <strong>400+</strong> new merchants this week.</p>
          </div>
        </div>

        <p className="text-xs text-gray-400">© 2024 Delivra Inc. All rights reserved.</p>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Create your account</h2>
          <p className="text-sm text-gray-400 mb-6">Join 2,000+ retailers optimizing their deliveries.</p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <div className="relative">
                  <input placeholder="Jane" className="w-full text-sm border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 outline-none focus:border-[#0e9de8] transition-all"/>
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">👤</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input placeholder="Doe" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-[#0e9de8] transition-all"/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <div className="relative">
                <input placeholder="Acme Logistics" className="w-full text-sm border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 outline-none focus:border-[#0e9de8] transition-all"/>
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">🏢</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
              <div className="relative">
                <input type="email" placeholder="jane@company.com" className="w-full text-sm border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 outline-none focus:border-[#0e9de8] transition-all"/>
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">✉️</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input type="password" defaultValue="password" className="w-full text-sm border border-gray-200 rounded-lg pl-9 pr-10 py-2.5 outline-none focus:border-[#0e9de8] transition-all"/>
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">🔒</span>
              </div>
              <div className="flex gap-1 mt-2">
                {['bg-gray-200','bg-gray-200','bg-gray-200','bg-gray-200'].map((c,i) => (
                  <div key={i} className={`flex-1 h-1 rounded-full ${c}`}/>
                ))}
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-400">
                <span>STRENGTH: NONE</span><span>Min. 8 characters</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-0.5 rounded accent-[#0e9de8]"/>
              <p className="text-sm text-gray-500">
                I agree to the{' '}
                <a href="#" className="text-[#0e9de8] font-medium">Terms of Service</a>{' '}and{' '}
                <a href="#" className="text-[#0e9de8] font-medium">Privacy Policy</a>.
              </p>
            </div>
            <Link href="/onboarding" className="block w-full bg-[#0e9de8] text-white text-sm font-semibold text-center py-3 rounded-xl hover:bg-[#027dc6] transition-colors">
              Create Account →
            </Link>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-100"/>
              <span className="text-xs text-gray-400">OR CONTINUE WITH</span>
              <div className="flex-1 h-px bg-gray-100"/>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                <span>G</span> Google
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                <span style={{color:'#ff8c00'}}>⬛</span> Microsoft
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-500 text-center mt-5">
            Already have an account?{' '}
            <Link href="/signin" className="text-[#0e9de8] font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
