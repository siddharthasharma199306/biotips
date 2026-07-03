import { getContent } from "./client";

export interface Variant {
  label: string;
  value: string;
}

export async function getVariants() {
  return getContent<Variant[]>("variants.json");
}
