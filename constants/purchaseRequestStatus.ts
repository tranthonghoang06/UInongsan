export const PURCHASE_REQUEST_STATUS_LABELS: Record<string, string> = {
  new: 'Mới',
  'pending-response': 'Chờ phản hồi',
  negotiating: 'Đang thương lượng',
  accepted: 'Đã chấp nhận',
  rejected: 'Từ chối',
  cancelled: 'Đã hủy',
};

export const PURCHASE_REQUEST_STATUS = {
  new: { label: 'Mới', className: 'bg-sky-100 text-sky-700' },
  'pending-response': { label: 'Chờ phản hồi', className: 'bg-amber-100 text-amber-700' },
  negotiating: { label: 'Đang thương lượng', className: 'bg-orange-100 text-orange-700' },
  accepted: { label: 'Đã chấp nhận', className: 'bg-green-100 text-green-700' },
  rejected: { label: 'Từ chối', className: 'bg-red-100 text-red-700' },
  cancelled: { label: 'Đã hủy', className: 'bg-gray-100 text-gray-700' },
} as const;
