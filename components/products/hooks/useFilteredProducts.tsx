import { useProductFilters } from "@/hooks/use-product-filters";
import { Product } from "@/lib/content/products";

const useFilteredProducts = ({ products }: { products: Product[] }) => {
  const { selectedCategory, selectedVariant } = useProductFilters();

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory.length === 0 ||
      selectedCategory.includes(product.category);

    const variantMatch =
      selectedVariant.length === 0 || selectedVariant.includes(product.variant);

    return categoryMatch && variantMatch;
  });
  return { filteredProducts };
};

export default useFilteredProducts;
