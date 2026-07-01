// lib/content/products.ts

import { getContent } from "./client";

export interface Product {
  slug: string;
  title: string;
  variant: string;
  category: string;
  description: string;
  images: string[];
  salts: {
    name: string;
    dosage: string;
  }[];
}

let productsPromise: Promise<Product[]> | null = null;

export async function getProducts(): Promise<Product[]> {
  if (!productsPromise) {
    productsPromise = getContent<Product[]>("products.json");
  }

  return productsPromise;
}

export async function getProductBySlug(
  slug: string,
): Promise<Product | undefined> {
  const products = await getProducts();

  return products.find((product) => product.slug === slug);
}
