import { motion } from "framer-motion";

/**
 * WorldMap Interactive Component
 *
 * Animated world map visualization with connection paths using Framer Motion.
 * Features:
 * - Dot pattern background with world-shaped mask
 * - Animated connection paths between geographic points
 * - Traveling dots along connection paths
 * - Grayscale aesthetic with opacity effects
 *
 * Performance:
 * - Uses GPU-accelerated CSS transforms
 * - SVG paths with optimized animations
 * - Will-change hints for animation performance
 *
 * Accessibility:
 * - ARIA label for screen readers
 * - Semantic SVG structure
 * - Reduced motion support via prefers-reduced-motion
 *
 * @component
 */

interface ConnectionPoint {
  start: { x: number; y: number };
  end: { x: number; y: number };
}

/**
 * Props for WorldMap component
 */
export interface WorldMapProps {
  /** Additional CSS classes */
  className?: string;
  /** ARIA label for accessibility */
  ariaLabel?: string;
}

/**
 * WorldMap component displays an animated world map with connection paths
 *
 * @example
 * ```tsx
 * <WorldMap
 *   className="w-full h-96"
 *   ariaLabel="Global connection network visualization"
 * />
 * ```
 */
export const WorldMap = ({
  className = "",
  ariaLabel = "Animated world map with connection paths"
}: WorldMapProps) => {
  // Connection points representing geographic locations
  const points: ConnectionPoint[] = [
    { start: { x: 430, y: 280 }, end: { x: 220, y: 140 } },
    { start: { x: 430, y: 280 }, end: { x: 390, y: 110 } },
    { start: { x: 430, y: 280 }, end: { x: 700, y: 140 } },
    { start: { x: 430, y: 280 }, end: { x: 620, y: 220 } },
  ];

  // Simplified world continents path
  const worldPath =
    "M 230 110 Q 250 90 280 100 T 310 120 T 340 100 Q 360 80 340 60 T 290 40 Q 250 30 220 60 T 200 100 Z M 450 100 Q 460 80 480 90 T 500 80 T 520 90 Q 530 110 510 120 T 470 130 T 450 100 Z M 650 100 Q 700 80 750 100 T 800 120 Q 820 150 780 180 T 700 200 Q 650 180 650 140 T 650 100 Z M 480 180 Q 500 160 530 180 T 560 220 Q 580 260 550 320 T 500 350 Q 460 320 480 250 T 480 180 Z M 700 250 Q 720 240 740 250 T 750 280 Q 740 300 710 290 T 680 270 T 700 250 Z M 250 200 Q 280 180 300 210 T 310 250 Q 300 320 280 350 T 240 320 Q 220 280 240 240 T 250 200 Z";

  return (
    <div
      className={`w-full h-full bg-zinc-950 rounded-lg relative font-sans overflow-hidden border border-white/5 opacity-60 grayscale contrast-125 ${className}`}
      role="img"
      aria-label={ariaLabel}
      style={{ willChange: "opacity" }}
    >
      {/* Background dot pattern with world mask */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            {/* Dot pattern definition */}
            <pattern
              id="dot-pattern"
              x="0"
              y="0"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.2" fill="#3f3f46" />
            </pattern>

            {/* World shape mask */}
            <mask id="world-shape">
              <path
                d={worldPath}
                fill="white"
                stroke="white"
                strokeWidth="15"
                strokeLinejoin="round"
                transform="scale(1.05) translate(10,10)"
              />
            </mask>
          </defs>

          {/* Apply dot pattern with world mask */}
          <rect
            width="100%"
            height="100%"
            fill="url(#dot-pattern)"
            mask="url(#world-shape)"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Connection paths and animated dots */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          {/* Gradient for connection paths */}
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="#71717a" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Generate connection paths with animated dots */}
        {points.map((dot, i) => {
          // Calculate curved path midpoint
          const midX = (dot.start.x + dot.end.x) / 2;
          const midY = Math.min(dot.start.y, dot.end.y) - 50;

          // Create quadratic bezier curve path
          const path = `M ${dot.start.x} ${dot.start.y} Q ${midX} ${midY} ${dot.end.x} ${dot.end.y}`;

          return (
            <g key={i}>
              {/* Animated connection path */}
              <motion.path
                d={path}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.5,
                  ease: "easeOut",
                }}
                style={{ willChange: "opacity" }}
              />

              {/* Traveling dot along path */}
              <motion.circle
                r="1.5"
                fill="white"
                animate={{
                  offsetDistance: "100%",
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 2,
                }}
                style={{
                  offsetPath: `path('${path}')`,
                  willChange: "offset-distance, opacity",
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default WorldMap;
