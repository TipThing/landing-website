# UI Components Setup

## Required Dependencies

These components require React and Framer Motion to be installed. Add them to your project:

```bash
pnpm add react react-dom framer-motion
pnpm add -D @types/react @types/react-dom
```

## Astro Configuration

Ensure your `astro.config.mjs` has the React integration enabled:

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
});
```

If you don't have the React integration installed:

```bash
pnpm astro add react
```

## Tailwind CSS

These components use Tailwind CSS classes. Ensure Tailwind is configured:

```bash
pnpm astro add tailwind
```

Your `tailwind.config.mjs` should include the components directory:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Path Aliases

For the `@/components/ui/*` import pattern, ensure your `tsconfig.json` has path mapping:

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## Verification

After setup, verify the components work by creating a test page:

```bash
# Create test page
mkdir -p src/pages
cat > src/pages/test-components.astro << 'EOF'
---
import { StandardButton } from '@/components/ui/StandardButton';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Component Test</title>
  </head>
  <body class="bg-black min-h-screen p-8">
    <div class="max-w-4xl mx-auto space-y-8">
      <h1 class="text-white text-4xl font-bold">Component Test</h1>

      <StandardButton client:load variant="primary">
        Test Button
      </StandardButton>

      <SpotlightCard client:visible>
        <div class="p-6">
          <h2 class="text-white text-2xl">Test Card</h2>
          <p class="text-zinc-400 mt-2">Hover to see spotlight effect</p>
        </div>
      </SpotlightCard>
    </div>
  </body>
</html>
EOF

# Run dev server
pnpm dev
```

Visit `http://localhost:4321/test-components` to verify the components work correctly.

## Troubleshooting

### "Cannot find module 'react'"

Install React dependencies:
```bash
pnpm add react react-dom
```

### "Cannot find module 'framer-motion'"

Install Framer Motion:
```bash
pnpm add framer-motion
```

### Import path errors with '@/components/ui'

Update `tsconfig.json` with path aliases (see Path Aliases section above).

### Components not rendering

Ensure you're using a client directive (`client:load`, `client:visible`, etc.) on React components in Astro files.

### Tailwind classes not working

Run `pnpm astro add tailwind` and verify `tailwind.config.mjs` includes your component paths.
