'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const variant: Variants = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0  },
};

/**
 * Fades + slides a single element up when it enters the viewport.
 * Use client:visible in Astro.
 */
export default function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
