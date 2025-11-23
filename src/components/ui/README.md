# UI Components Usage Guide

This directory contains Astro-compatible React components that can be used as islands in Astro pages.

## Components

### StandardButton

A variant-based button component with three styles: primary, secondary, and outline.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Button content |
| `className` | `string` | `''` | Additional CSS classes |
| `onClick` | `function` | - | Click handler |
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | Visual variant |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type |
| `disabled` | `boolean` | `false` | Disable state |
| `aria-label` | `string` | - | Accessibility label |

#### Usage in Astro

```astro
---
import { StandardButton } from '@/components/ui/StandardButton';
---

<!-- Primary button with client-side interactivity -->
<StandardButton
  client:load
  variant="primary"
  aria-label="Get started with our platform"
>
  Get Started
</StandardButton>

<!-- Secondary button with click handler -->
<StandardButton
  client:visible
  variant="secondary"
  onClick={() => console.log('clicked')}
>
  Learn More
</StandardButton>

<!-- Outline button with custom classes -->
<StandardButton
  client:idle
  variant="outline"
  className="max-w-xs"
>
  Documentation
</StandardButton>

<!-- Disabled button -->
<StandardButton
  client:load
  variant="primary"
  disabled
>
  Coming Soon
</StandardButton>
```

#### Hydration Directives

- `client:load` - Load immediately on page load
- `client:visible` - Load when scrolled into view
- `client:idle` - Load when browser is idle
- `client:only="react"` - Only render on client (no SSR)

### SpotlightCard

Interactive card with mouse-tracking spotlight effect using Framer Motion.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Card content |
| `className` | `string` | `''` | Additional CSS classes |
| `spotlightColor` | `string` | `'rgba(255,255,255,0.03)'` | Spotlight gradient color |
| `aria-label` | `string` | - | Accessibility label |
| `role` | `string` | - | ARIA role |

#### Usage in Astro

```astro
---
import { SpotlightCard } from '@/components/ui/SpotlightCard';
---

<!-- Basic spotlight card -->
<SpotlightCard client:visible>
  <div class="p-6">
    <h3 class="text-xl font-bold text-white">Feature Title</h3>
    <p class="text-zinc-400 mt-2">Feature description goes here</p>
  </div>
</SpotlightCard>

<!-- Custom spotlight color (blue tint) -->
<SpotlightCard
  client:visible
  spotlightColor="rgba(59,130,246,0.05)"
  aria-label="Premium feature card"
>
  <div class="p-8">
    <h3 class="text-2xl font-bold text-white">Premium Feature</h3>
    <p class="text-zinc-300 mt-3">Enhanced capabilities for power users</p>
  </div>
</SpotlightCard>

<!-- Grid layout with multiple cards -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <SpotlightCard client:visible className="h-full">
    <div class="p-6 h-full flex flex-col">
      <h4 class="text-lg font-semibold text-white">Card 1</h4>
      <p class="text-zinc-400 mt-2 flex-1">Content</p>
    </div>
  </SpotlightCard>

  <SpotlightCard client:visible className="h-full">
    <div class="p-6 h-full flex flex-col">
      <h4 class="text-lg font-semibold text-white">Card 2</h4>
      <p class="text-zinc-400 mt-2 flex-1">Content</p>
    </div>
  </SpotlightCard>

  <SpotlightCard client:visible className="h-full">
    <div class="p-6 h-full flex flex-col">
      <h4 class="text-lg font-semibold text-white">Card 3</h4>
      <p class="text-zinc-400 mt-2 flex-1">Content</p>
    </div>
  </SpotlightCard>
</div>
```

## Complete Example Page

```astro
---
// src/pages/example.astro
import { StandardButton } from '@/components/ui/StandardButton';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import Layout from '@/layouts/Layout.astro';
---

<Layout title="Component Examples">
  <main class="min-h-screen bg-black text-white p-8">
    <div class="max-w-6xl mx-auto space-y-12">

      <!-- Buttons Section -->
      <section>
        <h2 class="text-3xl font-bold mb-6">Button Variants</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StandardButton client:load variant="primary">
            Primary Button
          </StandardButton>
          <StandardButton client:load variant="secondary">
            Secondary Button
          </StandardButton>
          <StandardButton client:load variant="outline">
            Outline Button
          </StandardButton>
        </div>
      </section>

      <!-- Spotlight Cards Section -->
      <section>
        <h2 class="text-3xl font-bold mb-6">Spotlight Cards</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <SpotlightCard
              client:visible
              spotlightColor={num % 2 === 0 ? 'rgba(59,130,246,0.05)' : 'rgba(255,255,255,0.03)'}
            >
              <div class="p-6">
                <h3 class="text-xl font-bold text-white">Feature {num}</h3>
                <p class="text-zinc-400 mt-2">
                  Hover to see the spotlight effect
                </p>
                <StandardButton
                  client:load
                  variant="outline"
                  className="mt-4"
                >
                  Learn More
                </StandardButton>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      <!-- Combined Example -->
      <section>
        <h2 class="text-3xl font-bold mb-6">Combined Example</h2>
        <SpotlightCard client:visible className="max-w-2xl mx-auto">
          <div class="p-8">
            <h3 class="text-2xl font-bold text-white mb-4">
              Get Started Today
            </h3>
            <p class="text-zinc-300 mb-6">
              Experience the power of our platform with a free trial.
              No credit card required.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <StandardButton
                client:load
                variant="primary"
                aria-label="Start your free trial"
              >
                Start Free Trial
              </StandardButton>
              <StandardButton
                client:load
                variant="outline"
                aria-label="View pricing details"
              >
                View Pricing
              </StandardButton>
            </div>
          </div>
        </SpotlightCard>
      </section>

    </div>
  </main>
</Layout>
```

## TypeScript Support

Both components are fully typed with TypeScript interfaces. Import the types if needed:

```typescript
import type { StandardButtonProps } from '@/components/ui/StandardButton';
import type { SpotlightCardProps } from '@/components/ui/SpotlightCard';
```

## Accessibility Features

### StandardButton
- Semantic `<button>` element
- Support for `aria-label` and `aria-describedby`
- Disabled state with proper styling and cursor
- Keyboard navigation support (native button behavior)
- Active state feedback with scale animation

### SpotlightCard
- Support for `aria-label` and custom `role`
- Spotlight effect marked as `aria-hidden` (decorative)
- Proper z-index layering for content accessibility
- Works with screen readers (content is in DOM order)

## Performance Considerations

1. **Hydration Strategy**: Use `client:visible` for cards below the fold to improve initial page load
2. **Framer Motion**: SpotlightCard uses Framer Motion - ensure it's installed as a dependency
3. **Event Handlers**: Mouse tracking only active when hovering (no performance impact when idle)
4. **CSS Transitions**: Smooth transitions without JavaScript overhead

## Customization

### Extending Variants

Add new button variants by modifying the `variants` object:

```typescript
// In StandardButton.tsx
const variants: Record<ButtonVariant, string> = {
  primary: '...',
  secondary: '...',
  outline: '...',
  danger: 'bg-red-600 text-white hover:bg-red-700', // Add new variant
};
```

### Custom Spotlight Colors

```astro
<!-- Cyan spotlight -->
<SpotlightCard spotlightColor="rgba(6,182,212,0.08)">
  <!-- content -->
</SpotlightCard>

<!-- Purple spotlight -->
<SpotlightCard spotlightColor="rgba(168,85,247,0.06)">
  <!-- content -->
</SpotlightCard>

<!-- Green spotlight -->
<SpotlightCard spotlightColor="rgba(34,197,94,0.05)">
  <!-- content -->
</SpotlightCard>
```
