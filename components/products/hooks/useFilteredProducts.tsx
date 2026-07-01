import { useProductFilters } from "@/hooks/use-product-filters";
import { Category } from "@/lib/content/categories";
import { Product } from "@/lib/content/products";
import { Variant } from "@/lib/content/variants";

const useFilteredProducts = ({
  products,
  categories,
  variants,
}: {
  products: Product[];
  categories: Category[];
  variants: Variant[];
}) => {
  const { selectedCategory, selectedVariant } = useProductFilters({
    categories,
    variants,
  });

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
