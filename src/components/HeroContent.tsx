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
const WAITLIST_URL = "https://tally.so/r/lbgzx5";

// Product-native technical evidence — mono baseline strip.
const baseline = [
  ["CORE", "Rust audio engine"],
  ["RENDER", "GPUI · GPU-drawn"],
  ["EDIT", "MIDI · Mixer · VST3"],
  ["BUILD", "Windows · Alpha"],
] as const;

export default function HeroContent({ lang = "en" }: { lang?: Locale }) {
  const t = translations[lang];

  return (
    <div className="hero-grid-wrap">
      <div className="hero-grid">
        {/* Left Column: Text Copy */}
        <motion.div
          className="hero-text-side"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p
            className="hero-eyebrow"
            variants={itemVariants}
            transition={transitionDur}
          >
            <span className="eyebrow-mark" aria-hidden="true" />
            {t.hero_eyebrow}
          </motion.p>

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

          <motion.p
            className="hero-desc"
            variants={itemVariants}
            transition={transitionDur}
          >
            {t.hero_desc}
          </motion.p>

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
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
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

        {/* Right Column: App Screenshot, framed */}
        <motion.div
          className="hero-showcase-side"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.15 }}
        >
          <figure className="showcase-window">
            <figcaption className="window-bar">
              <span className="window-bar-name">Master.fbp</span>
              <span className="window-bar-spec">48 kHz · 24-bit · 00:00:00:00</span>
            </figcaption>
            <div className="window-body">
              <img
                src="/Master.webp"
                alt="Futureboard Studio DAW interface preview showing track lanes and timeline"
                className="showcase-screenshot-img"
                loading="eager"
              />
            </div>
          </figure>
        </motion.div>
      </div>

      {/* Baseline: mono technical evidence spanning the grid */}
      <dl className="hero-baseline">
        {baseline.map(([k, v]) => (
          <div className="hero-baseline-cell" key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
          padding-block: 24px 56px;
        }

        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1.25fr;
            gap: 0;
            padding-block: 40px 64px;
          }
          .hero-text-side {
            padding-right: 56px;
          }
          .hero-showcase-side {
            padding-left: 56px;
            border-left: 1px solid var(--color-hairline);
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
          gap: 9px;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 22px;
        }

        .eyebrow-mark {
          width: 7px;
          height: 7px;
          background: var(--color-accent);
          flex-shrink: 0;
          display: inline-block;
        }

        .hero-headline {
          font-size: clamp(2.4rem, 6vw, 3.9rem);
          font-weight: 400;
          line-height: 1.04;
          letter-spacing: -0.05em;
          text-wrap: balance;
          color: var(--color-ink);
          margin-bottom: 20px;
        }

        .hero-accent {
          font-style: italic;
          font-family: var(--font-serif);
          color: var(--color-accent-light);
          letter-spacing: -0.01em;
          font-weight: 400;
        }

        .hero-desc {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--color-body);
          max-width: 48ch;
          margin-bottom: 26px;
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

        /* Framed app window — square, quiet rule, mono chrome */
        .hero-showcase-side {
          width: 100%;
        }

        .showcase-window {
          width: 100%;
          margin: 0;
          background: var(--color-canvas-soft);
          border: 1px solid var(--color-hairline);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
        }

        .window-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          height: 32px;
          padding-inline: 12px;
          background: var(--color-canvas-mid);
          border-bottom: 1px solid var(--color-hairline-soft);
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          letter-spacing: 0.03em;
          user-select: none;
        }

        .window-bar-name {
          color: var(--color-body-strong);
        }

        .window-bar-spec {
          color: var(--color-mute);
          font-variant-numeric: tabular-nums;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .window-body {
          position: relative;
          background: #171719;
          overflow: hidden;
        }

        .showcase-screenshot-img {
          width: 100%;
          height: auto;
          display: block;
          filter: brightness(0.94);
        }

        /* Baseline mono evidence strip */
        .hero-baseline {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          margin: 0;
          border-top: 1px solid var(--color-hairline);
        }

        @media (min-width: 720px) {
          .hero-baseline {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .hero-baseline-cell {
          padding: 16px 0;
          border-left: 1px solid var(--color-grid-line);
          padding-left: 16px;
        }

        /* First cell of each row sits flush to the grid edge */
        .hero-baseline-cell:nth-child(odd) {
          border-left: 0;
          padding-left: 0;
        }

        @media (min-width: 720px) {
          .hero-baseline-cell {
            padding-left: 20px;
          }
          .hero-baseline-cell:nth-child(odd) {
            border-left: 1px solid var(--color-grid-line);
            padding-left: 20px;
          }
          .hero-baseline-cell:first-child {
            border-left: 0;
            padding-left: 0;
          }
        }

        .hero-baseline-cell dt {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          color: var(--color-mute);
          margin-bottom: 5px;
        }

        .hero-baseline-cell dd {
          margin: 0;
          font-size: 0.8125rem;
          color: var(--color-body-strong);
          line-height: 1.35;
        }
      `}</style>
    </div>
  );
}
