"use client";

import { useMemo } from "react";
import { parseAsArrayOf, parseAsStringLiteral, useQueryState } from "nuqs";

import { Categories } from "@/data/categories";
import { Variants } from "@/data/variants";

type ProductView = "grid" | "list";

const viewOptions = ["grid", "list"] as const;

// derive allowed values from source of truth
const categoryValues = [...Categories.map((c) => c.value)] as const;

const variantValues = [...Variants.map((v) => v.value)] as const;

export function useProductFilters() {
  const categoryParser = useMemo(
    () => parseAsArrayOf(parseAsStringLiteral(categoryValues)).withDefault([]),
    [],
  );

  const variantParser = useMemo(
    () => parseAsArrayOf(parseAsStringLiteral(variantValues)).withDefault([]),
    [],
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

  const setSelectedCategoryArray = (value: string) => {
    if (selectedCategory.includes(value)) {
      setSelectedCategory(selectedCategory.filter((c) => c !== value));
    } else {
      setSelectedCategory([...selectedCategory, value]);
    }
  };

  const setSelectedVariantArray = (value: string) => {
    if (selectedVariant.includes(value)) {
      setSelectedVariant(selectedVariant.filter((v) => v !== value));
    } else {
      setSelectedVariant([...selectedVariant, value]);
    }
  };

  const resetFilters = () => {
    setSelectedCategory([]);
    setSelectedVariant([]);
  };

  return {
    selectedCategory,
    setSelectedCategory: setSelectedCategoryArray,
    selectedVariant,
    setSelectedVariant: setSelectedVariantArray,
    resetFilters,
    view,
    setView,
  };
}
