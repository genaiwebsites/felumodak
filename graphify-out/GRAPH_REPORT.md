# Graph Report - FeluModak  (2026-06-08)

## Corpus Check
- 44 files · ~167,283 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 325 nodes · 317 edges · 30 communities (24 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a737b3a6`
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
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]

## God Nodes (most connected - your core abstractions)
1. `GSAP Core` - 16 edges
2. `useCart()` - 15 edges
3. `GSAP ScrollTrigger` - 15 edges
4. `GSAP Plugins` - 14 edges
5. `GSAP with Vue, Svelte, and Other Frameworks` - 11 edges
6. `GSAP Performance` - 11 edges
7. `GSAP with React` - 11 edges
8. `GSAP Timeline` - 11 edges
9. `skills` - 9 edges
10. `gsap.utils` - 9 edges

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

## Communities (30 total, 6 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (15): CartDrawer(), CartContext, CartProvider(), useCart(), Navbar(), Navigation(), CraftSection(), PILLARS_DATA (+7 more)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (24): dependencies, canvas-confetti, framer-motion, gsap, lucide-react, next, react, react-dom (+16 more)

### Community 2 - "Community 2"
Cohesion: 0.18
Nodes (8): menu, shop, founded, location, name, patrons, story, timeline

### Community 3 - "Community 3"
Cohesion: 0.05
Nodes (37): computedHash, skillPath, source, sourceType, computedHash, skillPath, source, sourceType (+29 more)

### Community 4 - "Community 4"
Cohesion: 0.29
Nodes (6): 1. Visual Theme & Color Tokens, 2. Visual Assets & Media Strategy, 3. Micro-interactions, Art Direction & UI/UX Strategy: Felu Modak Next.js Brand Experience, Palette (CSS variables configured in globals.css), Typography

### Community 5 - "Community 5"
Cohesion: 0.33
Nodes (4): barlow, barlowCondensed, cormorant, metadata

### Community 6 - "Community 6"
Cohesion: 0.33
Nodes (5): 1. Product Vision & Value Proposition, 2. Technical Stack, 3. Product Catalog (Crawled Content), Product Requirements Document (PRD): Felu Modak Next.js Brand Experience, The Objective

### Community 7 - "Community 7"
Cohesion: 0.06
Nodes (30): Best practices, CustomBounce, CustomEase, CustomWiggle, Development, Do Not, DrawSVG (DrawSVGPlugin), EasePack (+22 more)

### Community 8 - "Community 8"
Cohesion: 0.40
Nodes (4): 1. Single-Page Scroll Structure, 2. Component Structure (Next.js App Router), 3. Data Integration & State Pipeline, Technical Architecture & Data Flow: Felu Modak Next.js Brand Experience

### Community 9 - "Community 9"
Cohesion: 0.50
Nodes (3): compilerOptions, paths, @/*

### Community 10 - "Community 10"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 20 - "Community 20"
Cohesion: 0.07
Nodes (26): Arrays and Collections, Best practices, clamp(min, max, value?), Clamping and Ranges, distribute(config), Do Not, getUnit(value), gsap.utils (+18 more)

### Community 21 - "Community 21"
Cohesion: 0.10
Nodes (20): Accessibility and responsive (gsap.matchMedia()), Common vars, Core Tween Methods, Custom: use CustomEase (plugin), Defaults, Do Not, Easing, Function-based values (+12 more)

### Community 22 - "Community 22"
Cohesion: 0.12
Nodes (14): Basic Trigger, Do Not, GSAP ScrollTrigger, Horizontal scroll (containerAnimation), Key config options, Learn More, Markers (Development), Official GSAP best practices (+6 more)

### Community 24 - "Community 24"
Cohesion: 0.15
Nodes (12): Do Not, GSAP with Vue, Svelte, and Other Frameworks, Learn More, Nuxt 4, Principles (All Frameworks), Scoping Selectors, ScrollTrigger Cleanup, Svelte (+4 more)

### Community 25 - "Community 25"
Cohesion: 0.15
Nodes (12): Best practices, Context-Safe Callbacks, Dependency array, scope, and revertOnUpdate, Do Not, gsap.context() in useEffect (when useGSAP isn't used), GSAP with React, Installation, Learn More (+4 more)

### Community 26 - "Community 26"
Cohesion: 0.17
Nodes (11): Batch Reads and Writes, Best practices, Do Not, Frequently updated properties (e.g. mouse followers), GSAP Performance, Many Elements (Stagger, Lists), Prefer Transform and Opacity, Reduce Simultaneous Work (+3 more)

### Community 27 - "Community 27"
Cohesion: 0.17
Nodes (11): Controlling Playback, Creating a Timeline, Do Not, GSAP Timeline, Labels, Nesting Timelines, Official GSAP Best practices, Position Parameter (+3 more)

### Community 28 - "Community 28"
Cohesion: 0.33
Nodes (6): DOM / UI, Draggable, Flip, Inertia (InertiaPlugin), More information, Observer

### Community 29 - "Community 29"
Cohesion: 0.40
Nodes (5): computedHash, skillPath, source, sourceType, gsap-plugins

## Knowledge Gaps
- **204 isolated node(s):** `eslintConfig`, `@/*`, `nextConfig`, `name`, `version` (+199 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `skills` connect `Community 3` to `Community 29`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Why does `GSAP Plugins` connect `Community 7` to `Community 28`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `@/*`, `nextConfig` to the rest of the system?**
  _204 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.05263157894736842 - nodes in this community are weakly interconnected._
- **Should `Community 7` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._