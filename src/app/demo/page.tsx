import Link from 'next/link'
import MarketingNav from '@/components/marketing/MarketingNav'
import MarketingFooter from '@/components/marketing/MarketingFooter'

export default function DemoPage() {
  return (
    <>
      <MarketingNav/>
      <main className="pt-16 bg-gray-50 min-h-screen">
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <div>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                  See why leading retailers choose{' '}
                  <span className="text-[#0e9de8]">Delivra.</span>
                </h1>
                <p className="text-gray-500 mb-8">Take a 20-minute guided tour of our platform and discover how to reduce delivery costs by up to 30%.</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {['Global multi-carrier support','Real-time route optimization','Enterprise-grade security','Automated customer alerts'].map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0e9de8]/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#0e9de8]"/>
                      </div>
                      <span className="text-sm text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
                  <div className="text-3xl text-gray-200 font-serif mb-3">❝</div>
                  <p className="text-gray-700 italic text-sm leading-relaxed mb-4">
                    "Delivra transformed our last-mile logistics. We scaled from 500 to 5,000 weekly shipments without adding a single headcount to our operations team."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold">SJ</div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Sarah Jenkins</p>
                      <p className="text-xs text-gray-400">VP of Operations, SwiftLogistics</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#eff8ff] border border-[#0e9de8]/20 rounded-xl p-4 flex items-center gap-3 text-sm text-[#0364a1]">
                  <span className="text-lg">🕐</span>
                  Our team typically responds to demo requests within 24 business hours.
                </div>
              </div>

              {/* Right: Form */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Request a Demo</h2>
                <p className="text-sm text-gray-400 mb-6">Fill out the form below and an expert will reach out to schedule a personalized walkthrough.</p>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input placeholder="John Doe" className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#0e9de8] transition-all"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input placeholder="Acme Logistics" className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#0e9de8] transition-all"/>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                    <input type="email" placeholder="john@company.com" className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#0e9de8] transition-all"/>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your Role</label>
                      <select className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#0e9de8] bg-white">
                        <option>Operations Manager</option>
                        <option>CTO</option>
                        <option>Logistics Director</option>
                        <option>CEO/Founder</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Shipments</label>
                      <select className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#0e9de8] bg-white">
                        <option>Under 500</option>
                        <option>501 - 2,000</option>
                        <option>2,001 - 10,000</option>
                        <option>10,000+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                    <textarea placeholder="Tell us about your current logistics challenges..." rows={4} className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#0e9de8] resize-none transition-all"/>
                  </div>
                  <button className="w-full bg-[#0e9de8] text-white text-sm font-bold py-3.5 rounded-xl hover:bg-[#027dc6] transition-colors">
                    Request my Demo
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    By clicking "Request my Demo", you agree to our{' '}
                    <a href="#" className="text-[#0e9de8] underline">Privacy Policy</a> and terms.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter/>
    </>
  )
}
