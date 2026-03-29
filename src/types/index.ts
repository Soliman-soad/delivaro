export type OrderStatus =
  | 'pending'
  | 'assigned'
  | 'pickup'
  | 'delivering'
  | 'delivered'
  | 'cancelled';

export type DriverStatus = 'active' | 'offduty' | 'idle' | 'busy';
export type VehicleType = 'car' | 'bike' | 'van';
export type NavView =
  | 'dispatch'
  | 'orders'
  | 'drivers'
  | 'map'
  | 'reviews'
  | 'reports'
  | 'integrations'
  | 'settings';

export interface Order {
  id: string;
  customerName: string;
  status: OrderStatus;
}

export interface AssignedDriver {
  name: string;
  initials: string;
  color: string;
  orders: Order[];
}

export interface Driver {
  name: string;
  initials: string;
  color: string;
  rating: string;
  orders: number;
  earning: string;
  vehicle: VehicleType;
  status: DriverStatus;
}

export interface NewOrderCard {
  id: string;
  customer: string;
  address: string;
  total: string;
  time: string;
}
