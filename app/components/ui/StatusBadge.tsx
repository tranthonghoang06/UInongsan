import React from 'react';
import Badge from '@/app/components/ui/Badge';
import { getStatusLabel, getStatusVariant } from '@/utils';

interface StatusBadgeProps {
  status: string;
  size?: 'sm' | 'md';
  className?: string;
}

export default function StatusBadge({ status, size = 'sm', className = '' }: StatusBadgeProps) {
  return (
    <Badge variant={getStatusVariant(status)} size={size} className={className}>
      {getStatusLabel(status)}
    </Badge>
  );
}
