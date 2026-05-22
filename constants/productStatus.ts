export const PRODUCT_STATUS = {
  draft: { label: 'Bản nháp', className: 'bg-gray-100 text-gray-700' },
  active: { label: 'Đang bán', className: 'bg-green-100 text-green-700' },
  'out-of-stock': { label: 'Hết hàng', className: 'bg-amber-100 text-amber-700' },
  hidden: { label: 'Đã ẩn', className: 'bg-slate-100 text-slate-700' },
} as const;

export const PRODUCT_STATUS_LABELS = Object.fromEntries(
  Object.entries(PRODUCT_STATUS).map(([key, value]) => [key, value.label]),
) as Record<keyof typeof PRODUCT_STATUS, string>;

export const FARMING_ACTIVITIES = {
  watering: { label: 'Tưới nước', className: 'bg-sky-100 text-sky-700' },
  fertilizing: { label: 'Bón phân', className: 'bg-green-100 text-green-700' },
  spraying: { label: 'Phun thuốc BVTV', className: 'bg-amber-100 text-amber-700' },
  pruning: { label: 'Cắt tỉa', className: 'bg-lime-100 text-lime-700' },
  harvesting: { label: 'Thu hoạch', className: 'bg-emerald-100 text-emerald-700' },
  inspection: { label: 'Kiểm tra sâu bệnh', className: 'bg-orange-100 text-orange-700' },
} as const;
