import DemoRoutePage from '@/app/components/business/DemoRoutePage';
import { notifications } from '@/app/data/mockData';

export default function CustomerNotificationsPage() {
  return (
    <DemoRoutePage
      title="Thông báo khách hàng"
      description="Các cập nhật về đơn hàng, thanh toán, khuyến mãi và truy xuất nguồn gốc."
      records={notifications.slice(0, 4).map((item) => ({
        Mã: item.id,
        'Tiêu đề': item.title,
        'Ngày': item.createdAt,
        'Trạng thái': item.read ? 'Đã đọc' : 'Mới',
      }))}
    />
  );
}
