import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Laptop2,
  Smartphone,
  Tablet,
  Cloud,
  Database,
  Wifi,
  Server,
  ShieldCheck,
  Box,
  RefreshCw,
  Layout,
  Network
} from 'lucide-react';
import { useReducedMotion } from '../../lib/useReducedMotion';

// RocketIcon - Custom SVG icon from template
const RocketIcon = ({ size, className }: { size: number; className: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

export const UniversalPlatformVisual = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full h-full bg-zinc-950 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div
          className="w-16 h-16 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          animate={prefersReducedMotion ? {} : {
            boxShadow: [
              "0 0 30px rgba(255,255,255,0.05)",
              "0 0 50px rgba(255,255,255,0.1)",
              "0 0 30px rgba(255,255,255,0.05)"
            ]
          }}
          transition={{ duration: prefersReducedMotion ? 0 : 3, repeat: Infinity }}
        >
          <Code size={24} className="text-white" />
        </motion.div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 120, 240].map((deg, i) => (
          <motion.div
            key={i}
            className="absolute w-48 h-48"
            style={{ rotate: deg }}
            animate={prefersReducedMotion ? {} : { rotate: deg + 360 }}
            transition={{ duration: prefersReducedMotion ? 0 : 40, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center shadow-lg z-30"
              style={{ rotate: -deg }}
              animate={prefersReducedMotion ? {} : { rotate: -(deg + 360) }}
              transition={{ duration: prefersReducedMotion ? 0 : 40, repeat: Infinity, ease: "linear" }}
            >
              {i === 0 && <Laptop2 size={16} className="text-zinc-500" />}
              {i === 1 && <Smartphone size={16} className="text-zinc-500" />}
              {i === 2 && <Tablet size={16} className="text-zinc-500" />}
            </motion.div>
          </motion.div>
        ))}
      </div>
      {[0, 120, 240].map((deg, i) => (
        <div
          key={i}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ transform: `rotate(${deg}deg)` }}
        >
          <motion.div
            className="w-1 h-1 bg-white rounded-full absolute top-[50%] left-[50%]"
            animate={prefersReducedMotion ? {} : { y: -90, opacity: [0, 1, 0] }}
            transition={{ duration: prefersReducedMotion ? 0 : 2, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
          />
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-48 h-48 rounded-full border border-white/5 border-dashed opacity-50"></div>
      </div>
    </div>
  );
};

export const CloudTopologyVisual = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full h-full bg-zinc-950 flex items-center justify-center relative overflow-hidden p-6">
      <div className="relative w-full max-w-[200px] aspect-video">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center z-10"
          animate={prefersReducedMotion ? {} : { y: [0, -5, 0] }}
          transition={{ duration: prefersReducedMotion ? 0 : 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cloud size={14} className="text-zinc-500" />
        </motion.div>
        <div className="absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-16 w-full flex justify-between">
          {[1, 2, 3].map(i => (
            <motion.div
              key={i}
              className="w-8 h-8 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center z-10"
              whileHover={prefersReducedMotion ? {} : { scale: 1.1, borderColor: "rgba(255,255,255,0.2)" }}
            >
              <Database size={12} className="text-zinc-600" />
            </motion.div>
          ))}
        </div>
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path d="M100 32 L100 40 L20 40 L20 64" fill="none" stroke="rgba(255,255,255,0.05)" />
          <path d="M100 32 L100 64" fill="none" stroke="rgba(255,255,255,0.05)" />
          <path d="M100 32 L100 40 L180 40 L180 64" fill="none" stroke="rgba(255,255,255,0.05)" />
        </svg>
      </div>
    </div>
  );
};

export const SignalPulseVisual = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full h-full bg-zinc-950 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-zinc-950 to-zinc-950"></div>
      <motion.div
        className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center relative z-20 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
        animate={prefersReducedMotion ? {} : {
          borderColor: [
            "rgba(255,255,255,0.1)",
            "rgba(16,185,129,0.4)",
            "rgba(255,255,255,0.1)"
          ]
        }}
        transition={{ duration: prefersReducedMotion ? 0 : 2, repeat: Infinity }}
      >
        <Wifi size={16} className="text-emerald-500/80" />
      </motion.div>
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          className="absolute w-10 h-10 rounded-full border border-emerald-500/10 z-10"
          initial={prefersReducedMotion ? { scale: 1, opacity: 0 } : { scale: 1, opacity: 0.8 }}
          animate={prefersReducedMotion ? {} : { scale: 4, opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 3, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
        />
      ))}
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-full flex items-center justify-center pointer-events-none z-10"
          animate={prefersReducedMotion ? {} : { rotate: 360 }}
          transition={{ duration: prefersReducedMotion ? 0 : 60, repeat: Infinity, ease: "linear", delay: i * -5 }}
        >
          <div className="h-[140px] flex flex-col justify-between items-center" style={{ transform: `rotate(${deg}deg)` }}>
            <div className="w-2 h-2 bg-zinc-800 rounded-full border border-white/10" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export const MigrationVisual = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full h-full bg-zinc-950 relative overflow-hidden flex items-center justify-between px-8">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.02)_50%,transparent_100%)]"></div>
      <div className="flex flex-col gap-1 relative z-10">
        <div className="text-[9px] text-zinc-600 font-mono mb-1 text-center">LEGACY</div>
        {[1, 2, 3].map(i => (
          <div key={i} className="w-12 h-4 bg-zinc-900 border border-zinc-800 rounded-sm" />
        ))}
      </div>
      <div className="flex-1 h-full relative overflow-hidden mx-4 flex items-center">
        <div className="w-full h-px bg-zinc-800/50 border-t border-dashed border-zinc-800"></div>
        {[1, 2, 3].map(i => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            animate={prefersReducedMotion ? {} : { left: ["0%", "100%"], opacity: [0, 1, 0] }}
            transition={{ duration: prefersReducedMotion ? 0 : 2, repeat: Infinity, delay: i * 0.6, ease: "linear" }}
            style={{ top: "50%", marginTop: "-4px" }}
          />
        ))}
      </div>
      <div className="flex flex-col gap-1 relative z-10">
        <div className="text-[9px] text-emerald-500 font-mono mb-1 text-center">CLOUD</div>
        {[1, 2, 3].map(i => (
          <motion.div
            key={i}
            className="w-12 h-4 bg-zinc-900 border border-white/10 rounded-sm shadow-[0_0_10px_rgba(16,185,129,0.05)]"
            animate={prefersReducedMotion ? {} : {
              borderColor: [
                "rgba(255,255,255,0.1)",
                "rgba(16,185,129,0.3)",
                "rgba(255,255,255,0.1)"
              ]
            }}
            transition={{ duration: prefersReducedMotion ? 0 : 3, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>
    </div>
  );
};

export const FullStackVisual = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full h-full bg-zinc-950 p-6 flex flex-col justify-center gap-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-800/50 -translate-y-1/2 z-0">
        <motion.div
          className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"
          animate={prefersReducedMotion ? {} : { left: ["-10%", "110%"] }}
          transition={{ duration: prefersReducedMotion ? 0 : 2, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 relative z-10">
        {[
          { icon: Smartphone, label: "Client", tech: "React" },
          { icon: Server, label: "API", tech: "Node.js" },
          { icon: Database, label: "Store", tech: "Postgres" }
        ].map((node, i) => (
          <motion.div
            key={i}
            className="aspect-square rounded-xl bg-zinc-900 border border-white/10 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:border-white/20 transition-colors"
            whileHover={prefersReducedMotion ? {} : { y: -5 }}
          >
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <node.icon size={18} className="text-zinc-500 group-hover:text-zinc-300" />
            </div>
            <div className="text-center">
              <div className="text-xs font-bold text-zinc-300">{node.label}</div>
              <div className="text-[10px] text-zinc-600 font-mono opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 group-hover:translate-y-0 duration-300">
                {node.tech}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const DataArchitectureVisual = () => {
  const [activeShard, setActiveShard] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full h-full bg-zinc-950 p-8 flex items-center justify-center">
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <motion.div
            key={i}
            className={`w-10 h-10 rounded border flex items-center justify-center cursor-pointer transition-all duration-300 ${
              activeShard === i
                ? 'bg-indigo-500/10 border-indigo-500/30'
                : 'bg-zinc-900 border-white/10'
            }`}
            onMouseEnter={() => setActiveShard(i)}
            onMouseLeave={() => setActiveShard(null)}
            whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
          >
            <Database size={14} className={activeShard === i ? "text-indigo-400" : "text-zinc-600"} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const DevOpsPipelineVisual = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full h-full bg-zinc-950 p-6 flex flex-col justify-center gap-4 relative overflow-hidden">
      <div className="flex justify-between items-center px-2 relative z-10">
        {['Lint', 'Test', 'Build', 'Deploy'].map((step, i) => (
          <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-white/20 group-hover:bg-zinc-800 transition-all">
              {i === 0 && <Code size={12} className="text-zinc-500 group-hover:text-zinc-300" />}
              {i === 1 && <ShieldCheck size={12} className="text-zinc-500 group-hover:text-zinc-300" />}
              {i === 2 && <Box size={12} className="text-zinc-500 group-hover:text-zinc-300" />}
              {i === 3 && <RocketIcon size={12} className="text-zinc-500 group-hover:text-zinc-300" />}
            </div>
            <span className="text-[9px] text-zinc-600 uppercase tracking-wider">{step}</span>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-6 right-6 h-px bg-zinc-800 -translate-y-4 z-0">
        <motion.div
          className="absolute top-0 bottom-0 w-8 bg-indigo-500/30 blur-[4px]"
          animate={prefersReducedMotion ? {} : { left: ["0%", "100%"] }}
          transition={{ duration: prefersReducedMotion ? 0 : 3, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export const ModernizationVisual = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full h-full bg-zinc-950 p-8 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-2 w-48">
        <motion.div
          className="col-span-2 h-24 bg-red-500/5 border border-red-500/10 rounded flex items-center justify-center cursor-not-allowed"
          whileHover={prefersReducedMotion ? {} : { rotate: 1, scale: 0.98 }}
        >
          <span className="text-[10px] font-mono text-red-500/40 decoration-line-through">LEGACY_CORE</span>
        </motion.div>
        <motion.div
          initial={prefersReducedMotion ? { scale: 1 } : { scale: 0 }}
          whileInView={prefersReducedMotion ? {} : { scale: 1 }}
          transition={{ delay: prefersReducedMotion ? 0 : 0.2 }}
          className="h-20 bg-emerald-500/5 border border-emerald-500/10 rounded flex items-center justify-center"
        >
          <RefreshCw size={16} className="text-emerald-500/60" />
        </motion.div>
        <motion.div
          initial={prefersReducedMotion ? { scale: 1 } : { scale: 0 }}
          whileInView={prefersReducedMotion ? {} : { scale: 1 }}
          transition={{ delay: prefersReducedMotion ? 0 : 0.4 }}
          className="h-20 bg-indigo-500/5 border border-indigo-500/10 rounded flex items-center justify-center"
        >
          <Database size={16} className="text-indigo-500/60" />
        </motion.div>
      </div>
    </div>
  );
};

export const TechStackVisual = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4 select-none">
      {[
        { l: "Frontend", i: Layout },
        { l: "Edge", i: Network }
      ].map((item, i) => (
        <motion.div
          key={i}
          className="w-full h-10 rounded border border-white/5 bg-zinc-900/30 flex items-center justify-between px-3 relative z-10 backdrop-blur-sm"
          whileHover={prefersReducedMotion ? {} : { scale: 1.02, x: 2 }}
        >
          <div className="flex items-center gap-2">
            <item.i size={12} className="text-zinc-500" />
            <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">{item.l}</span>
          </div>
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-indigo-500/40"></div>
            <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
