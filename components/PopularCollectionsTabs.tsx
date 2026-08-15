import Link from "next/link";
import type { PopularCollectionGroup } from "@/data/homepage";
import styles from "./PopularCollectionsTabs.module.css";

type PopularCollectionsTabsProps = {
  groups: PopularCollectionGroup[];
};

export function PopularCollectionsTabs({
  groups,
}: PopularCollectionsTabsProps) {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.collectionNav} aria-label="義賣商店分類">
        {groups.map((group) => (
          <Link className={styles.collectionCard} href={group.href} key={group.label}>
            <div className={styles.collectionMedia}>
              {group.image ? (
                <img alt="" className={styles.collectionImage} src={group.image} />
              ) : (
                <div className={styles.collectionPlaceholder} aria-hidden="true">
                  {group.label}
                </div>
              )}
            </div>
            <div className={styles.collectionContent}>
              <h3>
                {group.label}
                <sup>{group.count}</sup>
              </h3>
              <span>查看分類</span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
