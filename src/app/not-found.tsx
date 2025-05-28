"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Background Eclipse Effect */}
      <div className="fixed inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
        >
          {/* Dark circle */}
          <div className="w-full h-full rounded-full bg-black" />
          
          {/* Light strip */}
          <div 
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-[102%] h-[102%] rounded-full"
            style={{
              background: `conic-gradient(from 270deg, 
                transparent 0deg,
                transparent 50deg,
                rgba(59, 130, 246, 0.6) 75deg,
                rgba(147, 197, 253, 0.7) 90deg,
                rgba(59, 130, 246, 0.6) 105deg,
                transparent 130deg,
                transparent 360deg
              )`,
              maskImage: `radial-gradient(circle, transparent 49%, black 50%, black 52%, transparent 53%)`,
              WebkitMaskImage: `radial-gradient(circle, transparent 49%, black 50%, black 52%, transparent 53%)`,
            }}
          />
          
          {/* Glow effect */}
          <div 
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-[104%] h-[104%] rounded-full blur-sm"
            style={{
              background: `conic-gradient(from 270deg, 
                transparent 0deg,
                transparent 60deg,
                rgba(59, 130, 246, 0.3) 80deg,
                rgba(147, 197, 253, 0.4) 90deg,
                rgba(59, 130, 246, 0.3) 100deg,
                transparent 120deg,
                transparent 360deg
              )`,
              maskImage: `radial-gradient(circle, transparent 48%, black 50%, black 54%, transparent 56%)`,
              WebkitMaskImage: `radial-gradient(circle, transparent 48%, black 50%, black 54%, transparent 56%)`,
            }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* 404 Number */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-8xl md:text-9xl font-bold text-blue-400 mb-4"
          >
            404
          </motion.h1>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-semibold">
              Page Not Found
            </h2>
            <p className="text-gray-300 text-lg max-w-md mx-auto">
              The page you're looking for seems to have drifted into the void. 
              Let's get you back to familiar territory.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Return Home
              </motion.button>
            </Link>
            
            <motion.button
              onClick={() => window.history.back()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
            >
              Go Back
            </motion.button>
          </motion.div>

          {/* Tipthing Branding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8"
          >
            <p className="text-blue-400 tracking-[0.2em] text-sm font-light">
              TIPTHING
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 1.5,
            }}
            className="absolute w-1 h-1 bg-blue-400 rounded-full blur-sm"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>
    </main>
  );
} 