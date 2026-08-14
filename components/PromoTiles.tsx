import Link from "next/link";
import type { PromoTile } from "@/data/homepage";
import styles from "./PromoTiles.module.css";

export function PromoTiles({ tiles }: { tiles: PromoTile[] }) {
  return (
    <section className={styles.section} id="promo-tiles">
      <div className={`container ${styles.grid}`}>
        {tiles.map((tile) => (
          <Link
            className={`${styles.tile} ${
              tile.tone === "dark" ? styles.tileDark : styles.tileLight
            }`}
            href={tile.href}
            key={tile.title}
            rel="noreferrer"
            target="_blank"
          >
            <img className={styles.image} src={tile.image} alt={tile.title} />
            <div className={styles.overlay} />
            <div className={styles.content}>
              <h3>{tile.title}</h3>
              <span>{tile.cta}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
