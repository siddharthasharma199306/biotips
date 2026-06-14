import { useMemo } from "react";

import { products } from "@/data/products";
import ProductCategoryCard from "@/ui/product-category-card";

import { useProductFilters } from "@/hooks/use-product-filters";

const ProductGrid = () => {
  const { selectedCategory, selectedVariant } = useProductFilters();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      let categoryMatch = false;
      let variantMatch = false;
      if (selectedCategory.length === 0) {
        categoryMatch = true;
      } else {
        categoryMatch = selectedCategory.includes(product.category);
      }

      if (selectedVariant.length === 0) {
        variantMatch = true;
      } else {
        variantMatch = selectedVariant.includes(product.variant);
      }

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
