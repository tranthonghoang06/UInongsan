import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import PageHeader from '@/app/components/layout/PageHeader';
import Badge from '@/app/components/ui/Badge';
import { mockCustomerAddresses } from '@/app/data/mockData';
import { MapPin, Phone, UserRound } from 'lucide-react';
export default function CustomerAddressesPage() {
  return (
    <main className="space-y-4 pb-8">
      <PageHeader eyebrow="Giao hàng" title="Địa chỉ của tôi" description="Quản lý địa chỉ giao hàng mặc định và địa chỉ phụ." />
      <section className="grid gap-3 lg:grid-cols-2">
        {mockCustomerAddresses.map((address) => (
          <article key={address.id} className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-bold text-[#163B24]">{address.receiverName}</p>
                <p className="mt-1 flex gap-2 text-sm text-gray-600"><Phone className="h-4 w-4 text-[#16A34A]" /> {address.phone}</p>
                <p className="mt-1 flex gap-2 text-sm text-gray-600"><MapPin className="h-4 w-4 text-[#16A34A]" /> {address.address}</p>
              </div>
              {address.isDefault && <Badge variant="success" size="sm">Mặc định</Badge>}
            </div>
          </article>
        ))}
      </section>
      <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
        <h2 className="mb-4 font-bold text-[#163B24]">Thêm địa chỉ mới</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Người nhận" icon={<UserRound className="h-4 w-4" />} />
          <Input label="Số điện thoại" icon={<Phone className="h-4 w-4" />} />
          <Input label="Địa chỉ" className="sm:col-span-2" icon={<MapPin className="h-4 w-4" />} />
        </div>
        <Button variant="primary" size="md" className="mt-5 w-full sm:w-auto">Lưu địa chỉ</Button>
      </section>
    </main>
  );
}
