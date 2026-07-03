import ProductCategoryCard from "@/ui/product-category-card";
import { Product } from "@/lib/content/products";
import { Category } from "@/lib/content/categories";
import { Variant } from "@/lib/content/variants";
import useFilteredProducts from "../_hooks/useFilteredProducts";
import findPrimaryImage from "../_utils/find-primary-image";

const ProductGrid = ({
  products,
  categories,
  variants,
}: {
  products: Product[];
  categories: Category[];
  variants: Variant[];
}) => {
  const { filteredProducts } = useFilteredProducts({
    products,
    categories,
    variants,
  });

  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {filteredProducts.map((product) => {
        const primaryImage = findPrimaryImage(product.images);
        return (
          <ProductCategoryCard
            key={product.slug}
            slug={product.slug}
            title={product.title}
            category={product.category}
            variant={product.variant}
            description={product.description}
            imageSrc={`${process.env.NEXT_PUBLIC_IMAGES_URL}/${primaryImage}`}
            salts={product.salts}
            buttonText="View Product"
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;
