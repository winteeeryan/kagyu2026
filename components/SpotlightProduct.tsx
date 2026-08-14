"use client";

import { useState } from "react";
import styles from "./SpotlightProduct.module.css";

type SpotlightProductProps = {
  heading: string;
  name: string;
  price: string;
  compareAt: string;
  images: string[];
  description: string[];
};

export function SpotlightProduct({
  heading,
  name,
  price,
  compareAt,
  images,
  description,
}: SpotlightProductProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <section className={styles.section} id="revealed-treasures">
      <div className="container">
        <h2 className="sectionTitle">{heading}</h2>
        <div className={styles.grid}>
          <div className={styles.gallery}>
            <div className={styles.mainImageWrap}>
              <img className={styles.mainImage} src={images[activeImage]} alt={name} />
            </div>
            <div className={styles.thumbnailRow}>
              {images.map((image, index) => (
                <button
                  aria-label={`View image ${index + 1}`}
                  className={`${styles.thumbButton} ${
                    activeImage === index ? styles.thumbActive : ""
                  }`}
                  key={image}
                  onClick={() => setActiveImage(index)}
                  type="button"
                >
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          </div>

          <div className={styles.content}>
            <p className={styles.productName}>{name}</p>
            <p className={styles.price}>
              <s>{compareAt}</s>
              <span>{price}</span>
            </p>
            <div className={styles.purchaseRow}>
              <div className={styles.quantity}>
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  type="button"
                >
                  −
                </button>
                <span>{quantity}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((value) => value + 1)}
                  type="button"
                >
                  +
                </button>
              </div>
              <button className="button" type="button">
                Add to cart
              </button>
            </div>
            <div className={styles.copy}>
              {description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <span className={styles.link}>
              View product
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
