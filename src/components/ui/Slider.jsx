"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import styles from "./Slider.module.css";

// Small, dependency-free slider: one slide rendered at a time with a fade
// transition, arrow + dot navigation, autoplay that pauses on hover/focus
// and respects prefers-reduced-motion.
export default function Slider({
  slides,
  autoPlay = false,
  interval = 7000,
  variant = "light",
  ariaLabel = "Slides",
  className = "",
  insetArrows = false,
  overlayDots = false,
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (!autoPlay || paused || reducedMotion.current || slides.length <= 1) return undefined;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [autoPlay, paused, interval, slides.length]);

  function go(next) {
    setIndex((i) => (i + next + slides.length) % slides.length);
  }

  const onDark = variant === "dark";

  return (
    <div
      className={`${styles.wrap} ${className}`.trim()}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={styles.viewport}>
        <div className={styles.slide} key={index}>
          {slides[index]}
        </div>
      </div>

      {slides.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            className={`${styles.arrow} ${styles.arrowPrev} ${onDark ? styles.arrowOnDark : ""} ${insetArrows ? styles.arrowInset : ""}`}
            onClick={() => go(-1)}
          >
            <Icon name="chevron-right" size={18} style={{ transform: "rotate(180deg)" }} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            className={`${styles.arrow} ${styles.arrowNext} ${onDark ? styles.arrowOnDark : ""} ${insetArrows ? styles.arrowInset : ""}`}
            onClick={() => go(1)}
          >
            <Icon name="chevron-right" size={18} />
          </button>
          <div
            className={`${styles.dots} ${onDark ? styles.dotsOnDark : ""} ${overlayDots ? styles.dotsOverlay : ""}`}
          >
            {slides.map((_, i) => (
              <button
                type="button"
                key={i}
                className={styles.dot}
                data-active={i === index}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
