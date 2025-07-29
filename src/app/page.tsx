'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import './styles.css';

export default function HomePage() {
  return (
    <main className="main-container min-h-screen bg flex flex-col items-center justify-center text-white text-center relative">
      
      {/* SVG Background Image */}
      <img src="/whale.svg" alt="Background" className="background-svg" />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-6 relative z-10"
      >
        Welcome to Marine Brains
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg max-w-xl mb-10 relative z-10"
      >
        Dive into the minds of dolphins, octopuses, and other marine marvels.
      </motion.p>

      <Link href="/animals" className="flip-button relative z-10">
        <span>Learn more</span>
        <span>Learn more</span>
        <span>Learn more</span>
        <span>Learn more</span>
      </Link>
    </main>
  );
}
