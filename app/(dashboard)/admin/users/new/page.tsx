import MobileFormPage from '@/app/(dashboard)/_components/MobileFormPage';

export default function NewAdminUserPage() {
  return (
    <MobileFormPage
      title="Thêm người dùng"
      description="Tạo tài khoản mới và phân quyền truy cập hệ thống."
      backHref="/admin/users"
      submitLabel="Tạo tài khoản"
      fields={[
        { type: 'input', label: 'Họ và tên', placeholder: 'Nhập tên người dùng' },
        { type: 'input', label: 'Email', placeholder: 'name@example.com', inputType: 'email' },
        { type: 'input', label: 'Số điện thoại', placeholder: '090...' },
        {
          type: 'select',
          label: 'Vai trò',
          options: [
            { value: 'farmer', label: 'Nhà nông' },
            { value: 'trader', label: 'Thương lái' },
            { value: 'seller', label: 'Người bán' },
            { value: 'delivery', label: 'Giao hàng' },
            { value: 'admin', label: 'Quản trị' },
          ],
        },
        {
          type: 'select',
          label: 'Trạng thái',
          options: [
            { value: 'active', label: 'Hoạt động' },
            { value: 'pending', label: 'Chờ xác minh' },
            { value: 'locked', label: 'Tạm khóa' },
          ],
        },
        { type: 'textarea', label: 'Ghi chú nội bộ', placeholder: 'Thông tin xác minh hoặc quyền hạn đặc biệt...' },
      ]}
    />
  );
}
