# Art Direction & UI/UX Strategy: Felu Modak Next.js Brand Experience

## 1. Visual Theme & Color Tokens

The visual identity is designed to feel like a premium food editorial publication.

### Palette (CSS variables configured in globals.css)
- **Background Cream:** `hsl(38 60% 97%)` (#FAF7F0)
- **Secondary Chamois:** `hsl(38 50% 92%)` (#F3EBDD)
- **Accents:**
  - Sindoor Crimson: `hsl(355 75% 38%)` (#AB1827)
  - Kesar Saffron: `hsl(28 85% 53%)` (#F07E26)
  - Burnished Gold: `hsl(42 62% 54%)` (#D4AF37)
- **Text Charcoal:** `hsl(200 12% 12%)` (#1A1D20)

### Typography
- **Display Serif:** Google Font `Playfair Display`. Elegant, historical, bold contrast.
- **Body & Controls:** Google Font `Inter`. High legibility, geometric, modern.

---

## 2. Visual Assets & Media Strategy
Instead of empty placeholders or procedural WebGL shaders, the site displays real, high-resolution food photography assets:
- **Jolbhora Sandesh:** `/assets/images/jolbhora.png` (close-up photography showcasing the jaggery core on a gold plate).
- **Saffron Rabri:** `/assets/images/rabri.png` (creamy rabri inside a traditional terracotta pot).
- **Heritage Gaja / Assorted:** `/assets/images/sweets.png` (crisp sweets on a brass tray).
- **Heritage Giftbox:** `/assets/images/giftbox.png` (engraved teakwood luxury box).

---

## 3. Micro-interactions
- **Asymmetrical Cards:** Product frames use solid hairline borders and scale slightly (`hover:scale-102`) on hover.
- **Cart slide-ins:** Slide-out crate panel overlays with smooth side-in transitions.
- **Scroll Guide:** Clean vertical indicators guiding readers down the page.
