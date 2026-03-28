"use client";

import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header} role="banner">
      {/* Top announcement bar */}
      <div className={styles.announcement}>
        <p>Free worldwide shipping on all orders over $100 &nbsp;|&nbsp; Easy 30-day returns</p>
      </div>

      {/* Main header */}
      <div className={styles.headerMain}>
        <div className={styles.headerInner}>
          {/* Left nav */}
          <nav className={styles.navLeft} aria-label="Primary left navigation">
            <ul className={styles.navList}>
              <li><a href="#" className={styles.navLink}>Shop</a></li>
              <li><a href="#" className={styles.navLink}>Skills</a></li>
              <li><a href="#" className={styles.navLink}>Stories</a></li>
              <li><a href="#" className={styles.navLink}>About</a></li>
              <li><a href="#" className={styles.navLink}>Contact Us</a></li>
            </ul>
          </nav>

          {/* Logo */}
          <div className={styles.logoWrap}>
            <a href="/" aria-label="METTĀ Home" className={styles.logoLink}>
              <span className={styles.logoText}>METTĀ</span>
              <span className={styles.logoSub}>YOU DESERVE IT</span>
            </a>
          </div>

          {/* Right nav / icons */}
          <div className={styles.navRight}>
            <button className={styles.iconBtn} aria-label="Search">
              <SearchIcon />
            </button>
            <button className={styles.iconBtn} aria-label="Account">
              <AccountIcon />
            </button>
            <button className={styles.iconBtn} aria-label="Wishlist">
              <HeartIcon />
            </button>
            <button className={styles.iconBtn} aria-label="Shopping cart, 0 items">
              <CartIcon />
              <span className={styles.cartBadge}>0</span>
            </button>
            <button
              className={styles.iconBtn}
              aria-label="Open language selector"
            >
              <span className={styles.langLabel}>ENG</span>
              <ChevronIcon />
            </button>

            {/* Mobile hamburger */}
            <button
              className={styles.hamburger}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className={mobileMenuOpen ? styles.barOpen : styles.bar} />
              <span className={mobileMenuOpen ? styles.barOpen : styles.bar} />
              <span className={mobileMenuOpen ? styles.barOpen : styles.bar} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className={styles.mobileMenu} aria-label="Mobile navigation">
          <ul className={styles.mobileNavList}>
            {["Shop", "Skills", "Stories", "About", "Contact Us"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={styles.mobileNavLink}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  );
}
function AccountIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
