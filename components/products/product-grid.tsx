import { useMemo } from "react";

import { products } from "@/data/products";
import ProductCategoryCard from "@/ui/product-category-card";

import { useProductFilters } from "@/hooks/use-product-filters";

const ProductGrid = () => {
  const { selectedCategory, selectedVariant } = useProductFilters();
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === "All" || product.category === selectedCategory;

      const variantMatch =
        selectedVariant === "All" || product.variant === selectedVariant;

      return categoryMatch && variantMatch;
    });
  }, [selectedCategory, selectedVariant]);
  return (
    <>
      {/* Count */}
      <div className="mb-8 text-sm text-base-content/60">
        Showing <span className="font-semibold">{filteredProducts.length}</span>{" "}
        products
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCategoryCard
            key={product.slug}
            slug={product.slug}
            title={product.title}
            category={product.category}
            variant={product.variant}
            description={product.description}
            imageSrc={product.imageSrc}
            salts={product.salts}
            buttonText="View Product"
          />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
