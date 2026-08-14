"use client";

import { useState } from "react";
import pageStyles from "../../page.module.css";

type ProductImageGalleryProps = {
  images: string[];
  title: string;
  transforms?: string[];
};

export function ProductImageGallery({ images, title, transforms }: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];
  const activeTransform = transforms?.[activeIndex];

  return (
    <div className={pageStyles.productImageGallery}>
      <div className={pageStyles.productThumbnailRail} aria-label={`${title} 圖片預覽`}>
        {images.map((image, index) => (
          <button
            aria-label={`查看${title}產品圖 ${index + 1}`}
            aria-pressed={index === activeIndex}
            className={pageStyles.productThumbnailButton}
            key={image}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <img alt="" src={image} />
          </button>
        ))}
      </div>

      <figure className={pageStyles.productImageGalleryPrimary}>
        <img
          alt={`${title} 產品圖 ${activeIndex + 1}`}
          src={activeImage}
          style={activeTransform ? { transform: activeTransform } : undefined}
        />
      </figure>
    </div>
  );
}
