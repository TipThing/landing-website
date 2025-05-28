"use client";

import { motion, MotionValue } from "motion/react";

interface BlobBackgroundProps {
  scale: MotionValue<number>;
  rotate: MotionValue<number>;
  opacity: MotionValue<number>;
}

export function BlobBackground({ scale, rotate, opacity }: BlobBackgroundProps) {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Main Eclipse Circle */}
      <motion.div
        style={{
          scale,
          rotate,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
      >
        {/* Dark circle (same as background) */}
        <div className="w-full h-full rounded-full bg-black" />
        
        {/* Main light strip that grazes the top of the circle */}
        <motion.div
          style={{ opacity }}
          className="absolute inset-0"
        >
          {/* Primary light strip at the top */}
          <div 
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-[102%] h-[102%] rounded-full"
            style={{
              background: `conic-gradient(from 270deg, 
                transparent 0deg,
                transparent 40deg,
                rgba(59, 130, 246, 0.8) 70deg,
                rgba(147, 197, 253, 0.9) 90deg,
                rgba(59, 130, 246, 0.8) 110deg,
                transparent 140deg,
                transparent 360deg
              )`,
              maskImage: `radial-gradient(circle, transparent 49%, black 50%, black 52%, transparent 53%)`,
              WebkitMaskImage: `radial-gradient(circle, transparent 49%, black 50%, black 52%, transparent 53%)`,
            }}
          />
          
          {/* Secondary subtle light at the bottom (opposite side) */}
          <div 
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-[102%] h-[102%] rounded-full"
            style={{
              background: `conic-gradient(from 90deg, 
                transparent 0deg,
                transparent 60deg,
                rgba(59, 130, 246, 0.2) 80deg,
                rgba(147, 197, 253, 0.3) 90deg,
                rgba(59, 130, 246, 0.2) 100deg,
                transparent 120deg,
                transparent 360deg
              )`,
              maskImage: `radial-gradient(circle, transparent 49%, black 50%, black 52%, transparent 53%)`,
              WebkitMaskImage: `radial-gradient(circle, transparent 49%, black 50%, black 52%, transparent 53%)`,
            }}
          />
          
          {/* Glow effect for primary light */}
          <div 
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-[104%] h-[104%] rounded-full blur-sm"
            style={{
              background: `conic-gradient(from 270deg, 
                transparent 0deg,
                transparent 50deg,
                rgba(59, 130, 246, 0.4) 75deg,
                rgba(147, 197, 253, 0.6) 90deg,
                rgba(59, 130, 246, 0.4) 105deg,
                transparent 130deg,
                transparent 360deg
              )`,
              maskImage: `radial-gradient(circle, transparent 48%, black 50%, black 54%, transparent 56%)`,
              WebkitMaskImage: `radial-gradient(circle, transparent 48%, black 50%, black 54%, transparent 56%)`,
            }}
          />
          
          {/* Outer glow for primary light */}
          <div 
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-[106%] h-[106%] rounded-full blur-md"
            style={{
              background: `conic-gradient(from 270deg, 
                transparent 0deg,
                transparent 60deg,
                rgba(59, 130, 246, 0.2) 80deg,
                rgba(147, 197, 253, 0.3) 90deg,
                rgba(59, 130, 246, 0.2) 100deg,
                transparent 120deg,
                transparent 360deg
              )`,
              maskImage: `radial-gradient(circle, transparent 47%, black 50%, black 56%, transparent 58%)`,
              WebkitMaskImage: `radial-gradient(circle, transparent 47%, black 50%, black 56%, transparent 58%)`,
            }}
          />
        </motion.div>
      </motion.div>
      
      {/* Ambient light particles */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0"
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 1.2,
            }}
            className="absolute w-1 h-1 bg-blue-400 rounded-full blur-sm"
            style={{
              left: `${30 + i * 20}%`,
              top: `${40 + (i % 2) * 30}%`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
} 