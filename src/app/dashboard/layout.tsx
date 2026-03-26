import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import DashboardTopbar from '@/components/dashboard/DashboardTopbar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <DashboardSidebar/>
      <div className="flex-1 flex flex-col min-w-0 overflow-auto">
        <DashboardTopbar/>
        <main className="flex-1 p-6">{children}</main>
        <footer className="px-6 py-3 border-t border-gray-100 bg-white">
          <div className="flex justify-between text-xs text-gray-400">
            <span>© 2024 Delivra. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-600">Contact Sales</a>
              <a href="#" className="hover:text-gray-600">Terms</a>
              <a href="#" className="hover:text-gray-600">Privacy</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
