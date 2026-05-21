import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/app/components/ui/Button';
import Badge from '@/app/components/ui/Badge';
import { mockUserList } from '@/app/data/mockData';
import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

interface AdminUserDetailPageProps {
  params: Promise<{ id: string }>;
}

const roleLabels: Record<string, string> = {
  farmer: 'Nông dân',
  trader: 'Thương lái',
  seller: 'Người bán',
  delivery: 'Vận chuyển',
  admin: 'Quản trị',
};

export default async function AdminUserDetailPage({ params }: AdminUserDetailPageProps) {
  const { id } = await params;
  const user = mockUserList.find((item) => item.id === id);

  if (!user) {
    notFound();
  }

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[#16A34A]">Người dùng</p>
            <h1 className="mt-1 text-2xl font-bold text-[#163B24]">{user.name}</h1>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge variant="success" size="sm">{roleLabels[user.role]}</Badge>
              <Badge variant="info" size="sm">{user.status}</Badge>
            </div>
          </div>
          <Button variant="outline" size="md">
            <ShieldCheck className="h-4 w-4" />
            Xác minh
          </Button>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <Mail className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Email</p>
          <p className="break-all font-bold text-[#163B24]">{user.email}</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <Phone className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Số điện thoại</p>
          <p className="font-bold text-[#163B24]">{user.phone}</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <MapPin className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Khu vực</p>
          <p className="font-bold text-[#163B24]">{user.region}</p>
        </div>
      </section>

      <Link href="/admin/users" className="block">
        <Button variant="outline" size="md" className="w-full sm:w-auto">Quay lại người dùng</Button>
      </Link>
    </div>
  );
}
