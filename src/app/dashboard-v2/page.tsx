'use client';
import { useState } from 'react';
import { NavView, Driver } from '@/types';

import DispatchView from '@/components/views/DispatchView';
import DriversView from '@/components/views/DriversView';
import OrdersView from '@/components/views/OrdersView';
import ReportsView from '@/components/views/ReportsView';
import SettingsView from '@/components/views/SettingsView';
import NewOrderModal from '@/components/modals/NewOrderModal';
import AddDriverModal from '@/components/modals/AddDriverModal';

// Lazy-load map to avoid SSR issues with Leaflet
import dynamic from 'next/dynamic';
import TopNav from '@/components/dashboard/TopNav';
const MapView = dynamic(() => import('@/components/views/MapView'), { ssr: false });

export default function ShipdayPage() {
  const [activeView, setActiveView] = useState<NavView>('dispatch');
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [driverModalOpen, setDriverModalOpen] = useState(false);

  const handleSaveDriver = (driver: Driver) => {
    // In a real app, dispatch to global state / API
    console.log('New driver added:', driver);
  };

  const handleSaveOrder = ({ orderId }: { orderId: string }) => {
    console.log('New order created:', orderId);
  };

  return (
    <div className="font-inter bg-gray-50 flex flex-col h-screen overflow-hidden text-sm text-gray-800">
      <TopNav activeView={activeView} onViewChange={setActiveView} />

      <main className="flex flex-1 overflow-hidden">
        {activeView === 'dispatch' && (
          <DispatchView onAddOrder={() => setOrderModalOpen(true)} />
        )}
        {activeView === 'orders' && (
          <OrdersView onAddOrder={() => setOrderModalOpen(true)} />
        )}
        {activeView === 'drivers' && (
          <DriversView onAddDriver={() => setDriverModalOpen(true)} />
        )}
        {activeView === 'map' && <MapView />}
        {activeView === 'reports' && <ReportsView />}
        {activeView === 'reviews' && <ReviewsPlaceholder />}
        {activeView === 'integrations' && <IntegrationsPlaceholder />}
        {activeView === 'settings' && <SettingsView />}
      </main>

      <NewOrderModal
        open={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        onSubmit={handleSaveOrder}
      />
      <AddDriverModal
        open={driverModalOpen}
        onClose={() => setDriverModalOpen(false)}
        onSave={handleSaveDriver}
      />
    </div>
  );
}

function ReviewsPlaceholder() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-3 text-gray-400">
      <svg className="w-14 h-14 fill-gray-200" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      <div className="text-[15px] font-medium">Reviews</div>
      <div className="text-[13px] text-gray-300">No reviews yet</div>
    </div>
  );
}

function IntegrationsPlaceholder() {
  return (
    <div className="flex-1 flex items-center justify-center text-gray-400 text-[15px] font-medium">
      Integrations page
    </div>
  );
}
