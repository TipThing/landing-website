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
```

## Project Structure

```
/
├── public/           # Static assets (favicon, images)
├── src/
│   ├── assets/       # Optimized assets (SVGs, images processed by Astro)
│   ├── components/   # Astro components (.astro files)
│   ├── layouts/      # Layout components (e.g., Layout.astro)
│   └── pages/        # File-based routing (index.astro = homepage)
├── astro.config.mjs  # Astro configuration
└── tsconfig.json     # TypeScript config (extends astro/tsconfigs/strict)
```

## Architecture Notes

- **File-based routing**: Pages in `src/pages/` automatically become routes
- **Component-scoped styles**: `<style>` tags in `.astro` files are scoped by default
- **Asset handling**:
  - `src/assets/` → Optimized by Astro, import and use `.src` property
  - `public/` → Served as-is, reference with `/filename`
- **TypeScript**: Strict mode enabled, all files should follow strict typing

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

## Git Workflow

- **Main branch**: `master`
- Before making changes, create a feature branch
- Recent migration from Next.js to Astro (many files deleted/modified in git status)
