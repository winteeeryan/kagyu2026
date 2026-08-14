"use client";

import { useRef } from "react";
import styles from "./HorizontalScroller.module.css";

type HorizontalScrollerProps = {
  children: React.ReactNode;
};

export function HorizontalScroller({ children }: HorizontalScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: 1 | -1) => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth * 0.82;
    containerRef.current.scrollBy({ left: width * direction, behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
      <button
        aria-label="Scroll left"
        className={`${styles.arrow} ${styles.left}`}
        onClick={() => scrollByAmount(-1)}
        type="button"
      >
        ‹
      </button>
      <div className={styles.scroller} ref={containerRef}>
        {children}
      </div>
      <button
        aria-label="Scroll right"
        className={`${styles.arrow} ${styles.right}`}
        onClick={() => scrollByAmount(1)}
        type="button"
      >
        ›
      </button>
    </div>
  );
}
