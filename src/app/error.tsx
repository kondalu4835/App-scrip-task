"use client";

import styles from "./error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Something went wrong</h2>
      <p className={styles.desc}>{error.message || "Failed to load products. Please try again."}</p>
      <button className={styles.btn} onClick={reset}>
        Try Again
      </button>
    </div>
  );
}
