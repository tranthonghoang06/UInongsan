import { QrCode } from 'lucide-react';

interface QRCodeBoxProps {
  code: string;
  label?: string;
}

export default function QRCodeBox({ code, label = 'Mã truy xuất' }: QRCodeBoxProps) {
  return (
    <div className="rounded-2xl border border-[#BBF7D0] bg-white p-4 text-center shadow-sm shadow-green-100">
      <div className="mx-auto grid h-36 w-36 place-items-center rounded-2xl bg-[#F0FDF4] text-[#166534]">
        <QrCode className="h-20 w-20" />
      </div>
      <p className="mt-3 text-sm text-gray-600">{label}</p>
      <p className="font-bold text-[#163B24]">{code}</p>
    </div>
  );
}
