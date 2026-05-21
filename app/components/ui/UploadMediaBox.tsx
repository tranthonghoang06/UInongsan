import { ImagePlus } from 'lucide-react';

interface UploadMediaBoxProps {
  title?: string;
  description?: string;
}

export default function UploadMediaBox({ title = 'Tải media lên', description = 'Thêm hình ảnh hoặc video để làm rõ sản phẩm.' }: UploadMediaBoxProps) {
  return (
    <div className="flex min-h-40 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#BBF7D0] bg-[#F0FDF4] p-4 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#16A34A]">
        <ImagePlus className="h-6 w-6" />
      </div>
      <p className="mt-3 font-bold text-[#163B24]">{title}</p>
      <p className="mt-1 max-w-xs text-sm leading-6 text-gray-600">{description}</p>
    </div>
  );
}
