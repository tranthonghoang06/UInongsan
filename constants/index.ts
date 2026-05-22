export * from './roles';
export * from './routes';
export * from './orderStatus';
export * from './deliveryStatus';
export * from './purchaseRequestStatus';
export * from './cropLotStatus';
export * from './paymentMethods';
export * from './productStatus';

import { CROP_LOT_STATUS_LABELS } from './cropLotStatus';
import { DELIVERY_STATUS_LABELS } from './deliveryStatus';
import { ORDER_STATUS_LABELS } from './orderStatus';
import { PAYMENT_STATUS_LABELS } from './paymentMethods';
import { PRODUCT_STATUS_LABELS } from './productStatus';
import { PURCHASE_REQUEST_STATUS_LABELS } from './purchaseRequestStatus';

export const STATUS_LABELS: Record<string, string> = {
  ...ORDER_STATUS_LABELS,
  ...DELIVERY_STATUS_LABELS,
  ...PURCHASE_REQUEST_STATUS_LABELS,
  ...CROP_LOT_STATUS_LABELS,
  ...PAYMENT_STATUS_LABELS,
  ...PRODUCT_STATUS_LABELS,
  active: 'Đang hoạt động',
  inactive: 'Tạm khóa',
  open: 'Mới mở',
  reviewing: 'Đang xử lý',
  resolved: 'Đã xử lý',
  rejected: 'Từ chối',
};
