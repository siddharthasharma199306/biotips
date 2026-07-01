import { notFound } from "next/navigation";

import { getProducts, getProductBySlug } from "@/lib/content/products";
import ProductCarousel from "@/ui/product-carousel";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left - Carousel */}
        <ProductCarousel images={product.images} title={product.title} />

        {/* Right - Product Info */}
        <div className="flex h-full flex-col justify-between">
          {/* Top content */}
          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                {product.category}
              </span>

              <span className="rounded-full bg-base-200 px-4 py-2 text-sm text-base-content/70">
                {product.variant}
              </span>
            </div>

            <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
              {product.title}
            </h1>

            <p className="mb-8 text-lg leading-8 text-base-content/70">
              {product.description}
            </p>

            {/* Composition */}
            <div className="rounded-[28px] bg-base-200 p-6">
              <h2 className="mb-4 text-lg font-semibold">Composition</h2>

              <div className="space-y-4">
                {product.salts.map((salt) => (
                  <div
                    key={`${salt.name}-${salt.dosage}`}
                    className="flex items-center justify-between border-b border-base-300 pb-3"
                  >
                    <span className="font-medium">{salt.name}</span>

                    <span className="text-base-content/70">{salt.dosage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8">
            <button className="btn btn-primary w-fit rounded-full px-8">
              Contact for Enquiry
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
