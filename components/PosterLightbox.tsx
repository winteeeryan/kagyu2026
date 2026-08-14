"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./PosterLightbox.module.css";

type PosterLightboxProps = {
  imageAlt: string;
  imageSrc?: string;
  isOpen: boolean;
  onClose: () => void;
};

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function PosterLightbox({
  imageAlt,
  imageSrc,
  isOpen,
  onClose,
}: PosterLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    previouslyFocusedElementRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
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
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElementRef.current?.focus();
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    setIsLoaded(false);
  }, [imageSrc]);

  if (!isOpen || !imageSrc) {
    return null;
  }

  return (
    <div
      aria-modal="true"
      className={styles.overlay}
      onMouseDown={onClose}
      ref={dialogRef}
      role="dialog"
    >
      <button
        aria-label="Close poster"
        className={styles.closeButton}
        onClick={onClose}
        ref={closeButtonRef}
        type="button"
      >
        <span aria-hidden="true">×</span>
      </button>

      <div className={styles.posterStage} onMouseDown={(event) => event.stopPropagation()}>
        {!isLoaded ? <div aria-label="Loading poster" className={styles.spinner} role="status" /> : null}
        <img
          alt={imageAlt}
          className={`${styles.posterImage} ${isLoaded ? styles.posterImageLoaded : ""}`}
          onLoad={() => setIsLoaded(true)}
          src={imageSrc}
        />
      </div>
    </div>
  );
}
