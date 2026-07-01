import { getContent } from "./client";

export interface Category {
  label: string;
  value: string;
}

export async function getCategories() {
  return getContent<Category[]>("categories.json");
}
