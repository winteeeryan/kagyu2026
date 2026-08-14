"use client";

import { useEffect, useState } from "react";
import styles from "./PreviewImage.module.css";

type PreviewImageProps = {
  alt: string;
  src: string;
};

export function PreviewImage({ alt, src }: PreviewImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        aria-label={`放大檢視：${alt}`}
        className={styles.trigger}
        onClick={() => setOpen(true)}
        type="button"
      >
        <img alt={alt} src={src} />
      </button>

      {open ? (
        <div
          aria-label="圖片預覽"
          className={styles.overlay}
          onClick={() => setOpen(false)}
          role="dialog"
        >
          <div className={styles.canvas}>
            <img alt={alt} className={styles.fullImage} src={src} />
          </div>
        </div>
      ) : null}
    </>
  );
}
