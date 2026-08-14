"use client";

import { useEffect, useState } from "react";
import styles from "./CalligraphyCollage.module.css";

const collageImages = [
  { alt: "大寶法王墨寶作品 1", className: styles.itemOne, src: "/karmapa/caligraphy002.jpg" },
  { alt: "大寶法王墨寶作品 2", className: styles.itemTwo, src: "/karmapa/caligraphy004.jpg" },
  { alt: "大寶法王墨寶作品 3", className: styles.itemThree, src: "/karmapa/caligraphy005.jpg" },
  { alt: "大寶法王墨寶作品 4", className: styles.itemFour, src: "/karmapa/caligraphy003.jpg" },
  { alt: "大寶法王墨寶作品 5", className: styles.itemFive, src: "/karmapa/caligraphy006.jpg" },
  { alt: "大寶法王墨寶作品 6", className: styles.itemSix, src: "/karmapa/caligraphy007.jpg" },
  { alt: "大寶法王墨寶作品 7", className: styles.itemSeven, src: "/karmapa/caligraphy008.jpg" },
  { alt: "大寶法王墨寶作品 8", className: styles.itemEight, src: "/karmapa/caligraphy009.jpg" },
];

export function CalligraphyCollage() {
  const [activeImage, setActiveImage] = useState<(typeof collageImages)[number] | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  const openLightbox = (image: (typeof collageImages)[number]) => {
    setActiveImage(image);
    window.requestAnimationFrame(() => setIsLightboxOpen(true));
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    window.setTimeout(() => setActiveImage(null), 300);
  };

  return (
    <section className={styles.section} aria-label="大寶法王墨寶作品">
      <div className={styles.grid}>
        {collageImages.map((image) => (
          <button
            aria-label={`放大檢視${image.alt}`}
            className={`${styles.item} ${image.className}`}
            key={image.src}
            onClick={() => openLightbox(image)}
            type="button"
          >
            <img alt={image.alt} src={image.src} />
          </button>
        ))}
      </div>

      <div
        aria-hidden={!activeImage}
        className={`${styles.lightbox}${isLightboxOpen ? ` ${styles.lightboxOpen}` : ""}`}
        onClick={closeLightbox}
      >
        {activeImage ? (
          <img
            alt={activeImage.alt}
            className={styles.lightboxImage}
            src={activeImage.src}
          />
        ) : null}
      </div>
    </section>
  );
}
