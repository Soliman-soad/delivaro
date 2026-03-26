import Link from 'next/link'
import MarketingNav from '@/components/marketing/MarketingNav'
import MarketingFooter from '@/components/marketing/MarketingFooter'

const integrations = [
  { name:'Shopify',      cat:'E-Commerce', desc:'Seamlessly sync your Shopify orders and inventory for automated fulfillment and real-time tracking.' },
  { name:'WooCommerce',  cat:'E-Commerce', desc:'Connect your WordPress store to Delivra\'s powerful logistics engine with our native plugin.' },
  { name:'Magento 2',    cat:'E-Commerce', desc:'Enterprise-grade integration for high-volume retailers using Adobe Commerce platforms.' },
  { name:'Amazon SWA',   cat:'Carrier',    desc:'Leverage Amazon\'s shipping network with pre-negotiated rates and automated label generation.' },
  { name:'FedEx',        cat:'Carrier',    desc:'Global delivery reach with real-time status updates and international customs documentation.' },
  { name:'Stripe',       cat:'Payments',   desc:'Automatically reconcile shipping costs and generate customer invoices through your Stripe account.' },
  { name:'Klaviyo',      cat:'Marketing',  desc:'Trigger post-purchase email flows based on delivery events like \'Out for Delivery\' or \'Delivered\'.' },
  { name:'Zendesk',      cat:'Support',    desc:'Empower your support team with live shipment data directly inside the Zendesk ticket view.' },
]

const catColor: Record<string,string> = {
  'E-Commerce':'bg-blue-50 text-blue-700',
  'Carrier':   'bg-green-50 text-green-700',
  'Payments':  'bg-purple-50 text-purple-700',
  'Marketing': 'bg-amber-50 text-amber-700',
  'Support':   'bg-gray-100 text-gray-600',
}

const resources = [
  { icon:'📄', title:'Documentation', desc:'Technical guides, API references, and platform walkthroughs for your', link:'Go to Docs' },
  { icon:'💬', title:'FAQ',           desc:'Quick answers to the most common questions about billing,',          link:'View FAQs' },
  { icon:'📝', title:'Blog',          desc:'Logistics trends, company news, and e-commerce growth',              link:'Read Blog' },
  { icon:'🎧', title:'Help Center',   desc:'24/7 support resources and direct contact options for our success',  link:'Get Support' },
]

export default function IntegrationsPage() {
  return (
    <>
      <MarketingNav/>
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              Connect Your Entire <span className="text-[#0e9de8]">E-commerce Stack</span>
            </h1>
            <p className="text-gray-500 mb-8">Delivra fits perfectly into your existing workflow. Seamlessly integrate with the tools you already love and use every day.</p>
            <div className="flex justify-center gap-4">
              <button className="bg-[#0e9de8] text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-[#027dc6] transition-colors">Talk to an Integration Expert</button>
              <button className="border border-gray-200 text-gray-700 text-sm font-medium px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">Browse All Features</button>
            </div>
          </div>
        </section>

        {/* Native Integrations */}
        <section className="pb-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-[#0e9de8] uppercase tracking-widest mb-3">Ecosystem</p>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Native Integrations</h2>
              <p className="text-gray-500">One-click connections for the world's most popular platforms and carriers.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {integrations.map(int => (
                <div key={int.name} className="bg-white rounded-xl border border-gray-200 p-5 hover:border-[#0e9de8]/40 hover:shadow-sm transition-all group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-lg font-bold text-gray-600">{int.name[0]}</div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${catColor[int.cat]}`}>{int.cat}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{int.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3">{int.desc}</p>
                  <a href="#" className="text-xs text-[#0e9de8] font-medium group-hover:underline">View Setup Guide →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-10 flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="max-w-lg">
                <p className="text-xs font-bold text-[#0e9de8] uppercase tracking-widest mb-3">Developers & APIs</p>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Building something custom?</h2>
                <p className="text-gray-500 mb-6">Our robust GraphQL API and webhooks allow you to build deep, custom integrations for your unique business needs. Access shipping rates, tracking, and label generation programmatically.</p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <button className="text-sm border border-gray-200 px-5 py-2.5 rounded-xl text-gray-700 hover:bg-gray-50 font-medium">View API Docs</button>
                <button className="text-sm bg-gray-900 text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 font-medium">Developer Sandbox</button>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Hub */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-[#0e9de8] uppercase tracking-widest mb-3">Knowledge</p>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Resource Hub</h2>
              <p className="text-gray-500">Everything you need to master your logistics and grow your business with Delivra.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {resources.map(r => (
                <div key={r.title} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-2xl mx-auto mb-4">{r.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{r.title}</h3>
                  <p className="text-xs text-gray-400 mb-3">{r.desc}</p>
                  <a href="#" className="text-xs text-[#0e9de8] font-medium hover:underline">{r.link} ↗</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0e9de8]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl mx-auto mb-4">⚡</div>
            <h2 className="text-2xl font-extrabold text-white mb-2">Can't find what you're looking for?</h2>
            <p className="text-blue-100 mb-6">Our experts are ready to help you optimize your delivery chain. Get personalized support today.</p>
            <div className="flex justify-center gap-3">
              <button className="bg-white text-[#0364a1] text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50">Contact Support</button>
              <button className="border border-white/40 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/10">Talk to Sales</button>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter/>
    </>
  )
}
