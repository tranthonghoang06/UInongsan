import React from 'react';
import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import StatusBadge from '@/app/components/ui/StatusBadge';
import { QrCode, ShieldCheck } from 'lucide-react';

interface QRTraceCardProps {
  qrCode: string;
  productName: string;
  farmName: string;
  harvestDate: string;
  status?: string;
}

export default function QRTraceCard({ qrCode, productName, farmName, harvestDate, status = 'completed' }: QRTraceCardProps) {
  return (
    <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#166534]">
          <QrCode className="h-6 w-6" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-[#16A34A]">{qrCode}</p>
              <h2 className="mt-1 text-lg font-bold text-[#163B24]">{productName}</h2>
            </div>
            <StatusBadge status={status} />
          </div>
          <div className="mt-4 grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
            <p><span className="font-semibold text-[#163B24]">Nhà vườn:</span> {farmName}</p>
            <p><span className="font-semibold text-[#163B24]">Thu hoạch:</span> {harvestDate}</p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#166534]">
            <ShieldCheck className="h-4 w-4" />
            Dữ liệu truy xuất đã được ghi nhận trong hệ thống.
          </div>
          <Link href={`/trace/${qrCode}`} className="mt-4 block sm:inline-block">
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              Xem truy xuất
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
