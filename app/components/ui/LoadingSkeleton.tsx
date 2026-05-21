import React from 'react';

interface LoadingSkeletonProps {
  rows?: number;
  showHeader?: boolean;
}

export default function LoadingSkeleton({ rows = 4, showHeader = true }: LoadingSkeletonProps) {
  return (
    <div className="space-y-4">
      {showHeader && (
        <div className="space-y-2">
          <div className="h-7 w-2/3 max-w-sm animate-pulse rounded-xl bg-[#DCFCE7]" />
          <div className="h-4 w-full max-w-xl animate-pulse rounded-xl bg-[#E8F5E9]" />
        </div>
      )}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
            <div className="h-4 w-24 animate-pulse rounded bg-[#E8F5E9]" />
            <div className="mt-3 h-8 w-20 animate-pulse rounded bg-[#DCFCE7]" />
            <div className="mt-4 h-3 w-full animate-pulse rounded bg-[#F0FDF4]" />
          </div>
        ))}
      </div>
    </div>
  );
}
