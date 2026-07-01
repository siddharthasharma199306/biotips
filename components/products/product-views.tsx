"use client";

import { useProductFilters } from "@/hooks/use-product-filters";
import ProductGrid from "./product-grid";
import ProductTable from "./product-table";
import useFilteredProducts from "./hooks/useFilteredProducts";
import { Product } from "@/lib/content/products";

export default function ProductViews({ products }: { products: Product[] }) {
  const { view } = useProductFilters();
  const { filteredProducts } = useFilteredProducts({ products });

  return (
    <div>
      {/* Count */}
      <div className="mb-8 text-sm text-base-content/60">
        Showing <span className="font-semibold">{filteredProducts.length}</span>{" "}
        products
      </div>

      {/* Grid View */}
      {view === "grid" ? <ProductGrid products={products} /> : null}
      {view === "list" ? <ProductTable products={products} /> : null}
    </div>
  );
}
