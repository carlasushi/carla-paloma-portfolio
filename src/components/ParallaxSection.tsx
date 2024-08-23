// src/components/ParallaxSection.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ParallaxSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ticking = useRef<boolean>(false); // Track if a requestAnimationFrame is pending

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          updateParallax();
          ticking.current = false; // Reset the ticking flag
        });
        ticking.current = true; // Set the ticking flag
      }
    };

    const updateParallax = () => {
      if (sectionRef.current) {
        const scrollY = window.scrollY; // Get the current scroll position
        gsap.to(sectionRef.current, {
          y: scrollY * 0.2, // Adjust the multiplier for speed
          ease: 'power1.out',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} style={{ position: 'relative', overflow: 'hidden', willChange: 'transform' }}>
      {children}
    </div>
  );
};

export default ParallaxSection;
