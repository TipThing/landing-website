"use client";

import { motion } from "motion/react";
import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <main className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
          {/* Background Eclipse Effect */}
          <div className="fixed inset-0 overflow-hidden">
            <motion.div
              animate={{
                rotate: [0, -360],
              }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
            >
              {/* Dark circle */}
              <div className="w-full h-full rounded-full bg-black" />
              
              {/* Light strip - red for critical error */}
              <div 
                className="absolute -top-1 left-1/2 -translate-x-1/2 w-[102%] h-[102%] rounded-full"
                style={{
                  background: `conic-gradient(from 270deg, 
                    transparent 0deg,
                    transparent 50deg,
                    rgba(220, 38, 38, 0.7) 75deg,
                    rgba(239, 68, 68, 0.8) 90deg,
                    rgba(220, 38, 38, 0.7) 105deg,
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
                    rgba(220, 38, 38, 0.4) 80deg,
                    rgba(239, 68, 68, 0.5) 90deg,
                    rgba(220, 38, 38, 0.4) 100deg,
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
              {/* Critical Error Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex justify-center mb-6"
              >
                <div className="w-24 h-24 rounded-full bg-red-600/20 flex items-center justify-center">
                  <svg 
                    className="w-12 h-12 text-red-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Error Message */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <h1 className="text-4xl md:text-5xl font-bold">
                  Critical Error
                </h1>
                <p className="text-gray-300 text-lg max-w-md mx-auto">
                  A critical error occurred that prevented the application from loading. 
                  Please try refreshing the page or contact support if the problem persists.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
              >
                <motion.button
                  onClick={reset}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Try Again
                </motion.button>
                
                <motion.button
                  onClick={() => window.location.reload()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Reload Page
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

          {/* Floating particles - red for critical state */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4 + i * 0.7,
                  repeat: Infinity,
                  delay: i * 1.5,
                }}
                className="absolute w-1 h-1 bg-red-500 rounded-full blur-sm"
                style={{
                  left: `${30 + i * 25}%`,
                  top: `${40 + (i % 2) * 20}%`,
                }}
              />
            ))}
          </div>
        </main>
      </body>
    </html>
  );
} 