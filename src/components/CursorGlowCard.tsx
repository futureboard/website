'use client';

import React from 'react';

interface FramedPanelProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: 'div' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

/**
 * Plain framed panel. Formerly a cursor-glow card; the Gridgeist system
 * relies on quiet 1px rules instead of pointer glow, so this is now a
 * thin wrapper that applies the framed-panel class. Name kept for callers.
 */
export default function CursorGlowCard({
  children,
  className = '',
  as = 'div',
  ...props
}: FramedPanelProps) {
  const Component = as;

  return (
    <Component className={`cursor-glow-card ${className}`} {...props}>
      {children}
    </Component>
  );
}
