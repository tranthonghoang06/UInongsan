import LoadingSkeleton from '@/app/components/ui/LoadingSkeleton';

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#F0FDF4] px-3 py-6 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <LoadingSkeleton rows={4} />
      </div>
    </main>
  );
}
