// app/products/page.tsx

"use client";

import { useMemo, useState } from "react";
import ProductCategoryCard from "@/ui/product-category-card";
import { products } from "@/constants/products";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const [selectedVariant, setSelectedVariant] = useState<string>("All");

  // unique categories
  const categories = useMemo<string[]>(() => {
    return [
      "All",
      ...Array.from(
        new Set(products.map((product) => product.category).filter(Boolean)),
      ),
    ];
  }, []);

  // unique variants
  const variants = useMemo<string[]>(() => {
    return [
      "All",
      ...Array.from(
        new Set(products.map((product) => product.variant).filter(Boolean)),
      ),
    ];
  }, []);

  // filter products
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
    <main className="w-full">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-20">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Our Products
          </span>

          <h1 className="mb-5 text-4xl font-bold tracking-tight lg:text-6xl">
            Trusted Pharmaceutical Products
          </h1>

          <p className="text-lg leading-8 text-base-content/70 lg:text-xl">
            Explore our pharmaceutical portfolio trusted by doctors and
            healthcare professionals across India.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-8">
          {/* Categories */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-base-content/60">
              Category
            </h3>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`btn rounded-full ${
                    selectedCategory === category
                      ? "btn-primary"
                      : "btn-outline"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Variants */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-base-content/60">
              Variant
            </h3>

            <div className="flex flex-wrap gap-3">
              {variants.map((variant) => (
                <button
                  key={variant}
                  type="button"
                  className={`btn rounded-full ${
                    selectedVariant === variant ? "btn-primary" : "btn-outline"
                  }`}
                  onClick={() => setSelectedVariant(variant)}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Count */}
        <div className="mb-8 text-sm text-base-content/60">
          Showing{" "}
          <span className="font-semibold">{filteredProducts.length}</span>{" "}
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
      </section>
    </main>
  );
}
