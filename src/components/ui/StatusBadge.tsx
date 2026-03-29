'use client';
import { OrderStatus } from '@/types';

const STATUS_CONFIG: Record<OrderStatus, { label: string; className: string }> = {
  pending:    { label: 'Pending',    className: 'bg-orange-50 text-orange-700' },
  assigned:   { label: 'Assigned',   className: 'bg-blue-50 text-blue-700' },
  pickup:     { label: 'Pickup',     className: 'bg-yellow-50 text-yellow-800' },
  delivering: { label: 'Delivering', className: 'bg-green-100 text-green-700' },
  delivered:  { label: 'Delivered',  className: 'bg-green-50 text-green-800' },
  cancelled:  { label: 'Cancelled',  className: 'bg-red-50 text-red-800' },
};

interface StatusBadgeProps {
  status: OrderStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${cfg.className}`}>
      {cfg.label}
    </span>
  );
}
