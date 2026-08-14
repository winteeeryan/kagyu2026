"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./VolunteerActivityCarousel.module.css";

type VolunteerActivity = {
  date?: string;
  href?: string;
  image?: string;
  meta: string;
  title: string;
};

type VolunteerActivityCarouselProps = {
  items: VolunteerActivity[];
};

function getActivityTime(item: VolunteerActivity) {
  const value = item.date || item.meta;
  const dateMatch = value.match(/\d{4}[./-]\d{1,2}[./-]\d{1,2}/);

  if (!dateMatch) {
    return 0;
  }

  const [year, month, day] = dateMatch[0].split(/[./-]/).map(Number);

  const time = new Date(year, month - 1, day).getTime();

  return Number.isFinite(time) ? time : 0;
}

function compareActivitiesByDate(
  first: { originalIndex: number; time: number },
  second: { originalIndex: number; time: number },
) {
  if (first.time !== second.time) {
    return first.time - second.time;
  }

  return first.originalIndex - second.originalIndex;
}

export function VolunteerActivityCarousel({
  items,
}: VolunteerActivityCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const sortedItems = useMemo(() => {
    const indexedItems = items.map((item, originalIndex) => ({
      chronologicalNumber: 0,
      item,
      originalIndex,
      time: getActivityTime(item),
    }));

    const chronologicalItems = [...indexedItems].sort(compareActivitiesByDate);

    chronologicalItems.forEach((activity, index) => {
      activity.chronologicalNumber = index + 1;
    });

    return [...chronologicalItems].sort((first, second) => {
      if (first.time !== second.time) {
        return second.time - first.time;
      }

      return first.originalIndex - second.originalIndex;
    });
  }, [items]);

  useEffect(() => {
    const node = scrollerRef.current;

    if (!node) {
      return undefined;
    }

    const updateState = () => {
      const maxScrollLeft = node.scrollWidth - node.clientWidth;

      setIsAtStart(node.scrollLeft <= 8);
      setIsAtEnd(maxScrollLeft <= 0 || node.scrollLeft >= maxScrollLeft - 8);
    };

    updateState();
    node.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);

    return () => {
      node.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [sortedItems.length]);

  const scrollByAmount = (direction: 1 | -1) => {
    if (!scrollerRef.current) {
      return;
    }

    const width = scrollerRef.current.clientWidth * 0.84;
    scrollerRef.current.scrollBy({ behavior: "smooth", left: width * direction });
  };

  return (
    <div className={styles.carousel}>
      <button
        aria-disabled={isAtStart}
        aria-label="向左滑動義工勸募專案"
        className={`${styles.control} ${styles.leftControl} ${
          isAtStart ? styles.controlDisabled : ""
        }`}
        onClick={() => scrollByAmount(-1)}
        type="button"
      >
        <span aria-hidden="true">‹</span>
      </button>

      <div className={styles.scroller} ref={scrollerRef}>
        {sortedItems.map(({ chronologicalNumber, item }) => {
          const content = (
            <>
              <div className={styles.media}>
                {item.image ? (
                  <img
                    alt={item.title}
                    className={styles.activityImage}
                    loading="lazy"
                    src={item.image}
                  />
                ) : (
                  <div className={styles.placeholder}>
                    <span className={styles.placeholderIndex}>
                      {String(chronologicalNumber).padStart(2, "0")}
                    </span>
                    <span className={styles.placeholderLabel}>FUNDRAISING PROJECT</span>
                  </div>
                )}
              </div>
              <div className={styles.cardContent}>
                <h3>{item.title}</h3>
                <p>{item.meta}</p>
              </div>
            </>
          );

          return (
            <article className={styles.card} key={`${item.title}-${chronologicalNumber}`}>
              {item.href ? (
                <Link
                  aria-label={`前往${item.title}`}
                  className={styles.cardLink}
                  href={item.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {content}
                </Link>
              ) : (
                content
              )}
            </article>
          );
        })}
      </div>

      <button
        aria-disabled={isAtEnd}
        aria-label="向右滑動義工勸募專案"
        className={`${styles.control} ${styles.rightControl} ${
          isAtEnd ? styles.controlDisabled : ""
        }`}
        onClick={() => scrollByAmount(1)}
        type="button"
      >
        <span aria-hidden="true">›</span>
      </button>
    </div>
  );
}
