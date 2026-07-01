import { Suspense } from "react";

import { getProducts } from "@/lib/content/products";

import ProductBanner from "@/components/products/product-banner";
import ProductFilterMobile from "@/components/products/product-filter-mobile";
import ProductFiltersDesktop from "@/components/products/product-filters-desktop";
import ProductViews from "@/components/products/product-views";

async function ProductsContent() {
  const products = await getProducts();

  return (
    <>
      {/* Mobile / Tablet Filters */}
      <div className="xl:hidden">
        <ProductFilterMobile />
      </div>

      {/* Desktop Layout */}
      <div className="mt-10 grid gap-10 xl:grid-cols-[280px_1fr]">
        <aside className="hidden xl:block">
          <ProductFiltersDesktop />
        </aside>

        <div className="min-w-0">
          <ProductViews products={products} />
        </div>
      </div>
    </>
  );
}

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
