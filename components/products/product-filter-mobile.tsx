import { Categories } from "@/data/categories";
import { Variants } from "@/data/variants";
import { useProductFilters } from "@/hooks/use-product-filters";
import { Grid3X3, List } from "lucide-react";

const ProductFilterMobile = () => {
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
    <div className="mb-12 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>

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
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-base-content/60">
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

      {/* Categories */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-base-content/60">
          Category
        </h3>

        <div className="flex flex-wrap gap-3">
          {Categories.map((category) => (
            <button
              key={category.value}
              type="button"
              className={`btn rounded-full ${
                selectedCategory.includes(category.value)
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
          {Variants.map((variant) => (
            <button
              key={variant.value}
              type="button"
              className={`btn rounded-full ${
                selectedVariant.includes(variant.value)
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
