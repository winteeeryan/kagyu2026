"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { SpecialEventItem } from "@/data/homepage";
import styles from "./SpecialEventsCarousel.module.css";

type SpecialEventsCarouselProps = {
  items: SpecialEventItem[];
  allEventsHref: string;
};

export function SpecialEventsCarousel({
  items,
  allEventsHref,
}: SpecialEventsCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const node = scrollerRef.current;

    if (!node) {
      return undefined;
    }

    const updateState = () => {
      const maxScrollLeft = node.scrollWidth - node.clientWidth;
      const nextAtStart = node.scrollLeft <= 8;
      const nextAtEnd = maxScrollLeft <= 0 || node.scrollLeft >= maxScrollLeft - 8;

      setIsAtStart(nextAtStart);
      setIsAtEnd(nextAtEnd);
    };

    updateState();
    node.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);

    return () => {
      node.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [items.length]);

  const scrollByAmount = (direction: 1 | -1) => {
    if (!scrollerRef.current) {
      return;
    }

    const width = scrollerRef.current.clientWidth * 0.84;
    scrollerRef.current.scrollBy({ left: width * direction, behavior: "smooth" });
  };

  return (
    <section className={styles.section} aria-labelledby="special-events-heading">
      <div className={styles.heading}>
        <p className="eyebrow">SPECIAL EVENTS</p>
        <h2 className="sectionTitle" id="special-events-heading">
          特別活動
        </h2>
      </div>

      <div className={styles.carousel}>
        <button
          aria-disabled={isAtStart}
          aria-label="向左滑動特別活動"
          className={`${styles.control} ${styles.leftControl} ${
            isAtStart ? styles.controlDisabled : ""
          }`}
          onClick={() => scrollByAmount(-1)}
          type="button"
        >
          <span aria-hidden="true">‹</span>
        </button>

        <div className={styles.scroller} ref={scrollerRef}>
          {items.map((item) => (
            <article className={styles.card} key={item.title}>
              <Link className={styles.cardLink} href={item.href}>
                <div className={styles.media}>
                  <img alt={item.title} className={styles.image} src={item.image} />
                </div>
                <div className={styles.content}>
                  <h3>{item.title}</h3>
                  <p>{item.meta}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {isAtEnd ? (
          <Link
            aria-label="查看全部活動"
            className={`${styles.control} ${styles.rightControl}`}
            href={allEventsHref}
          >
            <span aria-hidden="true" className={styles.dots}>
              ...
            </span>
          </Link>
        ) : (
          <button
            aria-label="向右滑動特別活動"
            className={`${styles.control} ${styles.rightControl}`}
            onClick={() => scrollByAmount(1)}
            type="button"
          >
            <span aria-hidden="true">›</span>
          </button>
        )}
      </div>
    </section>
  );
}
