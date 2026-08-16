import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  useEffect(() => {
    // 1.6s water-fill + 0.4s pause + shutter lift
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: '-100%',
        transition: {
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1], // Luxury cubic-bezier shutter opening
          delay: 0.1,
        },
      }}
      className="fixed inset-0 z-[100000] flex items-center justify-center bg-[#ff2a2a] overflow-hidden select-none pointer-events-auto"
    >
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        exit={{
          scale: 0.92,
          opacity: 0,
          transition: { duration: 0.45, ease: [0.65, 0, 0.35, 1] },
        }}
        className="relative flex items-center justify-center px-4"
      >
        {/* Background Dark Transparent Layer */}
        <span
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tighter text-black/25 uppercase select-none"
          aria-hidden="true"
        >
          Tharanish.
        </span>

        {/* Foreground White Text with Water-Fill upward clip-path */}
        <motion.span
          initial={{
            clipPath: 'inset(100% 0% 0% 0%)',
          }}
          animate={{
            clipPath: 'inset(0% 0% 0% 0%)',
          }}
          transition={{
            duration: 1.6,
            ease: [0.65, 0, 0.35, 1],
            delay: 0.2,
          }}
          className="absolute inset-0 flex items-center justify-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tighter text-white uppercase select-none"
        >
          Tharanish.
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
