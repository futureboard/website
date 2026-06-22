'use client';

import React, { useRef } from 'react';

interface CursorGlowCardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: 'div' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

export default function CursorGlowCard({
  children,
  className = '',
  as = 'div',
  ...props
}: CursorGlowCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const Component = as;

  return (
    <Component
      ref={cardRef as any}
      onMouseMove={handleMouseMove}
      className={`cursor-glow-card ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
