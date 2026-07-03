import { getProducts } from "@/lib/content/products";

import ProductFilterMobile from "@/components/products/product-filter-mobile";
import ProductFiltersDesktop from "@/components/products/product-filters-desktop";
import ProductViews from "@/components/products/product-views";
import { getCategories } from "@/lib/content/categories";
import { getVariants } from "@/lib/content/variants";

const ProductsContent = async () => {
  const products = await getProducts();
  const categories = await getCategories();
  const variants = await getVariants();

  return (
    <>
      {/* Mobile / Tablet Filters */}
      <div className="xl:hidden">
        <ProductFilterMobile categories={categories} variants={variants} />
      </div>

      {/* Desktop Layout */}
      <div className="mt-10 grid gap-10 xl:grid-cols-[280px_1fr]">
        <aside className="hidden xl:block">
          <ProductFiltersDesktop categories={categories} variants={variants} />
        </aside>

        <div className="min-w-0">
          <ProductViews
            products={products}
            categories={categories}
            variants={variants}
          />
        </div>
      </div>
    </>
  );
};

export default ProductsContent;
