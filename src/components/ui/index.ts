/**
 * UI Components - Mixed Astro and React components
 *
 * This module exports reusable UI components.
 * - StandardButton: Native Astro component (import directly from .astro file)
 * - SpotlightCard: React component for interactive mouse tracking
 * All components are fully typed with TypeScript and follow accessibility best practices.
 *
 * @module ui
 */

// Note: StandardButton is now a native Astro component
// Import it directly: import StandardButton from './StandardButton.astro'

export { SpotlightCard } from './SpotlightCard';
export type { SpotlightCardProps } from './SpotlightCard';
