import { useState, useEffect } from 'react';

/**
 * Hook to detect user's reduced motion preference
 *
 * Monitors the prefers-reduced-motion CSS media query to determine if the user
 * has requested reduced motion through their system settings. This is important
 * for accessibility (WCAG 2.1 Level AA) and can improve performance on mobile devices.
 *
 * @returns {boolean} True if user prefers reduced motion
 *
 * @example
 * ```tsx
 * const prefersReducedMotion = useReducedMotion();
 *
 * <motion.div
 *   animate={prefersReducedMotion ? {} : { rotate: 360 }}
 *   transition={{ duration: prefersReducedMotion ? 0 : 2 }}
 * />
 * ```
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if window is available (SSR safety)
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Create listener for preference changes
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Add listener (modern browsers)
    mediaQuery.addEventListener('change', listener);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return prefersReducedMotion;
}
