/** @type {import('tailwindcss').Config} */
export default {
  // JIT mode is enabled by default in Tailwind v3+
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    // Ensure we scan all component files
    './src/components/**/*.{astro,tsx}',
    './src/layouts/**/*.{astro,tsx}',
    './src/pages/**/*.{astro,tsx}',
  ],

  // Theme optimizations
  theme: {
    extend: {
      // Custom utilities that will be tree-shaken if unused
      colors: {
        // Define only the colors you use
        primary: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
      },
      // Performance-optimized animations
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },

  // Performance optimizations
  future: {
    // Enable upcoming features for better performance
    hoverOnlyWhenSupported: true,
  },

  // Disable unused core plugins for smaller builds
  corePlugins: {
    // Disable plugins you don't use
    preflight: true, // Keep for CSS reset
    container: true,
    // Add others to disable if not needed
    // aspectRatio: false,
    // backdropOpacity: false,
  },

  plugins: [
    // Add plugins only as needed to minimize bundle size
  ],
};
