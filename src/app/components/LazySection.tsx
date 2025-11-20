"use client";

import React, { useState, useEffect, useRef } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  /** Odhadovaná výška sekce pro placeholder (aby stránka neskákala) */
  height?: number | string;
  /** Jak daleko předem začít načítat (default 600px) */
  rootMargin?: string;
}

const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  height = 400, 
  rootMargin = "600px" // Načte se, když je uživatel 600px daleko (cca 1 scroll)
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Pokud už je viditelné, nic nedělej
    if (isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Použijeme startTransition nebo rAF pro plynulejší render, pokud by to sekalo
          // Ale zde stačí simple state update, React 18 to batchuje.
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin, // Načítáme s předstihem
        threshold: 0.01 // Stačí, aby se dotkl okraje marginu
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div 
      ref={containerRef}
      style={{ minHeight: isVisible ? undefined : height }}
      className={`w-full transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {isVisible ? children : null}
    </div>
  );
};

export default LazySection;