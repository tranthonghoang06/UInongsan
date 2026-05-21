import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import PageHeader from '@/app/components/layout/PageHeader';
import { Mail, Phone, UserRound } from 'lucide-react';

export default function CustomerProfilePage() {
  return (
    <main className="space-y-4 pb-8">
      <PageHeader eyebrow="Hồ sơ" title="Thông tin cá nhân" description="Cập nhật thông tin liên hệ phục vụ mua hàng và giao nhận." />
      <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Họ và tên" defaultValue="Tạ Thị Khách Hàng" icon={<UserRound className="h-4 w-4" />} />
          <Input label="Số điện thoại" defaultValue="0900111222" icon={<Phone className="h-4 w-4" />} />
          <Input label="Email" type="email" defaultValue="customer@example.com" icon={<Mail className="h-4 w-4" />} />
          <Input label="Khu vực" defaultValue="Hà Nội" />
        </div>
        <Button variant="primary" size="md" className="mt-5 w-full sm:w-auto">Lưu hồ sơ</Button>
      </section>
    </main>
  );
}
