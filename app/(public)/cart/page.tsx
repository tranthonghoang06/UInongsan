'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PublicHeader from '@/app/components/layout/PublicHeader';
import Button from '@/app/components/ui/Button';
import Badge from '@/app/components/ui/Badge';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { mockCartItems } from '@/app/data/mockData';

export default function CartPage() {
  const [items, setItems] = useState(mockCartItems);

  const handleQuantityChange = (id: string, delta: number) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const handleRemove = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 200000 ? 0 : 25000;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader cartCount={items.length} />

      <main className="mx-auto max-w-7xl px-3 py-4 sm:px-4 sm:py-8">
        {/* Page Header */}
        <div className="mb-5 sm:mb-8">
          <h1 className="text-xl font-bold text-[#163B24] sm:text-3xl">Giỏ hàng</h1>
        </div>

        {items.length > 0 ? (
          <div className="grid gap-5 lg:grid-cols-3 lg:gap-8">
            {/* Cart Items */}
            <div className="space-y-4 lg:col-span-2">
              {items.map(item => (
                <div key={item.id} className="grid grid-cols-[5.5rem_1fr] gap-3 rounded-2xl border border-[#BBF7D0] bg-white p-3 shadow-sm shadow-green-100 sm:flex sm:gap-4 sm:p-4">
                  {/* Image */}
                  <div className="relative h-24 w-full overflow-hidden rounded-2xl bg-gray-200 sm:w-24">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <h3 className="line-clamp-2 font-bold text-[#163B24]">{item.name}</h3>
                    <p className="my-2 text-lg font-bold text-[#16A34A]">{item.price.toLocaleString()}₫</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#BBF7D0] bg-[#F0FDF4]"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-9 text-center text-lg font-bold">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#BBF7D0] bg-[#F0FDF4]"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="col-span-2 flex items-center justify-between border-t border-[#DCFCE7] pt-3 sm:border-0 sm:pt-0 sm:flex-col sm:items-end">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                    <p className="font-bold text-[#263238]">
                      {(item.price * item.quantity).toLocaleString()}₫
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="h-fit rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6 lg:sticky lg:top-20">
              <h3 className="mb-5 text-xl font-bold text-[#163B24]">Tóm tắt đơn hàng</h3>

              <div className="mb-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tạm tính</span>
                  <span className="font-medium">{subtotal.toLocaleString()}₫</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Vận chuyển</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <Badge variant="success" size="sm">Miễn phí</Badge>
                    ) : (
                      `${shipping.toLocaleString()}₫`
                    )}
                  </span>
                </div>
                {shipping === 0 && (
                  <p className="text-xs text-green-600">Bạn được miễn phí vận chuyển!</p>
                )}
              </div>

              <div className="mb-6 border-t border-[#E0E0E0] pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Tổng cộng</span>
                  <span className="text-[#16A34A]">{total.toLocaleString()}₫</span>
                </div>
              </div>

              <Link href="/checkout" className="block mb-3">
                <Button variant="primary" size="md" className="w-full gap-2">
                  Tiến hành thanh toán
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="/products">
                <Button variant="outline" size="md" className="w-full">
                  Tiếp tục mua sắm
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#BBF7D0] bg-[#F0FDF4] px-4 text-center">
            <ShoppingBag className="mb-4 h-16 w-16 text-gray-400" />
            <h3 className="mb-2 text-lg font-semibold text-[#263238]">Giỏ hàng trống</h3>
            <p className="mb-6 text-gray-600">Hãy thêm sản phẩm để bắt đầu mua sắm</p>
            <Link href="/products">
              <Button variant="primary" size="md">
                Tiếp tục mua sắm
              </Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
