import { useState } from "react";

/**
 * WebAppVisual Interactive Component
 *
 * Interactive code editor visualization showing a React application structure
 * with real-time UI preview. Features synchronized hover states between code
 * and visual preview.
 *
 * Features:
 * - Interactive code editor with syntax highlighting
 * - Real-time UI preview synchronized with code
 * - Hover effects linking code elements to UI components
 * - Smooth transitions and visual feedback
 *
 * Performance:
 * - Optimized hover state management
 * - GPU-accelerated transitions
 * - Minimal re-renders with useState
 *
 * Accessibility:
 * - Keyboard navigation support
 * - ARIA labels for interactive elements
 * - Screen reader friendly code structure
 * - Focus management for hover interactions
 *
 * @component
 */

type HoverElement =
  | "nav"
  | "card"
  | "layout"
  | "content"
  | "user"
  | null;

/**
 * Props for WebAppVisual component
 */
export interface WebAppVisualProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * WebAppVisual - Interactive code editor with synchronized UI preview
 *
 * @example
 * ```tsx
 * <WebAppVisual className="w-full h-96" />
 * ```
 */
export const WebAppVisual = ({ className = "" }: WebAppVisualProps) => {
  const [hovered, setHovered] = useState<HoverElement>(null);

  return (
    <div
      className={`w-full h-full bg-zinc-950 flex items-stretch font-mono text-xs relative overflow-hidden rounded-lg border border-white/5 ${className}`}
      role="region"
      aria-label="Interactive code editor with live preview"
    >
      {/* Code Editor Panel */}
      <div className="w-[45%] border-r border-white/5 bg-zinc-900/20 p-4 flex flex-col gap-1 text-zinc-600 select-none text-[10px] leading-relaxed">
        {/* Editor controls */}
        <div className="flex gap-1.5 mb-3 opacity-50" aria-label="Editor controls">
          <div className="w-2 h-2 rounded-full bg-zinc-600" aria-label="Close" />
          <div className="w-2 h-2 rounded-full bg-zinc-600" aria-label="Minimize" />
          <div className="w-2 h-2 rounded-full bg-zinc-600" aria-label="Maximize" />
        </div>

        {/* Import statement */}
        <div>
          <span className="text-purple-400/70">import</span> {"{"}{" "}
          <span
            className={`cursor-pointer transition-colors ${
              hovered === "nav" ? "text-zinc-200" : ""
            }`}
            onMouseEnter={() => setHovered("nav")}
            onMouseLeave={() => setHovered(null)}
            tabIndex={0}
            role="button"
            aria-label="Sidebar component import"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setHovered(hovered === "nav" ? null : "nav");
              }
            }}
          >
            Sidebar
          </span>
          ,{" "}
          <span
            className={`cursor-pointer transition-colors ${
              hovered === "card" ? "text-zinc-200" : ""
            }`}
            onMouseEnter={() => setHovered("card")}
            onMouseLeave={() => setHovered(null)}
            tabIndex={0}
            role="button"
            aria-label="Card component import"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setHovered(hovered === "card" ? null : "card");
              }
            }}
          >
            Card
          </span>{" "}
          {"}"} <span className="text-purple-400/70">from</span>{" "}
          <span className="text-green-400/50">'@ui'</span>;
        </div>

        <div className="mb-1" />

        {/* Component export */}
        <div>
          <span className="text-purple-400/70">export const</span>{" "}
          <span className="text-yellow-200/70">App</span> = () =&gt; {"{"}
        </div>

        {/* Hook usage */}
        <div className="pl-4 text-zinc-500">
          <span className="text-purple-400/70">const</span> user ={" "}
          <span className="text-blue-400/70">useUser</span>();
        </div>

        <div className="pl-4 text-zinc-500">return (</div>

        {/* Layout component */}
        <div
          className={`pl-6 cursor-pointer transition-colors ${
            hovered === "layout"
              ? "text-zinc-200 bg-white/5 rounded px-1 -ml-1"
              : "text-zinc-500"
          }`}
          onMouseEnter={() => setHovered("layout")}
          onMouseLeave={() => setHovered(null)}
          tabIndex={0}
          role="button"
          aria-label="Layout component in code"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setHovered(hovered === "layout" ? null : "layout");
            }
          }}
        >
          &lt;<span className="text-red-400/70">Layout</span>&gt;
        </div>

        {/* Sidebar component */}
        <div
          className={`pl-8 cursor-pointer transition-colors ${
            hovered === "nav"
              ? "text-zinc-200 bg-white/5 rounded px-1 -ml-1"
              : "text-zinc-500"
          }`}
          onMouseEnter={() => setHovered("nav")}
          onMouseLeave={() => setHovered(null)}
          tabIndex={0}
          role="button"
          aria-label="Sidebar component in code"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setHovered(hovered === "nav" ? null : "nav");
            }
          }}
        >
          &lt;<span className="text-red-400/70">Sidebar</span> active=
          {"{true}"} /&gt;
        </div>

        {/* Content component */}
        <div
          className={`pl-8 cursor-pointer transition-colors ${
            hovered === "content"
              ? "text-zinc-200 bg-white/5 rounded px-1 -ml-1"
              : "text-zinc-500"
          }`}
          onMouseEnter={() => setHovered("content")}
          onMouseLeave={() => setHovered(null)}
          tabIndex={0}
          role="button"
          aria-label="Content component in code"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setHovered(hovered === "content" ? null : "content");
            }
          }}
        >
          &lt;<span className="text-red-400/70">Content</span>&gt;
        </div>

        {/* Header component */}
        <div
          className={`pl-10 cursor-pointer transition-colors ${
            hovered === "user"
              ? "text-zinc-200 bg-white/5 rounded px-1 -ml-1"
              : "text-zinc-500"
          }`}
          onMouseEnter={() => setHovered("user")}
          onMouseLeave={() => setHovered(null)}
          tabIndex={0}
          role="button"
          aria-label="Header component in code"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setHovered(hovered === "user" ? null : "user");
            }
          }}
        >
          &lt;<span className="text-red-400/70">Header</span> user=
          {"{user}"} /&gt;
        </div>

        {/* MetricCard component */}
        <div
          className={`pl-10 cursor-pointer transition-colors ${
            hovered === "card"
              ? "text-zinc-200 bg-white/5 rounded px-1 -ml-1"
              : "text-zinc-500"
          }`}
          onMouseEnter={() => setHovered("card")}
          onMouseLeave={() => setHovered(null)}
          tabIndex={0}
          role="button"
          aria-label="MetricCard component in code"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setHovered(hovered === "card" ? null : "card");
            }
          }}
        >
          &lt;<span className="text-red-400/70">MetricCard</span> /&gt;
        </div>

        {/* Closing tags */}
        <div className="pl-8 text-zinc-500">
          &lt;/<span className="text-red-400/70">Content</span>&gt;
        </div>
        <div className="pl-6 text-zinc-500">
          &lt;/<span className="text-red-400/70">Layout</span>&gt;
        </div>
        <div className="pl-4 text-zinc-500">);</div>
        <div>{"}"}</div>
      </div>

      {/* UI Preview Panel */}
      <div
        className={`flex-1 bg-zinc-950 flex flex-col relative transition-all duration-500 ${
          hovered === "layout" ? "ring-1 ring-indigo-500/30 bg-zinc-900/10" : ""
        }`}
        style={{ willChange: hovered === "layout" ? "box-shadow" : "auto" }}
      >
        {/* Top navigation bar */}
        <div className="h-6 border-b border-white/5 flex items-center px-3 gap-2">
          <div className="w-full h-1.5 bg-zinc-900 rounded-full max-w-[60%]" />
        </div>

        <div className="flex-1 flex">
          {/* Sidebar navigation */}
          <div
            className={`w-10 border-r border-white/5 flex flex-col items-center py-3 gap-3 transition-all duration-300 ${
              hovered === "nav" ? "bg-zinc-900/80 border-indigo-500/20" : ""
            }`}
            style={{ willChange: hovered === "nav" ? "background-color" : "auto" }}
          >
            <div
              className={`w-5 h-5 rounded bg-zinc-800 transition-colors ${
                hovered === "nav" ? "bg-indigo-500/50" : ""
              }`}
            />
            <div className="w-5 h-5 rounded bg-zinc-900" />
            <div className="w-5 h-5 rounded bg-zinc-900" />
            <div className="w-5 h-5 rounded-full bg-zinc-900 border border-white/5 mt-auto" />
          </div>

          {/* Main content area */}
          <div
            className={`flex-1 p-4 flex flex-col gap-4 bg-zinc-900/20 transition-colors duration-300 ${
              hovered === "content" ? "bg-zinc-900/60" : ""
            }`}
          >
            {/* Header with user info */}
            <div
              className={`h-6 w-full flex items-center justify-between transition-all duration-300 ${
                hovered === "user" ? "opacity-100" : "opacity-60"
              }`}
            >
              <div className="h-2 w-20 bg-zinc-800 rounded-full" />
              <div
                className={`flex items-center gap-2 transition-all ${
                  hovered === "user" ? "scale-105" : ""
                }`}
                style={{ willChange: hovered === "user" ? "transform" : "auto" }}
              >
                <div className="h-2 w-8 bg-zinc-800 rounded-full" />
                <div
                  className={`h-5 w-5 rounded-full bg-zinc-800 border border-white/5 ${
                    hovered === "user"
                      ? "border-emerald-500/50 bg-emerald-900/20"
                      : ""
                  }`}
                />
              </div>
            </div>

            {/* Metric cards grid */}
            <div className="grid grid-cols-2 gap-3">
              <div
                className={`aspect-video rounded-lg border border-white/5 bg-zinc-950 p-2 flex flex-col justify-between transition-all duration-300 ${
                  hovered === "card"
                    ? "border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.1)] scale-105"
                    : ""
                }`}
                style={{
                  willChange: hovered === "card" ? "transform, box-shadow" : "auto",
                }}
              >
                <div className="h-1.5 w-8 bg-zinc-800 rounded-full" />
                <div className="h-3 w-12 bg-zinc-800 rounded" />
              </div>
              <div className="aspect-video rounded-lg border border-white/5 bg-zinc-950 p-2 flex flex-col justify-between opacity-50">
                <div className="h-1.5 w-8 bg-zinc-800 rounded-full" />
                <div className="h-3 w-12 bg-zinc-800 rounded" />
              </div>
            </div>

            {/* Chart visualization */}
            <div className="flex-1 rounded-lg border border-white/5 bg-zinc-950 p-2 flex items-end gap-1 opacity-50">
              {[40, 70, 30, 80, 50, 90].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-zinc-800 rounded-t-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebAppVisual;
