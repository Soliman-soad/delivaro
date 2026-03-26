import Link from 'next/link'

export default function MarketingFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/home" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#0e9de8] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="white" strokeWidth={2.5}>
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-bold text-gray-900">Delivra</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">Optimizing last-mile delivery for modern e-commerce retailers worldwide.</p>
            <div className="flex gap-3 mt-4">
              {['twitter','linkedin','github'].map(s => (
                <div key={s} className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center text-xs text-gray-500 cursor-pointer hover:bg-gray-300 transition-colors">{s[0].toUpperCase()}</div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-4">Product</p>
            {['Features','Integrations','Pricing','Analytics'].map(l => (
              <Link key={l} href="#" className="block text-sm text-gray-500 hover:text-gray-900 mb-2 transition-colors">{l}</Link>
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-4">Support</p>
            {['Documentation','Help Center','Contact Sales','Request Demo'].map(l => (
              <Link key={l} href="#" className="block text-sm text-gray-500 hover:text-gray-900 mb-2 transition-colors">{l}</Link>
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-4">Join our newsletter</p>
            <p className="text-sm text-gray-500 mb-3">Latest news and delivery insights.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-[#0e9de8]"/>
              <button className="text-sm bg-[#0e9de8] text-white px-3 py-2 rounded-lg hover:bg-[#027dc6] transition-colors font-medium">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2024 Delivra Inc. Professional logistics for every merchant.</p>
          <div className="flex gap-6">
            {['Privacy Policy','Terms of Service','Cookie Settings'].map(l => (
              <Link key={l} href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
