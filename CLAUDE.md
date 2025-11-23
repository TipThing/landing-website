# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based landing website for Tipthing. The project uses Astro 5.x with TypeScript strict mode and pnpm as the package manager.

## Development Commands

**Package Manager**: This project uses `pnpm` (v10.21.0+). Do not use npm or yarn.

```bash
# Install dependencies
pnpm install

# Start dev server (http://localhost:4321)
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Run Astro CLI commands
pnpm astro [command]

# Performance analysis (requires build first)
pnpm perf:check          # Bundle analysis and budget validation
pnpm perf:bundle         # Detailed bundle size analysis
pnpm perf:full           # Full performance suite (build + checks)
```

## Project Structure

```
/
├── public/              # Static assets (favicon, images)
├── scripts/             # Performance analysis scripts
├── src/
│   ├── assets/          # Optimized assets (SVGs, images processed by Astro)
│   ├── components/
│   │   ├── interactive/ # React components with client-side interactivity
│   │   ├── layout/      # Layout components (NavBar, Footer)
│   │   ├── sections/    # Page section components
│   │   └── ui/          # Reusable UI components (buttons, cards)
│   ├── layouts/         # Layout wrappers (e.g., Layout.astro)
│   └── pages/           # File-based routing (index.astro = homepage)
├── astro.config.mjs     # Astro configuration with React integration
└── tsconfig.json        # TypeScript config (extends astro/tsconfigs/strict)
```

## Architecture Notes

- **Hybrid rendering**: Astro components (static) + React components (interactive with `client:*` directives)
- **React integration**: Configured for selective hydration in `components/ui/`, `components/interactive/`, and `components/layout/NavBar.tsx`
- **File-based routing**: Pages in `src/pages/` automatically become routes
- **Component-scoped styles**: `<style>` tags in `.astro` files are scoped by default
- **Asset handling**:
  - `src/assets/` → Optimized by Astro, import and use `.src` property
  - `public/` → Served as-is, reference with `/filename`
- **TypeScript**: Strict mode enabled, path alias `@/*` maps to `src/*`
- **Styling**: Tailwind CSS v4 via Vite plugin
- **Performance budgets**: JS ≤150KB, CSS ≤30KB, Total ≤300KB (gzipped)

## Framework-Specific Patterns

### Astro Component Structure
```astro
---
// Component script (runs at build time)
import Component from './Component.astro';
const data = await fetchData();
---

<!-- Template -->
<div>{data}</div>

<style>
  /* Scoped styles */
</style>
```

### Asset Imports
```astro
---
import logo from '../assets/logo.svg'; // Optimized asset
---
<img src={logo.src} alt="Logo" />
<img src="/favicon.svg" alt="Favicon" /> <!-- Public asset -->
```

### React Component Integration
```astro
---
import InteractiveButton from '@/components/ui/StandardButton.tsx';
---

<!-- Client-side hydration strategies -->
<InteractiveButton client:load />      <!-- Hydrate immediately -->
<InteractiveButton client:idle />      <!-- Hydrate when browser idle -->
<InteractiveButton client:visible />   <!-- Hydrate when visible -->
```

## Performance Optimization

- **Code splitting**: React, Framer Motion, and Lucide icons split into separate chunks
- **CSS optimization**: Inline critical CSS, code-split per component
- **Dev warmup**: Pre-warms interactive components and layouts for faster HMR
- **Prefetch**: Configured for hover strategy (not prefetch-all)
- **Monitoring**: Run `pnpm perf:full` before deployment to validate budgets

## Git Workflow

- **Main branch**: `master`
- Before making changes, create a feature branch
- Recent migration from Next.js to Astro (many files deleted/modified in git status)
