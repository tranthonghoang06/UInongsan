'use client';

import React from 'react';
import Button from '@/app/components/ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="flex flex-wrap items-center justify-center gap-2" aria-label="Phân trang">
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage <= 1}
        onClick={() => onPageChange?.(currentPage - 1)}
        aria-label="Trang trước"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange?.(page)}
          className={`flex h-10 min-w-10 items-center justify-center rounded-xl px-3 text-sm font-bold transition-colors ${
            page === currentPage ? 'bg-[#16A34A] text-white' : 'border border-[#BBF7D0] bg-white text-[#166534] hover:bg-[#DCFCE7]'
          }`}
        >
          {page}
        </button>
      ))}
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange?.(currentPage + 1)}
        aria-label="Trang sau"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  );
}
