"use client";

import { useState } from "react";
import styles from "./Filters.module.css";

interface FiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
  onClose?: () => void;
}

const PRICE_RANGES = [
  { label: "Under $25", min: 0, max: 25 },
  { label: "$25 – $50", min: 25, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "Over $100", min: 100, max: Infinity },
];

export default function Filters({
  categories,
  activeCategory,
  onCategoryChange,
  onClose,
}: FiltersProps) {
  const [openSection, setOpenSection] = useState<string | null>("category");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <aside className={styles.sidebar} aria-label="Product filters">
      <div className={styles.sidebarHeader}>
        <h2 className={styles.sidebarTitle}>Filters</h2>
        {onClose && (
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close filters">
            <CloseIcon />
          </button>
        )}
      </div>

      {/* Category filter */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionToggle}
          onClick={() => toggleSection("category")}
          aria-expanded={openSection === "category"}
        >
          <span>Category</span>
          <ChevronIcon open={openSection === "category"} />
        </button>

        {openSection === "category" && (
          <div className={styles.sectionBody}>
            <ul className={styles.filterList}>
              <li>
                <label className={styles.filterOption}>
                  <input
                    type="radio"
                    name="category"
                    value=""
                    checked={activeCategory === ""}
                    onChange={() => onCategoryChange("")}
                    className={styles.radio}
                  />
                  <span className={styles.optionLabel}>All Categories</span>
                </label>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <label className={styles.filterOption}>
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={activeCategory === cat}
                      onChange={() => onCategoryChange(cat)}
                      className={styles.radio}
                    />
                    <span className={styles.optionLabel}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Price filter */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionToggle}
          onClick={() => toggleSection("price")}
          aria-expanded={openSection === "price"}
        >
          <span>Price Range</span>
          <ChevronIcon open={openSection === "price"} />
        </button>

        {openSection === "price" && (
          <div className={styles.sectionBody}>
            <ul className={styles.filterList}>
              {PRICE_RANGES.map((range) => (
                <li key={range.label}>
                  <label className={styles.filterOption}>
                    <input
                      type="radio"
                      name="price"
                      value={range.label}
                      checked={selectedPriceRange === range.label}
                      onChange={() => setSelectedPriceRange(range.label)}
                      className={styles.radio}
                    />
                    <span className={styles.optionLabel}>{range.label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Rating filter */}
      <div className={styles.filterSection}>
        <button
          className={styles.sectionToggle}
          onClick={() => toggleSection("rating")}
          aria-expanded={openSection === "rating"}
        >
          <span>Customer Rating</span>
          <ChevronIcon open={openSection === "rating"} />
        </button>

        {openSection === "rating" && (
          <div className={styles.sectionBody}>
            <ul className={styles.filterList}>
              {[4, 3, 2, 1].map((stars) => (
                <li key={stars}>
                  <label className={styles.filterOption}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span className={styles.optionLabel}>
                      {"★".repeat(stars)}{"☆".repeat(4 - stars)}&nbsp; &amp; Up
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Clear */}
      <button
        className={styles.clearBtn}
        onClick={() => {
          onCategoryChange("");
          setSelectedPriceRange(null);
        }}
      >
        Clear All Filters
      </button>
    </aside>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 200ms ease" }}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
