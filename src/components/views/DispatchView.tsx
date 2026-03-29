'use client';
import { useState } from 'react';
import { ASSIGNED_DRIVERS } from '@/data';
import { AssignedDriver, NewOrderCard } from '@/types';
import StatusBadge from '@/components/ui/StatusBadge';
import Avatar from '@/components/ui/Avatar';

interface DispatchViewProps {
  onAddOrder: () => void;
}

const EMPTY_ICON = (
  <svg className="w-[90px] h-[90px] opacity-25" viewBox="0 0 100 100" fill="none">
    <rect x="20" y="15" width="40" height="50" rx="4" fill="#e5e7eb" transform="rotate(-8 20 15)" />
    <rect x="25" y="20" width="40" height="50" rx="4" fill="#d1d5db" transform="rotate(-3 25 20)" />
    <rect x="30" y="25" width="40" height="50" rx="4" fill="#9ca3af" />
    <line x1="38" y1="40" x2="62" y2="40" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="38" y1="48" x2="55" y2="48" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

function DriverSection({ driver }: { driver: AssignedDriver }) {
  const [selected, setSelected] = useState(true);
  return (
    <div className="border-b border-gray-200">
      <div
        onClick={() => setSelected((p) => !p)}
        className={`flex items-center gap-2.5 px-4 py-2.5 cursor-pointer transition-colors border-l-[3px] ${
          selected ? 'bg-green-50 border-green-500' : 'border-transparent hover:bg-gray-50'
        }`}
      >
        <Avatar initials={driver.initials} color={driver.color} size="sm" />
        <div>
          <div className="text-[13px] font-medium text-gray-800">{driver.name}</div>
          <div className="text-[11px] text-gray-400">{driver.orders.length} orders</div>
        </div>
      </div>
      {selected && (
        <div className="pl-[58px] pr-4 pb-2">
          {driver.orders.map((order) => (
            <div
              key={order.id}
              className="bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-2 mb-1.5 cursor-pointer hover:border-green-500 hover:bg-green-50 relative transition-colors"
            >
              <div className="text-xs font-bold text-gray-800">{order.id}</div>
              <div className="text-xs text-gray-400">{order.customerName}</div>
              <div className="absolute top-2 right-2">
                <StatusBadge status={order.status} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function NewOrderCardComponent({ card, onDispatch }: { card: NewOrderCard; onDispatch: () => void }) {
  return (
    <div className="bg-white border border-gray-200 rounded-[10px] px-4 py-3.5 mx-4 mt-3 cursor-pointer hover:border-green-500 hover:shadow-[0_2px_8px_rgba(34,197,94,.12)] transition-all relative">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[13px] font-bold text-gray-800">{card.id}</span>
        <span className="text-[11px] text-gray-400 ml-auto">{card.time}</span>
      </div>
      <div className="text-[13px] font-medium text-gray-800 mb-1">{card.customer}</div>
      <div className="text-xs text-gray-400 mb-2">{card.address}</div>
      <div className="flex items-center gap-2 justify-end">
        <span className="text-[13px] font-bold text-gray-800">{card.total}</span>
        <div className="w-7 h-7 rounded-md border border-gray-200 bg-white flex items-center justify-center text-base text-gray-400 cursor-pointer">⋯</div>
        <button
          onClick={onDispatch}
          className="bg-green-500 hover:bg-green-600 text-white border-none rounded-md px-3 py-1.5 text-xs font-semibold cursor-pointer transition-colors"
        >
          Dispatch →
        </button>
      </div>
    </div>
  );
}

export default function DispatchView({ onAddOrder }: DispatchViewProps) {
  const [newOrders, setNewOrders] = useState<NewOrderCard[]>([]);

  const handleAddOrder = () => onAddOrder();

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Left: Assigned by driver */}
      <div className="w-[290px] bg-white border-r border-gray-200 flex flex-col flex-shrink-0 overflow-hidden">
        <div className="px-4 py-3.5 border-b border-gray-200 text-[13px] font-semibold text-gray-800 flex items-center gap-2 cursor-pointer">
          <svg className="w-3.5 h-3.5 fill-gray-400" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
          Assigned orders by driver
        </div>
        <div className="overflow-y-auto flex-1">
          {ASSIGNED_DRIVERS.map((d) => (
            <DriverSection key={d.name} driver={d} />
          ))}
        </div>
      </div>

      {/* Right: New Orders */}
      <div className="flex-1 bg-gray-50 flex flex-col overflow-hidden">
        <div className="px-5 py-3.5 text-[13px] font-semibold text-gray-800 border-b border-gray-200 bg-white">
          New Orders
        </div>

        {newOrders.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3">
            {EMPTY_ICON}
            <div className="text-sm text-gray-300">There is no order to dispatch</div>
            <button
              onClick={handleAddOrder}
              className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 border-none text-white text-2xl cursor-pointer flex items-center justify-center shadow-[0_2px_8px_rgba(34,197,94,.4)] transition-all hover:scale-105"
            >
              +
            </button>
          </div>
        ) : (
          <div className="flex-1 flex flex-col overflow-y-auto">
            {newOrders.map((c) => (
              <NewOrderCardComponent
                key={c.id}
                card={c}
                onDispatch={() => setNewOrders((p) => p.filter((o) => o.id !== c.id))}
              />
            ))}
            <div className="flex flex-col items-center justify-center gap-3 py-8">
              <div className="text-sm text-gray-300">Add more orders</div>
              <button
                onClick={handleAddOrder}
                className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 border-none text-white text-2xl cursor-pointer flex items-center justify-center shadow-[0_2px_8px_rgba(34,197,94,.4)] transition-all hover:scale-105"
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
