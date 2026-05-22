import type { Review } from '@/types';
import { Star } from 'lucide-react';

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rounded-2xl border border-[#BBF7D0] bg-white p-4 shadow-sm shadow-green-100">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="font-bold text-[#163B24]">{review.userName}</h3>
          <p className="text-xs text-gray-500">{review.createdDate}</p>
        </div>
        <div className="flex items-center gap-1 rounded-xl bg-[#FFF7E6] px-2.5 py-1 text-sm font-bold text-[#B45309]">
          <Star className="h-4 w-4 fill-current" />
          {review.rating}
        </div>
      </div>
      <p className="mt-3 text-sm leading-6 text-gray-700">{review.comment}</p>
    </article>
  );
}
