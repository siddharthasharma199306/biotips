// lib/content/client.ts

const CONTENT_BASE_URL = process.env.NEXT_PUBLIC_DATA_URL!;

export async function getContent<T>(path: string): Promise<T> {
  console.log("Fetching content from:", `${CONTENT_BASE_URL}/${path}`);
  const response = await fetch(`${CONTENT_BASE_URL}/${path}`, {
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error(`Unable to fetch ${path}`);
  }

  return response.json() as Promise<T>;
}
