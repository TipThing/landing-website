import { motion } from "framer-motion";
import { Box, Fan, Scale } from "lucide-react";

/**
 * LogableUI Interactive Component
 *
 * Industrial dashboard visualization with animated widgets representing
 * real-time equipment monitoring (silos, conveyors, pumps, weigh bins).
 *
 * Features:
 * - Four animated industrial widgets
 * - Real-time visual feedback
 * - Hover interactions with smooth transitions
 * - Grainy gradient overlays for industrial aesthetic
 *
 * Performance:
 * - GPU-accelerated animations
 * - Optimized SVG rendering
 * - Will-change hints on animated elements
 *
 * Accessibility:
 * - ARIA labels for all interactive widgets
 * - Keyboard navigation support
 * - Semantic HTML structure
 * - Screen reader friendly status indicators
 *
 * @component
 */

/**
 * SiloWidget - Animated storage silo with fluid level indicator
 */
const SiloWidget = () => (
  <div
    className="bg-zinc-900/40 border border-white/5 rounded-lg p-4 flex flex-col items-center justify-between h-full cursor-pointer group hover:border-white/10 transition-colors hover:bg-zinc-900/60"
    role="button"
    tabIndex={0}
    aria-label="Silo 04 status: 84% capacity"
  >
    {/* Header with silo ID and capacity */}
    <div className="w-full flex justify-between text-[10px] text-zinc-500 uppercase tracking-wider mb-2">
      <span>Silo 04</span>
      <span className="text-zinc-300 group-hover:text-white transition-colors">
        84%
      </span>
    </div>

    {/* Silo visualization */}
    <div className="relative h-full w-16 border-x border-b border-white/10 bg-zinc-900/50 rounded-b-lg overflow-hidden">
      {/* Grainy texture overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-10 pointer-events-none" />

      {/* Animated fluid level */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-emerald-500/10 w-full"
        initial={{ height: "40%" }}
        animate={{ height: ["80%", "84%", "82%"] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "height" }}
      >
        <div className="w-full h-1 bg-emerald-500/20 absolute top-0" />
      </motion.div>

      {/* Level markers */}
      <div className="absolute inset-0 flex flex-col justify-evenly pointer-events-none">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-full h-px bg-white/5" />
        ))}
      </div>
    </div>

    {/* Footer label */}
    <div className="mt-2 text-[9px] text-zinc-600 font-mono">GRAIN_STORAGE</div>
  </div>
);

/**
 * ConveyorWidget - Animated conveyor belt with moving packages
 */
const ConveyorWidget = () => (
  <div
    className="bg-zinc-900/40 border border-white/5 rounded-lg p-4 flex flex-col justify-between h-full overflow-hidden relative cursor-pointer group hover:border-white/10 transition-colors hover:bg-zinc-900/60"
    role="button"
    tabIndex={0}
    aria-label="Conveyor Line A: Active"
  >
    {/* Header with line ID and status */}
    <div className="w-full flex justify-between text-[10px] text-zinc-500 uppercase tracking-wider mb-4 relative z-10">
      <span>Line A</span>
      <div className="flex gap-1.5 items-center">
        <div className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full animate-pulse" />
        <span className="text-emerald-500/50 text-[9px]">Active</span>
      </div>
    </div>

    {/* Conveyor visualization */}
    <div className="relative h-12 w-full flex items-center overflow-hidden">
      {/* Animated belt segments */}
      <div className="absolute bottom-0 w-full h-2 bg-zinc-800/50 rounded-full overflow-hidden">
        <motion.div
          className="w-[200%] h-full flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ willChange: "transform" }}
        >
          {Array(40)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="w-1 h-full bg-zinc-700/50 mr-4 transform -skew-x-12"
              />
            ))}
        </motion.div>
      </div>

      {/* Animated packages */}
      <motion.div
        className="flex absolute bottom-2 left-0"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: "200%",
          display: "flex",
          gap: "2rem",
          willChange: "transform",
        }}
      >
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="w-8 h-6 shrink-0 bg-zinc-800 rounded border border-white/10 flex items-center justify-center shadow-lg z-10"
            >
              <Box size={10} className="text-zinc-600" />
            </div>
          ))}
      </motion.div>
    </div>
  </div>
);

/**
 * PumpWidget - Animated rotating pump indicator
 */
const PumpWidget = () => (
  <div
    className="bg-zinc-900/40 border border-white/5 rounded-lg p-4 flex flex-col justify-between h-full cursor-pointer group hover:border-white/10 transition-colors hover:bg-zinc-900/60"
    role="button"
    tabIndex={0}
    aria-label="Pump C running at 450 RPM"
  >
    {/* Header with pump ID and RPM */}
    <div className="w-full flex justify-between text-[10px] text-zinc-500 uppercase tracking-wider">
      <span>Pump C</span>
      <span className="text-zinc-300">450 RPM</span>
    </div>

    {/* Rotating pump visualization */}
    <div className="flex justify-center items-center flex-1 my-2">
      <div className="relative w-16 h-16 border border-white/5 rounded-full flex items-center justify-center bg-zinc-900/50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ willChange: "transform" }}
        >
          <Fan
            size={32}
            className="text-zinc-700 group-hover:text-indigo-500/40 transition-colors"
          />
        </motion.div>
      </div>
    </div>

    {/* Performance indicator bar */}
    <div className="w-full bg-zinc-800/50 h-1 rounded-full overflow-hidden">
      <div className="h-full bg-indigo-500/20 w-[60%] rounded-full" />
    </div>
  </div>
);

/**
 * WeighBinWidget - Weight scale with animated reading
 */
const WeighBinWidget = () => (
  <div
    className="bg-zinc-900/40 border border-white/5 rounded-lg p-4 flex flex-col justify-between h-full cursor-pointer group hover:border-white/10 transition-colors hover:bg-zinc-900/60"
    role="button"
    tabIndex={0}
    aria-label="Scale 01 reading: 1,245 kilograms"
  >
    {/* Header with scale ID */}
    <div className="w-full flex justify-between text-[10px] text-zinc-500 uppercase tracking-wider">
      <span>Scale 01</span>
      <Scale size={12} />
    </div>

    {/* Animated weight display */}
    <div className="flex-1 flex items-center justify-center">
      <div className="font-mono text-2xl text-zinc-300 tracking-tighter">
        <motion.span
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          1,245
        </motion.span>
        <span className="text-xs text-zinc-600 ml-1">kg</span>
      </div>
    </div>

    {/* Load indicator bars */}
    <div className="flex gap-1">
      <div className="h-1 flex-1 bg-emerald-500/20 rounded-full" />
      <div className="h-1 flex-1 bg-emerald-500/20 rounded-full" />
      <div className="h-1 flex-1 bg-zinc-800 rounded-full" />
    </div>
  </div>
);

/**
 * Props for LogableUI component
 */
export interface LogableUIProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * LogableUI - Industrial dashboard with real-time equipment monitoring
 *
 * @example
 * ```tsx
 * <LogableUI className="w-full h-96" />
 * ```
 */
export const LogableUI = ({ className = "" }: LogableUIProps) => {
  return (
    <div
      className={`w-full h-full bg-zinc-950 p-4 flex flex-col gap-3 relative font-sans ${className}`}
      role="region"
      aria-label="Industrial equipment dashboard"
    >
      {/* Dashboard header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <div className="flex gap-2">
          <div
            className="h-2 w-2 rounded-full bg-red-500/20 border border-red-500/10"
            aria-label="Indicator 1"
          />
          <div
            className="h-2 w-2 rounded-full bg-yellow-500/20 border border-yellow-500/10"
            aria-label="Indicator 2"
          />
        </div>
        <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          Dashboard_View_01
        </div>
      </div>

      {/* Widget grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-3 flex-1">
        <SiloWidget />
        <ConveyorWidget />
        <PumpWidget />
        <WeighBinWidget />
      </div>
    </div>
  );
};

export default LogableUI;
