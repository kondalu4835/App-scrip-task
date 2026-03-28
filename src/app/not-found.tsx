import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.desc}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a href="/" className={styles.btn}>
        Back to Shop
      </a>
    </div>
  );
}
