import React from 'react';
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  type MotionValue,
} from 'framer-motion';
import { useReducedMotion } from '../../lib/useReducedMotion';

/**
 * Utility function to combine class names
 * @param classes - Class names to combine
 * @returns Combined class string
 */
function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * SpotlightCard component props
 */
export interface SpotlightCardProps {
  /** Card content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Spotlight color (CSS color value) */
  spotlightColor?: string;
  /** ARIA label for accessibility */
  'aria-label'?: string;
  /** ARIA role for semantic meaning */
  role?: string;
}

/**
 * SpotlightCard - Interactive card with mouse-tracking spotlight effect using Framer Motion
 *
 * Creates a subtle radial gradient that follows the mouse cursor when hovering over the card.
 * Built with Framer Motion for smooth animations and Tailwind for styling.
 *
 * @example
 * ```astro
 * ---
 * import { SpotlightCard } from '@/components/ui/SpotlightCard';
 * ---
 *
 * <SpotlightCard client:load spotlightColor="rgba(59,130,246,0.05)">
 *   <div class="p-6">
 *     <h3 class="text-xl font-bold text-white">Card Title</h3>
 *     <p class="text-zinc-400 mt-2">Card description content</p>
 *   </div>
 * </SpotlightCard>
 * ```
 *
 * @component
 */
export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(255,255,255,0.03)',
  'aria-label': ariaLabel,
  role,
}) => {
  const mouseX: MotionValue<number> = useMotionValue(0);
  const mouseY: MotionValue<number> = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();

  /**
   * Track mouse position relative to card for spotlight effect
   * Disabled when user prefers reduced motion
   */
  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>): void => {
    if (prefersReducedMotion) return; // Skip tracking if reduced motion preferred

    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  /**
   * Generate radial gradient background that follows mouse position
   * For reduced motion, use a static gradient instead
   */
  const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`;
  const staticBackground = `radial-gradient(600px circle at 50% 50%, ${spotlightColor}, transparent 80%)`;

  return (
    <div
      className={cn(
        'group relative border border-white/5 bg-zinc-900/20 overflow-hidden rounded-xl',
        className
      )}
      onMouseMove={handleMouseMove}
      aria-label={ariaLabel}
      role={role}
    >
      {/* Content layer */}
      <div className="relative z-10 h-full">{children}</div>

      {/* Spotlight effect layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: prefersReducedMotion ? staticBackground : background,
          willChange: 'opacity' // GPU hint for better performance
        }}
        aria-hidden="true"
      />
    </div>
  );
};

export default SpotlightCard;
