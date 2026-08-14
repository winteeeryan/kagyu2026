"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ListedActivity } from "@/app/activities/activityData";
import shopStyles from "@/app/support-volunteer/charity-shop/page.module.css";
import { PosterLightbox } from "@/components/PosterLightbox";
import styles from "./page.module.css";

type ActivityListingGridProps = {
  activities: ListedActivity[];
  archiveHref: string;
  archiveLabel: string;
  categories: string[];
  emptyMessage: string;
};

type SelectedPoster = {
  imageAlt: string;
  imageSrc: string;
};

export function ActivityListingGrid({
  activities,
  archiveHref,
  archiveLabel,
  categories,
  emptyMessage,
}: ActivityListingGridProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedPoster, setSelectedPoster] = useState<SelectedPoster | null>(null);
  const visibleActivities = useMemo(() => {
    if (!activeCategory) {
      return activities;
    }

    return activities.filter((item) => item.category === activeCategory);
  }, [activeCategory, activities]);
  const closeLightbox = () => setSelectedPoster(null);
  const preloadPoster = (imageSrc: string) => {
    const image = new Image();

    image.src = imageSrc;
  };

  return (
    <>
      <div className={shopStyles.categorySwitch} aria-label="最新活動分類">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              aria-pressed={isActive}
              className={`${shopStyles.switchLink} ${styles.filterButton}`}
              key={category}
              onClick={() => setActiveCategory(isActive ? null : category)}
              type="button"
            >
              {category}
            </button>
          );
        })}
      </div>

      {visibleActivities.length > 0 ? (
        <div className={`${shopStyles.categoryGrid} ${styles.latestGrid}`}>
          {visibleActivities.map((item, index) => {
            const posterThumbnail = item.posterThumbnail ?? item.image;
            const posterFull = item.posterFull ?? item.image;

            return (
              <button
                aria-label={`開啟${item.title}活動海報`}
                className={`${shopStyles.categoryCard} ${styles.latestCard}`}
                key={`${item.title}-${item.startDate}-${item.category}-${index}`}
                onClick={() => setSelectedPoster({ imageAlt: item.title, imageSrc: posterFull })}
                onFocus={() => preloadPoster(posterFull)}
                onMouseEnter={() => preloadPoster(posterFull)}
                type="button"
              >
                <div className={shopStyles.categoryMedia}>
                  {item.image ? (
                    <img alt="" className={shopStyles.categoryImage} src={posterThumbnail} />
                  ) : (
                    <div aria-hidden="true" className={shopStyles.categoryPlaceholder}>
                      {item.title}
                    </div>
                  )}
                </div>
                <div className={`${shopStyles.categoryContent} ${styles.latestContent}`}>
                  <time className={styles.date} dateTime={item.startDate}>
                    {item.meta}
                  </time>
                  <h2 className={styles.articleTitle}>{item.title}</h2>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <p className={styles.emptyState}>{emptyMessage}</p>
      )}

      <nav className={styles.archiveNav} aria-label="活動頁面導覽">
        <Link className={styles.archiveNavLink} href={archiveHref} rel="noreferrer" target="_blank">
          <span>{archiveLabel}</span>
        </Link>
      </nav>

      <PosterLightbox
        imageAlt={selectedPoster?.imageAlt ?? ""}
        imageSrc={selectedPoster?.imageSrc}
        isOpen={selectedPoster !== null}
        onClose={closeLightbox}
      />
    </>
  );
}
