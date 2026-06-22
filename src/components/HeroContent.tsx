"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { translations, type Locale } from "../i18n/translations.ts";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

const ease = [0.16, 1, 0.3, 1] as const;
const transitionDur = { duration: 0.6, ease } as const;

export default function HeroContent({ lang = "en" }: { lang?: Locale }) {
  const t = translations[lang];

  return (
    <div className="hero-grid">
      {/* Left Column: Text Copy */}
      <motion.div
        className="hero-text-side"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.p
          className="hero-eyebrow"
          variants={itemVariants}
          transition={transitionDur}
        >
          <span className="eyebrow-dot" aria-hidden="true" />
          {t.hero_eyebrow}
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="hero-headline"
          variants={itemVariants}
          transition={transitionDur}
        >
          {t.hero_headline_1}
          <br />
          {t.hero_headline_2}
          <br />
          <em className="hero-accent">{t.hero_headline_accent}</em>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="hero-desc"
          variants={itemVariants}
          transition={transitionDur}
        >
          {t.hero_desc}
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          className="hero-actions"
          variants={itemVariants}
          transition={transitionDur}
        >
          <a
            href={lang === "en" ? "/download" : `/${lang}/download`}
            className="btn btn-primary hero-btn-main"
          >
            {t.hero_download}
          </a>
          <a href="#waitlist" className="btn btn-outline">
            {t.hero_waitlist}
          </a>
          <a
            href="https://github.com/arizkami/futureboard"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            {t.hero_github}
          </a>
        </motion.div>
      </motion.div>

      {/* Right Column: App Showcase Window */}
      <motion.div
        className="hero-showcase-side"
        initial={{ opacity: 0, scale: 0.98, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, ease, delay: 0.15 }}
      >
        <div className="showcase-window">
          {/* Simulated Title Bar */}

          {/* Window Body Container */}
          <div className="window-body">
            <div className="showcase-view screenshot-view">
              <img
                src="/Master.webp"
                alt="Futureboard Studio DAW interface preview showing track lanes and timeline"
                className="showcase-screenshot-img"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.1fr 1.3fr;
            gap: 40px;
          }
        }

        .hero-text-side {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 18px;
        }

        .eyebrow-dot {
          width: 5px;
          height: 5px;
          border-radius: 9999px;
          background: var(--color-accent);
          flex-shrink: 0;
          display: inline-block;
          animation: blink 2.5s infinite ease-in-out;
        }

        @keyframes blink {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        .hero-headline {
          font-size: clamp(2.35rem, 6vw, 3.85rem);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.05em;
          text-wrap: balance;
          color: var(--color-ink);
          margin-bottom: 18px;
        }

        .hero-accent {
          font-style: italic;
          font-family: var(--font-serif);
          color: var(--color-accent-light);
          letter-spacing: -0.01em;
          font-weight: 400;
        }

        .hero-desc {
          font-size: 0.9rem;
          line-height: 1.7;
          color: var(--color-body);
          max-width: 50ch;
          margin-bottom: 24px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          width: 100%;
        }

        .hero-actions .btn {
          justify-content: center;
        }

        @media (max-width: 480px) {
          .hero-actions .btn {
            width: 100%;
          }
        }

        /* Showcase App Window */
        .hero-showcase-side {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .showcase-window {
          width: 100%;
          max-width: 680px;
          background: var(--color-canvas-soft);
          border: 1px solid var(--color-hairline);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow:
            0 1px 1px rgba(255, 255, 255, 0.03) inset,
            0 12px 30px rgba(0, 0, 0, 0.4),
            0 32px 70px rgba(0, 0, 0, 0.55);
          display: flex;
          flex-direction: column;
        }

        .window-titlebar {
          height: 38px;
          background: var(--color-canvas-mid);
          border-bottom: 1px solid var(--color-hairline-soft);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-inline: 14px;
          user-select: none;
        }

        .window-dots {
          display: flex;
          gap: 6px;
          width: 80px;
        }

        .window-dot-btn {
          width: 9px;
          height: 9px;
          border-radius: 9999px;
          display: inline-block;
          opacity: 0.65;
        }

        .window-dot-btn.red { background: #ff5f56; }
        .window-dot-btn.yellow { background: #ffbd2e; }
        .window-dot-btn.green { background: #27c93f; }

        .window-title {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--color-body-strong);
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .window-status {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 500;
          color: var(--color-mute);
          width: 80px;
          text-align: right;
          font-variant-numeric: tabular-nums;
        }

        .window-body {
          position: relative;
          background: #171719;
          display: flex;
          flex-direction: column;
        }

        .showcase-view {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .screenshot-view {
          position: relative;
          overflow: hidden;
        }

        .showcase-screenshot-img {
          width: 100%;
          height: auto;
          display: block;
          filter: brightness(0.9) contrast(1.02);
          transition: transform 0.4s ease, filter 0.4s ease;
        }

        .screenshot-view:hover .showcase-screenshot-img {
          transform: scale(1.01);
          filter: brightness(0.98) contrast(1.02);
        }
      `}</style>
    </div>
  );
}
