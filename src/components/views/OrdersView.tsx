'use client';
import { useState } from 'react';

const TABS = ['Current', 'Scheduled', 'Completed', 'Incomplete', 'History'] as const;

interface OrdersViewProps {
  onAddOrder: () => void;
}

export default function OrdersView({ onAddOrder }: OrdersViewProps) {
  const [activeTab, setActiveTab] = useState<string>('Current');

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-white">
      <div className="px-7 pt-5 bg-white">
        <div className="flex items-center mb-5 gap-3">
          <h1 className="text-[26px] font-bold text-gray-800 flex-1">Orders</h1>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2 w-56">
            <svg className="w-4 h-4 fill-gray-300 flex-shrink-0" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <input type="text" placeholder="Search" className="border-none bg-transparent outline-none text-[13px] text-gray-800 w-full" />
          </div>
          <button className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-[13px] font-medium cursor-pointer text-gray-700">
            <svg className="w-3.5 h-3.5 fill-gray-700" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>
            CSV upload
          </button>
          <button
            onClick={onAddOrder}
            className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 border-none rounded-lg px-4 py-2.5 text-[13px] font-semibold cursor-pointer text-white transition-colors"
          >
            + New order
          </button>
        </div>
        <div className="flex border-b border-gray-200 gap-0">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer bg-transparent whitespace-nowrap ${
                activeTab === tab ? 'text-green-500 border-green-500' : 'text-gray-400 border-transparent hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto flex-1">
        <table className="w-full border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-gray-50">
              {['Order No. ⇅', 'C. Name ⇅', 'Pick-up ⇅', 'Amount ⇅', 'Distance ⇅', 'Order placed ⇅', 'Req. Pickup Time ⇅', 'Req. Delivery Time ⇅', 'Ready for pick-up', 'Driver ⇅', 'Status ⇅', 'Tracking'].map((h) => (
                <th key={h} className="px-3.5 py-3 text-xs font-semibold text-gray-400 text-left border-b border-gray-200 whitespace-nowrap">
                  {h === 'Order No. ⇅' ? (
                    <span><input type="checkbox" className="mr-2 accent-green-500" />{h}</span>
                  ) : h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody />
        </table>
        {/* Empty state */}
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <div className="w-[72px] h-[72px] bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 fill-green-500" viewBox="0 0 24 24">
              <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
            </svg>
          </div>
          <div className="text-sm text-gray-400">You currently have no orders</div>
        </div>
      </div>
    </div>
  );
}
