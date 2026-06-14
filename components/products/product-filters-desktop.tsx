"use client";

import { Categories } from "@/data/categories";
import { Variants } from "@/data/variants";
import { useProductFilters } from "@/hooks/use-product-filters";

const categories = [
  {
    label: "All",
    value: "All",
  },
  ...Categories,
];

const variants = [
  {
    label: "All",
    value: "All",
  },
  ...Variants,
];

type FilterOptionProps = {
  label: string;
  checked: boolean;
  onClick: () => void;
};

function FilterOption({ label, checked, onClick }: FilterOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition hover:bg-base-200"
    >
      <input
        type="checkbox"
        checked={checked}
        readOnly
        className="checkbox checkbox-sm checkbox-primary"
      />

      <span
        className={`text-sm transition ${
          checked ? "font-medium text-base-content" : "text-base-content/75"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

export default function ProductFiltersDesktop() {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedVariant,
    setSelectedVariant,
  } = useProductFilters();

  return (
    <div className="sticky top-28 rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">Filters</h2>

      <div className="space-y-8">
        {/* Category */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-base-content/60">
            Category
          </h3>

          <div className="space-y-1">
            {categories.map((category) => (
              <FilterOption
                key={category.value}
                label={category.label}
                checked={selectedCategory === category.value}
                onClick={() => setSelectedCategory(category.value)}
              />
            ))}
          </div>
        </div>

        {/* Variant */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-base-content/60">
            Variant
          </h3>

          <div className="space-y-1">
            {variants.map((variant) => (
              <FilterOption
                key={variant.value}
                label={variant.label}
                checked={selectedVariant === variant.value}
                onClick={() => setSelectedVariant(variant.value)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
