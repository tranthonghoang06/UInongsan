export type DeliveryStatus = 'assigned' | 'picked-up' | 'in-transit' | 'delivered' | 'failed' | 'returned';

export interface Delivery {
  id: string;
  orderId: string;
  driverName: string;
  driverPhone: string;
  pickupAddress: string;
  dropoffAddress: string;
  status: DeliveryStatus;
  estimatedArrival: string;
}
