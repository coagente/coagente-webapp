"use client";

import { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  offset?: number;
  animationType?: 'fade' | 'slide' | 'scale';
  className?: string;
}

export const ScrollAnimation = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  offset = 0.1, 
  animationType = 'fade',
  className = ""
}: ScrollAnimationProps) => {
  // Simplified version without Framer Motion
  return (
    <div 
      className={`animate-in fade-in slide-in-from-bottom-8 duration-700 ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}s`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};