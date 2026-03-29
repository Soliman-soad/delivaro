'use client';
import { useState } from 'react';
import { DRIVERS_DATA } from '@/data';
import { Driver, DriverStatus } from '@/types';
import Avatar from '@/components/ui/Avatar';

const STATUS_CONFIG: Record<DriverStatus, { label: string; className: string }> = {
  active:   { label: 'On Duty',  className: 'bg-green-100 text-green-700' },
  offduty:  { label: 'Off Duty', className: 'bg-gray-100 text-gray-500' },
  idle:     { label: 'Idle',     className: 'bg-gray-100 text-gray-500' },
  busy:     { label: 'On Duty',  className: 'bg-orange-50 text-orange-700' },
};

const VEHICLE_ICON: Record<string, string> = { car: '🚗', bike: '🚲', van: '🚐' };

interface DriversViewProps {
  onAddDriver: () => void;
}

function DriverRow({ driver }: { driver: Driver }) {
  const status = STATUS_CONFIG[driver.status];
  return (
    <tr className="group">
      <td className="px-6 py-3.5 border-b border-gray-200 bg-white group-hover:bg-gray-50 text-[13px] text-gray-800">
        <div className="flex items-center gap-2.5">
          <Avatar initials={driver.initials} color={driver.color} size="md" />
          <span className="font-medium">{driver.name}</span>
        </div>
      </td>
      <td className="px-6 py-3.5 border-b border-gray-200 bg-white group-hover:bg-gray-50">
        <div className="text-amber-500 font-semibold text-xs">
          {driver.rating === 'N/A' ? 'N/A' : `★ ${driver.rating}`}
        </div>
      </td>
      <td className="px-6 py-3.5 border-b border-gray-200 bg-white group-hover:bg-gray-50 text-[13px] text-gray-800">{driver.orders}</td>
      <td className="px-6 py-3.5 border-b border-gray-200 bg-white group-hover:bg-gray-50 text-[13px] text-gray-800">{driver.earning}</td>
      <td className="px-6 py-3.5 border-b border-gray-200 bg-white group-hover:bg-gray-50 text-base">{VEHICLE_ICON[driver.vehicle] ?? '🚗'}</td>
      <td className="px-6 py-3.5 border-b border-gray-200 bg-white group-hover:bg-gray-50">
        <span className={`px-2.5 py-0.5 rounded-xl text-[11px] font-semibold ${status.className}`}>{status.label}</span>
      </td>
      <td className="px-6 py-3.5 border-b border-gray-200 bg-white group-hover:bg-gray-50">
        <div className="w-7 h-7 rounded-md border border-gray-200 bg-white cursor-pointer flex items-center justify-center text-sm text-gray-400">⋯</div>
      </td>
    </tr>
  );
}

export default function DriversView({ onAddDriver }: DriversViewProps) {
  const [drivers, setDrivers] = useState<Driver[]>(DRIVERS_DATA);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'list' | 'payment'>('list');

  const filtered = drivers.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 bg-white border-b border-gray-200 flex items-center gap-3">
        <h1 className="text-[22px] font-bold text-gray-800 flex-1">Drivers</h1>
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 w-52">
          <svg className="w-3.5 h-3.5 fill-gray-400 flex-shrink-0" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-none bg-transparent outline-none text-[13px] text-gray-800 w-full"
          />
        </div>
        <button className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3.5 py-2 bg-white text-[13px] font-medium cursor-pointer text-gray-700">
          Get the app
        </button>
        <button
          onClick={onAddDriver}
          className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 border-none rounded-lg px-4 py-2 text-[13px] font-semibold cursor-pointer text-white transition-colors"
        >
          <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
          New Driver
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 bg-white px-6">
        {(['list', 'payment'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-[13px] font-medium border-b-2 transition-colors cursor-pointer bg-transparent ${
              activeTab === tab ? 'text-green-500 border-green-500' : 'text-gray-400 border-transparent hover:text-gray-700'
            }`}
          >
            {tab === 'list' ? 'Driver List' : 'Daily Payment'}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="flex-1 overflow-y-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              {['Name', 'Rating ↕', "Today's Orders ↕", 'Earning ↕', 'Vehicle', 'Status', ''].map((h) => (
                <th key={h} className="px-6 py-3 text-xs font-semibold text-gray-400 border-b border-gray-200 text-left whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((d) => (
              <DriverRow key={d.name} driver={d} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
