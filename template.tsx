import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Menu, X, CheckCircle2, BarChart3, Box, Users, Layout, Server, Smartphone, 
  Database, Fan, Activity, Mail, MapPin, Github, Twitter, Linkedin, ChevronRight, 
  Scale, Settings, Cpu, Globe, ScanLine, QrCode, Calendar, Dumbbell, LineChart, Send,
  Monitor, Layers, Code, Laptop, ShieldCheck, Wifi, FileText, ClipboardCheck, UserCheck,
  RefreshCw, TerminalSquare, HardDrive, Network, Cloud, Zap, MessageSquare, ChevronDown, Plus,
  Command, Hash, ArrowUpRight, Terminal, Clipboard, CheckSquare, AlertCircle, Search, Tag,
  Component, Workflow, Signal, Radio, Cable, ArrowRightLeft, Laptop2, Tablet
} from 'lucide-react';

// ==========================================
// 1. UTILITIES & PRIMITIVES
// ==========================================

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const StandardButton = ({ children, className = "", onClick, variant = "primary" }) => {
    const base = "w-full py-3 px-6 font-bold rounded-lg text-sm transition-all duration-200 active:scale-95 flex items-center justify-center gap-2";
    const variants = {
        primary: "bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]",
        secondary: "bg-zinc-900 border border-white/10 text-zinc-300 hover:bg-zinc-800 hover:text-white",
        outline: "bg-transparent border border-white/10 text-zinc-400 hover:text-white hover:border-white/30"
    };
    
    return (
        <button onClick={onClick} type="button" className={cn(base, variants[variant], className)}>
            {children}
        </button>
    )
}

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255,255,255,0.03)" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div className={cn("group relative border border-white/5 bg-zinc-900/20 overflow-hidden rounded-xl", className)} onMouseMove={handleMouseMove}>
      <div className="relative z-10 h-full">{children}</div>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{ background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)` }}
      />
    </div>
  );
};

// ==========================================
// 2. VISUAL COMPONENTS
// ==========================================

const WorldMap = () => {
    const points = [{ start: { x: 430, y: 280 }, end: { x: 220, y: 140 } }, { start: { x: 430, y: 280 }, end: { x: 390, y: 110 } }, { start: { x: 430, y: 280 }, end: { x: 700, y: 140 } }, { start: { x: 430, y: 280 }, end: { x: 620, y: 220 } }];
    const worldPath = "M 230 110 Q 250 90 280 100 T 310 120 T 340 100 Q 360 80 340 60 T 290 40 Q 250 30 220 60 T 200 100 Z M 450 100 Q 460 80 480 90 T 500 80 T 520 90 Q 530 110 510 120 T 470 130 T 450 100 Z M 650 100 Q 700 80 750 100 T 800 120 Q 820 150 780 180 T 700 200 Q 650 180 650 140 T 650 100 Z M 480 180 Q 500 160 530 180 T 560 220 Q 580 260 550 320 T 500 350 Q 460 320 480 250 T 480 180 Z M 700 250 Q 720 240 740 250 T 750 280 Q 740 300 710 290 T 680 270 T 700 250 Z M 250 200 Q 280 180 300 210 T 310 250 Q 300 320 280 350 T 240 320 Q 220 280 240 240 T 250 200 Z";
    return (
        <div className="w-full h-full bg-zinc-950 rounded-lg relative font-sans overflow-hidden border border-white/5 opacity-60 grayscale contrast-125">
            <div className="absolute inset-0"><svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice"><defs><pattern id="dot-pattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#3f3f46" /></pattern><mask id="world-shape"><path d={worldPath} fill="white" stroke="white" strokeWidth="15" strokeLinejoin="round" transform="scale(1.05) translate(10,10)" /></mask></defs><rect width="100%" height="100%" fill="url(#dot-pattern)" mask="url(#world-shape)" opacity="0.5" /></svg></div>
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="white" stopOpacity="0" /><stop offset="50%" stopColor="#71717a" stopOpacity="1" /><stop offset="100%" stopColor="white" stopOpacity="0" /></linearGradient></defs>{points.map((dot, i) => { const midX = (dot.start.x + dot.end.x) / 2; const midY = Math.min(dot.start.y, dot.end.y) - 50; const path = `M ${dot.start.x} ${dot.start.y} Q ${midX} ${midY} ${dot.end.x} ${dot.end.y}`; return ( <g key={i}><motion.path d={path} fill="none" stroke="url(#path-gradient)" strokeWidth="1" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.4 }} transition={{ duration: 1.5, delay: i * 0.5, ease: "easeOut" }} /><motion.circle r="1.5" fill="white" animate={{ offsetDistance: "100%", opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: Math.random() * 2 }} style={{ offsetPath: `path('${path}')` }} /></g> ) })}</svg>
        </div>
    );
};

// Industrial / Logable Widgets
const SiloWidget = () => (<div className="bg-zinc-900/40 border border-white/5 rounded-lg p-4 flex flex-col items-center justify-between h-full cursor-pointer group hover:border-white/10 transition-colors hover:bg-zinc-900/60"><div className="w-full flex justify-between text-[10px] text-zinc-500 uppercase tracking-wider mb-2"><span>Silo 04</span><span className="text-zinc-300 group-hover:text-white transition-colors">84%</span></div><div className="relative h-full w-16 border-x border-b border-white/10 bg-zinc-900/50 rounded-b-lg overflow-hidden"><div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-10 pointer-events-none"></div><motion.div className="absolute bottom-0 left-0 right-0 bg-emerald-500/10 w-full" initial={{ height: "40%" }} animate={{ height: ["80%", "84%", "82%"] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}><div className="w-full h-1 bg-emerald-500/20 absolute top-0"></div></motion.div><div className="absolute inset-0 flex flex-col justify-evenly pointer-events-none">{[1,2,3,4].map(i => <div key={i} className="w-full h-px bg-white/5"></div>)}</div></div><div className="mt-2 text-[9px] text-zinc-600 font-mono">GRAIN_STORAGE</div></div>);
const ConveyorWidget = () => (<div className="bg-zinc-900/40 border border-white/5 rounded-lg p-4 flex flex-col justify-between h-full overflow-hidden relative cursor-pointer group hover:border-white/10 transition-colors hover:bg-zinc-900/60"><div className="w-full flex justify-between text-[10px] text-zinc-500 uppercase tracking-wider mb-4 relative z-10"><span>Line A</span><div className="flex gap-1.5 items-center"><div className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full animate-pulse"></div><span className="text-emerald-500/50 text-[9px]">Active</span></div></div><div className="relative h-12 w-full flex items-center overflow-hidden"><div className="absolute bottom-0 w-full h-2 bg-zinc-800/50 rounded-full overflow-hidden"><motion.div className="w-[200%] h-full flex" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>{Array(40).fill(0).map((_, i) => (<div key={i} className="w-1 h-full bg-zinc-700/50 mr-4 transform -skew-x-12"></div>))}</motion.div></div><motion.div className="flex absolute bottom-2 left-0" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} style={{ width: "200%", display: "flex", gap: "2rem" }}>{Array(12).fill(0).map((_, i) => (<div key={i} className="w-8 h-6 shrink-0 bg-zinc-800 rounded border border-white/10 flex items-center justify-center shadow-lg z-10"><Box size={10} className="text-zinc-600" /></div>))}</motion.div></div></div>);
const PumpWidget = () => (<div className="bg-zinc-900/40 border border-white/5 rounded-lg p-4 flex flex-col justify-between h-full cursor-pointer group hover:border-white/10 transition-colors hover:bg-zinc-900/60"><div className="w-full flex justify-between text-[10px] text-zinc-500 uppercase tracking-wider"><span>Pump C</span><span className="text-zinc-300">450 RPM</span></div><div className="flex justify-center items-center flex-1 my-2"><div className="relative w-16 h-16 border border-white/5 rounded-full flex items-center justify-center bg-zinc-900/50"><motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}><Fan size={32} className="text-zinc-700 group-hover:text-indigo-500/40 transition-colors" /></motion.div></div></div><div className="w-full bg-zinc-800/50 h-1 rounded-full overflow-hidden"><div className="h-full bg-indigo-500/20 w-[60%] rounded-full"></div></div></div>);
const WeighBinWidget = () => (<div className="bg-zinc-900/40 border border-white/5 rounded-lg p-4 flex flex-col justify-between h-full cursor-pointer group hover:border-white/10 transition-colors hover:bg-zinc-900/60"><div className="w-full flex justify-between text-[10px] text-zinc-500 uppercase tracking-wider"><span>Scale 01</span><Scale size={12} /></div><div className="flex-1 flex items-center justify-center"><div className="font-mono text-2xl text-zinc-300 tracking-tighter"><motion.span initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}>1,245</motion.span><span className="text-xs text-zinc-600 ml-1">kg</span></div></div><div className="flex gap-1"><div className="h-1 flex-1 bg-emerald-500/20 rounded-full"></div><div className="h-1 flex-1 bg-emerald-500/20 rounded-full"></div><div className="h-1 flex-1 bg-zinc-800 rounded-full"></div></div></div>)
const LogableUI = () => (<div className="w-full h-full bg-zinc-950 p-4 flex flex-col gap-3 relative font-sans"><div className="flex items-center justify-between border-b border-white/5 pb-3"><div className="flex gap-2"><div className="h-2 w-2 rounded-full bg-red-500/20 border border-red-500/10"></div><div className="h-2 w-2 rounded-full bg-yellow-500/20 border border-yellow-500/10"></div></div><div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Dashboard_View_01</div></div><div className="grid grid-cols-2 grid-rows-2 gap-3 flex-1"><SiloWidget /><ConveyorWidget /><PumpWidget /><WeighBinWidget /></div></div>);

// Web App Visual
const WebAppVisual = () => {
    const [hovered, setHovered] = useState(null);
    return (
        <div className="w-full h-full bg-zinc-950 flex items-stretch font-mono text-xs relative overflow-hidden rounded-lg border border-white/5">
            <div className="w-[45%] border-r border-white/5 bg-zinc-900/20 p-4 flex flex-col gap-1 text-zinc-600 select-none text-[10px] leading-relaxed">
                <div className="flex gap-1.5 mb-3 opacity-50"><div className="w-2 h-2 rounded-full bg-zinc-600"></div><div className="w-2 h-2 rounded-full bg-zinc-600"></div><div className="w-2 h-2 rounded-full bg-zinc-600"></div></div>
                <div><span className="text-purple-400/70">import</span> {'{'} <span className={`cursor-pointer transition-colors ${hovered === 'nav' ? 'text-zinc-200' : ''}`} onMouseEnter={() => setHovered('nav')} onMouseLeave={() => setHovered(null)}>Sidebar</span>, <span className={`cursor-pointer transition-colors ${hovered === 'card' ? 'text-zinc-200' : ''}`} onMouseEnter={() => setHovered('card')} onMouseLeave={() => setHovered(null)}>Card</span> {'}'} <span className="text-purple-400/70">from</span> <span className="text-green-400/50">'@ui'</span>;</div>
                <div className="mb-1"></div>
                <div><span className="text-purple-400/70">export const</span> <span className="text-yellow-200/70">App</span> = () ={'>'} {'{'}</div>
                <div className="pl-4 text-zinc-500"><span className="text-purple-400/70">const</span> user = <span className="text-blue-400/70">useUser</span>();</div>
                <div className="pl-4 text-zinc-500">return (</div>
                <div className={`pl-6 cursor-pointer transition-colors ${hovered === 'layout' ? 'text-zinc-200 bg-white/5 rounded px-1 -ml-1' : 'text-zinc-500'}`} onMouseEnter={() => setHovered('layout')} onMouseLeave={() => setHovered(null)}>&lt;<span className="text-red-400/70">Layout</span>&gt;</div>
                <div className={`pl-8 cursor-pointer transition-colors ${hovered === 'nav' ? 'text-zinc-200 bg-white/5 rounded px-1 -ml-1' : 'text-zinc-500'}`} onMouseEnter={() => setHovered('nav')} onMouseLeave={() => setHovered(null)}>&lt;<span className="text-red-400/70">Sidebar</span> active={'{true}'} /&gt;</div>
                <div className={`pl-8 cursor-pointer transition-colors ${hovered === 'content' ? 'text-zinc-200 bg-white/5 rounded px-1 -ml-1' : 'text-zinc-500'}`} onMouseEnter={() => setHovered('content')} onMouseLeave={() => setHovered(null)}>&lt;<span className="text-red-400/70">Content</span>&gt;</div>
                <div className={`pl-10 cursor-pointer transition-colors ${hovered === 'user' ? 'text-zinc-200 bg-white/5 rounded px-1 -ml-1' : 'text-zinc-500'}`} onMouseEnter={() => setHovered('user')} onMouseLeave={() => setHovered(null)}>&lt;<span className="text-red-400/70">Header</span> user={'{user}'} /&gt;</div>
                <div className={`pl-10 cursor-pointer transition-colors ${hovered === 'card' ? 'text-zinc-200 bg-white/5 rounded px-1 -ml-1' : 'text-zinc-500'}`} onMouseEnter={() => setHovered('card')} onMouseLeave={() => setHovered(null)}>&lt;<span className="text-red-400/70">MetricCard</span> /&gt;</div>
                <div className="pl-8 text-zinc-500">&lt;/<span className="text-red-400/70">Content</span>&gt;</div>
                <div className="pl-6 text-zinc-500">&lt;/<span className="text-red-400/70">Layout</span>&gt;</div>
                <div className="pl-4 text-zinc-500">);</div>
                <div>{'}'}</div>
            </div>
            <div className={`flex-1 bg-zinc-950 flex flex-col relative transition-all duration-500 ${hovered === 'layout' ? 'ring-1 ring-indigo-500/30 bg-zinc-900/10' : ''}`}>
                 <div className="h-6 border-b border-white/5 flex items-center px-3 gap-2"><div className="w-full h-1.5 bg-zinc-900 rounded-full max-w-[60%]"></div></div>
                 <div className="flex-1 flex">
                     <div className={`w-10 border-r border-white/5 flex flex-col items-center py-3 gap-3 transition-all duration-300 ${hovered === 'nav' ? 'bg-zinc-900/80 border-indigo-500/20' : ''}`}><div className={`w-5 h-5 rounded bg-zinc-800 transition-colors ${hovered === 'nav' ? 'bg-indigo-500/50' : ''}`}></div><div className="w-5 h-5 rounded bg-zinc-900"></div><div className="w-5 h-5 rounded bg-zinc-900"></div><div className="w-5 h-5 rounded-full bg-zinc-900 border border-white/5 mt-auto"></div></div>
                     <div className={`flex-1 p-4 flex flex-col gap-4 bg-zinc-900/20 transition-colors duration-300 ${hovered === 'content' ? 'bg-zinc-900/60' : ''}`}>
                         <div className={`h-6 w-full flex items-center justify-between transition-all duration-300 ${hovered === 'user' ? 'opacity-100' : 'opacity-60'}`}><div className="h-2 w-20 bg-zinc-800 rounded-full"></div><div className={`flex items-center gap-2 transition-all ${hovered === 'user' ? 'scale-105' : ''}`}><div className="h-2 w-8 bg-zinc-800 rounded-full"></div><div className={`h-5 w-5 rounded-full bg-zinc-800 border border-white/5 ${hovered === 'user' ? 'border-emerald-500/50 bg-emerald-900/20' : ''}`}></div></div></div>
                         <div className="grid grid-cols-2 gap-3">
                             <div className={`aspect-video rounded-lg border border-white/5 bg-zinc-950 p-2 flex flex-col justify-between transition-all duration-300 ${hovered === 'card' ? 'border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.1)] scale-105' : ''}`}><div className="h-1.5 w-8 bg-zinc-800 rounded-full"></div><div className="h-3 w-12 bg-zinc-800 rounded"></div></div>
                             <div className="aspect-video rounded-lg border border-white/5 bg-zinc-950 p-2 flex flex-col justify-between opacity-50"><div className="h-1.5 w-8 bg-zinc-800 rounded-full"></div><div className="h-3 w-12 bg-zinc-800 rounded"></div></div>
                         </div>
                         <div className="flex-1 rounded-lg border border-white/5 bg-zinc-950 p-2 flex items-end gap-1 opacity-50">{[40, 70, 30, 80, 50, 90].map((h,i) => (<div key={i} className="flex-1 bg-zinc-800 rounded-t-sm" style={{ height: `${h}%`}}></div>))}</div>
                     </div>
                 </div>
            </div>
        </div>
    )
}

const UniversalPlatformVisual = () => {
    return (
        <div className="w-full h-full bg-zinc-950 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"><motion.div className="w-16 h-16 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]" animate={{ boxShadow: ["0 0 30px rgba(255,255,255,0.05)", "0 0 50px rgba(255,255,255,0.1)", "0 0 30px rgba(255,255,255,0.05)"] }} transition={{ duration: 3, repeat: Infinity }}><Code size={24} className="text-white" /></motion.div></div>
             <div className="absolute inset-0 flex items-center justify-center">{[0, 120, 240].map((deg, i) => ( <motion.div key={i} className="absolute w-48 h-48" style={{ rotate: deg }} animate={{ rotate: deg + 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}><motion.div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center shadow-lg z-30" style={{ rotate: -deg }} animate={{ rotate: -(deg + 360) }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>{i === 0 && <Laptop2 size={16} className="text-zinc-500" />}{i === 1 && <Smartphone size={16} className="text-zinc-500" />}{i === 2 && <Tablet size={16} className="text-zinc-500" />}</motion.div></motion.div> ))}</div>
             {[0, 120, 240].map((deg, i) => (<div key={i} className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: `rotate(${deg}deg)` }}><motion.div className="w-1 h-1 bg-white rounded-full absolute top-[50%] left-[50%]" animate={{ y: -90, opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}/></div>))}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><div className="w-48 h-48 rounded-full border border-white/5 border-dashed opacity-50"></div></div>
        </div>
    )
}

const CloudTopologyVisual = () => {
    return (
        <div className="w-full h-full bg-zinc-950 flex items-center justify-center relative overflow-hidden p-6"><div className="relative w-full max-w-[200px] aspect-video"><motion.div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center z-10" animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}><Cloud size={14} className="text-zinc-500" /></motion.div><div className="absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div><div className="absolute top-16 w-full flex justify-between">{[1, 2, 3].map(i => (<motion.div key={i} className="w-8 h-8 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center z-10" whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.2)" }}><Database size={12} className="text-zinc-600" /></motion.div>))}</div><svg className="absolute inset-0 w-full h-full pointer-events-none"><path d="M100 32 L100 40 L20 40 L20 64" fill="none" stroke="rgba(255,255,255,0.05)" /><path d="M100 32 L100 64" fill="none" stroke="rgba(255,255,255,0.05)" /><path d="M100 32 L100 40 L180 40 L180 64" fill="none" stroke="rgba(255,255,255,0.05)" /></svg></div></div>
    )
}

const SignalPulseVisual = () => (
    <div className="w-full h-full bg-zinc-950 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-zinc-950 to-zinc-950"></div>
        <motion.div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center relative z-20 shadow-[0_0_15px_rgba(16,185,129,0.2)]" animate={{ borderColor: ["rgba(255,255,255,0.1)", "rgba(16,185,129,0.4)", "rgba(255,255,255,0.1)"] }} transition={{ duration: 2, repeat: Infinity }}><Wifi size={16} className="text-emerald-500/80" /></motion.div>
        {[0, 1, 2].map(i => (<motion.div key={i} className="absolute w-10 h-10 rounded-full border border-emerald-500/10 z-10" initial={{ scale: 1, opacity: 0.8 }} animate={{ scale: 4, opacity: 0 }} transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeOut" }}/>))}
        {[0, 72, 144, 216, 288].map((deg, i) => (<motion.div key={i} className="absolute w-full h-full flex items-center justify-center pointer-events-none z-10" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear", delay: i * -5 }}><div className="h-[140px] flex flex-col justify-between items-center" style={{ transform: `rotate(${deg}deg)` }}><div className="w-2 h-2 bg-zinc-800 rounded-full border border-white/10" /></div></motion.div>))}
    </div>
);

const MigrationVisual = () => {
    return (
        <div className="w-full h-full bg-zinc-950 relative overflow-hidden flex items-center justify-between px-8">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.02)_50%,transparent_100%)]"></div>
             <div className="flex flex-col gap-1 relative z-10"><div className="text-[9px] text-zinc-600 font-mono mb-1 text-center">LEGACY</div>{[1,2,3].map(i => (<div key={i} className="w-12 h-4 bg-zinc-900 border border-zinc-800 rounded-sm" />))}</div>
             <div className="flex-1 h-full relative overflow-hidden mx-4 flex items-center"><div className="w-full h-px bg-zinc-800/50 border-t border-dashed border-zinc-800"></div>{[1, 2, 3].map(i => (<motion.div key={i} className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.6, ease: "linear" }} style={{ top: "50%", marginTop: "-4px" }}/>))}</div>
             <div className="flex flex-col gap-1 relative z-10"><div className="text-[9px] text-emerald-500 font-mono mb-1 text-center">CLOUD</div>{[1,2,3].map(i => (<motion.div key={i} className="w-12 h-4 bg-zinc-900 border border-white/10 rounded-sm shadow-[0_0_10px_rgba(16,185,129,0.05)]" animate={{ borderColor: ["rgba(255,255,255,0.1)", "rgba(16,185,129,0.3)", "rgba(255,255,255,0.1)"] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}/>))}</div>
        </div>
    )
}

const FullStackVisual = () => {
    return (
        <div className="w-full h-full bg-zinc-950 p-6 flex flex-col justify-center gap-8 relative overflow-hidden">
             <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-800/50 -translate-y-1/2 z-0"><motion.div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" animate={{ left: ["-10%", "110%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} /></div>
             <div className="grid grid-cols-3 gap-4 relative z-10">{[{ icon: Smartphone, label: "Client", tech: "React" }, { icon: Server, label: "API", tech: "Node.js" }, { icon: Database, label: "Store", tech: "Postgres" }].map((node, i) => (<motion.div key={i} className="aspect-square rounded-xl bg-zinc-900 border border-white/10 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:border-white/20 transition-colors" whileHover={{ y: -5 }}><div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-white/10 transition-colors"><node.icon size={18} className="text-zinc-500 group-hover:text-zinc-300" /></div><div className="text-center"><div className="text-xs font-bold text-zinc-300">{node.label}</div><div className="text-[10px] text-zinc-600 font-mono opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 group-hover:translate-y-0 duration-300">{node.tech}</div></div></motion.div>))}</div>
        </div>
    )
}

const DataArchitectureVisual = () => {
    const [activeShard, setActiveShard] = useState(null);
    return (
        <div className="w-full h-full bg-zinc-950 p-8 flex items-center justify-center"><div className="grid grid-cols-3 gap-2">{[1,2,3,4,5,6,7,8,9].map((i) => (<motion.div key={i} className={`w-10 h-10 rounded border flex items-center justify-center cursor-pointer transition-all duration-300 ${activeShard === i ? 'bg-indigo-500/10 border-indigo-500/30' : 'bg-zinc-900 border-white/10'}`} onMouseEnter={() => setActiveShard(i)} onMouseLeave={() => setActiveShard(null)} whileHover={{ scale: 1.1 }}><Database size={14} className={activeShard === i ? "text-indigo-400" : "text-zinc-600"} /></motion.div>))}</div></div>
    )
}

const RocketIcon = ({size, className}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>;

const DevOpsPipelineVisual = () => (
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
        <div className="absolute top-1/2 left-6 right-6 h-px bg-zinc-800 -translate-y-4 z-0"><motion.div className="absolute top-0 bottom-0 w-8 bg-indigo-500/30 blur-[4px]" animate={{ left: ["0%", "100%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} /></div>
    </div>
);

const ModernizationVisual = () => (
    <div className="w-full h-full bg-zinc-950 p-8 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-2 w-48">
             <motion.div className="col-span-2 h-24 bg-red-500/5 border border-red-500/10 rounded flex items-center justify-center cursor-not-allowed" whileHover={{ rotate: 1, scale: 0.98 }}>
                 <span className="text-[10px] font-mono text-red-500/40 decoration-line-through">LEGACY_CORE</span>
             </motion.div>
             <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 }} className="h-20 bg-emerald-500/5 border border-emerald-500/10 rounded flex items-center justify-center"><RefreshCw size={16} className="text-emerald-500/60" /></motion.div>
             <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.4 }} className="h-20 bg-indigo-500/5 border border-indigo-500/10 rounded flex items-center justify-center"><Database size={16} className="text-indigo-500/60" /></motion.div>
        </div>
    </div>
);

const TechStackVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4 select-none">
        {[{l: "Frontend", i: Layout}, {l: "Edge", i: Network}].map((item, i) => (
            <motion.div 
                key={i}
                className="w-full h-10 rounded border border-white/5 bg-zinc-900/30 flex items-center justify-between px-3 relative z-10 backdrop-blur-sm"
                whileHover={{ scale: 1.02, x: 2 }}
            >
                <div className="flex items-center gap-2">
                    <item.i size={12} className="text-zinc-500"/>
                    <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">{item.l}</span>
                </div>
                <div className="flex gap-1">
                     <div className="w-1 h-1 rounded-full bg-indigo-500/40"></div>
                     <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
                </div>
            </motion.div>
        ))}
    </div>
)

const AssetDockSimpleUI = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  return (
  <div className="w-full h-full bg-zinc-950 p-0 relative flex flex-col text-xs font-sans group overflow-hidden">
     <div className="p-3 border-b border-white/5 bg-zinc-900/20 flex justify-between items-center">
         <span className="font-semibold text-zinc-400 text-[10px]">Assets</span>
         <div className="flex gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></div><span className="text-[9px] text-zinc-600">Live</span></div>
     </div>
     <div className="p-2 flex-1 relative">
        <div className="grid grid-cols-1 gap-1">
            {[{n:'MacBook Pro M3',s:'Available',c:'bg-emerald-500/10 text-emerald-500'},{n:'iPad Pro 12.9"',s:'In Use',c:'bg-amber-500/10 text-amber-500'},{n:'Dell XPS 15',s:'Maintenance',c:'bg-red-500/10 text-red-500'}].map((i,k)=>(
                <div key={k} onMouseEnter={() => setHoveredRow(k)} onMouseLeave={() => setHoveredRow(null)} className="grid grid-cols-4 items-center p-2 rounded hover:bg-zinc-900/50 transition-colors cursor-default group/row relative h-8 gap-2">
                    <div className="col-span-2 flex items-center gap-2 truncate">
                        <div className={`w-1.5 h-1.5 shrink-0 rounded-full ${i.s==='Available'?'bg-emerald-500':i.s==='In Use'?'bg-amber-500':'bg-red-500'}`}></div>
                        <span className="text-zinc-400 group-hover/row:text-zinc-200 transition-colors truncate">{i.n}</span>
                    </div>
                    
                    <div className="col-span-2 flex justify-end items-center relative h-full">
                        {/* FIXED: Using absolute positioning for both elements to prevent layout shift */}
                        <div className="relative w-full h-full flex items-center justify-end">
                            <span className={cn(`text-[9px] px-1.5 py-0.5 rounded transition-opacity duration-200 absolute right-0`, i.c, hoveredRow === k ? "opacity-0" : "opacity-100")}>{i.s}</span>
                            <span className={cn("text-[9px] text-indigo-400 cursor-pointer font-medium transition-opacity duration-200 absolute right-0", hoveredRow === k ? "opacity-100" : "opacity-0")}>View Details</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="absolute bottom-2 w-full text-center text-[9px] text-zinc-600 border-t border-dashed border-white/5 pt-2">+ 142 more items</div>
     </div>
  </div>
)};

const FitsySimpleUI = () => {
  const [hoveredBar, setHoveredBar] = useState(null);
  return (
  <div className="w-full h-full bg-zinc-950 p-5 flex flex-col justify-between font-sans">
      <div className="flex gap-3 items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center"><Users size={14} className="text-zinc-600"/></div>
          <div><div className="text-sm text-zinc-400">Alex D.</div><div className="text-[10px] text-zinc-600">Active Session</div></div>
      </div>
      <div className="bg-zinc-900/30 p-3 rounded border border-white/5">
          <div className="flex justify-between mb-2"><span className="text-[10px] text-zinc-600">VOLUME</span><span className="text-xs text-zinc-300">{hoveredBar !== null ? `${(hoveredBar + 4) * 1000}kg` : '12,450kg'}</span></div>
          <div className="h-8 flex items-end gap-1">
              {[40,70,50,90,60].map((h,i)=> (
                  <motion.div key={i} onMouseEnter={() => setHoveredBar(i)} onMouseLeave={() => setHoveredBar(null)} style={{ height: `${h}%` }} className={`flex-1 rounded-t-[1px] transition-all duration-200 ${hoveredBar === i ? 'bg-indigo-500/60' : 'bg-zinc-800'}`} />
              ))}
          </div>
      </div>
  </div>
)};

const FitsyBuilderUI = () => (
    <div className="w-full h-full bg-zinc-950 p-6 flex flex-col gap-6 relative font-sans overflow-hidden">
        <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <div><div className="text-sm font-bold text-white">Block 1: Hypertrophy</div><div className="text-xs text-zinc-500">Microcycle 3 • Week 4</div></div>
            <div className="px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-500 uppercase">In Progress</div>
        </div>
        <div className="flex gap-6">
            <div className="flex-1 bg-zinc-900/30 border border-white/5 rounded-lg p-4">
                 <div className="text-[10px] text-zinc-500 uppercase mb-3">Readiness</div>
                 <div className="flex items-end gap-2"><span className="text-3xl font-bold text-white">92</span><span className="text-xs text-emerald-500 mb-1">High</span></div>
                 <div className="w-full bg-zinc-800 h-1 mt-3 rounded-full overflow-hidden"><div className="w-[92%] h-full bg-emerald-500 rounded-full"></div></div>
            </div>
            <div className="flex-1 bg-zinc-900/30 border border-white/5 rounded-lg p-4">
                 <div className="text-[10px] text-zinc-500 uppercase mb-3">Volume Load</div>
                 <div className="flex items-end gap-2"><span className="text-3xl font-bold text-white">12k</span><span className="text-xs text-zinc-500 mb-1">kg</span></div>
                 <div className="flex items-end gap-1 h-2 mt-3">{[40,60,30,80,50,90,60].map((h,i)=><div key={i} style={{height:`${h}%`}} className="flex-1 bg-indigo-500/40 rounded-[1px]"></div>)}</div>
            </div>
        </div>
        <div className="flex-1 space-y-2">
             <div className="text-[10px] text-zinc-600 uppercase tracking-widest mb-2">Programming</div>
             {[{n:"Primary Compound",s:"3x5",r:"@8"},{n:"Secondary Deviation",s:"4x8",r:"@7"},{n:"Isolation A",s:"3x12",r:"@9"}].map((b,i)=>(
                 <motion.div drag dragConstraints={{left:0,right:0,top:0,bottom:0}} key={i} initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:i*0.1}} className="flex items-center justify-between p-3 bg-zinc-900/40 border border-white/5 rounded hover:bg-zinc-900 hover:border-indigo-500/20 transition-colors cursor-grab active:cursor-grabbing">
                     <div className="flex items-center gap-3"><div className="w-1 h-8 bg-indigo-500/30 rounded-full"></div><span className="text-sm text-zinc-300">{b.n}</span></div>
                     <div className="flex gap-4 text-xs font-mono text-zinc-500"><span>{b.s}</span><span>{b.r}</span></div>
                 </motion.div>
             ))}
        </div>
    </div>
);

const AssetDockManagerUI = () => {
    const [view, setView] = useState('list'); 
    const [selectedAsset, setSelectedAsset] = useState(null);

    const assets = [
        { id: 'AD-042', name: 'Forklift XJ-9', status: 'Active', loc: 'Zone A' },
        { id: 'AD-043', name: 'Hydraulic Press', status: 'Inspection Due', loc: 'Zone B' },
        { id: 'AD-044', name: 'Conveyor Motor', status: 'Maintenance', loc: 'Zone C' },
    ];

    return (
        <div className="w-full h-full bg-zinc-950 flex font-sans text-xs">
            <div className="w-1/3 border-r border-white/5 bg-zinc-900/30 flex flex-col">
                <div className="p-4 border-b border-white/5">
                    <div className="font-bold text-white mb-1">Asset Fleet</div>
                    <div className="text-[10px] text-zinc-500">Heavy Machinery Division</div>
                </div>
                <div className="flex-1 overflow-y-auto p-2 space-y-1">
                    {assets.map((a, i) => (
                        <div 
                            key={i} 
                            onClick={() => { setSelectedAsset(a); setView('list'); }}
                            className={`p-3 rounded cursor-pointer transition-colors border ${selectedAsset === a ? 'bg-zinc-800/80 border-white/10' : 'hover:bg-zinc-800/30 border-transparent'}`}
                        >
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-zinc-200 font-medium">{a.name}</span>
                                <div className={`w-1.5 h-1.5 rounded-full ${a.status === 'Active' ? 'bg-emerald-500' : a.status === 'Inspection Due' ? 'bg-amber-500' : 'bg-red-500'}`}></div>
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
                                <h3 className="text-lg font-bold text-white">{selectedAsset.name}</h3>
                                <div className="flex gap-2 text-zinc-500 mt-1">
                                    <span>ID: {selectedAsset.id}</span>
                                    <span>•</span>
                                    <span>{selectedAsset.loc}</span>
                                </div>
                            </div>
                            <div className={`px-2 py-1 rounded border text-[10px] font-bold uppercase ${selectedAsset.status === 'Active' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : selectedAsset.status === 'Inspection Due' ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' : 'bg-red-500/10 border-red-500/20 text-red-500'}`}>
                                {selectedAsset.status}
                            </div>
                        </div>

                        {view === 'list' && (
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                    <button className="p-3 bg-zinc-900/50 border border-white/10 rounded hover:bg-zinc-800 transition-colors flex flex-col items-center gap-2 group">
                                        <ArrowRight className="text-zinc-400 group-hover:text-white" size={16} />
                                        <span className="text-zinc-300">Check Out</span>
                                    </button>
                                    <button className="p-3 bg-zinc-900/50 border border-white/10 rounded hover:bg-zinc-800 transition-colors flex flex-col items-center gap-2 group">
                                        <CheckSquare className="text-zinc-400 group-hover:text-white" size={16} />
                                        <span className="text-zinc-300">Check In</span>
                                    </button>
                                </div>
                                
                                {selectedAsset.status === 'Inspection Due' && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-amber-500/5 border border-amber-500/20 rounded flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-3">
                                            <AlertCircle size={16} className="text-amber-500" />
                                            <div>
                                                <div className="text-amber-200 font-bold">Inspection Required</div>
                                                <div className="text-amber-500/60 text-[10px]">Overdue by 3 days</div>
                                            </div>
                                        </div>
                                        <button onClick={() => setView('inspect')} className="px-3 py-1.5 bg-amber-500 text-black font-bold rounded hover:bg-amber-400 transition-colors">Start</button>
                                    </motion.div>
                                )}
                            </div>
                        )}

                        {view === 'inspect' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-4 text-zinc-500 cursor-pointer hover:text-white" onClick={() => setView('list')}>
                                    <ChevronDown className="rotate-90" size={12} /> Back
                                </div>
                                <div className="space-y-2">
                                    {['Safety Guard Check', 'Hydraulic Pressure Test', 'Emergency Stop Test'].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 bg-zinc-900/50 border border-white/5 rounded">
                                            <span className="text-zinc-300">{item}</span>
                                            <div className="w-4 h-4 rounded border border-zinc-600 cursor-pointer hover:bg-emerald-500 hover:border-emerald-500 transition-colors"></div>
                                        </div>
                                    ))}
                                </div>
                                <button className="mt-auto w-full py-3 bg-emerald-600 text-white font-bold rounded hover:bg-emerald-500 transition-colors">Issue Certificate</button>
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
    )
}

// --- 4. Section Components ---

const BentoServices = () => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[180px]">
        {/* Large Feature 1: Bespoke Engineering (Span 8, Row 2) */}
        <SpotlightCard className="md:col-span-8 md:row-span-2 bg-zinc-900/40 p-0 flex flex-col justify-between group overflow-hidden">
             <div className="absolute inset-0 opacity-50">
                <WebAppVisual />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-10 pointer-events-none"></div>
            <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-white/10 flex items-center justify-center mb-4 text-zinc-400"><Code size={20} /></div>
                <h3 className="text-2xl font-bold text-white mb-2">Bespoke Engineering</h3>
                <p className="text-zinc-500 text-sm max-w-md leading-relaxed">We don't use templates. We architect custom software platforms tailored to your specific operational constraints and business goals.</p>
            </div>
        </SpotlightCard>

        {/* Small Feature: Cloud Arch (Span 4, Row 1) */}
        <SpotlightCard className="md:col-span-4 md:row-span-1 p-0 flex flex-col justify-between bg-zinc-900/30 group hover:bg-zinc-900/50 transition-colors overflow-hidden relative">
            <div className="flex flex-col h-full justify-between">
                <div className="absolute inset-0 opacity-50">
                    <CloudTopologyVisual />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent z-10"></div>
                <div className="relative z-20 p-6 mt-auto">
                     <h4 className="text-sm font-bold text-zinc-200">Cloud Architecture</h4>
                     <p className="text-xs text-zinc-500 mt-1">Scalable AWS & Azure systems.</p>
                </div>
            </div>
        </SpotlightCard>

        {/* Small Feature: Mobile (Span 4, Row 1) */}
        <SpotlightCard className="md:col-span-4 md:row-span-1 p-0 flex flex-col bg-zinc-900/30 relative overflow-hidden group">
            <div className="flex flex-col h-full justify-between">
                <div className="absolute inset-0 opacity-50">
                    <UniversalPlatformVisual />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent z-10"></div>
                <div className="relative z-20 p-6 mt-auto">
                    <h3 className="text-sm font-bold text-zinc-200 mb-0.5">Mobile Ecosystems</h3>
                    <p className="text-zinc-500 text-xs">Native & Cross-platform apps.</p>
                </div>
            </div>
        </SpotlightCard>

        {/* Medium Feature: Tech Stack (Span 4, Row 1) - FIXED CONTENT SPACING */}
        <SpotlightCard className="md:col-span-4 md:row-span-1 p-0 flex flex-col bg-zinc-900/30 relative overflow-hidden group">
            <div className="flex flex-col h-full">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950/80 to-zinc-950 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex-1 flex items-center justify-center min-h-0 py-2">
                    <TechStackVisual />
                </div>
                <div className="relative z-10 px-6 py-3 border-t border-white/5 bg-zinc-950/30 backdrop-blur-sm mt-auto">
                    <h3 className="text-xs font-bold text-zinc-300 mb-0.5">Modern Stack</h3>
                    <p className="text-zinc-600 text-[10px]">Next.js, Rust, and Go.</p>
                </div>
            </div>
        </SpotlightCard>

        {/* Improved Feature: IoT Connectivity (Span 4, Row 1) */}
        <SpotlightCard className="md:col-span-4 md:row-span-1 p-0 flex flex-col bg-zinc-900/30 relative overflow-hidden group">
            <div className="flex flex-col h-full justify-between">
                <div className="absolute inset-0 opacity-60">
                    <SignalPulseVisual />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent z-10"></div>
                <div className="relative z-20 p-6 mt-auto">
                    <h3 className="text-sm font-bold text-zinc-200 mb-0.5">IoT Connectivity</h3>
                    <p className="text-zinc-500 text-xs">Real-time device mesh.</p>
                </div>
            </div>
        </SpotlightCard>

        {/* Improved Feature: Digital Transformation (Span 4, Row 1) */}
        <SpotlightCard className="md:col-span-4 md:row-span-1 p-0 flex flex-col bg-zinc-900/30 relative overflow-hidden group">
            <div className="flex flex-col h-full justify-between">
                <div className="absolute inset-0 opacity-60">
                     <MigrationVisual />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent z-10"></div>
                <div className="relative z-20 p-6 mt-auto">
                     <h3 className="text-sm font-bold text-white mb-1">Digital Transformation</h3>
                     <p className="text-zinc-500 text-xs leading-relaxed">Migrating legacy monoliths.</p>
                 </div>
            </div>
        </SpotlightCard>
    </div>
);

const Methodology = () => {
    const steps = [
        { id: "01", title: "Discovery", desc: "We don't write a single line of code until we understand your business model. We deliver a full technical spec.", icon: ScanLine },
        { id: "02", title: "Development", desc: "Two-week sprints. You get a deployable link every Friday. No black boxes, just visible progress.", icon: Code },
        { id: "03", title: "Testing", desc: "Automated E2E testing pipelines. If it breaks, it breaks on our machines, not in production.", icon: ShieldCheck },
        { id: "04", title: "Handoff", desc: "We hand over the keys, the documentation, and the training recordings. You own the IP completely.", icon: CheckCircle2 }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="sticky top-32 h-fit">
                <h3 className="text-3xl font-bold text-white mb-6">How we work.</h3>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    Software projects fail because of communication, not technology. We solved this with a rigid, transparent process.
                </p>
                <StandardButton className="w-fit bg-zinc-100 text-black hover:bg-white">Read our Playbook</StandardButton>
            </div>
            <div className="flex flex-col gap-0 border-l border-zinc-800 pl-12">
                {steps.map((s, i) => (
                    <motion.div key={i} className="relative py-12 group">
                         <div className="absolute -left-[55px] top-12 w-4 h-4 rounded-full bg-zinc-900 border border-zinc-700 group-hover:border-white group-hover:bg-white transition-colors z-10" />
                        <div className="mb-2 flex items-center gap-3">
                             <span className="font-mono text-xs text-zinc-600">0{i+1}</span>
                             <h4 className="text-xl font-bold text-white">{s.title}</h4>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-md">{s.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

const FAQItem = ({ q, a }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-white/5">
            <button onClick={() => setOpen(!open)} className="w-full py-6 flex items-center justify-between text-left hover:text-white transition-colors text-zinc-400">
                <span className="text-sm font-medium">{q}</span>
                <ChevronDown size={16} className={cn("transition-transform duration-300", open ? "rotate-180" : "")} />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <p className="text-zinc-500 pb-6 leading-relaxed pr-8 text-sm">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

// --- 5. Page Components ---

const AuroraBackground = ({ className, children, showRadialGradient = true, ...props }) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-[#09090b] text-slate-950 transition-bg overflow-hidden",
        className
      )}
      {...props}
    >
      <style>{`
        @keyframes aurora {
          from { background-position: 50% 50%, 50% 50%; }
          to { background-position: 350% 50%, 350% 50%; }
        }
        .animate-aurora {
          animation: aurora 60s linear infinite;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            `
            after:animate-aurora
            pointer-events-none
            absolute -inset-[10px] opacity-[0.1]
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 
            after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:mix-blend-difference
            `,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
          )}
          style={{
            "--white": "#ffffff",
            "--transparent": "transparent",
            "--black": "#000000",
            "--blue-500": "#334155",
            "--blue-400": "#475569", 
            "--blue-300": "#64748b",
            "--indigo-300": "#94a3b8",
            "--violet-200": "#52525b", 
          }}
        ></div>
      </div>
      {children}
    </div>
  );
};

const SectionHeader = ({ eyebrow, title, description, action }) => (
  <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/5 pb-8">
    <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-white/20"></span>
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{eyebrow}</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            {title}
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
            {description}
        </p>
    </div>
    {action && (
       <div className="mb-2 shrink-0">
          {action}
       </div>
    )}
  </div>
);

const PageHero = ({ eyebrow, title, description }) => (
    <div className="relative min-h-[60vh] flex flex-col justify-center px-6 bg-[#09090b] pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/0 to-[#09090b] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-white/30"></span>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{eyebrow}</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter max-w-5xl leading-[0.9]">
                {title}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-xl text-zinc-400 max-w-2xl leading-relaxed border-l border-white/10 pl-6">
                {description}
            </motion.p>
        </div>
    </div>
);

const NavBar = ({ currentPage, setPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b", isScrolled ? "bg-[#09090b]/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent border-transparent py-6")}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-zinc-100 cursor-pointer" onClick={() => setPage('home')}>
           <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-black"><Box size={16} strokeWidth={3} /></div>
           TipThing
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {['services','products','company'].map(id => (
             <button key={id} onClick={() => setPage(id)} className={cn("transition-colors hover:text-white capitalize", currentPage === id ? "text-white" : "")}>{id}</button>
          ))}
          <div className="w-px h-4 bg-white/10"></div>
          <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             onClick={() => setPage('contact')}
             className="px-4 py-1.5 bg-white/10 border border-white/5 text-zinc-100 rounded-md text-xs font-medium hover:bg-white/20 transition-all flex items-center gap-2"
          >
            Start Project <ArrowRight size={12} />
          </motion.button>
        </div>
        <button className="md:hidden text-zinc-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
    </nav>
  );
};

const Footer = ({ setPage }) => (
    <footer className="bg-[#050507] pt-24 pb-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1">
                <div className="flex items-center gap-2 font-bold text-xl text-zinc-100 mb-6">TipThing</div>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">Engineered software solutions for the modern enterprise.</p>
                <div className="flex gap-4">
                    <Twitter size={18} className="text-zinc-600 hover:text-white cursor-pointer transition-colors"/>
                    <Github size={18} className="text-zinc-600 hover:text-white cursor-pointer transition-colors"/>
                    <Linkedin size={18} className="text-zinc-600 hover:text-white cursor-pointer transition-colors"/>
                </div>
            </div>
            {[{h:'Services',l:['Cloud Architecture','Web Development','Legacy Migration'],p:'services'},{h:'Products',l:['Logable IoT','AssetDock','Fitsy CRM'],p:'products'}].map((col,i)=>(
                <div key={i}><h4 className="font-bold text-white text-sm mb-4">{col.h}</h4><ul className="space-y-3 text-sm text-zinc-500">{col.l.map(l=><li key={l}><button onClick={()=>setPage(col.p)} className="hover:text-white transition-colors text-left">{l}</button></li>)}</ul></div>
            ))}
            <div><h4 className="font-bold text-white text-sm mb-4">Company</h4><ul className="space-y-3 text-sm text-zinc-500"><li><button onClick={()=>setPage('company')} className="hover:text-white">About Us</button></li><li><button onClick={()=>setPage('contact')} className="hover:text-white">Careers</button></li><li><button onClick={()=>setPage('contact')} className="hover:text-white">Contact</button></li></ul></div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-mono uppercase tracking-wider gap-4">
            <p>© 2025 TipThing Solutions.</p>
            <div className="flex gap-2 items-center"><div className="w-2 h-2 rounded-full bg-zinc-500 animate-pulse"></div><span>All Systems Operational</span></div>
        </div>
    </footer>
);

const CTA = ({ setPage }) => (
    <section className="py-32 px-6 bg-[#09090b] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to scale?</h2>
            <p className="text-zinc-500 mb-10 text-lg max-w-xl mx-auto">Schedule a technical discovery session to discuss your infrastructure or software needs.</p>
            <div className="flex justify-center gap-4">
                <StandardButton onClick={() => setPage('contact')}>Start Conversation</StandardButton>
            </div>
        </div>
    </section>
);

// --- 6. Pages (Restored & Updated) ---

const HomePage = ({ setPage }) => (
    <div className="animate-in fade-in duration-500">
        <AuroraBackground className="min-h-screen border-b border-white/5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
          <motion.div style={{ opacity: 1 }} className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-20">
            <div className="mb-8 flex justify-center">
                <div className="bg-zinc-900/50 border border-white/10 rounded-full px-3 py-1 flex items-center gap-2 text-[11px] text-zinc-400 backdrop-blur-md">
                    <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-zinc-500"></span></span>
                    <span className="tracking-wide font-medium">Accepting New Partnerships for Q3</span>
                </div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.95]">
                Software,<br className="hidden md:block" /> 
                <span className="text-zinc-500">Solved.</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto mb-12 leading-relaxed font-light">
                We engineer bespoke cloud architectures and deploy powerful pre-built tools. No fluff. Just precision software that moves your business forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <StandardButton onClick={() => setPage('contact')} className="w-full sm:w-auto px-8">Start a Project</StandardButton>
              <StandardButton variant="secondary" onClick={() => setPage('products')} className="w-full sm:w-auto px-8">View Products</StandardButton>
            </div>
          </motion.div>
        </AuroraBackground>

        <div className="py-10 bg-[#09090b] border-b border-white/5 overflow-hidden">
            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-16 md:gap-32 px-16 text-zinc-700 font-bold text-xl tracking-tight select-none items-center opacity-60 grayscale">
                    {["ACME Corp", "Nebula", "Vertex", "Horizon", "Oasis", "Apex", "Zenith", "Pulse"].map((c) => <span key={c} className="hover:text-zinc-300 transition-colors cursor-default">{c}</span>)}
                    {["ACME Corp", "Nebula", "Vertex", "Horizon", "Oasis", "Apex", "Zenith", "Pulse"].map((c) => <span key={`${c}-dup`} className="hover:text-zinc-300 transition-colors cursor-default">{c}</span>)}
                </div>
            </div>
            <style>{`.animate-marquee { animation: marquee 40s linear infinite; } @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        </div>

        <section id="services" className="py-32 px-6 bg-[#09090b] relative">
            <div className="max-w-7xl mx-auto">
                <SectionHeader 
                    eyebrow="Capabilities" 
                    title="Everything you need." 
                    description="When off-the-shelf tools limit your growth, we build custom software that adapts to your specific operational needs." 
                    action={<button onClick={() => setPage('services')} className="text-zinc-400 hover:text-white text-sm font-medium flex items-center gap-2 group transition-colors">Explore Services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/></button>}
                />
                <BentoServices />
            </div>
        </section>

        <section id="products" className="py-32 px-6 bg-[#09090b] border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <SectionHeader 
                    eyebrow="Our Ecosystem" 
                    title="Products." 
                    description="Proprietary tools built by TipThing to solve specific industry challenges." 
                    action={<button onClick={() => setPage('products')} className="text-zinc-400 hover:text-white text-sm font-medium flex items-center gap-2 group transition-colors">View All Products <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/></button>}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <SpotlightCard className="md:col-span-2 md:row-span-2 bg-zinc-900/30">
                        <div className="p-8 h-full flex flex-col">
                            <div className="mb-6"><div className="w-8 h-8 rounded bg-zinc-800 border border-white/10 text-zinc-400 flex items-center justify-center mb-3 font-bold text-sm">L</div><h3 className="text-2xl font-bold text-white">Logable</h3><p className="text-zinc-500 mt-2 text-sm max-w-md">Dashboard builder for IoT.</p></div>
                            <div className="flex-1 rounded-lg border border-white/5 bg-[#09090b] overflow-hidden relative shadow-2xl"><LogableUI /></div>
                        </div>
                    </SpotlightCard>
                    <SpotlightCard className="bg-zinc-900/30">
                        <div className="p-6 h-full flex flex-col">
                            <h3 className="text-lg font-bold text-white mb-1">AssetDock</h3><p className="text-zinc-500 text-xs mb-6">Asset lifecycle management.</p>
                            <div className="flex-1 rounded border border-white/5 bg-[#09090b] overflow-hidden relative"><AssetDockSimpleUI /></div>
                        </div>
                    </SpotlightCard>
                    <SpotlightCard className="bg-zinc-900/30">
                        <div className="p-6 h-full flex flex-col">
                            <h3 className="text-lg font-bold text-white mb-1">Fitsy</h3><p className="text-zinc-500 text-xs mb-6">Client management for trainers.</p>
                            <div className="flex-1 rounded border border-white/5 bg-[#09090b] overflow-hidden relative"><FitsySimpleUI /></div>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </section>

        <section className="py-32 px-6 bg-[#09090b] border-t border-white/5 relative">
             <div className="max-w-7xl mx-auto">
                 <Methodology />
             </div>
        </section>

        <section className="py-32 px-6 bg-[#09090b] border-t border-white/5">
             <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-12 text-center">Common Questions</h3>
                <div className="flex flex-col gap-4">
                    <FAQItem q="Do you work with non-technical founders?" a="Absolutely. We specialize in translating business requirements into technical specifications. We act as your fractional CTO until you're ready to hire one." />
                    <FAQItem q="What is your typical project timeline?" a="Most MVPs take 8-12 weeks. Complex enterprise migrations can take 6-12 months. We work in 2-week sprints so you see value immediately." />
                    <FAQItem q="Do you outsource development?" a="No. All development is done in-house by our full-time team. We do not white-label or farm out code to the lowest bidder." />
                    <FAQItem q="What happens after launch?" a="We offer ongoing maintenance packages, or we can train your internal team to take over. You own the code completely." />
                </div>
             </div>
        </section>

        <CTA setPage={setPage} />
    </div>
);

const ProductsPage = ({ setPage }) => (
    <div className="min-h-screen pt-32 px-6 pb-20 bg-[#09090b] animate-in fade-in duration-500">
        <div className="max-w-7xl mx-auto">
            <PageHero eyebrow="Our Ecosystem" title="Products." description="We build tools to solve our own problems. Then we polish them for the world. Available for license or subscription." />
            <div className="space-y-32 pb-20 pt-20">
                {/* Logable */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                     <div className="lg:col-span-7 aspect-[4/3]"><SpotlightCard className="h-full bg-zinc-900/30"><div className="p-6 h-full flex flex-col"><div className="flex-1 rounded-lg border border-white/5 bg-[#09090b] overflow-hidden relative shadow-2xl"><LogableUI /></div></div></SpotlightCard></div>
                     <div className="lg:col-span-5"><div className="w-12 h-12 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 mb-8 font-bold text-xl">L</div><h2 className="text-3xl font-bold text-white mb-6">Logable</h2><p className="text-zinc-400 mb-8 text-lg leading-relaxed">The definitive dashboard builder for industrial IoT. Connect to any MQTT broker or REST API.</p><button className="px-8 py-4 bg-zinc-900 border border-white/10 text-zinc-300 rounded font-bold text-sm hover:bg-zinc-800 transition-colors">View Documentation</button></div>
                </div>
                <div className="w-full h-px bg-white/5" />
                {/* AssetDock - NOW USES NEW MANAGER UI */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                     <div className="lg:col-span-5 order-2 lg:order-1"><div className="w-12 h-12 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 mb-8 font-bold text-xl">A</div><h2 className="text-3xl font-bold text-white mb-6">AssetDock</h2><p className="text-zinc-400 mb-8 text-lg leading-relaxed">Complete lifecycle management. Track assets, schedule inspections, and issue compliance certificates from a single interface.</p><button className="px-8 py-4 bg-zinc-900 border border-white/10 text-zinc-300 rounded font-bold text-sm hover:bg-zinc-800 transition-colors">Request Demo</button></div>
                     <div className="lg:col-span-7 order-1 lg:order-2 aspect-[4/3]"><SpotlightCard className="h-full bg-zinc-900/30"><div className="p-6 h-full flex flex-col"><div className="flex-1 rounded-lg border border-white/5 bg-[#09090b] overflow-hidden relative shadow-2xl"><AssetDockManagerUI /></div></div></SpotlightCard></div>
                </div>
                <div className="w-full h-px bg-white/5" />
                 {/* Fitsy */}
                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                     <div className="lg:col-span-7 aspect-[4/3]"><SpotlightCard className="h-full bg-zinc-900/30"><div className="p-6 h-full flex flex-col"><div className="flex-1 rounded-lg border border-white/5 bg-[#09090b] overflow-hidden relative shadow-2xl"><FitsyBuilderUI /></div></div></SpotlightCard></div>
                     <div className="lg:col-span-5"><div className="w-12 h-12 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 mb-8 font-bold text-xl">F</div><h2 className="text-3xl font-bold text-white mb-6">Fitsy</h2><p className="text-zinc-400 mb-8 text-lg leading-relaxed">Advanced programming logic for elite trainers. Track volume and intensity.</p><button className="px-8 py-4 bg-zinc-900 border border-white/10 text-zinc-300 rounded font-bold text-sm hover:bg-zinc-800 transition-colors">Explore Fitsy</button></div>
                </div>
            </div>
        </div>
        <CTA setPage={setPage} />
    </div>
);

const ServicesPage = ({ setPage }) => (
    <div className="min-h-screen pt-32 px-6 pb-20 bg-[#09090b] animate-in fade-in duration-500">
         <div className="max-w-7xl mx-auto">
            <PageHero eyebrow="Our Capabilities" title="Services." description="We replace intuition with engineering. Our bespoke solutions are built on robust, scalable architectures." />
            <div className="flex flex-col gap-20 mb-20 pt-20">
                {[
                    {
                        icon: Monitor, title: "Desktop & Mobile Apps", desc: "Native-performance applications using Electron and React Native. Seamless experience across all devices (iOS, Android, MacOS, Windows).",
                        visual: <UniversalPlatformVisual />
                    },
                    { 
                        icon: Layers, title: "Full Stack Cloud Solutions", desc: "End-to-end architecture from database design to frontend implementation. Scalable, secure, and built for growth.",
                        visual: <FullStackVisual />
                    },
                    { 
                        icon: Layout, title: "Web Application Development", desc: "Complex, data-heavy web applications using React, Next.js, and TypeScript. Our focus is on performance and type safety.",
                        visual: <WebAppVisual />
                    },
                    { 
                        icon: Server, title: "Cloud Infrastructure", desc: "Designing scalable schemas with PostgreSQL and Redis. We build resilient APIs that can handle spike loads without downtime.",
                        visual: <DataArchitectureVisual />
                    },
                    { 
                        icon: RefreshCw, title: "DevOps & CI/CD", desc: "Automated build pipelines and deployment strategies. We ensure your code ships to production safely and frequently.",
                        visual: <DevOpsPipelineVisual />
                    },
                    {
                        icon: TerminalSquare, title: "Legacy Modernization", desc: "Strangling monoliths into microservices. We migrate legacy PHP/.NET systems to modern stacks with zero downtime.",
                        visual: <ModernizationVisual />
                    }
                ].map((s, i) => (
                    <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group">
                         <div className={`order-2 ${i%2===0?'md:order-1':'md:order-2'}`}><div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 mb-6"><s.icon size={24} /></div><h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3><p className="text-zinc-400 leading-relaxed mb-8 text-lg">{s.desc}</p></div>
                         <SpotlightCard className={`aspect-square md:aspect-[4/3] order-1 ${i%2===0?'md:order-2':'md:order-1'}`}><div className="h-full w-full p-1 bg-zinc-900/50"><div className="h-full w-full rounded bg-zinc-950 border border-white/5 overflow-hidden relative">{s.visual}</div></div></SpotlightCard>
                    </div>
                ))}
            </div>
        </div>
        <CTA setPage={setPage} />
    </div>
);

const CompanyPage = ({ setPage }) => (
     <div className="min-h-screen pt-32 px-6 pb-20 bg-[#09090b] animate-in fade-in duration-500">
         <div className="max-w-7xl mx-auto">
             <PageHero eyebrow="About Us" title="Manifesto." description="We are a collective of engineers, designers, and strategists who believe in the power of well-crafted software." />
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 pt-20">
                 <SpotlightCard className="md:col-span-2 bg-zinc-900/20 p-8 flex flex-col justify-between min-h-[300px]">
                     <div className="flex justify-between items-start"><div className="p-3 rounded-lg bg-zinc-800/50 border border-white/5 inline-block"><LineChart className="text-white" size={24} /></div><span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Impact</span></div>
                     <div><div className="text-6xl font-bold text-white mb-2">1.2M+</div><p className="text-zinc-400">Daily active users across our platforms.</p></div>
                 </SpotlightCard>
                 <SpotlightCard className="bg-zinc-900/20 p-8 flex flex-col justify-between min-h-[300px]">
                     <div className="p-3 rounded-lg bg-zinc-800/50 border border-white/5 inline-block w-fit"><Users className="text-white" size={24} /></div>
                     <div><div className="text-4xl font-bold text-white mb-2">Global</div><p className="text-zinc-400">Remote-first team spanning 4 continents.</p></div>
                 </SpotlightCard>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                {[{t:"Speed is a feature",d:"Latency is the enemy."},{t:"No vendor lock-in",d:"Clean code that belongs to you."},{t:"Tools over process",d:"We automate the boring stuff."}].map((val, i) => (
                    <SpotlightCard key={i} className="p-8 bg-zinc-900/20"><div className="text-5xl font-bold text-zinc-800 mb-6">0{i+1}</div><h4 className="text-xl font-bold text-white mb-3">{val.t}</h4><p className="text-zinc-400 leading-relaxed">{val.d}</p></SpotlightCard>
                ))}
             </div>
         </div>
         <CTA setPage={setPage} />
    </div>
);

const ContactPage = () => (
    <div className="min-h-screen pt-32 px-6 pb-20 bg-[#09090b] animate-in fade-in duration-500 flex flex-col">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20">
             {/* Left Column: Context & Info */}
             <div className="flex-1 flex flex-col justify-between">
                 <div>
                    <div className="flex items-center gap-3 mb-8">
                        <span className="h-px w-8 bg-white/20"></span>
                        <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Contact</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                        Start the <br/> Conversation.
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-md leading-relaxed mb-12">
                        Tell us about your technical challenges. We typically respond within 24 hours with a preliminary assessment.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                <Mail size={20} />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white">Email Us</div>
                                <div className="text-zinc-500 text-sm group-hover:text-white transition-colors">hello@tipthing.com</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white">Visit HQ</div>
                                <div className="text-zinc-500 text-sm group-hover:text-white transition-colors">123 Tech Blvd, Johannesburg</div>
                            </div>
                        </div>
                    </div>
                 </div>

                 <div className="hidden lg:block mt-20">
                      <div className="h-40 w-full border border-white/5 bg-zinc-900/20 rounded-lg overflow-hidden relative">
                           <div className="absolute inset-0 opacity-20"><WorldMap /></div>
                      </div>
                 </div>
             </div>

             {/* Right Column: Clean Form */}
             <div className="flex-1">
                 <div className="bg-zinc-900/20 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                     <form className="flex flex-col gap-6">
                         <div className="grid grid-cols-2 gap-6">
                             <div className="flex flex-col gap-2">
                                 <label className="text-zinc-500 text-xs font-bold uppercase tracking-wider">First Name</label>
                                 <input type="text" className="bg-zinc-950/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-700" placeholder="Jane" />
                             </div>
                             <div className="flex flex-col gap-2">
                                 <label className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Last Name</label>
                                 <input type="text" className="bg-zinc-950/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-700" placeholder="Doe" />
                             </div>
                         </div>
                         <div className="flex flex-col gap-2">
                             <label className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Work Email</label>
                             <input type="email" className="bg-zinc-950/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-700" placeholder="jane@company.com" />
                         </div>
                         <div className="flex flex-col gap-2">
                             <label className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Budget Range</label>
                             <select className="bg-zinc-950/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer">
                                 <option className="text-zinc-500">Select a range...</option>
                                 <option>$10k - $25k</option>
                                 <option>$25k - $50k</option>
                                 <option>$50k - $100k</option>
                                 <option>$100k+</option>
                             </select>
                         </div>
                         <div className="flex flex-col gap-2">
                             <label className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Message</label>
                             <textarea rows={4} className="bg-zinc-950/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none placeholder:text-zinc-700" placeholder="Tell us about your project..."></textarea>
                         </div>
                         <StandardButton className="mt-2">Send Request <ArrowRight size={16}/></StandardButton>
                     </form>
                 </div>
             </div>
        </div>
    </div>
);

// --- 7. Main App Shell ---

const App = () => {
  const [page, setPage] = useState('home');
  useEffect(() => { window.scrollTo(0, 0); }, [page]);
  return (
    <div className="bg-[#09090b] min-h-screen text-zinc-200 font-sans antialiased selection:bg-zinc-800 selection:text-white">
      <NavBar currentPage={page} setPage={setPage} />
      <main>
          {page === 'home' && <HomePage setPage={setPage} />}
          {page === 'products' && <ProductsPage setPage={setPage} />}
          {page === 'services' && <ServicesPage setPage={setPage} />}
          {page === 'company' && <CompanyPage setPage={setPage} />}
          {page === 'contact' && <ContactPage />}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
};

export default App;