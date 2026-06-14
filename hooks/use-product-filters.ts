"use client";

import { useMemo } from "react";
import { parseAsStringLiteral, useQueryState } from "nuqs";

import { Categories } from "@/data/categories";
import { Variants } from "@/data/variants";

const ALL = "All" as const;

// derive allowed values from source of truth
const categoryValues = [ALL, ...Categories.map((c) => c.value)] as const;

const variantValues = [ALL, ...Variants.map((v) => v.value)] as const;

export function useProductFilters() {
  const categoryParser = useMemo(
    () => parseAsStringLiteral(categoryValues).withDefault(ALL),
    [],
  );

  const variantParser = useMemo(
    () => parseAsStringLiteral(variantValues).withDefault(ALL),
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

  return {
    selectedCategory,
    setSelectedCategory,
    selectedVariant,
    setSelectedVariant,
  };
}
