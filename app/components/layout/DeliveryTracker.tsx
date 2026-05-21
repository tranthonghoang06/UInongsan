import React from 'react';
import { CheckCircle2, Circle, Truck } from 'lucide-react';

interface DeliveryTrackerProps {
  currentStatus: string;
}

const steps = [
  { key: 'assigned', label: 'Phân công' },
  { key: 'picked-up', label: 'Lấy hàng' },
  { key: 'in-transit', label: 'Đang giao' },
  { key: 'delivered', label: 'Hoàn tất' },
];

export default function DeliveryTracker({ currentStatus }: DeliveryTrackerProps) {
  const currentIndex = Math.max(steps.findIndex((step) => step.key === currentStatus), 0);

  return (
    <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
      <div className="mb-4 flex items-center gap-2">
        <Truck className="h-5 w-5 text-[#16A34A]" />
        <h2 className="font-bold text-[#163B24]">Theo dõi vận chuyển</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-4">
        {steps.map((step, index) => {
          const done = index <= currentIndex;
          return (
            <div key={step.key} className="flex items-center gap-2 rounded-2xl bg-[#F0FDF4] p-3 sm:flex-col sm:items-start">
              {done ? <CheckCircle2 className="h-5 w-5 text-[#16A34A]" /> : <Circle className="h-5 w-5 text-gray-400" />}
              <span className={`text-sm font-semibold ${done ? 'text-[#166534]' : 'text-gray-500'}`}>{step.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
