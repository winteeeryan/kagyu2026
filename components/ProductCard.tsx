import Link from "next/link";
import type { Product } from "@/data/homepage";
import { getLinkBehavior } from "@/utils/linkBehavior";
import styles from "./ProductCard.module.css";

export function ProductCard({ product }: { product: Product }) {
  const media = (
    <>
      <img className={styles.image} src={product.image} alt={product.title} />
      {product.hoverImage ? (
        <img
          className={`${styles.image} ${styles.hoverImage}`}
          src={product.hoverImage}
          alt=""
        />
      ) : null}
    </>
  );

  return (
    <article className={styles.card}>
      {product.href === "#" ? (
        <div className={styles.media}>{media}</div>
      ) : (
        <Link className={styles.media} href={product.href} {...getLinkBehavior(product.href)}>
          {media}
        </Link>
      )}
      <div className={styles.content}>
        <h3>{product.title}</h3>
        <p className={styles.price}>
          {product.compareAt ? <s>{product.compareAt}</s> : null}
          <span>{product.price}</span>
        </p>
      </div>
    </article>
  );
}
