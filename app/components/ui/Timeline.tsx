import type { TimelineItem } from '@/types';
import { CheckCircle2, Circle } from 'lucide-react';

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const done = item.status === 'done' || item.status === 'current';
        return (
          <div key={`${item.title}-${index}`} className="flex gap-3">
            <div className="flex flex-col items-center">
              {done ? <CheckCircle2 className="h-5 w-5 text-[#16A34A]" /> : <Circle className="h-5 w-5 text-gray-400" />}
              {index < items.length - 1 && <span className="mt-1 h-full min-h-8 w-px bg-[#BBF7D0]" />}
            </div>
            <div className="pb-3">
              <p className="font-bold text-[#163B24]">{item.title}</p>
              {item.date && <p className="text-xs font-semibold text-[#16A34A]">{item.date}</p>}
              {item.description && <p className="mt-1 text-sm leading-6 text-gray-600">{item.description}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
