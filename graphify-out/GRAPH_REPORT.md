# Graph Report - FeluModak  (2026-06-07)

## Corpus Check
- 35 files · ~126,175 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 130 nodes · 131 edges · 23 communities (15 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4dc8026a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 20|Community 20]]

## God Nodes (most connected - your core abstractions)
1. `useCart()` - 15 edges
2. `shop` - 6 edges
3. `scripts` - 5 edges
4. `Product Requirements Document (PRD): Felu Modak Next.js Brand Experience` - 4 edges
5. `Art Direction & UI/UX Strategy: Felu Modak Next.js Brand Experience` - 4 edges
6. `Technical Architecture & Data Flow: Felu Modak Next.js Brand Experience` - 4 edges
7. `1. Visual Theme & Color Tokens` - 3 edges
8. `compilerOptions` - 2 edges
9. `paths` - 2 edges
10. `CartDrawer()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `CartDrawer()` --calls--> `useCart()`  [EXTRACTED]
  src/components/checkout/CartDrawer.js → src/context/CartContext.js
- `Navbar()` --calls--> `useCart()`  [EXTRACTED]
  src/components/layout/Navbar.js → src/context/CartContext.js
- `Navigation()` --calls--> `useCart()`  [EXTRACTED]
  src/components/layout/Navigation.js → src/context/CartContext.js
- `CraftSection()` --calls--> `useCart()`  [EXTRACTED]
  src/components/sections/CraftSection.js → src/context/CartContext.js
- `FestiveSection()` --calls--> `useCart()`  [EXTRACTED]
  src/components/sections/FestiveSection.js → src/context/CartContext.js

## Import Cycles
- None detected.

## Communities (23 total, 8 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.13
Nodes (13): CartDrawer(), CartContext, CartProvider(), useCart(), Navbar(), Navigation(), CraftSection(), PILLARS_DATA (+5 more)

### Community 1 - "Community 1"
Cohesion: 0.14
Nodes (13): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, name, private, scripts (+5 more)

### Community 2 - "Community 2"
Cohesion: 0.18
Nodes (8): menu, shop, founded, location, name, patrons, story, timeline

### Community 3 - "Community 3"
Cohesion: 0.18
Nodes (11): dependencies, canvas-confetti, framer-motion, gsap, lucide-react, next, react, react-dom (+3 more)

### Community 4 - "Community 4"
Cohesion: 0.29
Nodes (6): 1. Visual Theme & Color Tokens, 2. Visual Assets & Media Strategy, 3. Micro-interactions, Art Direction & UI/UX Strategy: Felu Modak Next.js Brand Experience, Palette (CSS variables configured in globals.css), Typography

### Community 5 - "Community 5"
Cohesion: 0.33
Nodes (4): barlow, barlowCondensed, cormorant, metadata

### Community 6 - "Community 6"
Cohesion: 0.33
Nodes (5): 1. Product Vision & Value Proposition, 2. Technical Stack, 3. Product Catalog (Crawled Content), Product Requirements Document (PRD): Felu Modak Next.js Brand Experience, The Objective

### Community 8 - "Community 8"
Cohesion: 0.40
Nodes (4): 1. Single-Page Scroll Structure, 2. Component Structure (Next.js App Router), 3. Data Integration & State Pipeline, Technical Architecture & Data Flow: Felu Modak Next.js Brand Experience

### Community 9 - "Community 9"
Cohesion: 0.50
Nodes (3): compilerOptions, paths, @/*

### Community 10 - "Community 10"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **58 isolated node(s):** `eslintConfig`, `@/*`, `nextConfig`, `name`, `version` (+53 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 3` to `Community 1`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `@/*`, `nextConfig` to the rest of the system?**
  _58 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.1282051282051282 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._