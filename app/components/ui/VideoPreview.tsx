import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

interface VideoPreviewProps {
  title: string;
  duration: string;
  thumbnail: string;
}

export default function VideoPreview({ title, duration, thumbnail }: VideoPreviewProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#BBF7D0] bg-white shadow-sm shadow-green-100">
      <div className="relative aspect-video">
        <Image src={thumbnail} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white">
          <PlayCircle className="h-12 w-12" />
        </div>
      </div>
      <div className="p-3">
        <h3 className="line-clamp-2 font-bold text-[#163B24]">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{duration}</p>
      </div>
    </div>
  );
}
