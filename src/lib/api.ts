import { Product } from "@/types";

// Static product data
const PRODUCTS: Product[] = [
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
  {
    id: 104,
    title: "Gold Necklace",
    price: 129.99,
    description: "Elegant gold necklace, perfect for evening wear.",
    category: "jewelery",
    image: "https://via.placeholder.com/300x300.png?text=Gold+Necklace",
    rating: { rate: 4.8, count: 42 },
  },
  {
    id: 105,
    title: "Silver Hoop Earrings",
    price: 39.99,
    description: "Classic silver hoop earrings for daily wear.",
    category: "jewelery",
    image: "https://via.placeholder.com/300x300.png?text=Silver+Hoop+Earrings",
    rating: { rate: 4.4, count: 30 },
  },
  {
    id: 106,
    title: "Leather Handbag",
    price: 199.99,
    description: "High-quality leather handbag with spacious interior.",
    category: "women's clothing",
    image: "https://via.placeholder.com/300x300.png?text=Leather+Handbag",
    rating: { rate: 4.7, count: 52 },
  },
  {
    id: 107,
    title: "Summer Dress",
    price: 59.99,
    description: "Lightweight and comfortable summer dress.",
    category: "women's clothing",
    image: "https://via.placeholder.com/300x300.png?text=Summer+Dress",
    rating: { rate: 4.5, count: 47 },
  },
  {
    id: 108,
    title: "Smart Watch",
    price: 149.99,
    description: "Track fitness and notifications with this sleek smartwatch.",
    category: "electronics",
    image: "https://via.placeholder.com/300x300.png?text=Smart+Watch",
    rating: { rate: 4.3, count: 66 },
  },
  {
    id: 109,
    title: "Bluetooth Headphones",
    price: 89.99,
    description: "Noise-cancelling over-ear headphones with long battery life.",
    category: "electronics",
    image: "https://via.placeholder.com/300x300.png?text=Bluetooth+Headphones",
    rating: { rate: 4.6, count: 88 },
  },
  {
    id: 110,
    title: "Sports Sandals",
    price: 34.99,
    description: "Comfortable sandals suitable for hiking and casual wear.",
    category: "shoes",
    image: "https://via.placeholder.com/300x300.png?text=Sports+Sandals",
    rating: { rate: 4.2, count: 39 },
  },
  {
    id: 111,
    title: "Wool Sweater",
    price: 79.99,
    description: "Warm wool sweater, ideal for winter.",
    category: "men's clothing",
    image: "https://via.placeholder.com/300x300.png?text=Wool+Sweater",
    rating: { rate: 4.3, count: 51 },
  },
  {
    id: 112,
    title: "Formal Shirt",
    price: 34.99,
    description: "Perfect shirt for office or formal occasions.",
    category: "men's clothing",
    image: "https://via.placeholder.com/300x300.png?text=Formal+Shirt",
    rating: { rate: 4.1, count: 41 },
  },
  {
    id: 113,
    title: "Evening Gown",
    price: 249.99,
    description: "Elegant evening gown for special occasions.",
    category: "women's clothing",
    image: "https://via.placeholder.com/300x300.png?text=Evening+Gown",
    rating: { rate: 4.9, count: 22 },
  },
  {
    id: 114,
    title: "Diamond Ring",
    price: 499.99,
    description: "Sparkling diamond ring for engagements or gifts.",
    category: "jewelery",
    image: "https://via.placeholder.com/300x300.png?text=Diamond+Ring",
    rating: { rate: 5.0, count: 12 },
  },
  {
    id: 115,
    title: "Tablet Pro",
    price: 299.99,
    description: "High-performance tablet for work and entertainment.",
    category: "electronics",
    image: "https://via.placeholder.com/300x300.png?text=Tablet+Pro",
    rating: { rate: 4.4, count: 36 },
  },
  {
    id: 116,
    title: "Running Shoes",
    price: 74.99,
    description: "Lightweight shoes for running and fitness.",
    category: "shoes",
    image: "https://via.placeholder.com/300x300.png?text=Running+Shoes",
    rating: { rate: 4.2, count: 63 },
  },
  {
    id: 117,
    title: "Leather Belt",
    price: 24.99,
    description: "Durable leather belt for everyday use.",
    category: "men's clothing",
    image: "https://via.placeholder.com/300x300.png?text=Leather+Belt",
    rating: { rate: 4.3, count: 27 },
  },
  {
    id: 118,
    title: "Sunglasses",
    price: 49.99,
    description: "Stylish sunglasses to protect your eyes from the sun.",
    category: "women's clothing",
    image: "https://via.placeholder.com/300x300.png?text=Sunglasses",
    rating: { rate: 4.5, count: 33 },
  },
  {
    id: 119,
    title: "Backpack",
    price: 59.99,
    description: "Durable backpack for school or travel.",
    category: "men's clothing",
    image: "https://via.placeholder.com/300x300.png?text=Backpack",
    rating: { rate: 4.4, count: 48 },
  },
  {
    id: 120,
    title: "Perfume",
    price: 39.99,
    description: "Fragrant perfume for daily use.",
    category: "jewelery",
    image: "https://via.placeholder.com/300x300.png?text=Perfume",
    rating: { rate: 4.3, count: 21 },
  },
];

// Static categories
const CATEGORIES = ["men's clothing", "women's clothing", "jewelery", "electronics", "shoes"];

// Export functions
export async function getAllProducts(): Promise<Product[]> {
  return PRODUCTS;
}

export async function getCategories(): Promise<string[]> {
  return CATEGORIES;
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  return PRODUCTS.filter((p) => p.category === category);
}

export function formatPrice(price: number | string | undefined | null): string {
  const value = Number(price);
  if (Number.isNaN(value)) return "--";
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
    description: "Curated women's fashion — clothing, jewellery and accessories",
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