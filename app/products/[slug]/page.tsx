import { notFound } from "next/navigation";

import { getCategories } from "@/lib/content/categories";
import { getProductBySlug, getProducts } from "@/lib/content/products";
import BackToProducts from "./back-to-products";
import ProductInfo from "./product-info";
import type { Metadata } from "next";

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

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const { slug } = await params;

  const [product, categories] = await Promise.all([
    getProductBySlug(slug),
    getCategories(),
  ]);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const category = categories.find(
    (category) => category.value === product.category,
  );

  const salts = product.salts
    .map((salt) => `${salt.name} ${salt.dosage}`)
    .join(" and ");

  const variant =
    product.variant.charAt(0).toUpperCase() + product.variant.slice(1);

  const categoryLabel = category?.label ?? product.category;

  return {
    title: `${product.title} ${variant}`,
    description: `${product.title} is a ${variant.toLowerCase()} marketed by Biotips Pharmaceutical, containing ${salts}. Explore this pharmaceutical product in the ${categoryLabel} category.`,
    alternates: {
      canonical: `/products/${product.slug}/`,
    },
  };
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
