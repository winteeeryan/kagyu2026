"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

type AlbumPhoto = {
  alt: string;
  id: string;
  src: string;
};

type AlbumCard = {
  date: string;
  gallery?: AlbumPhoto[];
  image?: string;
  label: string;
  title: string;
};

type OfficialAlbumGridProps = {
  cards: AlbumCard[];
};

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function OfficialAlbumGrid({ cards }: OfficialAlbumGridProps) {
  const [activeAlbum, setActiveAlbum] = useState<AlbumCard | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  const photos = activeAlbum?.gallery ?? [];
  const activePhoto = photos[activeIndex];

  const closePreview = useCallback(() => {
    setActiveAlbum(null);
    setActiveIndex(0);
    setShowThumbnails(false);
  }, []);

  const showPreviousPhoto = useCallback(() => {
    setActiveIndex((currentIndex) => (photos.length > 0 ? (currentIndex - 1 + photos.length) % photos.length : 0));
  }, [photos.length]);

  const showNextPhoto = useCallback(() => {
    setActiveIndex((currentIndex) => (photos.length > 0 ? (currentIndex + 1) % photos.length : 0));
  }, [photos.length]);

  useEffect(() => {
    if (!activeAlbum) {
      return undefined;
    }

    previouslyFocusedElementRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closePreview();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPreviousPhoto();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNextPhoto();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElementRef.current?.focus();
    };
  }, [activeAlbum, closePreview, showNextPhoto, showPreviousPhoto]);

  const openPreview = (card: AlbumCard) => {
    if (!card.gallery?.length) {
      return;
    }

    setActiveAlbum(card);
    setActiveIndex(0);
    setShowThumbnails(false);
  };

  return (
    <>
      <div className={styles.grid}>
        {cards.map((card) => {
          const hasGallery = Boolean(card.gallery?.length);
          const cardKey = `${card.date}-${card.label}-${card.title}`;

          const cardBody = (
            <>
              <div className={styles.media}>
                {card.image ? (
                  <img alt={card.title} className={styles.albumImage} loading="lazy" src={card.image} />
                ) : (
                  <span aria-hidden="true" className={styles.imagePlaceholder} />
                )}
              </div>
              <div className={styles.cardContent}>
                <span className={styles.eventPill}>{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.date}</p>
              </div>
            </>
          );

          if (hasGallery) {
            return (
              <button
                aria-label={`開啟${card.title}相冊`}
                className={`${styles.card} ${styles.galleryCard}`}
                key={cardKey}
                onClick={() => openPreview(card)}
                type="button"
              >
                {cardBody}
              </button>
            );
          }

          return (
            <article className={styles.card} key={cardKey}>
              {cardBody}
            </article>
          );
        })}
      </div>

      {activeAlbum && activePhoto ? (
        <div
          aria-label={activeAlbum.title}
          aria-modal="true"
          className={styles.previewOverlay}
          onMouseDown={closePreview}
          ref={dialogRef}
          role="dialog"
        >
          <div className={styles.previewTopBar} onMouseDown={(event) => event.stopPropagation()}>
            <button aria-label="上一張" className={styles.previewIconButton} onClick={showPreviousPhoto} type="button">
              <span aria-hidden="true">‹</span>
            </button>
            <span className={styles.previewCounter}>
              {activeIndex + 1} / {photos.length}
            </span>
            <button aria-label="下一張" className={styles.previewIconButton} onClick={showNextPhoto} type="button">
              <span aria-hidden="true">›</span>
            </button>
          </div>

          <div className={styles.previewToolbar} onMouseDown={(event) => event.stopPropagation()}>
            <button
              aria-label={showThumbnails ? "隱藏縮圖" : "顯示縮圖"}
              aria-pressed={showThumbnails}
              className={`${styles.previewTextButton} ${showThumbnails ? styles.previewTextButtonActive : ""}`}
              onClick={() => setShowThumbnails((isVisible) => !isVisible)}
              type="button"
            >
              <svg aria-hidden="true" className={styles.previewButtonIcon} viewBox="0 0 24 24">
                <rect x="4" y="4" width="6" height="6" rx="1" />
                <rect x="14" y="4" width="6" height="6" rx="1" />
                <rect x="4" y="14" width="6" height="6" rx="1" />
                <rect x="14" y="14" width="6" height="6" rx="1" />
              </svg>
              縮圖
            </button>
            <a className={styles.previewTextButton} download href={activePhoto.src}>
              <svg aria-hidden="true" className={styles.previewButtonIcon} viewBox="0 0 24 24">
                <path d="M12 4v10" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 20h14" />
              </svg>
              下載
            </a>
            <button
              aria-label="關閉相冊"
              className={styles.previewCloseButton}
              onClick={closePreview}
              ref={closeButtonRef}
              type="button"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className={styles.previewStage} onMouseDown={(event) => event.stopPropagation()}>
            <img alt={activePhoto.alt} className={styles.previewImage} src={activePhoto.src} />
          </div>

          {showThumbnails ? (
            <aside className={styles.thumbnailRail} onMouseDown={(event) => event.stopPropagation()}>
              {photos.map((photo, index) => (
                <button
                  aria-label={`查看第 ${index + 1} 張`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={styles.thumbnailButton}
                  key={photo.id}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                >
                  <img alt="" className={styles.thumbnailImage} src={photo.src} />
                </button>
              ))}
            </aside>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
