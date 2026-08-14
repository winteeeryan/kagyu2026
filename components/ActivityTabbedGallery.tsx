"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ActivityCategory } from "@/data/homepage";
import { PosterLightbox } from "./PosterLightbox";
import styles from "./ActivityTabbedGallery.module.css";

type ActivityTabbedGalleryProps = {
  categories: ActivityCategory[];
};

type SelectedPoster = {
  imageAlt: string;
  imageSrc: string;
};

const MAX_ACTIVITY_CARDS = 8;

type EventStatus = "報名中" | "即將開始" | "活動紀錄";

function getDateFromValue(value: string | Date) {
  if (value instanceof Date) {
    return value;
  }

  const dateMatch = value.match(/\d{4}[./-]\d{1,2}[./-]\d{1,2}/);
  if (!dateMatch) {
    return new Date(value);
  }

  const [year, month, day] = dateMatch[0].split(/[./-]/).map(Number);

  return new Date(year, month - 1, day);
}

export function getEventStatus(
  startDate: string | Date,
  endDate: string | Date,
  now = new Date(),
): EventStatus {
  const start = getDateFromValue(startDate);
  const end = getDateFromValue(endDate);
  const threeDaysBeforeStart = new Date(start);

  threeDaysBeforeStart.setDate(start.getDate() - 3);

  if (now > end) {
    return "活動紀錄";
  }

  if (now >= threeDaysBeforeStart && now <= end) {
    return "即將開始";
  }

  return "報名中";
}

function getActivityDateTime(startDate: string) {
  const time = getDateFromValue(startDate).getTime();

  return Number.isFinite(time) ? time : 0;
}

function compareActivitiesByDate(
  first: { dateTime: number; originalIndex: number },
  second: { dateTime: number; originalIndex: number },
) {
  if (first.dateTime !== second.dateTime) {
    return first.dateTime - second.dateTime;
  }

  return first.originalIndex - second.originalIndex;
}

export function ActivityTabbedGallery({
  categories,
}: ActivityTabbedGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedPoster, setSelectedPoster] = useState<SelectedPoster | null>(null);
  const closeLightbox = () => setSelectedPoster(null);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.tabBar}
        role="tablist"
        aria-label="共修活動分類"
      >
        {categories.map((category, index) => {
          const isActive = index === activeIndex;
          const tabId = `activity-tab-${index}`;
          const panelId = `activity-panel-${index}`;

          return (
            <button
              aria-controls={panelId}
              aria-selected={isActive}
              className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
              id={tabId}
              key={category.label}
              onClick={() => setActiveIndex(index)}
              role="tab"
              type="button"
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className={styles.contentContainer}>
        {categories.map((category, index) => {
          const isActive = index === activeIndex;
          const tabId = `activity-tab-${index}`;
          const panelId = `activity-panel-${index}`;

          return (
            <section
              aria-hidden={!isActive}
              aria-labelledby={tabId}
              className={`${styles.panel} ${isActive ? styles.panelActive : styles.panelHidden}`}
              id={panelId}
              key={`${category.label}-panel`}
              role="tabpanel"
            >
              <ActivityCarouselPanel
                category={category}
                isActive={isActive}
                onSelectPoster={setSelectedPoster}
              />
            </section>
          );
        })}
      </div>

      <PosterLightbox
        imageAlt={selectedPoster?.imageAlt ?? ""}
        imageSrc={selectedPoster?.imageSrc}
        isOpen={selectedPoster !== null}
        onClose={closeLightbox}
      />
    </div>
  );
}

function ActivityCarouselPanel({
  category,
  isActive,
  onSelectPoster,
}: {
  category: ActivityCategory;
  isActive: boolean;
  onSelectPoster: (poster: SelectedPoster) => void;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const activities = useMemo(
    () => {
      const indexedActivities = category.items.map((item, originalIndex) => ({
        chronologicalNumber: 0,
        dateTime: getActivityDateTime(item.startDate),
        item,
        originalIndex,
      }));

      const chronologicalActivities = [...indexedActivities].sort(compareActivitiesByDate);

      chronologicalActivities.forEach((activity, index) => {
        activity.chronologicalNumber = index + 1;
      });

      return [...chronologicalActivities]
        .sort((first, second) => {
          if (first.dateTime !== second.dateTime) {
            return second.dateTime - first.dateTime;
          }

          return first.originalIndex - second.originalIndex;
        })
        .slice(0, MAX_ACTIVITY_CARDS);
    },
    [category.items],
  );
  const now = new Date();

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
  }, [activities.length]);

  useEffect(() => {
    if (!isActive || !scrollerRef.current) {
      return;
    }

    const node = scrollerRef.current;
    const maxScrollLeft = node.scrollWidth - node.clientWidth;

    setIsAtStart(node.scrollLeft <= 8);
    setIsAtEnd(maxScrollLeft <= 0 || node.scrollLeft >= maxScrollLeft - 8);
  }, [isActive]);

  const scrollByAmount = (direction: 1 | -1) => {
    if (!scrollerRef.current) {
      return;
    }

    const width = scrollerRef.current.clientWidth * 0.84;
    scrollerRef.current.scrollBy({ left: width * direction, behavior: "smooth" });
  };
  const shouldShowActivityImages =
    category.label === "全國活動" ||
    category.label === "台北中心" ||
    category.label === "高雄中心" ||
    category.label === "花蓮中心";

  const preloadPoster = (imageSrc: string) => {
    const image = new Image();

    image.src = imageSrc;
  };

  if (activities.length === 0) {
    return (
      <div className={styles.emptyState} role="status">
        目前尚無活動排程
      </div>
    );
  }

  return (
    <div className={styles.carousel}>
      <button
        aria-disabled={isAtStart}
        aria-label={`向左滑動 ${category.label}`}
        className={`${styles.control} ${styles.leftControl} ${
          isAtStart ? styles.controlDisabled : ""
        }`}
        onClick={() => scrollByAmount(-1)}
        type="button"
      >
        <span aria-hidden="true">‹</span>
      </button>

      <div className={styles.scroller} ref={scrollerRef}>
        {activities.map(({ chronologicalNumber, item }) => {
          const status = getEventStatus(item.startDate, item.endDate, now);
          const posterThumbnail = item.posterThumbnail ?? item.image;
          const posterFull = item.posterFull ?? item.image;

          return (
            <article className={styles.card} key={`${category.label}-${item.title}-${item.meta}`}>
              <button
                aria-label={`開啟${item.title}活動海報`}
                className={styles.cardButton}
                onClick={() => onSelectPoster({ imageAlt: item.title, imageSrc: posterFull })}
                onFocus={() => preloadPoster(posterFull)}
                onMouseEnter={() => preloadPoster(posterFull)}
                type="button"
              >
                <div className={styles.media}>
                  {shouldShowActivityImages ? (
                    <img
                      alt={item.title}
                      className={styles.activityImage}
                      loading="lazy"
                      src={posterThumbnail}
                    />
                  ) : (
                    <div className={styles.placeholder}>
                      <span className={styles.placeholderIndex}>
                        {String(chronologicalNumber).padStart(2, "0")}
                      </span>
                      <span className={styles.placeholderLabel}>{category.label}</span>
                    </div>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.eventPill}>
                    {status} · {item.center}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.meta}</p>
                </div>
              </button>
            </article>
          );
        })}
      </div>

      {isAtEnd ? (
        <Link
          aria-label={`查看 ${category.label} 全部活動`}
          className={`${styles.control} ${styles.rightControl}`}
          href="/activities/latest"
          rel="noreferrer"
          target="_blank"
        >
          <span aria-hidden="true" className={styles.dots}>
            ...
          </span>
        </Link>
      ) : (
        <button
          aria-label={`向右滑動 ${category.label}`}
          className={`${styles.control} ${styles.rightControl}`}
          onClick={() => scrollByAmount(1)}
          type="button"
        >
          <span aria-hidden="true">›</span>
        </button>
      )}
    </div>
  );
}
