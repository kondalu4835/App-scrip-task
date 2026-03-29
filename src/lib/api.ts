import { Product } from "@/types";

const API_BASE = "https://fakestoreapi.com";

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: 101,
    title: "Classic Crewneck T-Shirt",
    price: 19.99,
    description: "Comfortable cotton crewneck, available in multiple colors.",
    category: "men's clothing",
    image: "https://via.placeholder.com/300x300.png?text=Classic+T-Shirt",
    rating: { rate: 4.2, count: 89 },
  },
  {
    id: 102,
    title: "Slim Fit Jeans",
    price: 49.99,
    description: "Modern cut denim with lightweight stretch.",
    category: "men's clothing",
    image: "https://via.placeholder.com/300x300.png?text=Slim+Jeans",
    rating: { rate: 4.5, count: 114 },
  },
  {
    id: 103,
    title: "Everyday Sneakers",
    price: 64.99,
    description: "Versatile sneakers for everyday wear.",
    category: "shoes",
    image: "https://via.placeholder.com/300x300.png?text=Sneakers",
    rating: { rate: 4.1, count: 75 },
  },
];

const DEFAULT_CATEGORIES = ["men's clothing", "women's clothing", "jewelery", "electronics"];

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
  const products = await safeFetch<Product[]>(`${API_BASE}/products`, [], "Failed to fetch products");
  return products.length ? products : DEFAULT_PRODUCTS;
}

export async function getCategories(): Promise<string[]> {
  const categories = await safeFetch<string[]>(`${API_BASE}/products/categories`, [], "Failed to fetch categories");
  return categories.length ? categories : DEFAULT_CATEGORIES;
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  const products = await safeFetch<Product[]>(
    `${API_BASE}/products/category/${encodeURIComponent(category)}`,
    [],
    "Failed to fetch products by category"
  );
  return products.length ? products : DEFAULT_PRODUCTS;
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
