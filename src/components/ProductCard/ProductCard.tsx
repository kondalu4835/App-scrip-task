"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { formatPrice } from "@/lib/api";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false);
  const [imgError, setImgError] = useState(false);

  /* SEO-friendly image name derived from product title */
  const seoAltText = `${product.title} – ${product.category} product image`;

  return (
    <article className={styles.card} aria-label={product.title}>
      {/* Image */}
      <div className={styles.imageWrap}>
        <a href="#" aria-label={`View details for ${product.title}`}>
          {!imgError ? (
            <Image
              src={product.image}
              alt={seoAltText}
              width={400}
              height={480}
              className={styles.image}
              onError={() => setImgError(true)}
              loading="lazy"
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          ) : (
            <div className={styles.imgPlaceholder} aria-hidden="true">
              <span>No Image</span>
            </div>
          )}
        </a>

        {/* Wishlist button */}
        <button
          className={`${styles.wishlistBtn} ${wishlisted ? styles.wishlisted : ""}`}
          onClick={() => setWishlisted(!wishlisted)}
          aria-label={
            wishlisted
              ? `Remove ${product.title} from wishlist`
              : `Add ${product.title} to wishlist`
          }
        >
          <HeartIcon filled={wishlisted} />
        </button>

        {/* Category badge */}
        <span className={styles.categoryBadge}>{product.category}</span>
      </div>

      {/* Info */}
      <div className={styles.info}>
        <h2 className={styles.title}>
          <a href="#" aria-label={`View ${product.title}`}>
            {product.title}
          </a>
        </h2>

        <div className={styles.meta}>
          <div className={styles.rating} aria-label={`Rating: ${product.rating.rate} out of 5, ${product.rating.count} reviews`}>
            <StarIcon />
            <span className={styles.ratingValue}>{product.rating.rate.toFixed(1)}</span>
            <span className={styles.ratingCount}>({product.rating.count})</span>
          </div>
        </div>

        <div className={styles.priceRow}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          <button className={styles.addBtn} aria-label={`Add ${product.title} to cart`}>
            + Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
