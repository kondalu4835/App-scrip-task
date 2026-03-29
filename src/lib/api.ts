// src/lib/api.ts
import { Product } from "@/types";

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: 101,
    title: "Classic Crewneck T-Shirt",
    price: 19.99,
    description: "Comfortable cotton crewneck, available in multiple colors.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: { rate: 4.2, count: 89 },
  },
  {
    id: 102,
    title: "Slim Fit Jeans",
    price: 49.99,
    description: "Modern cut denim with lightweight stretch.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    rating: { rate: 4.5, count: 114 },
  },
  {
    id: 103,
    title: "Everyday Sneakers",
    price: 64.99,
    description: "Versatile sneakers for everyday wear.",
    category: "shoes",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    rating: { rate: 4.1, count: 75 },
  },
  {
    id: 104,
    title: "Gold Necklace",
    price: 129.99,
    description: "Elegant gold necklace for special occasions.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 4.7, count: 42 },
  },
  {
    id: 105,
    title: "Silver Hoop Earrings",
    price: 39.99,
    description: "Classic silver hoop earrings for everyday wear.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 4.3, count: 67 },
  },
  {
    id: 106,
    title: "Leather Handbag",
    price: 199.99,
    description: "Premium leather handbag with spacious compartments.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: { rate: 4.6, count: 51 },
  },
  {
    id: 107,
    title: "Cotton Summer Dress",
    price: 59.99,
    description: "Lightweight cotton dress perfect for summer.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    rating: { rate: 4.4, count: 38 },
  },
  {
    id: 108,
    title: "Sports Watch",
    price: 89.99,
    description: "Durable sports watch with multiple features.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    rating: { rate: 4.0, count: 29 },
  },
  {
    id: 109,
    title: "Bluetooth Headphones",
    price: 79.99,
    description: "Wireless headphones with excellent sound quality.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    rating: { rate: 4.5, count: 62 },
  },
  {
    id: 110,
    title: "Smartphone Case",
    price: 19.99,
    description: "Protective smartphone case with sleek design.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    rating: { rate: 4.1, count: 45 },
  },
  {
    id: 111,
    title: "Running Shoes",
    price: 74.99,
    description: "Lightweight running shoes for all terrains.",
    category: "shoes",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    rating: { rate: 4.3, count: 56 },
  },
  {
    id: 112,
    title: "Formal Leather Shoes",
    price: 129.99,
    description: "Elegant leather shoes for formal occasions.",
    category: "shoes",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: { rate: 4.6, count: 33 },
  },
  {
    id: 113,
    title: "Denim Jacket",
    price: 89.99,
    description: "Classic denim jacket for casual wear.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    rating: { rate: 4.2, count: 48 },
  },
  {
    id: 114,
    title: "Wool Scarf",
    price: 29.99,
    description: "Warm wool scarf for cold weather.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: { rate: 4.3, count: 27 },
  },
  {
    id: 115,
    title: "Casual Sneakers",
    price: 59.99,
    description: "Comfortable sneakers for daily casual wear.",
    category: "shoes",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX695_t.png",
    rating: { rate: 4.1, count: 50 },
  },
  {
    id: 116,
    title: "Elegant Wristwatch",
    price: 149.99,
    description: "Luxury wristwatch with a sophisticated design.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    rating: { rate: 4.8, count: 22 },
  },
  {
    id: 117,
    title: "Silk Blouse",
    price: 69.99,
    description: "Soft silk blouse for elegant looks.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    rating: { rate: 4.5, count: 31 },
  },
  {
    id: 118,
    title: "Leather Belt",
    price: 39.99,
    description: "Premium leather belt for everyday wear.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: { rate: 4.2, count: 40 },
  },
  {
    id: 119,
    title: "Diamond Ring",
    price: 499.99,
    description: "Exquisite diamond ring for special occasions.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 4.9, count: 15 },
  },
  {
    id: 120,
    title: "Winter Coat",
    price: 159.99,
    description: "Warm and stylish winter coat.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    rating: { rate: 4.6, count: 28 },
  },
];

const DEFAULT_CATEGORIES = ["men's clothing", "women's clothing", "jewelery", "electronics"];

export async function getAllProducts(): Promise<Product[]> {
  // No API calls, return local products
  return DEFAULT_PRODUCTS;
}

export async function getCategories(): Promise<string[]> {
  return DEFAULT_CATEGORIES;
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  return DEFAULT_PRODUCTS.filter((p) => p.category === category);
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