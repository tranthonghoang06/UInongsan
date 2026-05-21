import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import PageHeader from '@/app/components/layout/PageHeader';
import { mockProducts, mockWishlist } from '@/app/data/mockData';
import { formatCurrency } from '@/utils';

export default function CustomerWishlistPage() {
  const products = mockWishlist
    .map((item) => mockProducts.find((product) => product.id === item.productId))
    .filter((product): product is (typeof mockProducts)[number] => Boolean(product));

  return (
    <main className="space-y-4 pb-8">
      <PageHeader eyebrow="Yêu thích" title="Sản phẩm đã lưu" description="Danh sách nông sản bạn quan tâm để mua lại nhanh hơn." />
      <section className="grid gap-3 min-[380px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="overflow-hidden rounded-2xl border border-[#BBF7D0] bg-white shadow-sm shadow-green-100">
            <div className="relative aspect-[4/3]">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
            </div>
            <div className="p-3">
              <h2 className="line-clamp-2 font-bold text-[#163B24]">{product.name}</h2>
              <p className="mt-2 font-bold text-[#16A34A]">{formatCurrency(product.price)}</p>
              <Link href={`/products/${product.id}`} className="mt-3 block">
                <Button variant="outline" size="sm" className="w-full">Xem sản phẩm</Button>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
