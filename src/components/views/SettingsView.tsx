'use client';
import { useState } from 'react';
import { SETTINGS_NAV } from '@/data';

export default function SettingsView() {
  const [activeNav, setActiveNav] = useState('Business settings');
  const [businessType, setBusinessType] = useState<'merchant' | 'delivery'>('delivery');

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-60 border-r border-gray-200 bg-white py-5 overflow-y-auto flex-shrink-0">
        <div className="px-5 pb-4 text-xl font-bold text-gray-800">Settings</div>
        {SETTINGS_NAV.map(({ label, isNew }) => (
          <div
            key={label}
            onClick={() => setActiveNav(label)}
            className={`flex items-center gap-2.5 px-5 py-2.5 cursor-pointer text-[13px] font-medium transition-colors relative ${
              activeNav === label
                ? 'text-green-500 bg-green-50 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-green-500 before:rounded-r-sm'
                : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            {label}
            {isNew && (
              <span className="ml-auto bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-lg">
                New
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 px-10 py-8 overflow-y-auto bg-gray-50">
        <div className="text-2xl font-bold text-gray-800 mb-7">Business settings</div>

        {/* Business details */}
        <div className="bg-white border border-gray-200 rounded-xl mb-5 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200">
            <div className="text-base font-semibold text-gray-800">Business details</div>
            <div className="text-[13px] text-gray-400 mt-0.5">Set your business details</div>
          </div>
          {[
            { name: 'Business name', val: 'Emeco Industries, Inc' },
            { name: 'Business logo', val: '' },
          ].map(({ name, val }) => (
            <div key={name} className="flex items-center px-6 py-[18px] border-b border-gray-100 last:border-0">
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-800">{name}</div>
                {val && <div className="text-[13px] text-gray-400 mt-0.5">{val}</div>}
              </div>
              <div className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center cursor-pointer">
                <svg className="w-3.5 h-3.5 fill-gray-400" viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Business type */}
        <div className="bg-white border border-gray-200 rounded-xl mb-5 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200">
            <div className="text-base font-semibold text-gray-800">Business type details</div>
            <div className="text-[13px] text-gray-400 mt-0.5">Set your business type details</div>
          </div>
          <div className="px-6 py-[18px] flex flex-col items-start">
            <div className="text-sm font-medium text-gray-800 mb-1.5">Business type</div>
            <p className="text-[13px] text-gray-400 mb-3.5 leading-relaxed">
              If you are a delivery only business like Pizza shop where pick up is always from the same place,
              please choose the business type delivery only. Otherwise keep it pick up and delivery.
            </p>
            <div className="flex gap-3">
              {(['merchant', 'delivery'] as const).map((type) => (
                <div
                  key={type}
                  onClick={() => setBusinessType(type)}
                  className={`border-2 rounded-[10px] px-5 py-4 flex flex-col items-center gap-2 cursor-pointer transition-colors min-w-[100px] ${
                    businessType === type ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-500'
                  }`}
                >
                  <svg className="w-7 h-7 fill-green-500" viewBox="0 0 24 24">
                    {type === 'merchant' ? (
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
                    ) : (
                      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z" />
                    )}
                  </svg>
                  <span className="text-[13px] font-medium text-gray-800">
                    {type === 'merchant' ? 'Merchant' : 'Delivery company'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
