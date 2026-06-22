"use client";

import { motion, type Variants } from "framer-motion";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface AnimatedFeatureCardsProps {
  features: Feature[];
  iconPaths: Record<string, string>;
  iconColors: Record<string, string>;
}

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.05,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function AnimatedFeatureCards({
  features,
  iconPaths,
  iconColors,
}: AnimatedFeatureCardsProps) {
  return (
    <motion.div
      className="features-grid"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {features.map((f) => (
        <motion.div
          key={f.icon}
          className="feature-card"
          variants={card}
          transition={{ duration: 0.45, ease }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke={iconColors[f.icon] ?? "#31FD97"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="feature-icon"
          >
            <path d={iconPaths[f.icon] ?? ""} />
          </svg>
          <h3 className="feature-title">{f.title}</h3>
          <p className="feature-desc">{f.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
