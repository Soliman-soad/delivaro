import MarketingNav from '@/components/marketing/MarketingNav'
import MarketingFooter from '@/components/marketing/MarketingFooter'

export default function ContactPage() {
  return (
    <>
      <MarketingNav/>
      <main className="pt-16">
        <section className="py-20 bg-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <p className="text-xs font-bold text-[#0e9de8] uppercase tracking-widest mb-3">Contact Us</p>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">How can we help your business?</h1>
            <p className="text-gray-500">Our team of logistics experts is ready to help you optimize your delivery operations and scale your e-commerce growth.</p>
          </div>
        </section>

        <section className="pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-1">Send us a message</h2>
                <p className="text-sm text-gray-400 mb-6">Fill out the form below and our sales team will get back to you within 24 hours.</p>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                      <input placeholder="Jane" className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#0e9de8]"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                      <input placeholder="Doe" className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#0e9de8]"/>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Work email</label>
                    <input type="email" placeholder="jane@company.com" className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#0e9de8]"/>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company name</label>
                      <input placeholder="Acme Logistics" className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#0e9de8]"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Monthly shipments</label>
                      <input placeholder="5,000" className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#0e9de8]"/>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                    <textarea rows={5} placeholder="Tell us about your logistics challenges..." className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#0e9de8] resize-none"/>
                  </div>
                  <button className="w-full bg-[#0e9de8] text-white text-sm font-bold py-3.5 rounded-xl hover:bg-[#027dc6] transition-colors">
                    Send Message
                  </button>
                  <p className="text-xs text-gray-400 text-center">By submitting this form, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.</p>
                </form>
              </div>

              {/* Right */}
              <div className="space-y-5">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[['50+ Countries','GLOBAL REACH'],['< 24h Turnaround','QUICK RESPONSE'],['24/7 Monitoring','EXPERT SUPPORT']].map(([v,l])=>(
                    <div key={l} className="text-center bg-gray-50 rounded-xl p-4">
                      <p className="text-sm font-bold text-gray-900">{v}</p>
                      <p className="text-xs text-gray-400 mt-1">{l}</p>
                    </div>
                  ))}
                </div>

                {/* Direct Channels */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">💬 Direct Channels</h3>
                  <div className="space-y-3">
                    {[
                      { icon:'📞', title:'Sales Inquiry', desc:'Talk to our team about pricing and enterprise solutions.', detail:'+1 (800) Delivra', link:'Schedule a call →' },
                      { icon:'🎧', title:'Technical Support', desc:'Existing customer? Get help with your active shipments.', detail:'support@Delivra.io', link:'Visit Help Center →' },
                      { icon:'👥', title:'Partnerships', desc:'Interested in integrating or partnering with us?', detail:'partners@Delivra.io', link:'View API Docs →' },
                    ].map(c => (
                      <div key={c.title} className={`bg-white rounded-xl border border-gray-200 p-4 ${c.icon==='📞'?'border-[#0e9de8]/30 bg-[#eff8ff]':''}`}>
                        <div className="flex items-start gap-3">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${c.icon==='📞'?'bg-[#0e9de8]':'bg-gray-100'}`}>{c.icon}</div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">{c.title}</h4>
                            <p className="text-xs text-gray-400 mt-0.5">{c.desc}</p>
                            <p className={`text-sm font-semibold mt-1 ${c.icon==='📞'?'text-[#0e9de8]':'text-gray-700'}`}>{c.detail}</p>
                            <a href="#" className="text-xs text-[#0e9de8] font-medium hover:underline mt-0.5 inline-block">{c.link}</a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Global Presence */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">📍 Global Presence</h3>
                  <div className="space-y-3">
                    {[
                      { city:'San Francisco, USA', tz:'PST (UTC-8)', addr:'123 Logistics Way, Suite 400, San Francisco, CA 94103' },
                      { city:'London, UK',           tz:'GMT (UTC+0)', addr:'80 Kingsway, Fourth Floor, London, WC2B 6AA' },
                      { city:'Singapore, SG',        tz:'SGT (UTC+8)', addr:'71 Ayer Rajah Crescent, #03-01, Singapore 139951' },
                    ].map(l => (
                      <div key={l.city} className="flex gap-3 border-b border-gray-50 last:border-0 pb-3 last:pb-0">
                        <div className="w-7 h-7 rounded bg-gray-50 flex items-center justify-center text-sm flex-shrink-0">🏢</div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-gray-900">{l.city}</p>
                            <span className="text-xs text-gray-400">{l.tz}</span>
                          </div>
                          <p className="text-xs text-gray-400">{l.addr}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom links */}
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[['✉️','General Inquiries','hello@Delivra.io'],['👥','Careers','careers@Delivra.io'],['📢','Media Relations','press@Delivra.io']].map(([icon,title,email])=>(
              <div key={title as string}>
                <span className="text-2xl">{icon}</span>
                <p className="font-semibold text-gray-900 mt-2 mb-1">{title}</p>
                <a href={`mailto:${email}`} className="text-sm text-[#0e9de8] hover:underline">{email}</a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <MarketingFooter/>
    </>
  )
}
