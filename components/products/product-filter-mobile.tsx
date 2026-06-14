import { useProductFilters } from "@/hooks/use-product-filters";
import { useMemo } from "react";
import { Categories } from "@/data/categories";

import { Variants } from "@/data/variants";

const ProductFilterMobile = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedVariant,
    setSelectedVariant,
  } = useProductFilters();

  const categories = useMemo<{ label: string; value: string }[]>(() => {
    return [
      {
        label: "All",
        value: "All",
      },
      ...Categories,
    ];
  }, []);

  const variants = [
    {
      label: "All",
      value: "All",
    },
    ...Variants,
  ];

  return (
    <div className="mb-12 space-y-8">
      {/* Categories */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-base-content/60">
          Category
        </h3>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              className={`btn rounded-full ${
                selectedCategory === category.value
                  ? "btn-primary"
                  : "btn-outline"
              }`}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
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
              key={variant.value}
              type="button"
              className={`btn rounded-full ${
                selectedVariant === variant.value
                  ? "btn-primary"
                  : "btn-outline"
              }`}
              onClick={() => setSelectedVariant(variant.value)}
            >
              {variant.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilterMobile;
