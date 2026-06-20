'use client';

import { motion, type Variants } from 'framer-motion';

interface HeroContentProps {
  /** Passed through so the markup stays server-rendered-friendly */
}

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0  },
};

const ease = [0.16, 1, 0.3, 1] as const;
const dur  = { duration: 0.55, ease } as const;

export default function HeroContent(_props: HeroContentProps) {
  return (
    <motion.div
      className="hero-text"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Eyebrow */}
      <motion.p className="hero-eyebrow" variants={item} transition={dur}>
        <span className="eyebrow-dot" aria-hidden="true" />
        Experimental &middot; Active Development
      </motion.p>

      {/* Headline */}
      <motion.h1 className="hero-headline" variants={item} transition={dur}>
        A modern DAW for<br />
        producers and<br />
        <em className="hero-accent">audio hackers.</em>
      </motion.h1>

      {/* Description */}
      <motion.p className="hero-desc" variants={item} transition={dur}>
        Futureboard Studio is a modern DAW and creative audio platform
        built for producers, developers, and audio hackers. Native Rust
        + GPUI at its core, with Web and Electron targets for every workflow.
      </motion.p>

      {/* CTA row */}
      <motion.div className="hero-actions" variants={item} transition={dur}>
        <a href="#waitlist" className="btn btn-primary">
          Join the Waitlist
        </a>
        <a
          href="https://github.com/arizkami/futureboard"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          View on GitHub
        </a>
      </motion.div>
    </motion.div>
  );
}
