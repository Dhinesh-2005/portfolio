import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState(null);
  const [isPulsing, setIsPulsing] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Check if device has a fine pointer (mouse) and is not reduced-motion
    const hasMouse = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasMouse || prefersReducedMotion) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);

    // Initial default stationary position on page load
    setPosition({
      x: window.innerWidth * 0.7,
      y: window.innerHeight * 0.42
    });

    // The ball is completely FIXED and ONLY moves when a place is clicked
    const handleTrigger = (e) => {
      // clientX and clientY provide the exact viewport coordinates of the click
      setPosition({ x: e.clientX, y: e.clientY });
      setIsPulsing(true);

      const timer = setTimeout(() => {
        setIsPulsing(false);
      }, 450);

      return () => clearTimeout(timer);
    };

    // Use capture: true so any click, even on nested buttons or links, reliably relocates the ball
    window.addEventListener('pointerdown', handleTrigger, { capture: true, passive: true });

    return () => {
      window.removeEventListener('pointerdown', handleTrigger, { capture: true });
    };
  }, []);

  if (!isEnabled || !position) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
      }}
    >
      {/* Click Ripple Effect */}
      {isPulsing && (
        <div className="absolute inset-0 -m-3 rounded-full border border-red-500/70 animate-ping pointer-events-none" />
      )}

      {/* Ambient Red Glow Aura */}
      <div className="absolute -inset-2 rounded-full bg-red-600/20 blur-md pointer-events-none" />

      {/* Main Glass Ball - Fixed until clicked */}
      <div
        style={{
          width: isPulsing ? '46px' : '36px',
          height: isPulsing ? '46px' : '36px',
          transition: 'width 0.3s cubic-bezier(0.22, 1, 0.36, 1), height 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
        className="relative rounded-full flex items-center justify-center
          border border-red-500/50
          bg-gradient-to-tr from-red-600/25 via-red-500/10 to-transparent
          backdrop-blur-[2px]
          shadow-[0_0_22px_rgba(220,38,38,0.38),inset_0_0_10px_rgba(239,68,68,0.2)]"
      >
        {/* Subtle Central Core Dot */}
        <div className="w-1.5 h-1.5 rounded-full bg-red-400 shadow-[0_0_6px_rgba(239,68,68,0.9)] opacity-85" />
      </div>
    </div>
  );
};

export default CustomCursor;
