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

  // Build JSON-LD schema for SEO
  const productSchema = buildProductSchema(products);

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

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
        <ProductGrid initialProducts={products} categories={categories} />
      </main>

      <Footer />
    </>
  );
}
