export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type SortOption =
  | "recommended"
  | "newest"
  | "popular"
  | "price-asc"
  | "price-desc";

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  rating: number | null;
}
