"use client";

import { useProductFilters } from "@/hooks/use-product-filters";
import ProductGrid from "./product-grid";
import ProductTable from "./product-table";
import { Product } from "@/lib/content/products";
import { Category } from "@/lib/content/categories";
import { Variant } from "@/lib/content/variants";
import useFilteredProducts from "../_hooks/useFilteredProducts";

export default function ProductViews({
  products,
  categories,
  variants,
}: {
  products: Product[];
  categories: Category[];
  variants: Variant[];
}) {
  const { view } = useProductFilters({ categories, variants });
  const { filteredProducts } = useFilteredProducts({
    products,
    categories,
    variants,
  });

  return (
    <div>
      {/* Count */}
      <div className="mb-8 text-sm text-base-content/60">
        Showing <span className="font-semibold">{filteredProducts.length}</span>{" "}
        products
      </div>

      {/* Grid View */}
      {view === "grid" ? (
        <ProductGrid
          products={products}
          categories={categories}
          variants={variants}
        />
      ) : null}
      {view === "list" ? (
        <ProductTable
          products={products}
          categories={categories}
          variants={variants}
        />
      ) : null}
    </div>
  );
}
