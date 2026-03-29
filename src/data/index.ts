import { AssignedDriver, Driver, NewOrderCard } from '@/types';

export const ASSIGNED_DRIVERS: AssignedDriver[] = [
  {
    name: 'Emeco I.',
    initials: 'EI',
    color: '#22c55e',
    orders: [
      { id: '#1041', customerName: 'Michael Chen', status: 'pickup' },
      { id: '#1042', customerName: 'Emma Johnson', status: 'delivering' },
    ],
  },
];

export const DRIVERS_DATA: Driver[] = [
  { name: 'Emeco Industries, Inc', initials: 'EI', color: '#6b7280', rating: 'N/A', orders: 0, earning: '$0', vehicle: 'van', status: 'offduty' },
  { name: 'Alex Martinez', initials: 'AM', color: '#22c55e', rating: '4.8', orders: 3, earning: '$48', vehicle: 'car', status: 'active' },
  { name: 'Sara Kim', initials: 'SK', color: '#8b5cf6', rating: '4.6', orders: 2, earning: '$32', vehicle: 'bike', status: 'active' },
  { name: 'Tom Brooks', initials: 'TB', color: '#3b82f6', rating: '4.9', orders: 1, earning: '$16', vehicle: 'car', status: 'idle' },
  { name: 'Mia Rodriguez', initials: 'MR', color: '#f59e0b', rating: '4.7', orders: 2, earning: '$36', vehicle: 'car', status: 'busy' },
];

export const REPORT_CARDS = [
  { name: 'Sales', desc: 'Key sales metrics revealing customer consumption patterns and preferences.' },
  { name: 'Drivers', desc: 'Driver hours, payment and performance analysis for operational efficiency.' },
  { name: 'Performance', desc: 'Key operational metrics revealing delivery efficiency.' },
  { name: 'Extended', desc: 'Comprehensive overview providing detailed insights into all order-related metrics.' },
  { name: 'Analytics', desc: 'Time-based performance with charts for comprehensive insights into trends.' },
  { name: 'Heatmap', desc: 'Spatial order distribution on a map for quick trend visualization.' },
  { name: 'Connect', desc: 'Insights into connect delivery operations and essential key metrics.' },
  { name: 'Third party delivery services', desc: 'Insights into third-party delivery operations and essential key metrics.' },
  { name: 'Refund', desc: 'Insights into refund request and other associated information.' },
  { name: 'Customers', desc: 'Insights into the customers, their order counts, spendings, and more.' },
];

export const SETTINGS_NAV = [
  { label: 'Business settings', isNew: false },
  { label: 'Brand customization', isNew: false },
  { label: 'Tracking Page Promotions', isNew: true },
  { label: 'Dispatch settings', isNew: false },
  { label: 'Driver settings', isNew: false },
  { label: 'Customer notification', isNew: false },
  { label: 'Route planning', isNew: false },
  { label: 'Shipday connect', isNew: true },
  { label: 'Users', isNew: false },
  { label: 'Location', isNew: false },
  { label: 'Shipday AgentFlow', isNew: true },
];
