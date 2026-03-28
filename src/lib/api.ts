import { Product } from "@/types";

const API_BASE = "https://fakestoreapi.com";

export async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE}/products`, {
    next: { revalidate: 3600 }, // ISR: revalidate every hour
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getCategories(): Promise<string[]> {
  const res = await fetch(`${API_BASE}/products/categories`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
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

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price);
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
