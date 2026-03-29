'use client';
import { REPORT_CARDS } from '@/data';

const REPORT_ICON = (
  <div className="w-12 h-12 bg-green-100 rounded-[10px] flex items-center justify-center flex-shrink-0">
    <svg className="w-[22px] h-[22px] fill-green-500" viewBox="0 0 24 24">
      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
    </svg>
  </div>
);

export default function ReportsView() {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      <div
        className="grid gap-px bg-gray-200"
        style={{ gridTemplateColumns: 'repeat(3, 1fr)', padding: '28px' }}
      >
        {REPORT_CARDS.map(({ name, desc }) => (
          <div
            key={name}
            className="bg-white hover:bg-green-50 p-7 cursor-pointer transition-colors flex flex-col gap-3"
            onClick={() => alert(`Opening report: ${name}\n(Connect your backend to load real data)`)}
          >
            {REPORT_ICON}
            <div className="text-base font-semibold text-gray-800">{name}</div>
            <div className="text-[13px] text-gray-400 leading-relaxed">{desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
