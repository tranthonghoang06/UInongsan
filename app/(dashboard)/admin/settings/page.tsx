import PageHeader from '@/app/components/layout/PageHeader';
import FormField from '@/app/components/ui/FormField';
import Button from '@/app/components/ui/Button';

export default function AdminSettingsPage() {
  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader eyebrow="Cấu hình" title="Thiết lập hệ thống" description="Cấu hình thông tin hiển thị và chính sách vận hành cơ bản." />
      <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField label="Tên hệ thống" placeholder="PIONE GROUP" />
          <FormField label="Hotline" placeholder="1900 1234" />
          <FormField type="select" label="Trạng thái đăng ký" options={[{ value: 'open', label: 'Mở đăng ký' }, { value: 'closed', label: 'Tạm khóa' }]} />
          <FormField label="Email hỗ trợ" placeholder="support@pione.vn" />
        </div>
        <Button variant="primary" size="md" className="mt-5 w-full sm:w-auto">Lưu cấu hình</Button>
      </section>
    </div>
  );
}
