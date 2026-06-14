"use client";

import { Categories } from "@/data/categories";
import { Variants } from "@/data/variants";
import { useProductFilters } from "@/hooks/use-product-filters";
import { Grid3X3, List } from "lucide-react";

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
    resetFilters,
    view,
    setView,
  } = useProductFilters();

  const hasActiveFilters =
    selectedCategory.length > 0 || selectedVariant.length > 0;

  return (
    <div className="sticky top-28 rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold">Filters</h2>
        {hasActiveFilters ? (
          <button
            type="button"
            onClick={resetFilters}
            className="text-sm font-medium text-red-700 transition hover:underline"
          >
            Reset
          </button>
        ) : null}
      </div>
      {/* View Toggle */}
      <div className="mb-8">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-base-content/60">
          View
        </h3>

        <div className="join w-full">
          <button
            type="button"
            onClick={() => setView("grid")}
            className={`btn join-item flex-1 ${
              view === "grid" ? "btn-primary" : "btn-outline"
            }`}
          >
            <Grid3X3 size={18} />
            Grid
          </button>

          <button
            type="button"
            onClick={() => setView("list")}
            className={`btn join-item flex-1 ${
              view === "list" ? "btn-primary" : "btn-outline"
            }`}
          >
            <List size={18} />
            List
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {/* Category */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-base-content/60">
            Category
          </h3>

          <div className="space-y-1">
            {Categories.map((category) => (
              <FilterOption
                key={category.value}
                label={category.label}
                checked={selectedCategory.includes(category.value)}
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
            {Variants.map((variant) => (
              <FilterOption
                key={variant.value}
                label={variant.label}
                checked={selectedVariant.includes(variant.value)}
                onClick={() => setSelectedVariant(variant.value)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
