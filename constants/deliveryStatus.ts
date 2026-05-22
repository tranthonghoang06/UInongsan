export const DELIVERY_STATUS_LABELS: Record<string, string> = {
  assigned: 'Đã phân công',
  'picked-up': 'Đã lấy hàng',
  'in-transit': 'Đang vận chuyển',
  delivered: 'Đã giao',
  failed: 'Giao thất bại',
  returned: 'Hoàn trả',
};

export const DELIVERY_STATUS = {
  assigned: { label: 'Đã phân công', className: 'bg-blue-100 text-blue-700' },
  'picked-up': { label: 'Đã lấy hàng', className: 'bg-lime-100 text-lime-700' },
  'in-transit': { label: 'Đang vận chuyển', className: 'bg-sky-100 text-sky-700' },
  delivered: { label: 'Đã giao', className: 'bg-green-100 text-green-700' },
  failed: { label: 'Giao thất bại', className: 'bg-red-100 text-red-700' },
  returned: { label: 'Hoàn trả', className: 'bg-amber-100 text-amber-700' },
} as const;
