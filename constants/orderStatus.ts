export const ORDER_STATUS_LABELS: Record<string, string> = {
  'pending-confirmation': 'Chờ xác nhận',
  confirmed: 'Đã xác nhận',
  'pending-payment': 'Chờ thanh toán',
  preparing: 'Đang chuẩn bị',
  delivering: 'Đang giao',
  delivered: 'Đã giao',
  completed: 'Hoàn tất',
  cancelled: 'Đã hủy',
};

export const ORDER_STATUS = {
  'pending-confirmation': { label: 'Chờ xác nhận', className: 'bg-amber-100 text-amber-700' },
  confirmed: { label: 'Đã xác nhận', className: 'bg-blue-100 text-blue-700' },
  'pending-payment': { label: 'Chờ thanh toán', className: 'bg-orange-100 text-orange-700' },
  preparing: { label: 'Đang chuẩn bị', className: 'bg-lime-100 text-lime-700' },
  delivering: { label: 'Đang giao', className: 'bg-sky-100 text-sky-700' },
  delivered: { label: 'Đã giao', className: 'bg-emerald-100 text-emerald-700' },
  completed: { label: 'Hoàn tất', className: 'bg-green-100 text-green-700' },
  cancelled: { label: 'Đã hủy', className: 'bg-red-100 text-red-700' },
} as const;
