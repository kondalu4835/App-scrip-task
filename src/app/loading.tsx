import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      {/* Toolbar skeleton */}
      <div className={styles.toolbar}>
        <div className={`${styles.skel} ${styles.skelShort}`} />
        <div className={`${styles.skel} ${styles.skelShort}`} />
      </div>

      <div className={styles.body}>
        {/* Sidebar skeleton */}
        <div className={styles.sidebar}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className={`${styles.skel} ${styles.skelLine}`} />
          ))}
        </div>

        {/* Grid skeleton */}
        <div className={styles.grid}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className={styles.cardSkel}>
              <div className={`${styles.skel} ${styles.skelImg}`} />
              <div className={`${styles.skel} ${styles.skelText}`} />
              <div className={`${styles.skel} ${styles.skelTextShort}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
