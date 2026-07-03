import { notFound } from "next/navigation";

import { getCategories } from "@/lib/content/categories";
import { getProductBySlug, getProducts } from "@/lib/content/products";
import BackToProducts from "./back-to-products";
import ProductInfo from "./product-info";

type ProductProps = {
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

export default async function ProductPage({ params }: ProductProps) {
  const { slug } = await params;

  const [product, categories] = await Promise.all([
    getProductBySlug(slug),
    getCategories(),
  ]);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <BackToProducts />
      <ProductInfo product={product} categories={categories} />
    </main>
  );
}
