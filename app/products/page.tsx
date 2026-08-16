import { Suspense } from "react";

import ProductBanner from "@/app/products/product-banner";
import ProductsContent from "./products-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmaceutical Products",
  description:
    "Explore Biotips Pharmaceutical's range of medicines and pharmaceutical products across multiple therapeutic categories.",
  alternates: {
    canonical: "/products/",
  },
};

export default function Products() {
  return (
    <main className="w-full">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <ProductBanner />

        <Suspense fallback={null}>
          <ProductsContent />
        </Suspense>
      </section>
    </main>
  );
}
