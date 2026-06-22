"use client";

import React, { useState, useEffect, useRef } from "react";

type TrackId = "synth" | "hat" | "snare" | "kick";

interface Track {
  id: TrackId;
  name: string;
  color: string;
  defaultPattern: boolean[];
}

const TRACKS: Track[] = [
  {
    id: "synth",
    name: "Lead Synth",
    color: "var(--fb-cyan)",
    defaultPattern: [true, false, true, false, true, false, true, false],
  },
  {
    id: "hat",
    name: "Hi-Hat",
    color: "var(--color-sage)",
    defaultPattern: [true, true, true, true, true, true, true, true],
  },
  {
    id: "snare",
    name: "Snare Drum",
    color: "var(--color-rose)",
    defaultPattern: [false, false, true, false, false, false, true, false],
  },
  {
    id: "kick",
    name: "Kick Drum",
    color: "var(--color-wheat)",
    defaultPattern: [true, false, false, false, true, false, false, false],
  },
];

const SYNTH_PITCHES = [
  261.63, 293.66, 329.63, 392.0, 440.0, 392.0, 329.63, 293.66,
]; // C pentatonic

export default function InteractiveSequencer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [patterns, setPatterns] = useState<Record<TrackId, boolean[]>>(() => {
    const initial: Partial<Record<TrackId, boolean[]>> = {};
    TRACKS.forEach((t) => {
      initial[t.id] = [...t.defaultPattern];
    });
    return initial as Record<TrackId, boolean[]>;
  });

  const [mutes, setMutes] = useState<Record<TrackId, boolean>>({
    synth: false,
    hat: false,
    snare: false,
    kick: false,
  });

  // Audio Context Ref
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Timing variables
  const schedulerTimerRef = useRef<number | null>(null);
  const nextNoteTimeRef = useRef(0.0);
  const stepRef = useRef(0);
  const bpmRef = useRef(bpm);
  const patternsRef = useRef(patterns);
  const mutesRef = useRef(mutes);

  // Sync refs to avoid stale closures in scheduler loop
  useEffect(() => {
    bpmRef.current = bpm;
  }, [bpm]);

  useEffect(() => {
    patternsRef.current = patterns;
  }, [patterns]);

  useEffect(() => {
    mutesRef.current = mutes;
  }, [mutes]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (schedulerTimerRef.current) {
        window.clearTimeout(schedulerTimerRef.current);
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  // Initialize Audio Nodes
  const initAudio = () => {
    if (audioCtxRef.current) return;
    const AudioContextClass =
      window.AudioContext || (window as any).webkitAudioContext;
    const ctx = new AudioContextClass();
    audioCtxRef.current = ctx;
  };

  // Synthesize Sound Functions
  const playKick = (
    ctx: AudioContext,
    destination: AudioNode,
    time: number,
  ) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(destination);

    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.3);

    gain.gain.setValueAtTime(1.0, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.3);

    osc.start(time);
    osc.stop(time + 0.35);
  };

  const playSnare = (
    ctx: AudioContext,
    destination: AudioNode,
    time: number,
  ) => {
    // Generate white noise buffer
    const bufferSize = ctx.sampleRate * 0.2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1000, time);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.5, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.18);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(destination);

    noise.start(time);
    noise.stop(time + 0.2);
  };

  const playHat = (ctx: AudioContext, destination: AudioNode, time: number) => {
    const bufferSize = ctx.sampleRate * 0.04;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.setValueAtTime(7500, time);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.25, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.04);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(destination);

    noise.start(time);
    noise.stop(time + 0.05);
  };

  const playSynth = (
    ctx: AudioContext,
    destination: AudioNode,
    time: number,
    step: number,
  ) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(SYNTH_PITCHES[step % 8], time);

    gain.gain.setValueAtTime(0.12, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);

    osc.connect(gain);
    gain.connect(destination);

    osc.start(time);
    osc.stop(time + 0.25);
  };

  // Scheduler Loop
  const scheduleNote = (step: number, time: number) => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    const dest = ctx.destination;

    // Trigger visual step indicator
    const timeDiffMs = Math.max(0, (time - ctx.currentTime) * 1000);
    setTimeout(() => {
      setCurrentStep(step);
    }, timeDiffMs);

    // Play instruments if steps are active and not muted
    const activePatterns = patternsRef.current;
    const activeMutes = mutesRef.current;

    if (activePatterns.kick[step] && !activeMutes.kick)
      playKick(ctx, dest, time);
    if (activePatterns.snare[step] && !activeMutes.snare)
      playSnare(ctx, dest, time);
    if (activePatterns.hat[step] && !activeMutes.hat) playHat(ctx, dest, time);
    if (activePatterns.synth[step] && !activeMutes.synth)
      playSynth(ctx, dest, time, step);
  };

  const scheduler = () => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    while (nextNoteTimeRef.current < ctx.currentTime + 0.1) {
      scheduleNote(stepRef.current, nextNoteTimeRef.current);

      // Advance to next note
      const secondsPerBeat = 60.0 / bpmRef.current;
      const stepDuration = secondsPerBeat / 2; // 8th note steps
      nextNoteTimeRef.current += stepDuration;

      stepRef.current = (stepRef.current + 1) % 8;
    }

    schedulerTimerRef.current = window.setTimeout(scheduler, 25.0);
  };

  // Play / Stop Controls
  const togglePlay = async () => {
    initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    if (ctx.state === "suspended") {
      await ctx.resume();
    }

    if (isPlaying) {
      if (schedulerTimerRef.current) {
        window.clearTimeout(schedulerTimerRef.current);
      }
      setIsPlaying(false);
      setCurrentStep(-1);
    } else {
      nextNoteTimeRef.current = ctx.currentTime + 0.05;
      stepRef.current = 0;
      setIsPlaying(true);
      scheduler();
    }
  };

  // Toggle cell state
  const toggleCell = (trackId: TrackId, colIndex: number) => {
    setPatterns((prev) => {
      const copy = { ...prev };
      copy[trackId] = [...copy[trackId]];
      copy[trackId][colIndex] = !copy[trackId][colIndex];
      return copy;
    });
  };

  // Clear patterns
  const clearPatterns = () => {
    setPatterns({
      synth: Array(8).fill(false),
      hat: Array(8).fill(false),
      snare: Array(8).fill(false),
      kick: Array(8).fill(false),
    });
  };

  // Toggle mute
  const toggleMute = (trackId: TrackId) => {
    setMutes((prev) => ({
      ...prev,
      [trackId]: !prev[trackId],
    }));
  };

  return (
    <div className="sequencer-panel">
      {/* Decorative timeline ruler header */}
      <div className="sequencer-ruler">
        <div className="ruler-left-label">TRACKS</div>
        <div className="ruler-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`ruler-mark ${currentStep === i ? "ruler-mark--active" : ""}`}
            >
              <span>01:0{i + 1}:00</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sequencer Grid */}
      <div className="sequencer-grid">
        {TRACKS.map((t) => (
          <div key={t.id} className="sequencer-row">
            {/* Track controls sidebar */}
            <div className="track-controls">
              <div className="track-info">
                <span
                  className="track-dot"
                  style={{ backgroundColor: t.color }}
                ></span>
                <span className="track-name">{t.name}</span>
              </div>
              <div className="track-buttons">
                <button
                  type="button"
                  onClick={() => toggleMute(t.id)}
                  className={`track-btn track-btn--mute ${mutes[t.id] ? "track-btn--muted-active" : ""}`}
                  title="Mute"
                >
                  M
                </button>
              </div>
            </div>

            {/* Steps cell container */}
            <div className="track-steps">
              {patterns[t.id].map((isActive, colIdx) => (
                <button
                  key={colIdx}
                  type="button"
                  onClick={() => toggleCell(t.id, colIdx)}
                  className={`step-cell ${isActive ? "step-cell--active" : ""} ${currentStep === colIdx ? "step-cell--playing" : ""}`}
                  style={
                    {
                      "--cell-color": t.color,
                      "--glow-color": isActive
                        ? `color-mix(in srgb, ${t.color} 35%, transparent)`
                        : "transparent",
                    } as React.CSSProperties
                  }
                  aria-label={`Toggle step ${colIdx + 1} for ${t.name}`}
                >
                  {currentStep === colIdx && (
                    <div className="step-playhead-indicator"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Control panel bar */}
      <div className="sequencer-toolbar">
        <div className="toolbar-left">
          <button
            type="button"
            onClick={togglePlay}
            className={`play-btn ${isPlaying ? "play-btn--playing" : ""}`}
            aria-label={isPlaying ? "Stop" : "Play Beat"}
          >
            {isPlaying ? (
              <>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                </svg>
                <span>STOP</span>
              </>
            ) : (
              <>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>PLAY BEAT</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={clearPatterns}
            className="clear-btn"
            title="Clear grid pattern"
          >
            CLEAR
          </button>
        </div>

        <div className="toolbar-right">
          {/* BPM Slider */}
          <div className="slider-control">
            <span className="control-label">TEMPO</span>
            <div className="control-input-wrapper">
              <input
                type="range"
                min="80"
                max="160"
                value={bpm}
                onChange={(e) => setBpm(Number(e.target.value))}
                className="sequencer-range-input"
              />
              <span className="control-value">
                {bpm} <span className="value-unit">BPM</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .sequencer-panel {
          background: rgba(20, 19, 18, 0.45);
          border: 1px solid var(--color-hairline);
          border-radius: var(--radius-lg);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          backdrop-filter: blur(16px);
          box-shadow:
            0 1px 1px rgba(0, 0, 0, 0.2) inset,
            0 24px 60px rgba(0, 0, 0, 0.6);
        }

        /* Ruler */
        .sequencer-ruler {
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--color-hairline-soft);
          padding-bottom: 8px;
        }

        .ruler-left-label {
          width: 130px;
          flex-shrink: 0;
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--color-mute);
        }

        .ruler-grid {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 6px;
          flex-grow: 1;
        }

        .ruler-mark {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          color: var(--color-mute);
          text-align: center;
          font-variant-numeric: tabular-nums;
          opacity: 0.6;
          transition: opacity 0.15s ease;
        }

        .ruler-mark--active {
          opacity: 1;
          color: var(--color-accent);
        }

        /* Grid */
        .sequencer-grid {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sequencer-row {
          display: flex;
          align-items: center;
        }

        .track-controls {
          width: 130px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-right: 12px;
        }

        .track-info {
          display: flex;
          align-items: center;
          gap: 6px;
          overflow: hidden;
        }

        .track-dot {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          flex-shrink: 0;
        }

        .track-name {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-body-strong);
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .track-buttons {
          display: flex;
          gap: 4px;
        }

        .track-btn {
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.6rem;
          font-weight: 700;
          border-radius: 3px;
          border: 1px solid var(--color-hairline);
          background: rgba(255, 255, 255, 0.02);
          color: var(--color-mute);
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .track-btn:hover {
          color: var(--color-ink);
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--color-mute);
        }

        .track-btn--muted-active {
          background: rgba(253, 190, 216, 0.16);
          border-color: var(--color-rose);
          color: var(--color-rose);
        }

        .track-steps {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 6px;
          flex-grow: 1;
        }

        .step-cell {
          height: 28px;
          border-radius: var(--radius-xs);
          border: 1px solid var(--color-hairline);
          background: rgba(255, 255, 255, 0.015);
          cursor: pointer;
          position: relative;
          transition: background-color 0.12s ease, border-color 0.12s ease;
        }

        .step-cell:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: var(--color-mute);
        }

        .step-cell--active {
          background-color: var(--cell-color);
          border-color: var(--cell-color);
          box-shadow: none;
        }

        .step-cell--active:hover {
          filter: brightness(1.1);
        }

        .step-cell--playing {
          border-color: rgba(250, 250, 250, 0.4);
        }

        .step-playhead-indicator {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 1px solid rgba(255, 255, 255, 0.65);
          pointer-events: none;
          animation: step-flash 0.12s ease-out;
        }

        @keyframes step-flash {
          0% { opacity: 0.8; }
          100% { opacity: 0; }
        }

        /* Toolbar */
        .sequencer-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          border-top: 1px solid var(--color-hairline-soft);
          padding-top: 12px;
          margin-top: 4px;
        }

        .toolbar-left, .toolbar-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        @media (max-width: 600px) {
          .sequencer-toolbar {
            flex-direction: column;
            align-items: stretch;
          }
          .toolbar-left {
            justify-content: space-between;
          }
          .toolbar-right {
            flex-direction: column;
            align-items: stretch;
            gap: 6px;
          }
        }

        .play-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          height: 28px;
          padding-inline: 12px;
          border-radius: var(--radius-xs);
          border: 1px solid var(--color-accent);
          background: rgba(115, 191, 252, 0.1);
          color: var(--color-accent);
          font-family: var(--font-sans);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .play-btn:hover {
          background: var(--color-accent);
          color: #101214;
        }

        .play-btn--playing {
          border-color: var(--color-rose);
          background: rgba(253, 190, 216, 0.12);
          color: var(--color-rose);
        }

        .play-btn--playing:hover {
          background: var(--color-rose);
          color: #101214;
        }

        .clear-btn {
          height: 28px;
          padding-inline: 10px;
          border-radius: var(--radius-xs);
          border: 1px solid var(--color-hairline);
          background: transparent;
          color: var(--color-mute);
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .clear-btn:hover {
          border-color: var(--color-mute);
          color: var(--color-ink);
        }

        /* Controls */
        .slider-control {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--color-hairline-soft);
          padding: 4px 10px;
          border-radius: var(--radius-xs);
          height: 28px;
          box-sizing: border-box;
        }

        .control-label {
          font-family: var(--font-sans);
          font-size: 0.6rem;
          font-weight: 700;
          color: var(--color-mute);
          letter-spacing: 0.04em;
        }

        .control-input-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sequencer-range-input {
          -webkit-appearance: none;
          width: 60px;
          background: var(--color-hairline);
          height: 3px;
          border-radius: 9999px;
          outline: none;
        }

        .sequencer-range-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-body);
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .sequencer-range-input::-webkit-slider-thumb:hover {
          background: var(--color-accent);
        }

        .control-value {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 500;
          color: var(--color-body-strong);
          min-width: 40px;
          text-align: right;
          font-variant-numeric: tabular-nums;
        }

        .value-unit {
          color: var(--color-mute);
          font-size: 0.55rem;
        }
      `}</style>
    </div>
  );
}
