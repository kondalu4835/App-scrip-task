import { getAllProducts, getCategories, buildProductSchema } from "@/lib/api";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import styles from "./page.module.css";

// This page uses SSR via Next.js Server Components.
// Data is fetched at request time (or ISR-revalidated) on the server.
export default async function HomePage() {
  // Parallel SSR data fetching
  const [products, categories] = await Promise.all([
    getAllProducts(),
    getCategories(),
  ]);

  // Build JSON-LD schema for SEO (only if we have products)
  const productSchema = products.length > 0 ? buildProductSchema(products) : null;

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}

      <Header />

      <main className={styles.main} id="main-content">
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <ol className={styles.breadcrumbList}>
            <li>
              <a href="/" className={styles.breadcrumbLink}>Home</a>
            </li>
            <li aria-hidden="true" className={styles.breadcrumbSep}>/</li>
            <li aria-current="page" className={styles.breadcrumbCurrent}>
              Products
            </li>
          </ol>
        </nav>

        {/* Product listing */}
        {products.length > 0 ? (
          <ProductGrid initialProducts={products} categories={categories} />
        ) : (
          <section className={styles.emptyState}> 
            <p>Unable to load products right now. Please try again later.</p>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
