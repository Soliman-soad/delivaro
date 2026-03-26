import Link from 'next/link'
import MarketingNav from '@/components/marketing/MarketingNav'
import MarketingFooter from '@/components/marketing/MarketingFooter'

const plans = [
  { name:'Starter', price:49, desc:'Perfect for growing e-commerce boutiques and local shops managing small fleets.', features:['Up to 500 shipments/mo','2 Admin users','Standard driver app','Real-time tracking','Email support','Core integrations'], cta:'Start for Free', highlighted:false },
  { name:'Growth',  price:199, desc:"Our most popular plan for established retailers scaling their delivery operations.", features:['Up to 5,000 shipments/mo','10 Admin users','AI Route optimization','White-label tracking page','Priority chat support','Advanced analytics'], cta:'Get Started Now', highlighted:true },
  { name:'Enterprise', price:null, desc:'Dedicated logistics infrastructure for high-volume global retail giants.', features:['Unlimited shipments','Unlimited users','Dedicated account manager','SLA guarantees','API rate limiting priority','Custom onboarding'], cta:'Talk to Sales', highlighted:false },
]

const comparison = [
  { section:'SHIPMENT LIMITS', rows:[
    { feature:'Monthly Shipments',      a:'Up to 500',   b:'Up to 5,000', c:'Unlimited', bold:false },
    { feature:'Additional Shipments',   a:'$0.50/ea',    b:'$0.35/ea',    c:'Custom',    bold:false },
    { feature:'Bulk Order Import',      a:false,         b:true,          c:true,        bold:false },
  ]},
  { section:'CORE FEATURES', rows:[
    { feature:'Live Tracking Dashboard', a:true,    b:true,              c:true,                   bold:false },
    { feature:'Driver Mobile App',       a:'Basic', b:'Pro',             c:'Enterprise White-label',bold:false },
    { feature:'Route Optimization',      a:false,   b:'AI-Powered',      c:'Advanced Multi-Stop',  bold:false },
    { feature:'Custom Branding',         a:false,   b:true,              c:true,                   bold:false },
    { feature:'Multi-Carrier Support',   a:'2 Carriers', b:'Unlimited',  c:'Unlimited',            bold:false },
  ]},
  { section:'MANAGEMENT & SUPPORT', rows:[
    { feature:'User Seats',              a:'2 Seats', b:'10 Seats',       c:'Unlimited', bold:false },
    { feature:'Role-Based Permissions',  a:false,     b:true,             c:true,        bold:false },
    { feature:'API Access',              a:'Read only',b:'Full Access',   c:'High Priority',bold:false },
    { feature:'Support Tier',            a:'Email',   b:'Priority Email & Chat', c:'Dedicated Manager', bold:false },
    { feature:'SLA Guarantee',           a:false,     b:'99.9%',          c:'99.99%',    bold:false },
  ]},
]

function Cell({ val }: { val: boolean | string }) {
  if (val === true) return <span className="text-green-600 font-bold text-base">✓</span>
  if (val === false) return <span className="text-gray-300">—</span>
  return <span className="text-sm text-gray-700 font-medium">{val}</span>
}

export default function PricingPage() {
  return (
    <>
      <MarketingNav/>
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 text-center bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-xs font-semibold text-[#0e9de8] uppercase tracking-widest mb-3">Transparent Pricing</p>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">The right scale for every <span className="text-[#0e9de8]">logistics network.</span></h1>
            <p className="text-gray-500">Simple, predictable pricing designed to grow with your business. No hidden fees, just reliable delivery.</p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="text-sm text-gray-500">Monthly</span>
              <div className="w-12 h-6 rounded-full bg-[#0e9de8] relative cursor-pointer flex items-center px-1">
                <div className="w-4 h-4 rounded-full bg-white ml-auto"/>
              </div>
              <span className="text-sm font-medium text-gray-900">Annually</span>
              <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">SAVE 20%</span>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="pb-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map(p => (
                <div key={p.name} className={`rounded-2xl border-2 p-7 relative ${p.highlighted ? 'border-[#0e9de8] shadow-xl shadow-[#0e9de8]/10' : 'border-gray-200'}`}>
                  {p.highlighted && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0e9de8] text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</div>}
                  <h3 className="font-bold text-gray-900 mb-1">{p.name}</h3>
                  <p className="text-xs text-gray-400 mb-5 leading-relaxed">{p.desc}</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    {p.price ? (
                      <><span className={`text-4xl font-extrabold ${p.highlighted?'text-[#0e9de8]':'text-gray-900'}`}>${p.price}</span><span className="text-sm text-gray-400">/mo</span></>
                    ) : (
                      <span className="text-3xl font-extrabold text-gray-900 italic">Custom</span>
                    )}
                  </div>
                  <div className="space-y-3 mb-8">
                    {p.features.map(f => (
                      <div key={f} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0"><span className="text-green-600 text-xs">✓</span></div>
                        <span className="text-sm text-gray-600">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={p.price ? '/signup' : '/contact'} className={`block w-full text-sm font-bold text-center py-3 rounded-xl transition-colors ${p.highlighted ? 'bg-[#0e9de8] text-white hover:bg-[#027dc6]' : 'border-2 border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                    {p.cta}
                  </Link>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex justify-center gap-8 mt-8">
              {['RapidShip','SecureLog','GlobalTrack','TrustVerify'].map(b => (
                <div key={b} className="flex items-center gap-1 text-xs text-gray-400">
                  <div className="w-3 h-3 rounded-full bg-gray-200"/>
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compare */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-3">Compare all features</h2>
            <p className="text-gray-500 text-center mb-10">Find the specific technical capabilities your logistics team needs.</p>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Feature Details</th>
                    {['Starter','Growth','Enterprise'].map((h, i) => (
                      <th key={h} className={`px-6 py-4 text-sm font-bold ${i===1?'text-[#0e9de8]':'text-gray-700'}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map(sec => (
                    <>
                      <tr key={sec.section} className="bg-gray-50">
                        <td colSpan={4} className="px-6 py-2 text-xs font-bold text-[#0e9de8] tracking-widest">{sec.section}</td>
                      </tr>
                      {sec.rows.map(row => (
                        <tr key={row.feature} className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-3.5 text-sm text-gray-700">{row.feature}</td>
                          <td className="px-6 py-3.5 text-center"><Cell val={row.a}/></td>
                          <td className="px-6 py-3.5 text-center font-semibold"><Cell val={row.b}/></td>
                          <td className="px-6 py-3.5 text-center"><Cell val={row.c}/></td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Enterprise CTA */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4">
            <div className="border border-gray-200 rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-xs font-bold text-[#0e9de8] uppercase tracking-widest mb-2">GLOBAL ENTERPRISE</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">High volume? Custom requirements?</h3>
                <p className="text-sm text-gray-500">Our Enterprise team works with the world's largest retailers to build bespoke delivery networks with dedicated infrastructure and 24/7 global support.</p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <button className="text-sm border border-gray-200 px-5 py-2.5 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium">Contact Sales</button>
                <button className="text-sm bg-[#0e9de8] text-white px-5 py-2.5 rounded-xl hover:bg-[#027dc6] transition-colors font-bold">Request Custom Demo →</button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
            {[
              ['Can I upgrade or downgrade my plan?','Yes, you can change your plan at any time. Changes take effect at the start of your next billing cycle.'],
              ["What happens if I exceed my shipment limit?","Don't worry, your service won't be interrupted. Additional shipments are billed at the per-unit rate specified in your plan details."],
            ].map(([q, a]) => (
              <div key={q as string} className="border-b border-gray-100 py-5">
                <h4 className="font-semibold text-gray-900 mb-2">{q}</h4>
                <p className="text-sm text-gray-500">{a}</p>
              </div>
            ))}
            <div className="text-center mt-8">
              <a href="#" className="text-sm text-[#0e9de8] font-medium hover:underline">View more FAQs →</a>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter/>
    </>
  )
}
