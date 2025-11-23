# Quick Start Guide

Get started with interactive visual components in 3 simple steps.

## 1. Import Components

### Option A: Direct Import (Recommended)
```astro
---
import { WorldMap } from '@/components/interactive/WorldMap';
import { LogableUI } from '@/components/interactive/LogableUI';
import { WebAppVisual } from '@/components/interactive/WebAppVisual';
---
```

### Option B: Barrel Import
```astro
---
import { WorldMap, LogableUI, WebAppVisual } from '@/components/interactive';
---
```

## 2. Add to Your Page

```astro
---
import { WorldMap } from '@/components/interactive/WorldMap';
---

<html>
  <body>
    <div class="w-full h-96">
      <WorldMap client:visible />
    </div>
  </body>
</html>
```

## 3. Choose Hydration Strategy

### `client:visible` (Best for Most Cases)
Hydrates when component enters viewport.

```astro
<WorldMap client:visible />
```

**Use when:**
- Component is below the fold
- Performance is critical
- User may not scroll to component

### `client:idle`
Hydrates when browser is idle.

```astro
<LogableUI client:idle />
```

**Use when:**
- Component is visible but not immediately interactive
- You want to prioritize initial page load
- Animation can wait a few milliseconds

### `client:load`
Hydrates immediately on page load.

```astro
<WebAppVisual client:load />
```

**Use when:**
- Component is above the fold
- Immediate interactivity is critical
- Component is a key part of user experience

## Common Patterns

### Hero Section
```astro
<section class="h-screen">
  <WorldMap client:load className="w-full h-full" />
</section>
```

### Content Grid
```astro
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div class="h-96">
    <LogableUI client:visible />
  </div>
  <div class="h-96">
    <WebAppVisual client:visible />
  </div>
</div>
```

### Full Page Layout
```astro
---
import { WorldMap, LogableUI, WebAppVisual } from '@/components/interactive';
---

<div class="space-y-16 py-16">
  <!-- Hero -->
  <section class="h-screen">
    <WorldMap client:load />
  </section>

  <!-- Features -->
  <section class="container mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="h-96">
        <LogableUI client:visible />
      </div>
      <div class="h-96">
        <WebAppVisual client:visible />
      </div>
    </div>
  </section>
</div>
```

## Styling

### Custom Container
```astro
<div class="relative rounded-xl overflow-hidden shadow-2xl">
  <WorldMap client:visible className="w-full h-[600px]" />
</div>
```

### Dark Mode Integration
```astro
<div class="dark:bg-zinc-950 bg-white">
  <LogableUI client:visible className="w-full h-96" />
</div>
```

### Responsive Sizing
```astro
<div class="h-64 md:h-96 lg:h-[600px]">
  <WebAppVisual client:visible className="w-full h-full" />
</div>
```

## Troubleshooting

### Component Not Showing
**Problem:** Blank space where component should be

**Solution:** Check hydration directive is set
```astro
<!-- Wrong -->
<WorldMap />

<!-- Right -->
<WorldMap client:visible />
```

### Animations Not Working
**Problem:** Components render but don't animate

**Solution:** Ensure Framer Motion is installed
```bash
pnpm list framer-motion
# Should show: framer-motion 12.x.x
```

### TypeScript Errors
**Problem:** Import errors or type mismatches

**Solution:** Verify tsconfig.json has path alias
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### Slow Performance
**Problem:** Laggy animations or slow page load

**Solutions:**
1. Use `client:visible` instead of `client:load`
2. Reduce number of components on page
3. Add loading state while hydrating

```astro
<div class="relative">
  <!-- Loading skeleton -->
  <div class="absolute inset-0 bg-zinc-900 animate-pulse" />

  <!-- Component -->
  <WorldMap client:visible />
</div>
```

## Next Steps

- View [README.md](./README.md) for detailed documentation
- Check [demo-interactive.astro](../../pages/demo-interactive.astro) for live examples
- Customize animations and styling for your design system

## Support

For issues or questions:
1. Check TypeScript errors with `pnpm astro check`
2. Review browser console for hydration errors
3. Verify all dependencies are installed
4. Test in different browsers (Chrome, Firefox, Safari)

## Performance Checklist

- [ ] Use `client:visible` for below-the-fold components
- [ ] Use `client:load` sparingly (only for above-the-fold)
- [ ] Test on slow 3G network (DevTools throttling)
- [ ] Check Lighthouse performance score
- [ ] Verify animations run at 60fps (DevTools Performance)
- [ ] Test with reduced motion preferences enabled
- [ ] Validate accessibility with screen reader
