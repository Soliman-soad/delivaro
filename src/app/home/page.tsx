import Link from 'next/link'
import MarketingNav from '@/components/marketing/MarketingNav'
import MarketingFooter from '@/components/marketing/MarketingFooter'

const features = [
  { icon:'📱', title:'Driver Mobile App',    desc:'Give your fleet a turn-by-turn, digital proof of delivery, and real-time driver task management.' },
  { icon:'📊', title:'Advanced Analytics',   desc:'Understand trends in your logistics chain with advanced performance reports and cost per delivery tracking.' },
  { icon:'📋', title:'Secure Documentation', desc:'Automatically generate compliant shipping labels, customs forms, and invoices for every order.' },
  { icon:'🗺️', title:'Fleet Tracking',       desc:'Monitor your entire delivery network in real time with GPS accurate down to the meter for every active driver.' },
  { icon:'📦', title:'Bulk Shipping',         desc:'Upload thousands of orders via CSV or API and generate labels instantly with our smart batching engine.' },
  { icon:'✅', title:'Automated Status',      desc:'Keep customers happy with automated SMS and email notifications at every milestone of the delivery.' },
]

const stats = [
  { value:'25M+',   label:'Shipments Managed' },
  { value:'120+',   label:'Carrying Carriers' },
  { value:'45k',    label:'Active Drivers' },
  { value:'99.99%', label:'Platform Uptime' },
]

const testimonials = [
  { text:'"Delivra changed our business overnight. We went from manual dispatching to a fully automated system that handles 2,000 orders a day without breaking a sweat."', name:'Sarah Jenkins', role:'Ops Director, FastDeliver' },
  { text:'"The real-time driver tracking alone is worth the price. Our customer support tickets dropped by 75% in the first month."', name:'Mark Thomson', role:'CTO, Nordic Retail' },
  { text:'"Simple API, fantastic documentation, and a support team that actually knows their stuff. Integration was smooth and our devs love it"', name:'Lin Chen', role:'VP Operations' },
]

const carriers = ['FedEx','DHL Express','UPS','USPS','Royal Mail']

export default function HomePage() {
  return (
    <>
      <MarketingNav/>
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-white pt-20 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#eff8ff] text-[#0364a1] text-xs font-medium px-3 py-1.5 rounded-full mb-6">
                  🏆 Industry's price leader
                </div>
                <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                  Last-Mile Logistics{' '}
                  <span className="text-[#0e9de8]">Optimized for Growth.</span>
                </h1>
                <p className="text-lg text-gray-500 mb-8">
                  Delivra simplifies your shipping workflow, tracks deliveries in real-time, and reduces operational costs by up to 30%. Start delivering faster today.
                </p>
                <div className="flex gap-4 mb-10">
                  <Link href="/signup" className="bg-[#0e9de8] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#027dc6] transition-colors">
                    Request free demo
                  </Link>
                  <Link href="/features" className="border border-gray-200 text-gray-700 text-sm font-medium px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                    Explore features
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1">
                    {['bg-blue-400','bg-green-400','bg-purple-400','bg-amber-400'].map((c,i)=>(
                      <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white`}/>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">Join <strong>7.8M+</strong> logistics managers using Delivra</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                {/* Dashboard preview */}
                <div className="bg-white p-4 border-b border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 rounded bg-[#0e9de8]/10 flex items-center justify-center text-xs">📦</div>
                    <span className="text-xs font-medium text-gray-500">Real-time Dashboard</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[['1,284','Orders'],['98.2%','On-Time'],['4.2h','Avg Transit'],['12','Alerts']].map(([v,l])=>(
                      <div key={l} className="bg-gray-50 rounded-lg p-2">
                        <p className="text-sm font-bold text-gray-900">{v}</p>
                        <p className="text-xs text-gray-400">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4">
                  <div className="h-32 flex items-end gap-1">
                    {[60,80,50,75,95,85,65,90,70,85,100,88].map((h,i)=>(
                      <div key={i} className="flex-1 bg-[#0e9de8] rounded-t opacity-80 hover:opacity-100 transition-opacity" style={{height:`${h}%`}}/>
                    ))}
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <div className="flex items-center justify-between text-xs text-gray-500 bg-gray-50 rounded-lg p-3">
                    <span>📍 1,425 Shipments</span>
                    <span className="text-green-600 font-medium">↗ +12.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carriers */}
        <section className="py-12 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs text-gray-400 uppercase tracking-widest font-medium mb-8">Seamlessly Integrated With Major Carriers</p>
            <div className="flex items-center justify-center gap-12 flex-wrap">
              {carriers.map(c => <span key={c} className="text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors cursor-pointer">{c}</span>)}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map(s => (
                <div key={s.label} className="text-center">
                  <p className="text-4xl font-extrabold text-[#0e9de8] mb-1">{s.value}</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Everything you need to <span className="text-[#0e9de8]">scale your delivery network.</span></h2>
                <p className="text-gray-500 mt-3">Purpose-built tools for modern retailers who demand precision, speed, and absolute reliability in their last mile operations.</p>
              </div>
              <Link href="/features" className="text-sm text-[#0e9de8] font-medium hover:underline whitespace-nowrap">Show all features →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(f => (
                <div key={f.title} className="bg-white rounded-xl border border-gray-100 p-6 hover:border-[#0e9de8]/30 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#eff8ff] flex items-center justify-center text-xl mb-4">{f.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                  <a href="#" className="text-xs text-[#0e9de8] font-medium mt-3 inline-block hover:underline">Learn more →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Integrate in minutes, scale for years.</h2>
            <p className="text-gray-500 mb-16">Getting started with Delivra is a seamless three-step process designed to minimize downtime.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { n:'01', title:'Connect Your Store',   desc:'Link any Shopify, WooCommerce, or custom ERP via our robust API. Your orders sync instantly.' },
                { n:'02', title:'Configure Rules',      desc:'Set your carrier preferences, delivery zones, and automative triggers for automatic dispatching.' },
                { n:'03', title:'Deliver & Track',      desc:'Start shipping with pre-negotiated rates. Monitor performance through your unified dashboard.' },
              ].map(s => (
                <div key={s.n} className="text-left">
                  <div className="w-12 h-12 rounded-2xl bg-[#0e9de8] text-white text-sm font-bold flex items-center justify-center mb-4">{s.n}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations CTA */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="grid grid-cols-3 gap-3">
                {['Magento','WOO','Shopify','eBay','Amazon','Etsy'].map(b => (
                  <div key={b} className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-center text-xs font-semibold text-gray-500 h-16 hover:border-[#0e9de8]/40 transition-colors cursor-pointer">{b}</div>
                ))}
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Your existing stack, supercharged by Delivra.</h2>
                <p className="text-gray-500 mb-6">We believe in zero-friction adoption. Delivra integrates with 150+ platforms, from e-commerce giants to local warehouse management systems. No custom code required.</p>
                <div className="space-y-3 mb-6">
                  {['One-click Shopify & WooCommerce setup','Webhooks for custom ERP notifications','Robust REST API for enterprise developers'].map(f => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-green-500"/>
                      </div>
                      <span className="text-sm text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/integrations" className="text-sm text-[#0e9de8] font-semibold hover:underline">Browse our App Directory →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing preview */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Transparent pricing for every scale.</h2>
            <p className="text-gray-500 mb-12">No hidden fees. Choose a plan that fits your current volume and scale as you grow.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { name:'Starter', price:'$49', period:'/mo', features:['500 shipments/mo','Basic driver app','Email support'], cta:'Choose Starter', highlighted:false },
                { name:'Growth', price:'$199', period:'/mo', features:['5,000 shipments/mo','Advanced route optimization','Priority 24/7 support','Multi-location management'], cta:'Choose Growth', highlighted:true },
                { name:'Enterprise', price:'Custom', period:'', features:['Unlimited shipments','Unlimited users','Dedicated account manager','SLA guarantees'], cta:'Contact Sales', highlighted:false },
              ].map(p => (
                <div key={p.name} className={`rounded-2xl border-2 p-6 text-left ${p.highlighted ? 'border-[#0e9de8] shadow-lg shadow-[#0e9de8]/10 relative' : 'border-gray-200'}`}>
                  {p.highlighted && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0e9de8] text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>}
                  <h3 className="font-bold text-gray-900 mb-1">{p.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className={`text-3xl font-extrabold ${p.highlighted ? 'text-[#0e9de8]' : 'text-gray-900'}`}>{p.price}</span>
                    <span className="text-sm text-gray-400">{p.period}</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    {p.features.map(f => (
                      <div key={f} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <div className="text-green-600 text-xs">✓</div>
                        </div>
                        <span className="text-sm text-gray-600">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/pricing" className={`block w-full text-sm font-semibold text-center py-3 rounded-xl transition-colors ${p.highlighted ? 'bg-[#0e9de8] text-white hover:bg-[#027dc6]' : 'border border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                    {p.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-12">Trusted by the best in the business.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map(t => (
                <div key={t.name} className="bg-white rounded-xl border border-gray-100 p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_,i) => <span key={i} className="text-amber-400 text-sm">★</span>)}
                  </div>
                  <p className="text-sm text-gray-700 italic mb-5 leading-relaxed">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold">{t.name.split(' ').map(n=>n[0]).join('')}</div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section className="py-20 bg-[#0e9de8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-white mb-3">Ready to streamline your delivery network?</h2>
                <p className="text-blue-100">Get a personalized walkthrough of the Delivra platform and see how we can optimize your specific logistics workflow.</p>
                <div className="flex gap-4 mt-6">
                  <Link href="/demo" className="bg-white text-[#0364a1] text-sm font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">Schedule a Demo</Link>
                  <Link href="/signup" className="border border-white/40 text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">Start Free Trial</Link>
                </div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                <p className="text-white font-semibold mb-4">New Demo Request</p>
                <div className="space-y-3">
                  <input placeholder="Your name" className="w-full bg-white/20 text-white placeholder-blue-200 text-sm rounded-lg px-4 py-2.5 outline-none border border-white/20 focus:border-white/50"/>
                  <input placeholder="Work email" className="w-full bg-white/20 text-white placeholder-blue-200 text-sm rounded-lg px-4 py-2.5 outline-none border border-white/20 focus:border-white/50"/>
                  <Link href="/demo" className="block w-full bg-white text-[#0364a1] text-sm font-bold text-center py-2.5 rounded-lg hover:bg-blue-50 transition-colors">Request Demo →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter/>
    </>
  )
}
