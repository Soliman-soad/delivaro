import Link from 'next/link'
import MarketingNav from '@/components/marketing/MarketingNav'
import MarketingFooter from '@/components/marketing/MarketingFooter'

const sections = [
  {
    badge:'Logistics Ops',
    title:'Bulk Shipment Management',
    desc:'Eliminate manual entry with our high-speed bulk processing engine. Whether it\'s 50 orders or 10,000, Delivra handles high volumes without breaking a sweat.',
    features:['Free click label printing for entire batch orders','Automated address validation to prevent delivery failures','CSV/XLSX import with intelligent field mapping','Pre-defined shipping rules for automatic carrier selection'],
    img:'warehouse',
    flip:false,
  },
  {
    badge:'Developer Tools',
    title:'API & Seamless Integrations',
    desc:'Connect your existing ecosystem in minutes. Our RESTful API and pre-built connectors for Shopify, Magento, and WooCommerce make data flow effortless.',
    features:['Robust Webhooks for real-time shipment status updates','Developer-friendly documentation with SDKs in 5 languages','Secure OAuth2 Authentication for enterprise security','Sandboxed testing environment for safe deployments'],
    img:'code',
    flip:true,
  },
  {
    badge:'Mobile Workforce',
    title:'Next-Gen Driver Applications',
    desc:"Empower your fleet with an intuitive mobile experience. Available on iOS and Android, our driver app simplifies navigation, proof of delivery, and communication.",
    features:['Smart route optimizations to save time and fuel','Contactless proof of delivery (Photo/Signature)','Offline mode support for remote-area deliveries','In-app messaging for instant dispatcher coordination'],
    img:'driver',
    flip:false,
  },
  {
    badge:'Track Visibility',
    title:'Real-Time Live Tracking',
    desc:"Give your customers peace of mind and reduce support inquiries. Our tracking pages offer precise, live updates on every shipment's journey.",
    features:['Custom-branded tracking pages with logo and colors','Interactive maps showing real-time driver location','Estimated Time of Arrival (ETA) with 95% accuracy','Multi-carrier tracking numbers consolidated in one view'],
    img:'tracking',
    flip:true,
  },
  {
    badge:'Proactive Alerts',
    title:'Automated Smart Notifications',
    desc:'Keep everyone in the loop without lifting a finger. Send automated, trigger-based updates via Gmail, SMS, or WhatsApp at every key milestone.',
    features:['Customizable message templates for brand consistency','Multilingual support for international shipments','Exception alerts for delays or failed attempts','Review prompts after successful delivery'],
    img:'phone',
    flip:false,
  },
  {
    badge:'Actionable Insights',
    title:'Advanced Reporting & Analytics',
    desc:'Turn your logistics data into a competitive advantage. Identify bottlenecks, track carrier performance, and monitor delivery costs in real time.',
    features:['Custom dashboard with drag-and-drop tiles','Carrier performance benchmarking and A/B testing','Cost-per-delivery analysis and optimization trends','Automated weekly PDF reports delivered to your inbox'],
    img:'analytics',
    flip:true,
  },
]

const imgBg: Record<string, string> = {
  warehouse:'from-amber-50 to-amber-100',
  code:'from-gray-800 to-gray-900',
  driver:'from-blue-50 to-blue-100',
  tracking:'from-gray-700 to-gray-900',
  phone:'from-slate-800 to-slate-900',
  analytics:'from-blue-50 to-indigo-100',
}

export default function FeaturesPage() {
  return (
    <>
      <MarketingNav/>
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-xs font-semibold text-[#0e9de8] uppercase tracking-widest mb-3">Platform Capabilities</p>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              Powerful logistics tools built for the <span className="text-[#0e9de8]">modern merchant.</span>
            </h1>
            <p className="text-lg text-gray-500 mb-8">Everything you need to automate your shipping workflow, track drivers in real-time, and scale your delivery operations globally.</p>
            <div className="flex justify-center gap-4">
              <Link href="/demo" className="bg-[#0e9de8] text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-[#027dc6] transition-colors">See Delivra in Action</Link>
              <Link href="/pricing" className="border border-gray-200 text-gray-700 text-sm font-medium px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">View Pricing Plans</Link>
            </div>
          </div>
          <div className="flex justify-center gap-12 mt-12">
            {[['Scalable Infrastructure','Built on enterprise-grade cloud for 99.99% uptime'],['Carrier Neutral','Connect with 150+ global carriers in seconds'],['Global Compliance','Customized customs forms and tax submissions']].map(([t,d])=>(
              <div key={t} className="text-center max-w-xs">
                <p className="text-sm font-semibold text-gray-900">{t}</p>
                <p className="text-xs text-gray-400 mt-1">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature sections */}
        {sections.map((s, i) => (
          <section key={i} className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="max-w-6xl mx-auto px-4">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${s.flip ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={s.flip ? 'lg:order-2' : ''}>
                  <span className="text-xs font-bold text-[#0e9de8] uppercase tracking-widest bg-[#eff8ff] px-3 py-1 rounded-full">{s.badge}</span>
                  <h2 className="text-2xl font-extrabold text-gray-900 mt-4 mb-3">{s.title}</h2>
                  <p className="text-gray-500 mb-6">{s.desc}</p>
                  <div className="space-y-3 mb-6">
                    {s.features.map(f => (
                      <div key={f} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#0e9de8]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[#0e9de8]"/>
                        </div>
                        <span className="text-sm text-gray-700">{f}</span>
                      </div>
                    ))}
                  </div>
                  <button className="text-sm border border-gray-200 rounded-xl px-5 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors font-medium">Request Demo →</button>
                </div>

                {/* Image placeholder */}
                <div className={`bg-gradient-to-br ${imgBg[s.img]} rounded-2xl h-72 flex items-center justify-center ${s.flip ? 'lg:order-1' : ''}`}>
                  <p className="text-sm text-gray-400 italic">{s.title}</p>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <section className="py-20 bg-[#0e9de8] text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-white mb-3">Ready to optimize your last-mile?</h2>
            <p className="text-blue-100 mb-8">Join 2,001 retailers who reduced their shipping tools by an average of 15% in the first 3 months with Delivra.</p>
            <div className="flex justify-center gap-4">
              <Link href="/demo" className="bg-white text-[#0364a1] text-sm font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">Request Your Free Demo</Link>
              <Link href="/contact" className="border border-white/40 text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">Talk to Sales</Link>
            </div>
            <p className="text-xs text-blue-200 mt-4">No credit card required · 14-day free trial · Cancel anytime</p>
          </div>
        </section>
      </main>
      <MarketingFooter/>
    </>
  )
}
