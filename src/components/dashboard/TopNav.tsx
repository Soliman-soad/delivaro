'use client';
import { useState } from 'react';
import Avatar from '@/components/ui/Avatar';
import { NavView } from '@/types';

const NAV_LINKS: { label: string; view: NavView }[] = [
  { label: 'Dispatch', view: 'dispatch' },
  { label: 'Orders', view: 'orders' },
  { label: 'Drivers', view: 'drivers' },
  { label: 'Map', view: 'map' },
  { label: 'Reviews', view: 'reviews' },
  { label: 'Reports', view: 'reports' },
  { label: 'Integrations', view: 'integrations' },
];

interface TopNavProps {
  activeView: NavView;
  onViewChange: (view: NavView) => void;
}

export default function TopNav({ activeView, onViewChange }: TopNavProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="h-14 bg-white border-b border-gray-200 flex items-center px-5 gap-0 flex-shrink-0 relative z-[100]">
      {/* Brand */}
      <div className="flex items-center gap-2.5 mr-8 cursor-pointer">
        <div className="w-7 h-7 border-2 border-gray-200 rounded-md flex items-center justify-center text-base text-gray-400">+</div>
        <div>
          <div className="text-[13px] font-semibold text-gray-800 leading-tight">Emeco Industries, Inc</div>
          <div className="text-[11px] text-gray-400 leading-tight">Powered by Shipday</div>
        </div>
      </div>

      {/* Nav links */}
      <div className="flex items-center flex-1">
        {NAV_LINKS.map(({ label, view }) => (
          <button
            key={view}
            onClick={() => onViewChange(view)}
            className={`px-4 h-14 flex items-center text-sm font-medium border-b-2 transition-colors ${
              activeView === view
                ? 'text-green-500 border-green-500'
                : 'text-gray-400 border-transparent hover:text-gray-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2 ml-auto">
        <button className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-50 border-none bg-transparent">
          <svg className="w-5 h-5 fill-gray-400" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
        </button>
        <button className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-50 border-none bg-transparent">
          <svg className="w-5 h-5 fill-gray-400" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
          </svg>
        </button>
        <button className="bg-amber-500 text-white border-none rounded-lg px-4 py-2 text-[13px] font-bold cursor-pointer">
          Upgrade
        </button>

        {/* User avatar + dropdown */}
        <div className="relative">
          <div onClick={() => setDropdownOpen((p) => !p)}>
            <Avatar initials="A" color="#22c55e" size="md" className="cursor-pointer" />
          </div>
          {dropdownOpen && (
            <div className="absolute top-10 right-0 w-60 bg-white border border-gray-200 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,.1)] z-[150] overflow-hidden">
              <div className="p-3.5 border-b border-gray-100 flex items-center gap-2.5">
                <div className="relative">
                  <Avatar initials="A" color="#22c55e" size="md" />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-gray-800">Ayash Hossain Chowd...</div>
                  <div className="text-[11px] text-gray-400">Emeco Industries, Inc</div>
                </div>
              </div>
              {[
                'My Account',
                'Settings',
                'Online Order Forms',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 px-4 py-3 text-[13px] text-gray-700 cursor-pointer hover:bg-gray-50 border-b border-gray-50"
                  onClick={() => {
                    if (item === 'Settings') onViewChange('settings');
                    setDropdownOpen(false);
                  }}
                >
                  {item}
                </div>
              ))}
              <div className="flex items-center gap-2.5 px-4 py-3 text-[13px] text-red-500 cursor-pointer hover:bg-gray-50">
                Log Out
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Close dropdown when clicking outside */}
      {dropdownOpen && (
        <div className="fixed inset-0 z-[140]" onClick={() => setDropdownOpen(false)} />
      )}
    </nav>
  );
}
