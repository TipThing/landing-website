"use client";

import { BlobBackground } from "@/components/BlobBackground";
import { ContactForm } from "@/components/ContactForm";
import { motion, useScroll, useTransform } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to animate the eclipse
  const blobScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const blobRotate = useTransform(scrollYProgress, [0, 1], [0, 180]); // Full half rotation for eclipse effect
  const blobOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 0.7, 0.5, 0.3]); // More gradual fade

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Eclipse Background */}
      <BlobBackground 
        scale={blobScale}
        rotate={blobRotate}
        opacity={blobOpacity}
      />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider">
              COMING SOON
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-lg md:text-xl text-blue-400 tracking-[0.3em] font-light"
            >
              TIPTHING
            </motion.p>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <ContactForm />
      </section>
    </main>
  );
}
