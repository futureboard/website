'use client';

import { motion, type Variants } from 'framer-motion';

interface HeroContentProps {}

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
        Experimental &middot; In active development
      </motion.p>

      {/* Headline */}
      <motion.h1 className="hero-headline" variants={item} transition={dur}>
        A DAW I actually<br />
        want to use every<br />
        <em className="hero-accent">damn day.</em>
      </motion.h1>

      {/* Description */}
      <motion.p className="hero-desc" variants={item} transition={dur}>
        Futureboard is a DAW I'm building because nothing out there feels quite right.
        Native Rust core, GPU-rendered UI, and a layout that doesn't fight you
        when you're in the middle of a session.
      </motion.p>

      {/* CTA row */}
      <motion.div className="hero-actions" variants={item} transition={dur}>
        <a href="/download" className="btn btn-primary">
          Download
        </a>
        <a href="#waitlist" className="btn btn-outline">
          Join Waitlist
        </a>
        <a
          href="https://github.com/arizkami/futureboard"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          GitHub
        </a>
      </motion.div>
    </motion.div>
  );
}
