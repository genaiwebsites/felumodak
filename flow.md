# Technical Architecture & Data Flow: Felu Modak Next.js Brand Experience

## 1. Single-Page Scroll Structure

```
Scroll: 0%  ──────────────────> 30% ─────────────────> 70% ───────────────> 100%
Hero Section                   Timeline                Masterpieces          The Craft & Footer
(Asymmetrical Typography &     (Chronological history  (Real product images  (Story details &
Visual Image Frame)            nodes)                  & Add CTAs)           D2C Drawer checkout)
```

---

## 2. Component Structure (Next.js App Router)

```
src/
├── app/
│   ├── layout.js              # Base html, Google Fonts load, SEO metadata
│   ├── globals.css            # Tailwind CSS v4 directives & theme configurations
│   └── page.js                # Root page mounting CartProvider and components
│
├── context/
│   └── CartContext.js         # Client-side state cart actions & localstorage syncing
│
├── data/
│   └── menuData.json          # Authentic crawled menu & timeline datasets
│
└── components/
    ├── layout/
    │   ├── Navigation.js      # Sticky navigation header
    │   └── Footer.js          # Location details and trust indicators
    │
    ├── checkout/
    │   └── CartDrawer.js      # Slide-out cart crate with engravings & scheduled delivery
    │
    └── sections/
        ├── Hero.js            # Editorial text overlays & product image display
        ├── Timeline.js        # Timeline points & topographic contour curves
        ├── Masterpieces.js    # Catalog grid using real generated image assets
        └── TheCraft.js        # 스토리 cards on artisan confectioners
```

---

## 3. Data Integration & State Pipeline
- **Cart Syncing:** Cart states are captured inside a client context and saved automatically to `localStorage` to preserve items across page reloads.
- **Image Loader:** Static Next.js page reads path files directly from the `/public/assets/images/` folder, ensuring zero layout shift.
- **Checkout Confetti:** Successfully submitted checkout details clear local state and trigger the `canvas-confetti` particles effect.
