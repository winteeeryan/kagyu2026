"use client";

import Link from "next/link";
import { useRef } from "react";
import type { ActivityCategory } from "@/data/homepage";
import styles from "./ActivityCarousel.module.css";

type ActivityCarouselProps = {
  category: ActivityCategory;
};

export function ActivityCarousel({ category }: ActivityCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const sectionId = category.href.replace("#", "");

  const scrollByAmount = (direction: 1 | -1) => {
    if (!scrollerRef.current) {
      return;
    }

    const width = scrollerRef.current.clientWidth * 0.86;
    scrollerRef.current.scrollBy({ left: width * direction, behavior: "smooth" });
  };

  return (
    <section
      className={styles.section}
      id={sectionId}
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className={styles.header}>
        <h3 className={styles.title} id={`${sectionId}-heading`}>
          {category.label}
        </h3>
      </div>

      <div className={styles.carousel}>
        <button
          aria-label={`向左滑動 ${category.label}`}
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => scrollByAmount(-1)}
          type="button"
        >
          <span aria-hidden="true">‹</span>
        </button>

        <div className={styles.scroller} ref={scrollerRef}>
          {category.items.map((item) => (
            <article className={styles.card} key={`${category.label}-${item.title}`}>
              <Link className={styles.cardLink} href={item.href}>
                <div className={styles.media}>
                  <img alt={item.title} className={styles.image} src={item.image} />
                </div>
                <div className={styles.content}>
                  <h4>{item.title}</h4>
                  <p>{item.meta}</p>
                </div>
              </Link>
            </article>
          ))}

          <Link className={`${styles.card} ${styles.moreCard}`} href={category.href}>
            <span className={styles.moreLabel}>更多活動</span>
            <span className={styles.moreHint}>View More</span>
          </Link>
        </div>

        <button
          aria-label={`向右滑動 ${category.label}`}
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => scrollByAmount(1)}
          type="button"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </section>
  );
}
