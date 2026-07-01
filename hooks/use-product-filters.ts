"use client";

import { useMemo } from "react";
import { parseAsArrayOf, parseAsStringLiteral, useQueryState } from "nuqs";

import { Category } from "@/lib/content/categories";
import { Variant } from "@/lib/content/variants";

const viewOptions = ["grid", "list"] as const;

type UseProductFiltersProps = {
  categories: Category[] | undefined;
  variants: Variant[] | undefined;
};

export function useProductFilters({
  categories,
  variants,
}: UseProductFiltersProps) {
  const categoryValues = useMemo(() => {
    if (!categories || categories.length === 0) {
      return [];
    }
    return categories.map((category) => category.value) as string[];
  }, [categories]);

  const variantValues = useMemo(() => {
    if (!variants || variants.length === 0) {
      return [];
    }
    return variants.map((variant) => variant.value) as string[];
  }, [variants]);

  const categoryParser = useMemo(
    () => parseAsArrayOf(parseAsStringLiteral(categoryValues)).withDefault([]),
    [categoryValues],
  );

  const variantParser = useMemo(
    () => parseAsArrayOf(parseAsStringLiteral(variantValues)).withDefault([]),
    [variantValues],
  );

  const [selectedCategory, setSelectedCategory] = useQueryState(
    "category",
    categoryParser,
  );

  const [selectedVariant, setSelectedVariant] = useQueryState(
    "variant",
    variantParser,
  );

  const [view, setView] = useQueryState(
    "view",
    parseAsStringLiteral(viewOptions).withDefault("grid"),
  );

  const toggleCategory = (value: string) => {
    setSelectedCategory(
      selectedCategory.includes(value)
        ? selectedCategory.filter((category) => category !== value)
        : [...selectedCategory, value],
    );
  };

  const toggleVariant = (value: string) => {
    setSelectedVariant(
      selectedVariant.includes(value)
        ? selectedVariant.filter((variant) => variant !== value)
        : [...selectedVariant, value],
    );
  };

  const resetFilters = () => {
    setSelectedCategory([]);
    setSelectedVariant([]);
  };

  return {
    selectedCategory,
    setSelectedCategory: toggleCategory,
    selectedVariant,
    setSelectedVariant: toggleVariant,
    resetFilters,
    view,
    setView,
  };
}
