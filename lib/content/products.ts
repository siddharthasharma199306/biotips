export interface Product {
  slug: string;
  title: string;
  variant: string;
  category: string;
  description: string;
  images: string[];
  salts: {
    name: string;
    dosage: string;
  }[];
}

const PRODUCTS_URL =
  "https://biotips-content.s3.ap-south-1.amazonaws.com/data/products.json";

let productsPromise: Promise<Product[]> | null = null;

export async function getProducts(): Promise<Product[]> {
  if (!productsPromise) {
    productsPromise = fetch(PRODUCTS_URL, {
      cache: "force-cache",
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error("Unable to fetch products");
      }

      return response.json() as Promise<Product[]>;
    });
  }

  return productsPromise;
}

export async function getProductBySlug(
  slug: string,
): Promise<Product | undefined> {
  const products = await getProducts();

  return products.find((product) => product.slug === slug);
}
