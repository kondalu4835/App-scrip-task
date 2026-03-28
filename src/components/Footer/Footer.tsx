import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        {/* Top row */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <span className={styles.brandLogo}>METTĀ</span>
            <p className={styles.brandTagline}>
              Curated fashion for the modern woman. <br />
              Thoughtfully sourced, beautifully crafted.
            </p>
            <div className={styles.social} aria-label="Social media links">
              {[
                { label: "Instagram", href: "#", icon: "IG" },
                { label: "Pinterest", href: "#", icon: "PT" },
                { label: "Twitter", href: "#", icon: "TW" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={styles.socialLink}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav className={styles.linksGroup} aria-label="Company links">
            <h3 className={styles.groupTitle}>Company</h3>
            <ul className={styles.linkList}>
              {["About Us", "Careers", "Press", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className={styles.link}>{item}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.linksGroup} aria-label="Customer care links">
            <h3 className={styles.groupTitle}>Customer Care</h3>
            <ul className={styles.linkList}>
              {["Contact Us", "FAQs", "Shipping Policy", "Returns & Exchanges", "Track Order"].map((item) => (
                <li key={item}>
                  <a href="#" className={styles.link}>{item}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.linksGroup} aria-label="Quick shop links">
            <h3 className={styles.groupTitle}>Quick Shop</h3>
            <ul className={styles.linkList}>
              {["Women's Clothing", "Jewellery", "Accessories", "New Arrivals", "Sale"].map((item) => (
                <li key={item}>
                  <a href="#" className={styles.link}>{item}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h3 className={styles.groupTitle}>Stay in the Loop</h3>
            <p className={styles.newsletterDesc}>
              Subscribe for curated picks, exclusive offers, and style inspiration.
            </p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter subscription"
                className={styles.emailInput}
              />
              <button className={styles.subscribeBtn} type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} METTĀ. All rights reserved.
          </p>
          <div className={styles.legal}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className={styles.legalLink}>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
