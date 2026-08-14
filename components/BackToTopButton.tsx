"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./BackToTopButton.module.css";

const showAfterScrollY = 360;

function canPageScroll() {
  return document.documentElement.scrollHeight > window.innerHeight + 80;
}

export function BackToTopButton() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(canPageScroll() && window.scrollY > showAfterScrollY);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <button
      aria-label="返回最上方"
      className={`${styles.button} ${visible ? styles.visible : ""}`}
      onClick={scrollToTop}
      tabIndex={visible ? 0 : -1}
      type="button"
    >
      <svg aria-hidden="true" className={styles.icon} viewBox="0 0 24 24">
        <path d="M6 15 12 9l6 6" />
      </svg>
    </button>
  );
}
