"use client";

import { useEffect, useRef, useState } from "react";

// Parses values like "500+", "9+", "20" into a numeric target plus a suffix,
// then animates the count up once the stat scrolls into view.
export default function StatCounter({ value, duration = 1400, className = "" }) {
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState(target === null ? value : 0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (target === null) return undefined;
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();

          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - (1 - progress) * (1 - progress);
            setDisplay(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={`stat-value ${className}`.trim()}>
      {display}
      {suffix}
    </span>
  );
}
