export const PAYMENT_METHOD_LABELS: Record<string, string> = {
  cod: 'Thanh toán khi nhận hàng',
  'bank-transfer': 'Chuyển khoản',
  wallet: 'Ví điện tử',
  card: 'Thẻ ngân hàng',
};

export const PAYMENT_STATUS_LABELS: Record<string, string> = {
  unpaid: 'Chưa thanh toán',
  paid: 'Đã thanh toán',
  refunded: 'Đã hoàn tiền',
  failed: 'Thất bại',
};

export const PAYMENT_METHODS = {
  cod: { label: 'Thanh toán khi nhận hàng', className: 'bg-lime-100 text-lime-700' },
  'bank-transfer': { label: 'Chuyển khoản', className: 'bg-blue-100 text-blue-700' },
  wallet: { label: 'Ví điện tử', className: 'bg-purple-100 text-purple-700' },
  card: { label: 'Thẻ ngân hàng', className: 'bg-sky-100 text-sky-700' },
} as const;

export const PAYMENT_STATUS = {
  unpaid: { label: 'Chưa thanh toán', className: 'bg-amber-100 text-amber-700' },
  paid: { label: 'Đã thanh toán', className: 'bg-green-100 text-green-700' },
  refunded: { label: 'Đã hoàn tiền', className: 'bg-slate-100 text-slate-700' },
  failed: { label: 'Thất bại', className: 'bg-red-100 text-red-700' },
} as const;
