"use client";

import { useState } from "react";
import type { Product } from "@/data/homepage";
import { HorizontalScroller } from "./HorizontalScroller";
import { ProductCard } from "./ProductCard";
import styles from "./ProductTabs.module.css";

type ProductTabsProps = {
  tabs: {
    label: string;
    items: Product[];
  }[];
};

export function ProductTabs({ tabs }: ProductTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[activeIndex];

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabList} role="tablist" aria-label="Product collections">
        {tabs.map((tab, index) => (
          <button
            aria-selected={activeIndex === index}
            className={`${styles.tab} ${activeIndex === index ? styles.active : ""}`}
            key={tab.label}
            onClick={() => setActiveIndex(index)}
            role="tab"
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <HorizontalScroller>
        {activeTab.items.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </HorizontalScroller>
    </div>
  );
}
