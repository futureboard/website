'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import InteractiveSequencer from './InteractiveSequencer.tsx';

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

type HeroTab = 'screenshot' | 'sequencer';

export default function HeroContent() {
  const [activeTab, setActiveTab] = useState<HeroTab>('screenshot');

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
        <motion.p className="hero-eyebrow" variants={itemVariants} transition={transitionDur}>
          <span className="eyebrow-dot" aria-hidden="true" />
          Experimental &middot; In active development
        </motion.p>

        {/* Headline */}
        <motion.h1 className="hero-headline" variants={itemVariants} transition={transitionDur}>
          A DAW I actually<br />
          want to use every<br />
          <em className="hero-accent">damn day.</em>
        </motion.h1>

        {/* Description */}
        <motion.p className="hero-desc" variants={itemVariants} transition={transitionDur}>
          Futureboard is a DAW I'm building because nothing out there feels quite right.
          Native Rust core, GPU-rendered UI, and a layout that doesn't fight you
          when you're in the middle of a session.
        </motion.p>

        {/* CTA Actions */}
        <motion.div className="hero-actions" variants={itemVariants} transition={transitionDur}>
          <a href="/download" className="btn btn-primary hero-btn-main">
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

      {/* Right Column: Interactive App Showcase Window */}
      <motion.div
        className="hero-showcase-side"
        initial={{ opacity: 0, scale: 0.98, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, ease, delay: 0.15 }}
      >
        <div className="showcase-window">
          {/* Simulated Title Bar */}
          <div className="window-titlebar">
            {/* macOS-style Traffic Light Buttons */}
            <div className="window-dots" aria-hidden="true">
              <span className="window-dot-btn red"></span>
              <span className="window-dot-btn yellow"></span>
              <span className="window-dot-btn green"></span>
            </div>

            {/* Window Tabs Switcher */}
            <div className="window-tabs" role="tablist">
              <button
                role="tab"
                aria-selected={activeTab === 'screenshot'}
                onClick={() => setActiveTab('screenshot')}
                className={`window-tab ${activeTab === 'screenshot' ? 'window-tab--active' : ''}`}
              >
                App Screenshot
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 'sequencer'}
                onClick={() => setActiveTab('sequencer')}
                className={`window-tab ${activeTab === 'sequencer' ? 'window-tab--active' : ''}`}
              >
                Web Sequencer
                <span className="live-badge-dot"></span>
              </button>
            </div>
            
            {/* Fake layout status */}
            <div className="window-status" aria-hidden="true">
              {activeTab === 'sequencer' ? 'Web Audio API' : 'v0.1.0-alpha'}
            </div>
          </div>

          {/* Window Body Container */}
          <div className="window-body">
            <AnimatePresence mode="wait">
              {activeTab === 'screenshot' ? (
                <motion.div
                  key="screenshot"
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(4px)' }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="showcase-view screenshot-view"
                >
                  <img
                    src="/preview.webp"
                    alt="Futureboard Studio DAW interface preview showing track lanes and timeline"
                    className="showcase-screenshot-img"
                    loading="eager"
                  />
                  <div className="screenshot-overlay">
                    <span>Double-click or click tabs to play with Web Sequencer</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="sequencer"
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(4px)' }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="showcase-view sequencer-view"
                >
                  <InteractiveSequencer />
                </motion.div>
              )}
            </AnimatePresence>
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
          max-width: 44ch;
          margin-bottom: 24px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
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
          background: #181716;
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
          background: #1d1c1a;
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

        .window-tabs {
          display: flex;
          background: rgba(0, 0, 0, 0.15);
          border: 1px solid var(--color-hairline-soft);
          border-radius: 6px;
          padding: 2px;
        }

        .window-tab {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--color-mute);
          padding: 4px 12px;
          border: none;
          background: transparent;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.15s ease;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .window-tab:hover {
          color: var(--color-body-strong);
        }

        .window-tab--active {
          background: rgba(255, 255, 255, 0.05);
          color: var(--color-ink);
        }

        .live-badge-dot {
          width: 4px;
          height: 4px;
          border-radius: 9999px;
          background: #5bbfb5;
          display: inline-block;
          box-shadow: 0 0 6px #5bbfb5;
          animation: pulse 1.6s infinite ease-in-out;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.3); }
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
          background: #141312;
          min-height: 250px;
          display: flex;
          flex-direction: column;
        }

        .showcase-view {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .screenshot-view {
          cursor: pointer;
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

        .screenshot-overlay {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(20, 19, 18, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--color-hairline);
          border-radius: 6px;
          padding: 6px 14px;
          font-family: var(--font-sans);
          font-size: 0.68rem;
          color: var(--color-body);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .screenshot-view:hover .screenshot-overlay {
          opacity: 1;
        }

        .sequencer-view {
          padding: 10px;
        }
      `}</style>
    </div>
  );
}
