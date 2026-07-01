import ProductCategoryCard from "@/ui/product-category-card";
import useFilteredProducts from "./hooks/useFilteredProducts";
import findPrimaryImage from "./utils/find-primary-image";
import { Product } from "@/lib/content/products";

const ProductGrid = ({ products }: { products: Product[] }) => {
  const { filteredProducts } = useFilteredProducts({ products });

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
            imageSrc={`${process.env.NEXT_PUBLIC_CONTENT_URL}/${primaryImage}`}
            salts={product.salts}
            buttonText="View Product"
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;
