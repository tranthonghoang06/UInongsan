export const CROP_LOT_STATUS_LABELS: Record<string, string> = {
  growing: 'Đang phát triển',
  'ready-harvest': 'Sắp thu hoạch',
  harvested: 'Đã thu hoạch',
  good: 'Tốt',
  warning: 'Cần kiểm tra',
  critical: 'Nguy hiểm',
};

export const CROP_LOT_STATUS = {
  growing: { label: 'Đang phát triển', className: 'bg-green-100 text-green-700' },
  'ready-harvest': { label: 'Sắp thu hoạch', className: 'bg-amber-100 text-amber-700' },
  harvested: { label: 'Đã thu hoạch', className: 'bg-emerald-100 text-emerald-700' },
  good: { label: 'Tốt', className: 'bg-green-100 text-green-700' },
  warning: { label: 'Cần kiểm tra', className: 'bg-orange-100 text-orange-700' },
  critical: { label: 'Nguy hiểm', className: 'bg-red-100 text-red-700' },
} as const;
