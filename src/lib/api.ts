import { Product } from "@/types";

const API_BASE = "https://fakestoreapi.com";

async function safeFetch<T>(url: string, fallback: T, errorMessage: string): Promise<T> {
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn(`${errorMessage}: status ${res.status}`);
      return fallback;
    }

    return (await res.json()) as T;
  } catch (error) {
    // Build-time / network issues should not break static generation
    console.warn(`${errorMessage}:`, error);
    return fallback;
  }
}

export async function getAllProducts(): Promise<Product[]> {
  return safeFetch<Product[]>(`${API_BASE}/products`, [], "Failed to fetch products");
}

export async function getCategories(): Promise<string[]> {
  return safeFetch<string[]>(`${API_BASE}/products/categories`, [], "Failed to fetch categories");
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  const res = await fetch(
    `${API_BASE}/products/category/${encodeURIComponent(category)}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Failed to fetch products by category");
  return res.json();
}

export function formatPrice(price: number | string | undefined | null): string {
  const value = Number(price);
  if (Number.isNaN(value)) {
    return "--";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
}

export function buildProductSchema(products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Women's Fashion Collection",
    description:
      "Curated women's fashion — clothing, jewellery and accessories",
    numberOfItems: products.length,
    itemListElement: products.slice(0, 10).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.title,
        description: p.description,
        image: p.image,
        offers: {
          "@type": "Offer",
          price: p.price.toFixed(2),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: p.rating.rate,
          reviewCount: p.rating.count,
        },
      },
    })),
  };
}
