'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * A progressively enhanced metric. The final value is rendered on the server;
 * animation runs once when visible and is skipped for reduced-motion users.
 * @param {{ value: number, prefix?: string, suffix?: string }} props
 */
export function CountUp({ value, prefix = '', suffix = '' }) {
  const elementRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const element = elementRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!element || reduceMotion) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();
        const startedAt = performance.now();
        const duration = 900;

        function animate(now) {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(value * eased));

          if (progress < 1) requestAnimationFrame(animate);
        }

        setDisplayValue(0);
        requestAnimationFrame(animate);
      },
      { threshold: 0.45 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={elementRef} aria-label={`${prefix}${value}${suffix}`}>
      <span aria-hidden="true">
        {prefix}
        {displayValue}
        {suffix}
      </span>
    </span>
  );
}
