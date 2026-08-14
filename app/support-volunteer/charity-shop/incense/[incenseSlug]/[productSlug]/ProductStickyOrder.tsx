"use client";

import { useEffect, useState } from "react";
import pageStyles from "../../../page.module.css";

type ProductStickyOrderProps = {
  categoryTitle: string;
  image: string;
  productTitle: string;
  triggerId: string;
};

export function ProductStickyOrder({
  categoryTitle,
  image,
  productTitle,
  triggerId,
}: ProductStickyOrderProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById(triggerId);

    if (!trigger) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });

    observer.observe(trigger);

    return () => observer.disconnect();
  }, [triggerId]);

  return (
    <aside
      aria-label="請購操作列"
      aria-hidden={!isVisible}
      className={`${pageStyles.stickyOrderBar} ${
        isVisible ? pageStyles.stickyOrderBarVisible : ""
      }`}
    >
      <div className={pageStyles.stickyProductSummary}>
        {image ? <img alt="" src={image} /> : null}
        <div>
          <span>{categoryTitle}</span>
          <strong>{productTitle}</strong>
        </div>
      </div>
      <a className={pageStyles.stickyOrderButton} href="#purchase-flow" tabIndex={isVisible ? 0 : -1}>
        請購／結緣
      </a>
    </aside>
  );
}
