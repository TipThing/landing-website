"use client";

import { motion } from "motion/react";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Background Eclipse Effect */}
      <div className="fixed inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
        >
          {/* Dark circle */}
          <div className="w-full h-full rounded-full bg-black" />
          
          {/* Light strip - slightly different color for error state */}
          <div 
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-[102%] h-[102%] rounded-full"
            style={{
              background: `conic-gradient(from 270deg, 
                transparent 0deg,
                transparent 50deg,
                rgba(239, 68, 68, 0.6) 75deg,
                rgba(248, 113, 113, 0.7) 90deg,
                rgba(239, 68, 68, 0.6) 105deg,
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
                rgba(239, 68, 68, 0.3) 80deg,
                rgba(248, 113, 113, 0.4) 90deg,
                rgba(239, 68, 68, 0.3) 100deg,
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
          {/* Error Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center">
              <svg 
                className="w-10 h-10 text-red-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" 
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
            <h1 className="text-3xl md:text-4xl font-bold">
              Something went wrong!
            </h1>
            <p className="text-gray-300 text-lg max-w-md mx-auto">
              We encountered an unexpected error. Don't worry, our team has been notified and we're working on a fix.
            </p>
            
            {/* Error details for development */}
            {process.env.NODE_ENV === 'development' && (
              <motion.details
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-6 text-left bg-gray-900/50 rounded-lg p-4 max-w-lg mx-auto"
              >
                <summary className="cursor-pointer text-red-400 font-medium mb-2">
                  Error Details (Development)
                </summary>
                <pre className="text-xs text-gray-300 overflow-auto max-h-32">
                  {error.message}
                </pre>
              </motion.details>
            )}
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
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              Try Again
            </motion.button>
            
            <motion.button
              onClick={() => window.location.href = '/'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
            >
              Go Home
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

      {/* Floating particles - red tinted for error state */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 1.2,
            }}
            className="absolute w-1 h-1 bg-red-400 rounded-full blur-sm"
            style={{
              left: `${25 + i * 20}%`,
              top: `${35 + (i % 2) * 25}%`,
            }}
          />
        ))}
      </div>
    </main>
  );
} 