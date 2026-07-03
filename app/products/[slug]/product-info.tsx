import { Category } from "@/lib/content/categories";
import { Product } from "@/lib/content/products";
import ProductCarousel from "@/ui/product-carousel";
import ProductRightInfo from "./product-right-info";

const ProductInfo = ({
  product,
  categories,
}: {
  product: Product;
  categories: Category[];
}) => {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
      {/* Left - Carousel */}
      <ProductCarousel images={product.images} title={product.title} />

      {/* Right - Product Info */}
      <ProductRightInfo product={product} categories={categories} />
    </div>
  );
};

export default ProductInfo;
