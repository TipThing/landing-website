# Interactive Visual Components

High-performance, accessible React components optimized for Astro's island architecture. These components feature Framer Motion animations and are designed for viewport-based hydration.

## Components

### WorldMap

Animated world map visualization with connection paths and traveling data points.

**Features:**
- SVG-based world outline with dot pattern background
- Animated connection paths using quadratic bezier curves
- Traveling dots along paths with randomized delays
- Grayscale aesthetic with opacity effects

**Usage:**

```astro
---
import { WorldMap } from '@/components/interactive/WorldMap';
---

<WorldMap client:visible className="w-full h-96" />
```

**Props:**
- `className?: string` - Additional CSS classes
- `ariaLabel?: string` - Custom ARIA label for accessibility

**Performance:**
- GPU-accelerated CSS transforms
- Optimized SVG path rendering
- Will-change hints on animated elements
- Lazy hydration with `client:visible`

**Accessibility:**
- ARIA labels for screen readers
- Semantic SVG structure
- Reduced motion support via CSS

---

### LogableUI

Industrial dashboard with real-time equipment monitoring widgets (silo, conveyor, pump, weigh bin).

**Features:**
- Four animated industrial equipment widgets
- Real-time visual feedback
- Hover interactions with smooth transitions
- Grainy gradient overlays for industrial aesthetic

**Usage:**

```astro
---
import { LogableUI } from '@/components/interactive/LogableUI';
---

<LogableUI client:visible className="w-full h-96" />
```

**Props:**
- `className?: string` - Additional CSS classes

**Widgets:**
1. **SiloWidget** - Animated fluid level indicator with capacity percentage
2. **ConveyorWidget** - Moving belt with traveling packages
3. **PumpWidget** - Rotating fan icon with RPM display
4. **WeighBinWidget** - Live weight reading with load indicators

**Performance:**
- GPU-accelerated animations
- Optimized SVG rendering for textures
- Minimal re-renders
- Efficient infinite loop animations

**Accessibility:**
- ARIA labels on all interactive widgets
- Keyboard navigation support (Tab, Enter, Space)
- Semantic HTML structure
- Screen reader friendly status indicators

---

### WebAppVisual

Interactive code editor visualization with synchronized UI preview.

**Features:**
- Syntax-highlighted code editor panel
- Real-time UI preview panel
- Synchronized hover states between code and UI
- Smooth transitions and visual feedback
- Keyboard navigation support

**Usage:**

```astro
---
import { WebAppVisual } from '@/components/interactive/WebAppVisual';
---

<WebAppVisual client:visible className="w-full h-96" />
```

**Props:**
- `className?: string` - Additional CSS classes

**Interactive Elements:**
- Hover over code elements to highlight corresponding UI components
- Keyboard navigation with Tab, Enter, and Space keys
- Visual feedback with color changes and background highlights

**Performance:**
- Optimized hover state management with useState
- GPU-accelerated transitions
- Minimal re-renders
- Will-change hints on animated elements

**Accessibility:**
- Full keyboard navigation support
- ARIA labels for all interactive elements
- Focus management for hover interactions
- Screen reader friendly code structure

---

## Installation

Dependencies are already installed in the project:

```bash
pnpm add framer-motion lucide-react react react-dom @types/react @types/react-dom
```

## Astro Integration

### Hydration Strategies

**Recommended: `client:visible`**
```astro
<WorldMap client:visible />
```
Hydrates when component enters viewport. Best for below-the-fold components.

**Alternative: `client:idle`**
```astro
<LogableUI client:idle />
```
Hydrates when browser is idle. Good for non-critical animations.

**Eager: `client:load`**
```astro
<WebAppVisual client:load />
```
Hydrates immediately. Use sparingly for above-the-fold critical components.

### Example Layout

```astro
---
import { WorldMap } from '@/components/interactive/WorldMap';
import { LogableUI } from '@/components/interactive/LogableUI';
import { WebAppVisual } from '@/components/interactive/WebAppVisual';
---

<div class="space-y-8">
  <!-- Hero section - load immediately -->
  <section class="h-screen">
    <WorldMap client:load className="w-full h-full" />
  </section>

  <!-- Below fold - lazy load on viewport -->
  <section class="h-96">
    <LogableUI client:visible className="w-full h-full" />
  </section>

  <section class="h-96">
    <WebAppVisual client:visible className="w-full h-full" />
  </section>
</div>
```

## Performance Considerations

### GPU Acceleration

All components use GPU-accelerated CSS properties:
- `transform` instead of `top/left`
- `opacity` instead of `visibility`
- `will-change` hints on animated elements

### Animation Performance

**Framer Motion Optimization:**
- Use `animate` prop instead of CSS transitions
- Leverage hardware acceleration with transforms
- Minimize layout thrashing with `will-change`

**Best Practices:**
```tsx
// Good - GPU accelerated
<motion.div animate={{ x: 100, opacity: 0.5 }} />

// Avoid - triggers layout
<motion.div animate={{ width: "100%" }} />
```

### Bundle Size

Component sizes (gzipped):
- WorldMap: ~2.5KB
- LogableUI: ~3.8KB
- WebAppVisual: ~4.2KB
- Total: ~10.5KB + dependencies

Framer Motion (~52KB gzipped) is shared across all components.

### Lazy Loading Images

For production, replace external image URLs:
```tsx
// Current (development)
bg-[url('https://grainy-gradients.vercel.app/noise.svg')]

// Production (local asset)
bg-[url('/images/noise.svg')]
```

### Reduced Motion

Components respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Accessibility

### ARIA Labels

All components include meaningful ARIA labels:
```tsx
<div role="img" aria-label="Animated world map with connection paths">
```

### Keyboard Navigation

Interactive elements support:
- `Tab` - Navigate between elements
- `Enter` / `Space` - Activate element
- `Escape` - Clear focus/state

### Screen Reader Support

- Semantic HTML structure
- Descriptive labels for status indicators
- Hidden decorative elements with `aria-hidden="true"`

### Focus Management

Visual focus indicators on all interactive elements:
```css
.interactive-element:focus-visible {
  outline: 2px solid rgba(99, 102, 241, 0.5);
  outline-offset: 2px;
}
```

## Browser Support

Tested and supported:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Feature Detection

Components gracefully degrade if:
- CSS backdrop-filter not supported
- IntersectionObserver not available
- Reduced motion preference enabled

## Customization

### Theming

Components use Tailwind color palette. Customize via Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        zinc: { /* custom zinc shades */ },
      },
    },
  },
};
```

### Animation Timing

Adjust animation speeds via Framer Motion props:

```tsx
<WorldMap
  // Slower animations
  animationDuration={3.0}
  animationDelay={1.0}
/>
```

## Troubleshooting

### Component Not Rendering

**Issue:** Component appears blank
**Solution:** Ensure React is properly imported and hydration directive is set

```astro
import { WorldMap } from '@/components/interactive/WorldMap';
<WorldMap client:visible />
```

### Animation Performance Issues

**Issue:** Laggy animations
**Solution:**
1. Check browser DevTools Performance tab
2. Reduce number of animated elements
3. Use `client:visible` for off-screen components
4. Enable GPU acceleration in browser settings

### TypeScript Errors

**Issue:** Type errors on import
**Solution:** Ensure `@types/react` is installed

```bash
pnpm add -D @types/react @types/react-dom
```

### Hydration Mismatch

**Issue:** Hydration errors in console
**Solution:** Avoid SSR-specific state initialization

```tsx
// Avoid
const [state] = useState(window.innerWidth);

// Use
const [state, setState] = useState(0);
useEffect(() => setState(window.innerWidth), []);
```

## Development

### Local Testing

```bash
pnpm dev
```

### Type Checking

```bash
pnpm astro check
```

### Build Optimization

```bash
pnpm build
```

Check bundle size with `astro build --stats`

## License

MIT

## Credits

Components converted from template designs for Astro island architecture with enhanced accessibility and performance optimizations.
