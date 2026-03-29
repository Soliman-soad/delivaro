'use client';
import { useEffect, useRef, useState } from 'react';

export default function MapView() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    pickup: true,
    dropoff: true,
    drivers: true,
    assigned: true,
    initials: false,
    orderId: false,
    customerName: false,
  });

  useEffect(() => {
    if (mapInstanceRef.current || !mapRef.current) return;
    import('leaflet').then((L) => {
      if (!mapRef.current || mapInstanceRef.current) return;
      const map = L.map(mapRef.current, { zoomControl: false, attributionControl: true }).setView([40.73, -74.02], 11);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
      mapInstanceRef.current = map;
      setTimeout(() => map.invalidateSize(), 200);
    });
    return () => {
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const STATS = [
    { num: '0', label: 'Active orders', red: false },
    { num: '0', label: 'Late orders', red: true },
    { num: '0', label: 'Active drivers', red: false },
  ];

  return (
    <div className="flex-1 flex flex-col relative">
      {/* Stats bar */}
      <div className="h-11 bg-white/95 backdrop-blur border-b border-gray-200 flex items-center px-4 gap-6 flex-shrink-0 relative z-10">
        {STATS.map(({ num, label, red }) => (
          <div key={label} className="flex items-center gap-2 text-[13px]">
            <span className={`font-bold text-[15px] ${red ? 'text-red-500' : 'text-gray-800'}`}>{num}</span>
            <span className="text-gray-400">{label}</span>
          </div>
        ))}
        <div className="flex items-center gap-1 text-[13px]">
          <span className="text-gray-400 font-semibold">N/A</span>
          <span className="text-gray-400">Avg. order to delivery time</span>
        </div>
        <div className="flex items-center gap-1 text-[13px]">
          <span className="text-gray-400 font-semibold">N/A</span>
          <span className="text-gray-400">On time delivery</span>
        </div>
        <button
          onClick={() => setFilterOpen((p) => !p)}
          className="ml-auto w-[34px] h-[34px] border border-gray-200 rounded-lg bg-white flex items-center justify-center cursor-pointer"
        >
          <svg className="w-[18px] h-[18px] fill-gray-400" viewBox="0 0 24 24">
            <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
          </svg>
        </button>
      </div>

      {/* Map container */}
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <div ref={mapRef} className="flex-1" />

      {/* Filter panel */}
      {filterOpen && (
        <div className="absolute top-[50px] right-0 w-[260px] bg-white border-l border-b border-gray-200 z-20 p-4 shadow-[−4px_4px_12px_rgba(0,0,0,.06)]">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5">Map pin filters</div>
          {[
            { key: 'pickup', label: 'Pickup locations' },
            { key: 'dropoff', label: 'Drop off locations' },
            { key: 'drivers', label: 'Drivers' },
            { key: 'assigned', label: 'Show assigned Orders' },
          ].map(({ key, label }) => (
            <div key={key} className="flex items-center gap-2.5 py-1.5 border-b border-gray-100">
              <label className="flex-1 text-[13px] text-gray-700">{label}</label>
              <input
                type="checkbox"
                className="w-[18px] h-[18px] accent-green-500 cursor-pointer"
                checked={filters[key as keyof typeof filters]}
                onChange={(e) => setFilters((p) => ({ ...p, [key]: e.target.checked }))}
              />
            </div>
          ))}
          <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-3 mb-2.5">Pin settings</div>
          {[
            { key: 'initials', label: 'Show pickup location initials' },
            { key: 'orderId', label: 'Show Order ID for Customers' },
            { key: 'customerName', label: 'Show Customers Name' },
          ].map(({ key, label }) => (
            <div key={key} className="flex items-center gap-2.5 py-1.5 border-b border-gray-100 last:border-0">
              <label className="flex-1 text-[13px] text-gray-700">{label}</label>
              <input
                type="checkbox"
                className="w-[18px] h-[18px] accent-green-500 cursor-pointer"
                checked={filters[key as keyof typeof filters]}
                onChange={(e) => setFilters((p) => ({ ...p, [key]: e.target.checked }))}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
