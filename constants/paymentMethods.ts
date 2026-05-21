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
