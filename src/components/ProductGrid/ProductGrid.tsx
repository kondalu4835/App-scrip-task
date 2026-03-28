"use client";

import { useState, useMemo } from "react";
import { Product, SortOption } from "@/types";
import ProductCard from "@/components/ProductCard/ProductCard";
import Filters from "@/components/Filters/Filters";
import styles from "./ProductGrid.module.css";

interface ProductGridProps {
  initialProducts: Product[];
  categories: string[];
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "recommended", label: "Recommended" },
  { value: "newest", label: "Newest First" },
  { value: "popular", label: "Most Popular" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

export default function ProductGrid({
  initialProducts,
  categories,
}: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("recommended");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(true);

  const filtered = useMemo(() => {
    let list = [...initialProducts];

    if (activeCategory) {
      list = list.filter((p) => p.category === activeCategory);
    }

    switch (sortBy) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        list.sort((a, b) => b.rating.count - a.rating.count);
        break;
      case "newest":
        list.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return list;
  }, [initialProducts, activeCategory, sortBy]);

  return (
    <section className={styles.section} aria-label="Product listing">
      {/* ===== HERO STRIP ===== */}
      <div className={styles.heroStrip}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Discover Our Products</h1>
          <p className={styles.heroDesc}>
            Lorem ipsum dolor sit amet consectetur. Amet est placerat in
            pharetra magna adipiscing ornare aliquam.
          </p>
        </div>
      </div>

      {/* ===== TOOLBAR ===== */}
      <div className={styles.toolbar}>
        <div className={styles.toolbarInner}>
          <div className={styles.toolbarLeft}>
            <span className={styles.countLabel}>
              {filtered.length} Items
            </span>
            <button
              className={styles.toggleFiltersBtn}
              onClick={() => setShowFilters(!showFilters)}
              aria-pressed={showFilters}
              aria-label={showFilters ? "Hide filters" : "Show filters"}
            >
              <FilterIcon />
              <span>{showFilters ? "Hide Filter" : "Show Filter"}</span>
            </button>
          </div>

          <div className={styles.toolbarRight}>
            {/* Mobile filter button */}
            <button
              className={styles.mobileFilterBtn}
              onClick={() => setFiltersOpen(true)}
              aria-label="Open filters"
            >
              <FilterIcon />
              <span>Filter</span>
            </button>

            {/* Sort dropdown */}
            <div className={styles.sortWrap}>
              <label htmlFor="sort-select" className={styles.sortLabel}>
                Sort by:
              </label>
              <select
                id="sort-select"
                className={styles.sortSelect}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort products"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BODY ===== */}
      <div className={styles.body}>
        {/* Sidebar Filters – desktop */}
        {showFilters && (
          <div className={styles.desktopSidebar}>
            <Filters
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        )}

        {/* Mobile overlay filters */}
        {filtersOpen && (
          <>
            <div
              className={styles.overlay}
              onClick={() => setFiltersOpen(false)}
              aria-hidden="true"
            />
            <Filters
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={(cat) => {
                setActiveCategory(cat);
                setFiltersOpen(false);
              }}
              onClose={() => setFiltersOpen(false)}
            />
          </>
        )}

        {/* Grid */}
        <div
          className={`${styles.grid} ${showFilters ? styles.gridWithSidebar : styles.gridFull}`}
          aria-live="polite"
          aria-atomic="false"
        >
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className={styles.empty}>
              <p>No products found for this filter.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FilterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
    </svg>
  );
}
