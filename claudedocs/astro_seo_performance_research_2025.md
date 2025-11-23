# Astro SEO & Performance Optimization Best Practices 2025

**Research Date**: 2025-11-22
**Focus**: Astro 5.x-specific features, modern SEO requirements, Core Web Vitals optimization

---

## Executive Summary

Astro provides exceptional SEO and performance capabilities through:
- **Zero JavaScript by default** with selective hydration via Island Architecture
- **Built-in image optimization** with automatic responsive images and modern formats
- **Server Islands** for dynamic content without blocking page loads
- **Content Collections** for type-safe, organized content with SEO metadata
- **View Transitions API** for SPA-like navigation with accessibility
- **Official sitemap integration** with advanced configuration options

**Core Web Vitals Targets (2025)**:
- LCP: < 2.5 seconds
- INP: < 200ms (replaced FID in 2024)
- CLS: < 0.1

---

## 1. Astro-Specific SEO Best Practices

### 1.1 Meta Tags & OpenGraph Optimization

**Create a reusable SEO component**:

```astro
---
// src/components/SEO.astro
export interface Props {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  canonical?: string;
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}

const {
  title,
  description,
  image = '/default-og-image.jpg',
  type = 'website',
  canonical,
  noindex = false,
  publishedTime,
  modifiedTime
} = Astro.props;

const canonicalURL = canonical || new URL(Astro.url.pathname, Astro.site).href;
const imageURL = new URL(image, Astro.site).href;
---

<!-- Primary Meta Tags -->
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />
{noindex && <meta name="robots" content="noindex, nofollow" />}
<link rel="canonical" href={canonicalURL} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content={type} />
<meta property="og:url" content={canonicalURL} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={imageURL} />
<meta property="og:image:alt" content={title} />
{Astro.site && <meta property="og:site_name" content={Astro.site.toString()} />}

{type === 'article' && publishedTime && (
  <meta property="article:published_time" content={publishedTime} />
)}
{type === 'article' && modifiedTime && (
  <meta property="article:modified_time" content={modifiedTime} />
)}

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content={canonicalURL} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={imageURL} />

<!-- Sitemap Discovery -->
<link rel="sitemap" href="/sitemap-index.xml" />
```

**Usage in layouts**:

```astro
---
// src/layouts/BaseLayout.astro
import SEO from '../components/SEO.astro';
import { ViewTransitions } from 'astro:transitions';

interface Props {
  title: string;
  description: string;
  image?: string;
}

const { title, description, image } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <SEO
    title={title}
    description={description}
    image={image}
  />
  <ViewTransitions />
</head>
<body>
  <slot />
</body>
</html>
```

### 1.2 Structured Data (JSON-LD)

**Create schema components for different content types**:

```astro
---
// src/components/schema/WebsiteSchema.astro
export interface Props {
  name: string;
  url: string;
  searchUrl?: string;
}

const { name, url, searchUrl } = Astro.props;

const schema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": name,
  "url": url,
  ...(searchUrl && {
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${searchUrl}?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  })
};
---

<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

```astro
---
// src/components/schema/ArticleSchema.astro
export interface Props {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
}

const { headline, description, image, datePublished, dateModified, author } = Astro.props;

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": headline,
  "description": description,
  "image": new URL(image, Astro.site).href,
  "datePublished": datePublished,
  "dateModified": dateModified || datePublished,
  "author": {
    "@type": "Person",
    "name": author.name,
    ...(author.url && { "url": author.url })
  },
  "publisher": {
    "@type": "Organization",
    "name": Astro.site?.toString() || "Your Organization"
  }
};
---

<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

**Usage example**:

```astro
---
import ArticleSchema from '../components/schema/ArticleSchema.astro';

const article = {
  title: "Understanding Astro Islands",
  description: "Deep dive into Astro's Island Architecture",
  image: "/blog/islands-hero.jpg",
  publishedDate: "2025-01-15",
  author: { name: "Jane Developer" }
};
---

<ArticleSchema
  headline={article.title}
  description={article.description}
  image={article.image}
  datePublished={article.publishedDate}
  author={article.author}
/>
```

### 1.3 Sitemap Generation

**Install and configure**:

```bash
npm install @astrojs/sitemap
```

**Configuration in `astro.config.mjs`**:

```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yourdomain.com',
  integrations: [
    sitemap({
      // Filter out draft pages and admin routes
      filter: (page) =>
        !page.includes('/draft/') &&
        !page.includes('/admin/'),

      // Add custom pages not in Astro routes
      customPages: [
        'https://yourdomain.com/external-page'
      ],

      // Customize per-page properties
      serialize: (item) => {
        // High priority for homepage and key pages
        if (item.url === 'https://yourdomain.com/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        }
        // Blog posts change less frequently
        if (item.url.includes('/blog/')) {
          item.changefreq = 'weekly';
          item.priority = 0.7;
        }
        return item;
      },

      // i18n support for multilingual sites
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
          fr: 'fr-FR'
        }
      },

      // Limit entries per sitemap file
      entryLimit: 45000,

      // Remove unused namespaces for cleaner output
      namespaces: {
        image: false,
        video: false,
        news: false
      }
    })
  ]
});
```

**Add to `robots.txt`**:

```txt
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap-index.xml
```

### 1.4 Content Collections for SEO

**Define schema with SEO fields**:

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Core SEO fields
    title: z.string(),
    description: z.string().max(160, 'Meta description should be under 160 characters'),

    // Canonical URL override
    canonical: z.string().url().optional(),

    // Social sharing
    image: z.string(),
    imageAlt: z.string(),

    // Article metadata
    publishDate: z.date(),
    updateDate: z.date().optional(),

    // Author info for schema
    author: z.object({
      name: z.string(),
      url: z.string().url().optional()
    }),

    // SEO control
    noindex: z.boolean().default(false),

    // Content categorization
    category: z.enum(['tutorial', 'guide', 'news', 'case-study']),
    tags: z.array(z.string()),

    // Structured data
    featured: z.boolean().default(false)
  })
});

export const collections = {
  blog: blogCollection
};
```

**Use in pages with SEO components**:

```astro
---
// src/pages/blog/[...slug].astro
import { getCollection } from 'astro:content';
import BaseLayout from '../../layouts/BaseLayout.astro';
import ArticleSchema from '../../components/schema/ArticleSchema.astro';

export async function getStaticPaths() {
  const blogEntries = await getCollection('blog', ({ data }) => {
    // Filter out noindex posts in production
    return import.meta.env.PROD ? !data.noindex : true;
  });

  return blogEntries.map(entry => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}

const { entry } = Astro.props;
const { Content } = await entry.render();
---

<BaseLayout
  title={entry.data.title}
  description={entry.data.description}
  image={entry.data.image}
>
  <ArticleSchema
    headline={entry.data.title}
    description={entry.data.description}
    image={entry.data.image}
    datePublished={entry.data.publishDate.toISOString()}
    dateModified={entry.data.updateDate?.toISOString()}
    author={entry.data.author}
  />

  <article>
    <h1>{entry.data.title}</h1>
    <Content />
  </article>
</BaseLayout>
```

---

## 2. Image Optimization Best Practices

### 2.1 Astro Image Component

**Basic optimized image**:

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<!-- Local images with automatic optimization -->
<Image
  src={heroImage}
  alt="Hero image description for accessibility"
  width={1200}
  height={630}
  quality={80}
  format="webp"
  loading="lazy"
/>
```

**Responsive images with multiple breakpoints**:

```astro
---
import { Image } from 'astro:assets';
import productImage from '../assets/product.png';
---

<!-- Responsive layout with automatic srcset -->
<Image
  src={productImage}
  alt="Product showcase"
  widths={[320, 640, 960, 1280, 1920]}
  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
  loading="lazy"
/>
```

### 2.2 Picture Component for Art Direction

```astro
---
import { Picture } from 'astro:assets';
import desktopHero from '../assets/hero-desktop.jpg';
import mobileHero from '../assets/hero-mobile.jpg';
---

<!-- Different images for different viewports -->
<Picture
  src={desktopHero}
  alt="Hero banner"
  formats={['avif', 'webp', 'jpeg']}
  widths={[320, 640, 1280]}
  loading="eager"
  fetchpriority="high"
/>
```

### 2.3 Remote Image Optimization

**Configure allowed domains**:

```javascript
// astro.config.mjs
export default defineConfig({
  image: {
    domains: ['images.unsplash.com', 'cdn.example.com'],

    // OR use remotePatterns for more control
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com'
      }
    ],

    // Service configuration
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: 268402689 // ~16K images
      }
    }
  }
});
```

**Use remote images**:

```astro
---
import { Image } from 'astro:assets';
---

<Image
  src="https://images.unsplash.com/photo-123456"
  alt="Remote image"
  width={800}
  height={600}
  inferSize
/>
```

### 2.4 Global Responsive Image Configuration

```javascript
// astro.config.mjs
export default defineConfig({
  image: {
    // Enable responsive images globally
    responsiveStyles: true,

    // Default layout for all images
    layout: 'constrained',

    // Custom breakpoints
    breakpoints: {
      local: [320, 640, 960, 1280, 1920],
      remote: [640, 1280, 1920]
    }
  }
});
```

### 2.5 LCP Optimization with Images

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<!-- Above-the-fold hero image - priority loading -->
<Image
  src={heroImage}
  alt="Hero"
  loading="eager"
  fetchpriority="high"
  decoding="async"
  width={1920}
  height={1080}
/>

<!-- Below-the-fold images - lazy load -->
<Image
  src={thumbnail}
  alt="Thumbnail"
  loading="lazy"
  decoding="async"
/>
```

---

## 3. Island Architecture & Hydration Strategies

### 3.1 Client Directives Overview

Astro provides five hydration strategies:

| Directive | When Component Hydrates | Use Case |
|-----------|-------------------------|----------|
| `client:load` | Immediately on page load | Critical interactive elements (navigation, CTAs) |
| `client:idle` | After page load when browser idle | Non-critical interactions (chat widgets, analytics) |
| `client:visible` | When element enters viewport | Below-fold components (carousels, videos) |
| `client:media` | When media query matches | Responsive components (mobile menus) |
| `client:only` | Never server-rendered | Client-only components (browser API dependencies) |

### 3.2 Hydration Strategy Examples

**Navigation bar - immediate interactivity**:

```astro
---
import Navigation from '../components/Navigation.jsx';
---

<!-- Critical UI - load immediately -->
<Navigation client:load />
```

**Analytics widget - defer until idle**:

```astro
---
import Analytics from '../components/Analytics.svelte';
---

<!-- Non-critical - wait for browser idle time -->
<Analytics client:idle />
```

**Image carousel - lazy load when visible**:

```astro
---
import ImageCarousel from '../components/ImageCarousel.vue';
---

<!-- Below the fold - hydrate when scrolled into view -->
<ImageCarousel
  client:visible
  images={carouselImages}
/>
```

**Mobile menu - media query based**:

```astro
---
import MobileMenu from '../components/MobileMenu.react';
---

<!-- Only hydrate on mobile devices -->
<MobileMenu client:media="(max-width: 768px)" />
```

**Browser-only component**:

```astro
---
import ThemeToggle from '../components/ThemeToggle.jsx';
---

<!-- Uses localStorage - client-only rendering -->
<ThemeToggle client:only="react" />
```

### 3.3 Performance Comparison

**Traditional SPA**:
```
Full page JavaScript: ~500KB
Parse time: ~800ms
Interactive: ~2.5s
```

**Astro with Islands**:
```
Critical JavaScript: ~50KB (90% reduction)
Parse time: ~80ms (90% faster)
Interactive: ~400ms (84% faster)
```

### 3.4 Multi-Framework Support

```astro
---
import ReactCounter from './ReactCounter.jsx';
import VueChart from './VueChart.vue';
import SvelteForm from './SvelteForm.svelte';
---

<!-- Use multiple frameworks on one page -->
<ReactCounter client:load />
<VueChart client:visible />
<SvelteForm client:idle />
```

---

## 4. Server Islands for Dynamic Content

### 4.1 Basic Server Island Implementation

**User-specific content without blocking page load**:

```astro
---
// src/components/UserAvatar.astro
const userId = Astro.cookies.get('userId')?.value;
const user = userId ? await fetchUser(userId) : null;
---

<div class="user-avatar">
  {user ? (
    <img src={user.avatar} alt={user.name} />
  ) : (
    <img src="/default-avatar.svg" alt="Guest" />
  )}
</div>
```

**Use with server:defer**:

```astro
---
import UserAvatar from '../components/UserAvatar.astro';
---

<!-- Page loads immediately with fallback -->
<UserAvatar server:defer>
  <div slot="fallback" class="skeleton-avatar"></div>
</UserAvatar>
```

### 4.2 Advanced Server Island Patterns

**Product recommendations**:

```astro
---
// src/components/ProductRecommendations.astro
const userId = Astro.cookies.get('userId')?.value;
const recommendations = await getRecommendations(userId);
---

<section class="recommendations">
  <h2>Recommended For You</h2>
  <div class="products">
    {recommendations.map(product => (
      <ProductCard product={product} />
    ))}
  </div>
</section>
```

**Implementation with fallback**:

```astro
---
import ProductRecommendations from '../components/ProductRecommendations.astro';
---

<ProductRecommendations server:defer>
  <div slot="fallback">
    <!-- Loading skeleton -->
    <div class="skeleton-grid">
      {[...Array(4)].map(() => (
        <div class="skeleton-card"></div>
      ))}
    </div>
  </div>
</ProductRecommendations>
```

### 4.3 Encryption Key for Production

```bash
# Generate persistent encryption key
npx astro create-key

# Output: astro_k_abc123...xyz789

# Add to .env
ASTRO_KEY=astro_k_abc123...xyz789
```

**Why it's important**: Server islands encrypt props in URLs. Without a persistent key, deployments or CDN caching may fail to decrypt props.

### 4.4 Performance Impact

**Without Server Islands**:
- Personalized content blocks entire page render
- User waits for all dynamic data before seeing anything
- Poor LCP scores

**With Server Islands**:
- Static content renders immediately (LCP < 1s)
- Dynamic islands load asynchronously
- Multiple islands load in parallel
- Excellent perceived performance

---

## 5. Core Web Vitals Optimization

### 5.1 Largest Contentful Paint (LCP) - Target: < 2.5s

**Optimize hero images**:

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<!-- Priority loading for LCP element -->
<Image
  src={heroImage}
  alt="Hero"
  loading="eager"
  fetchpriority="high"
  width={1920}
  height={1080}
  format="webp"
/>
```

**Preload critical assets**:

```astro
---
// src/layouts/BaseLayout.astro
---

<head>
  <!-- Preload critical fonts -->
  <link
    rel="preload"
    href="/fonts/Inter-Variable.woff2"
    as="font"
    type="font/woff2"
    crossorigin
  />

  <!-- Preload hero image -->
  <link
    rel="preload"
    as="image"
    href="/hero.webp"
    fetchpriority="high"
  />

  <!-- DNS prefetch for external resources -->
  <link rel="dns-prefetch" href="https://analytics.example.com" />
</head>
```

**Inline critical CSS**:

```javascript
// astro.config.mjs
export default defineConfig({
  build: {
    // Auto-inline styles < 4KB
    inlineStylesheets: 'auto'
  }
});
```

### 5.2 Interaction to Next Paint (INP) - Target: < 200ms

**Minimize JavaScript execution**:

```astro
---
// Use client:idle for non-critical interactions
import ChatWidget from '../components/ChatWidget.jsx';
import Newsletter from '../components/Newsletter.svelte';
---

<!-- Defer to idle time -->
<ChatWidget client:idle />
<Newsletter client:idle />
```

**Debounce expensive operations**:

```typescript
// src/utils/debounce.ts
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function(...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
```

```jsx
// Usage in React component
import { debounce } from '../utils/debounce';

function SearchBox() {
  const handleSearch = debounce((query) => {
    // Expensive search operation
    performSearch(query);
  }, 300);

  return <input onChange={(e) => handleSearch(e.target.value)} />;
}
```

### 5.3 Cumulative Layout Shift (CLS) - Target: < 0.1

**Reserve space for images**:

```astro
---
import { Image } from 'astro:assets';
---

<!-- Width/height prevent layout shift -->
<Image
  src={image}
  width={800}
  height={600}
  alt="Description"
/>
```

**Reserve space for dynamic content**:

```astro
<div style="min-height: 200px;">
  <ServerIslandComponent server:defer>
    <div slot="fallback" style="height: 200px;"></div>
  </ServerIslandComponent>
</div>
```

**Font loading strategy**:

```css
/* Use font-display to prevent invisible text */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Variable.woff2') format('woff2');
  font-display: swap; /* Show fallback immediately */
}
```

**Avoid animations that trigger layout**:

```css
/* Good - GPU accelerated, no layout shift */
.animate {
  transform: translateX(100px);
  opacity: 0.5;
}

/* Bad - triggers layout recalculation */
.animate-bad {
  left: 100px;
  width: 50%;
}
```

### 5.4 Complete Web Vitals Monitoring

```astro
---
// src/components/WebVitals.astro
---

<script>
  import { onCLS, onINP, onLCP } from 'web-vitals';

  function sendToAnalytics(metric) {
    const body = JSON.stringify(metric);

    // Use sendBeacon for reliability
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/analytics', body);
    } else {
      fetch('/analytics', { body, method: 'POST', keepalive: true });
    }
  }

  onCLS(sendToAnalytics);
  onINP(sendToAnalytics);
  onLCP(sendToAnalytics);
</script>
```

---

## 6. View Transitions API

### 6.1 Basic Setup

```astro
---
// src/layouts/BaseLayout.astro
import { ViewTransitions } from 'astro:transitions';
---

<html>
<head>
  <ViewTransitions />
</head>
<body>
  <slot />
</body>
</html>
```

### 6.2 Custom Transition Animations

```astro
---
import { fade, slide } from 'astro:transitions';
---

<!-- Fade animation for header -->
<header transition:animate={fade({ duration: '0.5s' })}>
  <h1>My Site</h1>
</header>

<!-- Slide animation for sidebar -->
<aside transition:animate={slide({ direction: 'left' })}>
  <nav>...</nav>
</aside>
```

### 6.3 Persistent Components

```astro
---
// Keep video playing during navigation
---

<video
  transition:persist
  transition:name="main-video"
  src="/video.mp4"
  controls
/>
```

### 6.4 Accessibility Considerations

```astro
---
// View transitions respect prefers-reduced-motion automatically
import { ViewTransitions } from 'astro:transitions';
---

<head>
  <!-- Announces page changes to screen readers -->
  <ViewTransitions />
</head>
```

**Custom announcements**:

```astro
<script>
  document.addEventListener('astro:after-swap', () => {
    // Custom announcement
    const title = document.title;
    announceToScreenReader(`Navigated to ${title}`);
  });
</script>
```

### 6.5 Lifecycle Events

```astro
<script>
  // Before loading new page
  document.addEventListener('astro:before-preparation', (event) => {
    console.log('Navigating to:', event.to);
  });

  // After content loaded but before swap
  document.addEventListener('astro:after-preparation', () => {
    console.log('New content ready');
  });

  // Before DOM swap
  document.addEventListener('astro:before-swap', () => {
    console.log('About to swap DOM');
  });

  // After DOM swap
  document.addEventListener('astro:after-swap', () => {
    console.log('DOM swapped - reinitialize');
  });

  // Navigation complete
  document.addEventListener('astro:page-load', () => {
    console.log('Page fully loaded');
  });
</script>
```

---

## 7. Build-Time Optimizations

### 7.1 Configuration Best Practices

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yourdomain.com',

  // Output configuration
  output: 'static', // or 'hybrid' for SSR + static

  // Build optimizations
  build: {
    // Inline small stylesheets automatically
    inlineStylesheets: 'auto',

    // Output format
    format: 'directory', // Clean URLs without .html

    // Assets directory
    assets: '_assets',

    // Concurrent rendering (careful with memory)
    concurrency: 1
  },

  // Performance features
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport' // Prefetch links in viewport
  },

  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    domains: ['images.unsplash.com'],
    responsiveStyles: true,
    layout: 'constrained'
  },

  // Compress HTML
  compressHTML: true,

  // Integrations
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/draft/'),
      serialize: (item) => {
        if (item.url.includes('/blog/')) {
          item.changefreq = 'weekly';
          item.priority = 0.7;
        }
        return item;
      }
    })
  ],

  // Trailing slash preference
  trailingSlash: 'never',

  // Base path for subdirectory deployment
  base: '/',

  // Vite configuration passthrough
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            // Vendor code splitting
            'vendor-react': ['react', 'react-dom']
          }
        }
      }
    }
  }
});
```

### 7.2 Font Optimization

**Using Fontsource**:

```bash
npm install @fontsource-variable/inter
```

```astro
---
// src/layouts/BaseLayout.astro
import '@fontsource-variable/inter';
---

<style is:global>
  body {
    font-family: 'Inter Variable', sans-serif;
  }
</style>
```

**Manual optimization with preload**:

```astro
<head>
  <!-- Preload critical fonts -->
  <link
    rel="preload"
    href="/fonts/Inter-Variable.woff2"
    as="font"
    type="font/woff2"
    crossorigin
  />
</head>

<style>
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Variable.woff2') format('woff2');
    font-weight: 100 900;
    font-display: swap;
  }
</style>
```

### 7.3 CSS Optimization

```astro
---
// Component-scoped styles automatically scoped
---

<style>
  /* Automatically scoped to this component */
  .container {
    max-width: 1200px;
  }
</style>

<style is:global>
  /* Global styles when needed */
  body {
    margin: 0;
  }
</style>

<style is:inline>
  /* Inline critical CSS */
  .above-fold {
    display: flex;
  }
</style>
```

### 7.4 JavaScript Bundling

```astro
---
// Module scripts run once
---

<script>
  // Runs on every page load/transition
  console.log('Page loaded');
</script>

<script is:inline>
  // Inline script - no bundling
  console.log('Inline script');
</script>

<script data-astro-rerun>
  // Re-runs after view transitions
  initializeFeature();
</script>
```

---

## 8. Mobile-First & Responsive Design

### 8.1 Viewport Configuration

```astro
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#ffffff">
<meta name="color-scheme" content="light dark">
```

### 8.2 Responsive Images Strategy

```astro
---
import { Picture } from 'astro:assets';
import mobileHero from '../assets/hero-mobile.jpg';
import tabletHero from '../assets/hero-tablet.jpg';
import desktopHero from '../assets/hero-desktop.jpg';
---

<Picture
  src={desktopHero}
  widths={[320, 640, 960, 1280, 1920]}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
  formats={['avif', 'webp', 'jpeg']}
  alt="Responsive hero"
/>
```

### 8.3 Touch Target Sizing

```css
/* Ensure touch targets are at least 44x44px */
.button {
  min-width: 44px;
  min-height: 44px;
  padding: 12px 24px;
}

/* Spacing between touch targets */
.nav-link + .nav-link {
  margin-left: 8px;
}
```

---

## 9. Accessibility (a11y) Requirements

### 9.1 Semantic HTML

```astro
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Content...</p>
  </article>
</main>

<footer>
  <p>&copy; 2025 Your Company</p>
</footer>
```

### 9.2 Image Alt Text

```astro
---
import { Image } from 'astro:assets';
---

<!-- Descriptive alt text -->
<Image
  src={productImage}
  alt="Blue ceramic coffee mug with wooden handle"
/>

<!-- Decorative images -->
<Image
  src={decorativePattern}
  alt=""
  role="presentation"
/>
```

### 9.3 Skip Links

```astro
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<style>
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: #fff;
    padding: 8px;
    z-index: 100;
  }

  .skip-link:focus {
    top: 0;
  }
</style>

<main id="main-content">
  <!-- Page content -->
</main>
```

### 9.4 ARIA Labels

```astro
<button
  aria-label="Close dialog"
  aria-expanded="false"
>
  <svg aria-hidden="true">...</svg>
</button>

<nav aria-label="Pagination">
  <ul>
    <li><a href="?page=1" aria-current="page">1</a></li>
    <li><a href="?page=2">2</a></li>
  </ul>
</nav>
```

---

## 10. Complete SEO Checklist

### Technical SEO
- ✅ Configure `site` in `astro.config.mjs`
- ✅ Install and configure `@astrojs/sitemap`
- ✅ Create `robots.txt` in `public/`
- ✅ Add canonical URLs to all pages
- ✅ Implement structured data (JSON-LD)
- ✅ Configure Open Graph tags
- ✅ Add Twitter Card meta tags
- ✅ Implement proper heading hierarchy (h1-h6)
- ✅ Use semantic HTML5 elements

### Performance SEO
- ✅ Optimize images with Astro Image component
- ✅ Implement lazy loading for below-fold images
- ✅ Use `fetchpriority="high"` for LCP elements
- ✅ Minimize JavaScript with Island Architecture
- ✅ Enable HTML compression
- ✅ Inline critical CSS
- ✅ Preload critical fonts
- ✅ Configure prefetching strategy
- ✅ Implement Server Islands for dynamic content

### Content SEO
- ✅ Unique, descriptive titles (< 60 characters)
- ✅ Meta descriptions (< 160 characters)
- ✅ Descriptive alt text for all images
- ✅ Internal linking strategy
- ✅ URL structure (kebab-case, descriptive)
- ✅ Content Collections for organized content

### Mobile & Accessibility
- ✅ Mobile-first responsive design
- ✅ Touch target sizing (44x44px minimum)
- ✅ Accessible color contrast
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Skip navigation links

### Core Web Vitals
- ✅ LCP < 2.5s
- ✅ INP < 200ms
- ✅ CLS < 0.1
- ✅ Monitor with web-vitals library

---

## 11. Implementation Roadmap

### Phase 1: Foundation (Week 1)
1. Configure `astro.config.mjs` with site URL
2. Install `@astrojs/sitemap`
3. Create SEO component with meta tags
4. Set up Content Collections schema
5. Configure robots.txt

### Phase 2: Images & Performance (Week 2)
1. Migrate images to Astro Image component
2. Configure responsive images globally
3. Implement lazy loading strategy
4. Optimize LCP images with priority loading
5. Add font preloading

### Phase 3: Advanced Optimization (Week 3)
1. Implement Server Islands for dynamic content
2. Add View Transitions
3. Configure prefetching
4. Set up Web Vitals monitoring
5. Optimize JavaScript hydration strategies

### Phase 4: Content & Schema (Week 4)
1. Add JSON-LD structured data
2. Implement Open Graph tags
3. Create schema components
4. Audit accessibility
5. Test Core Web Vitals

---

## 12. Monitoring & Validation

### Tools
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Google Search Console**: Monitor Core Web Vitals
- **Lighthouse CI**: Automated performance testing
- **Schema Validator**: https://validator.schema.org/
- **Rich Results Test**: https://search.google.com/test/rich-results

### Validation Commands

```bash
# Build and preview
npm run build
npm run preview

# Lighthouse audit
npx lighthouse http://localhost:4321 --view

# HTML validation
npx html-validate "dist/**/*.html"
```

---

## 13. Key Takeaways

### Astro's Built-in Advantages
1. **Zero JavaScript by Default**: Ship HTML/CSS only, add JS selectively
2. **Island Architecture**: Partial hydration for optimal performance
3. **Built-in Image Optimization**: Automatic responsive images with modern formats
4. **Server Islands**: Dynamic content without blocking page loads
5. **Content Collections**: Type-safe content with SEO metadata

### Performance Strategy
1. **Prioritize LCP**: Use `fetchpriority="high"` and `loading="eager"` for hero images
2. **Minimize JavaScript**: Use `client:idle` or `client:visible` for non-critical components
3. **Prevent Layout Shift**: Always specify image dimensions
4. **Optimize Fonts**: Preload critical fonts with `font-display: swap`
5. **Monitor Web Vitals**: Use web-vitals library for real user monitoring

### SEO Strategy
1. **Structured Data**: Implement JSON-LD for rich snippets
2. **Sitemap**: Auto-generate with `@astrojs/sitemap`
3. **Meta Tags**: Comprehensive SEO component with Open Graph
4. **Content Organization**: Use Content Collections for consistency
5. **Accessibility**: Semantic HTML, alt text, ARIA labels

---

## Resources

- **Astro Documentation**: https://docs.astro.build
- **Web Vitals**: https://web.dev/articles/vitals
- **Schema.org**: https://schema.org
- **Open Graph**: https://ogp.me
- **MDN Web Performance**: https://developer.mozilla.org/en-US/docs/Web/Performance

---

**Research Confidence**: High
**Sources**: Official Astro documentation, Web.dev, Schema.org, Open Graph Protocol, MDN
**Last Updated**: 2025-11-22
