import { motion } from "framer-motion";
import { useState } from "react";
import {
  Users,
  ArrowRight,
  CheckSquare,
  AlertCircle,
  ChevronDown,
} from "lucide-react";

/**
 * Product UI Components
 *
 * Interactive product demonstrations extracted from template.tsx
 * Showcasing AssetDock and Fitsy product interfaces.
 *
 * Components:
 * - AssetDockSimpleUI: Asset table with hover states
 * - FitsySimpleUI: User profile with volume bar chart
 * - FitsyBuilderUI: Hypertrophy block with programming cards
 * - AssetDockManagerUI: Full asset management interface
 *
 * Features:
 * - Exact grid layouts and spacing from template
 * - Hover animations and transitions
 * - Precise text sizing (text-[9px], text-[10px])
 * - Emerald/amber/red status indicators
 * - Font styles (font-mono, uppercase, tracking)
 * - Framer drag interactions
 *
 * @component
 */

// Utility function from template
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * AssetDockSimpleUI - Asset table with hover states
 *
 * Simple asset list with status indicators and hover interactions.
 * Shows live asset tracking with status-based color coding.
 */
export const AssetDockSimpleUI = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  return (
    <div className="w-full h-full bg-zinc-950 p-0 relative flex flex-col text-xs font-sans group overflow-hidden">
      <div className="p-3 border-b border-white/5 bg-zinc-900/20 flex justify-between items-center">
        <span className="font-semibold text-zinc-400 text-[10px]">Assets</span>
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></div>
          <span className="text-[9px] text-zinc-600">Live</span>
        </div>
      </div>
      <div className="p-2 flex-1 relative">
        <div className="grid grid-cols-1 gap-1">
          {[
            {
              n: "MacBook Pro M3",
              s: "Available",
              c: "bg-emerald-500/10 text-emerald-500",
            },
            {
              n: 'iPad Pro 12.9"',
              s: "In Use",
              c: "bg-amber-500/10 text-amber-500",
            },
            {
              n: "Dell XPS 15",
              s: "Maintenance",
              c: "bg-red-500/10 text-red-500",
            },
          ].map((i, k) => (
            <div
              key={k}
              onMouseEnter={() => setHoveredRow(k)}
              onMouseLeave={() => setHoveredRow(null)}
              className="grid grid-cols-4 items-center p-2 rounded hover:bg-zinc-900/50 transition-colors cursor-default group/row relative h-8 gap-2"
            >
              <div className="col-span-2 flex items-center gap-2 truncate">
                <div
                  className={`w-1.5 h-1.5 shrink-0 rounded-full ${
                    i.s === "Available"
                      ? "bg-emerald-500"
                      : i.s === "In Use"
                        ? "bg-amber-500"
                        : "bg-red-500"
                  }`}
                ></div>
                <span className="text-zinc-400 group-hover/row:text-zinc-200 transition-colors truncate">
                  {i.n}
                </span>
              </div>

              <div className="col-span-2 flex justify-end items-center relative h-full">
                {/* FIXED: Using absolute positioning for both elements to prevent layout shift */}
                <div className="relative w-full h-full flex items-center justify-end">
                  <span
                    className={cn(
                      `text-[9px] px-1.5 py-0.5 rounded transition-opacity duration-200 absolute right-0`,
                      i.c,
                      hoveredRow === k ? "opacity-0" : "opacity-100"
                    )}
                  >
                    {i.s}
                  </span>
                  <span
                    className={cn(
                      "text-[9px] text-indigo-400 cursor-pointer font-medium transition-opacity duration-200 absolute right-0",
                      hoveredRow === k ? "opacity-100" : "opacity-0"
                    )}
                  >
                    View Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-2 w-full text-center text-[9px] text-zinc-600 border-t border-dashed border-white/5 pt-2">
          + 142 more items
        </div>
      </div>
    </div>
  );
};

/**
 * FitsySimpleUI - User profile with volume bar chart
 *
 * Athlete profile card with interactive volume visualization.
 * Shows active session status and training volume metrics.
 */
export const FitsySimpleUI = () => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  return (
    <div className="w-full h-full bg-zinc-950 p-5 flex flex-col justify-between font-sans">
      <div className="flex gap-3 items-center mb-4">
        <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
          <Users size={14} className="text-zinc-600" />
        </div>
        <div>
          <div className="text-sm text-zinc-400">Alex D.</div>
          <div className="text-[10px] text-zinc-600">Active Session</div>
        </div>
      </div>
      <div className="bg-zinc-900/30 p-3 rounded border border-white/5">
        <div className="flex justify-between mb-2">
          <span className="text-[10px] text-zinc-600">VOLUME</span>
          <span className="text-xs text-zinc-300">
            {hoveredBar !== null ? `${(hoveredBar + 4) * 1000}kg` : "12,450kg"}
          </span>
        </div>
        <div className="h-8 flex items-end gap-1">
          {[40, 70, 50, 90, 60].map((h, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHoveredBar(i)}
              onMouseLeave={() => setHoveredBar(null)}
              style={{ height: `${h}%` }}
              className={`flex-1 rounded-t-[1px] transition-all duration-200 ${
                hoveredBar === i ? "bg-indigo-500/60" : "bg-zinc-800"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * FitsyBuilderUI - Hypertrophy block with programming cards
 *
 * Training block interface with readiness metrics, volume tracking,
 * and draggable programming cards.
 */
export const FitsyBuilderUI = () => (
  <div className="w-full h-full bg-zinc-950 p-6 flex flex-col gap-6 relative font-sans overflow-hidden">
    <div className="flex justify-between items-center border-b border-white/5 pb-4">
      <div>
        <div className="text-sm font-bold text-white">
          Block 1: Hypertrophy
        </div>
        <div className="text-xs text-zinc-500">Microcycle 3 • Week 4</div>
      </div>
      <div className="px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-500 uppercase">
        In Progress
      </div>
    </div>
    <div className="flex gap-6">
      <div className="flex-1 bg-zinc-900/30 border border-white/5 rounded-lg p-4">
        <div className="text-[10px] text-zinc-500 uppercase mb-3">
          Readiness
        </div>
        <div className="flex items-end gap-2">
          <span className="text-3xl font-bold text-white">92</span>
          <span className="text-xs text-emerald-500 mb-1">High</span>
        </div>
        <div className="w-full bg-zinc-800 h-1 mt-3 rounded-full overflow-hidden">
          <div className="w-[92%] h-full bg-emerald-500 rounded-full"></div>
        </div>
      </div>
      <div className="flex-1 bg-zinc-900/30 border border-white/5 rounded-lg p-4">
        <div className="text-[10px] text-zinc-500 uppercase mb-3">
          Volume Load
        </div>
        <div className="flex items-end gap-2">
          <span className="text-3xl font-bold text-white">12k</span>
          <span className="text-xs text-zinc-500 mb-1">kg</span>
        </div>
        <div className="flex items-end gap-1 h-2 mt-3">
          {[40, 60, 30, 80, 50, 90, 60].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className="flex-1 bg-indigo-500/40 rounded-[1px]"
            ></div>
          ))}
        </div>
      </div>
    </div>
    <div className="flex-1 space-y-2">
      <div className="text-[10px] text-zinc-600 uppercase tracking-widest mb-2">
        Programming
      </div>
      {[
        { n: "Primary Compound", s: "3x5", r: "@8" },
        { n: "Secondary Deviation", s: "4x8", r: "@7" },
        { n: "Isolation A", s: "3x12", r: "@9" },
      ].map((b, i) => (
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          key={i}
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center justify-between p-3 bg-zinc-900/40 border border-white/5 rounded hover:bg-zinc-900 hover:border-indigo-500/20 transition-colors cursor-grab active:cursor-grabbing"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-indigo-500/30 rounded-full"></div>
            <span className="text-sm text-zinc-300">{b.n}</span>
          </div>
          <div className="flex gap-4 text-xs font-mono text-zinc-500">
            <span>{b.s}</span>
            <span>{b.r}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

/**
 * AssetDockManagerUI - Full asset management interface
 *
 * Complete asset management system with fleet overview,
 * detailed asset view, and inspection workflows.
 */
export const AssetDockManagerUI = () => {
  const [view, setView] = useState("list");
  const [selectedAsset, setSelectedAsset] = useState<{
    id: string;
    name: string;
    status: string;
    loc: string;
  } | null>(null);

  const assets = [
    { id: "AD-042", name: "Forklift XJ-9", status: "Active", loc: "Zone A" },
    {
      id: "AD-043",
      name: "Hydraulic Press",
      status: "Inspection Due",
      loc: "Zone B",
    },
    {
      id: "AD-044",
      name: "Conveyor Motor",
      status: "Maintenance",
      loc: "Zone C",
    },
  ];

  return (
    <div className="w-full h-full bg-zinc-950 flex font-sans text-xs">
      <div className="w-1/3 border-r border-white/5 bg-zinc-900/30 flex flex-col">
        <div className="p-4 border-b border-white/5">
          <div className="font-bold text-white mb-1">Asset Fleet</div>
          <div className="text-[10px] text-zinc-500">
            Heavy Machinery Division
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {assets.map((a, i) => (
            <div
              key={i}
              onClick={() => {
                setSelectedAsset(a);
                setView("list");
              }}
              className={`p-3 rounded cursor-pointer transition-colors border ${
                selectedAsset === a
                  ? "bg-zinc-800/80 border-white/10"
                  : "hover:bg-zinc-800/30 border-transparent"
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-zinc-200 font-medium">{a.name}</span>
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    a.status === "Active"
                      ? "bg-emerald-500"
                      : a.status === "Inspection Due"
                        ? "bg-amber-500"
                        : "bg-red-500"
                  }`}
                ></div>
              </div>
              <div className="flex justify-between text-[10px] text-zinc-500">
                <span className="font-mono">{a.id}</span>
                <span>{a.loc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col relative overflow-hidden bg-zinc-950">
        {selectedAsset ? (
          <div className="flex-1 p-6 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {selectedAsset.name}
                </h3>
                <div className="flex gap-2 text-zinc-500 mt-1">
                  <span>ID: {selectedAsset.id}</span>
                  <span>•</span>
                  <span>{selectedAsset.loc}</span>
                </div>
              </div>
              <div
                className={`px-2 py-1 rounded border text-[10px] font-bold uppercase ${
                  selectedAsset.status === "Active"
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                    : selectedAsset.status === "Inspection Due"
                      ? "bg-amber-500/10 border-amber-500/20 text-amber-500"
                      : "bg-red-500/10 border-red-500/20 text-red-500"
                }`}
              >
                {selectedAsset.status}
              </div>
            </div>

            {view === "list" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <button className="p-3 bg-zinc-900/50 border border-white/10 rounded hover:bg-zinc-800 transition-colors flex flex-col items-center gap-2 group">
                    <ArrowRight
                      className="text-zinc-400 group-hover:text-white"
                      size={16}
                    />
                    <span className="text-zinc-300">Check Out</span>
                  </button>
                  <button className="p-3 bg-zinc-900/50 border border-white/10 rounded hover:bg-zinc-800 transition-colors flex flex-col items-center gap-2 group">
                    <CheckSquare
                      className="text-zinc-400 group-hover:text-white"
                      size={16}
                    />
                    <span className="text-zinc-300">Check In</span>
                  </button>
                </div>

                {selectedAsset.status === "Inspection Due" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-amber-500/5 border border-amber-500/20 rounded flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <AlertCircle size={16} className="text-amber-500" />
                      <div>
                        <div className="text-amber-200 font-bold">
                          Inspection Required
                        </div>
                        <div className="text-amber-500/60 text-[10px]">
                          Overdue by 3 days
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setView("inspect")}
                      className="px-3 py-1.5 bg-amber-500 text-black font-bold rounded hover:bg-amber-400 transition-colors"
                    >
                      Start
                    </button>
                  </motion.div>
                )}
              </div>
            )}

            {view === "inspect" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1 flex flex-col"
              >
                <div
                  className="flex items-center gap-2 mb-4 text-zinc-500 cursor-pointer hover:text-white"
                  onClick={() => setView("list")}
                >
                  <ChevronDown className="rotate-90" size={12} /> Back
                </div>
                <div className="space-y-2">
                  {[
                    "Safety Guard Check",
                    "Hydraulic Pressure Test",
                    "Emergency Stop Test",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-zinc-900/50 border border-white/5 rounded"
                    >
                      <span className="text-zinc-300">{item}</span>
                      <div className="w-4 h-4 rounded border border-zinc-600 cursor-pointer hover:bg-emerald-500 hover:border-emerald-500 transition-colors"></div>
                    </div>
                  ))}
                </div>
                <button className="mt-auto w-full py-3 bg-emerald-600 text-white font-bold rounded hover:bg-emerald-500 transition-colors">
                  Issue Certificate
                </button>
              </motion.div>
            )}
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-zinc-600">
            Select an asset
          </div>
        )}
      </div>
    </div>
  );
};

// TypeScript prop types for external usage
export interface AssetDockSimpleUIProps {}
export interface FitsySimpleUIProps {}
export interface FitsyBuilderUIProps {}
export interface AssetDockManagerUIProps {}
