'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function InteractiveGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement for spotlight
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{
        // Localized CSS variables for zero-latency performance
        '--mouse-x': `${springX.get()}px`,
        '--mouse-y': `${springY.get()}px`,
      } as React.CSSProperties}
    >
      {/* Base Grid Layer */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern 
              id="grid-pattern" 
              width="60" 
              height="60" 
              patternUnits="userSpaceOnUse"
            >
              <path 
                d="M 60 0 L 0 0 0 60" 
                fill="none" 
                stroke="white" 
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Interactive Multi-Layer Glow System */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{
          background: `
            radial-gradient(circle 120px at var(--mouse-x) var(--mouse-y), rgba(129, 140, 248, 0.25), transparent 80%),
            radial-gradient(circle 500px at var(--mouse-x) var(--mouse-y), rgba(99, 102, 241, 0.1), transparent 80%)
          `,
          maskImage: `radial-gradient(circle 450px at var(--mouse-x) var(--mouse-y), black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 450px at var(--mouse-x) var(--mouse-y), black, transparent)`,
        } as any}
      >
        <div className="absolute inset-0 opacity-[0.25]">
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </motion.div>

      {/* Data Pulse Lines */}
      <div className="absolute inset-0 z-20">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3
            }}
            className="absolute h-px w-64 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"
            style={{ top: `${20 + i * 25}%` }}
          />
        ))}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`v-${i}`}
            initial={{ y: '-100%' }}
            animate={{ y: '200%' }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 4
            }}
            className="absolute w-px h-64 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"
            style={{ left: `${30 + i * 30}%` }}
          />
        ))}
      </div>
    </div>
  );
}
