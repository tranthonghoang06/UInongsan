'use client';

import { useMemo, useState } from 'react';
import { mockCartItems } from '@/app/data/mockData';

export function useCart() {
  const [items, setItems] = useState(mockCartItems);
  const totalQuantity = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);
  const totalAmount = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);

  return {
    items,
    setItems,
    totalQuantity,
    totalAmount,
    clearCart: () => setItems([]),
  };
}
