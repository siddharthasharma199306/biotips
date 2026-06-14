"use client";

import Link from "next/link";

import ProductCategoryCard from "@/ui/product-category-card";
import { products } from "@/data/products";
import { useProductFilters } from "@/hooks/use-product-filters";

export default function ProductGrid() {
  const { selectedCategory, selectedVariant, view } = useProductFilters();

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory.length === 0 ||
      selectedCategory.includes(product.category);

    const variantMatch =
      selectedVariant.length === 0 || selectedVariant.includes(product.variant);

    return categoryMatch && variantMatch;
  });

  console.log("filteredProducts", filteredProducts);
  return (
    <div>
      {/* Count */}
      <div className="mb-8 text-sm text-base-content/60">
        Showing <span className="font-semibold">{filteredProducts.length}</span>{" "}
        products
      </div>

      {/* Grid View */}
      {view === "grid" ? (
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
      ) : (
        /* Table View */
        <div className="overflow-x-auto rounded-2xl border border-base-300 bg-base-100 shadow-sm">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Variant</th>
                <th>Composition</th>
                <th />
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.slug}>
                  <td>
                    <div className="flex items-center gap-4">
                      <div className="avatar">
                        <div className="h-14 w-14 rounded-lg bg-base-200">
                          <img src={product.imageSrc} alt={product.title} />
                        </div>
                      </div>

                      <div>
                        <div className="font-semibold">{product.title}</div>

                        <div className="text-sm text-base-content/60 line-clamp-1">
                          {product.description}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{product.category}</td>

                  <td>{product.variant}</td>

                  <td className="max-w-70">
                    <div className="space-y-1">
                      {product.salts.map((salt) => (
                        <div
                          key={`${salt.name}-${salt.dosage}`}
                          className="text-sm text-base-content/75"
                        >
                          <span className="font-medium">{salt.name}</span>{" "}
                          {salt.dosage}
                        </div>
                      ))}
                    </div>
                  </td>

                  <td>
                    <Link
                      href={`/products/${product.slug}`}
                      className="btn btn-primary btn-sm"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
