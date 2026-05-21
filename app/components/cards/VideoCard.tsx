import React from 'react';
import Image from 'next/image';
import Badge from '@/app/components/ui/Badge';

interface VideoCardProps {
  id: string;
  thumbnail: string;
  title: string;
  description?: string;
  duration?: string;
  farm: string;
  onPlay: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  thumbnail,
  title,
  description,
  duration,
  farm,
  onPlay,
}) => {
  return (
    <div
      className="cursor-pointer overflow-hidden rounded-2xl border border-[#BBF7D0] bg-white shadow-sm shadow-green-100"
      onClick={onPlay}
    >
      {/* Video Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-200">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
        />
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors duration-300 hover:bg-black/50">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
            <div className="ml-1 h-0 w-0 border-l-6 border-t-4 border-b-4 border-l-[#2E7D32] border-t-transparent border-b-transparent"></div>
          </div>
        </div>
        {duration && (
          <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs font-semibold text-white">
            {duration}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="mb-1 line-clamp-2 text-base font-bold text-[#163B24]">{title}</h3>
        {description && (
          <p className="mb-2 line-clamp-2 text-xs text-gray-600">{description}</p>
        )}
        <Badge variant="info" size="sm" className="text-xs">
          {farm}
        </Badge>
      </div>
    </div>
  );
};

export default VideoCard;
