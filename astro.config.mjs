// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tipthing.com',
  integrations: [
    react({
      // Only load React runtime for interactive components
      include: [
        '**/components/ui/**',
        '**/components/interactive/**',
        '**/components/layout/NavBar.tsx'
      ],
    }),
  ],

  // Performance Optimizations
  build: {
    // Inline critical CSS automatically
    inlineStylesheets: 'auto',

    // Code splitting for better caching
    split: true,

    // Asset optimization
    assets: '_assets',

    // Minification
    minify: true,
  },

  // Vite optimization settings
  vite: {
    build: {
      // CSS code splitting
      cssCodeSplit: true,

      // Rollup optimizations
      rollupOptions: {
        output: {
          // Manual chunks for better caching
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'framer': ['framer-motion'],
            'lucide': ['lucide-react'],
          },
        },
      },

      // Chunk size warnings
      chunkSizeWarningLimit: 150, // KB
    },

    // Optimization during dev
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
    },

    // Server optimizations
    server: {
      warmup: {
        clientFiles: [
          './src/components/interactive/**/*.tsx',
          './src/layouts/*.astro',
        ],
      },
    },

    plugins: [tailwindcss()],
  },

  // Prefetch configuration for better navigation
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },

  // Image optimization (when images are added)
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: 268402689, // Prevent DoS attacks
      },
    },
    remotePatterns: [{ protocol: 'https' }],
    formats: ['avif', 'webp'], // Modern formats (AVIF is 20-30% smaller than WebP)
    quality: 80, // Balance quality/size
  },

  // Compression
  compressHTML: true,

  // Output settings
  output: 'static',
});