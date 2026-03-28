# Appscrip Task — Product Listing Page (PLP)

A fully functional, SEO-optimised Product Listing Page built with **Next.js 14** (App Router), **TypeScript**, and pure **CSS Modules** — no UI frameworks.

## 🔗 Live Demo

> [https://appscrip-plp.netlify.app](https://appscrip-plp.netlify.app)

## 📦 Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR, ISR, file-based routing |
| Language | TypeScript | Type safety |
| Styling | CSS Modules (zero frameworks) | Minimal deps, scoped styles |
| Data | FakeStore API | Public mock product data |
| Deployment | Netlify + `@netlify/plugin-nextjs` | Free tier, auto-deploy from GitHub |

## ✅ Features

- **Server-Side Rendering (SSR)** — Products fetched on the server via Next.js Server Components. ISR revalidates every hour.
- **Responsive** — Tested on mobile (320px), tablet (768px), and desktop (1440px).
- **SEO** — Page title, meta description, Open Graph, Twitter Card, canonical URL, H1/H2 tags, semantic HTML, alt text on all images, schema.org `ItemList` JSON-LD.
- **Filters** — Category, price range, and rating filters (client-side).
- **Sort** — Recommended, Newest, Popular, Price asc/desc.
- **Wishlist toggle** — Per-card wishlist button with accessible labels.
- **Loading skeleton** — Shimmer animation while fetching.
- **Error boundary** — Graceful error state with retry.
- **404 page** — Custom not-found page.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — metadata, fonts
│   ├── page.tsx            # Home page — SSR data fetch + JSON-LD
│   ├── loading.tsx         # Skeleton loading state
│   ├── error.tsx           # Error boundary
│   └── not-found.tsx       # 404 page
├── components/
│   ├── Header/             # Sticky header, nav, mobile menu
│   ├── Footer/             # Footer with newsletter, links
│   ├── Filters/            # Sidebar filters (category, price, rating)
│   ├── ProductGrid/        # Grid layout + toolbar (sort, filter toggle)
│   └── ProductCard/        # Individual product card
├── lib/
│   └── api.ts              # FakeStore API fetch helpers + schema builder
├── styles/
│   └── globals.css         # CSS variables, reset, utilities
└── types/
    └── index.ts            # TypeScript types
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- Git

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/Appscrip-task-candidate.git
cd Appscrip-task-candidate

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

## 🌐 Deployment to Netlify

### Option A — Drag & Drop

```bash
npm run build
# Drag the .next folder to app.netlify.com
```

### Option B — GitHub Auto-Deploy (recommended)

1. Push repo to GitHub
2. Log in to [netlify.com](https://netlify.com)
3. New site → Import from GitHub
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Add plugin `@netlify/plugin-nextjs` (auto-detected via `netlify.toml`)
7. Deploy

## 📤 GitHub Setup

```bash
git init
git add .
git commit -m "Initial commit: Next.js PLP with SSR, filters, SEO"
git remote add origin https://github.com/YOUR_USERNAME/Appscrip-task-candidate.git
git branch -M main
git push -u origin main
```

## 🔍 SEO Checklist

- [x] `<title>` — Descriptive, keyword-rich
- [x] `<meta name="description">` — Unique, under 160 chars
- [x] Open Graph meta tags
- [x] Twitter Card meta tags
- [x] Canonical URL
- [x] `<h1>` — "Discover Our Products" (one per page)
- [x] `<h2>` — Product titles and filter section headings
- [x] `alt` text on all `<img>` tags (SEO-friendly, descriptive)
- [x] Semantic HTML (`<header>`, `<main>`, `<nav>`, `<footer>`, `<article>`, `<aside>`)
- [x] schema.org `ItemList` JSON-LD structured data
- [x] `robots` meta: index + follow
- [x] Breadcrumb navigation

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| < 480px | 1-column grid, mobile nav |
| 480–768px | 2-column grid |
| 768–1024px | 2-column grid + hidden sidebar |
| 1024–1200px | 3-column grid + sidebar |
| > 1200px | 4-column grid (no sidebar) or 3+sidebar |

## ⚙️ Dependencies

```json
{
  "dependencies": {
    "next": "14.2.3",
    "react": "^18",
    "react-dom": "^18"
  }
}
```

Zero runtime UI libraries. Only Next.js + React.

---

Built for **Appscrip** front-end evaluation.
